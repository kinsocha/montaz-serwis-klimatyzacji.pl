const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const CANVAS_W = 1257;
const CANVAS_H = 729;
const INNER_W = 1144;
const INNER_H = 384;
const LEFT = 53;
const TOP = 204;

const srcDir = 'public/klimatyzatory-scienne-gree';
const outDir = 'public/klimatyzatory-scienne-gree/processed';

(async () => {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.webp'));

  for (const f of files) {
    const srcPath = path.join(srcDir, f);
    const outPath = path.join(outDir, f);

    const trimmed = await sharp(srcPath)
      .flatten({ background: '#ffffff' })
      .trim()
      .toBuffer();

    const resized = await sharp(trimmed)
      .resize(INNER_W, INNER_H, { fit: 'fill' })
      .toBuffer();

    await sharp({
      create: { width: CANVAS_W, height: CANVAS_H, channels: 3, background: '#ffffff' },
    })
      .composite([{ input: resized, left: LEFT, top: TOP }])
      .webp({ quality: 85 })
      .toFile(outPath);

    const ti = await sharp(outPath).trim().toBuffer({ resolveWithObject: true });
    const ok = Math.abs(ti.info.width - INNER_W) <= 15 && Math.abs(ti.info.height - INNER_H) <= 15;
    console.log(ok ? 'OK' : 'BAD', f, ti.info.width + 'x' + ti.info.height);
  }
  console.log('Done! Files in:', outDir);
})();
