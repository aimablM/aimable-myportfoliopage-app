export default function About() {
  return (
    <section id="about" className="section container about">
      <span className="eyebrow">03 — About</span>
      <p className="about__statement">
        I started out chasing software engineering. Then I fell for the part
        nobody sees —{" "}
        <span className="accent">
          how code runs, scales and stays secure in production.
        </span>
      </p>
      <div className="about__grid">
        <p>
          I think in systems now. I architect full-stack apps, ship them with
          Docker on EC2, host static sites on S3 and CloudFront, wire up Route
          53, and lock it all down with IAM, security groups and Terraform.
        </p>
        <p>
          Every project here is public and documented — proof of what I can
          build, not just what I’ve studied. Cloud and DevOps blend what I
          love: infrastructure, automation, security and impact.
        </p>
        <div className="about__edu">
          <span className="eyebrow eyebrow--muted">Education</span>
          <strong>Computer Science</strong>
          <span className="muted">Towson University</span>
        </div>
      </div>
    </section>
  );
}
