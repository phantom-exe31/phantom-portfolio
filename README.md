# Phantom.exe Portfolio

Personal portfolio website for Phantom.exe, a full-stack developer.

## Features
Responsive layout, dark/light theme, project filtering, validated contact form, SEO metadata, accessible markup.

## Configuration
Copy `.env.example` to `.env` and add your email, GitHub, LinkedIn and (optionally) a form endpoint. Edit projects in `src/data/projects.js`; only add `demo`/`repo` links when they are real.

## Technologies
- React
- Vite
- Tailwind CSS v4

## Getting started
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Brand system
Colours and fonts are defined as tokens in `src/styles/index.css`.

| Role | Hex |
| --- | --- |
| Midnight (background) | `#090D16` |
| Slate (surfaces) | `#151E2E` |
| Electric Blue (accent) | `#377DFF` |
| Ice Blue (secondary) | `#8AB4FF` |
| Cloud White (text) | `#E7ECF5` |
| Muted Grey | `#8995A8` |

Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (code).

## Author
Phantom
