import { certifications, nextCertification } from "../../data/site";

export default function Certifications() {
  return (
    <section className="certs" aria-label="Certifications">
      <div className="container certs__inner">
        <span className="eyebrow eyebrow--muted certs__label">
          Certified{" "}
          <br />
          &amp; verified
        </span>
        <ul className="certs__list">
          {certifications.map((c) => (
            <li key={c.pdf}>
              <a href={c.pdf} target="_blank" rel="noopener noreferrer" className="cert">
                <img src={c.badge} alt="" width="64" height="64" loading="lazy" />
                <span>
                  {c.name}
                  <br />
                  <span className="muted">{c.level}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <span className="eyebrow eyebrow--muted certs__next">
          Next up
          <br />
          <span className="certs__next-name">{nextCertification}</span>
        </span>
      </div>
    </section>
  );
}
