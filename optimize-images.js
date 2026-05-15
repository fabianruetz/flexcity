const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR  = path.join(__dirname, 'Renderings');
const OUTPUT_DIR = path.join(__dirname, 'Renderings-web');
const MAX_WIDTH  = 1920;
const QUALITY    = 82;

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

const files = fs.readdirSync(INPUT_DIR).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

(async () => {
    let totalBefore = 0, totalAfter = 0;

    for (const file of files) {
        const inPath  = path.join(INPUT_DIR, file);
        const outName = path.parse(file).name + '.jpg';
        const outPath = path.join(OUTPUT_DIR, outName);

        const sizeBefore = fs.statSync(inPath).size;

        await sharp(inPath)
            .resize({ width: MAX_WIDTH, withoutEnlargement: true })
            .jpeg({ quality: QUALITY, mozjpeg: true })
            .toFile(outPath);

        const sizeAfter = fs.statSync(outPath).size;
        const saved = Math.round((1 - sizeAfter / sizeBefore) * 100);

        totalBefore += sizeBefore;
        totalAfter  += sizeAfter;

        console.log(`${file.padEnd(30)} ${Math.round(sizeBefore/1024).toString().padStart(6)} KB  →  ${Math.round(sizeAfter/1024).toString().padStart(5)} KB  (${saved}% kleiner)`);
    }

    const totalSaved = Math.round((1 - totalAfter / totalBefore) * 100);
    console.log('\n' + '─'.repeat(70));
    console.log(`Gesamt: ${Math.round(totalBefore/1024/1024*10)/10} MB  →  ${Math.round(totalAfter/1024/1024*10)/10} MB  (${totalSaved}% gespart)`);
    console.log(`\nOptimierte Bilder in: Renderings-web/`);
})();
