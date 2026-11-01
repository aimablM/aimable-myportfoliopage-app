# Portfolio S3 + CloudFront migration — follow-up

Status as of 2026-11-01: **cutover complete.** `aimablem.dev` and
`www.aimablem.dev` are live on S3 + CloudFront. This doc records what
actually shipped (vs. the original plan in
[01-portfolio-s3.md](./01-portfolio-s3.md)) and what's still open.

## What's live

| Resource | Value |
|---|---|
| S3 bucket | `aimablem-dev-portfolio-site` |
| CloudFront distribution | `E14BBL7MOYCITE` (`d3djb87p7dzto4.cloudfront.net`) |
| Deploy role (GitHub OIDC) | `arn:aws:iam::054037110265:role/aimablem-dev-portfolio-site-github-deploy` |
| Terraform root | `infra/static-site/` |
| Terraform state | `s3://aimable-terraform-state/static-site/terraform.tfstate` (native lockfile — needs local Terraform >= 1.10) |
| Deploy workflow | `.github/workflows/deploy-s3.yml` (OIDC, triggers on push to `main`) |
| GitHub PR | [#5](https://github.com/aimablM/aimable-myportfoliopage-app/pull/5), merged as `480cc36` |

## Deviations from the original plan (and why)

The plan in `01-portfolio-s3.md` described the "before" state as plain
EC2 with A records pointed straight at it. The actual repo review turned
up a different starting point, which changed a few details of what got
built:

- **An old, hand-created CloudFront distribution was already in front of
  EC2** (`E2TZLAJVIUGMCF`, origin `origin.aimablem.dev` → `54.175.202.246`),
  not in Terraform. Because CloudFront won't let two distributions share
  an alternate domain name, the new distribution's `aliases` and
  `viewer_certificate` are gated behind the `point_dns` variable instead
  of hardcoded — they stay empty/default-cert until cutover.
- **An ACM cert for both domains already existed and was ISSUED.** Per
  discussion, the new distribution **reuses it via a data source**
  (`data.aws_acm_certificate` in `data.tf`) rather than requesting a new
  Terraform-owned one. Trade-off: no validation wait, but Terraform
  doesn't own the cert's lifecycle — see the open item below.
- **The Terraform state bucket (`aimable-terraform-state`) already
  existed**, correctly configured (versioned, fully public-access-blocked),
  so the bootstrap step was a no-op.
- **`.github/workflows/deploy-s3.yml` already existed** before this work
  started and matched the plan's spec, so it was kept as-is rather than
  rewritten.
- **Local Terraform was 1.5.7**; the S3 native-lockfile backend needs
  >= 1.10. Homebrew's terraform formula is deprecated/disabled, so
  validation this round used a Terraform 1.10.5 binary downloaded
  directly from HashiCorp's releases, used only for `fmt`/`validate`/
  `apply` in-session. **Anyone running this stack locally going forward
  needs a real upgrade path** (tfenv, or a manual binary swap) — this
  was never fixed at the environment level.

## How cutover actually went

1. Verified on `d3djb87p7dzto4.cloudfront.net` first (`point_dns=false`):
   homepage, both resume PDFs, security headers, cache-control on hashed
   assets vs. `index.html`, and the `/asdf` → 404 SPA fallback all passed.
2. Pushed `feature/s3-cloudfront-migration`, merged via PR #5. The real
   `deploy-s3.yml` run (`41342985469`, success) was confirmed distinct
   from the earlier manual test upload — the stray `.DS_Store` my manual
   `aws s3 sync` had left in the bucket was gone afterward, proving the
   workflow's clean-checkout `--delete` sync had run.
3. Cutover: aliases removed from the old distribution (`E2TZLAJVIUGMCF`,
   via the AWS console, not Terraform — it was never in Terraform),
   then `terraform apply -var point_dns=true` added the real aliases +
   ACM cert to the new distribution and created the 4 Route 53 alias
   records (`allow_overwrite = true`, since those records already
   existed pointing at the old distribution).
4. Re-verified on `aimablem.dev` / `www.aimablem.dev` directly: `200` on
   both hosts, correct TLS cert, security headers, resume PDF, and the
   404 fallback.

There was a brief (order-of-minutes) window between step 3's two halves
where `aimablem.dev` had no distribution claiming it — inherent to
CloudFront's one-owner-per-alias rule, not something this plan avoided.

## Open items (not done — by request, documentation only this round)

Nothing below has been touched. Prioritized roughly by how safe/isolated
each one is:

1. **Remove `.github/workflows/deploy-prod.yml`.** Nothing points at the
   EC2 deploy path for production anymore. Low risk, reversible via git.
2. **Stop `portfolio-container` on the EC2 instance.** Nothing serves
   production traffic from it now. The box also runs `flashlearn`,
   `forever`, and `monitor` containers — don't touch those or the
   instance itself.
3. **Switch the new distribution to CloudFront's Free flat-rate plan**
   in the console, then `terraform plan` afterward to check for drift
   (the plan should come back clean — flat-rate billing isn't a config
   attribute Terraform tracks).
4. **Old AWS access-key secrets** (`AWS_ACCESS_KEY_ID`,
   `AWS_SECRET_ACCESS_KEY`): **not safe to remove yet** —
   `deploy-dev.yml` and `deploy-staging.yml` still use them for the
   `develop`/`staging` EC2 deploys, which this migration didn't touch.
   Revisit only after those are migrated too, or EC2 is fully retired.
5. **Decide the fate of the old CloudFront distribution**
   (`E2TZLAJVIUGMCF`). It's alias-less and serving nothing now, but
   still exists and still costs nothing extra sitting idle. Delete it
   once you're confident, or leave it as a rollback path a while longer.
6. **Decide the fate of `infra/`** (the original EC2/VPC Terraform root,
   and the EC2 instance itself). Can't be destroyed yet — the instance
   still hosts `flashlearn`, `forever`, and `monitor`, unrelated to this
   portfolio migration.
7. **ACM cert ownership**: this stack reads the existing cert via a data
   source rather than owning it. If it's ever deleted or replaced outside
   Terraform (e.g. as part of cleaning up the old EC2/Certbot setup),
   the new distribution breaks with no Terraform warning beforehand.
   Worth a reminder in whatever "retire old infra" plan comes next.

## Pre-existing, unrelated issues noticed along the way

Not part of this migration, flagged for awareness only:

- `README.md`'s CI/CD badge points at a `deploy.yml` workflow that
  doesn't exist (only `deploy-prod/dev/staging/s3.yml` do).
- GitHub reported 132 Dependabot alerts (4 critical, 68 high) on `main`
  when this branch was pushed.
