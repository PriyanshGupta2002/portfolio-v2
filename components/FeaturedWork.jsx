import Reveal from "./Reveal";
import data from "@/data/portfolio.json";

function ProjectCard({ project, index }) {
  const visibleStack = project.stack.slice(0, 5);
  const remainingStackCount = project.stack.length - visibleStack.length;
  const artVars = {
    "--g1": project.artColors.from,
    "--g2": project.artColors.to,
    "--g3": project.artColors.accent,
  };

  return (
    <Reveal
      delay={(index % 2) * 90}
      className={`work-card-wrap ${project.featured ? "work-card-wrap--featured" : ""}`}
    >
      <article className={`work-card ${project.featured ? "work-card--featured" : ""}`}>
        <div className="work-media">
          <div className="work-art" style={artVars}>
            {project.featured && (
              <span className="work-featured-badge">Featured project</span>
            )}
            <span className="work-art__ring" aria-hidden="true" />
            <span className="work-art__orb" aria-hidden="true" />
            <div className="glass-chip" aria-hidden="true">
              <span className="skeleton skeleton--line glass-chip__t" />
              <span className="skeleton skeleton--line glass-chip__s" />
              <span className="skeleton skeleton--line glass-chip__xs" />
            </div>
            <span className="work-art__word" aria-hidden="true">{project.title}</span>
          </div>
        </div>
        <div className="work-body">
          <span className="work-tag">{project.tag}</span>
          <h3 className="work-title">{project.title}</h3>
          <p className="work-desc">{project.description}</p>
          <ul className="chip-row" aria-label="Technologies">
            {visibleStack.map((s) => (
              <li key={s} className="chip chip--dark">{s}</li>
            ))}
            {remainingStackCount > 0 && (
              <li className="chip chip--dark">+{remainingStackCount} more</li>
            )}
          </ul>
          {project.links?.length > 0 && (
            <div className="work-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  className="link-arrow"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <span aria-hidden="true">›</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function FeaturedWork() {
  return (
    <section className="section section--light" id="work">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Featured work</p>
          <h2 className="section-title">Selected projects.</h2>
          <p className="section-sub">
            Production-minded AI systems and full-stack products — each one
            built end to end.
          </p>
        </Reveal>

        <div className="work-grid">
          {data.projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
