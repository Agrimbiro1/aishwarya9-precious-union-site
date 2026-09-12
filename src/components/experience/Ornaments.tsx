import type { ReactElement } from "react";
/**
 * Hand-drawn style ornaments used across sections. Pure SVG so they inherit
 * the locked palette (currentColor = accent tokens) and never load images.
 */

export function RibbonBow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 70" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 46c34-4 52-22 74-22 12 0 16 8 16 12 0 6-6 10-12 10s-10-4-10-9c0-9 10-15 24-15s24 6 24 15c0 5-4 9-10 9s-12-4-12-10c0-4 4-12 16-12 22 0 40 18 74 22"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M112 34c-4 10-8 18-16 26M128 34c4 10 8 18 16 26"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Dove({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 90 60"
      className={className}
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M6 38c14 8 32 8 46 0 10-6 14-16 26-18-4 8-2 12 4 16-10 10-24 16-40 16-14 0-26-6-36-14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M30 34c8-10 18-16 30-18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="74" cy="18" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function Column({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 220" className={className} fill="none" aria-hidden="true">
      <path d="M12 34h36M10 30h40l-4-8H14Z" stroke="currentColor" strokeWidth="2" />
      <path d="M18 34v152M26 34v152M34 34v152M42 34v152" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 190h44l6 12H2Z" stroke="currentColor" strokeWidth="2" />
      <path d="M20 22c0-8 6-12 10-8M40 22c0-8-6-12-10-8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function FloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 116C4 66 30 22 116 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 92c-8-6-6-18 4-18s12 12 4 18Zm34-30c-8-6-6-18 4-18s12 12 4 18Zm34-24c-6-5-5-14 3-14s10 9 3 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16 74c-8 2-12 8-10 14M46 46c-8 2-12 8-10 14M78 26c-7 2-10 7-9 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Illustrated divider rule featuring 3 hand-drawn flower buds / lotus blossom centerpiece motif. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 18" className={className} fill="none" aria-hidden="true">
      {/* Left Hairline Rule */}
      <path d="M 6 9 H 62" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="62" cy="9" r="1.4" fill="currentColor" />

      {/* Centerpiece: 3 Illustrated Flower Buds / Lotus Blossom Motif */}
      {/* Left Outer Petal Bud */}
      <path
        d="M 80 4 C 74 6, 75 13, 81 15 C 85 13, 85 7, 80 4 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Central Taller Petal Bud */}
      <path
        d="M 90 1 C 84 4, 84 12, 90 15 C 96 12, 96 4, 90 1 Z"
        fill="currentColor"
      />

      {/* Right Outer Petal Bud */}
      <path
        d="M 100 4 C 106 6, 105 13, 99 15 C 95 13, 95 7, 100 4 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Base Calyx Arc & Accent Dot */}
      <path d="M 76 15 Q 90 18 104 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="90" cy="16.5" r="1.2" fill="currentColor" />

      {/* Right Hairline Rule */}
      <circle cx="118" cy="9" r="1.4" fill="currentColor" />
      <path d="M 118 9 H 174" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Thematic hand-drawn divider rule featuring paired doves & central heart motif centerpiece. */
export function DoveDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 22" className={className} fill="none" aria-hidden="true">
      {/* Left Hairline Rule */}
      <path d="M 6 11 H 62" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="62" cy="11" r="1.3" fill="currentColor" />

      <g transform="translate(10, 0)">
        {/* Left Dove Silhouette (Facing Right) */}
        <path
          d="M 66 14 C 68 8, 73 5, 78 8 C 81 6, 84 8, 87 10 C 84 12, 79 14, 74 13 Z"
          fill="currentColor"
        />
        {/* Left Dove Wing */}
        <path d="M 73 8 C 71 3, 77 1, 79 6 Z" fill="currentColor" opacity="0.85" />

        {/* Central Hand-Drawn Heart Motif */}
        <path
          d="M 100 16 C 96 11, 92 6, 97 3 C 100 1, 100 5, 100 5 C 100 5, 100 1, 103 3 C 108 6, 104 11, 100 16 Z"
          fill="currentColor"
        />

        {/* Right Dove Silhouette (Facing Left) */}
        <path
          d="M 134 14 C 132 8, 127 5, 122 8 C 119 6, 116 8, 113 10 C 116 12, 121 14, 126 13 Z"
          fill="currentColor"
        />
        {/* Right Dove Wing */}
        <path d="M 127 8 C 129 3, 123 1, 121 6 Z" fill="currentColor" opacity="0.85" />
      </g>

      {/* Right Hairline Rule */}
      <circle cx="158" cy="11" r="1.3" fill="currentColor" />
      <path d="M 158 11 H 214" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Delicate metallic gold calligraphy flourish swash wrapping around ampersands (&). */
export function GoldAmpersandFlourishSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 36"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Left Delicate Gold Swash Wing */}
      <path
        d="M 4 18 C 12 6, 26 8, 28 16 C 30 22, 24 28, 16 26 C 10 24, 12 16, 22 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Right Delicate Gold Swash Wing */}
      <path
        d="M 60 18 C 52 6, 38 8, 36 16 C 34 22, 40 28, 48 26 C 54 24, 52 16, 42 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Top & Bottom Gold Filigree Accents */}
      <path d="M 24 4 C 28 2, 36 2, 40 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M 24 32 C 28 34, 36 34, 40 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="32" cy="3" r="1.4" fill="currentColor" />
      <circle cx="32" cy="33" r="1.4" fill="currentColor" />
    </svg>
  );
}

