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

## Theme contract (mrzen-framework)

- `src/createTheme.ts` exports `createTheme(): Theme` exposing `PageLayout`, `Providers`, `getPageLayout`, and `getBlockLayout`.
- `src/layouts/PageLayouts.tsx` contains `Default`, `Landing`, and `Article` layouts. `getPageLayout(pageType)` lowercases the value and returns a matching layout or falls back to `PageLayout`.
- `src/layouts/BlockLayouts.tsx` contains wrappers for common blocks (hero, section, grid). `getBlockLayout(blockType)` maps known blocks and returns a default padded wrapper otherwise.
- `src/providers/ThemeProviders.tsx` applies CSS variable tokens on a top-level wrapper; keep styling/tokens isolated here.

### Extending layouts and block wrappers

1. Add or adjust a layout component under `src/layouts/*`.
2. Register it in the `pageLayouts` map inside `src/createTheme.ts` so `getPageLayout(pageType)` can return it.
3. To style a new block type, create a wrapper under `src/layouts/BlockLayouts.tsx` (or a new file) and add it to the `blockLayouts` map in `src/createTheme.ts`.
4. Use the `children` prop as the slot; the framework will pass page/block content into these wrappers.

## Tests

```bash
npm test
```

Runs a TypeScript build to `.tmp` with the test-only config and executes the contract tests under `tests/`.
