/**
 * Generate Spanish language pages from English pages
 * Run: node scripts/generate-es-pages.js
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '../docs');
const ES_DIR = path.join(DOCS_DIR, 'es');

// Files to skip
const SKIP_FILES = [
  'robots.txt', 'sitemap.xml', 'browserconfig.xml', 'site.webmanifest', 
  'CNAME', '_headers', 'service-worker.js'
];

// Files that don't need Spanish version (technical/legal pages that stay in English)
const SKIP_TRANSLATION = [
  'privacy.html', 'support-chat.html', 'support.html'
];

// Spanish meta descriptions for key pages
const META_TRANSLATIONS = {
  'index.html': {
    title: 'Slimrate - Soluciones POS Todo en Uno',
    description: 'Slimrate ofrece soluciones POS avanzadas incluyendo software, hardware y procesamiento de pagos para negocios en Estados Unidos y Puerto Rico.',
    keywords: 'soluciones POS, procesamiento de pagos, software minorista, Estados Unidos, Puerto Rico, sistema punto de venta',
    ogTitle: 'Soluciones POS Slimrate',
    ogDescription: 'Plataforma POS todo en uno para negocios en EE.UU. y Puerto Rico'
  },
  'software.html': {
    title: 'Software POS | Slimrate',
    description: 'Software POS completo y fácil de usar. Aumente los ingresos, optimice las operaciones y fidelice a los clientes con un potente software basado en la nube. Disponible en Puerto Rico.',
    keywords: 'Software POS, punto de venta nube, sistema de gestión, Estados Unidos, Puerto Rico',
    ogTitle: 'Software POS Slimrate',
    ogDescription: 'Software POS basado en la nube para su negocio.'
  },
  'hardware.html': {
    title: 'Hardware POS | Slimrate',
    description: 'Hardware POS duradero con tecnología potente integrada. Tabletas, impresoras, escáneres y terminales EMV. Disponible en EE.UU. y Puerto Rico.',
    keywords: 'Hardware POS, Tabletas, impresoras, escáneres, terminales EMV, Puerto Rico, Estados Unidos',
    ogTitle: 'Hardware POS Slimrate',
    ogDescription: 'Hardware POS profesional para su negocio.'
  },
  'pricing.html': {
    title: 'Precios | Slimrate',
    description: 'Precios simples y transparentes para su negocio. Sin tarifas ocultas. Disponible para comerciantes en Puerto Rico.',
    keywords: 'precios POS, tarifas procesamiento, costos sistema punto de venta, Puerto Rico, Estados Unidos',
    ogTitle: 'Precios Slimrate',
    ogDescription: 'Planes de precios transparentes para soluciones POS.'
  },
  'company.html': {
    title: 'Sobre Nosotros | Slimrate',
    description: 'Conozca más sobre Slimrate y nuestra misión de proporcionar las mejores soluciones POS en Estados Unidos y Puerto Rico.',
    keywords: 'sobre Slimrate, empresa POS, soluciones negocios, Puerto Rico, Estados Unidos',
    ogTitle: 'Sobre Slimrate',
    ogDescription: 'Conozca nuestra empresa y equipo.'
  },
  'restaurant.html': {
    title: 'POS para Restaurantes | Slimrate',
    description: 'Solución POS y de gestión basada en la nube para restaurantes de todos los tamaños en EE.UU. y Puerto Rico.',
    keywords: 'POS restaurante, sistema gestión restaurante, punto de venta comida, Puerto Rico, Estados Unidos',
    ogTitle: 'POS para Restaurantes Slimrate',
    ogDescription: 'Sistema POS diseñado para restaurantes.'
  },
  'retail.html': {
    title: 'POS para Retail | Slimrate',
    description: 'Solución POS de retail integrada que facilita la venta en línea y en tienda. Disponible en Puerto Rico.',
    keywords: 'POS retail, punto de venta tiendas, inventario, Puerto Rico, Estados Unidos',
    ogTitle: 'POS para Retail Slimrate',
    ogDescription: 'Sistema POS para tiendas minoristas.'
  },
  'mobile-app.html': {
    title: 'Aplicación Móvil | Slimrate',
    description: 'Gestione su negocio desde cualquier lugar con la aplicación móvil Slimrate.',
    keywords: 'app negocios, gestión móvil, POS móvil, Puerto Rico, Estados Unidos',
    ogTitle: 'Aplicación Móvil Slimrate',
    ogDescription: 'Gestión de negocios en su bolsillo.'
  },
  'payment_processing.html': {
    title: 'Procesamiento de Pagos | Slimrate',
    description: 'Procesamiento de pagos rápido y seguro para su negocio en Estados Unidos y Puerto Rico.',
    keywords: 'procesamiento pagos, tarjetas crédito, merchant services, Puerto Rico, Estados Unidos',
    ogTitle: 'Procesamiento de Pagos Slimrate',
    ogDescription: 'Soluciones de pago integradas.'
  },
  'a35.html': {
    title: 'Terminal de Pago A35 - Procesamiento EMV Seguro | Slimrate',
    description: 'El Terminal de Pago A35 de Slimrate ofrece procesamiento seguro y eficiente para negocios en EE.UU. y Puerto Rico.',
    keywords: 'terminal de pago, A35, terminal EMV, lector de tarjetas, terminal POS, Puerto Rico',
    ogTitle: 'Terminal de Pago A35 - Procesamiento EMV Seguro | Slimrate',
    ogDescription: 'El Terminal de Pago A35 ofrece procesamiento de pagos seguro y eficiente.'
  },
  'a920.html': {
    title: 'Terminal de Pago A920 - Solución EMV Móvil | Slimrate',
    description: 'El Terminal Móvil A920 de Slimrate es ideal para pagos inalámbricos seguros en EE.UU. y Puerto Rico.',
    keywords: 'A920, terminal de pago móvil, EMV portátil, pago inalámbrico, Puerto Rico',
    ogTitle: 'Terminal de Pago A920 - Solución EMV Móvil | Slimrate',
    ogDescription: 'Terminal móvil A920 para pagos seguros en cualquier lugar.'
  }
};

// Default Spanish meta for pages not in the list above
const DEFAULT_META = {
  description: 'Slimrate ofrece soluciones POS avanzadas incluyendo software, hardware y procesamiento de pagos para negocios en Estados Unidos y Puerto Rico.',
  ogTitle: 'Soluciones POS Slimrate',
  ogDescription: 'Plataforma POS todo en uno para negocios en EE.UU.'
};

const DEFAULT_KEYWORDS = 'soluciones POS, procesamiento de pagos, software para tiendas, Estados Unidos, Puerto Rico';

/**
 * Generate hreflang tags for a page
 */
