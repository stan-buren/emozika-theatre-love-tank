import fs from 'fs/promises';
import path from 'path';
import { db } from './db.js';

async function main() {
    console.log('🥉 Starting Bronze Extraction: VK Posts -> JSON Chronicle');

    const posts = db.prepare(`
        SELECT 
            date, 
            text, 
            image_urls, 
            video_urls, 
            tags 
        FROM posts 
        ORDER BY date ASC
    `).all();

    console.log(`   📊 Found ${posts.length} posts.`);

    const chronicle = posts.map(p => {
        const dateObj = new Date(p.date * 1000);
        const year = dateObj.getFullYear();
        const dateStr = dateObj.toISOString().split('T')[0]; // YYYY-MM-DD

        // Clean text (basic)
        let text = p.text || '';

        // Parse media
        let images = [];
        let videos = [];
        try { images = JSON.parse(p.image_urls || '[]'); } catch (e) { }
        try { videos = JSON.parse(p.video_urls || '[]'); } catch (e) { }

        return {
            date: dateStr,
            year: year,
            text: text,
            media: {
                photo_count: images.length,
                video_count: videos.length,
                photos: images.slice(0, 3) // Preview first 3
            },
            tags: p.tags ? p.tags.split(',') : []
        };
    });

    const outputPath = path.join(process.cwd(), 'history_project', 'bronze_chronicle.json');
    await fs.writeFile(outputPath, JSON.stringify(chronicle, null, 2));

    console.log(`   ✅ Exported ${chronicle.length} items to ${outputPath}`);
    console.log(`   📦 Size: ${(await fs.stat(outputPath)).size / 1024 / 1024} MB`);
}

main();
