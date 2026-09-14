import { Section } from "./InvitationExperience";
import { Divider } from "./Ornaments";
import type { TravelConfig, TravelOption } from "@/data/types";

/**
 * Illustration A: High-Detail Jaipur Heritage Palace / Haveli Venue Illustration
 * Rendered in thin maroon ink (#7A1E1E) matching reference engraving depth,
 * featuring domed chhatris, jharokhas, cross-hatched shading, reflecting water pool, and palm trees.
 * Fully transparent background sitting directly on page texture.
 */
function HeritagePalaceVenueIllustration({ className = "w-full max-w-md sm:max-w-xl h-auto mx-auto" }: { className?: string }) {
  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      <picture className="w-full h-auto">
        <source srcSet="/illustrations/jaipur-palace-venue.webp" type="image/webp" />
        <img
          src="/illustrations/jaipur-palace-venue.png"
          alt="Jaipur Heritage Palace Venue Illustration"
          className="w-full h-auto object-contain drop-shadow-2xs select-none pointer-events-none"
          loading="eager"
        />
      </picture>
    </div>
  );
}

/**
 * Illustration B: Vintage Getaway Car with Heart Balloons ("K & R" & "Mr & Mrs")
 * High-detail hand-drawn maroon ink (#7A1E1E) illustration with bold stroke confidence,
 * heart balloons on wavy crossing strings, rear window floral wreath, and an empty plate badge outline.
 * The initials ("K & R" or dynamic) are rendered as a SEPARATE, live dynamic text layer
 * positioned precisely inside the empty badge space.
 */
function WeddingCarHeartBalloonsIllustration({
  className = "w-full max-w-[270px] sm:max-w-[310px] h-auto mx-auto",
  initials = "K & R",
}: {
  className?: string;
  initials?: string;
}) {
  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      <picture className="w-full h-auto">
        <source srcSet="/illustrations/wedding-car-hearts.webp" type="image/webp" />
        <img
          src="/illustrations/wedding-car-hearts.png"
          alt="Vintage Wedding Getaway Car Illustration"
          className="w-full h-auto object-contain drop-shadow-2xs select-none pointer-events-none"
          loading="eager"
        />
      </picture>
      {/* Live Dynamic Initials Layer positioned over empty badge outline */}
      <div
        className="absolute left-[50.2%] top-[57.8%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[48%] h-[16%] text-center pointer-events-none"
        aria-label={`Couple initials: ${initials}`}
      >
        <span className="font-heading text-[1.05rem] sm:text-[1.2rem] font-semibold text-[#7A1E1E] tracking-[0.16em] leading-none select-none uppercase">
          {initials}
        </span>
      </div>
    </div>
  );
}

/** Redrawn Hand-Drawn Thin Ink Transport Icons */
function HandDrawnPlaneIcon({ className = "w-6 h-6 text-[#7A1E1E]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 3 14 Q 8 13, 12 11 L 19 4 C 20 3, 22 4, 21 6 L 17 14 L 12 17 L 9 21 L 8 20 L 9 16 Z" />
      <path d="M 12 11 L 8 6 L 10 5 L 14 9" strokeWidth="1.2" />
    </svg>
  );
}

function HandDrawnTrainIcon({ className = "w-6 h-6 text-[#7A1E1E]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="5" y="4" width="14" height="14" rx="3" />
      <path d="M 5 11 H 19" strokeWidth="1.2" />
      <circle cx="8.5" cy="15" r="1.2" fill="currentColor" />
      <circle cx="15.5" cy="15" r="1.2" fill="currentColor" />
      <path d="M 7 18 L 4 21 M 17 18 L 20 21" strokeWidth="1.5" />
      <path d="M 10 2 C 9 1, 13 0, 12 4" strokeWidth="1.1" strokeDasharray="1,1" />
    </svg>
  );
}

function HandDrawnCarIcon({ className = "w-6 h-6 text-[#7A1E1E]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 3 14 C 4 10, 7 8, 10 7 H 15 C 18 7, 20 9, 21 13 L 22 15 V 17 H 2 V 15 Z" />
      <circle cx="7" cy="17" r="2" fill="#FAF6F0" />
      <circle cx="17" cy="17" r="2" fill="#FAF6F0" />
    </svg>
  );
}

function HandDrawnShuttleIcon({ className = "w-6 h-6 text-[#7A1E1E]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="12" rx="3" />
      <path d="M 3 11 H 21 M 8 5 V 11 M 13 5 V 11 M 18 5 V 11" strokeWidth="1.2" />
      <circle cx="7" cy="17" r="2" fill="#FAF6F0" />
      <circle cx="17" cy="17" r="2" fill="#FAF6F0" />
    </svg>
  );
}

function getTransportIcon(kind: string, className = "w-6 h-6 text-[#7A1E1E]") {
  switch (kind) {
    case "flight":
      return <HandDrawnPlaneIcon className={className} />;
    case "train":
      return <HandDrawnTrainIcon className={className} />;
    case "road":
      return <HandDrawnCarIcon className={className} />;
    case "shuttle":
      return <HandDrawnShuttleIcon className={className} />;
    default:
      return <HandDrawnCarIcon className={className} />;
  }
}

/**
 * Hand-Crafted Open Details Link with Hand-Sketched Arrow & Calligraphic Underline Swash
 */
function HandCraftedDetailsLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link relative inline-flex flex-col items-start cursor-pointer select-none pt-1"
    >
      <div className="inline-flex items-center gap-1.5 font-heading text-micro uppercase tracking-[0.24em] text-[#7A1E1E] group-hover/link:text-[#C89B48] font-semibold transition-colors duration-250">
        <span>Open details</span>

        {/* Hand-Sketched Arrow Icon */}
        <svg
          className="w-3.5 h-3.5 text-[#C89B48] group-hover/link:text-[#7A1E1E] transition-all duration-300 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Hand-sketched curved arrow shaft */}
          <path d="M 3.5 12.5 C 6 10, 8.5 7.5, 12.5 3.5" />
          {/* Hand-sketched arrowhead strokes */}
          <path d="M 6.5 3.5 C 9 3.3, 11 3.4, 12.5 3.5 C 12.6 5, 12.7 7, 12.5 9.5" />
        </svg>
      </div>

      {/* Hand-Drawn Calligraphic Underline Swash */}
      <svg
        className="w-full h-2 text-[#C89B48]/80 group-hover/link:text-[#7A1E1E] transition-colors duration-300 -mt-0.5 overflow-visible"
        viewBox="0 0 110 8"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 2 4 C 25 1.5, 55 6.2, 82 2.5 C 94 1, 104 4.5, 108 3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Secondary micro-whisker accent stroke at end of swash */}
        <path
          d="M 98 5.2 C 102 5.6, 106 4.2, 109 4.7"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
    </a>
  );
}

/**
 * Redesigned Travel & Stay Section — Unboxed Thin-Hairline Layout
 */
export function TravelSection({
  options,
  config,
  initials = "K & R",
}: {
  options: TravelOption[];
  config: TravelConfig;
  initials?: string;
}) {
  const travel = (options ?? []).filter((o) => o?.title && o.kind !== "stay");

  if (travel.length === 0) return null;

  return (
    <Section
      id="travel"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30 py-12 px-4 text-center overflow-hidden"
    >
      {/* SECTION EYEBROW HEADER */}
      <div className="inline-flex items-center justify-center gap-2 text-[#7A1E1E] mb-1">
        <span className="font-heading text-[0.62rem] sm:text-[0.72rem] uppercase tracking-[0.4em] text-[#7A1E1E]/85 font-semibold pl-[0.4em]">
          DESTINATION &amp; LOGISTICS
        </span>
      </div>

      {/* PRIMARY SECTION SCRIPT TITLE (h2) */}
      <h2 className="text-center font-script text-[2.5rem] sm:text-[2.9rem] text-[#7A1E1E] leading-tight select-none filter drop-shadow-[0_2px_4px_rgba(122,30,30,0.15)]">
        {config.sectionLabel || "Travel Details"}
      </h2>

      {/* SUPPORTING SUBTITLE (p) */}
      {config.supportingLine ? (
        <p className="mt-1 text-center font-body text-[0.88rem] sm:text-[0.95rem] italic text-ink/75 max-w-sm mx-auto">
          {config.supportingLine}
        </p>
      ) : null}

      <Divider className="mx-auto mt-3 h-3 w-32 text-accent-secondary mb-6" />

      {/* Hero High-Detail Thin-Ink Getaway Car Illustration */}
      <div className="my-4 w-full flex flex-col items-center gap-6 sm:gap-8">
        <WeddingCarHeartBalloonsIllustration initials={initials} />
      </div>

      {/* Transport Information Entries — Unboxed Thin-Hairline Layout */}
      {travel.length > 0 ? (
        <TravelGroup label={config.gettingThereLabel} list={travel} />
      ) : null}
    </Section>
  );
}

function TravelGroup({ label, list }: { label: string; list: TravelOption[] }) {
  return (
    <div className="mt-10 w-full max-w-md mx-auto">
      {/* Category Group Heading Divider */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B8935A]/50" />
        <p className="font-heading text-[0.72rem] sm:text-[0.78rem] uppercase tracking-[0.32em] text-[#7A1E1E] font-semibold text-center pl-[0.32em]">
          {label}
        </p>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B8935A]/50" />
      </div>

      {/* Unboxed Transport Entries List */}
      <div className="space-y-0">
        {list.map((o, idx) => (
          <div key={o.id} className="group relative">
            {/* Entry Content Row */}
            <div className="flex items-start text-left gap-4 sm:gap-5 py-5 sm:py-6 px-1 transition-all duration-300">
              {/* Hand-Drawn Thin-Ink Icon inside Delicate Gold Hairline Ring */}
              <div className="mt-0.5 size-11 sm:size-12 rounded-full border border-[#B8935A]/60 bg-[#FAF5EE] shadow-2xs flex items-center justify-center shrink-0 group-hover:border-[#7A1E1E] group-hover:scale-105 transition-all duration-300 ring-1 ring-[#7A1E1E]/15">
                {getTransportIcon(o.kind, "w-5 sm:w-6 h-5 sm:h-6 text-[#7A1E1E]")}
              </div>

              <div className="flex-1 min-w-0">
                {/* Transport Item Category Title (h3) */}
                <h3 className="font-heading text-[0.88rem] sm:text-[0.95rem] uppercase tracking-[0.24em] text-[#7A1E1E] font-bold">
                  {o.title}
                </h3>

                {/* Primary Detail Text in Body Serif */}
                <p className="mt-1.5 font-body text-label leading-relaxed text-ink/85">
                  {o.detail}
                </p>

                {/* Secondary Micro-Copy */}
                {o.priceNote ? (
                  <p className="mt-1.5 font-body text-micro italic text-[#7A1E1E]/75">
                    {o.priceNote}
                  </p>
                ) : null}

                {/* Action Row */}
                {o.link ? (
                  <div className="mt-3">
                    <HandCraftedDetailsLink href={o.link} />
                  </div>
                ) : null}
              </div>
            </div>

            {/* Fine Metallic Gold Hairline Separator Rule between entries */}
            {idx < list.length - 1 ? (
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B8935A]/45 to-transparent my-1" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

