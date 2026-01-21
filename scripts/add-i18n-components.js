/**
 * Add i18n-components.js to all HTML files
 * Run: node scripts/add-i18n-components.js
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '../docs');

// Files to skip
const SKIP_FILES = ['robots.txt', 'sitemap.xml', 'browserconfig.xml', 'site.webmanifest', 'CNAME', '_headers'];

function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has i18n-components
  if (content.includes('i18n-components.js')) {
    return { status: 'skip', reason: 'already has i18n-components' };
  }
  
  // Skip if doesn't have i18n.js
  if (!content.includes('i18n.js')) {
    return { status: 'skip', reason: 'no i18n.js found' };
  }
  
  // Add i18n-components.js after i18n.js
  // Handle both src="assets/js/i18n.js" and src="../assets/js/i18n.js"
  const patterns = [
    /(<script src="assets\/js\/i18n\.js"><\/script>)/,
    /(<script src="\.\.\/assets\/js\/i18n\.js"><\/script>)/
  ];
  
  let modified = false;
  for (const pattern of patterns) {
    if (pattern.test(content)) {
      const isSubdir = content.includes('../assets/js/i18n.js');
      const prefix = isSubdir ? '../' : '';
      
      content = content.replace(
        pattern,
        `$1\n    <script defer src="${prefix}assets/js/i18n-components.js"></script>`
      );
      modified = true;
      break;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return { status: 'ok' };
  }
  
  return { status: 'skip', reason: 'pattern not matched' };
}

function main() {
  console.log('Adding i18n-components.js to HTML files...\n');
  
  let processed = 0;
  let skipped = 0;
  
  // Process root docs files
  const files = fs.readdirSync(DOCS_DIR);
  for (const file of files) {
    if (SKIP_FILES.includes(file)) continue;
    if (!file.endsWith('.html')) continue;
    
    const filePath = path.join(DOCS_DIR, file);
    if (fs.statSync(filePath).isFile()) {
      const result = processHtmlFile(filePath);
      if (result.status === 'ok') {
        console.log(`  [OK] ${file}`);
        processed++;
      } else {
        console.log(`  [SKIP] ${file} - ${result.reason}`);
        skipped++;
      }
    }
  }
  
  // Process /es/ directory
  const esDir = path.join(DOCS_DIR, 'es');
  if (fs.existsSync(esDir)) {
    const esFiles = fs.readdirSync(esDir);
    for (const file of esFiles) {
      if (!file.endsWith('.html')) continue;
      
      const filePath = path.join(esDir, file);
      if (fs.statSync(filePath).isFile()) {
        const result = processHtmlFile(filePath);
        if (result.status === 'ok') {
          console.log(`  [OK] es/${file}`);
          processed++;
        } else {
          console.log(`  [SKIP] es/${file} - ${result.reason}`);
          skipped++;
        }
      }
    }
  }
  
  console.log(`\nDone! Processed: ${processed}, Skipped: ${skipped}`);
}

main();
