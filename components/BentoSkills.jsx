import Reveal from "./Reveal";
import data from "@/data/portfolio.json";

export default function BentoSkills() {
  const { skills } = data;

  return (
    <section className="section section--gray" id="skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">Skills &amp; tools.</h2>
          <p className="section-sub">
            A toolkit built by shipping real products — from RAG pipelines to
            production web apps.
          </p>
        </Reveal>

        <div className="bento">
          {/* Big card — core proficiency */}
          <Reveal className="bento__cell bento__cell--main">
            <article className="bento-card bento-card--tall">
              <span className="bento-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              <h3 className="bento-title">Full-stack engineering</h3>
              <p className="bento-copy">
                One person, whole product: typed APIs, resilient frontends and
                the glue between them.
              </p>
              <ul className="skill-list">
                {skills.frontendBars.map((bar) => (
                  <li key={bar.label} className="skill">
                    <div className="skill__meta">
                      <span>{bar.label}</span>
                      <span className="skill__value">{bar.level}</span>
                    </div>
                    <div
                      className="skill__track"
                      role="progressbar"
                      aria-label={bar.label}
                      aria-valuenow={parseInt(bar.level, 10)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="skill__fill" style={{ "--level": bar.level }} />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Frontend & interfaces */}
          <Reveal delay={90} className="bento__cell">
            <article className="bento-card">
              <span className="bento-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </span>
              <h3 className="bento-title">Frontend &amp; interfaces</h3>
              <p className="bento-copy">{skills.designIntro}</p>
              <ul className="chip-row">
                {skills.designChips.map((c) => (
                  <li key={c} className="chip">{c}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Backend */}
          <Reveal delay={180} className="bento__cell">
            <article className="bento-card">
              <span className="bento-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </span>
              <h3 className="bento-title">Backend &amp; infra</h3>
              <p className="bento-copy">{skills.backendIntro}</p>
              <ul className="chip-row">
                {skills.backendChips.map((c) => (
                  <li key={c} className="chip">{c}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* AI engineering — wide, dark accent card */}
          <Reveal delay={120} className="bento__cell bento__cell--wide">
            <article className="bento-card bento-card--glow">
              <span className="bento-icon bento-icon--spark" aria-hidden="true">✦</span>
              <h3 className="bento-title">AI engineering</h3>
              <p className="bento-copy">{skills.exploringIntro}</p>
              <ul className="chip-row">
                {skills.exploringChips.map((c) => (
                  <li key={c} className="chip chip--accent">{c}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
