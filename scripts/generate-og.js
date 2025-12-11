const sharp = require('sharp');
const path = require('path');

async function generateOGImage(text, subtitle, description, location, outputPath) {
  const width = 1200;
  const height = 630;

  // Create SVG with the content
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fafafa;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f4f4f5;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#9333ea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGradient)"/>

      <!-- Decorative circles -->
      <circle cx="100" cy="100" r="200" fill="#9333ea" opacity="0.05"/>
      <circle cx="1100" cy="530" r="250" fill="#6366f1" opacity="0.05"/>

      <!-- Main title -->
      <text x="${width/2}" y="220" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="bold" fill="#18181b" text-anchor="middle">${text}</text>

      <!-- Subtitle with gradient effect -->
      <text x="${width/2}" y="310" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="600" fill="url(#purpleGradient)" text-anchor="middle">${subtitle}</text>

      <!-- Description -->
      <text x="${width/2}" y="400" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#52525b" text-anchor="middle">${description}</text>

      <!-- Location -->
      <text x="${width/2}" y="450" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#71717a" text-anchor="middle">${location}</text>

      <!-- Bottom accent line -->
      <rect x="500" y="520" width="200" height="4" rx="2" fill="url(#purpleGradient)"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`Generated: ${outputPath}`);
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // English version
  await generateOGImage(
    'Sam Nakazaki',
    'Full Stack Developer',
    'Building web applications with Ruby on Rails, React, and Next.js',
    'Based in Tokyo, Japan',
    path.join(publicDir, 'og-en.png')
  );

  // Japanese version
  await generateOGImage(
    '中崎サム',
    'フルスタックデベロッパー',
    'Ruby on Rails、React、Next.jsでWebアプリを開発',
    '東京在住',
    path.join(publicDir, 'og-ja.png')
  );
}

main().catch(console.error);
