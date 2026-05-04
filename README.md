# Rise at Seven — Clone

A pixel-perfect static clone of [riseatseven.com](https://riseatseven.com), built without a backend or build tools.

**Live demo → [rise-at-seven.vercel.app](https://rise-at-seven.vercel.app)**

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Tailwind CSS (CDN v3) | Utility-first styling |
| GSAP 3.12.5 + ScrollTrigger | Scroll animations, sticky sections, parallax |
| Alpine.js 3.14.3 | Reactive UI — nav, mobile menu, hero tabs |
| Swiper 11 | Logo carousel |
| Vercel | Hosting + static asset caching |

## Key Features Replicated

- **Intro circle-mask reveal** — SVG ellipse animates on page load
- **Fixed header with hide-on-scroll** — slides up on scroll down, reappears on scroll up
- **Mobile hamburger menu** — semi-transparent frosted panel with scroll lock
- **Hero image tabs** — Alpine-powered active state with blur transition
- **Featured Work sticky scroll** — GSAP pins dark card while case study images scroll vertically
- **Logo carousel** — infinite Swiper loop with edge fade
- **Footer reveal animation** — content animates in on scroll

## Project Structure

```
index.html     # Full page markup + inline Alpine components
styles.css     # Custom CSS (resets, aspect-ratio utilities, animations)
scripts.js     # GSAP ScrollTrigger builds + Swiper init
fonts/         # Self-hosted typefaces
images/        # All site images (CDN-migrated to local)
vercel.json    # Cache headers for static assets
```

## Notable Fixes

- `aspect-20/9`, `aspect-4/3`, `aspect-1/1` — Tailwind CDN doesn't generate fraction-notation aspect classes; added manual CSS rules
- `overflow-x: clip` on `body` — prevents horizontal scrollbar from `w-[120vw]` carousel without breaking `position: sticky` (unlike `overflow-x: hidden`)
- Scroll lock targets `<html>` not `<body>` since `body` is no longer the scroll container
