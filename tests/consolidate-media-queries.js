/**
 * CSS Media Query Consolidator
 * Groups scattered @media blocks with the same query into single blocks
 * 
 * Usage: node tests/consolidate-media-queries.js <file.css>
 */

const fs = require('fs');
const path = require('path');

function consolidateMediaQueries(cssContent) {
    // Match @media blocks with their content
    const mediaBlockRegex = /@media\s*\([^)]+\)\s*\{([\s\S]*?)^\}/gm;
    
    // Store media queries and their contents
    const mediaGroups = new Map();
    const nonMediaContent = [];
    
    let lastIndex = 0;
    let match;
    
    // Create a simpler approach: parse the CSS manually
    const lines = cssContent.split('\n');
    let currentMediaQuery = null;
    let mediaContent = [];
    let braceCount = 0;
    let regularContent = [];
    let inMedia = false;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const mediaMatch = line.match(/^@media\s*\([^)]+\)/);
        
        if (mediaMatch && !inMedia) {
            // Starting a new media block
            currentMediaQuery = mediaMatch[0].trim();
            inMedia = true;
            braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            mediaContent = [];
            
            // Get content after the opening brace
            const afterBrace = line.substring(line.indexOf('{') + 1);
            if (afterBrace.trim()) {
                mediaContent.push(afterBrace);
            }
        } else if (inMedia) {
            braceCount += (line.match(/\{/g) || []).length;
            braceCount -= (line.match(/\}/g) || []).length;
            
            if (braceCount <= 0) {
                // End of media block
                // Remove trailing }
                const lastContent = line.replace(/\}\s*$/, '');
                if (lastContent.trim()) {
                    mediaContent.push(lastContent);
                }
                
                // Store content
                if (!mediaGroups.has(currentMediaQuery)) {
                    mediaGroups.set(currentMediaQuery, []);
                }
                mediaGroups.get(currentMediaQuery).push(...mediaContent);
                
                inMedia = false;
                currentMediaQuery = null;
                mediaContent = [];
            } else {
                mediaContent.push(line);
            }
        } else {
            regularContent.push(line);
        }
    }
    
    // Build new CSS
    let newCss = regularContent.join('\n');
    
    // Add consolidated media queries at the end
    const mediaOrder = [
        '@media (min-width: 768px)',
        '@media (min-width: 768px) and (max-width: 1023px)',
        '@media (min-width: 1024px)',
        '@media (max-width: 1023px)',
        '@media (max-width: 767px)',
        '@media print',
        '@media (prefers-reduced-motion: reduce)',
        '@media (prefers-reduced-motion: no-preference)'
    ];
    
    // Sort media queries by order
    const sortedQueries = [...mediaGroups.keys()].sort((a, b) => {
        const indexA = mediaOrder.indexOf(a);
        const indexB = mediaOrder.indexOf(b);
        if (indexA === -1 && indexB === -1) return a.localeCompare(b);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
    
    newCss += '\n\n/* ========================================\n';
    newCss += '   CONSOLIDATED MEDIA QUERIES\n';
    newCss += '   ======================================== */\n';
    
    for (const query of sortedQueries) {
        const contents = mediaGroups.get(query);
        if (contents.length > 0) {
            newCss += `\n/* ${query.replace('@media ', '')} */\n`;
            newCss += `${query} {\n`;
            newCss += contents.join('\n');
            newCss += '\n}\n';
        }
    }
    
    return {
        css: newCss,
        stats: {
            originalBlocks: [...mediaGroups.values()].reduce((sum, arr) => sum + 1, 0),
            consolidatedBlocks: mediaGroups.size,
            queries: [...mediaGroups.keys()]
        }
    };
}

// Main
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log('Usage: node consolidate-media-queries.js <file.css>');
    console.log('       node consolidate-media-queries.js --dry-run <file.css>');
    process.exit(1);
}

const dryRun = args.includes('--dry-run');
const filePath = args.find(a => a.endsWith('.css'));

if (!filePath) {
    console.error('Please provide a CSS file path');
    process.exit(1);
}

const fullPath = path.resolve(filePath);
const content = fs.readFileSync(fullPath, 'utf-8');

console.log(`\n📦 Consolidating media queries in: ${path.basename(fullPath)}\n`);

const result = consolidateMediaQueries(content);

console.log('Stats:');
console.log(`  Media query types: ${result.stats.queries.length}`);
result.stats.queries.forEach(q => console.log(`    - ${q}`));

if (dryRun) {
    console.log('\n[DRY RUN] No changes written');
} else {
    // Backup original
    fs.writeFileSync(fullPath + '.backup', content);
    fs.writeFileSync(fullPath, result.css);
    console.log(`\n✅ File updated. Backup saved as ${path.basename(fullPath)}.backup`);
}
