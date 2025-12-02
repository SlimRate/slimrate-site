/**
 * Script to add cookie consent functionality to all HTML files
 * Updates Google Analytics to use consent mode
 * Adds cookie consent component to all pages
 */

const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');

// Find all HTML files recursively
function findHtmlFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            findHtmlFiles(fullPath, files);
        } else if (item.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
}

// Old gtag patterns to replace
const oldGtagPatterns = [
    // Pattern 1: Multiline with comments
    /<!-- Google tag \(gtag\.js\) -->\s*\n<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-42Y6GNN6DE"><\/script>\s*\n<script>\s*\n\s*window\.dataLayer = window\.dataLayer \|\| \[\];\s*\n\s*function gtag\(\)\{dataLayer\.push\(arguments\);\}\s*\n\s*gtag\('js', new Date\(\)\);\s*\n\s*\n\s*gtag\('config', 'G-42Y6GNN6DE'\);\s*\n<\/script>/g,
    
    // Pattern 2: Single line compact
    /<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-42Y6GNN6DE"><\/script>\s*\n\s*<script>window\.dataLayer = window\.dataLayer \|\| \[\]; function gtag\(\)\{dataLayer\.push\(arguments\);\} gtag\('js', new Date\(\)\); gtag\('config', 'G-42Y6GNN6DE'\);<\/script>/g,
    
    // Pattern 3: Another multiline variant
    /<!-- Google tag \(gtag\.js\) -->\s*\n<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-42Y6GNN6DE"><\/script>\s*\n<script>\s*\n\s*window\.dataLayer = window\.dataLayer \|\| \[\];\s*\n\s*function gtag\(\)\{dataLayer\.push\(arguments\);\}\s*\n\s*gtag\('js', new Date\(\)\);\s*\n\s*gtag\('config', 'G-42Y6GNN6DE'\);\s*\n<\/script>/g
];

// New gtag code with consent mode
const newGtagCode = `<!-- Google tag (gtag.js) with Consent Mode -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-42Y6GNN6DE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  // Default consent to denied until user accepts
  gtag('consent', 'default', {
    'analytics_storage': 'denied'
  });
  
  gtag('js', new Date());
  gtag('config', 'G-42Y6GNN6DE');
</script>`;

// Cookie consent script to add before </body>
const cookieConsentScript = `
    <!-- Cookie Consent -->
    <script src="components/cookie_consent.js"></script>
    <cookie-consent></cookie-consent>`;

// For pages in subdirectories (products/hardware/)
const cookieConsentScriptSubdir = `
    <!-- Cookie Consent -->
    <script src="../../components/cookie_consent.js"></script>
    <cookie-consent></cookie-consent>`;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has gtag and update it
    if (content.includes('googletagmanager.com/gtag')) {
        // Use regex to find and replace gtag code
        const gtagRegex = /<!-- Google tag.*?-->[\s\S]*?gtag\('config', 'G-42Y6GNN6DE'\);[\s\S]*?<\/script>/;
        const gtagRegexSimple = /<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-42Y6GNN6DE"><\/script>[\s\S]*?gtag\('config', 'G-42Y6GNN6DE'\);[\s\S]*?<\/script>/;
        
        if (gtagRegex.test(content) && !content.includes("gtag('consent',")) {
            content = content.replace(gtagRegex, newGtagCode);
            modified = true;
            console.log(`  ✓ Updated Google Analytics consent mode`);
        } else if (gtagRegexSimple.test(content) && !content.includes("gtag('consent',")) {
            content = content.replace(gtagRegexSimple, newGtagCode);
            modified = true;
            console.log(`  ✓ Updated Google Analytics consent mode`);
        }
    }
    
    // Check if cookie consent component is already added
    if (!content.includes('cookie_consent.js') && !content.includes('cookie-consent')) {
        // Determine relative path based on file location
        const relativePath = path.relative(docsDir, filePath);
        const depth = relativePath.split(path.sep).length - 1;
        
        let scriptToAdd;
        if (depth === 0) {
            scriptToAdd = cookieConsentScript;
        } else if (depth === 2) {
            scriptToAdd = cookieConsentScriptSubdir;
        } else {
            // Calculate correct path
            const prefix = '../'.repeat(depth);
            scriptToAdd = `
    <!-- Cookie Consent -->
    <script src="${prefix}components/cookie_consent.js"></script>
    <cookie-consent></cookie-consent>`;
        }
        
        // Add before </body>
        if (content.includes('</body>')) {
            content = content.replace('</body>', scriptToAdd + '\n</body>');
            modified = true;
            console.log(`  ✓ Added cookie consent component`);
        }
    }
    
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

// Main execution
console.log('🍪 Adding cookie consent to all HTML files...\n');

const htmlFiles = findHtmlFiles(docsDir);
let modifiedCount = 0;

for (const file of htmlFiles) {
    const relativePath = path.relative(docsDir, file);
    console.log(`Processing: ${relativePath}`);
    if (processFile(file)) {
        modifiedCount++;
    } else {
        console.log(`  - No changes needed`);
    }
}

console.log(`\n✅ Done! Modified ${modifiedCount} of ${htmlFiles.length} files.`);
