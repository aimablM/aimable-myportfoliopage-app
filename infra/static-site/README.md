# infra/static-site

Terraform root for the production portfolio site on S3 + CloudFront.

Separate from the old `infra/` root (EC2/VPC) on purpose: that stack keeps
running untouched, serving `aimablem.dev`, until cutover - see
`docs/migration/01-portfolio-s3.md` for the full plan and
`docs/migration/01-portfolio-s3-runbook.md` for the step-by-step bootstrap,
test, and cutover commands.

## Quick reference

- State: S3 backend, bucket `aimable-terraform-state`, native lockfile
  locking (needs local Terraform >= 1.10).
- `point_dns` defaults to `false`: the distribution stays alias-less and on
  CloudFront's default cert so it can be fully stood up and tested at its
  own `*.cloudfront.net` URL before it ever touches production DNS.
- Deploys run via GitHub Actions OIDC (`aws_iam_role.deploy`) - no stored
  AWS keys.
