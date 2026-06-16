const sharp = require('sharp');
const path = require('path');

const WIDTH = 820;
const HEIGHT = 312;
const TERRACOTTA = '#C8553D';
const FONT_SANS = 'Arial';

async function generateCover() {
  const logoPath = path.join(__dirname, '../public/logo-musuq.png');
  
  const logoBuffer = await sharp(logoPath)
    .resize(80, 80, { fit: 'inside' })
    .toBuffer();

  const textSvg = `
    <svg width="${WIDTH}" height="50" xmlns="http://www.w3.org/2000/svg">
      <style>
        .phrase { fill: #FAF8F5; font-family: Arial, sans-serif; font-size: 28px; font-weight: 600; }
      </style>
      <text x="410" y="28" text-anchor="middle" dominant-baseline="hanging" class="phrase">Lo simple es lo que funciona</text>
    </svg>
  `;

  const textBuffer = Buffer.from(textSvg);

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: TERRACOTTA,
    },
  })
    .composite([
      { input: textBuffer, top: 0, left: 0 },
      { input: logoBuffer, top: HEIGHT - 95, left: WIDTH - 100, blend: 'over' },
    ])
    .png()
    .toFile(path.join(__dirname, '../public/facebook-cover.png'));

  console.log('Cover generated: public/facebook-cover.png');
}

generateCover().catch(console.error);