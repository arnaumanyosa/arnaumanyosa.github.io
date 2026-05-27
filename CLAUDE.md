# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website. Stack: **Astro + Tailwind CSS + Vite**. Not yet scaffolded — specs live in [specs/](specs/).

## Commands

Once scaffolded with `npm create astro@latest`:

```bash
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview build
npm run astro check  # type check
```

## Architecture

- `src/content/` — all site content as markdown files (Astro Content Collections)
  - `about.md` — personal info in frontmatter + about narrative in body
  - `projects/*.md` — one file per project
- `src/pages/` — Astro page routes
- `src/components/` — reusable Astro/UI components

## Content Schema

**`src/content/about.md`** frontmatter: `completeName`, `role`, `email`, `location`, `socialLinks` (linkedin, github, dribbble).

**`src/content/projects/*.md`** frontmatter: `title`, `subtitle`, `thumbnail`, `liveUrl`, `techstack[]`, `period.start/end`, `roles[]`, `overview`, `outcomes[]` (title + description). Body follows CAR structure (Challenge, Actions, Results).

Placeholder content only — use Unsplash images where needed.

## Design System

Minimalistic typography-focused design. Use the `frontend-design` skill when building UI.

**Colors:**

- Body text: `#323232`
- Headings: `#1a1a1a`
- Subtitle: `#4d4d4d`
- Hover: `#666666`
- Accent/border: `#808080`

**Fonts:** Poppins (headings) · DM Sans (body)

## Constraints

- WCAG 2.1 AA accessibility
- Lighthouse mobile score ≥ 90
- Page load < 3s — keep animations minimal and images optimized
