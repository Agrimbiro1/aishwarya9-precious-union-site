import { useEffect, useState } from "react";
import { Section } from "./InvitationExperience";
import { Divider, DoveDivider } from "./Ornaments";
import type { CountdownData } from "@/data/types";
import { useGuest } from "@/lib/guest";
import dovesRibbonImg from "@/assets/doves-ribbon-countdown.png";
import dovesRibbonWebp from "@/assets/doves-ribbon-countdown.webp";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diffParts(target: number, now: number): Parts | null {
  const ms = target - now;
  if (ms <= 0) return null; // date already passed — never render negatives
  const total = Math.floor(ms / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Single Hanging Tag Frame Component.
 * Outlined hand-drawn tag shape with connector string tying to the ribbon swag curve above.
 */
function HangingTagItem({
  label,
  value,
  depthClass,
  stringClass = "h-10 sm:h-12",
  tiltClass = "",
  animClass,
  reduced,
}: {
  label: string;
  value: number | null;
  depthClass: string;
  stringClass?: string;
  tiltClass?: string;
  animClass: string;
  reduced: boolean;
}) {
  const displayVal = value === null ? "--" : String(value).padStart(2, "0");

  return (
    <div
      className={`relative flex flex-col items-center justify-start ${depthClass} ${
        reduced ? "" : animClass
      }`}
    >
      {/* Hand-drawn thread string with tied knot loop at top linking directly from ribbon swag */}
      <svg
        className={`w-3.5 ${stringClass} text-[#7A1E1E] -mb-0.5 overflow-visible select-none pointer-events-none`}
        viewBox="0 0 14 48"
        fill="none"
        aria-hidden="true"
      >
        {/* Tied Ribbon Knot Loop at Top (wraps around ribbon stroke) */}
        <path
          d="M 4 2 C 2 0, 0 4, 3 6 C 6 8, 12 4, 9 2 C 7 0, 4 2, 7 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Hand-drawn dashed ink thread line connecting down to eyelet ring */}
        <path
          d="M 7 6 C 6 16, 8 28, 7 40 C 6.8 43, 7.2 46, 7 48"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="3 2"
          strokeLinecap="round"
        />
      </svg>

      {/* Hand-Drawn Thin Ink Tag Frame (100% Transparent, No White Card Box, Organic Tilt) */}
      <div className={`relative w-[4.4rem] sm:w-[4.9rem] h-[5.2rem] sm:h-[5.6rem] flex flex-col items-center justify-center py-2 px-1 select-none ${tiltClass}`}>
        {/* Hand-drawn SVG Tag Outline & Ring Hole in Maroon Ink (#7A1E1E) */}
        <svg
          className="absolute inset-0 w-full h-full text-[#7A1E1E] pointer-events-none select-none"
          viewBox="0 0 76 90"
          fill="none"
          aria-hidden="true"
        >
          {/* Top Hole Eyelet Ring (with pulsing live tick dot for Seconds) */}
          <circle cx="38" cy="7" r="4" stroke="currentColor" strokeWidth="1.25" fill="none" />
          <circle cx="38" cy="7" r="1.8" stroke="currentColor" strokeWidth="1" fill="none" />
          {label === "Seconds" && (
            <circle cx="38" cy="7" r="1.3" fill="#7A1E1E" className="animate-pulse origin-center opacity-85" />
          )}
          
          {/* Hand-sketched Tag Outer Border (Chamfered Top Corners + Organic Thin Ink Line) */}
          <path
            d="M 28 8 L 14 20 C 10 24, 8 28, 8 34 L 8 76 C 8 82, 14 86, 22 86 L 54 86 C 62 86, 68 82, 68 76 L 68 34 C 68 28, 66 24, 62 20 L 48 8 Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* Live Numerals (Re-mounts with key={displayVal} on every tick for scale-pulse micro-animation) */}
        <span
          key={displayVal}
          className={`relative z-10 block font-numeral text-[1.85rem] sm:text-[2.05rem] font-bold leading-none text-[#7A1E1E] tracking-tight text-center mt-1.5 ${
            reduced ? "" : "animate-numeral-tick"
          }`}
          style={{ fontVariantNumeric: "oldstyle-nums tabular-nums" }}
        >
          {displayVal}
        </span>

        {/* Unit Label */}
        <span className="relative z-10 mt-1 block font-heading text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.2em] font-bold text-[#7A1E1E]/80 text-center">
          {label}
        </span>
      </div>
    </div>
  );
}

/**
 * CountdownSection — Entirely redesigned full-environmental-bleed section.
 * Features an AI-generated & vectorized hand-drawn maroon-ink doves-holding-ribbon illustration (#7A1E1E),
 * with four dynamic live countdown tags suspended from the ribbon's curve.
 * No bounded cards, borders, or corner dots — pure edge-to-edge cotton paper background bleed.
 */
export function CountdownSection({ data }: { data: CountdownData }) {
  const guest = useGuest();
  const reduced = usePrefersReducedMotion();
  const target = new Date(data.targetDateTime).getTime();
  const valid = !Number.isNaN(target);

  const [parts, setParts] = useState<Parts | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!valid) return;
    setMounted(true);
    const tick = () => setParts(diffParts(target, Date.now()));
    tick();
    const id = window.setInterval(tick, reduced ? 60_000 : 1000);
    return () => window.clearInterval(id);
  }, [target, valid, reduced]);

  const past = valid && mounted && parts === null;

  const units: [
    { label: string; value: number | null },
    { label: string; value: number | null },
    { label: string; value: number | null },
    { label: string; value: number | null }
  ] = [
    { label: "Days", value: parts ? parts.days : null },
    { label: "Hours", value: parts ? parts.hours : null },
    { label: "Minutes", value: parts ? parts.minutes : null },
    { label: "Seconds", value: parts ? parts.seconds : null },
  ];

  /* Coarse screen-reader summary */
  const srSummary = parts
    ? `${parts.days} days, ${parts.hours} hours and ${parts.minutes} minutes until the wedding.`
    : "";

  return (
    <Section
      id="countdown"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30 text-center py-12 px-4 overflow-hidden bg-background"
    >
      {/* Subtle Barely-There Warm Golden Ambient Glow Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,175,55,0.09)_0%,rgba(245,230,210,0.18)_45%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* Full Environmental Bleed Container (NO Bounded Card Box, NO Corner Dots) */}
      <div className="relative mx-auto w-full max-w-[22.5rem] text-center z-10">
        {past ? (
          <div className="py-6">
            <h2 className="font-script text-[2.2rem] sm:text-[2.5rem] leading-tight text-accent-primary">
              Thank you for celebrating with us
            </h2>
            <Divider className="mx-auto mt-4 h-3 w-32 text-accent-primary" />
            <p className="mt-4 font-body text-body italic text-ink/80">
              The vows are said — the memories stay.
            </p>
          </div>
        ) : (
          <>
            {/* Section Header: Bilateral Maroon Accents framing "THE COUNTDOWN" */}
            <div className="mb-3 inline-flex items-center justify-center gap-2.5 sm:gap-3.5 text-[#7A1E1E]">
              {/* Left Maroon Flourish Dash Accent */}
              <svg className="w-5 sm:w-7 h-2 text-[#7A1E1E]" viewBox="0 0 28 8" fill="none" aria-hidden="true">
                <path d="M 2 4 H 18 M 18 4 L 22 1 L 26 4 L 22 7 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.8" />
              </svg>

              {/* Title Header Text (Deep Maroon #7A1E1E, 0.45em tracking, 30% larger font size) */}
              <h2 className="font-heading text-[0.78rem] sm:text-[0.85rem] uppercase tracking-[0.45em] text-[#7A1E1E] font-bold select-none">
                The Countdown
              </h2>

              {/* Right Maroon Flourish Dash Accent */}
              <svg className="w-5 sm:w-7 h-2 text-[#7A1E1E] scale-x-[-1]" viewBox="0 0 28 8" fill="none" aria-hidden="true">
                <path d="M 2 4 H 18 M 18 4 L 22 1 L 26 4 L 22 7 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>

            {/* AI-GENERATED HIGH-DENSITY HAND-DRAWN DOVES & RIBBON ILLUSTRATION (#7A1E1E Maroon Ink) */}
            <div className="relative mx-auto w-full max-w-[21.5rem] select-none pointer-events-none mb-1">
              {/* Scattered Hand-Drawn Flying Feathers (Micro Flight Motion Details in Maroon Ink #7A1E1E) */}
              <svg
                className="absolute inset-0 w-full h-full text-[#7A1E1E]/80 pointer-events-none select-none overflow-visible z-10"
                viewBox="0 0 340 180"
                fill="none"
                aria-hidden="true"
              >
                {/* Feather 1 near Left Bird Wingtip */}
                <path
                  d="M 42 38 C 39 34, 45 30, 49 32 C 47 36, 44 40, 42 38 Z M 45 31 L 41 39"
                  stroke="currentColor"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
                {/* Feather 2 floating above Left Bird Tail */}
                <path
                  d="M 72 18 C 75 14, 80 16, 81 20 C 77 21, 73 20, 72 18 Z M 76 15 L 78 21"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
                {/* Feather 3 floating above Right Bird Wingtip */}
                <path
                  d="M 268 22 C 271 18, 277 20, 276 24 C 272 25, 268 24, 268 22 Z M 272 19 L 273 25"
                  stroke="currentColor"
                  strokeWidth="0.85"
                  strokeLinecap="round"
                />
                {/* Feather 4 drifting down near Right Bird Tail */}
                <path
                  d="M 296 62 C 299 58, 304 60, 303 64 C 299 65, 296 64, 296 62 Z M 300 59 L 301 65"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
              </svg>

              <picture className="w-full h-auto mix-blend-multiply">
                <source srcSet={dovesRibbonWebp} type="image/webp" />
                <img
                  src={dovesRibbonImg}
                  alt="Hand-drawn doves holding ribbon illustration"
                  className="w-full h-auto object-contain mix-blend-multiply opacity-95"
                />
              </picture>
            </div>

            {/* FOUR HANGING COUNTDOWN TAGS (Suspended directly from ribbon swag curve with tied thread loops) */}
            <div
              className="relative z-10 grid grid-cols-4 gap-1.5 sm:gap-2 px-1 -mt-20 sm:-mt-24"
              aria-hidden="true"
            >
              {/* Tag 1: Days (Outer left ribbon curve) */}
              <HangingTagItem
                label="Days"
                value={units[0].value}
                depthClass="mt-0"
                stringClass="h-10 sm:h-12"
                tiltClass="rotate-[-2.5deg]"
                animClass="animate-gentle-sway-1"
                reduced={reduced}
              />
              {/* Tag 2: Hours (Hangs lower under center bow swag) */}
              <HangingTagItem
                label="Hours"
                value={units[1].value}
                depthClass="mt-6 sm:mt-8"
                stringClass="h-14 sm:h-16"
                tiltClass="rotate-[1deg]"
                animClass="animate-gentle-sway-2"
                reduced={reduced}
              />
              {/* Tag 3: Minutes (Hangs lower under center bow swag) */}
              <HangingTagItem
                label="Minutes"
                value={units[2].value}
                depthClass="mt-6 sm:mt-8"
                stringClass="h-14 sm:h-16"
                tiltClass="rotate-[-1.5deg]"
                animClass="animate-gentle-sway-3"
                reduced={reduced}
              />
              {/* Tag 4: Seconds (Outer right ribbon curve) */}
              <HangingTagItem
                label="Seconds"
                value={units[3].value}
                depthClass="mt-0"
                stringClass="h-10 sm:h-12"
                tiltClass="rotate-[2.5deg]"
                animClass="animate-gentle-sway-4"
                reduced={reduced}
              />
            </div>

            {/* Screen Reader Announcement */}
            <p className="sr-only" aria-live="polite">
              {srSummary}
            </p>

            {!valid ? (
              <p className="mt-5 font-body text-body italic text-ink/75">
                The date will be announced very soon.
              </p>
            ) : null}

            {/* Hand-Drawn Thematic Paired-Doves & Heart Centerpiece Divider */}
            <DoveDivider className="mx-auto mt-10 sm:mt-12 h-4 w-44 text-[#7A1E1E] opacity-90 select-none" />

            {/* Supporting Script Line ("Until we say I do") — Ample Breathing Room */}
            {data.supportingLine ? (
              <p className="mt-5 sm:mt-6 font-script text-[1.75rem] sm:text-[2.05rem] text-[#7A1E1E] select-none leading-tight tracking-wide">
                {data.supportingLine}
              </p>
            ) : null}

            {/* Personalized Guest Greeting Line */}
            {guest.isPersonalized ? (
              <p className="mt-3 font-heading text-micro uppercase tracking-[0.24em] text-[#7A1E1E]/70 font-medium">
                {guest.personalize("Mark your calendar, {{guestName}}")}
              </p>
            ) : null}
          </>
        )}
      </div>
    </Section>
  );
}