/** Hand-drawn botanical twin-branch flourish pair with gold diamond & pearl accents for section closing ending. */
export function SectionClosingFlourishSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 28"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Central Metallic Foil Gold Diamond Motif */}
      <polygon points="80,7 85,12 80,17 75,12" fill="#C89B48" />

      {/* Left Outward Curving Botanical Vine Branch */}
      <path
        d="M 71 12 C 55 11, 38 16, 20 12 C 14 10, 8 13, 4 17"
        stroke="#4E5E35"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Left Branch Leaves & Gold Pearl Tip */}
      <g stroke="#4E5E35" strokeWidth="1" fill="none">
        <path d="M 54 12 C 48 5, 38 7, 44 14" />
        <path d="M 36 14 C 30 7, 22 9, 28 16" />
        <path d="M 22 13 C 16 6, 8 8, 14 15" />
      </g>
      <circle cx="4" cy="17" r="1.4" fill="#C89B48" />

      {/* Right Outward Curving Botanical Vine Branch */}
      <path
        d="M 89 12 C 105 11, 122 16, 140 12 C 146 10, 152 13, 156 17"
        stroke="#4E5E35"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Right Branch Leaves & Gold Pearl Tip */}
      <g stroke="#4E5E35" strokeWidth="1" fill="none">
        <path d="M 106 12 C 112 5, 122 7, 116 14" />
        <path d="M 124 14 C 130 7, 138 9, 132 16" />
        <path d="M 138 13 C 144 6, 152 8, 146 15" />
      </g>
      <circle cx="156" cy="17" r="1.4" fill="#C89B48" />
    </svg>
  );
}

