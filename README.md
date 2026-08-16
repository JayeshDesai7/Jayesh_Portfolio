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

## Before you deploy — three things

**1. Fonts.** This was built in a sandbox with no access to `fonts.googleapis.com`, so `app/layout.tsx` currently uses system-font fallbacks instead of `next/font/google`. The real loader code (Plus Jakarta Sans, Instrument Serif, Inter, JetBrains Mono) is commented at the bottom of `app/layout.tsx` — uncomment it, wire the `className` back onto `<html>`, and remove the fallback stacks from `:root` in `app/globals.css`. On Vercel this will just work.

**2. Contact form.** `app/api/contact/route.ts` is wired to [Resend](https://resend.com) but has no API key yet, so right now it correctly fails over to the "email me directly" message rather than pretending to send. To make it live:
   - Create a Resend account and API key
   - Set `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL`, defaults to jdesai347108@gmail.com) as environment variables on your host
   - Resend's free tier requires a verified sending domain for anything beyond their test address — swap `from: "Portfolio Contact <onboarding@resend.dev>"` for your own domain once verified

**3. Real content.** Three placeholders need replacing before this goes live:
   - `public/images/portrait-placeholder.svg` — swap for a real photo (see PRD §10, Open Item O4)
   - `public/resume/Jayesh-Desai-Resume-2026.pdf` — this is a one-page stub, replace with the real résumé at the same filename/path
   - The PRD flags three blocking content items (O1–O3: the internship conflict between your CV and LinkedIn, a possible fourth AWS certificate, and whether "9.40 SPI" should instead be a CGPA) — resolve these in `content/timeline.ts`, `content/projects.ts`, and `content/certifications.ts`.

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
