output "bucket_name" {
  description = "S3 bucket holding the built site - the sync target for deploy-s3.yml."
  value       = aws_s3_bucket.site.id
}

output "distribution_id" {
  description = "CloudFront distribution ID - used for the cache invalidation step in deploy-s3.yml."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "The *.cloudfront.net domain for this distribution - used to validate the site before DNS cutover (point_dns = true)."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "deploy_role_arn" {
  description = "IAM role deploy-s3.yml assumes via OIDC - goes in the AWS_ROLE_ARN repo variable."
  value       = aws_iam_role.deploy.arn
}
