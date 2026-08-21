import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(projectRoot, 'public', 'sitemap.xml');
const baseUrl = (process.env.SITEMAP_BASE_URL ?? 'https://thrivewellrx.com').replace(/\/$/, '');

try {
  new URL(baseUrl);
} catch {
  throw new Error(`SITEMAP_BASE_URL must be an absolute URL. Received: ${baseUrl}`);
}

// Keep this list limited to canonical, publicly indexable Angular routes.
const routes = [
  '/',
  '/book-now',
  '/about',
  '/faq',
  '/legitscript',
  '/solutions',
  '/flow-rx',
  '/terms-and-conditions',
  '/privacy-policy',
  '/simplify-your-e-commerce-experience',
  '/revolutionizing-telehealth-seamless-integration',
  '/efficient-fulfillment-for-your-telehealth-venture',
  '/your-telehealth-success-partner',
];

const urls = routes
  .map((route) => `  <url>\n    <loc>${baseUrl}${route}</loc>\n  </url>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, sitemap, 'utf8');

console.log(`Generated sitemap.xml with ${routes.length} URLs for ${baseUrl}`);
