import { Divider, DovesRibbonHeader, FountainUrn, IvyColumn } from "./Ornaments";
import type { PreviewData } from "@/data/types";
import { formatLongDate } from "@/lib/format";
import { useGuest } from "@/lib/guest";

/**
 * Hand-illustrated invitation preview card revealed behind the parting curtains (Rifle Paper-style).
 * Framed with dense, bold, hand-drawn vector SVG ornaments: top doves & ribbon banner, flanking ivy columns,
 * and a bottom fountain/urn motif in full-strength maroon/cream palette.
 * Content stack order: Personalization line first → Eyebrow → Couple Names → Tagline → Date & Venue line → Fountain → CTA button.
 */
export function InvitationPreviewCard({
  data,
  visible,
  leaving,
  onOpen,
}: {
  data: PreviewData;
  visible: boolean;
  leaving: boolean;
  onOpen: () => void;
}) {
  const guest = useGuest();
  const names = data.coupleNames.filter(Boolean);
  const title = names.join(" & ");
  const isLong = title.length > 20;
  const dateLine = data.dateLabel || formatLongDate(null);
  const dateAndVenue = [dateLine, data.venueLabel].filter(Boolean).join(" — ");

  return (
    <div
      className="pointer-events-none absolute inset-0 z-35 flex items-center justify-center p-4 text-center w-full h-full"
      style={{
        opacity: leaving ? 0 : visible ? 1 : 0,
        transform: leaving ? "translateY(-18px) scale(0.94)" : visible ? "translateY(0)" : "scale(0.94)",
        transition: "opacity 1000ms ease-out, transform 1000ms ease-out",
      }}
    >
      <div
        className={`pointer-events-auto relative mx-auto w-full max-w-[22rem] rounded-[2.25rem] border-[1.5px] border-accent-primary/70 bg-surface/98 px-8 py-7 text-center shadow-frame overflow-hidden ${
          leaving ? "" : ""
        }`}
      >
        {/* Double Inset Hairline Frame 1: Prominent 1.5px Foil-Stamped Metallic Gold (#C89B48) */}
        <div className="pointer-events-none absolute inset-2.5 rounded-[1.75rem] border-[1.5px] border-accent-gold shadow-[0_0_6px_rgba(200,155,72,0.3)]" />
        {/* Double Inset Hairline Frame 2: Crisp Fine Maroon Accent Line */}
        <div className="pointer-events-none absolute inset-3.5 rounded-[1.5rem] border border-accent-primary/35" />

        {/* Flanking Bold Ivy/Floral Columns spanning full card height (Symmetric left-0 and right-0 offsets) */}
        <IvyColumn className="pointer-events-none absolute left-0 top-6 bottom-6 h-[calc(100%-3rem)] w-14 text-accent-primary select-none" />
        <IvyColumn flip className="pointer-events-none absolute right-0 top-6 bottom-6 h-[calc(100%-3rem)] w-14 text-accent-primary select-none" />

        <div className="relative z-10 flex w-full flex-col items-center justify-center text-center px-1">
          {/* Top Doves & Ribbon Banner Motif */}
          <DovesRibbonHeader className="mx-auto h-20 w-full max-w-[18.5rem] text-accent-primary" />

          {/* 1. Guest Personalization Line FIRST */}
          {guest.isPersonalized ? (
            <p className="mt-2 w-full text-center font-heading text-micro uppercase tracking-[0.26em] text-accent-primary font-bold">
              {guest.personalize(data.guestLineTemplate)}
            </p>
          ) : null}

          {/* 2. Eyebrow Label (Generous Ribbon-to-Eyebrow breathing room) */}
          <p className="mt-3.5 w-full text-center font-heading text-[0.62rem] uppercase tracking-[0.36em] text-ink/70 font-semibold">
            {data.eyebrowLabel}
          </p>

          {/* 3. Couple Names in Connected Script Display Font with Metallic Gold Calligraphy Ampersand */}
          <h1
            className={`mt-2.5 w-full text-center font-script leading-[0.92] text-accent-primary ${
              isLong ? "text-[1.85rem]" : "text-[2.35rem]"
            }`}
          >
            {names[0]}
            <span className="inline-flex items-center justify-center mx-2.5 text-accent-gold align-middle">
              <span className="font-script text-[1.3em] italic text-accent-gold leading-none select-none font-normal">
                &amp;
              </span>
            </span>
            {names[1]}
          </h1>

          {/* Fine Metallic Gold Divider Rule */}
          <Divider className="mx-auto mt-3 h-3 w-28 text-accent-gold" />

          {/* 4. Tagline / Body Copy */}
          {data.tagline ? (
            <p className="mt-3 mx-auto max-w-[15rem] text-center font-body text-label italic leading-relaxed text-ink/85 px-1">
              {data.tagline}
            </p>
          ) : null}

          {/* 5. Date AND Venue together as one line */}
          {dateAndVenue ? (
            <p className="mt-3.5 w-full text-center font-heading text-label uppercase tracking-[0.2em] text-ink/90 font-semibold">
              {dateAndVenue}
            </p>
          ) : null}

          {/* Horizontal Accent Divider (Unified Foil-Stamped Gold Divider) */}
          <Divider className="mx-auto my-3.5 h-3 w-28 text-accent-gold" />

          {/* 6. Bottom Ornate Fountain / Urn Centerpiece Motif (Ample breathing room & craft detail) */}
          <FountainUrn className="mx-auto mt-4 mb-4.5 h-18 sm:h-20 w-36 sm:w-40 text-accent-primary" />

          {/* 7. Open Invitation CTA Button with Top-to-Bottom Gradient, Inner Shadow, Card-Matching Corners & Unified 1.5px Gold Border */}
          <button
            type="button"
            onClick={onOpen}
            className="mx-auto w-full min-h-12 rounded-xl bg-gradient-to-b from-[#882222] via-[#7A1E1E] to-[#5D1616] border-[1.5px] border-accent-gold px-6 py-3.5 font-heading text-[0.78rem] uppercase tracking-[0.32em] text-surface font-medium shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.25),0_0_8px_rgba(200,155,72,0.25),0_6px_20px_rgba(92,21,21,0.35)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_0_16px_rgba(200,155,72,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
          >
            {data.ctaLabel}
          </button>

          {/* Micro-copy in lighter maroon tint (#A8746E) */}
          <p className="mt-3 w-full text-center font-heading text-micro uppercase tracking-[0.22em] text-[#A8746E] font-medium">
            {data.ctaSubtext}
          </p>
        </div>
      </div>
    </div>
  );
}