/** Small hand-drawn timeline icons, keyed by event icon name. */
export function EventIcon({
  kind = "sparkle",
  className = "",
}: {
  kind?: "sparkle" | "glass" | "ring" | "cake" | "music" | "flower";
  className?: string;
}) {
  const paths: Record<string, ReactElement> = {
    sparkle: (
      <path
        d="M16 4v24M4 16h24M8 8l16 16M24 8 8 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
    glass: (
      <>
        <path d="M9 6h14l-7 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 15v11M11 26h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    ring: (
      <>
        <circle cx="16" cy="19" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="m16 8 3 3.5h-6L16 8Z" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
    cake: (
      <>
        <path d="M6 26V16h20v10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20h20M16 12v4M16 8v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    music: (
      <>
        <circle cx="11" cy="23" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="23" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5 23V9l12-3v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    flower: (
      <>
        <circle cx="16" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 10c-2-4 4-4 0 0Zm3 3c4-2 4 4 0 0Zm-6 0c-4-2-4 4 0 0Zm3 3c-2 4 4 4 0 0ZM16 17v9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      {paths[kind] ?? paths["sparkle"]}
    </svg>
  );
}

/** Two doves holding a ribbon bow — RSVP section header motif. */
export function DovesWithRibbon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 90" className={className} fill="none" aria-hidden="true">
      <path
        d="M18 44c14-16 30-20 44-12 6 4 8 10 6 16-8 4-18 4-28-2 8 10 20 14 32 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M242 44c-14-16-30-20-44-12-6 4-8 10-6 16 8 4 18 4 28-2-8 10-20 14-32 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M112 46c-8-6-16-4-16 2s10 8 14 2c4-6 12-8 16-2s12 4 14-2-8-8-16-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M120 52c-4 10-8 16-14 22M140 52c4 10 8 16 14 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="62" cy="34" r="1.6" fill="currentColor" />
      <circle cx="198" cy="34" r="1.6" fill="currentColor" />
    </svg>
  );
}

/** Illustrated stand-in when a couple hasn't uploaded photographs yet. */
export function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 150" className={className} fill="none" aria-hidden="true">
      <rect x="8" y="8" width="104" height="134" rx="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 112c14-18 22-26 32-26s16 8 26 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="44" cy="58" r="9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="72" cy="66" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M32 40c0-6 6-10 10-6M84 46c2-6-2-11-7-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M20 128h80" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Generic hand-drawn silhouette used when a family member has no illustration. */
export function PersonSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 72" className={className} fill="none" aria-hidden="true">
      <circle cx="30" cy="22" r="11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 68c2-16 10-24 20-24s18 8 20 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Travel icons drawn in the same line style as the timeline icons. */
export function TravelIcon({
  kind = "road",
  className = "",
}: {
  kind?: "flight" | "train" | "road" | "shuttle" | "stay";
  className?: string;
}) {
  const paths: Record<string, ReactElement> = {
    flight: (
      <path
        d="M4 18l24-4 4-8 3 7 9-1-9 6 1 9-4-6-24 5v-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
    train: (
      <>
        <rect x="9" y="5" width="14" height="19" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 12h10M13 28l-3 3M19 28l3 3M14 20h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    road: (
      <>
        <path d="M5 21h22l-3-7H8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="22" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
    shuttle: (
      <>
        <rect x="5" y="8" width="22" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12h6M18 12h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="10" cy="24" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="22" cy="24" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
    stay: (
      <>
        <path d="M5 26V13l11-7 11 7v13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 26v-7h8v7M5 26h22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      {paths[kind] ?? paths["road"]}
    </svg>
  );
}

/** Hand-drawn venue sketch used as the Travel & Stay header motif. */
export function VenueSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" className={className} fill="none" aria-hidden="true">
      <path d="M8 82h184" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M56 82V34l14-12 14 12v48" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M84 82V50h56l14 12v20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M66 44h8M66 56h8M96 66h10v16H96zM118 66h10v16h-10z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M70 22v-8M30 82c-4-14 4-22 12-20M176 82c4-12-4-20-12-18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/** Wedding car with heart balloons — footer motif. */
export function WeddingCar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden="true">
      <path d="M40 92V52c0-6 5-10 12-10h56c7 0 12 4 12 10v40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M54 54h52v14H54zM36 92h92" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="56" cy="98" r="7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="110" cy="98" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M126 44c10-16 22-26 30-24M140 40c8-18 20-24 28-20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M152 18c-4-6 2-11 6-7 4-4 10 1 6 7l-6 7Zm22 6c-4-6 2-11 6-7 4-4 10 1 6 7l-6 7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn stroke linework top ribbon bow & feather-detailed doves header with solid accent knot. */
export function DovesRibbonHeader({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 120" className={className} fill="none" aria-hidden="true">
      {/* Outer & Inner Arching Ribbon Banner (Stroke linework with fold shading) */}
      <path
        d="M 30 78 C 80 25, 140 18, 180 32 C 220 18, 280 25, 330 78"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M 38 84 C 85 34, 142 28, 180 40 C 218 28, 275 34, 322 84"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinecap="round"
      />
      {/* Fabric Fold Shading Hatching */}
      <path
        d="M 68 62 L 62 74 M 88 52 L 82 64 M 108 44 L 102 56 M 128 38 L 122 50 M 232 38 L 238 50 M 252 44 L 258 56 M 272 52 L 278 64 M 292 62 L 298 74"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Fluttering Ribbon Tails */}
      <path
        d="M 30 78 L 12 90 L 32 98 L 22 110 M 330 78 L 348 90 L 328 98 L 338 110"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Ribbon Bow Loops (Stroke Linework) */}
      <path
        d="M 180 40 C 154 10, 122 28, 144 48 C 160 62, 172 48, 180 44 C 188 48, 200 62, 216 48 C 238 28, 206 10, 180 40 Z"
        stroke="currentColor"
        strokeWidth="3.0"
        strokeLinejoin="round"
      />
      <path
        d="M 160 52 C 148 72, 140 92, 130 104 M 200 52 C 212 72, 220 92, 230 104"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* SOLID FOCAL ACCENT: Central Bow Wax-Seal Knot in Muted Gold (#B8935A) */}
      <circle cx="180" cy="44" r="7" fill="#B8935A" />

      {/* Left Feathered Flying Dove (Stroke Linework) */}
      <g transform="translate(4, 4)">
        <path
          d="M 10 44 C 26 28, 48 26, 64 38 C 74 46, 82 56, 76 66 C 64 68, 48 62, 36 52 C 48 68, 66 70, 84 64"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 36 38 C 48 18, 66 10, 84 14 M 28 32 C 38 16, 56 8, 74 12 M 46 26 C 56 12, 70 6, 84 10"
          stroke="currentColor"
          strokeWidth="2.0"
          strokeLinecap="round"
        />
        <path d="M 10 44 C 0 46, -8 54, -4 68 M 12 47 C 0 55, -4 67, 4 75 M 15 52 C 6 62, 4 74, 14 80" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
        <circle cx="76" cy="34" r="2.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M 80 40 Q 72 58 64 78" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* Right Feathered Flying Dove (Stroke Linework) */}
      <g transform="translate(356, 4) scale(-1, 1)">
        <path
          d="M 10 44 C 26 28, 48 26, 64 38 C 74 46, 82 56, 76 66 C 64 68, 48 62, 36 52 C 48 68, 66 70, 84 64"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 36 38 C 48 18, 66 10, 84 14 M 28 32 C 38 16, 56 8, 74 12 M 46 26 C 56 12, 70 6, 84 10"
          stroke="currentColor"
          strokeWidth="2.0"
          strokeLinecap="round"
        />
        <path d="M 10 44 C 0 46, -8 54, -4 68 M 12 47 C 0 55, -4 67, 4 75 M 15 52 C 6 62, 4 74, 14 80" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
        <circle cx="76" cy="34" r="2.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M 80 40 Q 72 58 64 78" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Classical fluted column with ornate capital, molded base & combed, rhythmic rising helical vine linework + solid accent berries. */
export function IvyColumn({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="-8 0 116 360"
      className={className}
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {/* 1. COLUMN ARCHITECTURE (Crisp stroke linework) */}
      {/* Abacus Top Slab */}
      <path d="M 6 42 Q 50 38 94 42 M 6 26 Q 50 22 94 26 M 6 26 L 6 42 M 94 26 L 94 42 M 12 34 Q 50 30 88 34" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />

      {/* Ionic Capital Volutes (Scrolled Spirals) */}
      <path d="M 22 42 C 6 42 2 24 16 12 C 32 0 42 16 34 26 C 28 34 18 28 20 20 C 22 14 28 16 26 20 M 78 42 C 94 42 98 24 84 12 C 68 0 58 16 66 26 C 72 34 82 28 80 20 C 78 14 72 16 74 20" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M 20 42 C 35 48 65 48 80 42 M 24 54 C 40 58 60 58 76 54" stroke="currentColor" strokeWidth="2.6" />

      {/* Column Shaft Contours & Flute Linework */}
      <path d="M 24 54 L 22 312 M 76 54 L 78 312" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M 35 54 Q 34 185 35 312 M 45 54 Q 44 185 45 312 M 55 54 Q 56 185 55 312 M 65 54 Q 66 185 65 312" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

      {/* Plinth Base Moldings */}
      <path d="M 16 312 C 40 306 60 306 84 312 M 12 326 C 40 320 60 320 88 326 M 16 312 L 12 326 M 84 312 L 88 326 M 8 326 C 40 320 60 320 92 326 M 4 348 C 50 354 50 354 96 348 M 8 326 L 4 348 M 92 326 L 96 348" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* 2. COMBED RHYTHMIC HELICAL VINE OVERLAY (Continuous rising motion from base to capital) */}
      {/* Primary Combed Helical Stem (Smooth 70px rhythmic spiral) */}
      <path
        d="M 16 338 C 38 344, 76 322, 78 295 C 80 268, 20 248, 22 225 C 24 202, 78 180, 76 155 C 74 130, 22 110, 24 85 C 26 60, 74 44, 66 22"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Secondary Parallel Accent Vine */}
      <path
        d="M 28 330 C 46 336, 70 318, 72 298 C 74 275, 28 255, 30 232 C 32 208, 72 188, 70 162 C 68 138, 28 118, 30 92 C 32 68, 68 50, 60 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Rhythmic Tendril Swash Loops at Spirals */}
      <path
        d="M 78 295 C 88 288, 92 278, 84 272 M 22 225 C 12 218, 8 208, 16 202 M 76 155 C 86 148, 90 138, 82 132 M 24 85 C 14 78, 10 68, 18 62"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Distinct Ivy Leaves along Spiral Nodes */}
      {/* Node 1 (y=295, Right): Crisp Ivy Leaf Pair */}
      <path d="M 78 295 C 92 288, 96 308, 84 314 C 74 318, 70 302, 78 295 Z M 72 290 C 82 276, 96 284, 88 296 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M 78 295 L 85 307 M 72 290 L 82 286" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Node 2 (y=225, Left): Crisp Ivy Leaf Pair */}
      <path d="M 22 225 C 8 218, 4 238, 16 244 C 26 248, 30 232, 22 225 Z M 28 220 C 18 206, 4 214, 12 226 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M 22 225 L 15 237 M 28 220 L 18 216" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Node 3 (y=155, Right): Crisp Ivy Leaf Pair */}
      <path d="M 76 155 C 90 148, 94 168, 82 174 C 72 178, 68 162, 76 155 Z M 70 150 C 80 136, 94 144, 86 156 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M 76 155 L 83 167 M 70 150 L 80 146" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Node 4 (y=85, Left): Crisp Ivy Leaf Pair */}
      <path d="M 24 85 C 10 78, 6 98, 18 104 C 28 108, 32 92, 24 85 Z M 30 80 C 20 66, 6 74, 14 86 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M 24 85 L 17 97 M 30 80 L 20 76" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Node 5 (y=24, Top Crown): Draping Capital Flower & Leaf Pair */}
      <path d="M 66 22 C 54 10, 74 2, 80 14 C 86 2, 102 12, 92 24 C 100 34, 82 44, 76 32 C 70 42, 54 32, 62 22 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />

      {/* SOLID ACCENT BERRY DOTS (Rhythmically placed at spiral nodes) */}
      <circle cx="86" cy="282" r="3.2" fill="currentColor" />
      <circle cx="92" cy="290" r="2.6" fill="currentColor" />
      <circle cx="14" cy="212" r="3.2" fill="currentColor" />
      <circle cx="8" cy="220" r="2.6" fill="currentColor" />
      <circle cx="84" cy="142" r="3.2" fill="currentColor" />
      <circle cx="90" cy="150" r="2.6" fill="currentColor" />
      <circle cx="16" cy="72" r="3.2" fill="currentColor" />
      <circle cx="10" cy="80" r="2.6" fill="currentColor" />
    </svg>
  );
}

