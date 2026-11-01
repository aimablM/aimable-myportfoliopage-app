I'm migrating my portfolio site (aimablem.dev) off a Docker-on-EC2 setup to S3 + CloudFront to cut hosting costs. This repo is the React portfolio. Right now it's built into an nginx container, pushed to ECR, and deployed over SSH to a single EC2 instance in us-east-1, with host-level nginx + Certbot doing TLS. That same instance also runs other projects (flashlearn, forever, monitor subdomains), so it has to keep running untouched for now.

Scope for this task: ONLY the production portfolio site, moved to S3 + CloudFront, managed with Terraform and deployed by GitHub Actions. Don't touch staging/dev, the other projects, or the existing infra/ folder.

## What to build

1. A new Terraform root at infra/static-site/ (keep it separate from the old infra/, which manages the EC2/VPC and will be destroyed later). It should contain:
   - S3 remote backend with use_lockfile = true (Terraform >= 1.10). The state bucket will be called aimable-terraform-state in us-east-1; I'll create it myself, so just give me the CLI commands.
   - A private S3 bucket for the site: all public access blocked, BucketOwnerEnforced. NOT an S3 website endpoint.
   - CloudFront with Origin Access Control (not legacy OAI). The bucket policy allows s3:GetObject only from this distribution, pinned with an AWS:SourceArn condition.
   - An ACM cert in us-east-1 for aimablem.dev + www.aimablem.dev, with DNS validation records in the existing Route 53 hosted zone (look it up with a data source; the zone is not in Terraform).
   - Distribution settings: aliases for apex + www, redirect-to-https, http2and3, IPv6, PriceClass_100, TLSv1.2_2021, compress on, the Managed-CachingOptimized cache policy, and the Managed-SecurityHeadersPolicy response headers policy (both via data sources, not hardcoded IDs).
   - SPA fallback: 403 and 404 both serve /index.html with response code 404. The app's only real route is "/", and React Router renders the 404 page. Check src/App.js to confirm that's still true.
   - Route 53 A + AAAA alias records for apex and www, gated behind a point_dns variable that defaults to false, with allow_overwrite = true (they currently point at the EC2 IP).
   - GitHub OIDC: an IAM OIDC provider (toggleable with a variable in case one already exists) and a deploy role that only repo:aimablM/aimable-myportfoliopage-app:ref:refs/heads/main can assume. Least privilege: ListBucket on the bucket; Get/Put/DeleteObject on its objects; cloudfront:CreateInvalidation on this one distribution.
   - Outputs: bucket name, distribution ID, the cloudfront.net URL, and the deploy role ARN.

2. A new workflow at .github/workflows/deploy-s3.yml. Triggers on push to main + workflow_dispatch; permissions id-token: write and contents: read; Node 20; npm ci + npm run build; aws-actions/configure-aws-credentials with role-to-assume (OIDC, no access keys). Read AWS_ROLE_ARN, S3_BUCKET, CLOUDFRONT_DISTRIBUTION_ID from repo *variables* (vars.*), not secrets.
   Upload in two passes:
   - build/static → cache-control "public,max-age=31536000,immutable", WITHOUT --delete (old hashed chunks stay so clients with a cached index.html don't 404 mid-deploy).
   - Everything else → --delete --exclude "static/*" with "public,max-age=0,must-revalidate" (index.html, resume PDFs and public/ images keep their names when they change).
   Then invalidate "/*".
   Leave the existing deploy-prod.yml in place for now; both will run in parallel until cutover.

## How I want you to work

- Read the repo first (README, dockerfile, package.json, existing workflows, infra/) and tell me if anything contradicts the plan above before writing code.
- Comment the Terraform where a choice isn't obvious. I want to understand the "why" (e.g., why 403 is caught, why the cert must be in us-east-1, why point_dns exists).
- Run terraform fmt and terraform validate (init with -backend=false is fine for validation). Verify npm run build works locally.
- STOP and ask me before: any terraform apply, any AWS CLI call that creates or changes resources, any git push, and deleting or editing existing files outside the new ones. Read-only AWS commands (e.g., describing the hosted zone or checking `dig www.aimablem.dev` to see if www is a CNAME, which would block creating an A record) are fine.
- Don't touch the committed infra/terraform.tfstate or the EC2 instance. That's a later phase.

## When you're done, give me a short runbook:
1. Bootstrap commands for the state bucket (with versioning + public access block).
2. terraform init/apply with point_dns=false.
3. Which outputs go into which GitHub repo variables.
4. How to test on the cloudfront.net URL (homepage, resume PDF links, the Formspree contact form, a junk path like /asdf to confirm the 404 fallback).
5. The cutover apply with point_dns=true, plus how to verify it (curl -I, look for CloudFront headers).
6. Rollback (point the A records back to the EC2 IP in the console).
7. Post-cutover cleanup: remove the old deploy-prod.yml, remove the old AWS access key secrets once nothing uses them, stop the portfolio container on EC2. Also remind me to switch the distribution to CloudFront's Free flat-rate plan in the console and run terraform plan afterward to check for drift.