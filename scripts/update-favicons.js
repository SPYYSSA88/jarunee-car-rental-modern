const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const source = path.join(__dirname, '../public/logo-source.png');
const publicDir = path.join(__dirname, '../public');

async function generate() {
    console.log('Starting icon generation...');

    if (!fs.existsSync(source)) {
        console.error('Source image not found:', source);
        process.exit(1);
    }

    try {
        // favicon.png 32x32
        await sharp(source).resize(32, 32).toFile(path.join(publicDir, 'favicon.png'));
        console.log('Generated favicon.png');

        // favicon.ico (32x32) - Modern browsers handle PNG in ICO usually, or at least fallback
        // Ideally we use a ICO encoder, but for this quick task, a resize renamed is often sufficient or at least better than old one.
        // Actually, let's keep it as png buffer but save as .ico extension
        await sharp(source).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));
        console.log('Generated favicon.ico');

        // apple-touch-icon.png 180x180
        await sharp(source).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
        console.log('Generated apple-touch-icon.png');

        // icon-192.png
        await sharp(source).resize(192, 192).toFile(path.join(publicDir, 'icon-192.png'));
        console.log('Generated icon-192.png');

        // icon-512.png
        await sharp(source).resize(512, 512).toFile(path.join(publicDir, 'icon-512.png'));
        console.log('Generated icon-512.png');

        console.log('All icons generated successfully!');
    } catch (error) {
        console.error('Error processing images:', error);
    }
}

generate();
