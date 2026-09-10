import type { SVGProps } from "react";

/**
 * Golden Hour Soft Sunset Radial Glow / Light Halo SVG
 * Placed behind the couple and inside the arch opening (z-5)
 * to cast a radiant, warm golden-hour glow that creates magical depth.
 */
export function GoldenHourHaloSVG({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 320 380"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="goldenSunsetWarmGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFF2CE" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#F5D592" stopOpacity="0.7" />
          <stop offset="65%" stopColor="#E6B462" stopOpacity="0.35" />
          <stop offset="85%" stopColor="#C89642" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C89642" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="luminousSunCore" cx="50%" cy="36%" r="28%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#FFF8E8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F5D592" stopOpacity="0" />
        </radialGradient>
        <filter id="goldenHaloSoftBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Radiant Outer Golden Ambient Sunset Halo */}
      <ellipse
        cx="160"
        cy="180"
        rx="145"
        ry="165"
        fill="url(#goldenSunsetWarmGlow)"
        filter="url(#goldenHaloSoftBlur)"
      />

      {/* Luminous Sunspot Light Core behind upper body / heads */}
      <ellipse
        cx="160"
        cy="150"
        rx="70"
        ry="80"
        fill="url(#luminousSunCore)"
        filter="url(#goldenHaloSoftBlur)"
      />
    </svg>
  );
}

/**
 * CoupleEngravingGroundSVG — Pure Engraving Line-Art Ground Treatment
 * Single-weight olive-ink linework matching the site's hand-drawn engraving aesthetic.
 * Replaces flat grey/painted shadows with tight linework hatching directly under the stance,
 * delicate grass tufts, thin marigold petal outlines, subtle pebbles, and a faint ground plane stroke.
 */
