# Rahul Chitrapu — Portfolio

Personal portfolio for Rahul Chitrapu, Software Engineer and Full-Stack Web Developer. Built with React 19 and Vite, using plain CSS and no other runtime dependencies.

## Scripts

```bash
npm run dev       # local dev server
npm run build     # client build + SSR build + static prerender (dist/)
npm run preview   # serve the production build
npm run lint
```

## Editing content

All copy lives in [`src/data/profile.js`](src/data/profile.js): profile, about, projects (and case studies), skills, experience, and education. Components only handle layout.

- **Resume:** `public/Rahul-Chitrapu-Resume.pdf`, linked from the header, hero, contact section, and footer via `profile.resumeUrl`. To update it, replace that file and keep the same name.
- **Domain:** on Vercel the build uses the project's production domain automatically (`VERCEL_PROJECT_PRODUCTION_URL`, which switches to your custom domain once you add one). To override it, set `site.url` or build with `SITE_URL=https://your-domain.com`. The URL is used for the canonical link, `og:url`, absolute social-image URLs, a `Sitemap:` line in `robots.txt`, and `sitemap.xml`.

## Deploying (Vercel)

The Vite preset works as is: build command `npm run build`, output directory `dist`. Redeploy after each change. The deployed HTML should have the title "Rahul Chitrapu — Software Engineer & Full-Stack Web Developer".

## SEO

- `npm run build` prerenders the full page to static HTML ([`scripts/prerender.js`](scripts/prerender.js)), so crawlers and link previews see all content without running JavaScript. The client then hydrates it.
- Includes meta, Open Graph and Twitter tags (static ones in [`index.html`](index.html)), `ProfilePage`/`Person` JSON-LD generated from the content file, `robots.txt`, a web manifest, and a favicon set (SVG, ICO, Apple touch icon, and 192/512 PNGs).
- Semantic landmarks, one `h1`, labelled sections, and case-study content that is present in the HTML.

## Structure

```
src/
  data/profile.js        content (single source of truth)
  components/            one component + CSS file per section
  hooks/                 useReveal (scroll reveal), useScrollSpy (active nav link)
  entry-server.jsx       build-time render entry
  main.jsx               hydrates prerendered HTML (renders fresh in dev)
scripts/prerender.js     injects HTML, JSON-LD, canonical/OG URLs, sitemap
public/                  favicon set, og-image.png, manifest, robots.txt
```

Case studies open in native `<dialog>` elements and can be linked directly, e.g. `/#case-survey-creator`. Light and dark themes follow the system setting and can be toggled; the choice is saved per browser. Motion is reduced when `prefers-reduced-motion` is set.
