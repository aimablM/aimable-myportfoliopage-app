// HeroSection.jsx
import { Link } from "react-scroll";
import "./Hero.css";

export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle">Hey, I'm Aimable</h2>
          <h1 className="hero-title">
            <span className="hero-title-primary">Junior Cloud</span> | 
            <span className="hero-title-secondary"> DevOps Engineer</span>
          </h1>
          <p className="hero-description">
            Turning code into containers and pipelines into production. Modern applications demand more than code, they need robust, automated, and secure infrastructure. That's what I build.
          </p>
          <div className="hero-buttons">
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="btn btn-primary"
            >
              Get In Touch
            </Link>
            <button 
              onClick={() => {
                window.open("./Aimable_Mugwaneza_Resume_2025.pdf", '_blank', 'noopener noreferrer')
              }}
              className="btn btn-secondary"
            >
              Resume
            </button>
          </div>
          <div className="social-links">
            <button 
              onClick={() => {
                window.open("https://linkedin.com/in/aimable-m-920608107", '_blank', 'noopener noreferrer')
              }} 
              className="social-button"
            >
              <i className="fab fa-linkedin"></i>
            </button>
            <button 
              onClick={() => {
                window.open("https://github.com/aimablM", '_blank', 'noopener noreferrer')
              }} 
              className="social-button"
            >
              <i className="fab fa-github"></i>
            </button>
            <button 
              onClick={() => {
                window.open("https://x.com/aimable_mugwane", '_blank', 'noopener noreferrer')
              }} 
              className="social-button"
            >
              <i className="fab fa-twitter"></i>
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="./img/hero_img.png" alt="Aimable" className="hero-image" />
        </div>
      </div>
    </header>
  );
}