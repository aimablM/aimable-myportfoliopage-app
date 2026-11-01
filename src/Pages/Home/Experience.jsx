import React from "react";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Cloud & DevOps Engineer",
      company: "Freelance",
      location: "Remote",
      period: "January 2025 – Present",
      current: true,
      icon: "fas fa-cloud",
      highlights: [
        "Built and configured secure, production-grade infrastructure on AWS using Terraform, Docker, ECS and EC2 across multiple Availability Zones",
        "Automated multi-environment CI/CD pipelines with GitHub Actions, Docker Hub/ECR, and remote EC2 deployments",
        "Deployed and monitored fullstack containerized applications with Docker Compose, NGINX reverse proxy, and TLS termination",
        "Authored public GitHub documentation and project breakdowns detailing architecture, decisions, and CI/CD workflows"
      ],
      tech: ["AWS", "Terraform", "Docker", "GitHub Actions", "ECS", "EC2", "NGINX"]
    },
    {
      id: 2,
      role: "Returns Learning Ambassador",
      company: "Amazon",
      location: "Aberdeen, MD",
      period: "December 2020 – June 2024",
      current: false,
      icon: "fas fa-people-arrows",
      highlights: [
        "Led technical onboarding programs for new hires, delivering hands-on training for company software tools and procedures",
        "Optimized return processing workflows, increasing operational efficiency by 15% through process improvements and training initiatives",
        "Managed cross-functional team logistics, coordinating resources, schedules, and priorities to ensure efficient operations and timely delivery"
      ],
      tech: ["Training & Onboarding", "Process Improvement", "Team Leadership"]
    }
  ];

  return (
    <section id="Experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-heading">
            <i className="section-icon fas fa-briefcase"></i>
            Experience
          </h2>
          <a
            href="./Aimable_Mugwaneza_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            <i className="fas fa-file-alt"></i> View Resume
          </a>
        </div>
        <p className="section-description">
          A look at my professional journey — from hands-on cloud and DevOps
          engineering to leadership and process improvement roles.
        </p>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div className="experience-item" key={exp.id}>
              <div className="experience-marker">
                <div className={`experience-icon ${exp.current ? "current" : ""}`}>
                  <i className={exp.icon}></i>
                </div>
                <div className="experience-line"></div>
              </div>

              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">
                      {exp.company}
                      <span className="experience-location">
                        <i className="fas fa-map-marker-alt"></i> {exp.location}
                      </span>
                    </p>
                  </div>
                  <span className={`experience-period ${exp.current ? "period-current" : ""}`}>
                    {exp.current && <span className="pulse-dot"></span>}
                    {exp.period}
                  </span>
                </div>

                <ul className="experience-highlights">
                  {exp.highlights.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="experience-tech">
                  {exp.tech.map((tech, index) => (
                    <span className="experience-tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
