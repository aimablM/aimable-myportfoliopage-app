# Secured Cloud Portfolio Website with Infrastructure

<img src="public/img/amlogo.svg" alt="Portfolio Logo" width="100" height="100">

A modern, responsive portfolio website deployed on AWS cloud infrastructure using containerization and CI/CD practices.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
  - [Local Development](#local-development)
  - [Docker Deployment](#docker-deployment)
  - [AWS Deployment](#aws-deployment)
- [Usage](#usage)
- [Security Considerations](#security-considerations)
- [Infrastructure as Code](#infrastructure-as-code)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [Future Enhancements](#future-enhancements)
- [Contact Information](#contact-information)

## Project Overview

This portfolio website showcases my professional experience, skills, and projects with a focus on cloud and DevOps engineering capabilities. The project itself serves as a practical demonstration of modern web application deployment using cloud infrastructure, containerization, and CI/CD practices.

The portfolio is built as a single-page React application with a responsive design, deployed to AWS using infrastructure defined and managed with Terraform, and continuously delivered through GitHub Actions workflows.

## Features

### Content Sections
- **Hero Section**: Introduction and personal branding with social media links
- **Skills Section**: Categorized display of technical competencies
- **About Me Section**: Professional overview and background
- **Projects Section**: Portfolio showcasing recent development work
- **Contact Form**: Interactive form connected to a backend service
- **Footer**: Navigation and additional links

### Technical Implementation
- **Responsive Design**: Mobile-first design that adapts to all screen sizes
- **Component-Based Architecture**: Modular React components for maintainability
- **Containerized Deployment**: Docker container for consistent deployment
- **Infrastructure as Code**: AWS infrastructure defined with Terraform
- **Automated Deployment**: CI/CD pipeline using GitHub Actions
- **Cloud-Native Security**: AWS security best practices implementation

## Technology Stack

### Frontend
- **React**: JavaScript library for building the user interface
- **CSS3**: Custom styling for a unique visual identity
- **React Router**: Client-side routing for the single-page application
- **React Scroll**: Smooth scrolling for page navigation

### DevOps & Infrastructure
- **Docker**: Containerization of the application for consistent deployment
- **Nginx**: Web server for serving the static React build
- **AWS**: Cloud infrastructure provider
  - **EC2**: Hosting the Docker container
  - **ECR**: Container registry for Docker images
  - **VPC, Subnets, Security Groups**: Network infrastructure
  - **Route53 (implied)**: DNS management
- **Terraform**: Infrastructure as Code for AWS resource provisioning
- **GitHub Actions**: CI/CD automation

### Development Tools
- **Node.js**: JavaScript runtime for development
- **npm**: Package management
- **Webpack**: Module bundling (via React Scripts)
- **Babel**: JavaScript compiler for modern syntax
- **Git**: Version control

## Architecture

The application follows a cloud-native architecture:

```
                          +-------------------+
                          |   GitHub Actions  |
                          |   CI/CD Pipeline  |
                          +--------+----------+
                                   |
                                   | (Push to ECR)
                                   v
+-------------+            +----------------+          +---------------+
|   Internet  | ---------> |  AWS EC2       | <------> |  Docker       |
|             |            |  Instance      |          |  Container    |
+-------------+            +----------------+          +---------------+
                                   ^
                                   | (Provision)
                                   |
                          +--------+----------+
                          |   Terraform       |
                          |   IaC             |
                          +-------------------+
```

1. **Source Control & CI/CD**: Code is stored in GitHub and CI/CD is handled through GitHub Actions
2. **Containerization**: The application is packaged into a Docker container
3. **Registry**: Docker images are stored in Amazon ECR
4. **Hosting**: EC2 instance runs the Docker container
5. **Infrastructure**: All AWS resources are provisioned through Terraform

## Project Structure

```
/
├── .github/workflows/      # GitHub Actions workflow definitions
│   └── deploy.yml          # CI/CD pipeline for deployment to AWS
├── infra/                  # Terraform infrastructure code
│   ├── main.tf             # Main Terraform configuration
│   ├── variables.tf        # Variable definitions
│   └── outputs.tf          # Output definitions
├── public/                 # Static assets
│   └── img/                # Images used in the website
├── src/                    # React source code
│   ├── App.js              # Main React component
│   ├── App.css             # Main stylesheet
│   ├── data/               # Content data in JSON format
│   └── Pages/              # React components organized by page sections
├── Dockerfile              # Docker container definition
├── .dockerignore           # Files excluded from Docker context
├── package.json            # npm dependencies and scripts
└── README.md               # Project documentation
```

## Installation and Setup

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t portfolio:latest .
   ```

2. Run the container:
   ```bash
   docker run -d -p 80:80 --name portfolio-container portfolio:latest
   ```

3. Access the website at `http://localhost`

### AWS Deployment

#### Prerequisites
- AWS CLI configured with appropriate credentials
- Terraform installed
- Docker installed

#### Steps

1. Initialize Terraform:
   ```bash
   cd infra
   terraform init
   ```

2. Apply Terraform configuration:
   ```bash
   terraform apply
   ```

3. Note the EC2 public IP output after successful Terraform apply.

4. SSH into the EC2 instance:
   ```bash
   ssh ubuntu@<ec2-public-ip> -i <your-key-file>.pem
   ```

5. The CI/CD pipeline will automatically deploy the application when you push to the main branch.

## Usage

The portfolio website can be customized by modifying the following files:

- `src/data/index.json`: Contains the content for skills, projects, and other sections
- `src/App.css`: Modify styles and themes
- `public/img/`: Replace images with your own

To update and deploy changes:

1. Make your changes locally and test
2. Commit and push to the main branch:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

3. The GitHub Actions pipeline will automatically build and deploy the changes to AWS.

## Security Considerations

This project implements several security best practices:

- **Network Security**:
  - VPC with public/private subnet architecture
  - Security groups with principle of least privilege
  - SSH access restricted by key pair

- **Container Security**:
  - Multi-stage Docker build to minimize attack surface
  - Non-root user for running the application

- **CI/CD Security**:
  - GitHub Secrets for sensitive information
  - IAM roles with limited permissions

## Infrastructure as Code

The AWS infrastructure is fully managed via Terraform, enabling:

- **Reproducibility**: Infrastructure can be consistently recreated
- **Version Control**: Infrastructure changes are tracked in git
- **Documentation**: Infrastructure is self-documenting
- **Testing**: Changes can be planned and reviewed before applying

Key infrastructure components:
- VPC with public subnet
- Internet Gateway and routing table
- Security groups for application access
- EC2 instance running the containerized application

## CI/CD Pipeline

The GitHub Actions workflow (`deploy.yml`) provides continuous integration and delivery:

1. Checkout code
2. Configure AWS credentials
3. Login to Amazon ECR
4. Build Docker image
5. Push to Amazon ECR
6. SSH into EC2 instance
7. Pull latest image
8. Stop and remove existing container
9. Run new container

This ensures that every push to the main branch automatically updates the production environment.

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

Planned improvements for the portfolio:

- [ ] Add HTTPS support with AWS Certificate Manager
- [ ] Implement AWS CloudFront for content delivery
- [ ] Add automated testing in the CI/CD pipeline
- [ ] Create staging environment for testing changes
- [ ] Implement monitoring with CloudWatch
- [ ] Add analytics for visitor tracking

## Contact Information

- **Name**: Aimable M.
- **Email**: [example@example.com](mailto:example@example.com)
- **LinkedIn**: [linkedin.com/in/aimable-m-920608107](https://linkedin.com/in/aimable-m-920608107)
- **GitHub**: [github.com/aimablM](https://github.com/aimablM)
- **Twitter**: [twitter.com/aimable_mugwane](https://twitter.com/aimable_mugwane)
