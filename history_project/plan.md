# History Project Plan: The Emozika Biography

## Objective
Transform 11 years of raw VKontakte data (2014-2025) into a compelling, human-readable biography of the "Emozika" Theatre Studio.

## Data Source
- **VK Cache DB**: Local SQLite database containing 2,689 posts and 15,000+ photos.
- **Range**: Nov 2014 — Dec 2025.

## Workflow Phases

### 🥉 Phase 1: Bronze (Extraction)
**Goal**: Get raw data out of DB into a format suitable for analysis, filtering out noise.
- **Input**: `src/db/vk_cache.db`
- **Action**: Run `src/scripts/export-chronicle.js`
- **Output**: `history_project/bronze_chronicle.json`
  - *Format*: JSON Array of `{ date, text, tags, metrics, media_count, links }`.
  - *Filtering*: Exclude empty posts, pure reposts? (TBD)
  - *Size Concern*: JSON is denser than markdown. 2600 records is approx 2-3MB. Manageable.

### 🥈 Phase 2: Silver (Analysis & Key Milestones)
**Goal**: Distill raw events into a structured timeline of "Milestones".
- **Action**: Agent reads `bronze_chronicle.json` year-by-year.
- **Task**: Identify:
  - First performances.
  - New branch openings.
  - Festival wins (Grand Prix, Laureate).
  - Teacher join dates.
  - Difficulties/Challenges (if mentioned).
- **Output**: `history_project/silver_milestones.md`
  - *Format*: Categorized timeline (e.g., `# 2015`, `## Premieres`, `## Awards`).

### 🥇 Phase 3: Gold (Narrative Biography)
**Goal**: Write the final story.
- **Action**: Writer Agent uses `silver_milestones.md` as outline.
- **Output**: `history_project/GOLD_BIOGRAPHY.md`
  - *Style*: Engaging, warm, storytelling. Start from "Early Days" to "Current Heights".
  - *Features*: Embedded images (using local artifacts/photos synced).

## Requirements
- **Consistency**: Ensure facts (dates, play names) match DB.
- **Tone**: Professional yet theatrical and emotional.
- **Visuals**: Select best photos for each Era (extracted from DB).

## Current Status
- [ ] Setup Folder Structure ✅
- [ ] **Bronze Phase**: Create Extraction Script
- [ ] **Silver Phase**: Analyze Year-by-Year
- [ ] **Gold Phase**: Write Draft
