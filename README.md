# Jayesh Desai — Portfolio

Personal portfolio for **Jayesh Desai**, a Data Science & ML Engineer based in Ahmedabad, India. It showcases featured machine-learning projects (VidTrace, an animal classifier, and more), background, skills, certifications, and a working contact form.

Built with the Next.js App Router and statically generated for fast, SEO-friendly delivery.

## Tech stack

| Area        | Choice                                    |
| ----------- | ----------------------------------------- |
| Framework   | Next.js 16 (App Router)                   |
| Language    | TypeScript 5                              |
| UI          | React 19                                  |
| Styling     | Tailwind CSS v4                           |
| Icons       | lucide-react                              |
| Email       | Resend (contact form)                     |
| Deployment  | Vercel                                    |

## Getting started

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script          | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Create a production build          |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Environment variables

The contact form uses [Resend](https://resend.com). Without a key it safely falls back to a direct `mailto:` link instead of pretending to send.

Create a `.env.local` file in the project root:

```bash
# Required to enable real email delivery from the contact form
RESEND_API_KEY=your_resend_api_key

# Optional — where contact messages are delivered
# Defaults to jdesai347108@gmail.com
CONTACT_TO_EMAIL=you@example.com
```

> Resend's free tier requires a verified sending domain for anything beyond their test address. Once your domain is verified, update the `from` address in `app/api/contact/route.ts`.

## Project structure

```
app/
  page.tsx              Home page (composes all sections)
  layout.tsx            Root layout, fonts, metadata
  projects/[slug]/      Individual project case-study pages
  api/contact/route.ts  Contact form handler (Resend + rate limiting)
  sitemap.ts            Sitemap
  robots.ts             robots.txt
  opengraph-image.tsx   Dynamic OG image
  not-found.tsx         404 page

components/
  layout/               Nav, Footer, Container/Section primitives
  sections/             One file per home-page section
  ui/                   Button, tags, pills
  motion/               Reveal (scroll-in), CountUp

content/                Typed content data — edit these to change copy
  profile.ts            Name, headline, bio, socials, stats
  projects.ts           Project entries
  skills.ts             Skills
  timeline.ts           Career/education timeline
  certifications.ts     Certifications

public/                 Resume PDF, images, static assets
```

Most copy lives in the `content/` files — you can update text, links, and stats there without touching components.

## Customizing content

- **Bio, headline, socials, email:** `content/profile.ts`
- **Projects grid + case studies:** `content/projects.ts` (and `app/projects/[slug]/`)
- **Skills:** `content/skills.ts`
- **Timeline / education:** `content/timeline.ts`
- **Certifications:** `content/certifications.ts`
- **Resume:** replace `public/resume/Jayesh-Desai-Resume-2026.pdf` (keep the same path, or update `resumeUrl` in `content/profile.ts`)
- **Portrait:** replace the image in `public/images/`

## Deployment

Deployed on [Vercel](https://vercel.com).

1. Push this repository to GitHub.
2. Import the repo into Vercel — no build configuration is required.
3. Add the environment variables above in **Project Settings → Environment Variables**.
4. (Optional) Attach a custom domain.

### Branch workflow

- Push to **`dev`** → Vercel creates a **Preview** deployment (test URL).
- Merge **`dev` → `main`** → Vercel deploys to **Production** (live site).

## License

This project is personal and not licensed for reuse. All content and branding belong to Jayesh Desai.
