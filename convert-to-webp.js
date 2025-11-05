const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Функция для рекурсивного поиска всех файлов
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        
        if (fs.statSync(filePath).isDirectory()) {
            // Пропускаем node_modules и другие служебные папки
            if (!file.startsWith('.') && file !== 'node_modules') {
                arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
            }
        } else {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

// Функция для конвертации изображения в WebP
async function convertToWebP(inputPath) {
    const ext = path.extname(inputPath).toLowerCase();
    
    // Проверяем, что это изображение для конвертации
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        return null;
    }

    // Создаем путь для WebP файла
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Пропускаем, если WebP уже существует
    if (fs.existsSync(outputPath)) {
        console.log(`Пропуск (уже существует): ${outputPath}`);
        return null;
    }

    try {
        await sharp(inputPath)
            .webp({ quality: 85 }) // Качество 85% - хороший баланс между размером и качеством
            .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
        
        console.log(`✓ Конвертировано: ${path.relative(process.cwd(), inputPath)}`);
        console.log(`  Размер: ${(originalSize / 1024).toFixed(2)}KB → ${(newSize / 1024).toFixed(2)}KB (сэкономлено ${savings}%)`);
        
        return { inputPath, outputPath, originalSize, newSize, savings };
    } catch (error) {
        console.error(`✗ Ошибка при конвертации ${inputPath}:`, error.message);
        return null;
    }
}

// Основная функция
async function main() {
    const docsPath = path.join(__dirname, 'docs');
    
    if (!fs.existsSync(docsPath)) {
        console.error('Папка docs не найдена!');
        process.exit(1);
    }

    console.log('Поиск изображений для конвертации...\n');
    
    const allFiles = getAllFiles(docsPath);
    const imageFiles = allFiles.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png'].includes(ext);
    });

    console.log(`Найдено ${imageFiles.length} изображений для конвертации\n`);
    console.log('Начинаем конвертацию...\n');

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
    console.log('ИТОГИ:');
    console.log(`Конвертировано файлов: ${results.length}`);
    console.log(`Исходный размер: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Новый размер: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Сэкономлено: ${(((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100).toFixed(2)}%`);
    console.log('='.repeat(60));
}

main().catch(console.error);
