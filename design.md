# Design System — Priyansh Gupta Portfolio

> **For humans and AI agents.** If you are an AI assistant working on this
> project, read this file first and follow its rules. When this file and the
> code disagree, the code wins — then update this file.
>
> **Upstream reference:** [`apple/DESIGN.md`](apple/DESIGN.md) — the official
> Apple design-language analysis from [getdesign.md](https://getdesign.md/apple/design-md)
> (`npx getdesign@latest add apple`). It describes the general Apple web
> grammar; THIS file describes what our codebase actually implements, including
> deliberate divergences listed in §11. For UI work, consult both — this file
> wins on conflict.

## 1. Product identity

Apple product-page aesthetic applied to a personal portfolio for an AI
engineer. The design signals precision, calm confidence, and craft:

- SF-style system typography (`-apple-system` stack)
- Translucent frosted-glass chrome over scrolling content
- Alternating white / gray / black full-bleed sections
- Generous whitespace; huge, tightly-tracked headlines ending in a period
- Restrained color: monochrome surfaces + Apple blues/purples only as accent
- Motion is subtle: fade-up reveals, soft glows, no bounce

## 2. Source of truth

| Artifact | Path |
| --- | --- |
| Design tokens & all styling | `app/globals.css` |
| Content (single source of truth) | `data/portfolio.json` |
| Page composition | `app/page.jsx`, components in `components/` |
| Theme bootstrap (no-flash script) | `app/layout.jsx` |

**Content rule:** text, projects, skills, links live ONLY in
`data/portfolio.json`. Components render whatever is there. Never hardcode
copy into JSX. Empty fields must degrade gracefully (e.g. missing email or
socials hide their UI instead of rendering dead links).

## 3. Color tokens

All mode-dependent color goes through CSS custom properties declared in
`:root` (light defaults) and overridden under `html.dark`.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--color-text` | `#1d1d1f` | `#f5f5f7` | Primary text |
| `--color-text-secondary` | `#6e6e73` | `#a1a1a6` | Subheads, descriptions |
| `--color-text-mid` | `#424245` | `#b9b9be` | Chips, footer links, summaries |
| `--color-text-tertiary` | `#86868b` | `#86868b` | Eyebrows, meta |
| `--color-bg-light` (page sections) | `#ffffff` | `#000000` | `.section--light` |
| `--color-bg-gray` (alt bands) | `#f5f5f7` | `#161617` | `.section--gray/flush`, marquee, footer |
| `--color-card` | `#ffffff` | `#1d1d1f` | Cards on either band |
| `--color-hairline` | `#d2d2d7` | `#424245` | Dividers, timeline rail |
| `--color-link` | `#0066cc` | `#2997ff` | Arrow links |
| `--color-blue` (buttons) | `#0071e3` (hover `#0077ed`) | same | Pills, CTAs |
| Accent gradients | `#2997ff → #bf5af2 → #ff375f` | same | Hero tagline, icons, favicon |
| Project art | per-project `artColors` in JSON → `--g1/--g2/--g3` | same | `.work-art` backgrounds |

**Never** introduce a raw hex color inside a component or new rule — add or
reuse a token. The hero and CTA banner stay black in BOTH modes (product-page
style); do not theme them.

## 4. Typography

Font stack: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif`

| Element | Size | Weight | Tracking |
| --- | --- | --- | --- |
| Hero name | `clamp(52px, 9vw, 104px)` | 700 | `-0.02em` |
| Gradient tagline | `clamp(27px, 4.2vw, 44px)` | 650 | `-0.015em` |
| Section title | `clamp(34px, 5vw, 56px)` | 650 | `-0.015em` |
| CTA title | `clamp(36px, 6vw, 64px)` | 700 | `-0.018em` |
| Card titles | `clamp(26px, 3vw, 34px)` | 650 | `-0.015em` |
| Body / sub | 17–21px | 400 | `-0.022em` (body default) |
| Eyebrow labels | 13px, uppercase | 600 | `+0.12em` |

Headlines end with a period ("Selected projects."). That is intentional voice.

## 5. Layout & spacing

- Container: max-width `1092px`; narrow variant `800px`; inline padding `clamp(20px, 4vw, 40px)`
- Section rhythm: `clamp(90px, 12vw, 150px)` vertical padding
- Card radius: `28px`; buttons/chips fully rounded (`980px`)
- Bento grid: 6 columns — main/wide cells span 4, small cells span 2; collapse to full width ≤1068px/≤734px
- Work grid: featured cards span both columns and go horizontal ≥900px
- Breakpoints: `1068px`, `900px`, `833px` (nav collapses), `734px`

## 6. Signature components

- **Navbar** — fixed 48px (44px mobile), `backdrop-filter: saturate(180%) blur(20px)` over 80% surface, hairline shadow after 8px scroll, full-screen frosted overlay menu ≤833px
- **Hero** — black section, three blurred aurora glows (blue/purple/pink, `drift` animation), pure-CSS MacBook mockup whose "screenshot" follows the active theme via scoped `--ui-*` vars
- **Marquee** — seamless infinite scroll (list rendered twice, `translateX(-50%)` loop), pauses on hover
- **Work cards** — gradient art from `--g1/--g2/--g3`, glass chip, watermark title, lift-on-hover
- **Bento** — animated skill bars: fill width animates to `--level` when parent `.reveal.is-visible`
- **CTA banner** — black rounded promo tile with radial glow accents
- **Footer** — multi-column 12px small-print, hairline-separated legal row

## 7. Motion rules

- Reveal: `opacity 0→1`, `translateY(28px→0)`, `0.85s cubic-bezier(0.16,1,0.3,1)`, triggered once by IntersectionObserver (`.reveal.is-visible`)
- Theme switch cross-fades surfaces over `0.35s`
- Hovers: card lift `-8px` + soft shadow; arrow-link chevron nudges right
- `prefers-reduced-motion: reduce` disables ALL animation — never remove that block

## 8. Theming mechanics

1. Inline script in `app/layout.jsx` runs before paint: saved `localStorage.theme` → else system preference → adds `dark` class to `<html>`
2. `<html>` carries `suppressHydrationWarning`
3. Toggle (`components/ThemeToggle.jsx`) flips the class + persists; icons swap purely in CSS
4. New colors MUST be added as tokens in both `:root` and `html.dark`

## 9. Accessibility

- Semantic landmarks (`header/nav/main/footer/section`), labelled progress bars
- Icon-only controls have `aria-label`; decorative elements `aria-hidden`
- Text contrast follows Apple's palette (verified pairs above); don't lighten grays on dark beyond the tokens listed
- Keyboard-focusable nav, menu, toggle

## 10. Rules for AI agents editing this repo

1. Read `data/portfolio.json` before any content change; edit data, not JSX copy
2. Keep styling in `app/globals.css` using existing tokens; propose new tokens rather than inline values
3. Preserve graceful-degradation behavior for empty optional fields
4. After structural changes run `npm run build`; do NOT run builds while `npm run dev` is serving (they share `.next/` and corrupt the dev manifest — stop dev first, rebuild, restart)
5. Keep animations subtle and reduced-motion safe

## 11. Relationship to upstream `apple/DESIGN.md`

The upstream spec is a faithful analysis of apple.com's marketing grammar.
Our portfolio follows its spirit but diverges deliberately in these places —
all intentional, keep them when refactoring:

| Upstream says | We do instead | Why |
| --- | --- | --- |
| "No decorative gradients" | Gradient tagline text, aurora hero glows, gradient icon chips, per-project art gradients | Signals AI-engineering identity (Apple-Intelligence-era palette `#2997ff → #bf5af2 → #ff375f`), not classic hardware Apple |
| Global nav is 44px true black | 48px frosted light/dark-aware nav (`rgba(251,251,253,.8)` / `rgba(22,22,23,.8)`) | Personal-site convention (apple.com uses black global-nav + frosted sub-nav; we merged into one bar) |
| Headlines at weight 600, ladder 300/400/600/700 | 650/700 for display, 500 on buttons/chips | SF-style variable weights render better at huge sizes; small sizes need 500 for legibility |
| Cards carry no shadows; one product-only shadow | Hover lift + soft shadow on cards | Portfolio cards ARE the products — hover affordance replaces photography |
| Hover states never documented | Hover behavior specified in §7 | This is an implementation doc, not a catalog entry |
| Tiles are full-bleed, radius 0 | Section content in rounded 28px cards on banded backgrounds | Portfolio reads as a single scrolling product page rather than stacked tiles |

Everything else — the 17px body, tight display tracking, pill CTAs,
parchment `#f5f5f7`, hairline discipline, single-blue interactivity
(dark-mode `#2997ff` variant), 44px touch targets, footer fine-print style —
follows upstream. When adding new UI, default to upstream rules unless this
table says otherwise.
