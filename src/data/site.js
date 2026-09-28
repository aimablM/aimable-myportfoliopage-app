// Content for the home page. Edit here rather than in the components.

export const links = {
  email: "aimable.mugwaneza@gmail.com",
  linkedin: "https://linkedin.com/in/aimable-m-920608107",
  github: "https://github.com/aimablM",
  repositories: "https://github.com/aimablM?tab=repositories",
  x: "https://x.com/aimable_mugwane",
  resume: "/Aimable_Mugwaneza_Resume_2025.pdf",
};

export const certifications = [
  {
    name: "AWS Solutions Architect",
    level: "Associate",
    badge: "/img/aws-certified-solutions-architect-associate.png",
    pdf: "/AWS_Certified_Solutions_Architect.pdf",
  },
  {
    name: "AWS Cloud",
    level: "Practitioner",
    badge: "/img/aws-ccp.png",
    pdf: "/AWS_Certified_Cloud_Practitioner.pdf",
  },
  {
    name: "HashiCorp Terraform",
    level: "Associate",
    badge: "/img/terraform.png",
    pdf: "/TerraformAssociate00320250716-27-5e9c2p.pdf",
  },
  {
    name: "CompTIA",
    level: "Security+",
    badge: "/img/security-plus.png",
    pdf: "/CompTIA_Security+_CE.pdf",
  },
];

export const nextCertification = "AWS Developer – Assoc.";

export const featuredProject = {
  title: "Multi-Environment CI/CD Pipeline",
  description:
    "Each branch — develop, staging, main — triggers its own Docker build, pushes a matching tag to ECR, and deploys to a dedicated container behind NGINX subdomain routing with SSL.",
  tags: ["GitHub Actions", "Docker", "AWS ECR", "EC2", "NGINX"],
  repoUrl: "https://github.com/aimablM/multi-env-cloud-cicd-pipeline",
  runsUrl: "https://github.com/aimablM/aimable-myportfoliopage-app/actions",
  lanes: [
    { branch: "develop", tag: "app:dev", host: "dev.aimablem.dev" },
    { branch: "staging", tag: "app:staging", host: "staging.aimablem.dev" },
    { branch: "main", tag: "app:latest", host: "aimablem.dev", live: true },
  ],
};

export const projects = [
  {
    title: "Secure Cloud Portfolio",
    description:
      "This site — containerized on EC2 with CI/CD, HTTPS and Terraform-managed infrastructure.",
    stack: "Terraform · Docker · Route 53",
    url: "https://github.com/aimablM/aimable-myportfoliopage-app",
  },
  {
    title: "FlashLearn",
    description:
      "Microservices learning platform orchestrated with Docker Compose and deployed to AWS.",
    stack: "Compose · Node.js · MongoDB",
    url: "https://github.com/aimablM/flashlearn",
  },
  {
    title: "Prometheus + Grafana",
    description:
      "Containerized monitoring with custom exporters for real-time visibility and alerting.",
    stack: "Prometheus · Grafana · cAdvisor",
    url: "https://github.com/aimablM/monitoring-stack",
  },
  {
    title: "Forever Store",
    description:
      "Containerized e-commerce app with automated infrastructure deployment on AWS.",
    stack: "React · Docker · NGINX",
    url: "https://github.com/aimablM/forever-store-deployment",
  },
  {
    title: "AWS ECR CI/CD Pipeline",
    description:
      "GitHub → ECR → EC2 deployment automation with thorough error handling.",
    stack: "Actions · ECR · EC2 · SSH",
    url: "https://github.com/aimablM/aws-portfolio-cicd-pipeline",
  },
];

export const stack = [
  {
    label: "Cloud / AWS",
    items: ["EC2", "S3", "VPC", "Route 53", "IAM", "ECS", "Fargate", "ECR", "CloudWatch", "CloudTrail", "CloudFront"],
  },
  {
    label: "IaC & CI/CD",
    items: ["Terraform", "GitHub Actions", "Jenkins", "Docker", "Docker Compose", "NGINX", "Prometheus", "Grafana"],
  },
  {
    label: "Build",
    items: ["JavaScript", "Python", "Java", "Bash", "React", "Node.js / Express", "REST APIs", "Tailwind"],
  },
  {
    label: "Data & Tooling",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Linux (Ubuntu)", "Postman", "Bitbucket", "Agile"],
  },
];
