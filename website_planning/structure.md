# 🏗 Site Structure & Navigation

## Overview
The website must serve two main audiences:
1.  **New Parents**: "Why should I bring my child here?" (Trust, Results, Location).
2.  **Current Students/Parents**: "See my child's success" (Photos, Videos, News).

## Sitemap

### 1. Home (`/`)
*   **Hero Section**: Stunning video background (Best shots from "Real Time" or "Alice").
*   **Value Prop**: "Theatre & Cinema School for the New Generation".
*   **Split Chooser**: "I want Theater" vs "I want Cinema".
*   **Proof**: Awards Strip (Grand Prix).
*   **Call to Action**: "Book a Trial Lesson".

### 2. Studio / Theatre (`/studio`)
*   **Focus**: Acting, Speech, Movement.
*   **Content**:
    *   Methodology ("Silence Lessons" etc).
    *   Age Groups (3-5, 6-9, 10+).
    *   Teachers (Photos + Bio).
    *   **Gallery**: Best theatrical photos from VK (filtered).

### 3. Cinema School (`/cinema`) – *New Focus!*
*   **Focus**: Dubbing, Filming, Camera work.
*   **Content**:
    *   "Real Time" & "Path to Memory" trailers.
    *   Cinema discipline descriptions.
    *   **Filmography**: Grid of films (using `vk_films.json`).

### 4. History / About (`/about` or `/history`)
*   **The Narrative**: Embedding `GOLD_BIOGRAPHY.md` content here.
*   **Timeline**: Visual timeline component (2014->2025).
*   **Awards Hall**: Grid of certificates (`vk_awards.json`).

### 5. Locations & Contact (`/contact`)
*   Map with branches (Parnas, Pioneer, Ozerki, Komendantsky).
*   Enrollment Form.

## Navigation
*   **Header**: Sticky, Transparent-to-Solid. Links: `Studio`, `Cinema`, `About`, `Gallery`, `Contacts`. CTA: `Enroll`.
*   **Footer**: Social links (VK, TG), Legal Info, Quick Links.
