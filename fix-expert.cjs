const sharp = require('sharp');

async function process(input, output) {
  const trimmed = await sharp(input).flatten({ background: '#ffffff' }).trim().toBuffer();
  const resized = await sharp(trimmed).resize(1144, 384, { fit: 'fill' }).toBuffer();
  await sharp({ create: { width: 1257, height: 729, channels: 3, background: '#ffffff' } })
    .composite([{ input: resized, left: 53, top: 204 }])
    .webp({ quality: 85 })
    .toFile(output);

  const ti = await sharp(output).trim().toBuffer({ resolveWithObject: true });
  console.log(output.split('/').pop(), 'unit:', ti.info.width + 'x' + ti.info.height, 'offsets: left=' + ti.info.trimOffsetLeft, 'top=' + ti.info.trimOffsetTop);
}

process('public/test-expert-r32.webp', 'public/klimatyzatory-scienne-haier/klimatyzator-haier-expert-plus-kolor-white-matt-indoor.webp');
