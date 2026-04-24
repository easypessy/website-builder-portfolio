# Design Brainstorm: Web Builder Portfolio

## Chosen Design Philosophy: **Modern Professional + Bold Typography**

This portfolio will showcase custom website builds with a design that communicates **craftsmanship, speed, and results**. The aesthetic combines clean minimalism with intentional typography hierarchy, subtle animations, and strategic use of color to highlight successful projects.

### Core Principles
1. **Clarity Over Decoration:** Every visual element serves a purpose—no unnecessary flourishes.
2. **Typography as Hierarchy:** Large, bold headlines paired with refined body text create visual structure and guide the eye.
3. **Strategic Color Accents:** A primary accent color (vibrant blue/teal) highlights CTAs, project cards, and key metrics.
4. **Asymmetric Layouts:** Avoid centered grids; use offset sections and varied column widths to create visual interest.

### Color Philosophy
- **Primary Background:** Clean white (`#FFFFFF`) or soft off-white (`#FAFAFA`) for trust and clarity.
- **Text:** Dark charcoal (`#1A1A1A`) for body, with strategic use of accent color for emphasis.
- **Accent Color:** Vibrant teal (`#00B4D8`) for CTAs, highlights, and interactive elements.
- **Supporting Colors:** Soft grays (`#E5E5E5`, `#D0D0D0`) for borders and subtle backgrounds.

### Layout Paradigm
- **Hero Section:** Full-width asymmetric layout with headline on left, abstract visual on right.
- **Project Showcase:** Alternating left-right layout (image left, text right; then reversed).
- **Case Studies:** Grid of project cards with hover effects revealing key metrics.
- **Testimonials:** Minimal, left-aligned with subtle background color.

### Signature Elements
1. **Animated Accent Line:** Horizontal line that animates on scroll, connecting sections.
2. **Project Card Hover:** Cards lift slightly with shadow expansion and accent color fade-in.
3. **Bold Typography Blocks:** Large, uppercase section titles with subtle letter-spacing.

### Interaction Philosophy
- **Smooth Transitions:** All interactions use 300-400ms easing (cubic-bezier).
- **Hover States:** Buttons scale slightly, cards lift, links underline with accent color.
- **Scroll Animations:** Sections fade in and slide up as they enter the viewport.

### Animation Guidelines
- **Page Load:** Hero section slides in from top with fade.
- **Scroll Triggers:** Project cards slide in from left/right based on position.
- **Button Hover:** Subtle scale (1.02x) with color transition.
- **Link Underline:** Animated underline from left to right on hover.

### Typography System
- **Display Font:** "Poppins" Bold (700) for headlines—modern, geometric, strong.
- **Body Font:** "Inter" Regular (400) for body text—clean, readable, professional.
- **Accent Font:** "Poppins" Semi-Bold (600) for subheadings and CTAs.
- **Hierarchy:** H1 (48px), H2 (36px), H3 (24px), Body (16px), Small (14px).

---

## Implementation Notes
- Use Tailwind CSS for responsive utilities.
- Leverage framer-motion for scroll animations.
- Implement lazy loading for project images.
- Ensure mobile-first responsive design (breakpoints: 640px, 1024px, 1280px).
