import { Section } from "./InvitationExperience";
import { Divider, FloralCorner } from "./Ornaments";
import type { CoupleData } from "@/data/types";
import { formatLongDate } from "@/lib/format";

/**
 * Couple section — floral-framed portrait card. Handles: missing portrait
 * (monogram medallion instead), empty pets array (frame stays balanced),
 * and very long names (script size steps down, wraps per line).
 */
export function CoupleSection({ data }: { data: CoupleData }) {
  const names = data.coupleNames.filter(Boolean);
  const title = names.join(" & ");
  const initials = names.map((n) => n.trim().charAt(0).toUpperCase()).join(" & ");
  const isLong = title.length > 20;
  const pets = (data.pets ?? []).filter((p) => p?.name);
  const dateLine = data.eventDateShort || formatLongDate(null);

  return (
    <Section id="couple" className="relative text-center">
      <div className="relative mx-auto max-w-[19rem] rounded-[2rem] border border-accent-secondary/45 bg-surface/70 px-5 pb-8 pt-9">
        <FloralCorner className="pointer-events-none absolute -left-2 -top-2 h-20 w-20 text-accent-secondary" />
        <FloralCorner className="pointer-events-none absolute -right-2 -top-2 h-20 w-20 rotate-90 text-accent-secondary" />
        <FloralCorner className="pointer-events-none absolute -bottom-2 -left-2 h-20 w-20 -rotate-90 text-accent-secondary" />
        <FloralCorner className="pointer-events-none absolute -bottom-2 -right-2 h-20 w-20 rotate-180 text-accent-secondary" />

        <p className="font-heading text-micro uppercase tracking-[0.32em] text-ink/55">
          Save the date
        </p>

        <div className="mx-auto mt-5 aspect-[4/5] w-[70%] overflow-hidden rounded-[1.4rem] border border-accent-secondary/40 bg-background">
          {data.portraitImageUrl ? (
            <img
              src={data.portraitImageUrl}
              alt={title ? `Portrait of ${title}` : "The couple"}
              loading="lazy"
              className="size-full object-cover"
            />
          ) : (
            <div className="grid size-full place-items-center">
              <span className="font-script text-[2.4rem] text-accent-primary/70">
                {initials || "♥"}
              </span>
            </div>
          )}
        </div>

        <h2
          className={`mt-6 font-script leading-tight text-accent-primary ${
            isLong ? "text-[1.85rem]" : "text-[2.4rem]"
          }`}
        >
          {title}
        </h2>

        <Divider className="mx-auto mt-3 h-3 w-32 text-accent-secondary" />

        {dateLine ? (
          <p className="mt-3 font-heading text-label uppercase tracking-[0.22em] text-ink/75">
            {dateLine}
          </p>
        ) : null}

        {data.tagline ? (
          <p className="mt-4 font-body text-body italic leading-relaxed text-ink/80">
            {data.tagline}
          </p>
        ) : null}

        {pets.length > 0 ? (
          <p className="mt-5 font-heading text-micro uppercase tracking-[0.24em] text-ink/60">
            with our {pets.length > 1 ? "companions" : pets[0]!.type} —{" "}
            {pets.map((p) => p.name).join(" & ")}
          </p>
        ) : null}
      </div>
    </Section>
  );
}
