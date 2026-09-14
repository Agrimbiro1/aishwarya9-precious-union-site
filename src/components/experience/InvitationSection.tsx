import { Section } from "./InvitationExperience";
import { Divider, DovesRibbonHeader, FountainUrn, IvyColumn } from "./Ornaments";
import type { InvitationData } from "@/data/types";
import { useGuest } from "@/lib/guest";
import { formatNumericDate } from "@/lib/format";

/**
 * Hand-illustrated Architectural & Botanical Invitation Section.
 * Framed with confident maroon ink line-work illustrations & foil-stamped gold accent details:
 * - Top arched ribbon bow with detailed flying doves
 * - Flanking classical fluted columns wrapped in dense botanical floral linework
 * - Fine gold metallic divider rule & wax-seal accent details (#B8935A)
 * - Elaborate 3-tier fountain & urn centerpiece motif
 */
export function InvitationSection({ data }: { data: InvitationData }) {
  const guest = useGuest();
  const greeting = guest.personalize(data.guestGreetingTemplate);
  const names = data.coupleNames.filter(Boolean);
  const dateLabel = formatNumericDate(data.weddingDate);
  const isLongName = names.some((n) => n.length > 12);

  return (
    <Section id="invitation" className="relative flex min-h-full flex-col items-center justify-center overflow-hidden p-3 sm:p-5 text-center ">
      {/* Outer Engraved Card Shell with Double Inset Border Frame */}
      <div className="relative mx-auto w-full max-w-[21.5rem] sm:max-w-[23.5rem] rounded-[2.25rem] border-[1.5px] border-accent-primary/75 bg-surface/90 px-6 sm:px-8 py-8 sm:py-10 text-center shadow-frame overflow-hidden">
        {/* Double Inset Hairline Frame 1: Prominent 1.5px Foil-Stamped Metallic Gold (#C89B48) */}
        <div className="pointer-events-none absolute inset-2.5 rounded-[1.75rem] border-[1.5px] border-accent-gold shadow-[0_0_6px_rgba(200,155,72,0.3)]" />
        {/* Double Inset Hairline Frame 2: Crisp Fine Maroon Accent Line */}
        <div className="pointer-events-none absolute inset-3.5 rounded-[1.5rem] border border-accent-primary/35" />

        {/* Prominent Architectural Classical Columns with Dense Floral Density framing the card inner box */}
        <IvyColumn className="pointer-events-none absolute left-0 top-5 bottom-5 h-[calc(100%-2.5rem)] w-14 sm:w-16 text-accent-primary select-none" />
        <IvyColumn flip className="pointer-events-none absolute right-0 top-5 bottom-5 h-[calc(100%-2.5rem)] w-14 sm:w-16 text-accent-primary select-none" />

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-1">
          {/* 1. Grand Arching Ribbon Bow & Feathered Doves Header */}
          <DovesRibbonHeader className="mx-auto h-22 sm:h-26 w-full text-accent-primary" />

          {/* 2. Personalization / Greeting Line */}
          {greeting ? (
            <p className="mt-1.5 w-full text-center font-body text-body italic text-ink/85">{greeting}</p>
          ) : null}

          {/* 3. Eyebrow Label (Generous Ribbon-to-Eyebrow breathing room) */}
          <p className="mt-3.5 sm:mt-4 w-full text-center font-heading text-[0.62rem] sm:text-[0.66rem] uppercase tracking-[0.36em] sm:tracking-[0.38em] pl-[0.36em] sm:pl-[0.38em] text-ink/70 font-semibold">
            {data.eyebrowLabel}
          </p>

          {/* 4. Couple Names in Connected Script Display Font with Metallic Gold Calligraphy Ampersand */}
          <h1
            className={`mt-3 w-full text-center font-script leading-[0.85] sm:leading-[0.88] text-accent-primary ${isLongName ? "text-[2.1rem]" : "text-[2.6rem] sm:text-[2.9rem]"
              }`}
          >
            {names.map((name, i) => (
              <span key={name} className="block break-words">
                {name}
                {i < names.length - 1 ? (
                  <span className="flex items-center justify-center my-1 text-accent-gold">
                    <span className="font-script text-[1.3em] sm:text-[1.4em] italic text-accent-gold leading-none select-none font-normal">
                      &amp;
                    </span>
                  </span>
                ) : null}
              </span>
            ))}
          </h1>

          {/* Fine Foil-Stamped Metallic Gold Divider Rule */}
          <Divider className="mx-auto mt-3 h-3 w-28 text-accent-gold" />

          {/* 5. Date Label */}
          {dateLabel ? (
            <p className="mt-3.5 w-full text-center font-heading text-label uppercase tracking-[0.28em] pl-[0.28em] text-ink/90 font-bold">
              {dateLabel}
            </p>
          ) : null}

          {/* Horizontal Accent Divider (Unified Foil-Stamped Gold Divider) */}
          <Divider className="mx-auto my-4 sm:my-4.5 h-3 w-28 text-accent-gold" />

          {/* 6. Formal Body Copy (Controlled max-width for an elegant, centered block) */}
          <p className="mt-1 mx-auto max-w-[15.5rem] sm:max-w-[17rem] text-center font-body text-body italic leading-relaxed text-ink/90 px-1">
            {data.formalWording}
          </p>

          {/* 7. Detailed 3-Tier Fountain & Urn Centerpiece Focal Motif */}
          <FountainUrn className="mx-auto mt-6 sm:mt-8 mb-2 h-22 sm:h-26 w-40 sm:w-48 text-accent-primary" />
        </div>
      </div>
    </Section>
  );
}

