import { useEffect, useState } from "react";
import { links } from "../../data/site";
import { Close, Menu } from "./Icons";

const sections = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__mark">AM</span>
          <span className="nav__name">Aimable Mugwaneza</span>
        </a>

        <div className="nav__links" id="nav-menu">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={close}>
              {s.label}
            </a>
          ))}
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__menu-resume"
            onClick={close}
          >
            Résumé
          </a>
        </div>

        <div className="nav__aside">
          <span className="status">
            <span className="status__dot" />
            Open to Cloud / DevOps roles
          </span>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
