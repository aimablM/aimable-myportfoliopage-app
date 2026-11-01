variable "aws_region" {
  description = "Region for the S3 bucket and every other resource in this stack. CloudFront itself is global, but ACM certs used by CloudFront must live in us-east-1 regardless of this value - see data.tf."
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Apex domain of the site. The www host is derived from this (www.<domain_name>)."
  type        = string
  default     = "aimablem.dev"
}

variable "bucket_name" {
  description = "Name of the private S3 bucket that holds the built React app. Must be globally unique across all AWS accounts."
  type        = string
  default     = "aimablem-dev-portfolio-site"
}

variable "github_repo" {
  description = "GitHub repo (org/name) allowed to assume the deploy role via OIDC."
  type        = string
  default     = "aimablM/aimable-myportfoliopage-app"
}

variable "github_branch" {
  description = "Branch that deploy-s3.yml runs on; only this ref is trusted by the deploy role."
  type        = string
  default     = "main"
}

variable "create_oidc_provider" {
  description = <<-DESC
    Whether to create the GitHub Actions OIDC provider (token.actions.githubusercontent.com)
    in this AWS account. AWS only allows one OIDC provider per issuer URL per account, so set
    this to false if a provider for GitHub Actions already exists (e.g. created by another
    stack) and this resource would otherwise collide with it.
  DESC
  type        = bool
  default     = true
}

variable "point_dns" {
  description = <<-DESC
    Whether this stack claims the production domain.

    Defaults to false so `terraform apply` succeeds while aimablem.dev and
    www.aimablem.dev are still aliased to the OLD CloudFront distribution
    (created by hand, outside Terraform) - CloudFront refuses to let two
    distributions hold the same alternate domain name at once, so this stack
    stays alias-less and cert-less (reachable only at its own *.cloudfront.net
    domain) until you're ready to cut over.

    Flip to true only after removing aimablem.dev / www.aimablem.dev from the
    old distribution's aliases - that's what both adds the real aliases +
    ACM cert to this distribution AND creates the Route 53 records pointing
    at it.
  DESC
  type        = bool
  default     = false
}
