# GitHub's OIDC provider for Actions. AWS allows only one OIDC provider per
# issuer URL per account, so this is toggleable in case a provider for
# token.actions.githubusercontent.com already exists (e.g. created by
# another repo's stack) - set create_oidc_provider = false and this stack
# will reference that existing provider instead of trying to recreate it.
resource "aws_iam_openid_connect_provider" "github" {
  count = var.create_oidc_provider ? 1 : 0

  url            = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]

  # AWS validates GitHub's endpoint directly against its own trusted CA
  # bundle now, so this thumbprint is effectively a formality the provider
  # resource still requires - it's GitHub's well-known OIDC thumbprint, not
  # a secret.
  thumbprint_list = ["1c58a3a8518e8759bf075b76b750d4f2df264fcd"]
}

locals {
  oidc_provider_arn = var.create_oidc_provider ? aws_iam_openid_connect_provider.github[0].arn : "arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/token.actions.githubusercontent.com"
}

# Trust policy pins the role to exactly one repo and one ref, so a workflow
# run on any other branch (or any other repo) can't assume it - no long-lived
# AWS access keys ever sit in GitHub secrets for this deploy.
resource "aws_iam_role" "deploy" {
  name = "${var.bucket_name}-github-deploy"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = { Federated = local.oidc_provider_arn }
        Action    = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
          }
          StringLike = {
            "token.actions.githubusercontent.com:sub" = "repo:${var.github_repo}:ref:refs/heads/${var.github_branch}"
          }
        }
      }
    ]
  })
}

# Least privilege: only what deploy-s3.yml's two `aws s3 sync` passes and
# final invalidation actually need, scoped to this one bucket and this one
# distribution - nothing account-wide.
resource "aws_iam_role_policy" "deploy" {
  name = "deploy-policy"
  role = aws_iam_role.deploy.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid      = "ListBucket"
        Effect   = "Allow"
        Action   = "s3:ListBucket"
        Resource = aws_s3_bucket.site.arn
      },
      {
        Sid      = "ReadWriteObjects"
        Effect   = "Allow"
        Action   = ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"]
        Resource = "${aws_s3_bucket.site.arn}/*"
      },
      {
        Sid      = "InvalidateThisDistribution"
        Effect   = "Allow"
        Action   = "cloudfront:CreateInvalidation"
        Resource = aws_cloudfront_distribution.site.arn
      }
    ]
  })
}
