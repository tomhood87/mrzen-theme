# MRZen Theme (Next.js)

This repository now ships the MRZen theme as a Next.js 14 application using the App Router.

## Getting started

```bash
npm install
npm run dev
```

- Visit `http://localhost:3000` for the home page and `http://localhost:3000/test` for the sample module page.
- Global theme styles live in `app/globals.scss` and import the SCSS bundle under `assets/scss`.
- Header links and branding are pulled from `/api/menu` and `/api/site-settings` (see `app/api/*` for sample data). Point `NEXT_PUBLIC_THEME_API_BASE` to your own API to swap in live content.

## Production

```bash
npm run build
npm start
```

## Structure

- `app/layout.tsx` and `components/layout/*`: shared layout, header, and footer.
- `app/page.tsx`, `app/test/page.tsx`, `app/not-found.tsx`: routes and error page.
- `lib/api.ts`: thin wrapper for theme API calls with room for custom logic.
