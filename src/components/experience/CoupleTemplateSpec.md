# Reusable Template Specification — Mandap Arch & Couple Portrait Composition

This document defines the exact parameters, scale factors, coordinates, depth layering rules, and blending specs required to drop ANY couple portrait illustration into the Indian Botanical Architectural Mandap Arch scene.

---

## 1. Composition Architecture & Layer Order

The scene is constructed with **3 z-index layers** rendered over a full-bleed cotton-paper background:

```
[Layer 3: Top]         ArchForegroundOcclusionSVG (z-30) — Vine tendrils & marigolds overlapping couple edges
[Layer 2: Middle]      Couple Contact Ground Shadow (z-20) + Couple Portrait Image (z-20)
[Layer 1: Background]  IndianArchitecturalArchSVG (z-10) — Mandap gate structure (75–80% width)
[Base Section]         Full-bleed cotton paper background (bg-background / section texture)
```

---

## 2. Positioning & Scaling Parameters

| Parameter | Recommended Value | Description |
| :--- | :--- | :--- |
| **Arch Gate Width** | `82%` (`max-w-[22rem]`) | Spans 75–80% of section container width |
| **Arch Aspect Ratio** | `4:5` (`viewBox="0 0 400 500"`) | Architectural mandap ratio |
| **Couple Image Scale** | `68%` to `74%` of arch width | Ensures head clears arch peak by ~15% and feet land at base |
| **Couple Vertical Offset (Y)** | `top: 22%` to `top: 26%` | Positions feet exactly at ground line ($y = 440px$ in $500px$ viewBox) |
| **Couple Horizontal Offset (X)** | `50%` (Centered) | `left: 50%`, `transform: translateX(-50%)` |

---

## 3. Ground Contact Shadow Specification

To prevent figures from looking "floating" or "cut out":
- **Shape**: Ellipse (`rx: 95px`, `ry: 16px` at reference $240 \times 50$ scale).
- **Position**: Positioned directly beneath couple feet at ground contact line (`bottom: 12%`).
- **Color & Blend**: Radial gradient from `#3A1F1D` (35% to 45% opacity) to `#5C4033` (20% opacity) fading to transparent.
- **Filter**: `backdrop-blur` / gaussian blur ($4px$).

---

## 4. Edge Blending & Color Harmony

- **Silhouette Blend**: Use `mix-blend-mode: multiply` on pure white background portraits OR `filter: drop-shadow(0 2px 8px rgba(92,64,51,0.18))` for transparent PNG cutouts.
- **Color Grading Alignment**: Soften shadow tones toward `#5C4033` (woody warm brown) and `#7A1E1E` (deep maroon) to match the warm golden-hour ambient light of the arch gate.

---

## 5. Foreground Occlusion Zones

`ArchForegroundOcclusionSVG` overlaps Layer 2 in the following specific zones:
1. **Left Tendril (Bride Side)**: Overlaps $x: 14\% \text{ to } 22\%$ ($y: 52\% \text{ to } 66\%$), curling over outer dupatta drape.
2. **Right Tendril (Groom Side)**: Overlaps $x: 78\% \text{ to } 86\%$ ($y: 50\% \text{ to } 68\%$), curling over sherwani sleeve.
3. **Top Draped Swag**: Overlaps $x: 35\% \text{ to } 65\%$ ($y: 22\%$), hanging slightly in front of safa/hair top.

---

## 6. How to Swap a New Couple Portrait Image

1. Replace `src/assets/indian-couple-portrait.png` with the new couple's transparent cutout PNG or white-background painted illustration.
2. If image aspect ratio is standard ($3:4$ or $4:5$), no code changes are required — the template auto-aligns feet to the contact shadow and clips foreground tendrils naturally.
3. Adjust `w-[72%]` or `top-[24%]` in `CoupleSection.tsx` if the new figure height differs significantly.
