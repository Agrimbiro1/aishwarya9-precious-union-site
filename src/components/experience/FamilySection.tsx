import { Section } from "./InvitationExperience";
import type { FamilyConfig, FamilyMember } from "@/data/types";
import { useGuest } from "@/lib/guest";

/**
 * FamilySection — Redesigned according to specifications:
 * PART 1: Thin-ink hand-drawn family group illustration beneath the header.
 * PART 2: Focused parents-only layout (Bride's Parents & Groom's Parents) matching Image 3.
 */
export function FamilySection({
  members = [],
  config,
}: {
  members?: FamilyMember[];
  config?: FamilyConfig;
}) {
  const { personalize } = useGuest();
  const supportingLineText = config?.supportingLine ?? "The people who made this celebration possible.";
  const supportingText = personalize(supportingLineText) || supportingLineText;

  // Extract parents dynamically if available, or fallback to config / defaults
  const brideFather = members.find(
    (m) => m.side === "bride" && m.relation.toLowerCase().includes("father")
  )?.name;
  const brideMother = members.find(
    (m) => m.side === "bride" && m.relation.toLowerCase().includes("mother")
  )?.name;

  const groomFather = members.find(
    (m) => m.side === "groom" && m.relation.toLowerCase().includes("father")
  )?.name;
  const groomMother = members.find(
    (m) => m.side === "groom" && m.relation.toLowerCase().includes("mother")
  )?.name;

  const brideParentsNames =
    config?.brideParents?.names ||
    (brideFather && brideMother
      ? `${brideFather} & ${brideMother}`
      : "Mr. Anil & Mrs. Meera Sharma");

  const groomParentsNames =
    config?.groomParents?.names ||
    (groomFather && groomMother
      ? `${groomFather} & ${groomMother}`
      : "Mr. Rajesh & Mrs. Lakshmi Iyer");

  const brideMessage =
    config?.brideParents?.message ||
    "With joy in our hearts, we welcome you to share this day with our family.";

  const groomMessage =
    config?.groomParents?.message ||
    "Your blessings mean everything to us. Thank you for standing with our children.";

  return (
    <Section
      id="family"
      className="relative flex min-h-full flex-col justify-center border-t border-[#7A1E1E]/20 py-12"
    >
      <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[27rem] flex flex-col items-center text-center z-10 px-4">
        {/* SECTION EYEBROW HEADER */}
        <div className="inline-flex items-center justify-center gap-2 text-[#7A1E1E] mb-1">
          <EyebrowFlourishIcon />
          <span className="font-heading text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.4em] text-[#7A1E1E]/85 font-semibold pl-[0.4em]">
            OUR BLESSINGS
          </span>
          <EyebrowFlourishIcon />
        </div>

        {/* SECTION SCRIPT TITLE */}
        <h2 className="font-script text-[2.5rem] sm:text-[2.9rem] text-[#7A1E1E] leading-tight tracking-wide filter drop-shadow-[0_2px_4px_rgba(122,30,30,0.15)]">
          {config?.sectionLabel || "Our Families"}
        </h2>

        {/* SUPPORTING LINE */}
        {supportingText ? (
          <p className="mt-1 text-center font-body text-[0.88rem] sm:text-[0.95rem] italic text-ink/75 max-w-[21rem]">
            {supportingText}
          </p>
        ) : null}

        {/* PART 1: THIN-INK HAND-DRAWN FAMILY GROUP ILLUSTRATION */}
        <div className="w-full my-6 flex justify-center pointer-events-none filter drop-shadow-[0_2px_5px_rgba(122,30,30,0.08)]">
          <HandDrawnFamilyIllustration className="w-full max-w-[22rem] sm:max-w-[25rem] h-auto" />
        </div>

        {/* PART 2: PARENTS ONLY FOCUSED LAYOUT (PER REFERENCE IMAGE 3) */}
        <div className="w-full space-y-7 mt-2">
          {/* SECTION 1: PARENTS OF THE BRIDE */}
          <ParentBlock
            eyebrowLabel={config?.brideSideLabel || "PARENTS OF THE BRIDE"}
            namesText={brideParentsNames}
            messageText={brideMessage}
          />

          {/* DECORATIVE DIVIDER BETWEEN BRIDE & GROOM PARENTS */}
          <OrnamentalDivider />

          {/* SECTION 2: PARENTS OF THE GROOM */}
          <ParentBlock
            eyebrowLabel={config?.groomSideLabel || "PARENTS OF THE GROOM"}
            namesText={groomParentsNames}
            messageText={groomMessage}
          />

          {/* FINAL BOTTOM DECORATIVE DIVIDER */}
          <OrnamentalDivider className="opacity-70" />
        </div>
      </div>
    </Section>
  );
}

/**
 * Reusable Parent Block Component (PART 2)
 */
