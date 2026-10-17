// Post-build step: renders the app to static HTML so search engines and social
// crawlers get the full content without running JavaScript, then adds SEO extras.
//
//   SITE_URL=https://your-domain.com npm run build
//
// The site URL (SITE_URL, else `site.url` in src/data/profile.js, else Vercel's
// VERCEL_PROJECT_PRODUCTION_URL) enables the canonical URL, og:url, absolute
// social-image URLs and sitemap.xml.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, site, profile, skills, experience, education } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

// Vercel exposes the production domain (custom domain if any) without a protocol.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
const siteUrl = (process.env.SITE_URL || site.url || vercelUrl || '').replace(/\/+$/, '')
const absolute = (urlPath) => (siteUrl ? new URL(urlPath, `${siteUrl}/`).href : urlPath)
const escapeAttr = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;')

const currentJob = experience.find((job) => job.current)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  ...(siteUrl && { url: `${siteUrl}/` }),
  mainEntity: {
    '@type': 'Person',
    name: profile.name,
    givenName: profile.firstName,
    familyName: profile.lastName,
    jobTitle: profile.role,
    description: site.description,
    email: `mailto:${profile.email}`,
    ...(siteUrl && { url: `${siteUrl}/`, image: absolute(site.ogImage) }),
    sameAs: [profile.linkedin],
    ...(currentJob && { worksFor: { '@type': 'Organization', name: currentJob.company } }),
    alumniOf: education.map((item) => ({ '@type': 'CollegeOrUniversity', name: item.institution })),
    knowsAbout: [...new Set(skills.filter((s) => s.group !== 'Tools').flatMap((s) => s.items))],
  },
}

const headTags = [
  siteUrl && `<link rel="canonical" href="${siteUrl}/" />`,
  siteUrl && `<meta property="og:url" content="${siteUrl}/" />`,
  `<meta property="og:image" content="${escapeAttr(absolute(site.ogImage))}" />`,
  `<meta property="og:image:type" content="image/png" />`,
  `<meta property="og:image:width" content="1200" />`,
  `<meta property="og:image:height" content="630" />`,
  `<meta property="og:image:alt" content="${escapeAttr(site.ogImageAlt)}" />`,
  `<meta name="twitter:image" content="${escapeAttr(absolute(site.ogImage))}" />`,
  `<meta name="twitter:image:alt" content="${escapeAttr(site.ogImageAlt)}" />`,
  `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
]
  .filter(Boolean)
  .join('\n    ')

const indexPath = path.join(distDir, 'index.html')
const template = await fs.readFile(indexPath, 'utf8')
for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) throw new Error(`Missing ${marker} placeholder in dist/index.html`)
}

const html = template.replace('<!--app-head-->', headTags).replace('<!--app-html-->', render())
await fs.writeFile(indexPath, html)

const robotsPath = path.join(distDir, 'robots.txt')
let robots = await fs.readFile(robotsPath, 'utf8').catch(() => 'User-agent: *\nAllow: /\n')
if (siteUrl) {
  robots = `${robots.trimEnd()}\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap)
}
await fs.writeFile(robotsPath, robots)

await fs.rm(ssrDir, { recursive: true, force: true })

console.log(
  siteUrl
    ? `Prerendered dist/index.html with canonical URL ${siteUrl}/ and sitemap.xml`
    : 'Prerendered dist/index.html (set SITE_URL or site.url to add a canonical URL and sitemap.xml)',
)