export function CoupleEngravingGroundSVG({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  const inkColor = "#4E5E35";
  const shadowHatchColor = "#3A4A28";

  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* 1. FAINT HORIZONTAL GROUND LINE (Barely-there single stroke implying ground plane) */}
      <path
        d="M 25 64 Q 100 62, 160 63 T 295 64"
        stroke={inkColor}
        strokeWidth="0.9"
        strokeOpacity="0.38"
        strokeDasharray="6 3 14 4"
      />

      {/* 2. ENGRAVING HATCHING SHADOW (Linework Density Shadow beneath Bride & Groom) */}
      {/* Bride Stance Ground Hatching (x: 80 - 135) */}
      <g stroke={shadowHatchColor} strokeLinecap="round">
        {/* Core diagonal hatch lines */}
        <path
          d="M 85 58 L 92 64 M 91 58 L 98 64 M 97 58 L 104 64 M 103 58 L 110 64 M 109 58 L 116 64 M 115 58 L 122 64 M 121 58 L 128 64 M 127 58 L 134 64"
          strokeWidth="1.1"
          strokeOpacity="0.6"
        />
        {/* Cross-hatching for weight directly under feet */}
        <path
          d="M 90 64 L 97 58 M 96 64 L 103 58 M 102 64 L 109 58 M 108 64 L 115 58 M 114 64 L 121 58 M 120 64 L 127 58"
          strokeWidth="0.9"
          strokeOpacity="0.4"
        />
        {/* Outer dispersing hatch lines */}
        <path
          d="M 73 60 L 79 64 M 79 61 L 84 64 M 134 60 L 139 64 M 139 61 L 144 64"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />
      </g>

      {/* Groom Stance Ground Hatching (x: 175 - 230) */}
      <g stroke={shadowHatchColor} strokeLinecap="round">
        {/* Core diagonal hatch lines */}
        <path
          d="M 175 58 L 182 64 M 181 58 L 188 64 M 187 58 L 194 64 M 193 58 L 200 64 M 199 58 L 206 64 M 205 58 L 212 64 M 211 58 L 218 64 M 217 58 L 224 64"
          strokeWidth="1.1"
          strokeOpacity="0.6"
        />
        {/* Cross-hatching for weight directly under feet */}
        <path
          d="M 180 64 L 187 58 M 186 64 L 193 58 M 192 64 L 199 58 M 198 64 L 205 58 M 204 64 L 211 58 M 210 64 L 217 58"
          strokeWidth="0.9"
          strokeOpacity="0.4"
        />
        {/* Outer dispersing hatch lines */}
        <path
          d="M 163 60 L 168 64 M 168 61 L 173 64 M 224 60 L 229 64 M 229 61 L 234 64"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />
      </g>

      {/* 3. DELICATE LINE-ART GRASS BLADE TUFTS */}
      <g stroke={inkColor} strokeWidth="1.2" strokeLinecap="round" fill="none">
        {/* Left arch post connection tuft */}
        <path d="M 42 64 C 40 52, 37 44, 34 36" />
        <path d="M 49 64 C 51 53, 55 45, 60 38" />
        <path d="M 56 64 C 58 55, 61 47, 66 43" />

        {/* Center grass tuft between couple */}
        <path d="M 148 63 C 150 53, 152 45, 154 37" />
        <path d="M 154 63 C 152 53, 149 45, 145 37" />
        <path d="M 160 63 C 164 54, 168 47, 173 41" />

        {/* Right arch post connection tuft */}
        <path d="M 252 64 C 249 53, 245 45, 241 38" />
        <path d="M 261 64 C 264 53, 268 45, 274 37" />
        <path d="M 270 64 C 272 56, 276 49, 281 44" />
      </g>

      {/* 4. SCATTERED THIN-OUTLINE FLOWER PETALS (No fills, thin outline shapes) */}
      <g stroke={inkColor} strokeWidth="1" fill="none">
        {/* Petal 1 near Bride's hem */}
        <path d="M 80 50 C 84 47, 88 51, 84 55 C 80 59, 76 53, 80 50 Z" />
        {/* Petal 2 center-left */}
        <path d="M 126 58 C 130 55, 134 59, 130 63 C 126 67, 122 61, 126 58 Z" />
        {/* Petal 3 center-right */}
        <path d="M 166 53 C 170 50, 174 54, 170 58 C 166 62, 162 56, 166 53 Z" />
        {/* Petal 4 near Groom's feet */}
        <path d="M 216 48 C 220 45, 224 49, 220 53 C 216 57, 212 51, 216 48 Z" />
        {/* Petal 5 far right */}
        <path d="M 238 59 C 242 56, 246 60, 242 64 C 238 68, 234 62, 238 59 Z" />
      </g>

      {/* 5. SUBTLE SMALL PEBBLE / STONE OUTLINES */}
      <g stroke={inkColor} strokeWidth="0.9" fill="none">
        <ellipse cx="102" cy="65" rx="3.5" ry="1.8" />
        <ellipse cx="160" cy="66" rx="4" ry="2" />
        <ellipse cx="198" cy="65" rx="3" ry="1.6" />
      </g>
    </svg>
  );
}

/**
 * Layer 3: Foreground Occlusion Overlay for flower-gate.png
 * Contains key foreground vine tendrils, leaf sprigs, and hanging lantern matching flower-gate.png
 * that layer IN FRONT of the couple cutout's outer silhouette edges.
 */
