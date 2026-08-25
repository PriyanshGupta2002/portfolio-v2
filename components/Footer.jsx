import data from "@/data/portfolio.json";

export default function Footer() {
  const { profile, contact, footer } = data;

  // Build the "Elsewhere" column only from provided social URLs.
  const elsewhere = [
    { label: "GitHub", href: contact.socials?.github },
    { label: "LinkedIn", href: contact.socials?.linkedin },
    { label: "X / Twitter", href: contact.socials?.x },
  ].filter((s) => s.href);

  const columns = [
    {
      title: "Explore",
      links: [
        { label: "Overview", href: "#overview" },
        { label: "Work", href: "#work" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
      ],
    },
    {
      title: "Services",
      links: footer.services.map((label) => ({ label, href: "#" })),
    },
    ...(elsewhere.length > 0 ? [{ title: "Elsewhere", links: elsewhere }] : []),
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <span className="nav__logo nav__logo--footer">
              {profile.logoInitials}<span style={{ color: "var(--color-blue)" }}>.</span>
            </span>
            <p>{footer.blurb}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__legal">
          <p>Copyright © {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
