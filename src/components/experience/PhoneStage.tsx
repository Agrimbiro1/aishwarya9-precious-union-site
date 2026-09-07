import { useEffect, useState, type ReactNode } from "react";
import desktopBg from "@/assets/desktop-floral-bg.png.asset.json";

const FRAME_W = 430;
const FRAME_H = 932;
/* Thin flagship bezel: ~3.3% of device width. */
const BEZEL = 14;
const OUTER_R = 66;

/**
 * PRD §7.2 — one mobile-shaped experience. On phones it is the site; on larger
 * screens the identical tree is scaled (never re-laid-out) inside an original
 * premium device frame (thin brushed-titanium bezel, dynamic island).
 */
export function PhoneStage({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState<number | null>(null);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const measure = () => {
      const wide = window.innerWidth >= 768;
      setIsWide(wide);
      if (!wide) {
        setScale(null);
        return;
      }
      const fit = Math.min(
        (window.innerHeight - 64) / FRAME_H,
        (window.innerWidth - 64) / FRAME_W,
        1,
      );
      setScale(Math.max(0.4, fit));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (!isWide) {
    return <div className="h-[100dvh] w-full overflow-hidden bg-background">{children}</div>;
  }

  const s = scale ?? 1;
  const bezel = BEZEL * s;
  const outerR = OUTER_R * s;
  const innerR = outerR - bezel;
  const btn = (t: number, h: number) => ({ top: t * s, height: h * s });

  const titanium =
    "linear-gradient(115deg, oklch(0.86 0.005 250) 0%, oklch(0.62 0.006 250) 16%, oklch(0.44 0.006 250) 38%," +
    " oklch(0.5 0.006 250) 55%, oklch(0.78 0.005 250) 76%, oklch(0.5 0.006 250) 92%, oklch(0.72 0.005 250) 100%)";

  return (
    <div
      className="fixed inset-0 grid place-items-center overflow-hidden bg-background"
      style={{
        backgroundImage: `url(${desktopBg.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative shrink-0" style={{ width: FRAME_W * s, height: FRAME_H * s }}>
        {/* soft floating shadow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: outerR,
            boxShadow: `0 ${34 * s}px ${70 * s}px ${-14 * s}px oklch(0.28 0.04 30 / 0.42),
                        0 ${8 * s}px ${20 * s}px ${-6 * s}px oklch(0.28 0.04 30 / 0.22)`,
          }}
        />

        {/* side hardware — drawn behind the body so only the outer sliver shows */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* action button + volume rocker (left) */}
          <div
            className="absolute rounded-l-[3px]"
            style={{
              left: -2 * s,
              width: 4 * s,
              background: "linear-gradient(90deg, oklch(0.55 0.006 250), oklch(0.74 0.005 250))",
              ...btn(168, 32),
            }}
          />
          <div
            className="absolute rounded-l-[3px]"
            style={{
              left: -2 * s,
              width: 4 * s,
              background: "linear-gradient(90deg, oklch(0.55 0.006 250), oklch(0.74 0.005 250))",
              ...btn(232, 62),
            }}
          />
          <div
            className="absolute rounded-l-[3px]"
            style={{
              left: -2 * s,
              width: 4 * s,
              background: "linear-gradient(90deg, oklch(0.55 0.006 250), oklch(0.74 0.005 250))",
              ...btn(306, 62),
            }}
          />
          {/* side / power button (right, slightly above centre) */}
          <div
            className="absolute rounded-r-[3px]"
            style={{
              right: -2 * s,
              width: 4 * s,
              background: "linear-gradient(270deg, oklch(0.55 0.006 250), oklch(0.74 0.005 250))",
              ...btn(268, 96),
            }}
          />
        </div>

        {/* titanium body */}
        <div
          className="relative h-full w-full"
          style={{
            borderRadius: outerR,
            padding: bezel,
            background: titanium,
          }}
        >
          {/* faint machined gloss streak */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: outerR,
              background:
                "linear-gradient(118deg, transparent 34%, oklch(1 0 0 / 0.3) 46%, oklch(1 0 0 / 0.06) 52%, transparent 62%)",
              mixBlendMode: "screen",
            }}
          />
          {/* crisp machined edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: outerR,
              boxShadow:
                `inset 0 0 0 ${Math.max(1, 1.2 * s)}px oklch(1 0 0 / 0.4),` +
                ` inset 0 0 ${3 * s}px ${1 * s}px oklch(0.3 0.01 250 / 0.5)`,
            }}
          />

          {/* screen */}
          <div
            className="relative h-full w-full overflow-hidden bg-background"
            style={{ borderRadius: innerR }}
          >
            <div
              style={{
                width: FRAME_W,
                height: FRAME_H,
                transform: `scale(${s})`,
                transformOrigin: "top left",
              }}
            >
              {children}
            </div>

            {/* dynamic island — floats over the display content */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full"
              style={{
                top: 11 * s,
                width: 112 * s,
                height: 32 * s,
                background: "oklch(0.13 0.005 250)",
                boxShadow: `inset 0 ${-1 * s}px ${2 * s}px oklch(1 0 0 / 0.12)`,
              }}
            />

            {/* recessed screen inset */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                borderRadius: innerR,
                boxShadow:
                  `inset 0 0 0 ${Math.max(1, 1 * s)}px oklch(0.18 0.01 250 / 0.55),` +
                  ` inset 0 ${2 * s}px ${4 * s}px oklch(0.18 0.01 250 / 0.35)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
