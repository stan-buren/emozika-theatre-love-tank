import { initApp } from './modules/legacy.js';
import { initStats } from './modules/stats.js';
import { initFaq } from './modules/faq.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initStats();
    initFaq();
});
