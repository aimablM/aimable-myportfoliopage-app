import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Projects.css";

export default function MyProjects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  
  // Helper function to get FontAwesome icon class based on tech name
  const getTechIcon = (icon) => {
    const iconMap = {
      github: "fab fa-github",
      docker: "fab fa-docker",
      ec2: "fab fa-aws",
      aws: "fab fa-aws",
      node: "fab fa-node-js",
      python: "fab fa-python",
      terraform: "fas fa-cube",
      nginx: "fas fa-server",
      lambda: "fas fa-bolt",
      cloudwatch: "fas fa-chart-line",
      prom: "fas fa-tachometer-alt",
      grafana: "fas fa-chart-bar",
      route53: "fas fa-globe",
      eks: "fas fa-server",
      k8s: "fas fa-dharmachakra",
      bash: "fas fa-terminal",
      javascript: "fab fa-js"
    };
    
    return iconMap[icon] || "fas fa-code";
  };
  
  // Helper function to get icon for tech stack items
  const getTechIconForStack = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('docker')) return 'fab fa-docker';
    if (techLower.includes('terraform')) return 'fas fa-cube';
    if (techLower.includes('aws') || techLower.includes('ec2') || techLower.includes('s3') || techLower.includes('route')) return 'fab fa-aws';
    if (techLower.includes('nginx')) return 'fas fa-server';
    if (techLower.includes('kubernetes') || techLower.includes('k8s')) return 'fas fa-dharmachakra';
    if (techLower.includes('github')) return 'fab fa-github';
    if (techLower.includes('node')) return 'fab fa-node';
    if (techLower.includes('python')) return 'fab fa-python';
    if (techLower.includes('javascript') || techLower.includes('js')) return 'fab fa-js';
    if (techLower.includes('bash')) return 'fas fa-terminal';
    if (techLower.includes('cloud')) return 'fas fa-cloud';
    if (techLower.includes('prometheus') || techLower.includes('grafana')) return 'fas fa-chart-line';
    if (techLower.includes('database') || techLower.includes('sql')) return 'fas fa-database';
    
    return 'fas fa-code';
  };
  
  // Helper function to get color for tech stack items
  const getTechColor = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('docker')) return '#2496ed';
    if (techLower.includes('terraform')) return '#7b42bc';
    if (techLower.includes('aws')) return '#ff9900';
    if (techLower.includes('nginx')) return '#009639';
    if (techLower.includes('kubernetes')) return '#326ce5';
    if (techLower.includes('github')) return '#24292e';
    if (techLower.includes('node')) return '#339933';
    if (techLower.includes('python')) return '#3776ab';
    if (techLower.includes('javascript')) return '#f7df1e';
    
    return '#2563eb'; // Default blue
  };

  

  const openProjectDetails = (id) => {
    setActiveProject(projects.find(project => project.id === id));
    setActiveTab("overview");
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const projects = [
    
    {
  id: 1,
  title: "Secure Cloud Portfolio Infrastructure",
  description: "Production-grade, containerized portfolio website deployed on AWS EC2 with automated CI/CD, HTTPS, and infrastructure as code.",
  image: "terraform-bg",
  status: "Completed",
  tech: [
    { name: "AWS", icon: "aws", color: "#ff9900" },
    { name: "Terraform", icon: "terraform", color: "#7b42bc" },
    { name: "Docker", icon: "docker", color: "#2496ed" },
    { name: "NGINX", icon: "nginx", color: "#009639" },
    { name: "Route 53", icon: "route53", color: "#ff9900" },
    { name: "GitHub Actions", icon: "github", color: "#24292e" },
    { name: "Certbot", icon: "lock", color: "#00b67a" }
  ],
  details: {
    overview: "Built a secure and scalable portfolio website infrastructure from scratch using AWS, Docker, Terraform, and GitHub Actions. It features HTTPS via Certbot, automated deployments, and resilient architecture in a custom VPC.",
    highlights: [
      "Terraform-based infrastructure as code (IaC)",
      "CI/CD with GitHub Actions and Docker Hub",
      "HTTPS with automated renewal via Certbot and Let's Encrypt",
      "Custom VPC and public subnet with hardened security groups",
      "NGINX reverse proxy and multi-stage Docker build"
    ],
    repoUrl: "https://github.com/aimablM/aimable-myportfoliopage-app",
    demoUrl: "https://aimablem.dev"
  },
  techStack: {
    infrastructure: ["AWS EC2", "VPC", "Security Groups", "Route 53", "Certbot", "ACM (planned)"],
    development: ["Terraform", "Docker", "GitHub Actions", "NGINX", "React", "Bash", "AWS CLI"]
  }
},
{
      id: 2,
      title: "CI/CD Infrastructure Automation",
      description: "A system that integrates CI/CD pipelines using GitHub Actions to automate image builds, push to Docker Hub/ECR, and trigger EC2 redeploy via secure SSH.",
      image: "cicd-bg",
      status: "Completed",
      tech: [
        {name: "GitHub", icon: "github", color: "#24292e"},
        {name: "Docker", icon: "docker", color: "#2496ed"},
        {name: "AWS EC2", icon: "ec2", color: "#ff9900"},
        {name: "Node.js", icon: "node", color: "#339933"},
        {name: "NGINX", icon: "nginx", color: "#009639"}
      ],
      details: {
        overview: "Implemented a production-grade CI/CD pipeline that automatically builds Docker images, pushes to Amazon ECR, and securely deploys to an EC2 instance via SSH. This system powers live infrastructure for cloud-native apps, demonstrating DevOps automation and security best practices.",
        highlights: [
          "Automated end-to-end deployment pipeline triggered on code push to main branch",
    "GitHub Actions workflow orchestrates build, push, and EC2 deploy using secrets",
    "Optimized multi-stage Docker builds for smaller, production-ready images",
    "SSH-based container lifecycle management with cleanup and zero-downtime restart",
    "Secure secrets handling with GitHub Secrets and AWS IAM credential separation",
    "Resolved real-world issues: ECR auth errors, SSH key formatting, and architecture mismatch"
        ],
        repoUrl: "https://github.com/aimablM/aws-portfolio-cicd-pipeline",
        demoUrl: "https://github.com/aimablM/aimable-myportfoliopage-app/actions"
      },
      techStack: {
        infrastructure: ["Docker", "Terraform", "EC2", "NGINX", "Route 53"],
        development: ["HTTPS", "Bas
          h", "YAML", "JavaScript"]
      }
    },
    {
      id: 3,
      title: "Cloud Monitoring & Observability",
      description: "Comprehensive monitoring solution for cloud infrastructure using Prometheus, Grafana, and ELK stack with custom alerts and dashboards.",
      image: "monitor-bg",
      status: "In Progress",
      tech: [
        {name: "Prometheus", icon: "prom", color: "#e6522c"},
        {name: "Grafana", icon: "grafana", color: "#f46800"},
        {name: "AWS CloudWatch", icon: "cloudwatch", color: "#ff9900"},
        {name: "Python", icon: "python", color: "#3776ab"},
        {name: "Terraform", icon: "terraform", color: "#7b42bc"}
      ],
      details: {
        overview: "Built a complete observability platform for AWS infrastructure with real-time monitoring, logging, and alerting capabilities.",
        highlights: [
          "Custom Grafana dashboards for business and technical KPIs",
          "Log aggregation with ELK stack",
          "Automated alerting with PagerDuty integration",
          "Real-time metrics visualization"
        ],
        repoUrl: "https://github.com/aimablM/cloud-monitoring-stack",
        demoUrl: "https://monitoring.aimablemugwane.com"
      },
      techStack: {
        infrastructure: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"],
        development: ["Docker Compose", "AWS CloudWatch", "Terraform", "Python"]
      }
    },
    {
      id: 4,
      title: "Container Security Platform",
      description: "Security-focused container platform with image scanning, runtime protection, and compliance enforcement for cloud applications.",
      image: "security-bg",
      status: "Completed",
      tech: [
        {name: "Docker", icon: "docker", color: "#2496ed"},
        {name: "AWS", icon: "aws", color: "#ff9900"},
        {name: "Terraform", icon: "terraform", color: "#7b42bc"},
        {name: "Python", icon: "python", color: "#3776ab"},
        {name: "Bash", icon: "bash", color: "#4EAA25"}
      ],
      details: {
        overview: "Implemented a comprehensive security stack for containerized applications with vulnerability scanning, policy enforcement, and runtime monitoring.",
        highlights: [
          "Automated vulnerability scanning for container images",
          "Policy as code with OPA/Gatekeeper",
          "Runtime security monitoring with Falco",
          "Secure secret management with AWS KMS"
        ],
        repoUrl: "https://github.com/aimablM/container-security-platform",
        demoUrl: "https://security-demo.aimablemugwane.com"
      },
      techStack: {
        infrastructure: ["Docker", "AWS ECR", "AWS KMS", "OPA/Gatekeeper", "Falco"],
        development: ["Trivy", "Python", "Bash", "YAML", "Terraform"]
      }
    },
    {
      id: 5,
      title: "AWS Cost Optimization",
      description: "Reduced AWS infrastructure costs by 40% through resource optimization, spot instances, and automated scaling policies.",
      image: "cost-bg",
      status: "Completed",
      tech: [
        {name: "AWS", icon: "aws", color: "#ff9900"},
        {name: "Lambda", icon: "lambda", color: "#ff9900"},
        {name: "CloudWatch", icon: "cloudwatch", color: "#ff9900"},
        {name: "Terraform", icon: "terraform", color: "#7b42bc"},
        {name: "Python", icon: "python", color: "#3776ab"}
      ],
      details: {
        overview: "Implemented a comprehensive cost optimization strategy for AWS infrastructure with automated scaling, resource management, and cost analytics.",
        highlights: [
          "Resource rightsizing based on utilization metrics",
          "Spot instance integration for non-critical workloads",
          "Reserved Instance planning and purchase strategy",
          "Cost anomaly detection with automated alerts"
        ],
        repoUrl: "https://github.com/aimablM/aws-cost-optimization",
        demoUrl: "https://cost-demo.aimablemugwane.com"
      },
      techStack: {
        infrastructure: ["AWS Lambda", "CloudWatch", "AWS Cost Explorer", "AWS Budgets"],
        development: ["Python", "Terraform", "AWS CLI", "CloudFormation"]
      }
    },
    {
      id: 6,
      title: "Kubernetes Cluster Automation",
      description: "Automated Kubernetes cluster deployment and management with GitOps workflow and infrastructure as code.",
      image: "kubernetes-bg",
      status: "In Progress",
      tech: [
        {name: "Kubernetes", icon: "k8s", color: "#326ce5"},
        {name: "AWS EKS", icon: "eks", color: "#ff9900"},
        {name: "Terraform", icon: "terraform", color: "#7b42bc"},
        {name: "Docker", icon: "docker", color: "#2496ed"},
        {name: "Python", icon: "python", color: "#3776ab"}
      ],
      details: {
        overview: "Created a fully automated Kubernetes cluster deployment and management solution with GitOps principles and infrastructure as code.",
        highlights: [
          "GitOps workflow with ArgoCD",
          "Infrastructure as code with Terraform",
          "Helm charts for application deployment",
          "Automated scaling and self-healing"
        ],
        repoUrl: "https://github.com/aimablM/kubernetes-automation",
        demoUrl: "https://k8s-demo.aimablemugwane.com"
      },
      techStack: {
        infrastructure: ["Kubernetes", "AWS EKS", "ArgoCD", "Helm", "Terraform"],
        development: ["YAML", "Bash", "Go", "Python", "JavaScript"]
      }
    }
  ];

  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-heading">
            <i className="section-icon fas fa-code-branch"></i>
            Recent Projects
          </h2>
          <a href="https://github.com/aimablM?tab=repositories" target="_blank" rel="noopener noreferrer" className="view-all-btn">
            <i className="fab fa-github"></i> View All Projects
          </a>
        </div>
        <p className="section-description">
          Here are some of my recent DevOps and cloud infrastructure projects that demonstrate 
          my technical expertise and problem-solving abilities.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-status">
                <span className={project.status === "Completed" ? "status-completed" : "status-progress"}>
                  {project.status}
                </span>
              </div>
              <div 
                className={`project-image-container`}
                onClick={() => openProjectDetails(project.id)}
              >
                <div className={`project-image ${project.image}`}></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <div 
                      className="tech-tag" 
                      key={index}
                      style={{backgroundColor: `${tech.color}15`, border: `1px solid ${tech.color}30`}}
                      title={tech.name}
                    >
                      <i className={getTechIcon(tech.icon)} style={{color: tech.color}}></i>
                      <span className="tech-tag-name" style={{color: tech.color}}>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  <button 
                    onClick={() => openProjectDetails(project.id)} 
                    className="project-link-btn view-details"
                  >
                    <i className="link-icon fas fa-info-circle"></i> Details
                  </button>
                  <a 
                    href={project.details.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn github-repo"
                  >
                    <i className="link-icon fab fa-github"></i> GitHub
                  </a>
                  <a 
                    href={project.details.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn live-demo"
                  >
                    <i className="link-icon fas fa-external-link-alt"></i> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="modal-overlay" onClick={closeProjectDetails}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeProjectDetails}>×</button>
              
              <div className={`modal-header ${activeProject.image}`}>
                <h2 className="modal-title">{activeProject.title}</h2>
              </div>
              
              <div className="modal-tabs">
                <button 
                  className={`modal-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => switchTab('overview')}
                >
                  <i className="fas fa-info-circle"></i> Overview
                </button>
                <button 
                  className={`modal-tab ${activeTab === 'techStack' ? 'active' : ''}`}
                  onClick={() => switchTab('techStack')}
                >
                  <i className="fas fa-code"></i> Tech Stack
                </button>
              </div>
              
              <div className="modal-content">
                {activeTab === 'overview' && (
                  <div className="tab-content">
                    <p className="modal-overview">{activeProject.details.overview}</p>
                    
                    <div className="highlights-section">
                      <h3 className="highlights-title">
                        <i className="fas fa-star"></i> Key Highlights
                      </h3>
                      <ul className="highlights-list">
                        {activeProject.details.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'techStack' && (
                  <div className="tab-content">
                    <div className="tech-stack-container">
                      <div className="tech-column">
                        <h3 className="tech-title">
                          <i className="fas fa-server"></i> Infrastructure
                        </h3>
                        <div className="tech-items">
                          {activeProject.techStack.infrastructure.map((tech, index) => (
                            <div className="tech-item" key={index}>
                              <i className={getTechIconForStack(tech)} style={{color: getTechColor(tech)}}></i>
                              <span className="tech-name">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="tech-column">
                        <h3 className="tech-title">
                          <i className="fas fa-code"></i> Development
                        </h3>
                        <div className="tech-items">
                          {activeProject.techStack.development.map((tech, index) => (
                            <div className="tech-item" key={index}>
                              <i className={getTechIconForStack(tech)} style={{color: getTechColor(tech)}}></i>
                              <span className="tech-name">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="modal-footer">
                <div className="modal-actions">
                  <a 
                    href={activeProject.details.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn github-repo"
                  >
                    <i className="fab fa-github"></i> GitHub Repository
                  </a>
                  <a 
                    href={activeProject.details.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn live-demo"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}