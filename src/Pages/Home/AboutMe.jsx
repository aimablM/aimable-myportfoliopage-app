// AboutMe.jsx
import React from "react";
import "./About.css";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-subtitle">Get To Know More</span>
          <h2 className="about-title">About Me</h2>
        </div>

        <div className="about-content">
          {/* Left column - Image and credentials */}
          <div className="about-left-column">
            {/* Profile image */}
            <div className="about-image-container">
              <img src="./img/about-me.png" alt="About Me" className="about-image" />
            </div>
            
            {/* Credentials section */}
            <div className="about-credentials">
              {/* Education */}
              <div className="credential-item">
                <div className="credential-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="credential-content">
                  <h3 className="credential-title">Education</h3>
                  <p className="credential-text">Computer Science</p>
                  <p className="credential-subtext">Towson University</p>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="credential-item">
                <div className="credential-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="credential-content">
                  <h3 className="credential-title">Certifications</h3>
                  <p className="credential-text">Comptia Security+</p>
                  <p className="credential-text">AWS Cloud Practitioner</p>
                  <p className="credential-text">AWS Solutions Architect- Associate</p>
                  <p className="credential-text">Terraform Associate</p>
                  <p className="credential-subtext">Pursuing: AWS Certified Developer - Associate</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Text content */}
          <div className="about-right-column">
            <p className="about-description">
              I'm a recent computer science graduate who started out chasing software engineering — but along the way, I found something that completely reshaped my direction: cloud and DevOps.
            </p>
            
            <p className="about-description">
              What began as a side curiosity turned into a full-blown passion. I realized I loved designing systems more than just building features. I wasn't satisfied writing code in isolation — I wanted to understand how it runs, scales, communicates, and stays secure in production. That led me to architect fullstack apps, deploy them with Docker on EC2, host static sites with S3 and CloudFront, configure Route 53 for custom domains, and use IAM, Security Groups, and Terraform to secure and automate it all.
            </p>
            
            <p className="about-description">
              This journey has reignited my drive and purpose. I think in systems now — sketching out ideas at night, imagining how components connect, and constantly applying what I learn in real-world scenarios. I've earned my AWS Cloud Practitioner, I'm pursuing Security+ and SAA, and I'm building public, documented projects to show what I know — not just what I've studied.
            </p>
            
            <p className="about-description">
              Cloud and DevOps blend everything I love: infrastructure, automation, security, creativity, and impact. It's less saturated, highly in demand, and rewards those who can bridge software with systems — and that's where I thrive. I'm not just following a path — I'm creating one. And I'm just getting started.
            </p>

          {/* Certification badge placeholder */}
            <div className="cert-badge-container">
                <img
                  onClick={() => {
                              window.open("./CompTIA_Security+_CE.pdf", '_blank', 'noopener noreferrer')
                            }}
                  src="./img/security-plus.png"
                  alt="CompTIA Security+ Certified"
                  className="cert-badge-image"
                />
                <img
                onClick={() => {
                              window.open("./AWS_Certified_Cloud_Practitioner.pdf", '_blank', 'noopener noreferrer')
                            }}
                  src="./img/aws-ccp.png"
                  alt="AWS Certified Cloud Practitioner"
                  className="cert-badge-image"
                />
                <img
                  onClick={() => {
                              window.open("./AWS_Certified_Solutions_Architect.pdf", '_blank', 'noopener noreferrer')
                            }}
                  src="./img/aws-certified-solutions-architect-associate.png"
                  alt="AWS Certified Solutions Architect - Associate"
                  className="cert-badge-image"
                />
                <img
                  onClick={() => {
                              window.open("./TerraformAssociate00320250716-27-5e9c2p.pdf", '_blank', 'noopener noreferrer')
                            }}
                  src="./img/terraform.png"
                  alt="Terraform Associate Certified"
                  className="cert-badge-image"
                />
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}