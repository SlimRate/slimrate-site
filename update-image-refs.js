const fs = require('fs');
const path = require('path');

// Function to recursively search for all HTML files
function getAllHtmlFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        
        if (fs.statSync(filePath).isDirectory()) {
            if (!file.startsWith('.') && file !== 'node_modules') {
                arrayOfFiles = getAllHtmlFiles(filePath, arrayOfFiles);
            }
        } else if (file.endsWith('.html')) {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

// Function to update image references in HTML file
function updateImageReferences(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace .jpg, .jpeg, .png references with .webp
    const patterns = [
        /\.jpg"/gi,
        /\.jpeg"/gi,
        /\.png"/gi,
        /\.jpg'/gi,
        /\.jpeg'/gi,
        /\.png'/gi,
        /\.jpg\)/gi,
        /\.jpeg\)/gi,
        /\.png\)/gi
    ];

    const replacements = [
        '.webp"',
        '.webp"',
        '.webp"',
        ".webp'",
        ".webp'",
        ".webp'",
        '.webp)',
        '.webp)',
        '.webp)'
    ];

    patterns.forEach((pattern, index) => {
        if (pattern.test(content)) {
            content = content.replace(new RegExp(pattern, 'g'), replacements[index]);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated: ${path.relative(process.cwd(), filePath)}`);
        return true;
    }

    return false;
}

// Function to update references in JavaScript files
function updateJsReferences(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const patterns = [
        /\.jpg"/gi,
        /\.jpeg"/gi,
        /\.png"/gi,
        /\.jpg'/gi,
        /\.jpeg'/gi,
        /\.png'/gi,
        /\.jpg`/gi,
        /\.jpeg`/gi,
        /\.png`/gi
    ];

    const replacements = [
        '.webp"',
        '.webp"',
        '.webp"',
        ".webp'",
        ".webp'",
        ".webp'",
        '.webp`',
        '.webp`',
        '.webp`'
    ];

    patterns.forEach((pattern, index) => {
        if (pattern.test(content)) {
            content = content.replace(new RegExp(pattern, 'g'), replacements[index]);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated: ${path.relative(process.cwd(), filePath)}`);
        return true;
    }

    return false;
}

// Main function
function main() {
    const docsPath = path.join(__dirname, 'docs');
    
    console.log('Searching for HTML and JS files to update image references...\n');

    // Update HTML files
    const htmlFiles = getAllHtmlFiles(docsPath);
    let htmlUpdated = 0;

    console.log('Updating HTML files:\n');
    htmlFiles.forEach(file => {
        if (updateImageReferences(file)) {
            htmlUpdated++;
        }
    });

    // Update JS files in components
    const componentsPath = path.join(docsPath, 'components');
    let jsUpdated = 0;

    if (fs.existsSync(componentsPath)) {
        console.log('\nUpdating JavaScript files:\n');
        const jsFiles = fs.readdirSync(componentsPath)
            .filter(file => file.endsWith('.js'))
            .map(file => path.join(componentsPath, file));

        jsFiles.forEach(file => {
            if (updateJsReferences(file)) {
                jsUpdated++;
            }
        });
    }

    console.log('\n' + '='.repeat(60));
    console.log('SUMMARY:');
    console.log(`HTML files updated: ${htmlUpdated}`);
    console.log(`JavaScript files updated: ${jsUpdated}`);
    console.log('='.repeat(60));
}

main();
