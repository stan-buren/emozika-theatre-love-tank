export function initFaq() {
    const faqSection = document.getElementById('faq');
    if (!faqSection) return;

    // Selectors matching FaqList.astro
    const listContainer = faqSection.querySelector('[data-faq-list]');
    const searchInput = faqSection.querySelector('[data-faq-query]');
    const resetBtn = faqSection.querySelector('[data-faq-reset]');
    const countEl = faqSection.querySelector('[data-faq-count]');

    if (!listContainer) return;

    const items = Array.from(listContainer.querySelectorAll('.faq-item')).map(el => {
        return {
            el: el,
            trigger: el.querySelector('.faq-item__trigger'),
            content: el.querySelector('.faq-item__content'),
            // Text for search
            qText: (el.querySelector('.faq-item__question')?.textContent || "").toLowerCase(),
            aText: (el.querySelector('.faq-item__body')?.textContent || "").toLowerCase()
        };
    });

    // 1. Accordion Logic (Custom, not <details> to support animation if needed, but <details> is better usually)
    // FaqList.astro uses buttons + divs + hidden attribute.

    function toggleItem(item, expand) {
        const isExpanded = expand;
        item.trigger.setAttribute('aria-expanded', isExpanded);
        item.content.hidden = !isExpanded;
        item.el.classList.toggle('is-open', isExpanded);
    }

    listContainer.addEventListener('click', (e) => {
        const trigger = e.target.closest('.faq-item__trigger');
        if (!trigger) return;

        const itemEl = trigger.closest('.faq-item');
        const item = items.find(i => i.el === itemEl);
        if (!item) return;

        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        toggleItem(item, !isExpanded);
    });

    // 2. Search Logic
    if (searchInput) {
        function filterFaq() {
            const term = searchInput.value.trim().toLowerCase();
            let visibleCount = 0;

            items.forEach(item => {
                const matches = !term || item.qText.includes(term) || item.aText.includes(term);
                item.el.style.display = matches ? '' : 'none';
                if (matches) visibleCount++;

                // Optional: Auto-expand if searching? Maybe too noisy.
            });

            if (countEl) {
                if (term) {
                    countEl.textContent = `Найдено: ${visibleCount}`;
                    countEl.hidden = false;
                } else {
                    countEl.hidden = true;
                }
            }
        }

        searchInput.addEventListener('input', filterFaq);

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                searchInput.value = '';
                filterFaq();
            });
        }
    }
}
