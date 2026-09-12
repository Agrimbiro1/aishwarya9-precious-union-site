import { Section } from "./InvitationExperience";
import { Divider } from "./Ornaments";
import type { ContactConfig, ContactPerson } from "@/data/types";

/** Hand-Drawn Phone Receiver Icon Doodle */
function HandDrawnPhoneIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 3.5 3 C 3.5 2.2 4.2 1.5 5 1.5 C 6.2 1.5 7.2 2.8 6.8 3.9 L 6 5.5 C 5.7 6 5.8 6.6 6.2 7 C 7.5 8.3 9.7 10.5 11 11.8 C 11.4 12.2 12 12.3 12.5 12 L 14.1 11.2 C 15.2 10.8 16.5 11.8 16.5 13 C 16.5 13.8 15.8 14.5 15 14.5 C 10 14.5 3.5 8 3.5 3 Z" />
      <path d="M 12 3.5 C 13.5 4 14.5 5 15 6.5" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
    </svg>
  );
}

/** Hand-Drawn Chat Bubble / Leaf Icon Doodle */
function HandDrawnChatIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 3 8.5 C 3 5 5.5 2.5 9 2.5 C 12.5 2.5 15 5 15 8.5 C 15 12 12.5 14.5 9 14.5 C 7.8 14.5 6.7 14.1 5.8 13.5 L 3 14.5 L 3.8 11.8 C 3.3 10.8 3 9.7 3 8.5 Z" />
      <path d="M 7.5 8.5 C 7.5 7.5 8.5 7.5 9 8.2 C 9.5 7.5 10.5 7.5 10.5 8.5 C 10.5 9.5 9 10.5 9 10.5 C 9 10.5 7.5 9.5 7.5 8.5 Z" fill="currentColor" fillOpacity="0.25" strokeWidth="1" />
    </svg>
  );
}

/**
 * Delicate Decorative Entry Divider for Contact Entries
 * Features gradient hairline rules with a centered hand-drawn diamond-flourish motif
 */
function ContactEntryDivider() {
  return (
    <div className="w-full flex items-center justify-center gap-2.5 my-5 text-[#B8935A]" aria-hidden="true">
      {/* Left Hairline Gradient Rule */}
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B8935A]/45 to-[#B8935A]/75" />

      {/* Centered Hand-Drawn Diamond & Petal Flourish Motif */}
      <svg viewBox="0 0 20 12" className="w-4 h-2.5 text-[#B8935A] shrink-0" fill="none">
        <path
          d="M 10 1 L 14 6 L 10 11 L 6 6 Z"
          fill="#C89B48"
          fillOpacity="0.35"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <circle cx="10" cy="6" r="1.1" fill="#7A1E1E" />
        <path d="M 2 6 C 4 4.5, 6 6, 6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M 18 6 C 16 4.5, 14 6, 14 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>

      {/* Right Hairline Gradient Rule */}
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#B8935A]/45 to-[#B8935A]/75" />
    </div>
  );
}

/**
 * ContactSection — Unboxed floating layout sitting directly on the shared textured background.
 * Matches the site-wide "no card container" rule and established typographic hierarchy.
 */
