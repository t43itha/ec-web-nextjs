# Modern Noir Luxury - Branding Guidelines

This document outlines the visual identity and design principles for the "Modern Noir Luxury" aesthetic implemented across the Eugene Chauffeurs website.

## 1. Design Philosophy

**"Modern Noir Luxury"** is an aesthetic that combines the timeless elegance of classic noir cinema with the sharp, minimalist precision of modern editorial design. It moves away from traditional "corporate luxury" (often characterized by heavy gradients and skeuomorphism) towards a more atmospheric, cinematic, and refined look.

**Key Characteristics:**
*   **Atmospheric Depth:** Using deep blacks, subtle noise textures, and ambient glows rather than flat colors.
*   **Editorial Typography:** Treating text as a primary visual element, with high-contrast pairings and generous whitespace.
*   **Precision & Sharpness:** Ultra-thin borders, sharp corners (no rounded buttons), and glass-morphism effects.
*   **Restraint:** Using gold accents sparingly and purposefully, rather than washing everything in yellow.

## 2. Color Palette

### Primary Colors
*   **Rich Black (`#050505` / `bg-black`):** The foundation of the design. A deep, almost-black that provides maximum contrast.
*   **Champagne Gold (`#C0A062` / `text-gold-400`):** A desaturated, metallic gold used for accents, icons, and key typography. Avoids the "yellow" look of standard gold.
*   **Platinum White (`#FFFFFF`):** Used for primary text, often with varying opacities (100%, 80%, 60%) to create hierarchy.

### Secondary Colors
*   **Charcoal (`#0F0F0F`):** Used for secondary backgrounds or subtle differentiation.
*   **Glass White (`bg-white/[0.02]`):** Used for cards and overlays to create a frosted glass effect.

## 3. Typography

### Headings: **Italiana**
*   **Usage:** Main headlines (H1, H2, H3), large display text.
*   **Characteristics:** A sharp, elegant serif font with high stroke contrast. It evokes fashion magazines and luxury brands.
*   **Styling:** Often used in uppercase for small labels or sentence case for large headlines. Letter spacing is often tightened (`tracking-tight`) for large text.

### Body: **Manrope**
*   **Usage:** Paragraphs, navigation, buttons, UI elements.
*   **Characteristics:** A modern, geometric sans-serif that is highly legible and clean.
*   **Styling:** Often used with wide letter spacing (`tracking-widest`) for uppercase labels (e.g., "EST. LONDON").

## 4. UI Components

### Buttons (`.btn-luxury`)
*   **Shape:** Sharp rectangular corners (no `rounded-lg`).
*   **Style:** Solid white background with black text, or transparent with thin white borders.
*   **Hover:** Subtle gold glow or background shift.
*   **Typography:** Uppercase, wide tracking, small font size.

### Cards (`.card-luxury`)
*   **Background:** Ultra-low opacity white (`bg-white/[0.02]`) with a blur effect (`backdrop-blur-md`).
*   **Borders:** Extremely thin (`1px` or `0.5px`) borders in white or gold (`border-white/10`).
*   **Shadows:** Minimal or ambient glow shadows, rather than hard drop shadows.

### Imagery
*   **Treatment:** Images often feature a grayscale filter that transitions to color on hover.
*   **Overlays:** Dark gradients (`bg-black/50`) are used to ensure text legibility over images.
*   **Borders:** Thin, decorative borders often frame images to give them a "framed art" look.

## 5. Layout Principles

*   **Asymmetry:** Layouts often offset text and images to create dynamic tension, rather than perfectly centering everything.
*   **Whitespace:** Generous padding and margins are used to create a sense of luxury and calm.
*   **Grid Lines:** Subtle, thin lines (`border-white/5`) are used to divide sections, creating a structured, architectural feel.