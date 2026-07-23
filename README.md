# Aliberk Olukkaya — Portfolio

A production-ready personal portfolio for Aliberk Olukkaya, built as a responsive static website with Next.js, TypeScript, Tailwind CSS, and Lucide React.

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

The production server can be tested locally after a build:

```bash
npm start
```

## Project structure

- `app/` — page, global styles, metadata, robots, sitemap, and favicon
- `components/` — reusable navigation and section components
- `data/portfolio.ts` — centralized, typed portfolio content
- `public/` — optimized public profile image and downloadable CV

The private `source-materials/` directory is deliberately ignored by Git and must never be deployed.

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected **Next.js** framework and default build settings.
4. Deploy. No environment variables or external services are required.

Vercel supplies the production host automatically; metadata, `robots.txt`, and `sitemap.xml` use that host at build time.

## Content updates

Update factual portfolio copy in `data/portfolio.ts`. Replace the CV or portrait using the same filenames in `public/` to avoid changing links. Run all quality checks before publishing.
