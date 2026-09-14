import { useRef, useState } from "react";
import { Section } from "./InvitationExperience";
import type { Wish, WishesConfig } from "@/data/types";
import { useGuest } from "@/lib/guest";
import { submitWish } from "@/lib/wishes";
import wideDoodleFrameImg from "@/assets/wishing-wall-wide-doodle-frame.png";
import wideDoodleFrameWebp from "@/assets/wishing-wall-wide-doodle-frame.webp";
import phoneTexture from "@/assets/phone-texture.png.asset.json";
import { getResponsiveBackgroundImage } from "@/lib/image";

/** Rotation angles for pinned note cards (2.6° to 3.6° organic tilts) to create genuine wall collage feel */
const NOTE_ROTATION_ANGLES = [-2.8, 3.2, -3.6, 2.7, -3.1, 3.5, -2.6, 3.3, -3.4, 2.9];

/** Organic hand-trimmed paper corner radius variations for tactile card-stock feel */
const HAND_CUT_CORNER_VARIATIONS = [
  "rounded-[3px_8px_4px_6px]",
  "rounded-[7px_3px_6px_4px]",
  "rounded-[4px_7px_3px_8px]",
  "rounded-[6px_4px_8px_3px]",
];

/** Hand-Drawn Calligraphic Swash Opening Quote Mark */
function HandDrawnOpenQuote({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`inline-block shrink-0 ${className}`} aria-hidden="true">
      <path d="M 4.2 3.5 C 2.2 3.5, 1.2 5.2, 1.2 7.2 C 1.2 9.4, 2.8 11, 4.2 11 C 5.5 11, 6.4 10, 6.4 8.7 C 6.4 7.3, 5.3 6.6, 4.3 6.6 C 3.8 6.6, 3.5 6.8, 3.3 7 C 3.5 5.3, 4.8 4.2, 6.2 3.6 L 4.2 3.5 Z" />
      <path d="M 11.8 3.5 C 9.8 3.5, 8.8 5.2, 8.8 7.2 C 8.8 9.4, 10.4 11, 11.8 11 C 13.1 11, 14 10, 14 8.7 C 14 7.3, 12.9 6.6, 11.9 6.6 C 11.4 6.6, 11.1 6.8, 10.9 7 C 11.1 5.3, 12.4 4.2, 13.8 3.6 L 11.8 3.5 Z" />
    </svg>
  );
}

/** Hand-Drawn Calligraphic Swash Closing Quote Mark */
function HandDrawnCloseQuote({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`inline-block shrink-0 ${className}`} aria-hidden="true">
      <path d="M 4.2 12.5 C 6.2 12.5, 7.2 10.8, 7.2 8.8 C 7.2 6.6, 5.6 5, 4.2 5 C 2.9 5, 2 6, 2 7.3 C 2 8.7, 3.1 9.4, 4.1 9.4 C 4.6 9.4, 4.9 9.2, 5.1 9 C 4.9 10.7, 3.6 11.8, 2.2 12.4 L 4.2 12.5 Z" />
      <path d="M 11.8 12.5 C 13.8 12.5, 14.8 10.8, 14.8 8.8 C 14.8 6.6, 13.2 5, 11.8 5 C 10.5 5, 9.6 6, 9.6 7.3 C 9.6 8.7, 10.7 9.4, 11.7 9.4 C 12.2 9.4, 12.5 9.2, 12.7 9 C 12.5 10.7, 11.2 11.8, 9.8 12.4 L 11.8 12.5 Z" />
    </svg>
  );
}

/** Hand-Drawn Signature Underline Squiggle */
function SignatureSquiggle({ className = "w-16 h-2" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 8" fill="none" className={`block ml-auto ${className}`} aria-hidden="true">
      <path
        d="M 4 5.5 C 14 2, 28 7, 44 3.5 C 52 1.8, 62 5.8, 68 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="69" cy="4" r="0.9" fill="currentColor" />
    </svg>
  );
}

/**
 * Reusable Pinned Note Card Component with hand-drawn pushpin icon & organic rotation
 */
