import { Link } from "react-scroll";

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Aimable</p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">
              Aspiring Software Engineer |
              </span>{" "}
              <br />
              Computer Science Student
            </h1>
            <p className="hero--section--description">
            Transforming complex problems into elegant code solutions. 
              Passionate Towson University senior ready to innovate and make a lasting impact in the world of software engineering.
            </p>
          </div>
          
          <div className="hero--button--container">
            
            <div className="hero--container--one">
            
            <button className="btn btn-primary ">
        
                Get In Touch

              </button>
            
              <button onClick={() => {
                  window.open("./resume.pdf", '_blank', 'noopener noreferrer')
                }}   className="btn btn-primary">Resume</button>
            </div>

              <div className="hero--container--two">
                <button onClick={() => {
                  window.open("https://linkedin.com/in/aimable-m-920608107", '_blank', 'noopener noreferrer')
                }} className="btn btn-primary btn-socials"><img src="/img/linkedin.png" alt="LinkedIn" /></button>
            <button onClick={() => {
                  window.open("https://github.com/aimablM", '_blank', 'noopener noreferrer')
                }} className="btn btn-primary btn-socials">
            <img src="/img/github.png" alt="GitHub" /></button>
            <button onClick={() => {
                  window.open("https://x.com/aimable_mugwane", '_blank', 'noopener noreferrer')
                }} className="btn btn-primary btn-socials">
            <img src="/img/twitter.png" alt="Twitter" /></button>
              </div>

    
          </div>
        </div>
        
        <div className="hero--section--image">
          <img src="./img/hero_img.png" alt="Hero Section" className="hero--img"/>
        </div>
      </section>
    );
  }