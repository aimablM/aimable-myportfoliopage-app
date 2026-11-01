# Gated behind point_dns, same as the distribution's aliases: these records
# currently point at the OLD CloudFront distribution's alias target, and
# must stay that way until the cutover step explicitly asks for them.
# allow_overwrite = true because Terraform doesn't own the existing records
# (they were created outside this stack) - without it, apply would fail
# trying to create a record that already exists instead of replacing it.

resource "aws_route53_record" "apex_a" {
  count           = var.point_dns ? 1 : 0
  zone_id         = data.aws_route53_zone.this.zone_id
  name            = var.domain_name
  type            = "A"
  allow_overwrite = true

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "apex_aaaa" {
  count           = var.point_dns ? 1 : 0
  zone_id         = data.aws_route53_zone.this.zone_id
  name            = var.domain_name
  type            = "AAAA"
  allow_overwrite = true

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_a" {
  count           = var.point_dns ? 1 : 0
  zone_id         = data.aws_route53_zone.this.zone_id
  name            = "www.${var.domain_name}"
  type            = "A"
  allow_overwrite = true

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_aaaa" {
  count           = var.point_dns ? 1 : 0
  zone_id         = data.aws_route53_zone.this.zone_id
  name            = "www.${var.domain_name}"
  type            = "AAAA"
  allow_overwrite = true

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
