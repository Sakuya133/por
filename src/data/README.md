# Adding a collection

1. Add the collection's cover and any gallery images under `public/images/collections/` (create the directory if needed).
2. Add a record to `collections` in `collections.ts` with a unique `id`, `slug`, `title`, the cover path and alt text. Add `description` or `gallery` only when that content is available.
3. The collection grid and detail route use this same data. Run `bun run build` and redeploy to publish the updated collection pages.

The `cover` value should point to the actual file added to `public`, using a path that starts with `/images/collections/`.

The current Beach Resort record has no cover because the repository does not contain its image yet; add the real asset before setting `cover` to a path.
