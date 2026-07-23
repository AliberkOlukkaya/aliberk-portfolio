# Project rules for AI-assisted changes

## Product constraints

- Keep all visible portfolio content in professional, natural English.
- Preserve the clean navy, white, gray, and muted-blue visual system.
- Keep the site static: do not add a database, authentication, CMS, contact backend, analytics, or API keys without an explicit new requirement.
- Do not invent roles, technologies, metrics, awards, certificates, links, or project outcomes.
- Do not expose academic references, phone numbers, credentials, database content, or private configuration.

## Content and assets

- Treat `data/portfolio.ts` as the canonical source for portfolio content.
- The traffic-enforcement project must remain the first featured project and retain its verified graduation-project and best-project labels.
- Use the GitHub profile when an exact, verified project repository URL is unavailable.
- Keep `source-materials/` ignored. Never copy source archives, databases, uploads, logs, secrets, or internal configuration into deployable paths.
- Keep the public CV at `/Aliberk_Olukkaya_CV.pdf`.

## Engineering quality

- Preserve semantic HTML, keyboard access, visible focus states, useful alt text, reduced-motion support, and mobile layouts without horizontal overflow.
- Prefer small reusable components and avoid unnecessary dependencies.
- Keep metadata, JSON-LD, sitemap, and robots information factual.
- Before finishing a change, run `npm run lint`, `npm run typecheck`, and `npm run build`.