/** 3-Tier Fountain centerpiece with ornate botanical floral topper crown & gold wax seal accent (#C89B48). */
export function FountainUrn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 140" className={className} fill="none" aria-hidden="true">
      {/* 1. ORNATE BOTANICAL FLORAL TOPPER CROWN (Stroke Linework + Gold Accent) */}
      {/* Central Rising Crown Petals */}
      <path
        d="M 90 4 C 84 -2, 70 8, 80 20 C 68 12, 58 26, 74 32 C 86 36, 90 28, 90 28 C 90 28, 94 36, 106 32 C 122 26, 112 12, 100 20 C 110 8, 96 -2, 90 4 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Inner Petal Veins */}
      <path d="M 90 4 L 90 28 M 80 20 L 90 28 M 100 20 L 90 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />

      {/* SOLID FOCAL ACCENT 1: Gold Crown Jewel Dot (#C89B48) */}
      <circle cx="90" cy="18" r="3.5" fill="#C89B48" />

      {/* 2. TOP FOUNTAIN BOWL & RIM (Crisp stroke linework) */}
      <path d="M 60 36 Q 90 26 120 36 L 114 52 Q 90 58 66 52 Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M 72 42 V 50 M 90 38 V 52 M 108 42 V 50" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

      {/* 3. TIER 2 MIDDLE WATER BASIN & FLUTES */}
      <path d="M 40 64 Q 90 50 140 64 L 128 86 Q 90 96 52 86 Z" stroke="currentColor" strokeWidth="3.0" strokeLinejoin="round" />
      <path d="M 70 52 V 64 M 110 52 V 64" stroke="currentColor" strokeWidth="2.2" />
      <path d="M 64 70 Q 90 76 116 70" stroke="currentColor" strokeWidth="1.6" />

      {/* Cascading Water Drops & Streams */}
      <path
        d="M 50 64 C 40 80, 44 96, 50 114 M 130 64 C 140 80, 136 96, 130 114 M 90 52 V 86 M 68 74 C 62 86, 64 98, 68 110 M 112 74 C 118 86, 116 98, 112 110"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Falling Water Droplets */}
      <circle cx="45" cy="88" r="1.8" fill="currentColor" />
      <circle cx="135" cy="88" r="1.8" fill="currentColor" />

      {/* SOLID FOCAL ACCENT 2: Central Wax-Seal Medallion on Fountain Basin in Metallic Gold (#C89B48) */}
      <circle cx="90" cy="75" r="5.5" fill="#C89B48" />

      {/* 4. BOTTOM LARGE PEDESTAL BASE & PLINTH */}
      <path d="M 24 104 Q 90 90 156 104 L 142 124 Q 90 134 38 124 Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M 12 124 Q 90 114 168 124 L 164 134 Q 90 144 16 134 Z" stroke="currentColor" strokeWidth="3.0" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Ornate thin-ink border frame component for the Wishing Wall (matching Reference Image 1 style).
 * Features top center maroon ribbon bow, marigold/jasmine clusters, side winding ribbons,
 * oil lamp / diya & floral sprig side accents, and bottom vase with marigolds tied with bow.
 */
