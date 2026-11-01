terraform {
  # use_lockfile (native S3 state locking, no DynamoDB table needed) requires
  # Terraform >= 1.10.
  required_version = ">= 1.10"

  backend "s3" {
    bucket       = "aimable-terraform-state"
    key          = "static-site/terraform.tfstate"
    region       = "us-east-1"
    use_lockfile = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
