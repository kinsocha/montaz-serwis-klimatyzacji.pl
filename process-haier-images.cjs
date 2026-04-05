const sharp = require('sharp');
const path = require('path');

const CANVAS_W = 1257;
const CANVAS_H = 729;
const INNER_W = 1144;
const INNER_H = 384;
const LEFT = 53;
const TOP = 204;

const jobs = [
  {
    input: 'public/test-revive-bs.webp',
    output: 'public/klimatyzatory-scienne-haier/klimatyzator-haier-revive-plus-kolor-czarny-indoor.webp',
  },
  {
    input: 'public/test-quartz.webp',
    output: 'public/klimatyzatory-scienne-haier/klimatyzator-haier-quartz-plus-kolor-bialy-indoor.webp',
  },
];

async function processImage({ input, output }) {
  const trimmed = await sharp(input)
    .flatten({ background: '#ffffff' })
    .trim()
    .toBuffer();

  const resized = await sharp(trimmed)
    .resize(INNER_W, INNER_H, { fit: 'fill' })
    .toBuffer();

  await sharp({
    create: {
      width: CANVAS_W,
      height: CANVAS_H,
      channels: 3,
      background: '#ffffff',
    },
  })
    .composite([{ input: resized, left: LEFT, top: TOP }])
    .webp({ quality: 85 })
    .toFile(output);

  console.log(`OK: ${path.basename(output)}`);
}

(async () => {
  for (const job of jobs) {
    await processImage(job);
  }
  console.log('Done!');
})();
