# 📝 Content & Data Integration

## Source of Truth: `vk_cache.db` + Generated JSONs

### 1. The History Page
*   **Source**: `history_project/GOLD_BIOGRAPHY.md`.
*   **Implementation**: Parse MD, render with interspersed full-width images from the relevant era (Using Album IDs from Silver Milestones).

### 2. The Filmography (Cinema Page)
*   **Source**: `src/data/vk_films.json`.
*   **Display**: Netflix-style carousel or Masonry grid.
*   **Features**: Click to play trailer (Youtube embed or VK player?), Release Year, Genre (Short/Feature).

### 3. The Awards Hall
*   **Source**: `src/data/vk_awards.json` + `silver_milestones.md`.
*   **Display**: "Wall of Fame".
*   **Highlight**: The "Grand Prix" cups should be visually prominent (Gold border/glow).

### 4. Blog / News
*   **Source**: `src/data/chronicle_full.json` (Bronze artifact).
*   **Implementation**: A "News" section showing the last 3-5 major posts.
*   **Filter**: Show only posts with >100 likes or specific tags?

### 5. Testimonials
*   **Source**: Discussion Topics (e.g., "Reviews" topic from VK).
*   **Status**: Need to verify if `topics` table synced reviews? (Yes, `fetchAndSaveTopics` runs).
*   **Implementation**: Carousel of happy parent quotes.
