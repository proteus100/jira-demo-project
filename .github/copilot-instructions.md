## Quick orientation for AI coding agents

This is a Vue 3 + Vite frontend for a local-business website (Devon PC Doctor / PC Rescue Devon). Focus areas: accessibility (WCAG AA), SEO (schema.org), and performance (image optimization and Core Web Vitals).

Key facts you should know before editing code:
- Entry point: `src/main.js` and root component `src/App.vue` (contains structured data / LocalBusiness schema).
- Routes: `src/router/index.js` — every route includes SEO metadata; when adding pages, add meta titles/descriptions here.
- Styling: Tailwind CSS configured via `tailwind.config.js` and `postcss.config.js`. Use existing utility classes and the custom color palette to keep WCAG compliance.
- Images & optimization: Image scripts live at repository root (`convert_to_webp.py`, `optimize_images.sh`, `create_responsive_images.py`). Prefer updating those scripts rather than manual image edits.

How to run and build (commands discovered in `package.json` and `netlify.toml`):
- Install: `npm install`
- Dev server: `npm run dev` (Vite, default port 5173)
- Build for production: `npm run build` (outputs `dist` — Netlify uses this as shown in `netlify.toml`)
- Preview production build locally: `npm run preview`

Project-specific conventions and patterns:
- SEO-first pages: Pages under `src/views/locations/` and `src/views/services/` are location/service specific. Keep content and structured data consistent with `src/App.vue` patterns.
- Schema updates: App-level structured data is defined in `src/App.vue`. When changing business info (address, phone, coordinates), update the JSON-LD here and also check the `src/views/*` pages for duplicates.
- Analytics: `src/plugins/analytics.js` contains GA4 integration. The measurement ID is a placeholder; confirm environment var or replacement before enabling.
- Leaflet maps: `leaflet` and `vue-leaflet` are used. Leaflet icon fixes live in `src/utils/leaflet-icon-fix.js` — prefer using that utility when adjusting map icons.

Testing and type checking:
- The repo includes `vue-tsc` for type checking: `npm run type-check`.
- There are no automated unit tests in the repo; keep changes small and test manually in the browser when possible.

Files worth inspecting for context (examples):
- `package.json` — scripts and deps
- `netlify.toml` — deploy settings (publish `dist`, Node 18)
- `src/App.vue` — root structured data and global layout
- `src/router/index.js` — SEO metadata per-route
- `tailwind.config.js` and `postcss.config.js` — design system and accessibility colors
- `src/components/layout/Header.vue` and `Footer.vue` — global header/footer patterns

Style and commit guidance for patches the AI suggests:
- Keep changes minimal and targeted; prefer small PRs that update one area (a route, a component, or structured data) at a time.
- Don't change the color palette or global layout without confirming WCAG contrast impact.
- When adding images, include responsive sources (WebP where possible) and update any image-optimization scripts if new sizes are required.

When you are unsure:
- Search for similar patterns under `src/` (e.g., new location pages always follow `views/locations/*.vue` structure).
- If touching analytics or business data, call it out in the PR description so a human can verify measurement IDs and contact info.

If this file is stale or missing details, ask the repository owner which environment variables (if any) exist on the deployment and whether the GA4 ID should be added to `src/plugins/analytics.js`.
