# Hollow Guidebook

Next.js + Tailwind site for a Mina the Hollower guide hub.

## Run locally

```bash
npm run dev
```

Canonical URLs, sitemap, and robots default to `https://minathehollower.base64pro.top`.
Override with `NEXT_PUBLIC_SITE_URL` only if deploying to a different domain.

## Content model

Guide content lives in `src/lib/site.ts`. The same data source feeds visible content, metadata, JSON-LD, related links, and sitemap entries.

## Guardrails

- Mark untested guide claims as `Testing` or `Official source only`.
- Use original screenshots only. Pending capture areas must stay labeled.
- Keep tables semantic and visible.
- Do not publish standalone thin pages for unverified items.
