import type { ReactNode } from "react";
import phoneTexture from "@/assets/phone-texture.png.asset.json";

/**
 * The single self-contained mobile experience shell. Sections are stacked
 * children; the watercolour texture sits behind all of them as a fixed layer
 * so it never affects any section's content box (PRD §5.4).
 */
export function InvitationExperience({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative h-full w-full overflow-y-auto overflow-x-hidden bg-background text-ink"
      style={{
        backgroundImage: `url(${phoneTexture.url})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundAttachment: "local",
      }}
    >
      <div className="relative">{children}</div>

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
    <section id={id} className={`w-full px-6 py-14 ${className}`}>
      {children}
    </section>
  );
}
