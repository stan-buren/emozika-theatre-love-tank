# Studio Audit: Logic & Social Proof

**User Request:** Focus on FAQ, Awards (Victories), News, and Parent Stories.

## 1. Awards / Our Victories (`AwardsGallery`)
*   **Point A (Current):** Simple grid of cards with an icon/image placeholder. Functional but dry.
*   **Point B (Vision):** **"The Trophy Case" / "Wall of Fame"**.
    *   **Visuals:** Make it look like a physical shelf or a spotlight gallery.
    *   **Interaction:** Hovering over a diploma could show a tooltip with the specific play/actor who won.
    *   **Data:** Ensure `vk_awards.json` images are high quality. Use gold/silver accent borders.

## 2. News / Life (`NewsSection`)
*   **Point A:** Standard grid of cards with "Read More". Generic "blog" feel.
*   **Point B:** **"Studio Pulse" / "Moments"**.
    *   **Concept:** A Masonry or horizontal scroll feed that feels like an Instagram/VK wall but premium.
    *   **Content:** emphasize *photos* over text. "Backstage from Snow Queen," "New Costume Fitting."
    *   **Label:** Change "Read More" to something more engaging like "See Photos."

## 3. Reviews / Parent Stories (`ReviewsSection`)
*   **Point A:** Carousel with text and lightbox video. Good functionality.
*   **Point B:** **"The Audience"**.
    *   **Refinement:** Style the quotes better. Use large quotation marks.
    *   **Video:** Make the video thumbnails play a silent preview loop on hover (if possible/efficient).

## 4. FAQ (`FaqSection`)
*   **Point A:** Search bar + List. Very "Support Center" vibe.
*   **Point B:** **"Guide for Parents"**.
    *   **Grouping:** Group questions by topic (Beginners, Schedule, Payment).
    *   **Visuals:** Accordion style needs to be smoother. Maybe add small icons for each question topic.
    *   **Tone:** Ensure answers are warm and reassuring, not bureaucratic.

## Action Plan
1.  **Refactor Awards:** Create `AwardShelf` component (visual upgrade).
2.  **Refactor News:** Rename to `StudioMoments` and improve card layout (image-first).
3.  **Refactor FAQ:** Improve styling of `FaqList` (add categories/icons).
4.  **Refactor Reviews:** Polish the `ReviewsGrid` visuals (typography/spacing).
