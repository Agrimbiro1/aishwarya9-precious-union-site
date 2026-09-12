import { useState } from "react";
import { Section } from "./InvitationExperience";
import type { EventsConfig, WeddingEvent } from "@/data/types";
import { useGuest } from "@/lib/guest";
import { formatEventWhen } from "@/lib/format";

import eventFlowerImg from "@/assets/event-flower.png";
import eventPortraitMehendi from "@/assets/event-portrait-mehendi.png";
import eventPortraitSangeet from "@/assets/event-portrait-sangeet.png";
import eventPortraitHaldi from "@/assets/event-portrait-haldi.png";
import eventPortraitWedding from "@/assets/event-portrait-wedding.png";
import eventPortraitReception from "@/assets/event-portrait-reception.png";

/**
 * Mini Hand-Drawn Floral Bud / Gemstone Flourish Accent at Cardinal Ring Points
 */
function CardinalFloralBud({ cx, cy, rotate = 0 }: { cx: number; cy: number; rotate?: number }) {
  return (
    <g transform={`translate(${cx}, ${cy}) rotate(${rotate})`}>
      {/* Outer Metallic Gold Bud Petal Shape */}
      <path
        d="M 0 -2.6 C -1.6 -1.1, -2.0 0.9, 0 2.6 C 2.0 0.9, 1.6 -1.1, 0 -2.6 Z"
        fill="#C89B48"
        stroke="#7A1E1E"
        strokeWidth="0.35"
      />
      {/* Inner Deep Maroon Seed Center */}
      <path
        d="M 0 -1.4 C -0.8 -0.5, -0.9 0.5, 0 1.4 C 0.9 0.5, 0.8 -0.5, 0 -1.4 Z"
        fill="#7A1E1E"
      />
      {/* Delicate Whisker Tendril Arms */}
      <path
        d="M -1.6 0 C -3.0 -1.0, -3.6 -0.1, -2.6 0.7"
        fill="none"
        stroke="#C89B48"
        strokeWidth="0.4"
        strokeLinecap="round"
      />
      <path
        d="M 1.6 0 C 3.0 -1.0, 3.6 -0.1, 2.6 0.7"
        fill="none"
        stroke="#C89B48"
        strokeWidth="0.4"
        strokeLinecap="round"
      />
      {/* Central Micro Gold Highlight */}
      <circle cx="0" cy="0" r="0.45" fill="#FFF5DF" />
    </g>
  );
}

/**
 * Reusable single-stroke elegant hairline ring frame overlay around portrait circles.
 * Features a confident solid outer maroon ring and an ultra-fine, delicate metallic gold micro-dashed inner ring.
 */
export function CircleFrameRing({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 size-full pointer-events-none select-none z-10 ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer Confident Solid Maroon Ring */}
      <circle cx="50" cy="50" r="48.5" stroke="#7A1E1E" strokeWidth="1.25" strokeOpacity="0.95" />

      {/* Inner Ultra-Fine Hairline Metallic Gold Micro-Dashed Accent Ring */}
      <circle cx="50" cy="50" r="43.8" stroke="#D4AF37" strokeWidth="0.28" strokeOpacity="0.8" strokeDasharray="1.2 1.5" />

      {/* Hand-Drawn Floral Bud / Gemstone Flourish Accents at 4 Cardinal Points */}
      <CardinalFloralBud cx={50} cy={1.5} rotate={0} />
      <CardinalFloralBud cx={98.5} cy={50} rotate={90} />
      <CardinalFloralBud cx={50} cy={98.5} rotate={180} />
      <CardinalFloralBud cx={1.5} cy={50} rotate={270} />
    </svg>
  );
}

/**
 * Single continuous unbroken Thin Golden Double-Line Ribbon Connector running between consecutive event circles.
 * Replaces the dense floral vine with an elegant gilded thread motif in muted gold (#B8935A).
 * Uses twin hairline strokes to define a delicate ribbon width.
 */
