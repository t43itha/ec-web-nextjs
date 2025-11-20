# Technical Theme Documentation

This document provides technical details on the implementation of the "Modern Noir Luxury" theme within the Next.js/Tailwind CSS project.

## 1. Font Configuration (`app/layout.tsx`)

We use `next/font/google` to optimize and load our primary typefaces.

```typescript
import { Italiana, Manrope } from "next/font/google";

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italiana'
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});
```

These variables are injected into the `<body>` class to make them available as CSS variables.

## 2. Tailwind Configuration (`app/globals.css`)

We extend the default Tailwind theme to include our custom fonts and colors.

### CSS Variables
```css
@theme {
  --font-family-italiana: var(--font-italiana);
  --font-family-manrope: var(--font-manrope);
  
  /* Champagne & Platinum Gold Palette */
  --color-gold-100: #F5F0E6;
  --color-gold-200: #E8DFCA;
  --color-gold-300: #D4C5A5;
  --color-gold-400: #C0A062; /* Primary Metallic Gold */
  --color-gold-500: #A88B4D;
  --color-gold-600: #8C7335;
  --color-gold-700: #5C4B21;
  
  --color-rich-black: #050505;
}
```

### Utility Classes

**Typography:**
*   `font-italiana`: Applies the Italiana serif font.
*   `font-manrope`: Applies the Manrope sans-serif font.

**Colors:**
*   `bg-black`: Sets the background to pure black (or rich black).
*   `text-gold-400`: Applies the primary champagne gold color.

**Custom Components:**

We use `@apply` to create reusable component classes in `app/globals.css`.

*   **.btn-luxury**:
    ```css
    .btn-luxury {
      @apply relative overflow-hidden bg-white text-black font-medium py-4 px-10 rounded-none uppercase tracking-[0.15em] text-xs
             transition-all duration-500 hover:bg-gold-300 hover:text-black hover:shadow-[0_0_30px_-5px_rgba(212,197,165,0.4)];
    }
    ```

*   **.card-luxury**:
    ```css
    .card-luxury {
      @apply bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-none shadow-2xl transition-all duration-700 hover:border-gold-400/30 hover:bg-white/[0.04];
    }
    ```

## 3. Global Effects

### Film Grain Overlay
A global noise texture is applied to the `<body>` via a pseudo-element in `app/globals.css` to give the site a cinematic texture.

```css
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* SVG Noise Pattern */
}
```

## 4. Component Implementation Guide

When creating new components, follow these patterns:

1.  **Backgrounds:** Use `bg-black` for sections. Use `bg-white/[0.02]` for cards/containers.
2.  **Borders:** Use `border border-white/10` for subtle separation.
3.  **Text:**
    *   Headings: `font-italiana text-white`
    *   Subheadings/Labels: `font-manrope text-gold-400 uppercase tracking-widest text-xs`
    *   Body: `font-manrope text-white/60 font-light`
4.  **Icons:** Use `lucide-react` icons with `text-gold-400` and `stroke-width={1.5}` (or default) for a refined look.
5.  **Spacing:** Use generous padding (`py-20` or `py-32`) between sections.