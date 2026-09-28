import { ArrowRight, Check } from "./Icons";

const pipelineSteps = [
  "docker build",
  "push → ECR :latest",
  "deploy → EC2 + NGINX",
  "https://aimablem.dev",
];

export default function Hero() {
  return (
    <header id="top" className="hero container">
      <div className="hero__copy">
        <span className="eyebrow eyebrow--muted">
          Cloud &amp; DevOps Engineer · AWS · Terraform · Docker
        </span>
        <span className="status status--mobile">
          <span className="status__dot" />
          Open to Cloud / DevOps roles
        </span>
        <h1 className="hero__title">
          Code in.
          <br />
          Production
          <br />
          <span className="accent">out.</span>
        </h1>
        <p className="hero__lede">
          I’m Aimable — I design the containers, pipelines and AWS
          infrastructure that carry an app from <code>git push</code> to a
          live, secure URL.
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            See the work <ArrowRight />
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__panel" aria-hidden="true" />
        <img
          className="hero__portrait"
          src="/img/portrait.png"
          alt="Portrait of Aimable Mugwaneza"
          width="560"
          height="647"
        />
        <div className="pipeline-card" aria-label="Deployment pipeline for this site">
          <div className="pipeline-card__head">
            <span>main → production</span>
            <span className="accent">● passing</span>
          </div>
          <ul>
            {pipelineSteps.map((step) => (
              <li key={step}>
                <span className="accent">
                  <Check />
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
