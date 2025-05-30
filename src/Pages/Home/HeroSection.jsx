import { Link } from "react-scroll";

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Aimable, </p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">
              Aspiring Cloud | DevOps Engineer
              </span>{" "}
              <br />
              Turning code into containers and pipelines into production.
            </h1>
            <p className="hero--section--description">
            Modern applications demand more than code — they need robust, automated, and secure infrastructure. That’s what I build. My goal isn’t just to deploy — it’s to design cloud systems that can evolve, scale, and last.
            </p>
          </div>
          
          <div className="hero--button--container">
            
            <div className="hero--container--one">
            
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
            
              <button onClick={() => {
                  window.open("./Aimable_Mugwaneza_Resume_2025.pdf", '_blank', 'noopener noreferrer')
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