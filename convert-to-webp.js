const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Function to recursively search for all files
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        
        if (fs.statSync(filePath).isDirectory()) {
            // Skip node_modules and other service folders
            if (!file.startsWith('.') && file !== 'node_modules') {
                arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
            }
        } else {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

// Function to convert image to WebP
async function convertToWebP(inputPath) {
    const ext = path.extname(inputPath).toLowerCase();
    
    // Check if this is an image for conversion
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        return null;
    }

    // Create path for WebP file
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Skip if WebP already exists
    if (fs.existsSync(outputPath)) {
        console.log(`Skip (already exists): ${outputPath}`);
        return null;
    }

    try {
        await sharp(inputPath)
            .webp({ quality: 85 }) // Quality 85% - good balance between size and quality
            .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
        
        console.log(`✓ Converted: ${path.relative(process.cwd(), inputPath)}`);
        console.log(`  Size: ${(originalSize / 1024).toFixed(2)}KB → ${(newSize / 1024).toFixed(2)}KB (saved ${savings}%)`);
        
        return { inputPath, outputPath, originalSize, newSize, savings };
    } catch (error) {
        console.error(`✗ Error converting ${inputPath}:`, error.message);
        return null;
    }
}

// Main function
async function main() {
    const docsPath = path.join(__dirname, 'docs');
    
    if (!fs.existsSync(docsPath)) {
        console.error('Docs folder not found!');
        process.exit(1);
    }

    console.log('Searching for images to convert...\n');
    
    const allFiles = getAllFiles(docsPath);
    const imageFiles = allFiles.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} images for conversion\n`);
    console.log('Starting conversion...\n');

    const results = [];
    let totalOriginalSize = 0;
    let totalNewSize = 0;

    for (const imagePath of imageFiles) {
        const result = await convertToWebP(imagePath);
        if (result) {
            results.push(result);
            totalOriginalSize += result.originalSize;
            totalNewSize += result.newSize;
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('SUMMARY:');
    console.log(`Files converted: ${results.length}`);
    console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`New size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Saved: ${(((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(2)}%`);
    console.log('='.repeat(60));
}

main().catch(console.error);
