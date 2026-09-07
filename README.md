# Precious Union Site

You are building a Premium Wedding Invitation Website for Indian weddings, based on the attached PRD (Product Requirements Document). Treat this PRD as BINDING, not inspirational. Read it fully before writing any code.

STRICT RULES — follow these exactly:

1. SECTIONS: Build exactly these 11 sections, in this exact order, plus the Opening Animation gate before them. Do not add, remove, merge, or reorder sections:
   Opening Animation → Invitation → Couple → Countdown → Events → Gallery → Family → Wishing Wall → RSVP → Travel & Stay → Contact → Footer.

2. DESIGN SYSTEM: Use ONE typography system (script/display, heading, body) and ONE color palette (maroon-on-cream, per PRD §5) across every single section. Do not restyle, re-theme, or change fonts/colors per section. Build the tokens first (as CSS variables / Tailwind theme config) before building any section, and reuse them everywhere.

3. RESPONSIVE STRATEGY — this is critical, do not deviate: 
   - Mobile is the ONLY real layout. Build the entire experience as one self-contained component that looks like a phone screen.
   - On desktop/tablet, do NOT redesign the layout. Instead, render the exact same mobile component, scaled down, centered inside an iPhone-style phone-frame mockup, with a full-bleed decorative background behind it (Image 1).
   - If you catch yourself writing a `md:` or `lg:` breakpoint that changes content structure (not just scaling), STOP — that is out of scope. There is no separate desktop layout.

4. DATA-DRIVEN, NOT HARDCODED: Every section must pull from the JSON data shapes defined in the PRD (couple name, events array, gallery array, family array, guest object, etc.). Do not hardcode any couple's name, date, or content into the component code — build it so 100 different couples could reuse this same code with different data.

5. GUEST PERSONALIZATION: Implement the global guest variable/context exactly as described in PRD §6 (fetched once, available everywhere via a hook), and wire it into every personalization point listed in the PRD's table (Invitation greeting, RSVP pre-fill, Wishing Wall pre-fill, etc.). Always include the fallback behavior for when guest data is missing — never show "undefined," "null," or broken template text.

6. EDGE CASES ARE MANDATORY, NOT OPTIONAL: For each section, implement at least the edge cases listed in the PRD (e.g., long names, missing photo, empty wishing wall, no RSVP yet, countdown reaching zero, no pets, missing guest name). Do not just build the happy path.

7. REFERENCE IMAGES — match structure and mood ONLY, never copy literal content:
   - Image 1 = desktop full-bleed background (behind phone mockup)
   - Image 2 = typography & color mood reference ONLY — do not copy its specific text/date
   - Image 3 = repeating background texture used inside the phone mockup across all sections
   - Images 4 & 5 = Opening Animation (tap-to-continue + curtain reveal)
   - Image 6 = Invitation section structure
   - Image 7 = Couple section structure
   - Image 16 = Countdown section's decorative frame structure
   - Image 8 = Events section (timeline structure)
   - Image 9 = Gallery section structure
   - Image 10 = Family section structure
   - Image 11 = Wishing Wall section's decorative frame
   - Image 12 = RSVP section's dove/ribbon motif
   - Images 13 & 14 = Travel & Stay section (transport motif + venue illustration)
   - Image 15 = Contact section structure
   - Image 17 = Footer structure
   Never reuse the placeholder names/dates/text visible in these reference images (e.g. "Sam & Sofía," "Camila + Carter") — those are structural references only, not content to copy.

8. NON-GOALS — do NOT build any of these unless I explicitly ask later: native mobile app, payment/gift registry, guest login/accounts, multi-language switching, full multi-photo gallery/lightbox, AI-generated avatars, real-time websocket wishing wall, custom theme picker. If you think one of these is needed, ASK me — don't build it silently.

9. BUILD IN STAGES, NOT ALL AT ONCE:
   Stage 1: Global design system + phone-mockup responsive shell + guest personalization architecture (no content sections yet). Show me this working before continuing.
   Stage 2: Opening Animation + Invitation + Couple sections.
   Stage 3: Countdown + Events + RSVP.
   Stage 4: Gallery + Family + Wishing Wall + Travel & Stay + Contact + Footer.
   After each stage, pause and show me: the rendered result, the JSON shape it consumes, and how one edge case is handled — before moving to the next stage.

10. If anything in the PRD is ambiguous or you're unsure how to interpret a requirement, ASK ME a clarifying question instead of guessing or improvising.

Now read the attached PRD in full, then start with Stage 1 only.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/35b7e5e7-56b6-49b2-b45c-297a95d77c59).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
