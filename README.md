# Jayesh Desai — Portfolio

Built from `Jayesh_Desai_Portfolio_PRD_claude.md`. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, statically generated.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Structure

```
app/            routes: home, /projects/[slug], API, sitemap, robots, OG image
components/
  layout/       Nav, Footer, Container/Section primitives
  sections/     one file per home-page section
  ui/           Button, tags, pills
  motion/       Reveal (scroll-in), CountUp
content/        typed data — edit these files to change copy, no component edits needed
public/         resume PDF, images
```

## Deploying

Push to a GitHub repo and import into [Vercel](https://vercel.com/new) — zero config needed beyond the environment variables above. Then point a custom domain at it (PRD recommends `jayeshdesai.dev` — see Open Item O8).
