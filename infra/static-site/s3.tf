# Private origin bucket for the built React app (npm run build output).
# Not configured as an S3 website endpoint: CloudFront talks to it as a
# private REST origin via Origin Access Control, which is what lets us block
# all public access on the bucket itself (see aws_s3_bucket_public_access_block
# below) while still serving the site publicly through CloudFront.
resource "aws_s3_bucket" "site" {
  bucket = var.bucket_name
}

# BucketOwnerEnforced disables ACLs entirely - object ownership is always the
# bucket owner, and access is controlled purely by the bucket policy below.
# This is the AWS-recommended default for new buckets and is required for
# some of the stricter bucket-policy patterns (no ACL-based grants to worry
# about alongside the policy).
resource "aws_s3_bucket_ownership_controls" "site" {
  bucket = aws_s3_bucket.site.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

# Belt-and-suspenders: even though the bucket policy only ever grants access
# to the CloudFront service principal, this blocks every path (ACLs, bucket
# policy public grants, cross-account public access) that could otherwise
# expose the bucket directly over the public internet.
resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Grants read access to exactly one principal (the CloudFront service) and
# pins it to exactly one distribution via the AWS:SourceArn condition - so
# even another CloudFront distribution in this same account couldn't read
# this bucket's objects, only the one this stack creates.
resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipalReadOnly"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.site.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.site.arn
          }
        }
      }
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.site]
}
