# Break Studio website (Next.js + Tailwind CSS)

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to your real domain
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

- Content: `lib/data.ts` (clients, services, steps, FAQ) and `lib/site.ts` (contact details, SEO text)
- Client logos: `public/clients/*.jpg` (greyscale, colour on hover via Tailwind `grayscale` / `group-hover:grayscale-0`)
- SEO: metadata + Open Graph + canonical in `app/layout.tsx`, JSON-LD (ProfessionalService, WebSite, FAQPage) in `components/JsonLd.tsx`, `app/sitemap.ts`, `app/robots.ts`
- Deploy: Vercel (import the repo) or any Node host
