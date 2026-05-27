# Astronautia

Compact autonomous exploration systems for observing water and sky.

## Overview

Astronautia creates small-scale autonomous vessels (30–40 cm) designed for lakes, ponds, beaches, and calm coastal waters. Each system combines autonomous navigation, environmental sensing, underwater observation, and remote monitoring into a quiet platform for exploration and discovery.

## Tech Stack

- **Next.js 15** — App Router, React Server Components
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Cinematic page transitions and animations
- **Lucide React** — Icon system

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
app/
  ├── page.tsx           # Home
  ├── about/page.tsx     # About
  ├── systems/page.tsx   # Product systems
  ├── explore/page.tsx   # Exploration modes
  ├── store/page.tsx     # Store with cart
  ├── journal/page.tsx   # Mission journal
  ├── support/page.tsx   # Support & FAQs
  ├── community/page.tsx # Community missions
  ├── downloads/page.tsx # Downloadable resources
  ├── contact/page.tsx   # Contact form
  ├── privacy/page.tsx   # Privacy policy
  ├── terms/page.tsx     # Terms of service
  ├── easter-egg/page.tsx # Hidden page
  ├── not-found.tsx      # 404 page
  ├── layout.tsx         # Root layout
  ├── template.tsx       # Page transition wrapper
  └── globals.css        # Global styles

components/
  ├── navbar.tsx         # Floating navigation
  ├── footer.tsx         # Site footer
  ├── loading-screen.tsx # Initial loading animation
  ├── section-wrapper.tsx # Scroll-triggered animations
  ├── telemetry-overlay.tsx # Ctrl+T telemetry HUD
  └── audio-toggle.tsx   # Ambient audio placeholder

lib/
  ├── utils.ts           # Utility functions
  └── data.ts            # Static content data

public/
  ├── logo.png           # Astronautia logo
  ├── fonts/             # Instrument Serif font files
  ├── images/            # Placeholder imagery
  └── favicon.ico        # Favicon
```

## Features

- Cinematic loading screen with telemetry-inspired animation
- Floating navbar with scroll-aware background
- Page transitions via Framer Motion
- Telemetry overlay (Ctrl+T)
- Audio toggle placeholder
- Functional shopping cart in Store
- Expandable FAQ accordions
- Contact form with validation
- Hidden easter egg page
- Fully responsive design
- Dark mode by default

## Deployment

This project is configured for static export and ready to deploy to Vercel:

```bash
npm run build
```

The `dist` folder will contain the static export.

## Brand

- **Colors:** Matte black, warm white, soft graphite grey, accent gold
- **Typography:** Instrument Serif (headings), Inter (body), IBM Plex Mono (data)
- **Tagline:** Built for the relentless.

## License

© 2026 Astronautia. All rights reserved.