function ParentBlock({
  eyebrowLabel,
  namesText,
  messageText,
}: {
  eyebrowLabel: string;
  namesText: string;
  messageText: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* EYEBROW WITH FLOURISH ICONS */}
      <div className="inline-flex items-center justify-center gap-2.5 text-[#B8935A] mb-2">
        <EyebrowFlourishIcon />
        <span className="font-heading text-[0.68rem] sm:text-[0.75rem] uppercase tracking-[0.32em] text-[#7A1E1E]/90 font-semibold pl-[0.32em]">
          {eyebrowLabel}
        </span>
        <EyebrowFlourishIcon />
      </div>

      {/* PARENTS' NAMES WITH DECORATIVE & */}
      <h3 className="font-heading text-[1.45rem] sm:text-[1.75rem] text-[#7A1E1E] tracking-wide leading-snug my-1 font-medium">
        {renderNamesWithDecorativeAmpersand(namesText)}
      </h3>

      {/* SHORT WARM WELCOME / BLESSING MESSAGE */}
      <p className="mt-1.5 font-body text-[0.88rem] sm:text-[0.96rem] italic text-ink/75 max-w-[21rem] leading-relaxed">
        {renderItalicMessageWithScriptHighlight(messageText)}
      </p>
    </div>
  );
}

/**
 * Formats parent names so the '&' symbol receives a calligraphy flourish font treatment matching Image 3.
 */
function renderNamesWithDecorativeAmpersand(namesText: string) {
  const parts = namesText.split("&");
  if (parts.length === 2 && parts[0] && parts[1]) {
    return (
      <>
        <span>{parts[0].trim()}</span>
        <span className="font-script text-[1.9rem] sm:text-[2.2rem] text-[#B8935A] mx-2 align-middle inline-block font-normal">
          &amp;
        </span>
        <span>{parts[1].trim()}</span>
      </>
    );
  }
  return <span>{namesText}</span>;
}

/**
 * Highlights key emotional words like 'joy' or 'blessings' in calligraphy script within the italic message, matching Image 3.
 */
function renderItalicMessageWithScriptHighlight(messageText: string) {
  const words = messageText.split(" ");
  return words.map((word, idx) => {
    const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
    if (cleanWord === "joy" || cleanWord === "blessings") {
      return (
        <span key={idx}>
          <span className="font-script text-[1.3rem] sm:text-[1.45rem] text-[#7A1E1E] not-italic px-0.5 font-normal">
            {word}
          </span>{" "}
        </span>
      );
    }
    return word + (idx < words.length - 1 ? " " : "");
  });
}

import familyIllustrationAsset from "@/assets/family_group_illustration_transparent.png";

/**
 * PART 1: Thin-Ink Hand-Drawn Family Group Illustration (Generated Asset with 100% Transparent Bleed)
 * Single-weight maroon ink linework matching the site's established illustration family.
 * Warm multi-generational group standing together with a pet dog at front.
 */
function HandDrawnFamilyIllustration({ className = "" }: { className?: string }) {
  return (
    <img
      src={familyIllustrationAsset}
      alt="Our Families hand-drawn illustration"
      loading="lazy"
      className={`select-none pointer-events-none w-full max-w-[23rem] sm:max-w-[26rem] h-auto object-contain filter drop-shadow-[0_2px_4px_rgba(122,30,30,0.12)] ${className}`}
    />
  );
}

/**
 * Eyebrow Flourish Accent Icon (Gold / Maroon)
 */
function EyebrowFlourishIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`w-3.5 h-3.5 text-[#B8935A] ${className}`} fill="none" aria-hidden="true">
      <path d="M 8 2 C 6 5, 8 8, 8 8 C 8 8, 10 5, 8 2 Z" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" />
      <path d="M 3 10 C 6 9, 8 12, 8 12 C 8 12, 5 13, 3 10 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
      <path d="M 13 10 C 10 9, 8 12, 8 12 C 8 12, 11 13, 13 10 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
      <circle cx="8" cy="8" r="1" fill="#7A1E1E" />
    </svg>
  );
}

/**
 * Ornamental Section Divider with Centered Indian Motif (Diya / Lotus)
 */
function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-[#B8935A] my-6 ${className}`} aria-hidden="true">
      {/* Left Dashed Rule with End Swirl */}
      <svg viewBox="0 0 120 12" className="w-24 sm:w-32 h-3" fill="none">
        <path d="M 5 6 Q 15 2, 25 6 L 115 6" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" />
        <circle cx="5" cy="6" r="1.5" fill="currentColor" />
        <path d="M 105 6 C 110 3, 115 9, 118 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      {/* Centered Small Ornamental Diya Motif */}
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#B8935A]" fill="none">
        <path d="M 6 15 C 6 19, 18 19, 18 15 C 18 12, 14 11, 14 9 L 10 9 C 10 11, 6 12, 6 15 Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 8 9 L 16 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 12 4 C 10 6.5, 12 9, 12 9 C 12 9, 14 6.5, 12 4 Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="12" cy="6.5" r="1" fill="#7A1E1E" />
      </svg>

      {/* Right Dashed Rule with End Swirl */}
      <svg viewBox="0 0 120 12" className="w-24 sm:w-32 h-3" fill="none">
        <path d="M 5 6 L 95 6 Q 105 10, 115 6" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" />
        <circle cx="115" cy="6" r="1.5" fill="currentColor" />
        <path d="M 2 6 C 5 3, 10 9, 15 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
