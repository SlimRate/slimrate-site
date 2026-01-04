/**
 * Screenshot script for visual regression testing
 * Takes screenshots of key pages at 3 breakpoints: Mobile, Tablet, Desktop
 * 
 * Usage: node tests/take-screenshots.js
 */

const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

// Configuration
const BASE_URL = 'file://' + path.resolve(__dirname, '../docs');
const OUTPUT_DIR = path.resolve(__dirname, '../screenshots-after');

// 3 breakpoints as per simplified system
const VIEWPORTS = [
    { name: 'mobile', width: 375, height: 812 },   // iPhone X
    { name: 'tablet', width: 768, height: 1024 },  // iPad
    { name: 'desktop', width: 1280, height: 900 }, // Desktop
];

// Key pages to screenshot
const PAGES = [
    'index.html',
    'pricing.html',
    'hardware.html',
    'restaurant.html',
    'software.html',
    'retail.html',
    'sr-falcon.html',
    'integrations.html',
    'support.html',
    'company.html',
];

async function takeScreenshots() {
    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const browser = await chromium.launch();
    
    console.log('📸 Starting screenshot capture...\n');
    console.log(`Output directory: ${OUTPUT_DIR}\n`);

    for (const viewport of VIEWPORTS) {
        console.log(`\n📱 ${viewport.name.toUpperCase()} (${viewport.width}x${viewport.height})`);
        console.log('─'.repeat(50));

        const context = await browser.newContext({
            viewport: { width: viewport.width, height: viewport.height },
        });
        const page = await context.newPage();

        for (const pageName of PAGES) {
            const url = `${BASE_URL}/${pageName}`;
            const screenshotName = `${pageName.replace('.html', '')}-${viewport.name}.png`;
            const screenshotPath = path.join(OUTPUT_DIR, screenshotName);

            try {
                await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
                
                // Wait a bit for any animations to settle
                await page.waitForTimeout(500);
                
                // Take full page screenshot
                await page.screenshot({
                    path: screenshotPath,
                    fullPage: true,
                });

                console.log(`  ✅ ${pageName}`);
            } catch (error) {
                console.log(`  ❌ ${pageName}: ${error.message}`);
            }
        }

        await context.close();
    }

    await browser.close();
    
    console.log('\n' + '═'.repeat(50));
    console.log(`✅ Screenshots saved to: ${OUTPUT_DIR}`);
    console.log(`   Total: ${PAGES.length * VIEWPORTS.length} screenshots`);
}

takeScreenshots().catch(console.error);
