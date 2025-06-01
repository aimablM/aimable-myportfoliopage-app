import { Link } from "react-scroll";
import React from "react";
// Import the CSS file
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer--container">
      {/* Call to action section */}
      <div className="footer--cta">
        <h2 className="footer--cta--title">Let's Build Something Amazing Together</h2>
        <p className="footer--cta--text">
          I'm currently available for freelance projects, internships, and full-time positions. Let's collaborate on creating scalable, cloud-native solutions.
        </p>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="footer--cta--button"
        >
          Contact Me
        </Link>
      </div>
      
      {/* Main footer area */}
      <div className="footer--content--wrapper">
        {/* Logo and branding */}
        <div className="footer--branding">
          <img src="./img/amlogo.png" alt="AIMABLEM" className="footer--logo" />
        </div>
        
        {/* Navigation links */}
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="hero-section"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Projects"
                className="text-md"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Social media icons */}
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://linkedin.com/in/aimable-m-920608107"
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aimablM"
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/aimable_mugwane"
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter/X"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:aimable.mugwaneza@gmail.com"
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <hr className="divider" />
      
      {/* Bottom footer area */}
      <div className="footer--bottom">
        <p className="footer--content">© 2025 Aimable. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;