function generateHreflangTags(pageName) {
  const baseUrl = 'https://slimrate.com';
  const enUrl = pageName === 'index.html' ? baseUrl + '/' : `${baseUrl}/${pageName}`;
  const esUrl = pageName === 'index.html' ? `${baseUrl}/es/` : `${baseUrl}/es/${pageName}`;
  
  return `
    <!-- Hreflang tags for SEO -->
    <link rel="alternate" hreflang="en" href="${enUrl}">
    <link rel="alternate" hreflang="es" href="${esUrl}">
    <link rel="alternate" hreflang="x-default" href="${enUrl}">`;
}

/**
 * Process an HTML file to create Spanish version
 */
function processHtmlFile(filePath, fileName) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Update lang attribute
  content = content.replace('<html lang="en">', '<html lang="es">');
  
  // 2. Update canonical URL
  const canonicalPattern = /<link rel="canonical" href="https:\/\/slimrate\.com\/([^"]*)"\/?>/;
  const canonicalMatch = content.match(canonicalPattern);
  if (canonicalMatch) {
    const pagePath = canonicalMatch[1] || '';
    const newCanonical = pagePath ? `https://slimrate.com/es/${pagePath}` : 'https://slimrate.com/es/';
    content = content.replace(canonicalPattern, `<link rel="canonical" href="${newCanonical}">`);
  } else {
    // Handle index.html case or missing canonical
    content = content.replace(
      /<link rel="canonical" href="https:\/\/slimrate\.com\/?"\/?>/,
      '<link rel="canonical" href="https://slimrate.com/es/">'
    );
  }
  
  // 3. Update meta descriptions if available
  const meta = META_TRANSLATIONS[fileName] || {};
  
  if (meta.title) {
    content = content.replace(/<title>[^<]+<\/title>/, `<title>${meta.title}</title>`);
  }
  
  if (meta.description) {
    content = content.replace(
      /<meta name="description" content="[^"]*"\/>/,
      `<meta name="description" content="${meta.description}">`
    );
  } else {
    content = content.replace(
      /<meta name="description" content="[^"]*"\/>/,
      `<meta name="description" content="${DEFAULT_META.description}">`
    );
  }
  
  // 3.1 Update keywords
  if (meta.keywords) {
    content = content.replace(
      /<meta name="keywords" content="[^"]*"\/>/,
      `<meta name="keywords" content="${meta.keywords}"/>`
    );
  } else {
    content = content.replace(
      /<meta name="keywords" content="[^"]*"\/>/,
      `<meta name="keywords" content="${DEFAULT_KEYWORDS}"/>`
    );
  }
  
  // 4. Update Open Graph tags
  if (meta.ogTitle) {
    content = content.replace(
      /<meta property="og:title" content="[^"]*"\/>/,
      `<meta property="og:title" content="${meta.ogTitle}">`
    );
  }
  
  if (meta.ogDescription) {
    content = content.replace(
      /<meta property="og:description" content="[^"]*"\/>/,
      `<meta property="og:description" content="${meta.ogDescription}">`
    );
  }
  
  // 5. Update og:url
  content = content.replace(
    /<meta property="og:url" content="https:\/\/slimrate\.com\/([^"]*)"\/>/,
    (match, path) => {
      const newPath = path ? `es/${path}` : 'es/';
      return `<meta property="og:url" content="https://slimrate.com/${newPath}">`;
    }
  );
  
  // 6. Add hreflang tags after canonical
  const hreflangTags = generateHreflangTags(fileName);
  if (!content.includes('hreflang')) {
    content = content.replace(
      /(<link rel="canonical"[^>]+>)/,
      `$1${hreflangTags}`
    );
  }
  
  // 7. Update asset paths (go up one level from /es/)
  content = content.replace(/href="assets\//g, 'href="../assets/');
  content = content.replace(/src="assets\//g, 'src="../assets/');
  content = content.replace(/href="components\//g, 'href="../components/');
  content = content.replace(/src="components\//g, 'src="../components/');
  
  // 8. Update internal links to point to Spanish versions
  // Links like href="software.html" should become href="software.html" (relative in /es/)
  // But links to external sites should stay the same
  
  // 9. Update favicon and manifest paths
  content = content.replace(/href="apple-touch-icon/g, 'href="../apple-touch-icon');
  content = content.replace(/href="favicon/g, 'href="../favicon');
  content = content.replace(/href="site\.webmanifest"/g, 'href="../site.webmanifest"');
  
  // 10. Fix i18n paths
  content = content.replace(/src="assets\/js\/i18n\.js"/g, 'src="../assets/js/i18n.js"');
  
  // 11. Fix slick paths
  content = content.replace(/href="assets\/slick\//g, 'href="../assets/slick/');
  content = content.replace(/src="assets\/slick\//g, 'src="../assets/slick/');
  
  return content;
}

/**
 * Add hreflang tags to English pages
 */
function addHreflangToEnglishPage(filePath, fileName) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has hreflang
  if (content.includes('hreflang')) {
    return false;
  }
  
  const hreflangTags = generateHreflangTags(fileName);
  
  // Add after canonical link
  const modified = content.replace(
    /(<link rel="canonical"[^>]+>)/,
    `$1${hreflangTags}`
  );
  
  if (modified !== content) {
    fs.writeFileSync(filePath, modified, 'utf8');
    return true;
  }
  
  return false;
}

function main() {
  console.log('=== Generating Spanish Language Pages ===\n');
  
  // Ensure /es/ directory exists
  if (!fs.existsSync(ES_DIR)) {
    fs.mkdirSync(ES_DIR, { recursive: true });
  }
  
  const files = fs.readdirSync(DOCS_DIR);
  let generated = 0;
  let hreflangAdded = 0;
  
  for (const file of files) {
    // Skip non-HTML and special files
    if (SKIP_FILES.includes(file)) continue;
    if (!file.endsWith('.html')) continue;
    if (SKIP_TRANSLATION.includes(file)) continue;
    
    const filePath = path.join(DOCS_DIR, file);
    if (!fs.statSync(filePath).isFile()) continue;
    
    // Generate Spanish version
    const esContent = processHtmlFile(filePath, file);
    const esFilePath = path.join(ES_DIR, file);
    fs.writeFileSync(esFilePath, esContent, 'utf8');
    console.log(`  [ES] ${file}`);
    generated++;
    
    // Add hreflang to English version
    if (addHreflangToEnglishPage(filePath, file)) {
      console.log(`  [EN] ${file} - hreflang added`);
      hreflangAdded++;
    }
  }
  
  console.log(`\n=== Done! ===`);
  console.log(`Spanish pages generated: ${generated}`);
  console.log(`English pages updated with hreflang: ${hreflangAdded}`);
}

main();