export function GoldenRibbonConnector({ isLeftToRight }: { isLeftToRight: boolean }) {
  // Path for Left-to-Right diagonal flow (Left circle -> Right circle)
  const ltrLine1 = "M 116 0 C 116 60, 284 60, 284 120";
  const ltrLine2 = "M 120 0 C 120 60, 280 60, 280 120";

  // Path for Right-to-Left diagonal flow (Right circle -> Left circle)
  const rtlLine1 = "M 284 0 C 284 60, 116 60, 116 120";
  const rtlLine2 = "M 280 0 C 280 60, 120 60, 120 120";

  const path1 = isLeftToRight ? ltrLine1 : rtlLine1;
  const path2 = isLeftToRight ? ltrLine2 : rtlLine2;

  return (
    <div className="relative w-full h-24 sm:h-32 -my-5 sm:-my-7 pointer-events-none select-none overflow-visible z-0 flex items-center justify-center">
      <svg
        className="w-full h-full text-[#B8935A]"
        viewBox="0 0 400 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Double Hairline Golden Ribbon Parallel Strokes */}
        <path
          d={path1}
          stroke="#B8935A"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeOpacity="0.88"
        />
        <path
          d={path2}
          stroke="#B8935A"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeOpacity="0.88"
        />

        {/* Minimal Delicate Gold Ribbon Knot Accent at Midpoint */}
        <g transform="translate(200, 60)">
          {/* Outer Gold Knot Loop */}
          <circle cx="0" cy="0" r="3.2" fill="#FAF5EE" stroke="#B8935A" strokeWidth="1.1" />
          {/* Inner Deep Maroon Core Dot */}
          <circle cx="0" cy="0" r="1.3" fill="#7A1E1E" />
          {/* Micro Gold Star Diamond Accent Points */}
          <path d="M 0 -5.5 L 1 -3.2 L 0 -1 L -1 -3.2 Z" fill="#B8935A" opacity="0.85" />
          <path d="M 0 1 L 1 3.2 L 0 5.5 L -1 3.2 Z" fill="#B8935A" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Location Pin Link taking user to Google Maps for the venue.
 * Features a dual metallic gold hairline border with maroon inner accent matching the invitation craft system.
 */
export function LocationMapLink({
  mapUrl,
  venueName,
}: {
  mapUrl: string | null;
  venueName: string;
}) {
  if (!mapUrl) return null;
  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#C89B48]/75 bg-[#FAF5EE] px-3.5 py-1 text-[0.62rem] sm:text-[0.68rem] font-heading font-semibold uppercase tracking-[0.2em] text-[#7A1E1E] shadow-[0_1px_4px_rgba(200,155,72,0.18)] hover:border-[#7A1E1E] hover:bg-[#7A1E1E] hover:text-[#FFF5DF] hover:shadow-[0_2px_8px_rgba(122,30,30,0.25)] transition-all duration-250 group/btn ring-1 ring-[#7A1E1E]/20"
      aria-label={`View ${venueName} on Google Maps`}
    >
      {/* Location Pin Icon in Foil Gold / Maroon */}
      <svg
        className="size-3 text-[#C89B48] group-hover/btn:text-[#E6C687] transition-colors duration-200"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="currentColor" fillOpacity="0.18" />
        <circle cx="12" cy="10" r="2.8" fill="#7A1E1E" className="group-hover/btn:fill-[#FFF5DF] transition-colors" />
      </svg>
      <span>View Map</span>
      {/* Micro Metallic Gold Accent Diamond */}
      <span className="text-[#C89B48] text-[0.55rem] group-hover/btn:text-[#E6C687] transition-colors ml-0.5" aria-hidden="true">
        ✦
      </span>
    </a>
  );
}

/**
 * Helper to map event IDs / index to exact cropped couple portrait asset
 */
function getEventPortrait(id: string, index: number): string {
  const cleanId = id.toLowerCase();
  if (cleanId.includes("mehendi") || cleanId.includes("mehandi")) return eventPortraitMehendi;
  if (cleanId.includes("sangeet")) return eventPortraitSangeet;
  if (cleanId.includes("haldi")) return eventPortraitHaldi;
  if (cleanId.includes("wedding")) return eventPortraitWedding;
  if (cleanId.includes("reception")) return eventPortraitReception;

  const portraits = [
    eventPortraitMehendi,
    eventPortraitSangeet,
    eventPortraitHaldi,
    eventPortraitWedding,
    eventPortraitReception,
  ];
  return portraits[index % portraits.length] ?? eventPortraitMehendi;
}

/**
 * Redesigned Events Section with alternating circular couple portraits & thin golden double-line ribbon connector
 */
export function EventsSection({
  events,
  config,
}: {
  events: WeddingEvent[];
  config: EventsConfig;
}) {
  const guest = useGuest();
  const [expandedSection, setExpandedSection] = useState(false);

  const invited = guest.invitedEvents;
  const scoped = events
    .map((e) => ({ event: e, invited: !invited || invited.includes(e.id) }))
    .filter((row) => row.invited || config.uninvitedEventDisplay === "special-invitation");

  const collapsible = scoped.length > config.collapseAfter;
  const visible = collapsible && !expandedSection ? scoped.slice(0, config.collapseAfter) : scoped;

  return (
    <Section
      id="events"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30 text-center py-12 px-4 overflow-hidden bg-[#FAF5EE]"
    >
      {/* Soft Warm Radial Glow Layer System behind Timeline */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        {/* Top Warm Gold Radial Light Pool behind Header */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[34rem] sm:w-[48rem] h-[28rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F6E9D7]/75 via-[#FAF2E6]/40 to-transparent blur-3xl" />

        {/* Center Flowing Spine Ambient Warm Rose & Muted Gold Glow behind Event Items */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[26rem] sm:w-[38rem] h-[55%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F2E1D0]/60 via-[#F8EEE3]/30 to-transparent blur-3xl" />

        {/* Bottom Warm Sunset Glow Pool */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[32rem] sm:w-[44rem] h-[24rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EEDAC9]/55 via-[#FAF4ED]/20 to-transparent blur-3xl" />
      </div>

      {/* Section Title Header framing in maroon & foil gold */}
      <div className="relative z-10 mb-8 flex flex-col items-center justify-center text-center">
        {/* Eyebrow Label SCHEDULE with Delicate Side Diamond Flourishes & Wide Tracking */}
        <div className="inline-flex items-center justify-center gap-3 text-[#7A1E1E] mb-1.5">
          <svg className="w-5 sm:w-7 h-2 text-[#C89B48]" viewBox="0 0 32 8" fill="none" aria-hidden="true">
            <path d="M 2 4 H 20 M 20 4 L 24 1 L 28 4 L 24 7 Z" fill="#7A1E1E" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <span className="font-heading text-[0.625rem] sm:text-[0.7rem] uppercase tracking-[0.48em] text-[#7A1E1E]/85 font-semibold pl-[0.48em]">
            Schedule
          </span>
          <svg className="w-5 sm:w-7 h-2 text-[#C89B48] scale-x-[-1]" viewBox="0 0 32 8" fill="none" aria-hidden="true">
            <path d="M 2 4 H 20 M 20 4 L 24 1 L 28 4 L 24 7 Z" fill="#7A1E1E" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Section Script Title */}
        <h2 className="font-script text-[2.2rem] sm:text-[2.6rem] text-[#7A1E1E] leading-tight select-none filter drop-shadow-[0_2px_6px_rgba(122,30,30,0.18)] [text-shadow:_0_1px_4px_rgba(122,30,30,0.15)]">
          {config.sectionLabel}
        </h2>

        {/* Delicate Metallic Gold Botanical Flourish Motif Framing Section Title */}
        <div className="flex items-center justify-center mt-1.5 text-[#C89B48]/85">
          <svg className="w-32 sm:w-40 h-3" viewBox="0 0 120 12" fill="none" aria-hidden="true">
            {/* Left Stem & Leaf Swirl */}
            <path d="M 10 6 C 25 2, 40 10, 55 6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
            <path d="M 22 4 C 20 1, 16 2, 18 5" fill="currentColor" opacity="0.85" />
            <path d="M 38 7 C 40 10, 44 9, 42 6" fill="currentColor" opacity="0.85" />

            {/* Center Gold Diamond / Maroon Core Motif */}
            <path d="M 60 1 L 64 6 L 60 11 L 56 6 Z" fill="currentColor" />
            <circle cx="60" cy="6" r="1.2" fill="#7A1E1E" />

            {/* Right Stem & Leaf Swirl */}
            <path d="M 110 6 C 95 2, 80 10, 65 6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
            <path d="M 98 4 C 100 1, 104 2, 102 5" fill="currentColor" opacity="0.85" />
            <path d="M 82 7 C 80 10, 76 9, 78 6" fill="currentColor" opacity="0.85" />
          </svg>
        </div>
      </div>

      {scoped.length === 0 ? (
        <p className="mt-6 text-center font-body text-body italic text-ink/75">
          The schedule is being finalised — details will follow soon.
        </p>
      ) : (
        <div className="relative z-10 mx-auto w-full max-w-[34rem] px-2 sm:px-4">
          {visible.map(({ event, invited: isInvited }, idx) => {
            const when = formatEventWhen(event.dateTime);
            const portraitSrc = getEventPortrait(event.id, idx);
            const isLeft = idx % 2 === 0;

            return (
              <div key={event.id} className="relative">
                {/* Event Card Row */}
                <div
                  className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  } ${isInvited ? "" : "opacity-65"}`}
                >
                  {/* Circular Couple Portrait Box */}
                  <div className="relative shrink-0 group">
                    {/* Circle Frame Container */}
                    <div className="relative size-44 sm:size-52 rounded-full p-1.5 shadow-xs transition-transform duration-300 group-hover:scale-[1.02]">
                      <CircleFrameRing />
                      <div className="size-full rounded-full overflow-hidden relative bg-[#FAF5EE]">
                        <img
                          src={portraitSrc}
                          alt={`${event.name} illustration`}
                          className="size-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Event Details Text Block */}
                  <div className={`flex flex-col items-center ${isLeft ? "sm:items-start sm:text-left" : "sm:items-end sm:text-right"} text-center max-w-[15rem] sm:max-w-[16rem]`}>
                    {/* Event Script Title with Warm Maroon-Tinted Lifted Depth Glow */}
                    <h3 className="font-script text-[1.6rem] sm:text-[1.9rem] text-[#7A1E1E] leading-none mb-1.5 filter drop-shadow-[0_2px_4px_rgba(122,30,30,0.18)] [text-shadow:_0_1px_3px_rgba(122,30,30,0.14),_0_2px_8px_rgba(200,155,72,0.12)]">
                      {event.name}
                    </h3>
                    <p className="font-body text-label text-ink/90 font-semibold tracking-wide">
                      {when || "Time to be announced"}
                    </p>
                    <p className="mt-1 font-body text-label font-bold text-[#7A1E1E] leading-snug">
                      {event.venueName}
                    </p>

                    {event.note ? (
                      <p className="mt-1.5 font-body text-micro italic text-ink/75 leading-relaxed">
                        {event.note}
                      </p>
                    ) : null}

                    {!isInvited ? (
                      <p className="mt-2 inline-block rounded-full border border-accent-secondary/50 px-3 py-1 font-heading text-micro uppercase tracking-[0.18em] text-ink/60">
                        {config.specialInvitationLabel}
                      </p>
                    ) : null}

                    {/* Google Maps Location Pin Button */}
                    <LocationMapLink mapUrl={event.mapUrl ?? null} venueName={event.venueName} />
                  </div>
                </div>

                {/* Golden Ribbon Connector trailing down to the next event */}
                {idx < visible.length - 1 ? (
                  <GoldenRibbonConnector isLeftToRight={isLeft} />
                ) : null}
              </div>
            );
          })}
        </div>
      )}

      {/* Collapse/Expand Full Schedule Toggle */}
      {collapsible ? (
        <button
          type="button"
          onClick={() => setExpandedSection((v) => !v)}
          className="relative z-10 mx-auto mt-10 rounded-full border border-[#7A1E1E]/60 bg-surface/90 px-6 py-2.5 font-heading text-micro uppercase tracking-[0.24em] text-[#7A1E1E] hover:bg-[#7A1E1E] hover:text-white transition-all shadow-xs"
        >
          {expandedSection ? "Show less" : "See full schedule"}
        </button>
      ) : null}
    </Section>
  );
}
