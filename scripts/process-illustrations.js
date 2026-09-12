import sharp from "sharp";
import path from "path";
import fs from "fs";

const venueImagePath = "C:/Users/Dell/.gemini/antigravity/brain/c8796597-e705-4347-9237-6398bfdc95ff/jaipur_palace_venue_ink_illustration_1789216464874.png";
const carImagePath = "C:/Users/Dell/.gemini/antigravity/brain/c8796597-e705-4347-9237-6398bfdc95ff/vintage_car_hearts_ink_illustration_1789216794922.png";

const outputDir = path.resolve("public/illustrations");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processInkIllustration(inputPath, outputPath, bgThreshold = 230) {
  console.log(`Processing ${inputPath} -> ${outputPath}`);
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  const outBuffer = Buffer.alloc(width * height * 4);

  // Maroon target ink color #7A1E1E -> R=122, G=30, B=30
  const targetR = 122;
  const targetG = 30;
  const targetB = 30;

  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    let alpha = 0;
    if (luminance < bgThreshold) {
      // Soft transition curve for line edges
      alpha = Math.pow((bgThreshold - luminance) / bgThreshold, 0.6) * 255;
      if (alpha > 255) alpha = 255;
    }

    outBuffer[idx] = targetR;
    outBuffer[idx + 1] = targetG;
    outBuffer[idx + 2] = targetB;
    outBuffer[idx + 3] = Math.round(alpha);
  }

  // Trim transparent borders
  await sharp(outBuffer, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .trim()
    .png()
    .toFile(outputPath);

  console.log(`Successfully saved processed illustration to ${outputPath}`);
}

async function run() {
  await processInkIllustration(venueImagePath, path.join(outputDir, "jaipur-palace-venue.png"), 235);
  await processInkIllustration(carImagePath, path.join(outputDir, "wedding-car-hearts.png"), 225);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
