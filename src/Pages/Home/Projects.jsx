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

  const getModalBackgroundClass = (projectId) => {
  const backgroundMap = {
    1: "terraform-bg",     // Secure Cloud Portfolio Infrastructure
    2: "cicd-bg",          // Multi-Environment CI/CD Pipeline
    3: "kubernetes-bg",    // FlashLearn - Cloud-Powered Learning Platform
    4: "terraform-bg",     // Forever Store - E-Commerce Platform
    5: "monitor-bg",       // Prometheus & Grafana Monitoring Stack
    6: "cicd-bg"           // AWS ECR CI/CD Pipeline
  };
  
  return backgroundMap[projectId] || "terraform-bg"; // Default fallback
};

  const projects = [
  {
    id: 1,
    title: "Secure Cloud Portfolio Infrastructure",
    description: "Production-grade, containerized portfolio website deployed on AWS EC2 with automated CI/CD, HTTPS, and infrastructure as code.",
    image: "/img/projects/portfolio.png",
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
      overview: "Built a secure and scalable portfolio website infrastructure from scratch using AWS, Docker, Terraform, and GitHub Actions. Features HTTPS via Certbot, automated deployments, and resilient architecture in a custom VPC with complete infrastructure as code implementation.",
      highlights: [
        "Terraform-based infrastructure as code (IaC) for AWS resource provisioning",
        "CI/CD pipeline with GitHub Actions and Docker Hub integration",
        "HTTPS with automated SSL certificate renewal via Certbot and Let's Encrypt",
        "Custom VPC and public subnet with hardened security groups",
        "NGINX reverse proxy configuration with multi-stage Docker builds",
        "Route 53 DNS management with domain configuration",
        "Production-grade deployment with container restart policies"
      ],
      repoUrl: "https://github.com/aimablM/aimable-myportfoliopage-app",
      demoUrl: "https://aimablem.dev"
    },
    techStack: {
      infrastructure: ["AWS EC2", "VPC", "Security Groups", "Route 53", "Certbot", "Let's Encrypt"],
      development: ["Terraform", "Docker", "GitHub Actions", "NGINX", "React", "Bash", "AWS CLI"]
    }
  },
  {
    id: 2,
    title: "Multi-Environment CI/CD Pipeline",
    description: "Enterprise-grade CI/CD system deploying Dockerized apps across dev, staging, and production environments with GitHub Actions, AWS ECR, and NGINX subdomain routing.",
    image: "/img/projects/multi-env-cicd.png",
    status: "Completed",
    tech: [
      { name: "GitHub Actions", icon: "github", color: "#24292e" },
      { name: "Docker", icon: "docker", color: "#2496ed" },
      { name: "AWS ECR", icon: "aws", color: "#ff9900" },
      { name: "AWS EC2", icon: "ec2", color: "#ff9900" },
      { name: "NGINX", icon: "nginx", color: "#009639" }
    ],
    details: {
      overview: "Designed and deployed a full-scale, production-grade multi-environment CI/CD pipeline. Each GitHub branch (develop, staging, main) automatically triggers environment-specific Docker builds, pushes to ECR with matching tags, and deploys to dedicated containers with subdomain routing via NGINX and SSL management.",
      highlights: [
        "Isolated development, staging, and production pipelines via branch-based GitHub Actions",
        "Environment-specific Docker tags (:dev, :staging, :latest) with separate container instances",
        "Subdomain routing (dev.*, staging.*, prod.*) with NGINX reverse proxy configuration",
        "Individual SSL certificate provisioning for each environment using Certbot & Let's Encrypt",
        "Route 53 DNS with wildcard support for flexible subdomain management",
        "Secured SSH deployments using GitHub Secrets and automated container lifecycle management",
        "Production-grade deployment patterns with zero-downtime container replacement"
      ],
      repoUrl: "https://github.com/aimablM/multi-env-cloud-cicd-pipeline",
      demoUrl: "https://github.com/aimablM/aimable-myportfoliopage-app/actions"
    },
    techStack: {
      infrastructure: ["Docker", "GitHub Actions", "AWS ECR", "AWS EC2", "NGINX", "Route 53", "Let's Encrypt"],
      development: ["Bash", "YAML", "JavaScript", "React", "SSH", "Git Workflow"]
    }
  },
  {
    id: 3,
    title: "FlashLearn - Cloud-Powered Learning Platform",
    description: "DevOps showcase: containerized microservices learning platform with Docker Compose orchestration, AWS deployment, and complete CI/CD automation.",
    image: "/img/projects/flashlearn.png",
    status: "Completed",
    tech: [
      { name: "Docker", icon: "docker", color: "#2496ed" },
      { name: "AWS", icon: "aws", color: "#ff9900" },
      { name: "NGINX", icon: "nginx", color: "#009639" },
      { name: "MongoDB", icon: "database", color: "#4ea94b" },
      { name: "Node.js", icon: "node", color: "#339933" },
      { name: "GitHub Actions", icon: "github", color: "#24292e" }
    ],
    details: {
      overview: "A comprehensive DevOps showcase demonstrating modern cloud infrastructure deployment and containerization practices. This interactive flashcard learning application is fully orchestrated with Docker Compose, deployed on AWS, and automated with a complete CI/CD pipeline featuring microservices architecture.",
      highlights: [
        "Containerized microservices with separate frontend, backend, and database services",
        "Infrastructure as Code with Docker Compose for consistent deployments",
        "Complete GitHub Actions CI/CD pipeline for automated building, testing, and deployment",
        "AWS cloud architecture with EC2 deployment and proper security groups",
        "Custom domain management with Route 53 and subdomain configuration",
        "HTTPS implementation with Let's Encrypt certificates and NGINX configuration",
        "High availability with container health checks and automated restart policies"
      ],
      repoUrl: "https://github.com/aimablM/flashlearn",
      demoUrl: "https://flashlearn.aimablem.dev"
    },
    techStack: {
      infrastructure: ["Docker Compose", "AWS EC2", "Route 53", "NGINX", "Let's Encrypt", "MongoDB"],
      development: ["Node.js", "React", "GitHub Actions", "Docker Hub", "JWT", "RESTful API"]
    }
  },
  {
    id: 4,
    title: "Forever Store - E-Commerce Platform",
    description: "Containerized, cloud-deployed e-commerce application showcasing modern DevOps practices with Docker, AWS, and automated infrastructure deployment.",
    image: "/img/projects/forever.png",
    status: "Completed",
    tech: [
      { name: "Docker", icon: "docker", color: "#2496ed" },
      { name: "AWS", icon: "aws", color: "#ff9900" },
      { name: "NGINX", icon: "nginx", color: "#009639" },
      { name: "MongoDB", icon: "database", color: "#4ea94b" },
      { name: "Node.js", icon: "node", color: "#339933" },
      { name: "React", icon: "javascript", color: "#61dafb" }
    ],
    details: {
      overview: "A containerized, cloud-deployed e-commerce application demonstrating the full lifecycle of forking an open-source application, containerizing its components, and deploying to production with proper cloud engineering practices. Features complete separation of concerns with isolated containers and subdomain routing.",
      highlights: [
        "Containerized microservices with separate frontend, backend, and database containers",
        "Docker Compose orchestration with proper networking and volume management",
        "AWS cloud deployment on EC2 with security groups and networking configuration",
        "HTTPS security implementation with SSL/TLS via Let's Encrypt certificates",
        "NGINX reverse proxy with subdomain routing and SSL termination",
        "Custom domain integration with AWS Route 53 for DNS management",
        "Production-grade container management with restart policies and health monitoring"
      ],
      repoUrl: "https://github.com/aimablM/forever-store-deployment",
      demoUrl: "https://forever.aimablem.dev"
    },
    techStack: {
      infrastructure: ["Docker Compose", "AWS EC2", "Route 53", "NGINX", "Let's Encrypt", "MongoDB"],
      development: ["React", "Node.js", "Express.js", "Cloudinary", "Stripe", "JWT", "Multer"]
    }
  },
  {
    id: 5,
    title: "Prometheus & Grafana Monitoring Stack",
    description: "Comprehensive, containerized monitoring solution with Prometheus, Grafana, and custom exporters for real-time infrastructure visibility and alerting.",
    image: "/img/projects/monitor.png",
    status: "Completed",
    tech: [
      { name: "Prometheus", icon: "prom", color: "#e6522c" },
      { name: "Grafana", icon: "grafana", color: "#f46800" },
      { name: "Docker", icon: "docker", color: "#2496ed" },
      { name: "Node Exporter", icon: "server", color: "#339933" },
      { name: "cAdvisor", icon: "docker", color: "#2496ed" }
    ],
    details: {
      overview: "A comprehensive, containerized monitoring solution for quickly deploying a complete server monitoring environment using industry-standard tools. This stack provides real-time visibility into infrastructure with minimal setup time, featuring Prometheus for metrics collection, Grafana for visualization, and multiple exporters for comprehensive monitoring.",
      highlights: [
        "Complete monitoring stack with Prometheus, Grafana, Node Exporter, and cAdvisor",
        "Real-time metrics collection for CPU, memory, disk, and network statistics",
        "Customizable Grafana dashboards with pre-configured templates for system overview",
        "Container monitoring with cAdvisor for Docker resource usage and performance data",
        "Automated alerting system with configurable thresholds and notification channels",
        "Long-term metrics storage and retention for trend analysis and capacity planning",
        "Docker Compose orchestration for consistent deployment across environments"
      ],
      repoUrl: "https://github.com/aimablM/monitoring-stack", 
      demoUrl: "https://monitor.aimablem.dev"
    },
    techStack: {
      infrastructure: ["Prometheus", "Grafana", "Docker Compose", "Node Exporter", "cAdvisor", "AlertManager"],
      development: ["YAML", "PromQL", "Grafana Dashboards", "Docker", "Monitoring Configuration"]
    }
  },
  {
    id: 6,
    title: "AWS ECR CI/CD Pipeline",
    description: "Production-grade CI/CD pipeline automating containerized application deployment from GitHub to Amazon ECR and EC2 with comprehensive error handling.",
    image: "/img/projects/portfolio-cicd.png",
    status: "Completed",
    tech: [
      { name: "GitHub Actions", icon: "github", color: "#24292e" },
      { name: "AWS ECR", icon: "aws", color: "#ff9900" },
      { name: "Docker", icon: "docker", color: "#2496ed" },
      { name: "AWS EC2", icon: "ec2", color: "#ff9900" },
      { name: "SSH", icon: "terminal", color: "#4b5563" }
    ],
    details: {
      overview: "A production-grade CI/CD pipeline implementation that automatically builds, pushes, and deploys containerized applications from GitHub to Amazon ECR and EC2. Demonstrates modern DevOps practices including containerization, automation, security, and systematic troubleshooting of real-world deployment challenges.",
      highlights: [
        "End-to-end automation from code push to production deployment",
        "Amazon ECR integration for secure container image storage and management",
        "SSH-based deployment with secure credential management via GitHub Secrets",
        "Comprehensive error handling and systematic debugging of production issues",
        "Cross-platform Docker builds ensuring compatibility between development and production",
        "Container lifecycle management with graceful stopping, removal, and redeployment",
        "Documented troubleshooting process for common deployment challenges"
      ],
      repoUrl: "https://github.com/aimablM/aws-portfolio-cicd-pipeline",
      demoUrl: "https://aimablem.dev"
    },
    techStack: {
      infrastructure: ["Amazon ECR", "AWS EC2", "Docker", "SSH", "GitHub Actions"],
      development: ["YAML", "Bash", "AWS CLI", "Docker CLI", "GitHub Secrets"]
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
  className="project-image-container"
  onClick={() => openProjectDetails(project.id)}
>
  <div 
    className="project-image"
    style={{ backgroundImage: `url(${project.image})` }}
    role="img"
    aria-label={project.title}
  />
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
              
              <div className={`modal-header ${getModalBackgroundClass(activeProject.id)}`}>
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