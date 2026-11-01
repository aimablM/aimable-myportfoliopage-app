# Origin Access Control: lets CloudFront sign requests to the private S3
# origin with SigV4, so the bucket can grant access to "this CloudFront
# distribution" specifically (via the SourceArn condition in s3.tf) instead
# of to a static, shareable OAI identity.
resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "${var.bucket_name}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100" # North America + Europe edge locations only - cheapest tier, fine for this audience
  http_version        = "http2and3"
  comment             = "aimablem.dev portfolio - S3 + CloudFront"

  # See the long comment on var.point_dns: the old (non-Terraform)
  # distribution still owns these two hostnames today. Until it's released,
  # this distribution has to stay alias-less or `terraform apply` fails with
  # CNAMEAlreadyExists.
  aliases = var.point_dns ? [var.domain_name, "www.${var.domain_name}"] : []

  origin {
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id                = "s3-site"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "s3-site"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    cache_policy_id            = data.aws_cloudfront_cache_policy.caching_optimized.id
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.security_headers.id
  }

  # The app has exactly one real route ("/" - see src/App.js, confirmed
  # during the repo review); React Router renders everything else, including
  # the 404 page, client-side. The S3 origin is a private REST endpoint (not
  # a website endpoint), so a missing key comes back as 403 rather than 404 -
  # both get rewritten to index.html (kept at HTTP 200... actually 404, see
  # below) so the browser always gets the SPA shell and React Router can
  # decide what to render instead of the viewer seeing a raw S3 XML error.
  #
  # response_code is set to 404 (not 200) on purpose: it keeps real junk
  # paths reporting as "not found" to crawlers/monitoring/curl -I, which
  # matters for the "hit /asdf and confirm the 404 fallback" smoke test in
  # the runbook - a 200 there would look like a broken/overly-permissive
  # catch-all instead of an intentional SPA fallback.
  custom_error_response {
    error_code         = 403
    response_code      = 404
    response_page_path = "/index.html"
  }
  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Before cutover (point_dns = false): no aliases are set above, so the only
  # way to reach this distribution is its own *.cloudfront.net domain, which
  # CloudFront always serves over TLS using ITS OWN default certificate.
  # Attaching our aimablem.dev ACM cert here anyway would make that
  # *.cloudfront.net hostname fail TLS validation (the cert doesn't cover
  # it) - breaking the "test on the cloudfront.net URL first" step in the
  # runbook. So the viewer cert flips in lockstep with aliases/point_dns.
  viewer_certificate {
    cloudfront_default_certificate = var.point_dns ? false : true
    acm_certificate_arn            = var.point_dns ? data.aws_acm_certificate.site.arn : null
    ssl_support_method             = var.point_dns ? "sni-only" : null
    minimum_protocol_version       = var.point_dns ? "TLSv1.2_2021" : null
  }
}
