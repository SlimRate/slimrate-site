const fs = require('fs');
const path = require('path');

// Функция для рекурсивного поиска всех HTML файлов
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

// Функция для обновления ссылок на изображения в HTML файле
function updateImageReferences(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Заменяем ссылки на .jpg, .jpeg, .png на .webp
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
        console.log(`✓ Обновлен: ${path.relative(process.cwd(), filePath)}`);
        return true;
    }

    return false;
}

// Функция для обновления ссылок в JavaScript файлах
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
        console.log(`✓ Обновлен: ${path.relative(process.cwd(), filePath)}`);
        return true;
    }

    return false;
}

// Основная функция
function main() {
    const docsPath = path.join(__dirname, 'docs');
    
    console.log('Поиск HTML и JS файлов для обновления ссылок на изображения...\n');

    // Обновляем HTML файлы
    const htmlFiles = getAllHtmlFiles(docsPath);
    let htmlUpdated = 0;

    console.log('Обновление HTML файлов:\n');
    htmlFiles.forEach(file => {
        if (updateImageReferences(file)) {
            htmlUpdated++;
        }
    });

    // Обновляем JS файлы в components
    const componentsPath = path.join(docsPath, 'components');
    let jsUpdated = 0;

    if (fs.existsSync(componentsPath)) {
        console.log('\nОбновление JavaScript файлов:\n');
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
    console.log('ИТОГИ:');
    console.log(`HTML файлов обновлено: ${htmlUpdated}`);
    console.log(`JavaScript файлов обновлено: ${jsUpdated}`);
    console.log('='.repeat(60));
}

main();
