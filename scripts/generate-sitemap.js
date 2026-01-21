/**
 * Generate multilingual sitemap.xml with hreflang links
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '../docs');
const BASE_URL = 'https://slimrate.com';

// Files to exclude from sitemap
const EXCLUDE_FILES = [
  'robots.txt', 'sitemap.xml', 'browserconfig.xml', 'site.webmanifest',
  'CNAME', '_headers', 'service-worker.js', 
  'privacy.html', 'support-chat.html', 'support.html',
  'cokie.html', 'dataremove.html', 'employerConfirm.html'
];

function generateSitemap() {
  const files = fs.readdirSync(DOCS_DIR)
    .filter(f => f.endsWith('.html') && !EXCLUDE_FILES.includes(f));
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  for (const file of files) {
    const enUrl = file === 'index.html' ? `${BASE_URL}/` : `${BASE_URL}/${file}`;
    const esUrl = file === 'index.html' ? `${BASE_URL}/es/` : `${BASE_URL}/es/${file}`;
    
    // English page entry
    xml += `
  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
    <changefreq>weekly</changefreq>
    <priority>${file === 'index.html' ? '1.0' : '0.8'}</priority>
  </url>
`;

    // Spanish page entry
    xml += `
  <url>
    <loc>${esUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
    <changefreq>weekly</changefreq>
    <priority>${file === 'index.html' ? '1.0' : '0.8'}</priority>
  </url>
`;
  }

  xml += `</urlset>
`;

  return xml;
}

function main() {
  console.log('Generating multilingual sitemap.xml...\n');
  
  const sitemap = generateSitemap();
  const sitemapPath = path.join(DOCS_DIR, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  
  // Count URLs
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  console.log(`Sitemap generated with ${urlCount} URLs`);
  console.log(`Saved to: ${sitemapPath}`);
}

main();
