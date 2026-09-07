import { useState } from "react";
import { Section } from "./InvitationExperience";
import { EventIcon } from "./Ornaments";
import type { EventsConfig, WeddingEvent } from "@/data/types";
import { useGuest } from "@/lib/guest";

function formatWhen(value: string | null | undefined): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  });
}

/**
 * Events timeline. Guest scoping: events outside guest.invitedEvents are either
 * hidden or de-emphasised as "By special invitation" (couple-configurable).
 * Works with one event or eight; unknown times read "Time to be announced".
 */
export function EventsSection({
  events,
  config,
}: {
  events: WeddingEvent[];
  config: EventsConfig;
}) {
  const guest = useGuest();
  const [expanded, setExpanded] = useState(false);

  const invited = guest.invitedEvents;
  const scoped = events
    .map((e) => ({ event: e, invited: !invited || invited.includes(e.id) }))
    .filter((row) => row.invited || config.uninvitedEventDisplay === "special-invitation");

  const collapsible = scoped.length > config.collapseAfter;
  const visible = collapsible && !expanded ? scoped.slice(0, config.collapseAfter) : scoped;
  const dressCode = config.dressCode;

  return (
    <Section
      id="events"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30"
    >
      <h2 className="text-center font-script text-[2.3rem] text-accent-primary">
        {config.sectionLabel}
      </h2>

      {scoped.length === 0 ? (
        <p className="mt-6 text-center font-body text-body italic text-ink/75">
          The schedule is being finalised — details will follow soon.
        </p>
      ) : (
        <ol className="relative mt-8 space-y-7 pl-9">
          {/* connector ribbon */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[0.95rem] top-2 w-px bg-accent-secondary/55"
          />
          {visible.map(({ event, invited: isInvited }) => {
            const when = formatWhen(event.dateTime);
            return (
              <li key={event.id} className={`relative ${isInvited ? "" : "opacity-60"}`}>
                <span className="absolute -left-9 top-0 grid size-8 place-items-center rounded-full border border-accent-secondary/60 bg-surface text-accent-primary">
                  <EventIcon kind={event.icon ?? "sparkle"} className="size-4" />
                </span>
                <h3 className="font-heading text-heading uppercase tracking-[0.22em] text-accent-primary">
                  {event.name}
                </h3>
                <p className="mt-1 font-body text-label text-ink/80">
                  {when || "Time to be announced"}
                </p>
                <p className="font-body text-label text-ink/70">{event.venueName}</p>
                {event.note ? (
                  <p className="mt-1 font-body text-label italic text-ink/65">{event.note}</p>
                ) : null}
                {event.dressCode ? (
                  <p className="mt-1 font-heading text-micro uppercase tracking-[0.2em] text-ink/55">
                    Dress code — {event.dressCode}
                  </p>
                ) : null}
                {!isInvited ? (
                  <p className="mt-2 inline-block rounded-full border border-accent-secondary/50 px-3 py-1 font-heading text-micro uppercase tracking-[0.18em] text-ink/60">
                    {config.specialInvitationLabel}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>
      )}

      {collapsible ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mx-auto mt-8 rounded-full border border-accent-primary/60 px-5 py-2 font-heading text-micro uppercase tracking-[0.24em] text-accent-primary"
        >
          {expanded ? "Show less" : "See full schedule"}
        </button>
      ) : null}

      {dressCode?.global ? (
        <div className="mt-10 border-t border-accent-secondary/40 pt-5 text-center">
          <p className="font-heading text-label uppercase tracking-[0.24em] text-accent-primary">
            Dress code — {dressCode.global}
          </p>
          {dressCode.colorPalette?.length ? (
            <div className="mt-3 flex justify-center gap-2" aria-hidden="true">
              {dressCode.colorPalette.map((c) => (
                <span
                  key={c}
                  className="size-4 rounded-full border border-ink/15"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </Section>
  );
}
