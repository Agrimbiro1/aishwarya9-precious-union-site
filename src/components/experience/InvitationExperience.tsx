import type { ReactNode } from "react";
import phoneTexture from "@/assets/phone-texture.png.asset.json";
import { getResponsiveBackgroundImage } from "@/lib/image";

/**
 * The single self-contained mobile experience shell. Sections are stacked
 * children; the watercolour texture sits behind all of them as a fixed layer
 * so it never affects any section's content box (PRD §5.4).
 */
export function InvitationExperience({
  children,
  locked = false,
}: {
  children: ReactNode;
  locked?: boolean;
}) {
  return (
    <div
      className={`relative h-full w-full overflow-x-hidden bg-background text-ink ${
        locked ? "overflow-y-hidden" : "overflow-y-auto"
      }`}
      style={{
        ...getResponsiveBackgroundImage(
          phoneTexture.webpUrl || phoneTexture.url.replace(/\.(png|jpg|jpeg)$/, ".webp"),
          phoneTexture.url,
          "image/png"
        ),
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundAttachment: "local",
      }}
    >
      {/* Soft Studio Vignette Gradient Overlay (Edges warmer/darker, center brighter for paper depth) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 45%, transparent 35%, oklch(0.93 0.025 78 / 0.35) 75%, oklch(0.88 0.038 68 / 0.5) 100%)",
        }}
      />

      <div className="relative z-10 bg-background/45">{children}</div>
    </div>
  );
}


/** Consistent section wrapper: shared gutters and vertical rhythm. */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`w-full px-6 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}
