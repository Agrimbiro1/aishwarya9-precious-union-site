import { useEffect, useRef, useState } from "react";
import { Hand, Volume2, VolumeX } from "lucide-react";
import type { OpeningData, PreviewData } from "@/data/types";
import { useGuest } from "@/lib/guest";
import { CurtainPanel, Tieback, Valance } from "./Curtains";
import { InvitationPreviewCard } from "./InvitationPreviewCard";

/**
 * PRD §Opening Animation — theater curtains part on a tap/keypress and reveal the
 * Invitation Preview Card, which is the gate to the site. Scroll stays locked
 * until "Open Invitation" is pressed (the parent owns that lock).
 * Audio is muted by default and only starts from a genuine user gesture.
 */
export function OpeningAnimation({
  data,
  preview,
  onOpened,
}: {
  data: OpeningData;
  preview: PreviewData;
  onOpened?: () => void;
}) {
  const guest = useGuest();
  const [phase, setPhase] = useState<"closed" | "parting" | "gate" | "leaving" | "done">("closed");
  const [cardIn, setCardIn] = useState(false);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const names = data.coupleFullNames.filter(Boolean);
  const titleLine = names.length > 0 ? names.join(" & ") : "Our Wedding";

  useEffect(() => {
    if (phase !== "parting") return;
    // content fades in 200ms after the curtains begin moving — sequential reveal
    const a = setTimeout(() => setCardIn(true), 200);
    const b = setTimeout(() => setPhase("gate"), 1400);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const t = setTimeout(() => setPhase("done"), 650);
    return () => clearTimeout(t);
  }, [phase]);

  const part = () => {
    if (phase !== "closed") return;
    if (data.ambientAudioUrl && !data.audioDefaultMuted && audioRef.current) {
      audioRef.current.muted = false;
      setMuted(false);
      void audioRef.current.play().catch(() => setMuted(true));
    }
    setPhase("parting");
  };

  const openSite = () => {
    if (phase !== "gate") return;
    setPhase("leaving");
    onOpened?.();
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

  const parted = phase !== "closed";
  const leaving = phase === "leaving";

  return (
    <div className="absolute inset-0 z-50 overflow-hidden">
      {/* revealed backdrop */}
      <div className="absolute inset-0 bg-background" />

      <InvitationPreviewCard
        data={preview}
        visible={cardIn}
        leaving={leaving}
        onOpen={openSite}
      />

      {/* curtain panels */}
      <Panel side="left" parted={parted} />
      <Panel side="right" parted={parted} />

      {/* valance swag across the top, lifts gently with the panels */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-24"
        style={{
          transform: parted ? "translateY(-105%)" : "translateY(0)",
          transition: "transform 1.2s cubic-bezier(0.45, 0.05, 0.2, 1)",
          filter: "drop-shadow(0 18px 26px oklch(0.2 0.06 30 / 0.5))",
        }}
      >
        <Valance />
      </div>

      {phase === "closed" ? (
        <button
          type="button"
          onClick={part}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              part();
            }
          }}
          aria-label={`Open the wedding invitation of ${titleLine}`}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center gap-4 px-8 text-center outline-none focus-visible:ring-2 focus-visible:ring-surface/70"
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
      ) : null}

      {data.ambientAudioUrl ? (
        <audio ref={audioRef} src={data.ambientAudioUrl} loop muted preload="none" />
      ) : null}
    </div>
  );
}

function Panel({ side, parted }: { side: "left" | "right"; parted: boolean }) {
  const sway = side === "left" ? -2 : 2;
  return (
    <div
      className="pointer-events-none absolute top-0 z-20 h-full w-[52%]"
      style={{
        [side]: 0,
        transformOrigin: side === "left" ? "top left" : "top right",
        transform: parted
          ? `translateX(${side === "left" ? "-104%" : "104%"}) rotate(${sway}deg) skewY(${-sway / 2}deg)`
          : "translateX(0) rotate(0deg)",
        transition: "transform 1.25s cubic-bezier(0.42, 0.02, 0.25, 1)",
        filter: `drop-shadow(${side === "left" ? "14px" : "-14px"} 0 34px oklch(0.2 0.06 30 / 0.55))`,
      }}
    >
      <CurtainPanel side={side} />
      <div
        className="absolute bottom-16 h-24 w-10"
        style={{ [side]: 6 }}
      >
        <Tieback side={side} />
      </div>
    </div>
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
        className="absolute bottom-6 right-5 z-40 grid size-12 min-h-11 min-w-11 place-items-center rounded-full bg-accent-primary text-surface shadow-lg"
      >
        {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
      </button>
      <audio ref={audioRef} src={src} loop muted preload="none" />
    </>
  );
}
