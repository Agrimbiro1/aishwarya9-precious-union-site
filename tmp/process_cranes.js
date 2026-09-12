import sharp from "sharp";
import path from "path";

const imgLeft = "C:\\Users\\Dell\\.gemini\\antigravity\\brain\\bf36b303-038f-4a66-b79d-fc21a0810ef1\\left_crane_anatomical_maroon_1789209626686.png";
const imgRight = "C:\\Users\\Dell\\.gemini\\antigravity\\brain\\bf36b303-038f-4a66-b79d-fc21a0810ef1\\right_crane_anatomical_maroon_1789209641311.png";
const imgFull = "C:\\Users\\Dell\\.gemini\\antigravity\\brain\\bf36b303-038f-4a66-b79d-fc21a0810ef1\\japanese_red_crowned_cranes_ink_art_1789209606683.png";

const outDir = "d:\\100X_Devs\\PROJECTS\\minimal-design\\precious-union-site\\src\\assets";

async function makeTransparent(inputPath, outputPath, threshold = 230) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelCount = info.width * info.height;
  for (let i = 0; i < pixelCount; i++) {
    const offset = i * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    
    // Check if background light paper color (near white/cream)
    if (r > threshold && g > threshold && b > threshold) {
      data[offset + 3] = 0; // Set Alpha to 0
    } else {
      // Soft alpha feathering for edges
      const brightness = (r + g + b) / 3;
      if (brightness > threshold - 25) {
        const factor = (threshold - brightness) / 25;
        data[offset + 3] = Math.floor(data[offset + 3] * Math.max(0, factor));
      }
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);

  console.log(`Saved transparent image to: ${outputPath}`);
}

async function run() {
  await makeTransparent(imgLeft, path.join(outDir, "crane-left-transparent.png"), 235);
  await makeTransparent(imgRight, path.join(outDir, "crane-right-transparent.png"), 235);
  await makeTransparent(imgFull, path.join(outDir, "crane-full-transparent.png"), 235);
}

run().catch(console.error);
