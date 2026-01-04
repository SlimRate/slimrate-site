/**
 * Compare screenshots before and after CSS changes
 * Uses pixel-by-pixel comparison to detect visual differences
 * 
 * Usage: node tests/compare-screenshots.js
 */

const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const BEFORE_DIR = path.resolve(__dirname, '../screenshots-before');
const AFTER_DIR = path.resolve(__dirname, '../screenshots-phase3');

async function compareImages(beforePath, afterPath) {
    return new Promise((resolve) => {
        try {
            const beforeData = fs.readFileSync(beforePath);
            const afterData = fs.readFileSync(afterPath);
            
            // Quick check: if file sizes are identical, likely identical
            if (beforeData.length === afterData.length && beforeData.equals(afterData)) {
                resolve({ identical: true, diff: 0 });
                return;
            }
            
            // Parse PNGs
            const beforePng = PNG.sync.read(beforeData);
            const afterPng = PNG.sync.read(afterData);
            
            // Check dimensions
            if (beforePng.width !== afterPng.width || beforePng.height !== afterPng.height) {
                resolve({ 
                    identical: false, 
                    diff: 100,
                    reason: `Size changed: ${beforePng.width}x${beforePng.height} → ${afterPng.width}x${afterPng.height}`
                });
                return;
            }
            
            // Count different pixels
            let diffPixels = 0;
            const totalPixels = beforePng.width * beforePng.height;
            
            for (let i = 0; i < beforePng.data.length; i += 4) {
                if (beforePng.data[i] !== afterPng.data[i] ||
                    beforePng.data[i + 1] !== afterPng.data[i + 1] ||
                    beforePng.data[i + 2] !== afterPng.data[i + 2] ||
                    beforePng.data[i + 3] !== afterPng.data[i + 3]) {
                    diffPixels++;
                }
            }
            
            const diffPercent = (diffPixels / totalPixels) * 100;
            resolve({ 
                identical: diffPixels === 0, 
                diff: diffPercent.toFixed(2),
                diffPixels 
            });
        } catch (error) {
            resolve({ identical: false, diff: -1, error: error.message });
        }
    });
}

async function main() {
    console.log('🔍 Comparing screenshots before/after...\n');
    
    const beforeFiles = fs.readdirSync(BEFORE_DIR).filter(f => f.endsWith('.png'));
    
    let allIdentical = true;
    const results = [];
    
    for (const file of beforeFiles) {
        const beforePath = path.join(BEFORE_DIR, file);
        const afterPath = path.join(AFTER_DIR, file);
        
        if (!fs.existsSync(afterPath)) {
            console.log(`  ❌ ${file}: Missing in after/`);
            allIdentical = false;
            continue;
        }
        
        const result = await compareImages(beforePath, afterPath);
        
        if (result.identical) {
            console.log(`  ✅ ${file}: Identical`);
        } else if (result.error) {
            console.log(`  ⚠️ ${file}: Error - ${result.error}`);
            allIdentical = false;
        } else if (result.reason) {
            console.log(`  ❌ ${file}: ${result.reason}`);
            allIdentical = false;
        } else {
            console.log(`  ⚠️ ${file}: ${result.diff}% different (${result.diffPixels} pixels)`);
            if (parseFloat(result.diff) > 0.1) {
                allIdentical = false;
            }
        }
        
        results.push({ file, ...result });
    }
    
    console.log('\n' + '═'.repeat(50));
    if (allIdentical) {
        console.log('✅ All screenshots are identical! No visual regression.');
    } else {
        console.log('⚠️ Some screenshots have differences. Review manually.');
    }
}

main().catch(console.error);