export function FlowerGateForegroundOcclusionSVG({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 560"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* 1. TOP-LEFT HANGING VINTAGE LANTERN (Matches flower-gate.png) */}
      <g transform="translate(86, 115)">
        {/* Hanger Cable / Vine */}
        <path d="M 12 -15 C 8 -5, 10 5, 12 12" stroke="#5C4531" strokeWidth="1.6" />
        {/* Lantern Cap & Ring */}
        <circle cx="12" cy="12" r="3" fill="#D99B56" stroke="#4A3728" strokeWidth="1" />
        <path d="M 4 15 H 20 L 16 20 H 8 Z" fill="#6E5239" stroke="#3D2C1E" strokeWidth="1" />
        {/* Lantern Glass Body */}
        <path d="M 6 20 L 4 38 L 20 38 L 18 20 Z" fill="#FDF6E3" fillOpacity="0.85" stroke="#3D2C1E" strokeWidth="1.2" />
        {/* Warm Candle Glow */}
        <circle cx="12" cy="30" r="4" fill="#E5A93C" opacity="0.9" />
        <circle cx="12" cy="30" r="2" fill="#FFFDF9" />
        {/* Lantern Base */}
        <path d="M 4 38 H 20 L 18 42 H 6 Z" fill="#4A3728" stroke="#3D2C1E" strokeWidth="1" />
      </g>

      {/* 2. LEFT FOREGROUND VINE TENDRILS (Layering OVER Bride's outer dupatta drape) */}
      <g>
        <path
          d="M 44 230 C 58 250, 72 275, 64 298 C 58 315, 42 320, 52 338 C 62 352, 78 345, 72 330"
          stroke="#5C4531"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 52 240 C 66 260, 78 285, 70 305"
          stroke="#687F4A"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Foreground Leaves */}
        <g fill="#687F4A" stroke="#3C4F2A" strokeWidth="1.2">
          <path d="M 64 298 C 76 288, 86 302, 74 312 C 66 316, 60 304, 64 298 Z" />
          <path d="M 52 338 C 40 330, 36 344, 46 350 C 56 354, 60 342, 52 338 Z" />
          <path d="M 72 330 C 84 320, 92 334, 82 342 C 74 346, 68 334, 72 330 Z" />
        </g>
      </g>

      {/* 3. RIGHT FOREGROUND VINE TENDRILS (Layering OVER Groom's outer sherwani sleeve) */}
      <g>
        <path
          d="M 356 240 C 340 260, 326 285, 334 308 C 342 322, 358 326, 348 340 C 338 352, 324 344, 330 330"
          stroke="#5C4531"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 348 250 C 334 270, 322 292, 328 312"
          stroke="#687F4A"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Foreground Leaves */}
        <g fill="#687F4A" stroke="#3C4F2A" strokeWidth="1.2">
          <path d="M 334 308 C 322 298, 314 312, 324 320 C 332 324, 338 312, 334 308 Z" />
          <path d="M 348 340 C 358 332, 364 346, 354 352 C 344 356, 340 344, 348 340 Z" />
        </g>
      </g>

      {/* 4. DANCING BUTTERFLY PAIR IN FLIGHT (Symbolizing Love, Unity & Eternal Togetherness) */}
      <g>
        {/* Intertwined Flight Path Arc Trail */}
        <path
          d="M 168 252 C 182 228, 215 218, 232 196"
          stroke="#E5A93C"
          strokeWidth="0.9"
          strokeOpacity="0.45"
          strokeDasharray="2 3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Butterfly 1 (Upper Honey-Gold Butterfly hovering towards partner) */}
        <g transform="translate(232, 196) scale(0.9) rotate(-22)">
          {/* Upper Wings */}
          <path d="M 0 0 C 4 -12, 16 -12, 14 -2 C 12 4, 3 3, 0 0 Z" fill="#E6A93B" opacity="0.9" stroke="#5C4531" strokeWidth="0.8" />
          <path d="M 0 0 C -4 -12, -16 -12, -14 -2 C -12 4, -3 3, 0 0 Z" fill="#E6A93B" opacity="0.9" stroke="#5C4531" strokeWidth="0.8" />
          {/* Lower Wings */}
          <path d="M 0 0 C 3 3, 10 9, 6 13 C 2 16, -1 8, 0 0 Z" fill="#D98A2B" opacity="0.85" stroke="#5C4531" strokeWidth="0.8" />
          <path d="M 0 0 C -3 3, -10 9, -6 13 C -2 16, 1 8, 0 0 Z" fill="#D98A2B" opacity="0.85" stroke="#5C4531" strokeWidth="0.8" />
          {/* Body & Antennae */}
          <line x1="0" y1="-5" x2="0" y2="10" stroke="#3D2C1E" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 0 -5 Q -3 -9, -5 -11 M 0 -5 Q 3 -9, 5 -11" stroke="#3D2C1E" strokeWidth="0.7" fill="none" />
        </g>

        {/* Butterfly 2 (Lower Rose-Gold Butterfly fluttering upward in dance) */}
        <g transform="translate(168, 252) scale(0.8) rotate(38)">
          {/* Upper Wings */}
          <path d="M 0 0 C 4 -12, 16 -12, 14 -2 C 12 4, 3 3, 0 0 Z" fill="#E08B76" opacity="0.9" stroke="#5C4531" strokeWidth="0.8" />
          <path d="M 0 0 C -4 -12, -16 -12, -14 -2 C -12 4, -3 3, 0 0 Z" fill="#E08B76" opacity="0.9" stroke="#5C4531" strokeWidth="0.8" />
          {/* Lower Wings */}
          <path d="M 0 0 C 3 3, 10 9, 6 13 C 2 16, -1 8, 0 0 Z" fill="#C86D58" opacity="0.85" stroke="#5C4531" strokeWidth="0.8" />
          <path d="M 0 0 C -3 3, -10 9, -6 13 C -2 16, 1 8, 0 0 Z" fill="#C86D58" opacity="0.85" stroke="#5C4531" strokeWidth="0.8" />
          {/* Body & Antennae */}
          <line x1="0" y1="-5" x2="0" y2="10" stroke="#3D2C1E" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 0 -5 Q -3 -9, -5 -11 M 0 -5 Q 3 -9, 5 -11" stroke="#3D2C1E" strokeWidth="0.7" fill="none" />
        </g>
      </g>
    </svg>
  );
}

