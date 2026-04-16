// Script to generate favicon.ico and apple-touch-icon.png from favicon.png
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Use process.cwd() to get the project root directory
const publicDir = path.join(process.cwd(), 'public');
const sourceImage = path.join(publicDir, 'favicon.png');

async function generateIcons() {
    console.log('🎨 Generating icons...\n');

    // 1. Generate apple-touch-icon.png (180x180)
    console.log('📱 Creating apple-touch-icon.png (180x180)...');
    await sharp(sourceImage)
        .resize(180, 180)
        .png()
        .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ apple-touch-icon.png created!\n');

    // 2. Generate favicon.ico (multiple sizes: 16, 32, 48)
    console.log('🖼️  Creating favicon.ico...');

    // Create individual PNG sizes first
    const sizes = [16, 32, 48];
    for (const size of sizes) {
        await sharp(sourceImage)
            .resize(size, size)
            .png()
            .toFile(path.join(publicDir, `favicon-${size}.png`));
    }

    // For .ico, we'll use the 32x32 PNG as base
    await sharp(sourceImage)
        .resize(32, 32)
        .toFormat('png')
        .toFile(path.join(publicDir, 'favicon.ico'));

    console.log('✅ favicon.ico created!\n');

    // 3. Generate additional PWA icons
    console.log('📲 Creating PWA icons...');

    // icon-192.png
    await sharp(sourceImage)
        .resize(192, 192)
        .png()
        .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✅ icon-192.png created!');

    // icon-512.png
    await sharp(sourceImage)
        .resize(512, 512)
        .png()
        .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✅ icon-512.png created!\n');

    // Clean up temporary files
    for (const size of sizes) {
        const tempFile = path.join(publicDir, `favicon-${size}.png`);
        if (fs.existsSync(tempFile)) {
            fs.unlinkSync(tempFile);
        }
    }

    console.log('🎉 All icons generated successfully!');
}

generateIcons().catch(console.error);