export function ContactSection({
  people,
  config,
}: {
  people: ContactPerson[];
  config: ContactConfig;
}) {
  const list = (people ?? []).filter((p) => p?.name);
  if (list.length === 0) return null;

  return (
    <Section
      id="contact"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30 py-12 px-4 text-center overflow-hidden"
    >
      {/* Subtle Warm Ambient Paper Glow Wash (Candlelit warm ivory/gold radial bloom over cotton paper) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-85"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 48%, oklch(0.965 0.022 75 / 0.65) 0%, oklch(0.935 0.028 68 / 0.3) 55%, transparent 100%)",
        }}
      />

      {/* Optional Background Image Layer (Softened to blend with page texture) */}
      {config.backgroundImageUrl && !config.backgroundImageUrl.startsWith("/__l5e/") ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <img
            src={config.backgroundImageUrl}
            alt=""
            loading="lazy"
            className="size-full object-cover opacity-15 mix-blend-multiply"
          />
        </div>
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-md">
        {/* SECTION EYEBROW HEADER */}
        <div className="inline-flex items-center justify-center gap-2 text-[#7A1E1E] mb-1">
          <span className="font-heading text-[0.62rem] sm:text-[0.72rem] uppercase tracking-[0.4em] text-[#7A1E1E]/85 font-semibold pl-[0.4em]">
            GET IN TOUCH
          </span>
        </div>

        {/* PRIMARY SECTION SCRIPT TITLE (h2) */}
        <h2 className="font-script text-[2.5rem] sm:text-[2.9rem] text-[#7A1E1E] leading-tight select-none filter drop-shadow-[0_2px_4px_rgba(122,30,30,0.15)]">
          {config.sectionLabel || "Need a hand?"}
        </h2>

        {/* SUPPORTING SUBTITLE (p) */}
        {config.supportingLine ? (
          <p className="mt-1 font-body text-[0.88rem] sm:text-[0.95rem] italic text-ink/75 max-w-sm mx-auto">
            {config.supportingLine}
          </p>
        ) : null}

        <Divider className="mx-auto mt-3 h-3 w-32 text-accent-secondary mb-8" />

        {/* UNBOXED CONTACT PERSON ENTRIES — Zero Solid Container Box */}
        <div className="mt-6 space-y-0">
          {list.map((p, idx) => (
            <div key={p.id} className="py-5 first:pt-0 last:pb-0">
              <div className="flex flex-col items-center text-center">
                {/* Person Name in Bold Deep Maroon Tracked Caps */}
                <h3 className="font-heading text-[0.95rem] sm:text-[1.05rem] uppercase tracking-[0.26em] text-[#7A1E1E] font-bold">
                  {p.name}
                </h3>

                {/* Relationship / Role Label — Distinct Muted Italic Serif */}
                {p.role ? (
                  <p className="mt-1 font-body text-[0.82rem] sm:text-[0.88rem] italic tracking-wide text-ink/60 font-normal">
                    {p.role}
                  </p>
                ) : null}

                {/* Contact Action Buttons with Hand-Drawn Icons & Foil Gold Hairline Border */}
                <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3">
                  {p.phone ? (
                    <a
                      href={`tel:${p.phone}`}
                      className="group/btn inline-flex items-center gap-2 rounded-full border border-[#C89B48]/80 bg-[#FAF5EE] px-4 py-1.5 font-heading text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.22em] text-[#7A1E1E] font-semibold shadow-[0_1px_4px_rgba(200,155,72,0.15)] hover:border-[#7A1E1E] hover:bg-[#7A1E1E] hover:text-[#FFF5DF] hover:shadow-[0_2px_8px_rgba(122,30,30,0.25)] transition-all duration-250 ring-1 ring-[#7A1E1E]/15"
                    >
                      <HandDrawnPhoneIcon className="w-3.5 h-3.5 text-[#C89B48] group-hover/btn:text-[#FFF5DF] transition-colors" />
                      <span>Call</span>
                    </a>
                  ) : null}

                  {p.whatsapp ? (
                    <a
                      href={`https://wa.me/${p.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-full border border-[#C89B48]/80 bg-[#FAF5EE] px-4 py-1.5 font-heading text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.22em] text-[#7A1E1E] font-semibold shadow-[0_1px_4px_rgba(200,155,72,0.15)] hover:border-[#7A1E1E] hover:bg-[#7A1E1E] hover:text-[#FFF5DF] hover:shadow-[0_2px_8px_rgba(122,30,30,0.25)] transition-all duration-250 ring-1 ring-[#7A1E1E]/15"
                    >
                      <HandDrawnChatIcon className="w-3.5 h-3.5 text-[#C89B48] group-hover/btn:text-[#FFF5DF] transition-colors" />
                      <span>WhatsApp</span>
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Decorative Entry Divider with Centered Diamond-Flourish Motif */}
              {idx < list.length - 1 ? <ContactEntryDivider /> : null}
            </div>
          ))}
        </div>

        {/* WARM CLOSING LINE — Tone warmth upgrade */}
        <div className="mt-8 pt-2 flex flex-col items-center text-center">
          {/* Small Hand-Drawn Heart & Leaf Botanical Flourish Icon */}
          <svg viewBox="0 0 20 16" className="w-4 h-3.5 text-[#B8935A]/85 mb-2.5" fill="none" aria-hidden="true">
            <path
              d="M 10 14 C 10 14 3 9 3 5 C 3 2.5 5 1.5 7 1.5 C 8.5 1.5 9.5 2.5 10 3.5 C 10.5 2.5 11.5 1.5 13 1.5 C 15 1.5 17 2.5 17 5 C 17 9 10 14 10 14 Z"
              stroke="currentColor"
              strokeWidth="1.3"
              fill="#C89B48"
              fillOpacity="0.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="font-body text-[0.88rem] sm:text-[0.95rem] italic text-ink/75 max-w-[21rem] leading-relaxed">
            {config.closingLine || "We're just a message away — don't hesitate to reach out anytime."}
          </p>
        </div>
      </div>
    </Section>
  );
}
