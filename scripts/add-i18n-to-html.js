/**
 * Add i18n scripts to all HTML files
 * Run: node scripts/add-i18n-to-html.js
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '../docs');

// Files to skip (already processed or not needed)
const SKIP_FILES = ['robots.txt', 'sitemap.xml', 'browserconfig.xml', 'site.webmanifest', 'CNAME', '_headers'];

// i18n scripts to add before top_menu.js
const I18N_SCRIPTS = `
    <!-- i18n (Internationalization) -->
    <script src="assets/js/i18n.js"></script>
    <script defer src="components/language_switcher.js"></script>
`;

function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has i18n
  if (content.includes('i18n.js')) {
    console.log(`  [SKIP] ${path.basename(filePath)} - already has i18n`);
    return false;
  }
  
  // Find where to insert - before top_menu.js script
  const topMenuPattern = /(\s*<!-- Define custom components -->\s*\n\s*<script[^>]*src="components\/top_menu\.js")/;
  const topMenuMatch = content.match(topMenuPattern);
  
  if (topMenuMatch) {
    content = content.replace(
      topMenuPattern,
      I18N_SCRIPTS + '\n    <!-- Define custom components -->\n    <script src="components/top_menu.js"'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  [OK] ${path.basename(filePath)}`);
    return true;
  }
  
  // Alternative pattern - just before <script src="components/top_menu.js">
  const altPattern = /(<script[^>]*src="components\/top_menu\.js")/;
  const altMatch = content.match(altPattern);
  
  if (altMatch) {
    content = content.replace(
      altPattern,
      I18N_SCRIPTS + '\n    <script src="components/top_menu.js"'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  [OK] ${path.basename(filePath)} (alt pattern)`);
    return true;
  }
  
  console.log(`  [WARN] ${path.basename(filePath)} - no top_menu.js found`);
  return false;
}

function main() {
  console.log('Adding i18n scripts to HTML files...\n');
  
  const files = fs.readdirSync(DOCS_DIR);
  let processed = 0;
  let skipped = 0;
  
  for (const file of files) {
    if (SKIP_FILES.includes(file)) continue;
    if (!file.endsWith('.html')) continue;
    
    const filePath = path.join(DOCS_DIR, file);
    if (fs.statSync(filePath).isFile()) {
      if (processHtmlFile(filePath)) {
        processed++;
      } else {
        skipped++;
      }
    }
  }
  
  console.log(`\nDone! Processed: ${processed}, Skipped: ${skipped}`);
}

main();
