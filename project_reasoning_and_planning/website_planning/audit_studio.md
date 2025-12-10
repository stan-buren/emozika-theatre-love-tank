# Studio Section Audit: From "Good" to "Magical"

## Executive Summary
The current Studio section (`/studio`) is **structurally sound** and informational, but lacks the **emotional magic** of children's theatre. It feels like a "service page" rather than an "adventure."

**Goal:** Transform the page from a *Description of Services* to an *Interactive Journey* that a parent watches their child take.

---

## 1. Hero Section
*   **Point A (Current):** Standard text header + subtitle. "Warm" background. Safe, but boring.
*   **Point B (Vision):** **"The Stage Door"**.
    *   Background: Interactive "curtains" that open slightly on scroll? Or a video collage of emotions (laughing, crying, bowing).
    *   Effect: Spotlight follows the mouse cursor.
    *   Text: Less "We offer...", more "Your child, center stage."

## 2. The Journey (StudioPathway)
*   **Point A:** Vertical timeline list. Informative, but static text.
*   **Point B:** **"The Hero's Path"**.
    *   Horizontal scroll or "Snake" layout.
    *   Visuals: Illustrations that evolve. Step 1: Shy child. Step 3: In costume. Step 5: Bowing with flowers.
    *   Animation: As you scroll, footprints appear connecting the steps.

## 3. Team (TeacherSuperheroes)
*   **Point A:** Grid with "Superpower" flip (implemented). **(Strong foundation)**.
*   **Point B:** **Polish**. Add subtle idle animations to the cards (breathing, glowing borders). Ensure mobile tap interaction is perfect.

## 4. Pricing (Abonements)
*   **Point A:** "Calculator/Picker" + Cards. Functional.
*   **Point B:** **"Ticket Office"**.
    *   Style the pricing cards like vintage theatre tickets.
    *   The "Picker" quiz should feel like a Casting Interview. "Who is your child?" -> Result adds a "Stamp" of approval on the ticket.

## 5. Branches (Location)
*   **Point A:** Map + List + Sort. Very utilitarian.
*   **Point B:** **"Find Your Stage"**.
    *   Map pins should pulse.
    *   "Nearest Branch" auto-detection (Geoloc) if possible.
    *   Photos of the specific interiors on hover over the list items.

## 6. Reviews (Testimonials)
*   **Point A:** Standard carousel.
*   **Point B:** **"Standing Ovation"**.
    *   Visual design: Make reviews look like "Flowers/Notes" thrown onto the stage? Or speech bubbles from the auditorium.
    *   Video: Keep the lightbox functionality, it's good.

---

## Technical Action Plan

1.  **Refactor Hero:** Replace `section-page-header` with `StudioStageHero` (new component).
2.  **Upgrade Pathway:** Rewrite `StudioPathway` to use scroll-timeline animations (or IntersectionObserver for simple scroll reveal).
3.  **Theming:** Deepen the "Warm Studio" theme. Use more texture (paper, wood, velvet) instead of just flat colors.
4.  **Integration:** Ensure deeper link to the new `Modal` (Book a Trial) from the Hero and Pricing sections.
