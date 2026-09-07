import { useEffect, useState, type ReactNode } from "react";
import desktopBg from "@/assets/desktop-floral-bg.png.asset.json";

const FRAME_W = 430;
const FRAME_H = 932;

/**
 * PRD §7.2 — one mobile-shaped experience. On phones it is the site; on larger
 * screens the identical tree is scaled (never re-laid-out) inside a device frame.
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

  return (
    <div
      className="fixed inset-0 grid place-items-center overflow-hidden bg-background"
      style={{
        backgroundImage: `url(${desktopBg.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{ width: FRAME_W * s, height: FRAME_H * s }}
        className="relative shrink-0 rounded-[3.4rem] bg-ink/90 p-[10px] shadow-frame ring-1 ring-ink/20"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-background">
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
          {/* dynamic island */}
          <div
            className="pointer-events-none absolute left-1/2 top-[14px] -translate-x-1/2 rounded-full bg-ink/90"
            style={{ width: 106 * s, height: 30 * s }}
          />
        </div>
      </div>
    </div>
  );
}
