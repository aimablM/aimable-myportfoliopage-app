import { links } from "../../data/site";
import { ArrowUpRight } from "./Icons";

const socials = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "X / Twitter", href: links.x },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="eyebrow eyebrow--ink">04 — Contact</span>
      <h2 className="contact__title">
        Let’s build{" "}
        <br />
        something that{" "}
        <br />
        stays up.
      </h2>
      <div className="contact__row">
        <a href={`mailto:${links.email}`} className="contact__email">
          {links.email} <ArrowUpRight size={32} strokeWidth={2.2} />
        </a>
        <ul className="contact__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn--ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="contact__footer">
        <span>© {new Date().getFullYear()} Aimable Mugwaneza</span>
        <span>Served from AWS · built with Docker, Terraform &amp; GitHub Actions</span>
      </footer>
    </section>
  );
}
