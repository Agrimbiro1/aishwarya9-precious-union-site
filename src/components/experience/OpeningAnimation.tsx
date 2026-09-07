import { useEffect, useRef, useState } from "react";
import { Hand, Volume2, VolumeX } from "lucide-react";
import type { OpeningData } from "@/data/types";
import { useGuest } from "@/lib/guest";

/**
 * PRD §Opening Animation — a tap/keyboard gate over a maroon curtain that
 * parts to reveal the invitation. Audio is muted by default and can only
 * start from a genuine user gesture (the tap itself).
 */
export function OpeningAnimation({
  data,
  onOpened,
}: {
  data: OpeningData;
  onOpened?: () => void;
}) {
  const guest = useGuest();
  const [phase, setPhase] = useState<"closed" | "opening" | "done">("closed");
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const names = data.coupleFullNames.filter(Boolean);
  const titleLine = names.length > 0 ? names.join(" & ") : "Our Wedding";

  useEffect(() => {
    if (phase !== "opening") return;
    const t = setTimeout(() => {
      setPhase("done");
      onOpened?.();
    }, 1700);
    return () => clearTimeout(t);
  }, [phase, onOpened]);

  const open = () => {
    if (phase !== "closed") return;
    // A real user gesture happened: it is now legal to start ambient audio.
    if (data.ambientAudioUrl && !data.audioDefaultMuted && audioRef.current) {
      audioRef.current.muted = false;
      setMuted(false);
      void audioRef.current.play().catch(() => setMuted(true));
    }
    setPhase("opening");
  };

  if (phase === "done") {
    return data.ambientAudioUrl ? (
      <AudioToggle
        muted={muted}
        onToggle={() => {
          const el = audioRef.current;
          if (!el) return;
          if (muted) {
            el.muted = false;
            void el.play().catch(() => undefined);
            setMuted(false);
          } else {
            el.muted = true;
            setMuted(true);
          }
        }}
        audioRef={audioRef}
        src={data.ambientAudioUrl}
      />
    ) : null;
  }

  const parted = phase === "opening";

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-hidden={parted}>
      {/* revealed backdrop */}
      <div className="absolute inset-0 bg-background" />

      {/* left / right curtains */}
      <Curtain side="left" parted={parted} />
      <Curtain side="right" parted={parted} />

      <button
        type="button"
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
        aria-label={`Open the wedding invitation of ${titleLine}`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center outline-none focus-visible:ring-2 focus-visible:ring-surface/70"
        style={{
          opacity: parted ? 0 : 1,
          transition: "opacity 500ms ease-out",
        }}
      >
        <span className="font-heading text-micro uppercase tracking-[0.34em] text-surface/70">
          {titleLine}
        </span>
        <span className="grid size-16 place-items-center rounded-full border border-surface/35 bg-surface/10">
          <Hand className="size-6 animate-pulse text-surface/80" />
        </span>
        <span className="font-heading text-label uppercase tracking-[0.28em] text-surface/70">
          Tap to continue
        </span>
        {guest.isPersonalized ? (
          <span className="font-body text-label text-surface/55">
            {guest.personalize("For {{guestName}}")}
          </span>
        ) : null}
      </button>

      {data.ambientAudioUrl ? (
        <audio ref={audioRef} src={data.ambientAudioUrl} loop muted preload="none" />
      ) : null}
    </div>
  );
}

function Curtain({ side, parted }: { side: "left" | "right"; parted: boolean }) {
  return (
    <div
      className="absolute top-0 h-full w-1/2"
      style={{
        [side]: 0,
        backgroundColor: "var(--accent-primary)",
        backgroundImage:
          "repeating-linear-gradient(96deg, transparent 0 14px, oklch(0.99 0.008 84 / 0.22) 14px 15px, transparent 15px 30px)",
        transform: parted
          ? `translateX(${side === "left" ? "-100%" : "100%"})`
          : "translateX(0)",
        transition: "transform 1.5s cubic-bezier(0.6, 0, 0.2, 1)",
        boxShadow: "0 0 60px oklch(0.2 0.06 30 / 0.55)",
      }}
    />
  );
}

function AudioToggle({
  muted,
  onToggle,
  audioRef,
  src,
}: {
  muted: boolean;
  onToggle: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  src: string;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-label={muted ? "Play background music" : "Mute background music"}
        className="fixed bottom-6 right-5 z-40 grid size-12 min-h-11 min-w-11 place-items-center rounded-full bg-accent-primary text-surface shadow-lg"
      >
        {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
      </button>
      <audio ref={audioRef} src={src} loop muted preload="none" />
    </>
  );
}