function WishNoteCard({
  wish,
  index,
}: {
  wish: Wish;
  index: number;
}) {
  const angle = NOTE_ROTATION_ANGLES[index % NOTE_ROTATION_ANGLES.length];
  const corners = HAND_CUT_CORNER_VARIATIONS[index % HAND_CUT_CORNER_VARIATIONS.length];

  return (
    <div
      className={`relative mx-auto w-full max-w-[340px] sm:max-w-[360px] ${corners} border border-[#D8C2A7] bg-[#F7F0E3] p-4 shadow-[2.5px_3.5px_0px_rgba(122,30,30,0.18)] transition-all duration-300 [transform:rotate(var(--note-angle))] hover:[transform:rotate(0deg)_scale(1.025)] hover:shadow-[4px_5px_0px_rgba(122,30,30,0.28)]`}
      style={{
        ["--note-angle" as string]: `${angle}deg`,
        ...getResponsiveBackgroundImage(
          phoneTexture.webpUrl || phoneTexture.url.replace(/\.(png|jpg|jpeg)$/, ".webp"),
          phoneTexture.url,
          "image/png"
        ),
        backgroundSize: "240px auto",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Metallic Gold & Maroon Pushpin Motif at Top Center */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <svg viewBox="0 0 16 16" className="size-4 drop-shadow-xs" fill="none">
          <circle cx="8" cy="5" r="3.5" fill="#C89B48" stroke="#7A1E1E" strokeWidth="1.2" />
          <path d="M 8 8.5 V 15" stroke="#7A1E1E" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>

      <p className="pt-1 font-body text-body italic leading-relaxed text-ink/90">
        <HandDrawnOpenQuote className="size-3.5 text-accent-primary/60 mr-1.5 inline -translate-y-0.5" />
        {wish.message}
        <HandDrawnCloseQuote className="size-3.5 text-accent-primary/60 ml-1.5 inline translate-y-0.5" />
      </p>

      {/* Hand-Drawn Signature Divider / Squiggle line right above attribution name */}
      <div className="mt-3 flex flex-col items-end">
        <SignatureSquiggle className="w-16 h-2 text-accent-gold/80 mb-1" />
        <p className="font-heading text-[0.78rem] uppercase tracking-[0.24em] font-bold text-accent-gold drop-shadow-xs text-right">
          <span className="text-accent-primary/60 font-semibold mr-1">—</span>
          {wish.from}
        </p>
      </div>
    </div>
  );
}

/**
 * Wishing wall section framed by a wide, airy double-line ribbon border with cute hand-drawn doodles.
 * Features fixed-frame internal scroll for wishes inside the spacious window, and
 * the submission form positioned cleanly below the frame.
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
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "error" | "done">("idle");
  const [error, setError] = useState("");

  const wallScrollRef = useRef<HTMLDivElement>(null);

  // Guest name comes by default from backend context
  const guestName = guest.name || guest.guest?.displayName || "Dear Guest";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = message.trim();
    if (!text) {
      setError("Please write a few words for your blessing.");
      return;
    }
    setError("");
    setState("sending");
    try {
      const wish = await submitWish({
        guestId: guest.guest?.guestId ?? null,
        from: guestName,
        message: text.slice(0, config.maxLength),
        honeypot: trap,
      });
      setList((prev) => [wish, ...prev]);
      setMessage("");
      setState("done");

      // Auto-scroll wishing wall container to top so newly pinned wish is immediately visible
      setTimeout(() => {
        if (wallScrollRef.current) {
          wallScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
    } catch {
      setState("error");
      setError("Your wish wasn't sent — nothing was saved. Please tap again.");
    }
  }

  return (
    <Section
      id="wishes"
      className="relative flex min-h-full flex-col justify-center py-12 sm:py-16 border-t border-accent-secondary/30 px-4"
    >
      {/* 1. TITLE & SUPPORTING TAGLINE — Generous vertical margin above top border */}
      <div className="mb-10 sm:mb-12 text-center">
        <h2 className="font-script text-[2.8rem] sm:text-[3.2rem] text-accent-primary leading-tight">
          {config.sectionLabel}
        </h2>
        {config.supportingLine ? (
          <p className="mt-2.5 font-body text-label italic text-ink/75 max-w-sm mx-auto">
            {config.supportingLine}
          </p>
        ) : null}
      </div>

      {/* 2. TALL VERTICAL RECTANGLE DOODLE BORDER FRAME */}
      <div className="relative mx-auto w-full max-w-lg min-h-[640px] sm:min-h-[680px]">
        <picture className="absolute inset-0 size-full pointer-events-none opacity-95 z-10">
          <source srcSet={wideDoodleFrameWebp} type="image/webp" />
          <img
            src={wideDoodleFrameImg}
            alt=""
            aria-hidden="true"
            className="size-full object-fill"
          />
        </picture>

        {/* Content Window sitting comfortably with spacious top, bottom, and card-to-card breathing room */}
        <div className="relative z-20 flex flex-col justify-between h-full pt-20 sm:pt-24 pb-10 sm:pb-12 px-6 sm:px-12">
          {/* Header indicator inside top frame opening (comfortably below top bow doodle) */}
          <div className="flex items-center justify-between border-b border-accent-secondary/25 pb-2.5 mb-4 px-2">
            <span className="rounded-full bg-accent-secondary/20 px-3 py-1 font-heading text-micro text-accent-primary font-semibold">
              {list.length} {list.length === 1 ? "Wish" : "Wishes"}
            </span>
          </div>

          {/* INTERNALLY SCROLLABLE PINNED NOTES AREA — Taller capacity showing ~2.5 cards comfortably */}
          <div
            ref={wallScrollRef}
            className="wishing-wall-scroll max-h-[480px] sm:max-h-[520px] overflow-y-auto space-y-6 sm:space-y-7 py-3 px-2"
          >
            {list.length === 0 ? (
              <p className="py-16 text-center font-body text-body italic text-ink/75">
                {config.emptyStateLine}
              </p>
            ) : (
              list.map((w, idx) => (
                <WishNoteCard key={w.id} wish={w} index={idx} />
              ))
            )}
          </div>
        </div>
      </div>

      {/* 3. SUBMISSION FORM — Positioned cleanly BELOW/OUTSIDE the frame */}
      <form onSubmit={handleSubmit} className="mt-10 sm:mt-12 space-y-4 max-w-md mx-auto w-full px-2">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5 font-heading text-micro uppercase tracking-[0.22em] text-accent-primary font-semibold">
            {/* Hand-Drawn Quill Pen Doodle Icon */}
            <svg viewBox="0 0 20 20" className="size-4 text-accent-primary fill-none stroke-current" strokeWidth="1.5">
              <path d="M 17 3 C 12 4, 7 8, 4 14 C 3 16, 3 17, 3 17 L 5 17 C 6 15, 8 12, 12 9 C 14 7.5, 17 3, 17 3 Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 3 17 L 1 19 M 5 17 L 3 19 M 7 13 L 5 15" strokeLinecap="round" />
            </svg>
            <span>Your Blessing</span>
          </div>
          <span className="font-body text-label italic text-ink/75">
            Posting as <strong className="font-heading text-[0.78rem] uppercase tracking-[0.20em] font-bold text-accent-gold pl-0.5">{guestName}</strong>
          </span>
        </div>

        {/* Textarea styled like a small hand-crafted framed note card */}
        <div
          className="relative rounded-[4px_8px_3px_6px] border-2 border-dashed border-accent-primary/45 bg-[#F7F0E3] p-1 shadow-[2px_2.5px_0px_rgba(122,30,30,0.14)] transition-colors focus-within:border-accent-primary focus-within:bg-[#FAF4EA]"
          style={{
            ...getResponsiveBackgroundImage(
              phoneTexture.webpUrl || phoneTexture.url.replace(/\.(png|jpg|jpeg)$/, ".webp"),
              phoneTexture.url,
              "image/png"
            ),
            backgroundSize: "240px auto",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Hand-Drawn Ink Corner Flourishes */}
          <div className="absolute top-1.5 left-1.5 size-2 border-t border-l border-accent-primary/60 pointer-events-none" />
          <div className="absolute top-1.5 right-1.5 size-2 border-t border-r border-accent-primary/60 pointer-events-none" />
          <div className="absolute bottom-1.5 left-1.5 size-2 border-b border-l border-accent-primary/60 pointer-events-none" />
          <div className="absolute bottom-1.5 right-1.5 size-2 border-b border-r border-accent-primary/60 pointer-events-none" />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, config.maxLength))}
            rows={3}
            className="w-full bg-transparent px-3.5 py-2.5 font-body text-body text-ink outline-none placeholder:text-ink/40 resize-none"
            placeholder={config.placeholder}
          />
        </div>
        <span className="block text-right font-heading text-micro text-ink/45">
          {config.maxLength - message.length} characters left
        </span>

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
          <p role="alert" className="font-body text-label text-destructive text-center">
            {error}
          </p>
        ) : null}
        {state === "done" && !error ? (
          <p role="status" className="font-body text-label text-success text-center">
            Thank you — your wish is pinned to the wall.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={state === "sending"}
          className="w-full rounded-full bg-accent-primary px-6 py-3.5 font-heading text-label uppercase tracking-[0.26em] text-primary-foreground shadow-[2px_3px_0px_rgba(122,30,30,0.22)] transition-all hover:bg-accent-primary/95 hover:shadow-[3px_4px_0px_rgba(122,30,30,0.3)] disabled:opacity-70 active:scale-[0.99]"
        >
          {state === "sending" ? "Sending…" : "Leave a wish"}
        </button>
      </form>
    </Section>
  );
}





