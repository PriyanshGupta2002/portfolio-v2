# Apple-Style Portfolio — Next.js

A portfolio website built with **Next.js 15** (App Router) in Apple's product-page design
language: SF-style typography, translucent frosted-glass navigation, alternating light/dark
sections, generous whitespace, and buttery scroll animations.

## Run it

```bash
npm install
npm run dev      # development → http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve production build
```

> Note: if port 3000 is busy, Next.js automatically uses the next free port (e.g. 3001).

## Structure

```
app/
  layout.jsx          # Root layout + metadata
  page.jsx            # Page composition
  globals.css         # Full Apple-style design system (tokens → sections)
  icon.svg            # Favicon (gradient monogram)
components/
  Navbar.jsx          # Frosted sticky nav + mobile overlay menu (client)
  Hero.jsx            # Dark aurora hero + pure-CSS MacBook mockup
  TechMarquee.jsx     # Infinite scrolling tech-stack ticker
  FeaturedWork.jsx    # Product-style project cards (featured + grid)
  BentoSkills.jsx     # Bento-grid capabilities with animated skill bars
  ExperienceTimeline.jsx
  ContactCTA.jsx      # Black promo banner + social links
  Footer.jsx          # Multi-column small-print footer
  Reveal.jsx          # IntersectionObserver scroll-reveal wrapper (client)
```

## Customizing

All placeholder content lives directly in the components:

- **Name / tagline** — `Hero.jsx` (`hero__title`, `hero__gradient`, `hero__sub`)
- **Projects** — `PROJECTS` array at the top of `FeaturedWork.jsx` (each card's gradient art
  is driven by the `art` CSS variables)
- **Skills & bars** — `BARS` / chip arrays in `BentoSkills.jsx`
- **Experience** — `ROLES` array in `ExperienceTimeline.jsx`
- **Contact email & socials** — `ContactCTA.jsx`
- **Footer columns** — `COLUMNS` array in `Footer.jsx`
- **Accent colors, radii, spacing** — CSS custom properties under `Tokens` in `app/globals.css`

## Design notes

- Typeface: system font stack (`-apple-system` / SF Pro on Apple devices)
- Nav: `backdrop-filter: saturate(180%) blur(20px)` over an 80% white base — same recipe as apple.com
- Animations respect `prefers-reduced-motion`
- Fully static export — deploys anywhere (Vercel, Netlify, GitHub Pages via `output: 'export'`)
