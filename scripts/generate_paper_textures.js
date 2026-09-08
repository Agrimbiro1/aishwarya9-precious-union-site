import fs from "fs";
import zlib from "zlib";

// PNG generator helper using Node built-in zlib
function createPNG(width, height, getPixel) {
  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // CRC32 implementation
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c;
  }
  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, "ascii");
    const typeAndData = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(typeAndData), 0);
    return Buffer.concat([len, typeAndData, crc]);
  }

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // RGBA color type
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = makeChunk("IHDR", ihdrData);

  // Raw Image Data (Filter byte 0 + RGBA per pixel)
  const rawData = Buffer.alloc(height * (width * 4 + 1));
  let offset = 0;

  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // None filter
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      rawData[offset++] = Math.min(255, Math.max(0, r));
      rawData[offset++] = Math.min(255, Math.max(0, g));
      rawData[offset++] = Math.min(255, Math.max(0, b));
      rawData[offset++] = Math.min(255, Math.max(0, a));
    }
  }

  const compressedData = zlib.deflateSync(rawData, { level: 9 });
  const idatChunk = makeChunk("IDAT", compressedData);
  const iendChunk = makeChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Pseudo-random deterministic noise function for seamless tileable crosshatch paper grain
function tileableNoise(x, y, width, height, scale = 1.0) {
  // Seamless wrap coordinates
  const u = x / width;
  const v = y / height;
  
  // High frequency crosshatch fibers (horizontal & vertical laid lines)
  const hLine = Math.sin(v * Math.PI * 2 * 64) * 0.5 + 0.5;
  const vLine = Math.sin(u * Math.PI * 2 * 64) * 0.5 + 0.5;
  const weave = (hLine * 0.4 + vLine * 0.4) - 0.4;

  // Fine organic paper fiber noise
  const nx = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  const noise = (nx - Math.floor(nx)) * 2 - 1;

  // Secondary weave layer (cotton rag crosshatch)
  const weave2 = Math.sin((u + v) * Math.PI * 2 * 32) * 0.25;

  return (weave * 0.5 + noise * 0.35 + weave2 * 0.15) * scale;
}

// Base color #FBF3E7 => R: 251, G: 243, B: 231
const BASE_R = 251;
const BASE_G = 243;
const BASE_B = 231;

const W = 512;
const H = 512;

const variations = [
  { name: "paper-grain-very-subtle", scale: 0.025 }, // ~2.5% variation
  { name: "paper-grain-subtle", scale: 0.05 },       // ~5.0% variation
  { name: "paper-grain-medium", scale: 0.085 },      // ~8.5% variation
];

const outDir = "./src/assets";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

variations.forEach(({ name, scale }) => {
  const pngBuffer = createPNG(W, H, (x, y, w, h) => {
    const val = tileableNoise(x, y, w, h, scale);
    // Apply subtle warm fiber shift (fibers slightly darker/warmer)
    const r = Math.round(BASE_R + val * 22);
    const g = Math.round(BASE_G + val * 20);
    const b = Math.round(BASE_B + val * 18);
    return [r, g, b, 255];
  });

  const pngPath = `${outDir}/${name}.png`;
  fs.writeFileSync(pngPath, pngBuffer);
  console.log(`Generated PNG texture: ${pngPath} (${pngBuffer.length} bytes)`);

  // Generate SVG pattern tile version as well
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#FBF3E7"/>
  <filter id="paper-grain" x="0" y="0" width="${W}" height="${H}" filterUnits="userSpaceOnUse">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.98  0 0 0 0 0.95  0 0 0 0 0.91  ${scale * 0.8} 0 0 0 0 0" result="coloredNoise"/>
    <feBlend mode="multiply" in="SourceGraphic" in2="coloredNoise"/>
  </filter>
  <rect width="${W}" height="${H}" fill="#FBF3E7" filter="url(#paper-grain)"/>
</svg>`;

  const svgPath = `${outDir}/${name}.svg`;
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Generated SVG pattern texture: ${svgPath}`);
});

console.log("Done generating all 3 paper texture variations!");
