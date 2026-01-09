import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const appDir = join(__dirname, '..', 'app');

async function generateFavicon() {
  const logoPath = join(publicDir, 'RGB-Eugene-Chauffeurs-Concierge-Logo.webp');

  console.log('Loading logo...');
  const logo = sharp(logoPath);
  const metadata = await logo.metadata();

  console.log(`Logo dimensions: ${metadata.width}x${metadata.height}`);

  // Extract the icon mark (top portion with car + gear)
  // The icon is roughly the top 55% of the image
  const iconHeight = Math.floor(metadata.height * 0.55);
  const iconWidth = metadata.width;

  // Extract icon region and make it square by adding padding
  const iconMark = await sharp(logoPath)
    .extract({
      left: 0,
      top: 0,
      width: iconWidth,
      height: iconHeight
    })
    .toBuffer();

  // Make it square with transparent padding
  const squareSize = Math.max(iconWidth, iconHeight);
  const squareIcon = await sharp({
    create: {
      width: squareSize,
      height: squareSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: iconMark,
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  // Generate different sizes
  const sizes = [16, 32, 48, 64, 128, 180, 192, 512];

  for (const size of sizes) {
    const outputPath = join(publicDir, `favicon-${size}.png`);
    await sharp(squareIcon)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(outputPath);
    console.log(`Generated: favicon-${size}.png`);
  }

  // Generate ICO (32x32 as primary)
  const ico32 = await sharp(squareIcon)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Save as PNG for Next.js app directory (it will serve as favicon)
  const appFaviconPath = join(appDir, 'icon.png');
  await sharp(squareIcon)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(appFaviconPath);
  console.log('Generated: app/icon.png');

  // Generate apple-touch-icon
  const appleTouchPath = join(publicDir, 'apple-touch-icon.png');
  await sharp(squareIcon)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(appleTouchPath);
  console.log('Generated: apple-touch-icon.png');

  console.log('\nDone! Favicon files generated.');
  console.log('\nNext steps:');
  console.log('1. The app/icon.png will be used as the favicon by Next.js');
  console.log('2. Delete the old app/favicon.ico if no longer needed');
}

generateFavicon().catch(console.error);
