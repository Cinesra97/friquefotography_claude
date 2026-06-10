# Frique Fotography

A custom Next.js (App Router) rebuild of [friquefotography.com](https://www.friquefotography.com/) — the portfolio of NYC photographer Eden Buenaventura.

Originally a Squarespace site; recreated here as code so it can be hosted on Vercel and edited freely.

## Stack
- Next.js 15 (App Router) + React 19
- TypeScript
- `next/image` (Squarespace CDN images are whitelisted in `next.config.js`)
- No CSS framework — hand-written `app/globals.css` with an "abyssal / ethereal" palette

## Pages
- `/` — hero + featured albums
- `/about` — bio, club affiliation, first cameras
- `/gallery` — album grid
- `/contact` — email

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel, import the repo into the `friquefotography_claude` project (framework preset: **Next.js** — auto-detected).
3. Deploy. No environment variables required.

Or with the CLI:
```bash
npm i -g vercel
vercel --prod
```

## Notes / next steps
- Images currently hotlink the original Squarespace CDN. To self-host, drop files in `public/` and update the `src` paths.
- The newsletter form and gallery links are placeholders — wire up a real provider (e.g. Mailchimp, Resend) or per-album gallery routes when ready.
- "Donate" and cart pages from the original Squarespace commerce setup were not recreated.
