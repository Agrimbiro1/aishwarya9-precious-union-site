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
