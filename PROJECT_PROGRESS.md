# Project Overview

A personal developer portfolio for **Nithesh B Poojary**, built as a unique, Minecraft-inspired experience rather than a generic template. Key qualities:

- Minecraft-inspired pixel aesthetic (borrowed visual language, not a fan site)
- Modern, lightweight, fast-loading React portfolio
- Mobile-first
- Accessibility-first
- Performance-first
- Doubles as a showcase project demonstrating frontend craftsmanship and effective AI-assisted development

# Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- React Icons
- Lenis (smooth scroll)
- Framer Motion (only if a specific effect cannot be achieved cleanly with CSS)

# Completed Files

**styles/**
- ✓ variables.css
- ✓ theme.css
- ✓ globals.css
- ✓ animations.css

**index.css**
- ✓ index.css (Tailwind v4 entry, imports globals.css)

**components/common/**
- ✓ PixelButton.jsx
- ✓ PixelCard.jsx
- ✓ SectionTitle.jsx
- ✓ InventorySlot.jsx
- ✓ LoadingScreen.jsx
- ✓ BiomeBanner.jsx
- ✓ ScrollIndicator.jsx
- ✓ Navbar.jsx

**components/effects/**
- ✓ Clouds.jsx
- ✓ Mountains.jsx

**hooks/**
- ✓ useFirstVisit.js
- ✓ useLenis.js

**layouts/**
- ✓ MainLayout.jsx

# Manual Fixes

- Fixed missing opening `<a>` tag in `PixelButton.jsx`.
- Fixed missing opening `<a>` tags in `Navbar.jsx` (user corrected manually — do not regenerate `Navbar.jsx`).
- Replaced `font-display` / `font-body` with Tailwind v4 arbitrary syntax: `font-[family-name:var(--font-display)]` and `font-[family-name:var(--font-body)]` project-wide.
- Google Fonts (Inter, Press Start 2P) are loaded via `<link>` tags directly in `index.html`.
- `fonts.css` intentionally skipped — do not create it or revisit font loading unless explicitly asked.
- Removed duplicated keyframes/animation utility classes from `theme.css`; all animations live exclusively in `animations.css`.

# Important Project Rules

- Prefer CSS animations over Framer Motion; use Framer Motion only when CSS genuinely cannot achieve the effect.
- Use Lenis for smooth scrolling (respects `prefers-reduced-motion` — skipped entirely for those users).
- No contact form — Email, GitHub, LinkedIn links only.
- No dedicated Resume section — Resume is a CTA in Navbar, Hero, and Footer only.
- Must be fully mobile responsive, not just a shrunk desktop layout.
- Accessibility first: semantic HTML, focus-visible states, ARIA where needed, reduced-motion support everywhere.
- Build reusable components before using them in sections.
- Keep GitHub section lightweight — avoid unnecessary API calls.
- Minecraft-inspired UI language only — no copied Minecraft textures/assets, must still read as a professional portfolio.
- Fast loading is a hard constraint — minimal dependencies, CSS-first animation, lazy-load where relevant.
- AI transparency sign (exact wording from instructions) placed near the footer, styled as a wooden sign, not a popup.
- The portfolio itself is a demonstration of effective AI collaboration.
- The individual projects showcased (Typing Speed Test, Church Management System, Java Swing Calculator, Java Pac-Man) represent independent learning/programming experience, distinct from the portfolio's own AI-assisted build process.

# Remaining Files

**components/common/**
- Footer.jsx

**components/effects/**
- Grass.jsx
- FloatingBlocks.jsx
- Stars.jsx

**sections/**
- Hero.jsx
- About.jsx
- Skills.jsx
- Projects.jsx
- Github.jsx
- Contact.jsx
- AISign.jsx

**hooks/**
- useScrollReveal.js
- useWindowSize.js

**utils/**
- animations.js
- constants.js
- helpers.js

**data/**
- projects.js
- skills.js
- socials.js
- site.js

**root**
- App.jsx
- main.jsx (verify Lenis/font/global CSS imports are wired correctly once App.jsx exists)

# Remaining Development Phases

**Phase 2**
- Hero
- About
- Skills
- Projects
- GitHub
- Contact
- AI Sign
- Footer
- App.jsx

**Phase 3**
- Decorative effects (Grass, FloatingBlocks, Stars)
- Remaining reusable utilities (useScrollReveal, useWindowSize, utils/*)
- Responsive polish
- Accessibility review
- Performance optimization
- Final testing
- Deployment preparation

# Known Decisions

- Bevel system (`bevel-out` / `bevel-in`) is the signature visual motif — implemented once in `theme.css`, reused everywhere instead of per-component shadow rules.
- Spacing uses the `--space-block*` 8px-grid tokens; layout uses `--max-width`, `--navbar-height`, `--section-padding-x/y`; z-index uses `--z-navbar`, `--z-overlay`, `--z-loading` — no hardcoded pixel/z-index values going forward.
- Font utility convention is locked: always `font-[family-name:var(--font-display)]` / `font-[family-name:var(--font-body)]`, never `font-display`/`font-body`.
- `icon` props across components (PixelButton, InventorySlot, BiomeBanner, ScrollIndicator) expect a React Icons component reference (e.g. `FaGithub`), not an emoji string.
- Loading screen only plays once per session (`sessionStorage` via `useFirstVisit`), duration ~1s, CSS-driven progress bar.
- Lenis initializes once in `MainLayout`, not per-section.
- `Navbar.jsx` is user-finalized — do not regenerate or modify without explicit request.
- Contribution graph / GitHub API approach not yet decided — resolve when building `Github.jsx`, keeping the "lightweight, no unnecessary API calls" rule in mind (favor an embedded static image or minimal single fetch over a live-rendered graph).

# Next Step

Implement `src/components/effects/Grass.jsx` (next effect in Phase 2/3, needed by `Hero.jsx`), then proceed to `Hero.jsx` itself.