import { useEffect, useState } from "react";
import { Section } from "./InvitationExperience";
import { Divider, FloralCorner } from "./Ornaments";
import type { CountdownData } from "@/data/types";
import { useGuest } from "@/lib/guest";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diffParts(target: number, now: number): Parts | null {
  const ms = target - now;
  if (ms <= 0) return null; // date already passed — never render negatives
  const total = Math.floor(ms / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Countdown — floral/ribbon framed numerals. Handles a past wedding date with
 * a thank-you state, respects prefers-reduced-motion (no flip transitions and
 * a 1-minute tick), and keeps per-second updates away from screen readers.
 */
export function CountdownSection({ data }: { data: CountdownData }) {
  const guest = useGuest();
  const reduced = usePrefersReducedMotion();
  const target = new Date(data.targetDateTime).getTime();
  const valid = !Number.isNaN(target);

  const [parts, setParts] = useState<Parts | null>(() =>
    valid ? diffParts(target, Date.now()) : null,
  );

  useEffect(() => {
    if (!valid) return;
    const tick = () => setParts(diffParts(target, Date.now()));
    tick();
    const id = window.setInterval(tick, reduced ? 60_000 : 1000);
    return () => window.clearInterval(id);
  }, [target, valid, reduced]);

  const past = valid && parts === null;

  const units: Array<{ label: string; value: number }> = parts
    ? [
        { label: "Days", value: parts.days },
        { label: "Hours", value: parts.hours },
        { label: "Minutes", value: parts.minutes },
        { label: "Seconds", value: parts.seconds },
      ]
    : [];

  /* Coarse, screen-reader-only summary: changes at most once a minute. */
  const srSummary = parts
    ? `${parts.days} days, ${parts.hours} hours and ${parts.minutes} minutes until the wedding.`
    : "";

  return (
    <Section
      id="countdown"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30 text-center"
    >
      <div className="relative mx-auto w-full max-w-[19rem] rounded-[2rem] border border-accent-secondary/45 bg-surface/65 px-5 py-10">
        <FloralCorner className="pointer-events-none absolute -left-2 -top-2 h-20 w-20 text-accent-secondary" />
        <FloralCorner className="pointer-events-none absolute -right-2 -top-2 h-20 w-20 rotate-90 text-accent-secondary" />
        <FloralCorner className="pointer-events-none absolute -bottom-2 -left-2 h-20 w-20 -rotate-90 text-accent-secondary" />
        <FloralCorner className="pointer-events-none absolute -bottom-2 -right-2 h-20 w-20 rotate-180 text-accent-secondary" />

        {past ? (
          <>
            <h2 className="font-script text-[2.1rem] leading-tight text-accent-primary">
              Thank you for celebrating with us
            </h2>
            <Divider className="mx-auto mt-4 h-3 w-32 text-accent-secondary" />
            <p className="mt-4 font-body text-body italic text-ink/80">
              The vows are said — the memories stay.
            </p>
          </>
        ) : (
          <>
            <p className="font-heading text-micro uppercase tracking-[0.32em] text-ink/60">
              The Countdown
            </p>

            <div className="mt-6 grid grid-cols-4 gap-2" aria-hidden="true">
              {units.map((u) => (
                <div
                  key={u.label}
                  className="rounded-xl border border-accent-secondary/40 bg-background/70 px-1 py-3"
                >
                  <span
                    className={`block font-heading text-[1.6rem] leading-none text-accent-primary ${
                      reduced ? "" : "transition-transform duration-500"
                    }`}
                  >
                    {String(u.value).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block font-heading text-[0.58rem] uppercase tracking-[0.18em] text-ink/60">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>

            {/* One polite, low-frequency announcement instead of per-second spam */}
            <p className="sr-only" aria-live="polite">
              {srSummary}
            </p>

            {!valid ? (
              <p className="mt-5 font-body text-body italic text-ink/75">
                The date will be announced very soon.
              </p>
            ) : null}

            <Divider className="mx-auto mt-6 h-3 w-32 text-accent-secondary" />

            {data.supportingLine ? (
              <p className="mt-4 font-script text-[1.6rem] text-accent-primary/90">
                {data.supportingLine}
              </p>
            ) : null}

            {guest.isPersonalized ? (
              <p className="mt-3 font-heading text-micro uppercase tracking-[0.24em] text-ink/55">
                {guest.personalize("Mark your calendar, {{guestName}}")}
              </p>
            ) : null}
          </>
        )}
      </div>
    </Section>
  );
}
