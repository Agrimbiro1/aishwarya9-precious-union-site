/**
 * Theater curtain panels — layered SVG fabric with curved fold paths, valley/ridge
 * shading and a draped valance across the top. Pure presentation; the parent owns
 * the open/closed state and the outward transform.
 */

const FOLDS = 7;

function foldPaths() {
  const w = 100 / FOLDS;
  return Array.from({ length: FOLDS }, (_, i) => {
    const x = i * w;
    const bulge = w * 0.55;
    // valley band: a soft curved vertical ribbon that widens toward the hem
    return {
      key: i,
      valley: `M${x} 0 C${x + bulge} 60, ${x - bulge * 0.4} 140, ${x + w * 0.15} 200 L${
        x + w * 0.55
      } 200 C${x + w * 0.2} 140, ${x + bulge + w * 0.3} 60, ${x + w * 0.45} 0 Z`,
      ridge: `M${x + w * 0.5} 0 C${x + w * 0.9} 70, ${x + w * 0.2} 150, ${x + w * 0.62} 200 L${
        x + w * 0.82
      } 200 C${x + w * 0.45} 150, ${x + w} 70, ${x + w * 0.78} 0 Z`,
    };
  });
}

export function CurtainPanel({ side }: { side: "left" | "right" }) {
  const folds = foldPaths();
  const id = `curtain-${side}`;
  return (
    <svg
      viewBox="0 0 100 200"
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-base`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.32 0.12 27)" />
          <stop offset="35%" stopColor="oklch(0.41 0.15 27)" />
          <stop offset="70%" stopColor="oklch(0.35 0.135 27)" />
          <stop offset="100%" stopColor="oklch(0.27 0.1 27)" />
        </linearGradient>
        <linearGradient id={`${id}-valley`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.2 0.07 27)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="oklch(0.16 0.05 27)" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={`${id}-ridge`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.93 0.05 84)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="oklch(0.85 0.09 78)" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`${id}-hem`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.2 0.06 27)" stopOpacity="0" />
          <stop offset="100%" stopColor="oklch(0.18 0.05 27)" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <rect width="100" height="200" fill={`url(#${id}-base)`} />
      <g transform={side === "right" ? "translate(100,0) scale(-1,1)" : undefined}>
        {folds.map((f) => (
          <g key={f.key}>
            <path d={f.valley} fill={`url(#${id}-valley)`} />
            <path d={f.ridge} fill={`url(#${id}-ridge)`} />
          </g>
        ))}
      </g>
      <rect y="150" width="100" height="50" fill={`url(#${id}-hem)`} />
      {/* inner edge highlight */}
      <rect
        x={side === "left" ? 97.5 : 0}
        width="2.5"
        height="200"
        fill="oklch(0.9 0.07 80)"
        opacity="0.28"
      />
    </svg>
  );
}

/** Draped swag connecting both panels at the very top. */
export function Valance() {
  return (
    <svg
      viewBox="0 0 200 46"
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="valance-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.42 0.15 27)" />
          <stop offset="100%" stopColor="oklch(0.26 0.1 27)" />
        </linearGradient>
      </defs>
      <path d="M0 0H200V12C160 40 140 46 100 46S40 40 0 12Z" fill="url(#valance-base)" />
      {[0, 1, 2, 3].map((i) => {
        const x = 20 + i * 40;
        return (
          <path
            key={i}
            d={`M${x} 0 C${x + 12} 22, ${x + 24} 34, ${x + 40} 40`}
            stroke="oklch(0.9 0.07 80)"
            strokeOpacity="0.22"
            strokeWidth="1.2"
            fill="none"
          />
        );
      })}
      <path
        d="M0 12C40 40 60 46 100 46S160 40 200 12"
        stroke="oklch(0.88 0.09 78)"
        strokeOpacity="0.4"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}

/** Rope tie-back with tassel, sits on the outer hem of a panel. */
export function Tieback({ side }: { side: "left" | "right" }) {
  return (
    <svg viewBox="0 0 40 90" className="h-full w-full" aria-hidden="true">
      <g transform={side === "right" ? "translate(40,0) scale(-1,1)" : undefined}>
        <path
          d="M2 8C18 14 30 24 32 40"
          stroke="oklch(0.82 0.11 80)"
          strokeOpacity="0.75"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="32" cy="46" r="5" fill="oklch(0.82 0.11 80)" fillOpacity="0.8" />
        <path
          d="M27 50 Q32 78 37 50 Z"
          fill="oklch(0.78 0.12 78)"
          fillOpacity="0.75"
        />
      </g>
    </svg>
  );
}
