import { useEffect, useState } from "react";
import { Section } from "./InvitationExperience";
import { Divider, RibbonBow } from "./Ornaments";
import type { Wish, WishesConfig } from "@/data/types";
import { useGuest } from "@/lib/guest";
import { checkWishAllowed, submitWish } from "@/lib/wishes";

/**
 * Wishing wall — reads existing wishes, invites the first one when empty,
 * pre-fills (but never locks) the author name from the guest object, and guards
 * against spam with a honeypot field plus a per-visitor cooldown and cap.
 */
export function WishesSection({
  wishes,
  config,
}: {
  wishes: Wish[];
  config: WishesConfig;
}) {
  const guest = useGuest();
  const [list, setList] = useState<Wish[]>(wishes ?? []);
  const [from, setFrom] = useState(guest.name);
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "error" | "done">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (guest.status === "resolved") setFrom((prev) => (prev ? prev : guest.name));
  }, [guest.status, guest.name]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const author = from.trim();
    const text = message.trim();
    if (!author || !text) {
      setError("Please add your name and a few words.");
      return;
    }
    const blocked = checkWishAllowed(config);
    if (blocked) {
      setError(blocked);
      return;
    }
    setError("");
    setState("sending");
    try {
      const wish = await submitWish({
        guestId: guest.guest?.guestId ?? null,
        from: author,
        message: text.slice(0, config.maxLength),
        honeypot: trap,
      });
      setList((prev) => [wish, ...prev]);
      setMessage("");
      setState("done");
    } catch {
      setState("error");
      setError("Your wish wasn't sent — nothing was saved. Please tap again.");
    }
  }

  return (
    <Section
      id="wishes"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30"
    >
      <RibbonBow className="mx-auto h-12 w-[70%] text-accent-secondary" />
      <h2 className="mt-3 text-center font-script text-[2.3rem] text-accent-primary">
        {config.sectionLabel}
      </h2>
      {config.supportingLine ? (
        <p className="mt-2 text-center font-body text-label italic text-ink/70">
          {config.supportingLine}
        </p>
      ) : null}
      <Divider className="mx-auto mt-4 h-3 w-32 text-accent-secondary" />

      {list.length === 0 ? (
        <p className="mt-7 rounded-2xl border border-dashed border-accent-secondary/60 bg-surface/60 px-5 py-6 text-center font-body text-body italic text-ink/75">
          {config.emptyStateLine}
        </p>
      ) : (
        <ul className="mt-7 space-y-3">
          {list.map((w) => (
            <li
              key={w.id}
              className="rounded-2xl border border-accent-secondary/45 bg-surface/70 px-4 py-4"
            >
              <p className="font-body text-body italic leading-relaxed text-ink/85">
                &ldquo;{w.message}&rdquo;
              </p>
              <p className="mt-2 font-heading text-micro uppercase tracking-[0.2em] text-accent-primary/80">
                — {w.from}
              </p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-3">
        <label className="block">
          <span className="font-heading text-micro uppercase tracking-[0.22em] text-ink/60">
            Your name
          </span>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-1 w-full rounded-xl border border-input bg-surface/80 px-3 py-2 font-body text-body text-ink outline-none focus:border-accent-primary/70"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="font-heading text-micro uppercase tracking-[0.22em] text-ink/60">
            Your wish
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, config.maxLength))}
            rows={3}
            className="mt-1 w-full rounded-xl border border-input bg-surface/80 px-3 py-2 font-body text-body text-ink outline-none focus:border-accent-primary/70"
            placeholder={config.placeholder}
          />
          <span className="mt-1 block text-right font-heading text-micro text-ink/45">
            {config.maxLength - message.length} characters left
          </span>
        </label>

        {/* Honeypot: hidden from people, irresistible to bots. */}
        <input
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute size-0 opacity-0"
        />

        {error ? (
          <p role="alert" className="font-body text-label text-destructive">
            {error}
          </p>
        ) : null}
        {state === "done" && !error ? (
          <p role="status" className="font-body text-label text-success">
            Thank you — your wish is on the wall.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={state === "sending"}
          className="w-full rounded-full bg-accent-primary px-6 py-3 font-heading text-label uppercase tracking-[0.26em] text-primary-foreground disabled:opacity-70"
        >
          {state === "sending" ? "Sending…" : "Leave a wish"}
        </button>
      </form>
    </Section>
  );
}
