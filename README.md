# Sparks!

Static Astro website using TypeScript and Tailwind CSS 4. Requires Node.js 22.23.4+ and Bun.

## Development

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Validation and production

```bash
bun run check
bun run build
bun run preview
```

`build` checks Astro/TypeScript and generates the static site in `dist/`. Deploy that directory to a static host. `preview` (also `start`) serves the build locally.

## Structure

- `src/pages/`: home, About, collection listing and collection detail routes.
- `src/layouts/`: shared document, navbar and footer.
- `src/components/`: reusable presentation components.
- `src/styles/globals.css`: Tailwind and global styles.
- `src/data/collections.ts`: collection data; see `src/data/README.md`.
- `public/`: images and favicon, served directly.

Fonts are bundled locally with Fontsource. Collection detail pages are generated with `getStaticPaths`; adding a collection requires rebuilding. Unknown collection URLs return 404.

The About page is currently an empty section, the Beach Resort collection has no cover, and `/images/footer-textile.jpg` is not yet supplied. These content gaps are retained from the original project.
