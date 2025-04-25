export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Get To Know More</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--aboutme--description">
            I’m a soon-to-be Computer Science graduate who started out chasing software engineering — but along the way, I found something that completely reshaped my direction: cloud and DevOps.
            </p>
            <p className="hero--aboutme--description">
            What began as a side curiosity turned into a full-blown passion. I realized I loved designing systems more than just building features. I wasn’t satisfied writing code in isolation — I wanted to understand how it runs, scales, communicates, and stays secure in production. That led me to architect fullstack apps, deploy them with Docker on EC2, host static sites with S3 and CloudFront, configure Route 53 for custom domains, and use IAM, Security Groups, and Terraform to secure and automate it all.
            </p>

            <p className="hero--aboutme--description">
            This journey has reignited my drive and purpose. I think in systems now — sketching out ideas at night, imagining how components connect, and constantly applying what I learn in real-world scenarios. I’ve earned my AWS Cloud Practitioner, I’m pursuing Security+ and SAA, and I’m building public, documented projects to show what I know — not just what I’ve studied.
            </p>
            <p className="hero--aboutme--description">Cloud and DevOps blend everything I love: infrastructure, automation, security, creativity, and impact. It’s less saturated, highly in demand, and rewards those who can bridge software with systems — and that’s where I thrive. I’m not just following a path — I’m creating one. And I’m just getting started.</p>
          </div>
        </div>
      </section>
    );
  }