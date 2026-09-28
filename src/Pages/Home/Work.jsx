import { featuredProject as f, links, projects } from "../../data/site";
import { ArrowUpRight } from "./Icons";

function Arrow({ live }) {
  return (
    <svg
      className={`lane__arrow ${live ? "is-live" : ""}`}
      width="40"
      height="16"
      viewBox="0 0 40 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 8h30M29 3l5 5-5 5" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="section container">
      <div className="section__head section__head--split">
        <div>
          <span className="eyebrow">01 — Selected work</span>
          <h2 className="section__title">
            Shipped to the cloud,
            <br />
            not just to GitHub.
          </h2>
        </div>
        <a
          href={links.repositories}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          All repositories <ArrowUpRight />
        </a>
      </div>

      <article className="featured">
        <div className="featured__copy">
          <span className="eyebrow eyebrow--muted">Featured · 01</span>
          <h3 className="featured__title">{f.title}</h3>
          <p>{f.description}</p>
          <ul className="tags">
            {f.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="featured__links">
            <a href={f.repoUrl} target="_blank" rel="noopener noreferrer" className="accent">
              Repository <ArrowUpRight size={15} />
            </a>
            <a href={f.runsUrl} target="_blank" rel="noopener noreferrer">
              Pipeline runs <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="lanes" role="table" aria-label="Branch to environment mapping">
          <div className="lane lane--head" role="row">
            <span role="columnheader">Git branch</span>
            <span aria-hidden="true" />
            <span role="columnheader">ECR image tag</span>
            <span aria-hidden="true" />
            <span role="columnheader">Live on</span>
          </div>
          {f.lanes.map((l) => (
            <div key={l.branch} className={`lane ${l.live ? "is-live" : ""}`} role="row">
              <span className="chip" role="cell">{l.branch}</span>
              <Arrow live={l.live} />
              <span className="chip" role="cell">{l.tag}</span>
              <Arrow live={l.live} />
              <span className="chip chip--host" role="cell">{l.host}</span>
            </div>
          ))}
        </div>
      </article>

      <ol className="projects">
        {projects.map((p, i) => (
          <li key={p.url}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="project">
              <span className="project__num">{String(i + 2).padStart(2, "0")}</span>
              <span className="project__title">{p.title}</span>
              <span className="project__desc">{p.description}</span>
              <span className="project__stack">{p.stack}</span>
              <span className="project__arrow">
                <ArrowUpRight size={24} strokeWidth={1.8} />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
