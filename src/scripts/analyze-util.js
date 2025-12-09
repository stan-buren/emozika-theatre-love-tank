import fs from 'fs/promises';
import path from 'path';

const YEAR_START = parseInt(process.argv[2]);
const YEAR_END = parseInt(process.argv[3]);

async function main() {
    const raw = await fs.readFile(path.join(process.cwd(), 'history_project', 'bronze_chronicle.json'), 'utf-8');
    const data = JSON.parse(raw);

    const era = data.filter(p => p.year >= YEAR_START && p.year <= YEAR_END);

    const filterRegex = process.argv[4] ? new RegExp(process.argv[4], 'i') : null;

    console.log(`Analyzing Era: ${YEAR_START}-${YEAR_END} (${era.length} posts) Filter: ${filterRegex}\n`);

    // Output key content for review
    era.forEach(p => {
        // Skip short noise
        if (p.text.length < 50 && p.media.photo_count === 0) return;

        if (filterRegex && !filterRegex.test(p.text)) return;

        console.log(`--- [${p.date}] ---`);
        console.log(p.text.substring(0, 300).replace(/\n/g, ' '));
        if (p.media.photo_count > 0) console.log(`(IMG: ${p.media.photo_count})`);
        console.log('');
    });
}

main();
