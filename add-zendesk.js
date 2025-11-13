const fs = require('fs');
const path = require('path');

// Find all HTML files in docs directory
const htmlFiles = fs.readdirSync('docs')
    .filter(file => file.endsWith('.html'))
    .map(file => path.join('docs', file));

const widgetScript = `
    <!-- Zendesk Support Widget -->
    <script src="components/zendesk_widget.js"></script>`;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if widget is already added
    if (content.includes('zendesk_widget.js')) {
        console.log(`Skipped: ${file} - widget already exists`);
        return;
    }
    
    // Add widget before </body>
    if (content.includes('</body>')) {
        content = content.replace('</body>', `${widgetScript}\n</body>`);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
    } else {
        console.log(`Warning: ${file} - no </body> tag found`);
    }
});

console.log('\nDone! Zendesk widget added to all HTML files.');
