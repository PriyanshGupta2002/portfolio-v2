import Reveal from "./Reveal";
import data from "@/data/portfolio.json";

export default function ExperienceTimeline() {
  return (
    <section className="section section--light" id="experience">
      <div className="container container--narrow">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where I&apos;ve worked.</h2>
          <p className="section-sub">
            From full-stack foundations to production AI systems.
          </p>
        </Reveal>

        <ol className="timeline">
          {data.experience.map((item, i) => (
            <Reveal
              key={item.company}
              delay={i * 90}
              as="li"
              className={`timeline__item ${item.period?.includes("Present") ? "timeline__item--current" : ""}`}
            >
              <div className="timeline__head">
                {item.period && <span className="timeline__period">{item.period}</span>}
                {item.period?.includes("Present") && (
                  <span className="timeline__current">Current role</span>
                )}
                <h3 className="timeline__role">
                  {item.role} <span className="timeline__company">· {item.company}</span>
                </h3>
              </div>
              <p className="timeline__summary">{item.summary}</p>
              {item.tags?.length > 0 && (
                <ul className="chip-row">
                  {item.tags.map((t) => (
                    <li key={t} className="chip chip--dark">{t}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
