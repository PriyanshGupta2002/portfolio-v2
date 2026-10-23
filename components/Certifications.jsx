import Reveal from "./Reveal";
import data from "@/data/portfolio.json";

export default function Certifications() {
  if (!data.certifications?.length) return null;

  return (
    <section className="section section--gray" id="certifications">
      <div className="container container--narrow">
        <Reveal>
          <p className="eyebrow">Certification</p>
          <h2 className="section-title">Verified expertise.</h2>
          <p className="section-sub">
            Credentials that reflect a commitment to building production-ready AI.
          </p>
        </Reveal>

        <div className="certification-list">
          {data.certifications.map((certification, index) => (
            <Reveal key={certification.title} delay={index * 90}>
              <article className="certification-card">
                <div className="certification-card__mark" aria-hidden="true">
                  {certification.abbreviation}
                </div>
                <div className="certification-card__body">
                  <p className="certification-card__issuer">{certification.issuer}</p>
                  <h3 className="certification-card__title">{certification.title}</h3>
                  <p className="certification-card__description">
                    {certification.description}
                  </p>
                  {certification.focus?.length > 0 && (
                    <ul className="chip-row" aria-label="Certification topics">
                      {certification.focus.map((topic) => (
                        <li key={topic} className="chip">{topic}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {certification.url && (
                  <a
                    className="link-arrow certification-card__link"
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify on Credly <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
