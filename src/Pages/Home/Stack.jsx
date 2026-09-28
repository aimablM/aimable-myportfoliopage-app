import { stack } from "../../data/site";

export default function Stack() {
  return (
    <section id="stack" className="section container stack">
      <div className="stack__intro">
        <span className="eyebrow">02 — Stack</span>
        <h2 className="section__title section__title--md">
          The tools
          <br />
          I reach for.
        </h2>
        <p className="muted">
          A software background, pointed at infrastructure — recently focused
          on containers, microservices and AWS.
        </p>
      </div>
      <dl className="stack__groups">
        {stack.map((g) => (
          <div key={g.label} className="stack__group">
            <dt className="eyebrow eyebrow--muted">{g.label}</dt>
            <dd>
              <ul className="pills">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
