import React from "react";
import "./Skills.css"; // We'll define this separately

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Technical Skills</h2>
        <p className="skills-description">
          My expertise spans across multiple domains, with a recent focus on microservices architecture and cloud infrastructure.
        </p>
        
        <div className="skills-grid">
          {/* Languages & Scripting */}
          <div className="skill-card">
            <div className="icon-container blue-bg">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="skill-title">Languages & Scripting</h3>
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="progress-bg">
                  <div className="progress-bar blue-bar" style={{width: "75%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Python</span>
                <div className="progress-bg">
                  <div className="progress-bar blue-bar" style={{width: "70%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Java</span>
                <div className="progress-bg">
                  <div className="progress-bar blue-bar" style={{width: "65%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">HTML/CSS</span>
                <div className="progress-bg">
                  <div className="progress-bar blue-bar" style={{width: "95%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Bash/Shell</span>
                <div className="progress-bg">
                  <div className="progress-bar blue-bar" style={{width: "50%"}}></div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Web Development */}
          <div className="skill-card">
            <div className="icon-container indigo-bg">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="skill-title">Web Development</h3>
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">React.js</span>
                <div className="progress-bg">
                  <div className="progress-bar indigo-bar" style={{width: "75%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Node.js/Express</span>
                <div className="progress-bg">
                  <div className="progress-bar indigo-bar" style={{width: "70%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">REST APIs</span>
                <div className="progress-bg">
                  <div className="progress-bar indigo-bar" style={{width: "70%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Vite/Tailwind CSS</span>
                <div className="progress-bg">
                  <div className="progress-bar indigo-bar" style={{width: "75%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">SQL</span>
                <div className="progress-bg">
                  <div className="progress-bar indigo-bar" style={{width: "60%"}}></div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* DevOps & Containers */}
          <div className="skill-card">
            <div className="icon-container green-bg">
              <i className="fab fa-docker"></i>
            </div>
            <h3 className="skill-title">DevOps & Containers</h3>
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">Docker</span>
                <div className="progress-bg">
                  <div className="progress-bar green-bar" style={{width: "85%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Docker Compose</span>
                <div className="progress-bg">
                  <div className="progress-bar green-bar" style={{width: "85%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">GitHub Actions</span>
                <div className="progress-bg">
                  <div className="progress-bar green-bar" style={{width: "75%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Jenkins</span>
                <div className="progress-bg">
                  <div className="progress-bar green-bar" style={{width: "20%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Nginx</span>
                <div className="progress-bg">
                  <div className="progress-bar green-bar" style={{width: "45%"}}></div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Cloud Services */}
          <div className="skill-card">
            <div className="icon-container purple-bg">
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className="skill-title">Cloud Services</h3>
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">AWS</span>
                <div className="progress-bg">
                  <div className="progress-bar purple-bar" style={{width: "80%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">EC2/S3</span>
                <div className="progress-bg">
                  <div className="progress-bar purple-bar" style={{width: "85%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Serverless</span>
                <div className="progress-bg">
                  <div className="progress-bar purple-bar" style={{width: "70%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Cloud Architecture</span>
                <div className="progress-bg">
                  <div className="progress-bar purple-bar" style={{width: "75%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Deployment</span>
                <div className="progress-bg">
                  <div className="progress-bar purple-bar" style={{width: "85%"}}></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Database & Tools */}
          <div className="skill-card">
            <div className="icon-container yellow-bg">
              <i className="fas fa-database"></i>
            </div>
            <h3 className="skill-title">Databases & Tools</h3>
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">MongoDB</span>
                <div className="progress-bg">
                  <div className="progress-bar yellow-bar" style={{width: "65%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">MySQL/PostgreSQL</span>
                <div className="progress-bg">
                  <div className="progress-bar yellow-bar" style={{width: "55%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Postman</span>
                <div className="progress-bg">
                  <div className="progress-bar yellow-bar" style={{width: "70%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">VS Code/Emacs</span>
                <div className="progress-bg">
                  <div className="progress-bar yellow-bar" style={{width: "85%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">DB Management</span>
                <div className="progress-bg">
                  <div className="progress-bar yellow-bar" style={{width: "70%"}}></div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* AWS Services */}
          <div className="skill-card">
            <div className="icon-container red-bg">
              <i className="fab fa-aws"></i>
            </div>
            <h3 className="skill-title">AWS Services</h3>
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">EC2</span>
                <div className="progress-bg">
                  <div className="progress-bar red-bar" style={{width: "80%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">S3</span>
                <div className="progress-bg">
                  <div className="progress-bar red-bar" style={{width: "70%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">VPC</span>
                <div className="progress-bg">
                  <div className="progress-bar red-bar" style={{width: "90%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Route 53</span>
                <div className="progress-bg">
                  <div className="progress-bar red-bar" style={{width: "90%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">IAM</span>
                <div className="progress-bg">
                  <div className="progress-bar red-bar" style={{width: "70%"}}></div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Container Services */}
          <div className="skill-card">
            <div className="icon-container pink-bg">
              <i className="fas fa-cubes"></i>
            </div>
            <h3 className="skill-title">Container Services</h3>
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">ECS</span>
                <div className="progress-bg">
                  <div className="progress-bar pink-bar" style={{width: "65%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Fargate</span>
                <div className="progress-bg">
                  <div className="progress-bar pink-bar" style={{width: "65%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">CloudWatch</span>
                <div className="progress-bg">
                  <div className="progress-bar pink-bar" style={{width: "55%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">CloudTrail</span>
                <div className="progress-bg">
                  <div className="progress-bar pink-bar" style={{width: "55%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Terraform</span>
                <div className="progress-bg">
                  <div className="progress-bar pink-bar" style={{width: "55%"}}></div>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Version Control & Other */}
          <div className="skill-card">
            <div className="icon-container gray-bg">
              <i className="fas fa-code-branch"></i>
            </div>
            <h3 className="skill-title">Version Control & Other</h3>
            <ul className="skill-list">
              <li className="skill-item">
                <span className="skill-name">Git/GitHub</span>
                <div className="progress-bg">
                  <div className="progress-bar gray-bar" style={{width: "85%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Linux (Ubuntu)</span>
                <div className="progress-bg">
                  <div className="progress-bar gray-bar" style={{width: "70%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Windows/macOS</span>
                <div className="progress-bg">
                  <div className="progress-bar gray-bar" style={{width: "80%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Agile Methodology</span>
                <div className="progress-bg">
                  <div className="progress-bar gray-bar" style={{width: "60%"}}></div>
                </div>
              </li>
              <li className="skill-item">
                <span className="skill-name">Bitbucket</span>
                <div className="progress-bg">
                  <div className="progress-bar gray-bar" style={{width: "85%"}}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}