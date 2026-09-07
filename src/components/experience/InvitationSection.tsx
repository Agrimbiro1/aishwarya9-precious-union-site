import { Section } from "./InvitationExperience";
import { Column, Dove, RibbonBow } from "./Ornaments";
import type { InvitationData } from "@/data/types";
import { useGuest } from "@/lib/guest";
import { formatNumericDate } from "@/lib/format";

/**
 * Invitation section — arch of ribbon + doves + columns framing the couple's
 * names. Every string comes from InvitationData; the greeting line disappears
 * entirely when the guest is unknown (never "Dear Guest").
 */
export function InvitationSection({ data }: { data: InvitationData }) {
  const guest = useGuest();
  const greeting = guest.personalize(data.guestGreetingTemplate);
  const names = data.coupleNames.filter(Boolean);
  const dateLabel = formatNumericDate(data.weddingDate);
  const isLongName = names.some((n) => n.length > 12);

  return (
    <Section id="invitation" className="relative overflow-hidden pt-16 text-center">
      {/* arch ornament */}
      <div className="pointer-events-none absolute inset-x-0 top-6 text-accent-secondary">
        <RibbonBow className="mx-auto h-14 w-[78%]" />
        <Dove className="absolute left-3 top-8 h-10 w-14 text-accent-primary/70" />
        <Dove flip className="absolute right-3 top-12 h-10 w-14 text-accent-primary/70" />
      </div>
      <Column className="pointer-events-none absolute -left-1 top-28 h-64 w-14 text-accent-primary/25" />
      <Column className="pointer-events-none absolute -right-1 top-28 h-64 w-14 text-accent-primary/25" />

      <div className="relative mx-auto mt-20 max-w-[17rem]">
        {greeting ? (
          <p className="font-body text-body italic text-ink/80">{greeting}</p>
        ) : null}

        <p className="mt-3 font-heading text-micro uppercase tracking-[0.3em] text-ink/60">
          {data.eyebrowLabel}
        </p>

        <h1
          className={`mt-5 font-script leading-[0.95] text-accent-primary ${
            isLongName ? "text-[2.1rem]" : "text-display"
          }`}
        >
          {names.map((name, i) => (
            <span key={name} className="block break-words">
              {name}
              {i < names.length - 1 ? (
                <span className="block font-heading text-heading tracking-[0.2em] text-accent-secondary">
                  &amp;
                </span>
              ) : null}
            </span>
          ))}
        </h1>

        {dateLabel ? (
          <p className="mt-6 font-heading text-label uppercase tracking-[0.3em] text-ink/75">
            {dateLabel}
          </p>
        ) : null}

        <p className="mt-6 font-body text-body leading-relaxed text-ink/85">{data.formalWording}</p>
      </div>
    </Section>
  );
}
