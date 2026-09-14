import sharp from "sharp";
import fs from "fs";

async function overlayGuideline() {
  const image = sharp("card_revealed.png");
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;
  const centerX = Math.round(width / 2);

  // SVG overlay with a thin vertical center guideline (vibrant red line with label)
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}">
      <!-- Vertical Center Guideline -->
      <line x1="${centerX}" y1="0" x2="${centerX}" y2="${height}" stroke="#FF0044" stroke-width="2" stroke-dasharray="6 4" opacity="0.85" />
      <circle cx="${centerX}" cy="60" r="5" fill="#FF0044" />
      <circle cx="${centerX}" cy="${height - 60}" r="5" fill="#FF0044" />
      <text x="${centerX + 8}" y="64" fill="#FF0044" font-family="sans-serif" font-size="14" font-weight="bold">TRUE CENTER LINE</text>
    </svg>
  `);

  await image
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .toFile("card_center_verification.png");

  console.log(`Verification guideline image saved at card_center_verification.png! Center X: ${centerX}px`);
}

overlayGuideline().catch(console.error);
