import data from "@/data/portfolio.json";

export default function TechMarquee() {
  // List is rendered twice so the CSS loop can scroll seamlessly.
  const row = [...data.techMarquee, ...data.techMarquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
