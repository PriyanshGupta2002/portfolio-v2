"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import data from "@/data/portfolio.json";

const LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <nav className="nav__inner" aria-label="Primary">
          <a className="nav__logo" href="#overview" onClick={() => setOpen(false)}>
            {data.profile.logoInitials}<span className="nav__logo-dot">.</span>
          </a>

          <ul className="nav__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <ThemeToggle />
            <a className="btn btn--sm nav__cta" href="#contact">
              Hire me
            </a>
            <button
              type="button"
              className={`nav__burger ${open ? "is-open" : ""}`}
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay — a sibling of the header so its fixed
          positioning is relative to the viewport, not the backdrop-filtered
          navbar (which would otherwise become its containing block). */}
      <div className={`nav__menu ${open ? "is-open" : ""}`}>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href} style={{ transitionDelay: open ? `${60 + LINKS.indexOf(l) * 50}ms` : "0ms" }}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li style={{ transitionDelay: open ? "340ms" : "0ms" }}>
            <a href="#contact" onClick={() => setOpen(false)}>
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
