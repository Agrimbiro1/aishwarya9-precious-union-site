import { Section } from "./InvitationExperience";
import { Divider, GoldAmpersandFlourishSVG, SectionClosingFlourishSVG } from "./Ornaments";
import type { CoupleData } from "@/data/types";
import { formatLongDate } from "@/lib/format";
import { useGuest } from "@/lib/guest";
import {
  GoldenHourHaloSVG,
  CoupleEngravingGroundSVG,
  FlowerGateForegroundOcclusionSVG,
  IllustratedPetSVG,
  HandDrawnWobblyHeartSVG,
  HandDrawnOliveBranchSVG,
  HandDrawnDoveInFlightSVG,
  HandDrawnSprigSVG,
} from "./CoupleArtwork";
import flowerGateImg from "@/assets/flower-gate.png";
import flowerGateWebp from "@/assets/flower-gate.webp";
import coupleCutoutImg from "@/assets/couple-cutout.png";
import coupleCutoutWebp from "@/assets/couple-cutout.webp";

/**
 * CoupleSection — Full-bleed edge-to-edge architectural scene layout.
 *
 * Architecture (Full-Bleed, No Bounded Card):
 * 1. Background: Full-bleed cotton-paper texture (bg-background), edge-to-edge.
 * 2. Hand-Drawn Thin Olive Ink Doodles (z-20):
 *    - Top-left: HandDrawnDoveInFlightSVG (3-4 stroke dove silhouette)
 *    - Top-right: HandDrawnWobblyHeartSVG (single-stroke wobbly heart outline)
 *    - Left side gap: HandDrawnOliveBranchSVG (botanical sprig echoing arch vines)
 *    - Right side gap: HandDrawnSprigSVG (delicate leaf sprig)
 * 3. Scene Composition (4 Layer Depth Stack):
 *    - Layer 0 (z-5): GoldenHourHaloSVG (Radiant golden-hour sunset backlighting halo inside arch opening).
 *    - Layer 1 (z-10): flower-gate.png (Exact provided floral gate asset with lantern, leaves, butterflies & grassy base).
 *    - Layer 2 (z-20): Isolated Couple Cutout Image (couple-cutout.png) with soft gradient mask.
 *    - Layer 3 (z-25): CoupleEngravingGroundSVG (Engraving line-art hatching shadow, delicate grass, petals, pebbles & ground line).
 *    - Layer 4 (z-30): FlowerGateForegroundOcclusionSVG (Foreground vine tendrils & lantern layering OVER couple outer edges).
 * 4. Typography Stack Below (z-40):
 *    - Editable Cursive Quote Line ("two hearts, one journey").
 *    - Couple Names (font-script display font with Gold Ampersand Flourish).
 *    - Gold Hairline Divider.
 *    - Wedding Date & Venue (tracked serif caps).
 *    - Tagline (body serif italic).
 */
