import { Section } from "./InvitationExperience";
import { Divider, TravelIcon, VenueSketch } from "./Ornaments";
import type { TravelConfig, TravelOption } from "@/data/types";

/**
 * Travel & Stay — two groups (getting there, where to stay). The stay heading
 * is omitted entirely when the couple lists no accommodation. Booking codes and
 * links come from data so they can be edited without touching components.
 */
export function TravelSection({
  options,
  config,
}: {
  options: TravelOption[];
  config: TravelConfig;
}) {
  const all = (options ?? []).filter((o) => o?.title);
  const travel = all.filter((o) => o.kind !== "stay");
  const stays = all.filter((o) => o.kind === "stay");

  if (all.length === 0) return null;

  return (
    <Section
      id="travel"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30"
    >
      <VenueSketch className="mx-auto h-20 w-[80%] text-accent-primary/65" />
      <h2 className="mt-2 text-center font-script text-[2.3rem] text-accent-primary">
        {config.sectionLabel}
      </h2>
      {config.supportingLine ? (
        <p className="mt-2 text-center font-body text-label italic text-ink/70">
          {config.supportingLine}
        </p>
      ) : null}
      <Divider className="mx-auto mt-4 h-3 w-32 text-accent-secondary" />

      {travel.length > 0 ? (
        <TravelGroup label={config.gettingThereLabel} list={travel} />
      ) : null}
      {stays.length > 0 ? <TravelGroup label={config.stayLabel} list={stays} /> : null}
    </Section>
  );
}

function TravelGroup({ label, list }: { label: string; list: TravelOption[] }) {
  return (
    <div className="mt-8">
      <p className="font-heading text-label uppercase tracking-[0.28em] text-accent-primary/85">
        {label}
      </p>
      <ul className="mt-4 space-y-3">
        {list.map((o) => (
          <li
            key={o.id}
            className="rounded-2xl border border-accent-secondary/45 bg-surface/70 px-4 py-4"
          >
            <div className="flex items-start gap-3">
              <TravelIcon kind={o.kind} className="mt-0.5 size-6 shrink-0 text-accent-primary/75" />
              <div>
                <h3 className="font-heading text-heading uppercase tracking-[0.2em] text-accent-primary">
                  {o.title}
                </h3>
                <p className="mt-1 font-body text-label leading-relaxed text-ink/80">{o.detail}</p>
                {o.priceNote ? (
                  <p className="mt-1 font-body text-micro italic text-ink/65">{o.priceNote}</p>
                ) : null}
                {o.bookingCode ? (
                  <p className="mt-2 inline-block rounded-full border border-accent-secondary/55 px-3 py-1 font-heading text-micro uppercase tracking-[0.18em] text-ink/70">
                    Code — {o.bookingCode}
                  </p>
                ) : null}
                {o.link ? (
                  <a
                    href={o.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block font-heading text-micro uppercase tracking-[0.2em] text-accent-primary underline decoration-accent-secondary/60 underline-offset-4"
                  >
                    Open details
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
