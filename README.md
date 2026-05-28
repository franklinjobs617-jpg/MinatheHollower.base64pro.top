# Hollow Guidebook

Next.js + Tailwind site for a Mina the Hollower guide hub.

## Run locally

```bash
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` before production builds so canonical URLs, sitemap, and robots use the real subdomain.

## Content model

Guide content lives in `src/lib/site.ts`. The same data source feeds visible content, metadata, JSON-LD, related links, and sitemap entries.

## Guardrails

- Mark untested guide claims as `Testing` or `Official source only`.
- Use original screenshots only. Pending capture areas must stay labeled.
- Keep tables semantic and visible.
- Do not publish standalone thin pages for unverified items.

