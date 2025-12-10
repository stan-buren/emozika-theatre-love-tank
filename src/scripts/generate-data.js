import fs from 'fs/promises';
import path from 'path';
import { db } from './db.js';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

async function main() {
    console.log('🏭 Generating JSON data from DB...');

    await fs.mkdir(DATA_DIR, { recursive: true });

    // 1. Generate Gallery (Photos)
    generateGallery();

    // 2. Generate Films (Videos from Posts)
    generateFilms();

    // 3. Generate Awards (From Posts with #awards)
    generateAwards();

    // 4. Generate News (From Posts)
    generateNews();

    // 5. Generate Goods (Placeholder)
    await saveData('vk_goods.json', []);

    console.log('✨ Data generation complete!');
}

function generateGallery() {
    // Select recent photos - LIMIT 12 for MVP Grid
    const photos = db.prepare('SELECT * FROM photos ORDER BY date DESC LIMIT 12').all();

    const galleryItems = photos.map(p => ({
        id: `vk-${p.id}`,
        category: 'backstage',
        categoryLabel: 'Закулисье',
        src: p.url,
        full: p.url,
        alt: p.caption || "Фото из ВКонтакте",
        caption: p.caption || ""
    }));

    saveData('vk_gallery.json', galleryItems);
}

function generateFilms() {
    // 1. Generate Films - LIMIT 6 for MVP Library
    const films = db.prepare("SELECT * FROM videos WHERE duration > 300 ORDER BY date DESC LIMIT 6").all();

    const filmItems = films.map(v => ({
        id: `vk-video-${v.id}`,
        title: v.title,
        year: new Date(v.date * 1000).getFullYear().toString(),
        city: "Санкт-Петербург",
        logline: v.description ? v.description.substring(0, 100) + '...' : '',
        synopsis: v.description || '',
        vkEmbedUrl: v.player_url,
        vkPageUrl: `https://vk.com/video${v.owner_id}_${v.id}`,
        duration: formatDuration(v.duration),
        image: v.image_url,
        category: 'film'
    }));

    saveData('vk_films.json', filmItems);

    // 2. Generate Clips - LIMIT 8 for MVP
    const clips = db.prepare("SELECT * FROM videos WHERE duration <= 60 ORDER BY date DESC LIMIT 8").all();

    const clipItems = clips.map(v => ({
        id: `vk-clip-${v.id}`,
        title: v.title,
        vkEmbedUrl: v.player_url,
        image: v.image_url,
        duration: formatDuration(v.duration),
        category: 'clip'
    }));

    saveData('vk_clips.json', clipItems);
}

function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function generateAwards() {
    // LIMIT 6 Awards for MVP
    const allTopics = db.prepare("SELECT id, title FROM topics").all();
    const topic = allTopics.find(t => t.title.toLowerCase().includes('наград'));

    if (!topic) {
        console.log("   ⚠️ No 'Awards' topic found for generation.");
        saveData('vk_awards.json', []);
        return;
    }

    console.log(`   🏆 Using topic: "${topic.title}" (${topic.id})`);

    const comments = db.prepare("SELECT * FROM comments WHERE topic_id = ? ORDER BY date DESC").all(topic.id);

    const awards = [];

    comments.forEach(c => {
        let photoUrl = null;
        try {
            const atts = JSON.parse(c.attachments);
            const photo = atts.find(a => a.type === 'photo');
            if (photo) photoUrl = photo.url;
        } catch (e) { }

        if (photoUrl || c.text.length > 10) {
            awards.push({
                festivalId: `vk-topic-${c.id}`,
                label: "Награда",
                sublabel: c.text ? c.text.substring(0, 100) + (c.text.length > 100 ? '...' : '') : 'Диплом',
                image: photoUrl,
                date: new Date(c.date * 1000).toISOString()
            });
        }
    });

    // Apply limit after filtering
    saveData('vk_awards.json', awards.slice(0, 6));
}

function generateNews() {
    // Generate News from Posts - LIMIT 4 for MVP
    console.log('   📰 Generating News...');
    const posts = db.prepare("SELECT * FROM posts WHERE text IS NOT NULL AND text != '' ORDER BY date DESC LIMIT 4").all();

    const newsItems = posts.map(p => {
        let imageUrl = null;
        try {
            const images = JSON.parse(p.image_urls || '[]');
            if (images.length > 0) imageUrl = images[0];
        } catch (e) { }

        const cleanText = p.text.replace(/<br>/g, '\n').substring(0, 200) + (p.text.length > 200 ? '...' : '');

        return {
            id: `vk-news-${p.id}`,
            title: "Новости студии", // VK posts don't have titles usually
            date: new Date(p.date * 1000).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }),
            excerpt: cleanText,
            image: imageUrl || '/images/news-placeholder.jpg',
            link: `https://vk.com/wall${p.owner_id}_${p.id}`
        };
    });

    saveData('vk_news.json', newsItems);
}

async function saveData(filename, data) {
    const filePath = path.join(DATA_DIR, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`   ✅ Generated ${filename} (${data.length} items)`);
}

main();
