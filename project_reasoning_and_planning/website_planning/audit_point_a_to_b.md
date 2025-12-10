# Audit: Point A (Current Reality) vs Point B (Vision)

This document clarifies the gap between where we are and where we want to be for each section of the Emozika Theatre ecosystem.

---

## 1. HUB (Glavnaya) `src/pages/index.astro`
**Current Role:** Traffic Distributor / Navigator.

### 🔴 Point A (Current)
*   **Visuals:** Generic "Hub" look. Simple grid of 3 cards (Studio, Cinema, Theatre).
*   **Map:** Static SVG image (`branches-map.svg`), not interactive.
*   **Navigation:** Basic links.
*   **Vibe:** Functional but dry. "Just a menu".

### 🟢 Point B (Vision)
*   **Visuals:** Immersive entry point. Particle effects or subtle emotional video background.
*   **Map:** **Interactive 3D/Custom Map** showing the scale (15 branches + Stage).
*   **Components:** 
    *   "News Ticker" or "Event of the Day" (e.g., "Tonight: Show X at Grand Canyon").
*   **Vibe:** "Wow, this is a big ecosystem."

---

## 2. STUDIO (Education) `src/pages/studio/index.astro`
**Current Role:** Landing page for parents to enroll children.

### 🔴 Point A (Current)
*   **Structure:** Standard Landing (Hero -> Benefits -> Program -> Teachers -> Branches).
*   **Conversion:** Standard buttons.
*   **Teachers:** Simple grid or list? (Need to refine "Superpowers").
*   **Branches:** Basic list or simple map.

### 🟢 Point B (Vision)
*   **Sticky CTA:** "Book a Trial" always visible on mobile.
*   **Teachers:** **"Superhero Profiles"**. Click on a teacher -> see their "Superpower" (e.g., "Crisis Manager", "Voice Wizard").
*   **Branches:** Smart Geolocation ("Nearest branch to you is X").
*   **Trust:** Real-time reviews widget (Yandex/Google) embedded.
*   **Vibe:** Warm, welcoming, safe. "Happiness Factory".

---

## 3. THEATRE (Spectator) `src/pages/theatre/index.astro`
**Current Role:** Playbill and Tickets.

### 🔴 Point A (Current)
*   **Afisha:** List of plays.
*   **Tickets:** Link to external ticketing system (Yandex Tickets / Timepad)?
*   **Content:** Static text about plays.

### 🟢 Point B (Vision)
*   **Afisha:** **"Velvet Mode"**. Dark, premium theatrical design.
*   **Tickets:** Seamless widget integration. Buy without leaving (if possible) or very smooth transition.
*   **Repertoire:** "Netflix-style" posters. Trailer auto-play on hover.
*   **Vibe:** Magical, mysterious, professional.

---

## 4. CINEMA (Agency & Production) `src/pages/cinema/index.astro`
**Current Role:** Casting agency and film production info.

### 🔴 Point A (Current)
*   **Portfolio:** List of YouTube embeds?
*   **Casting:** Simple form or "Call us".

### 🟢 Point B (Vision)
*   **Portfolio:** **"Video Library" (Dark Mode)**. Cinematic player, filters by genre/year.
*   **Casting:** **"Actor Card Generator"**. Upload photo -> Get branded "Actor Card" to share.
*   **Design:** Cyber/Neon accents (Turquoise). Modern, tech-savvy.
*   **Vibe:** "Hollywood in Spb", dynamic, cool.

---

## 5. ABOUT US (History) `src/pages/about.astro`
**Current Role:** Text about history and values.

### 🔴 Point A (Current)
*   **Components:** `InteractiveTimeline.astro` (exists but needs polish).
*   **Content:** Text heavy.

### 🟢 Point B (Vision)
*   **Timeline:** **"Scrollytelling"**. As you scroll, dates stick and background changes (2014... 2025).
*   **Team:** "Backstage" photos. Not just headshots, but "life behind scenes".
*   **Vibe:** Legacy, growth, family.

---

## 6. GLOBAL UX/UI (System)

### 🔴 Point A (Current)
*   **Navigation:** Standard Navbar.
*   **Transitions:** Hard page reloads.
*   **Mobile:** Basic responsiveness.

### 🟢 Point B (Vision)
*   **Navigation:** Smart/Glassmorphism header. Hides on scroll down, shows on scroll up.
*   **Transitions:** **View Transitions API**. Smooth morphing between "Hub cards" and actual pages.
*   **Micro-interactions:** Hover effects that "glitch" (Cinema) or "glow" (Theatre).
*   **404:** Easter egg game or funny theatrical skit.

---

## 🏁 Summary of PRIORITIES to move from A to B:

1.  **Fix the "Mess":** Standardize CSS variables for distinct "Modes" (Warm/Dark/Velvet).
2.  **Navigation:** Unify the Header/Footer but allow "Theming" based on section.
3.  **CTA:** Implement Sticky CTAs everywhere appropriate.
