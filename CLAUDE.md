# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Type-check (tsc -b) then Vite build
npm run lint         # Run ESLint
npm run test         # Run Vitest (watch mode)
npm run preview      # Preview production build locally

# Run a single test file
npx vitest run src/shared/components/badge/badge.test.tsx

# Regenerate API types from backend OpenAPI spec (requires backend running at localhost:3000)
npm run generate-types
```

The pre-commit hook runs `lint-staged`, which formats all staged files with Prettier. ESLint is separate (`npm run lint`).

## Environment

A `VITE_APP_API_URL` env var must be set for API calls to work (e.g. in `.env.local`). The app is deployed to Vercel with an SPA rewrite rule (`vercel.json`).

## Architecture

### Data layer (`src/api/`)

Three-tier split:

- **`services/`** — bare async functions that call `api.get/post`. Return typed data directly because the Axios instance's response interceptor unwraps `.data` automatically (`src/api/api.ts`).
- **`queries/`** — TanStack Query `queryOptions` factories and `useQuery` hooks. Always export a `*Options()` factory alongside any `use*Query()` hook so loaders and hooks share the same query key/fn.
- **`types/`** — `api.d.ts` is auto-generated from the backend's OpenAPI spec; **never edit it directly**. Other files (e.g. `projects.ts`) extend or narrow those generated types with hand-written domain types.

All data is treated as static: the global `QueryClient` is configured with `staleTime: Infinity`, `retry: false`, and `refetchOnWindowFocus: false`.

### Routing & data loading (`src/app/router.tsx`)

React Router 7 is used with the `createBrowserRouter` API. Pages export a `clientLoader` function that pre-populates the query cache before the component renders:

```ts
export const clientLoader = (queryClient: QueryClient) => async () => {
  const query = getSomeOptions();
  return queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query);
};
```

The `convert()` helper in `router.tsx` maps `clientLoader`/`clientAction` exports from lazy-loaded modules to React Router's `loader`/`action` slots.

All route modules except `about-me` are lazy-loaded. All queries and lazy chunks are also prefetched via `requestIdleCallback` after initial load.

### Theming

The design uses two colour modes driven by the `Variant` type (`primary | secondary | grey | cta`). The `ViewLayout` component accepts `mode="primary"` or `mode="secondary"`, which sets the page background image. `Layout.tsx` additionally switches the container's bg class based on the current route path.

The Tailwind config defines the full custom colour palette (no default Tailwind colours are used). The two fonts are `Nunito` (body) and `Zen Dots` (display/brand).

### Shared components (`src/shared/components/`)

Components accept a `variant` prop typed against `Variant` (or a subset of it via `Exclude<Variant, ...>`). Use the `classNames` utility from `src/utils/classNames.ts` for conditional class merging — it wraps `twMerge` and accepts a `Record<string, boolean>` object.

### Animations

Motion (Framer Motion v12) is used for scroll-triggered animations. Gate any `whileInView` animation with `useAnimationReady()` from `src/utils/useAnimationReady.ts` — this prevents animations from firing prematurely during React Router's `ScrollRestoration` programmatic scroll.

### Route paths

All route paths and `getHref` helpers live in `src/config/paths.ts`. Always import from there rather than hard-coding strings.

### Path alias

`@` maps to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).
