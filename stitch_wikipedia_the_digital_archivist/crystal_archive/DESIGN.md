# Design System: High-End Editorial Liquid Glass

## 1. Overview & Creative North Star: "The Digital Archivist"
This design system moves beyond the static, encyclopedic nature of the past to embrace a "Digital Archivist" aesthetic. The goal is to create a UI that feels like an infinite, liquid library—where information isn't just displayed, but curated within a sophisticated, multi-layered environment. 

We break the "template" look by eschewing rigid, boxy grids in favor of **intentional asymmetry** and **overlapping translucent planes**. By utilizing the classic Wikipedia "W" as a spiritual anchor, we lean into a high-contrast editorial feel where the authority of a modern serif meets the ethereal lightness of glassmorphism. This is not a flat website; it is a series of stacked, frosted lenses that provide depth, focus, and a sense of intellectual luxury.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the "Ink and Alabaster" tradition, modernized with a technical blue core.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning or containment. Traditional lines create visual noise and "trap" the content. Instead, boundaries must be defined through:
- **Background Tonal Shifts:** Placing a `surface-container-low` section against a `background` floor.
- **Glass Refraction:** Using backdrop blurs to signify a new interactive layer.
- **Negative Space:** Utilizing the `Spacing Scale` (specifically `8` to `12`) to let content breathe.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials. 
- **Base Layer:** `background` (#f8f9fa).
- **Secondary Content Plinth:** `surface-container-low` (#f1f4f6).
- **Interactive Focus/Cards:** `surface-container-lowest` (#ffffff).
- **Elevated Modals/Overlays:** `surface-bright` with 80% opacity and a 16px backdrop-blur.

### The "Glass & Gradient" Rule
To evoke a "liquid" feel, CTAs and Hero sections must not use flat fills.
- **Primary CTAs:** Use a subtle linear gradient (135°) from `primary` (#2259bf) to `primary_dim` (#094cb2).
- **Glass Elements:** Use `surface_variant` at 40% opacity with a `backdrop-filter: blur(20px)`. This allows the `on_background` content to bleed through softly, grounding the element in its environment.

---

## 3. Typography: Editorial Authority
The typographic pairing is designed to mimic a premium academic journal—authoritative yet accessible.

- **The Display & Headline (Newsreader Serif):** Used for titles and major section headers. It conveys the "Wikipedia" heritage of truth and history. Use `display-lg` (3.5rem) for page titles to create a massive, intentional focal point.
- **The Interface & Body (Inter Sans-Serif):** Used for all functional elements, labels, and long-form reading. `body-md` (0.875rem) is the workhorse for dense information, providing high legibility against translucent backgrounds.
- **Visual Soul:** Use `headline-sm` for pull-quotes or secondary headers, set in `primary` (#2259bf) to draw the eye without the need for bold icons or heavy dividers.

---

## 4. Elevation & Depth
Depth in this system is a result of **Tonal Layering**, not structural scaffolding.

- **The Layering Principle:** Rather than using a shadow to lift a card, place a `surface-container-lowest` (#ffffff) card on a `surface-container` (#eaeff1) background. The 2% difference in luminosity creates a sophisticated, "quiet" lift.
- **Ambient Shadows:** Shadows are reserved for "floating" states (e.g., a hovered card or a dropdown). Use the `on_surface` color at 6% opacity with a 40px blur and 12px Y-offset. This mimics a soft, natural overhead light source.
- **The "Ghost Border" Fallback:** If accessibility requires a stroke (e.g., in high-contrast modes), use `outline_variant` at 15% opacity. Never use a 100% opaque border.
- **Asymmetric Offsets:** For hero imagery or featured articles, offset the content container from its background "glass" tray by `spacing-4` (1.4rem) to break the symmetry of standard web modules.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_dim`), `rounded-md` (0.375rem). No border. White text (`on_primary`).
- **Secondary (Glass):** `surface_variant` at 30% opacity, backdrop-blur 10px, `on_surface` text. This makes the button feel like it's carved from the page itself.
- **Tertiary:** Pure text in `primary` with `label-md` weight.

### Cards & Content Modules
- **Constraint:** Forbid the use of divider lines. 
- **Implementation:** Separate content blocks using `spacing-6` (2rem). Use a `surface-container-highest` background for a sidebar to distinguish it from the main `surface` reading area. 
- **Edges:** All cards must use `rounded-xl` (0.75rem) to maintain the "liquid" softness.

### Input Fields
- **Base:** A subtle `surface-container-low` fill.
- **Active State:** Transitions to `surface-container-lowest` with a "Ghost Border" of `primary` at 20% opacity. 
- **Error:** Use `error` (#9e3f4e) for text, but the field background should shift to a soft `error_container` at 10% opacity.

### Featured Article Plate (Unique Component)
A large-format component using `display-md` typography, overlapping a semi-transparent image container. The text sits on a glassmorphic pane (`surface-bright` at 70% opacity) that partially obscures a high-resolution background image, creating an "Architectural" depth.

---

## 6. Do's and Don'ts

### Do:
- **Use "White Space" as a Separator:** Let the `spacing-16` and `spacing-20` tokens do the work of separating major sections.
- **Embrace Translucency:** Allow backgrounds to peek through navigation bars and sidebars to create a unified "liquid" experience.
- **Prioritize Type Scale:** Use the drastic jump between `display-lg` and `body-md` to create a clear information hierarchy.

### Don't:
- **Don't use 1px Borders:** This is the quickest way to kill the "High-End" feel of this system.
- **Don't use Pure Black Shadows:** Always tint shadows with the `on_surface` or `primary` color to keep them "ambient."
- **Don't Over-Color:** Keep 90% of the UI in the `surface` and `neutral` range. Use `primary` and `tertiary` only for intentional wayfinding and "moments of delight."
- **Don't use Rigid Grids:** If a module can be slightly offset or varied in width, do so. Perfection is found in the intentional "human" touch of asymmetry.