import { useEffect, useMemo, useState } from "react";
import { Section } from "./InvitationExperience";
import { Divider, DovesWithRibbon } from "./Ornaments";
import type { RsvpConfig, RsvpResponse, WeddingEvent } from "@/data/types";
import { useGuest } from "@/lib/guest";
import { submitRsvp } from "@/lib/rsvp";

/**
 * RSVP — dove/ribbon framed form. Handles: name pre-fill, guest count capped to
 * allowedGuestCount (sane default when the guest is unknown), an already-saved
 * response shown as a summary with edit, smooth collapse when not attending,
 * a closed state past the deadline, and a clear retry after a failed submit.
 */
export function RsvpSection({
  config,
  events,
}: {
  config: RsvpConfig;
  events: WeddingEvent[];
}) {
  const guest = useGuest();

  const existing = useMemo<RsvpResponse | null>(() => {
    if (!guest.guest || guest.guest.rsvpStatus === "pending") return null;
    const raw = guest.guest.rsvpResponse as RsvpResponse | null | undefined;
    if (raw) return raw;
    return {
      attending: guest.guest.rsvpStatus === "yes",
      guestCount: 1,
      attendingEvents: [],
    };
  }, [guest.guest]);

  const deadlinePassed = config.deadline
    ? new Date(config.deadline).getTime() < Date.now()
    : false;

  const maxGuests = guest.guest?.allowedGuestCount
    ? Math.max(1, guest.guest.allowedGuestCount)
    : config.defaultMaxGuests;

  const rsvpEvents = events.filter(
    (e) =>
      config.eventsAvailableForRsvp.includes(e.id) &&
      (!guest.invitedEvents || guest.invitedEvents.includes(e.id)),
  );

  const [saved, setSaved] = useState<RsvpResponse | null>(existing);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(guest.name);
  const [attending, setAttending] = useState<boolean>(existing?.attending ?? true);
  const [guestCount, setGuestCount] = useState<number>(
    Math.min(existing?.guestCount ?? 1, maxGuests),
  );
  const [meal, setMeal] = useState<string>(existing?.mealPreference ?? config.mealOptions[0] ?? "");
  const [picked, setPicked] = useState<string[]>(
    existing?.attendingEvents ?? rsvpEvents.map((e) => e.id),
  );
  const [note, setNote] = useState(existing?.noteToCouple ?? "");
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");

  /* Guest data resolves asynchronously — adopt name and saved response once. */
  useEffect(() => {
    if (guest.status !== "resolved") return;
    setName((prev) => (prev ? prev : guest.name));
    if (existing) {
      setSaved(existing);
      setAttending(existing.attending);
      setGuestCount(Math.min(existing.guestCount || 1, maxGuests));
      if (existing.mealPreference) setMeal(existing.mealPreference);
      if (existing.attendingEvents.length) setPicked(existing.attendingEvents);
      setNote(existing.noteToCouple ?? "");
    }
  }, [guest.status, guest.name, existing, maxGuests]);

  const nameError = name.trim().length === 0 ? "Please tell us your name." : "";
  const countError = guestCount > maxGuests ? `Your invitation covers ${maxGuests}.` : "";

  const showSummary = saved && !editing;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (nameError || countError) return;
    const response: RsvpResponse = {
      name: name.trim(),
      attending,
      guestCount: attending ? guestCount : 0,
      mealPreference: attending ? meal : null,
      attendingEvents: attending ? picked : [],
      noteToCouple: note.trim() || null,
    };
    setState("sending");
    try {
      await submitRsvp({ guestId: guest.guest?.guestId ?? null, response });
      setSaved(response);
      setEditing(false);
      setState("idle");
    } catch {
      setState("error");
    }
  }

  return (
    <Section
      id="rsvp"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30"
    >
      <DovesWithRibbon className="mx-auto h-16 w-[85%] text-accent-primary/75" />
      <h2 className="mt-3 text-center font-script text-[2.2rem] text-accent-primary">
        {config.headline}
      </h2>
      {config.supportingLine ? (
        <p className="mt-2 text-center font-body text-label text-ink/70">{config.supportingLine}</p>
      ) : null}
      <Divider className="mx-auto mt-4 h-3 w-32 text-accent-secondary" />

      {deadlinePassed && !saved ? (
        <p className="mt-6 rounded-2xl border border-accent-secondary/45 bg-surface/70 p-5 text-center font-body text-body italic text-ink/80">
          RSVPs are now closed — please contact the couple directly and we'll find you a seat.
        </p>
      ) : showSummary ? (
        <div className="mt-6 rounded-2xl border border-accent-secondary/45 bg-surface/70 p-5 text-center">
          <p className="font-heading text-micro uppercase tracking-[0.26em] text-ink/55">
            Your response
          </p>
          <p className="mt-3 font-script text-[1.9rem] text-accent-primary">
            {saved!.attending ? "You're coming" : "You'll be missed"}
          </p>
          <div className="mt-3 space-y-1 font-body text-label text-ink/75">
            {saved!.name ? <p>{saved!.name}</p> : null}
            {saved!.attending ? (
              <>
                <p>
                  {saved!.guestCount} {saved!.guestCount === 1 ? "guest" : "guests"}
                </p>
                {saved!.mealPreference ? <p>Meal — {saved!.mealPreference}</p> : null}
                {saved!.attendingEvents.length ? (
                  <p>
                    Attending —{" "}
                    {saved!.attendingEvents
                      .map((id) => events.find((e) => e.id === id)?.name ?? id)
                      .join(", ")}
                  </p>
                ) : null}
              </>
            ) : null}
            {saved!.noteToCouple ? (
              <p className="italic">&ldquo;{saved!.noteToCouple}&rdquo;</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="mt-5 rounded-full border border-accent-primary/60 px-5 py-2 font-heading text-micro uppercase tracking-[0.24em] text-accent-primary"
          >
            Edit your response
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5 rounded-2xl border border-accent-secondary/45 bg-surface/70 p-5"
        >
          <div>
            <label
              htmlFor="rsvp-name"
              className="font-heading text-micro uppercase tracking-[0.24em] text-ink/60"
            >
              Your name
            </label>
            <input
              id="rsvp-name"
              value={name}
              maxLength={80}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 font-body text-body text-ink outline-none focus:border-accent-primary"
            />
            {nameError ? (
              <p className="mt-1 font-body text-micro text-destructive">{nameError}</p>
            ) : null}
          </div>

          <div className="flex gap-2" role="group" aria-label="Attendance">
            {[
              { label: "Joyfully attending", value: true },
              { label: "Not attending", value: false },
            ].map((opt) => (
              <button
                key={String(opt.value)}
                type="button"
                aria-pressed={attending === opt.value}
                onClick={() => setAttending(opt.value)}
                className={`flex-1 rounded-xl border px-3 py-2 font-heading text-micro uppercase tracking-[0.18em] transition-colors ${
                  attending === opt.value
                    ? "border-accent-primary bg-accent-primary text-primary-foreground"
                    : "border-accent-secondary/50 text-accent-primary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* smooth collapse instead of a layout jump */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              attending ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="space-y-5 overflow-hidden">
              <div>
                <label
                  htmlFor="rsvp-count"
                  className="font-heading text-micro uppercase tracking-[0.24em] text-ink/60"
                >
                  How many of you?
                </label>
                <select
                  id="rsvp-count"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 font-body text-body text-ink"
                >
                  {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                {countError ? (
                  <p className="mt-1 font-body text-micro text-destructive">{countError}</p>
                ) : null}
                {!guest.guest?.allowedGuestCount ? (
                  <p className="mt-1 font-body text-micro text-ink/55">
                    For larger parties, please contact us.
                  </p>
                ) : null}
              </div>

              {config.mealOptions.length ? (
                <div>
                  <label
                    htmlFor="rsvp-meal"
                    className="font-heading text-micro uppercase tracking-[0.24em] text-ink/60"
                  >
                    Meal preference
                  </label>
                  <select
                    id="rsvp-meal"
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 font-body text-body text-ink"
                  >
                    {config.mealOptions.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}

              {rsvpEvents.length > 1 ? (
                <fieldset>
                  <legend className="font-heading text-micro uppercase tracking-[0.24em] text-ink/60">
                    Which functions?
                  </legend>
                  <div className="mt-2 space-y-2">
                    {rsvpEvents.map((e) => (
                      <label
                        key={e.id}
                        className="flex items-center gap-3 font-body text-label text-ink/80"
                      >
                        <input
                          type="checkbox"
                          checked={picked.includes(e.id)}
                          onChange={(ev) =>
                            setPicked((prev) =>
                              ev.target.checked
                                ? [...prev, e.id]
                                : prev.filter((id) => id !== e.id),
                            )
                          }
                          className="size-4 accent-accent-primary"
                        />
                        {e.name}
                      </label>
                    ))}
                  </div>
                </fieldset>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="rsvp-note"
              className="font-heading text-micro uppercase tracking-[0.24em] text-ink/60"
            >
              A note for the couple
            </label>
            <textarea
              id="rsvp-note"
              value={note}
              rows={3}
              maxLength={500}
              onChange={(e) => setNote(e.target.value)}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 font-body text-body text-ink outline-none focus:border-accent-primary"
            />
          </div>

          <button
            type="submit"
            disabled={state === "sending"}
            className="w-full rounded-full bg-accent-primary px-5 py-3 font-heading text-label uppercase tracking-[0.26em] text-primary-foreground disabled:opacity-70"
          >
            {state === "sending" ? "Sending…" : saved ? "Update response" : "Send RSVP"}
          </button>

          <p aria-live="polite" className="text-center font-body text-micro text-ink/70">
            {state === "error" ? (
              <span className="text-destructive">
                We couldn't save your RSVP — nothing was sent. Please tap Send RSVP again.
              </span>
            ) : (
              ""
            )}
          </p>
        </form>
      )}
    </Section>
  );
}