export function OrnateWishingFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 580"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* 1. TOP RIBBON BOW (Center Top) */}
      <path
        d="M 140 32 C 160 12, 185 24, 200 36 C 215 24, 240 12, 260 32 C 275 48, 255 60, 235 50 C 215 40, 205 52, 200 54 C 195 52, 185 40, 165 50 C 145 60, 125 48, 140 32 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Bow Knot with Gold Accent */}
      <ellipse cx="200" cy="38" rx="7" ry="5.5" fill="#C89B48" stroke="currentColor" strokeWidth="1.6" />
      {/* Bow Inner Folds */}
      <path d="M 162 30 C 172 38, 188 42, 192 38 M 238 30 C 228 38, 212 42, 208 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Bow Streamers Flanking Left & Right across top */}
      <path
        d="M 192 44 C 170 70, 140 30, 100 24 C 70 20, 45 32, 24 38 M 208 44 C 230 70, 260 30, 300 24 C 330 20, 355 32, 376 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 194 48 C 175 75, 148 38, 106 30 C 78 25, 52 38, 30 46 M 206 48 C 225 75, 252 38, 294 30 C 322 25, 348 38, 370 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 2. TOP FLORAL CLUSTERS (Flanking the Bow - Marigolds & Jasmine) */}
      {/* Top Left Marigold Cluster */}
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <circle cx="50" cy="22" r="7" strokeDasharray="3 2" />
        <circle cx="50" cy="22" r="3" fill="currentColor" opacity="0.3" />
        <path d="M 40 16 C 36 8, 48 4, 52 14 M 60 18 C 68 12, 70 24, 58 26 M 38 28 C 30 24, 34 36, 44 32" strokeLinecap="round" />
        <path d="M 28 14 C 20 18, 24 26, 32 22" strokeLinecap="round" />
        <circle cx="28" cy="14" r="1.5" fill="currentColor" />
        <circle cx="34" cy="10" r="1.5" fill="currentColor" />
      </g>
      
      {/* Top Right Marigold Cluster */}
      <g stroke="currentColor" strokeWidth="1.6" fill="none">
        <circle cx="350" cy="22" r="7" strokeDasharray="3 2" />
        <circle cx="350" cy="22" r="3" fill="currentColor" opacity="0.3" />
        <path d="M 360 16 C 364 8, 352 4, 348 14 M 340 18 C 332 12, 330 24, 342 26 M 362 28 C 370 24, 366 36, 356 32" strokeLinecap="round" />
        <path d="M 372 14 C 380 18, 376 26, 368 22" strokeLinecap="round" />
        <circle cx="372" cy="14" r="1.5" fill="currentColor" />
        <circle cx="366" cy="10" r="1.5" fill="currentColor" />
      </g>

      {/* 3. WINDING RIBBON SIDE BORDERS (Left & Right) */}
      {/* Left Winding Ribbon Border */}
      <path
        d="M 24 38 C 10 80, 32 120, 20 170 C 8 220, 34 270, 20 330 C 8 390, 32 440, 18 500"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 30 46 C 16 86, 38 126, 26 176 C 14 226, 40 276, 26 336 C 14 396, 38 446, 24 504"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      
      {/* Right Winding Ribbon Border */}
      <path
        d="M 376 38 C 390 80, 368 120, 380 170 C 392 220, 366 270, 380 330 C 392 390, 368 440, 382 500"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 370 46 C 384 86, 362 126, 374 176 C 386 226, 360 276, 374 336 C 386 396, 362 446, 376 504"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* 4. MID-SIDE DECORATIVE MOTIFS */}
      {/* Left Mid-Side Accent: Traditional Indian Diya (Oil Lamp) with Flame */}
      <g transform="translate(2, 210)" stroke="currentColor" strokeWidth="1.6" fill="none">
        <path d="M 6 18 C 12 28, 30 28, 34 18 C 30 16, 20 14, 6 18 Z" strokeLinejoin="round" />
        <path d="M 28 14 C 26 6, 32 2, 30 -4 C 24 2, 22 8, 28 14 Z" fill="#C89B48" stroke="#C89B48" opacity="0.9" />
        <circle cx="30" cy="-6" r="1.5" fill="#C89B48" />
        <path d="M 12 24 C 6 30, 2 38, 8 44" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Right Mid-Side Accent: Delicate Hanging Floral Bud / Marigold Sprig */}
      <g transform="translate(364, 210)" stroke="currentColor" strokeWidth="1.6" fill="none">
        <path d="M 12 0 C 18 12, 10 24, 16 34" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="16" cy="34" r="5" strokeDasharray="2 1.5" />
        <path d="M 10 30 C 6 24, 14 20, 20 28" strokeLinecap="round" />
        <circle cx="16" cy="34" r="2" fill="currentColor" opacity="0.4" />
        <path d="M 4 12 C 10 8, 18 14, 14 20" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* 5. BOTTOM CORNER MOTIFS */}
      {/* Bottom Left: Ornate Floral Vase with Marigold & Jasmine Bouquet tied with Ribbon */}
      <g transform="translate(8, 420)" stroke="currentColor" fill="none">
        {/* Vase Body & Rim */}
        <path d="M 28 80 C 24 64, 20 54, 30 50 L 44 50 C 54 54, 50 64, 46 80 Z" strokeWidth="2" strokeLinejoin="round" />
        <ellipse cx="37" cy="50" rx="8" ry="3" strokeWidth="1.6" />
        <path d="M 24 88 H 50 L 46 96 H 28 Z" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M 37 58 C 30 64, 30 72, 37 76 C 44 72, 44 64, 37 58 Z" strokeWidth="1.2" />
        
        {/* Ribbon Bow on Vase */}
        <path d="M 30 62 C 22 56, 18 68, 28 66 M 44 62 C 52 56, 56 68, 46 66" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="37" cy="64" r="2.5" fill="#C89B48" stroke="currentColor" strokeWidth="1" />
        <path d="M 34 66 C 28 78, 20 86, 14 94 M 40 66 C 46 78, 52 86, 58 94" strokeWidth="1.6" strokeLinecap="round" />

        {/* Flowers & Stems Sprouting from Vase */}
        <path d="M 37 50 V 16 M 32 50 C 26 36, 20 28, 16 18 M 42 50 C 48 36, 54 28, 58 20 M 34 50 C 28 40, 24 34, 26 26" strokeWidth="1.5" strokeLinecap="round" />
        {/* Marigold Petal Heads */}
        <circle cx="37" cy="12" r="7" strokeWidth="1.8" strokeDasharray="3 1.5" />
        <circle cx="37" cy="12" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="16" cy="16" r="5" strokeWidth="1.6" strokeDasharray="2.5 1.5" />
        <circle cx="58" cy="18" r="6" strokeWidth="1.6" strokeDasharray="2.5 1.5" />
        <path d="M 8 10 C 14 6, 20 12, 14 18 M 52 10 C 58 6, 64 14, 58 20" strokeWidth="1.3" strokeLinecap="round" />
      </g>

      {/* Bottom Right: Decorative Diya Dish / Brass Thali with Marigold Petals & Sparks */}
      <g transform="translate(322, 480)" stroke="currentColor" fill="none">
        <ellipse cx="40" cy="40" rx="30" ry="10" strokeWidth="2" />
        <ellipse cx="40" cy="38" rx="22" ry="7" strokeWidth="1.4" />
        {/* Small Central Diya Flame */}
        <path d="M 40 32 C 36 22, 44 16, 40 8 C 34 16, 42 22, 40 32 Z" fill="#C89B48" stroke="#C89B48" strokeWidth="1" opacity="0.95" />
        {/* Petals scattered on tray */}
        <circle cx="26" cy="38" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="32" cy="42" r="2.5" fill="currentColor" opacity="0.6" />
        <circle cx="50" cy="40" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="54" cy="36" r="1.8" fill="currentColor" opacity="0.6" />
        {/* Rising Light Sparks */}
        <path d="M 40 4 M 36 -2 M 44 -4" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="40" cy="-4" r="1" fill="#C89B48" />
        <circle cx="34" cy="-8" r="1" fill="#C89B48" />
        <circle cx="46" cy="-10" r="1" fill="#C89B48" />
      </g>

      {/* 6. BOTTOM BASELINE & GROUND LINES */}
      <path
        d="M 12 535 C 80 545, 160 540, 240 545 C 310 540, 360 545, 388 535"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 28 544 C 100 552, 200 548, 300 552 C 340 550, 370 548, 380 544"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Small scattered marigold petals at base center */}
      <circle cx="160" cy="542" r="1.8" fill="currentColor" opacity="0.5" />
      <circle cx="180" cy="545" r="2.2" fill="currentColor" opacity="0.5" />
      <circle cx="210" cy="543" r="1.8" fill="currentColor" opacity="0.5" />
      <circle cx="230" cy="546" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}