/**
 * Optional Illustrated Pet SVG Layer (e.g., Laddoo the dog)
 */
export function IllustratedPetSVG({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <ellipse cx="50" cy="82" rx="35" ry="6" fill="#7A1E1E" fillOpacity="0.18" />
      <path
        d="M 30 50 C 20 52, 16 65, 22 78 C 30 84, 65 84, 74 78 C 80 68, 76 54, 64 50 C 52 46, 38 46, 30 50 Z"
        fill="#D99B56"
        stroke="#7A1E1E"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M 24 32 C 14 36, 12 50, 20 54 C 26 50, 28 40, 24 32 Z" fill="#B87733" stroke="#7A1E1E" strokeWidth="1.4" />
      <path d="M 64 32 C 74 36, 76 50, 68 54 C 62 50, 60 40, 64 32 Z" fill="#B87733" stroke="#7A1E1E" strokeWidth="1.4" />
      <circle cx="44" cy="38" r="18" fill="#E6AC6B" stroke="#7A1E1E" strokeWidth="1.6" />
      <ellipse cx="44" cy="44" rx="8" ry="6" fill="#FFFDF9" stroke="#7A1E1E" strokeWidth="1.2" />
      <path d="M 41 41 Q 44 39 47 41 Q 44 45 41 41 Z" fill="#7A1E1E" />
      <path d="M 44 44 V 47 M 40 47 Q 44 50 48 47" stroke="#7A1E1E" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 34 35 Q 37 31 40 35" stroke="#7A1E1E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 48 35 Q 51 31 54 35" stroke="#7A1E1E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 20 68 C 8 62, 4 48, 12 42" stroke="#D99B56" strokeWidth="6" strokeLinecap="round" />
      <path d="M 20 68 C 8 62, 4 48, 12 42" stroke="#7A1E1E" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <ellipse cx="36" cy="78" rx="6" ry="4" fill="#FFFDF9" stroke="#7A1E1E" strokeWidth="1.2" />
      <ellipse cx="52" cy="78" rx="6" ry="4" fill="#FFFDF9" stroke="#7A1E1E" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * HandDrawnWobblyHeartSVG — Single-stroke hand-drawn wobbly heart outline.
 * Freehand pen ink aesthetic with subtle line weight waver & line-end overshoot.
 */
export function HandDrawnWobblyHeartSVG({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Hand-sketched wobbly heart single stroke outline */}
      <path
        d="M 15.6 12.2 C 14.2 6.5, 4.8 6.0, 3.5 12.2 C 2.1 18.8, 11.0 24.2, 15.4 27.6 C 16.0 28.0, 16.4 27.8, 16.8 27.2 C 21.0 23.0, 29.0 18.0, 27.8 11.8 C 26.5 5.6, 17.5 6.2, 16.0 12.2 M 16.0 12.2 C 16.5 10.4, 17.0 8.6, 17.6 7.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * HandDrawnOliveBranchSVG — Botanical hand-sketched olive sprig doodle.
 * Thin organic stem with 4-5 irregularly-spaced leaf outlines (echoing arch vine style).
 */
export function HandDrawnOliveBranchSVG({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 64"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Organic hand-wavered main stem */}
      <path
        d="M 12 60 C 15 48, 13 36, 21 24 C 25 18, 24 10, 26 4 M 26 4 L 27 2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* Leaf 1 (Bottom Left) */}
      <path
        d="M 13 48 C 6 45, 3 37, 8 39 C 12 40, 13 45, 13 48 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 2 (Mid-Bottom Right) */}
      <path
        d="M 16 38 C 23 33, 30 34, 26 40 C 22 43, 18 40, 16 38 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 3 (Mid Left) */}
      <path
        d="M 18 28 C 10 22, 7 14, 14 17 C 18 19, 18 25, 18 28 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 4 (Upper Right) */}
      <path
        d="M 22 18 C 30 12, 33 16, 28 21 C 24 24, 22 21, 22 18 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf 5 (Tip Leaf) */}
      <path
        d="M 25 8 C 21 2, 28 1, 30 6 C 31 9, 27 9, 25 8 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * HandDrawnDoveInFlightSVG — 3-4 simple hand-drawn strokes forming a dove silhouette.
 * Minimalist freehand pen sketch in thin olive ink.
 */
export function HandDrawnDoveInFlightSVG({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 42 32"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Stroke 1: Body curve, head & beak tip overshoot */}
      <path
        d="M 4 20 C 10 23, 20 22, 28 17 C 32 15, 36 12, 38 13 C 39.5 13.5, 41 12.8, 40 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Stroke 2: Sweeping upper wing outline */}
      <path
        d="M 22 19 C 18 10, 22 3, 30 2 C 34 1.5, 29 7, 24 13"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      {/* Stroke 3: Underbelly & lower wing stroke */}
      <path
        d="M 20 21 C 15 25, 12 28, 7 26 C 4 24.5, 10 22, 16 20"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Stroke 4: Tail feather flick */}
      <path
        d="M 6 21 C 3 24, 1 27, 2 28 M 7 22 C 5 26, 4 29, 5 30"
        stroke="currentColor"
        strokeWidth="1.0"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * HandDrawnSprigSVG — Delicate twin/triple leaf sprig in thin olive ink.
 */
export function HandDrawnSprigSVG({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 54"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Stem */}
      <path
        d="M 20 50 C 16 38, 18 26, 10 14 C 7 9, 6 4, 5 2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Leaf 1 (Right) */}
      <path
        d="M 18 40 C 25 38, 28 30, 23 32 C 19 33, 18 37, 18 40 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Leaf 2 (Left) */}
      <path
        d="M 16 28 C 9 24, 4 28, 9 32 C 13 33, 16 30, 16 28 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Leaf 3 (Right Upper) */}
      <path
        d="M 12 18 C 19 14, 20 7, 15 10 C 12 12, 12 16, 12 18 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Tip Leaf */}
      <path
        d="M 7 6 C 2 3, 3 -1, 7 1 C 10 2, 9 5, 7 6 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

