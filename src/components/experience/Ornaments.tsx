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

export function Divider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 12" className={className} fill="none" aria-hidden="true">
      <path d="M2 6h56M102 6h56" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M80 1.5 84.5 6 80 10.5 75.5 6Z" stroke="currentColor" strokeWidth="1.3" />
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

