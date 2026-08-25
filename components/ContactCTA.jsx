import Reveal from "./Reveal";
import data from "@/data/portfolio.json";

const ICONS = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="5" y1="4" x2="19" y2="20" />
      <line x1="19" y1="4" x2="5" y2="20" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export default function ContactCTA() {
  const { contact } = data;

  // Only render contact channels that actually exist in the data.
  const socials = [
    { label: "GitHub", href: contact.socials?.github },
    { label: "LinkedIn", href: contact.socials?.linkedin },
    { label: "X", href: contact.socials?.x },
  ].filter((s) => s.href);

  return (
    <section className="section section--dark section--flush" id="contact">
      <div className="container">
        <Reveal className="cta-banner-wrap">
          <div className="cta-banner">
            <p className="eyebrow eyebrow--dark">Contact</p>
            <h2 className="cta-title">
              Let&apos;s build something
              <br />
              extraordinary.
            </h2>
            <p className="cta-sub">{contact.availability}</p>

            {(contact.email || contact.phone || socials.length > 0) && (
              <div className="hero__actions cta-actions">
                {contact.email && (
                  <a className="btn btn--primary btn--lg" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a
                    className="btn btn--ghost btn--lg"
                    href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  >
                    <span className="btn-icon" aria-hidden="true">{ICONS.phone}</span>
                    {contact.phone}
                  </a>
                )}
                {!contact.email && !contact.phone && socials.length > 0 && (
                  <a
                    className="btn btn--primary btn--lg"
                    href={socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on {socials[0].label}
                  </a>
                )}
              </div>
            )}

            {socials.length > 0 && (
              <ul className="socials" aria-label="Social links">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                      {ICONS[s.label === "X" ? "x" : s.label.toLowerCase()]}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
