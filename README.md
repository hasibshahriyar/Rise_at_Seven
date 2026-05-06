# Rise at Seven — React

A pixel-faithful React rebuild of [riseatseven.com](https://riseatseven.com).

**Live demo → [rise-at-seven.vercel.app](https://rise-at-seven.vercel.app)**

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | Component framework & build |
| Tailwind CSS 3 | Utility-first styling |
| GSAP 3 + ScrollTrigger | All animations & scroll effects |
| Swiper | Touch carousels (Logo, Legacy, WhatsNew) |
| FontAwesome Pro | Icon kit |
| Vercel | Hosting + static asset caching |

## Features

- **Custom circular cursor** — mint-green cursor activates on interactive elements (pointer:fine only)
- **GSAP page-reveal** — SVG ellipse mask animation on load
- **Scroll-driven animations** — heading parallax, horizontal marquee loop, stacked card scroll scrub
- **Circle-mask hover effect** — blurred image reveals on hover for blog/work cards
- **Responsive** — Swiper carousels on mobile, static grids on desktop; distinct layouts per breakpoint
- **Saans typeface** — custom font self-hosted in `/public/fonts/`

## Project Structure

```
src/
  App.jsx              # Root layout, CustomCursor, CircleMaskReveal
  index.css            # Design tokens, font-faces, global styles
  components/          # One file per section
public/
  fonts/               # Self-hosted Saans woff2 files
  images/              # All site images
index.html             # Vite entry point + FontAwesome kit
vercel.json            # Build config + cache headers
```

## Deploy

Deploys automatically via Vercel on every push to `main`.  
Build command: `npm run build` — output directory: `dist`

