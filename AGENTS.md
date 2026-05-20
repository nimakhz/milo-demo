# Milo — Agent Development Guide

## Cursor Cloud specific instructions

**Product:** Milo is a Persian (Farsi) smart nutrition assistant SPA built with SvelteKit 2 + Svelte 5. It is a front-end-only demo with no backend, database, or external API — all data is mock data in Svelte stores.

**Single service:** The only service to run is the Vite dev server (`npm run dev`). There are no Docker services, databases, or backend servers.

**Dev server:** `npm run dev -- --host 0.0.0.0` starts on `http://localhost:5173/`. The `--host` flag is needed for access within Cloud Agent VMs.

**Build:** `npm run build` produces a static site in `build/`. The `postbuild` script copies `404.html` → `index.html` for GitHub Pages SPA fallback.

**Test credentials:** Username `Milo`, password `1234` (hardcoded client-side auth using localStorage).

**No linter or test runner** is configured in this project. There is no `lint`, `test`, or `check` script in `package.json`.

**Node.js version:** v22 (matches CI). The environment already has this version via the system default.

**RTL / Farsi:** The entire UI is right-to-left with Persian text and the Vazirmatn font.
