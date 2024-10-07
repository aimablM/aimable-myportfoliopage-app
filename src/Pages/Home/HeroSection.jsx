export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section" >
            <div className="hero--section--content--box">
                <div className="hero--section--content"> 
                <p className="section--title">Hey, I'm Aimable </p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">
                        Computer Science 
                        Student 
                    </span>{" "}
                    <br />
                    Software Engineer
                </h1>
                <p className="hero--section--description">
                In my final year at Towson University, studying Computer Science.
                    <br />
                    I aim to leverage my skills to build software that improves lives and shapes the future.
                </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
                <a href="/public/resume.pdf" download>
                <button className="btn btn-resume">Resume</button>
        </a>
                
                
                <div >
          <a href="https://twitter.com/" target="_blank">
            <img src="./img/twitter-light.svg" alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src="./img/avatar-image-1.png" alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src="./img/twitter-light.svg" alt="Linkedin icon" />
          </a>
        </div>

            </div>
            <div className="hero--section--image">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}

