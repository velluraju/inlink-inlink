# Frontend (InLink)

This package contains the Next.js frontend for the InLink landing and app scaffolds.

Local run (development)

1. From repo root:
   - Install dependencies: `pnpm install` (or `npm install`)
   - Start dev server: `pnpm --filter packages/frontend dev` or `cd packages/frontend && pnpm dev`

2. The landing page is at `/` and includes:
   - Glassmorphism storytelling layout (hero, features, how-it-works, waitlist)
   - Lottie hero animation (place JSON files in `public/lottie/` as `collab.json`)
   - Waitlist form that posts to `/api/waitlist` (dev: appends to `waitlist.csv` at repo root)

Files of interest
- `src/app/page.tsx` — main landing page (storytelling flow)
- `src/app/globals.css` — landing styles (glassmorphism + parallax)
- `src/app/components/LottieHero.tsx` — Lottie loader component
- `src/app/sections/StorySection.tsx` — narrative section component
- `src/pages/api/waitlist.ts` — API route that appends waitlist entries to `waitlist.csv` (development)

Notes
- Current waitlist uses local CSV storage for development. When you want Supabase integration, add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as repo secrets and I will swap the API to insert into Supabase.
- To add a Lottie file, place the JSON under `packages/frontend/public/lottie/collab.json`.

Preview & build
- Build: `pnpm --filter packages/frontend build`
- Start (production): `pnpm --filter packages/frontend start`

Contact
- For any changes or visual tweaks, tell me the color tokens, copy edits, or provide a Lottie file and I’ll update and push.