export function CoupleSection({ data }: { data: CoupleData }) {
  const { personalize, isPersonalized } = useGuest();

  // Couple names formatting
  const names = data.coupleNames.filter(Boolean);
  const title = names.join(" & ");
  const isLong = title.length > 20;

  // Guest greeting directly underneath "You Are Lovingly Invited"
  const personalizedGreeting = personalize("A special invite for {{guestName}}");

  // Date & venue/tagline lines
  const dateLine = data.eventDateShort || formatLongDate(null);
  const venueLine = data.venueLabel;
  const dateAndVenueLine = dateLine && venueLine
    ? `${dateLine} — ${venueLine}`
    : dateLine || venueLine;
  const pets = (data.pets ?? []).filter((p) => p?.name);
  const showPetIllustration = Boolean(data.showPetIllustration && pets.length > 0);
  const portraitSrc = data.portraitImageUrl || coupleCutoutImg;

  return (
    <Section
      id="couple"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30 text-center py-12 px-4 overflow-hidden bg-background"
    >
      {/* 1. TOP-LEFT CORNER DOODLE: Small hand-sketched dove silhouette in flight */}
      <div className="pointer-events-none absolute top-4 left-4 sm:left-8 md:left-12 lg:left-16 z-20 opacity-80 select-none">
        <HandDrawnDoveInFlightSVG className="w-8 sm:w-10 h-auto text-[#4E5E35]" />
      </div>

      {/* 2. TOP-RIGHT CORNER DOODLE: Small wobbly single-stroke heart outline */}
      <div className="pointer-events-none absolute top-4 right-4 sm:right-8 md:right-12 lg:right-16 z-20 opacity-80 select-none">
        <HandDrawnWobblyHeartSVG className="w-6 sm:w-7 h-auto text-[#4E5E35]" />
      </div>

      {/* 3. LEFT SIDE GAP DOODLE: Small botanical olive branch sprig */}
      <div className="pointer-events-none absolute top-[36%] left-2 sm:left-6 md:left-10 lg:left-16 z-20 opacity-75 select-none -rotate-12">
        <HandDrawnOliveBranchSVG className="w-7 sm:w-9 h-auto text-[#4E5E35]" />
      </div>

      {/* 4. RIGHT SIDE GAP DOODLE: Small botanical olive sprig */}
      <div className="pointer-events-none absolute top-[44%] right-2 sm:right-6 md:right-10 lg:right-16 z-20 opacity-75 select-none rotate-12">
        <HandDrawnSprigSVG className="w-6 sm:w-8 h-auto text-[#4E5E35]" />
      </div>

      {/* Section Eyebrow Header: Bilateral Metallic Gold Accents framing "You Are Lovingly Invited" */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 text-accent-gold">
          {/* Left Delicate Gold Flourish Dash */}
          <svg className="w-5 sm:w-7 h-2 text-accent-gold/85" viewBox="0 0 28 8" fill="none" aria-hidden="true">
            <path d="M 2 4 H 18 M 18 4 L 22 1 L 26 4 L 22 7 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.8" />
          </svg>

          {/* Eyebrow Label Text (Muted Dusty-Rose Gold-Tinted Maroon with 0.42em Tracking) */}
          <p className="font-heading text-[0.58rem] sm:text-[0.63rem] uppercase tracking-[0.42em] text-[#8C5E58] font-bold select-none">
            You Are Lovingly Invited
          </p>

          {/* Right Delicate Gold Flourish Dash */}
          <svg className="w-5 sm:w-7 h-2 text-accent-gold/85 scale-x-[-1]" viewBox="0 0 28 8" fill="none" aria-hidden="true">
            <path d="M 2 4 H 18 M 18 4 L 22 1 L 26 4 L 22 7 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Personalized Guest Greeting Line Directly Underneath */}
        {isPersonalized && personalizedGreeting ? (
          <p className="mt-2 font-body text-body italic leading-snug text-ink/80 font-medium max-w-xs mx-auto">
            {personalizedGreeting}
          </p>
        ) : null}
      </div>

      {/* Main Architectural Scene Container (Full-bleed edge-to-edge mandap gate composition) */}
      <div className="relative mx-auto w-full max-w-[22.5rem] aspect-[4/5.2] flex items-center justify-center">

        {/* LAYER 0 (z-5): Golden-Hour Sunset Radial Light Halo (Backlighting inside arch) */}
        <GoldenHourHaloSVG className="pointer-events-none absolute top-[10%] left-1/2 -translate-x-1/2 w-[92%] h-auto z-5 opacity-90" />

        {/* LAYER 1 (z-10): Exact Provided Floral Gate Asset Image (flower-gate.png) */}
        <picture className="pointer-events-none absolute inset-0 size-full z-10 mix-blend-multiply">
          <source srcSet={flowerGateWebp} type="image/webp" />
          <img
            src={flowerGateImg}
            alt="Floral Gate Arch"
            className="size-full object-contain mix-blend-multiply"
          />
        </picture>

        {/* Isolated Couple Cutout Image with ultra-smooth bottom gradient dissolve */}
        <picture
          className="absolute left-1/2 top-[31%] -translate-x-1/2 w-[70%] h-auto max-h-[66%] z-20 transition-transform duration-500 hover:scale-[1.02] mix-blend-multiply"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 72%, rgba(0, 0, 0, 0.6) 84%, transparent 97%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 72%, rgba(0, 0, 0, 0.6) 84%, transparent 97%)",
          }}
        >
          {portraitSrc === coupleCutoutImg ? (
            <source srcSet={coupleCutoutWebp} type="image/webp" />
          ) : null}
          <img
            src={portraitSrc}
            alt={title ? `Portrait of ${title}` : "The couple"}
            loading="eager"
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </picture>

        {/* LAYER 3 (z-25): Engraving Line-Art Ground Treatment (Hatching shadow, grass, petals, pebbles & ground line) */}
        <CoupleEngravingGroundSVG className="pointer-events-none absolute bottom-[9.5%] left-1/2 -translate-x-1/2 w-[92%] h-auto z-25 opacity-95" />

        {/* Optional Pet Illustration (only when showPetIllustration flag is explicitly enabled in couple data) */}
        {showPetIllustration && !data.portraitImageUrl && (
          <div className="absolute bottom-[13%] left-[14%] w-[32%] max-w-[4.8rem] drop-shadow-md z-25">
            <IllustratedPetSVG className="w-full h-auto" />
          </div>
        )}

        {/* LAYER 3 (z-30): Foreground Occlusion Layer (Vine tendrils & lantern layering OVER couple edges) */}
        <FlowerGateForegroundOcclusionSVG className="pointer-events-none absolute inset-0 size-full z-30" />
      </div>

      {/* TYPOGRAPHY STACK BELOW ARCH SCENE (Generous Vertical Breathing Room) */}
      <div className="relative z-40 mt-7 sm:mt-9 px-4 text-center">
        {/* Intimate Cursive Quote Line (Whispered in light cursive script as an editable text layer) */}
        {data.quoteLine !== null && (
          <p className="font-script text-[1.12rem] sm:text-[1.28rem] text-[#4E5E35]/90 italic font-normal tracking-wide leading-snug mb-3.5 select-none">
            {data.quoteLine || "two hearts, one journey"}
          </p>
        )}

        {/* Couple Names in Display Script Font with Calligraphy Metallic Gold Ampersand & Swash Flourish */}
        <h2
          className={`font-script leading-tight text-accent-primary flex items-center justify-center flex-wrap gap-x-2.5 gap-y-0.5 ${isLong ? "text-[2.2rem]" : "text-[2.75rem] sm:text-[3rem]"
            }`}
        >
          {names.length >= 2 ? (
            <>
              <span>{names[0]}</span>
              <span className="relative inline-flex items-center justify-center px-2.5 py-0.5 my-0.5">
                <GoldAmpersandFlourishSVG className="pointer-events-none absolute inset-0 w-full h-full text-accent-gold scale-[1.35] opacity-90" />
                <span className="relative z-10 font-script italic text-accent-gold text-[0.95em] leading-none select-none font-normal">
                  &amp;
                </span>
              </span>
              <span>{names[1]}</span>
            </>
          ) : (
            title || "Kavya & Rohan"
          )}
        </h2>

        {/* Foil-Stamped Metallic Gold Hairline Divider */}
        <Divider className="mx-auto my-3.5 h-3 w-32 text-accent-gold" />

        {/* Formal Detail Card Accent: Fine Gold Hairline Rule above Date */}
        <div className="mx-auto my-2.5 h-[1px] w-14 bg-gradient-to-r from-transparent via-accent-gold/70 to-transparent" />

        {/* Structured Date & Venue Typography Stack */}
        <div className="space-y-1.5">
          {/* 1. Event Date in Spaced Bold Tracked Caps */}
          {dateLine ? (
            <p className="font-heading text-label uppercase tracking-[0.32em] text-ink/90 font-bold">
              {dateLine}
            </p>
          ) : null}

          {/* Decorative Gold Diamond Dot Separator */}
          {dateLine && venueLine ? (
            <div className="flex items-center justify-center gap-2 my-1 text-accent-gold/80" aria-hidden="true">
              <span className="h-[1px] w-5 bg-accent-gold/35" />
              <svg className="w-1.5 h-1.5 text-accent-gold" viewBox="0 0 8 8" fill="currentColor">
                <polygon points="4,0 8,4 4,8 0,4" />
              </svg>
              <span className="h-[1px] w-5 bg-accent-gold/35" />
            </div>
          ) : null}

          {/* 2. Venue Label in Subtle Italic Medium-Weight */}
          {venueLine ? (
            <p className="font-body text-[0.88rem] sm:text-[0.93rem] italic font-medium text-ink/75 tracking-wide">
              {venueLine}
            </p>
          ) : null}
        </div>

        {/* Personal Story Micro-Copy — Pure Italic Serif "Personal Whisper" (No Rectangular Box/Border) */}
        {data.tagline ? (
          <div className="relative mx-auto mt-5 max-w-[17.5rem] sm:max-w-[19.5rem] text-center">
            {/* Top Fine Gold Hairline Rule */}
            <div className="mx-auto mb-1.5 h-[1px] w-10 bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" aria-hidden="true" />

            <p className="font-body text-[0.76rem] sm:text-[0.80rem] italic leading-relaxed text-ink/75 tracking-[0.06em] font-normal">
              <span className="font-script text-accent-gold/85 text-base leading-none mr-1 inline-block select-none">“</span>
              {data.tagline}
              <span className="font-script text-accent-gold/85 text-base leading-none ml-1 inline-block select-none">”</span>
            </p>

            {/* Bottom Fine Gold Hairline Rule */}
            <div className="mx-auto mt-1.5 h-[1px] w-10 bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" aria-hidden="true" />
          </div>
        ) : null}

        {/* Pet Mention Badge (only if couple has pets enabled) */}
        {showPetIllustration ? (
          <p className="mt-3 font-heading text-micro uppercase tracking-[0.24em] text-accent-primary/70">
            with {pets.map((p) => p.name).join(" & ")} ({pets.map((p) => p.type).join(", ")})
          </p>
        ) : null}

        {/* Section Closing Botanical Flourish (Symmetrical Twin Branch Pair with Gold Diamond) */}
        <SectionClosingFlourishSVG className="mx-auto mt-6 sm:mt-7 h-5 sm:h-6 w-36 sm:w-40 opacity-90 select-none" />
      </div>
    </Section>
  );
}
