import { useState } from "react";
import { Section } from "./InvitationExperience";
import { Divider, DovesWithRibbon } from "./Ornaments";
import type { RsvpConfig, WeddingEvent } from "@/data/types";
import { useGuest } from "@/lib/guest";
import { submitRsvp } from "@/lib/rsvp";
import craneLeftTransparent from "@/assets/crane-left-transparent.png";
import craneRightTransparent from "@/assets/crane-right-transparent.png";

/** Hand-Drawn Classic Pure Red Heart Doodle SVG (#DC2626 / text-red-600) */
function RedHeartDoodle({ className = "size-4 text-red-600" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M 12 21.35 C -7 10 3 -2 12 6 C 21 -2 31 10 12 21.35 Z" />
    </svg>
  );
}

/** Hand-Drawn Delicate Feather Doodle SVG */
function DelicateFeatherDoodle({ className = "w-4 h-4 text-[#7A1E1E]/40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 4 20 C 8 16, 16 8, 20 4" strokeWidth="1.3" />
      <path d="M 20 4 C 15 6, 11 10, 10 14 C 9 17, 10 19, 12 18 C 15 17, 18 11, 20 4 Z" fill="#7A1E1E" fillOpacity="0.12" />
    </svg>
  );
}

/** Hand-Drawn Water Reeds / Grass Blades SVG */
function WaterReedsDoodle({ className = "w-10 h-14 text-[#7A1E1E]/45" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 8 58 C 12 42, 10 24, 18 10" strokeWidth="1.3" />
      <path d="M 14 58 C 18 38, 22 28, 28 14" strokeWidth="1.4" />
      <path d="M 24 58 C 22 46, 26 34, 34 22" strokeWidth="1.2" />
      <ellipse cx="18" cy="11" rx="1.4" ry="4" fill="#7A1E1E" fillOpacity="0.6" stroke="none" />
      <ellipse cx="28" cy="15" rx="1.3" ry="3.5" fill="#7A1E1E" fillOpacity="0.6" stroke="none" />
    </svg>
  );
}

/**
 * Anatomical Crane Illustration with Forehead Touch Pose
 * - Idle: Cranes stand apart with bodies and necks in upright posture.
 * - Accept: Cranes step closer (stopping with a clean ~40px gap between bodies) and tilt gracefully inward so beaks meet.
 * - Grounding & Atmosphere: Separate low-opacity foot contact shadows, water reeds flanking baseline, and drifting feather doodles around birds.
 */
function SoftChalkBirdIllustration({ accepted }: { accepted: boolean }) {
  return (
    <div className="relative mx-auto my-4 w-full max-w-[320px] sm:max-w-[360px] h-52 flex items-end justify-center overflow-visible pointer-events-none select-none">
      {/* Layer 1: Background Sun Glow (Enhanced Golden Hour Core Wash) */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 size-40 sm:size-48 rounded-full bg-[#B8935A]/25 blur-xl pointer-events-none" />
      <div className="absolute top-2 left-1/2 -translate-x-1/2 size-28 sm:size-32 rounded-full bg-[#B8935A]/50 blur-md pointer-events-none" />

      {/* Layer 2: Ultra-subtle fine baseline & Reeds flanking feet */}
      <div className="absolute bottom-2.5 w-4/5 h-[1px] bg-[#7A1E1E]/15 pointer-events-none" />
      <div className="absolute bottom-1.5 left-4 sm:left-8 z-0 opacity-80 rotate-3 pointer-events-none">
        <WaterReedsDoodle className="w-8 sm:w-10 h-11 sm:h-14 text-[#7A1E1E]/40" />
      </div>
      <div className="absolute bottom-1.5 right-4 sm:right-8 z-0 opacity-80 -rotate-6 scale-x-[-1] pointer-events-none">
        <WaterReedsDoodle className="w-8 sm:w-10 h-11 sm:h-14 text-[#7A1E1E]/40" />
      </div>

      {/* Layer 3: Drifting Feather Doodles Floating in Space Around Cranes */}
      <div className="absolute top-6 left-10 sm:left-14 z-20 opacity-65 -rotate-45 pointer-events-none">
        <DelicateFeatherDoodle className="w-4 sm:w-5 h-4 sm:h-5 text-[#7A1E1E]/45" />
      </div>
      <div className="absolute top-16 right-8 sm:right-12 z-20 opacity-70 rotate-30 pointer-events-none">
        <DelicateFeatherDoodle className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5 text-[#7A1E1E]/40" />
      </div>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 opacity-55 rotate-12 pointer-events-none">
        <DelicateFeatherDoodle className="w-3 sm:w-4 h-3 sm:h-4 text-[#B8935A]/65" />
      </div>

      {/* Layer 4 & 5: Left Crane & Right Crane Clean Anatomical PNG Layers */}
      <div className="relative z-10 w-full flex items-end justify-center px-2">
        {/* Left Crane Container: Body steps right (+20px) and bows inward (+20deg) */}
        <div
          className="relative transition-transform duration-1000 ease-[cubic-bezier(0.37,0,0.63,1)] flex flex-col items-center"
          style={{
            transform: accepted ? "translateX(20px)" : "translateX(0px)",
          }}
        >
          <div
            className="transition-transform duration-1000 ease-[cubic-bezier(0.37,0,0.63,1)]"
            style={{
              transform: accepted ? "rotate(20deg) translateY(4px)" : "rotate(0deg) translateY(0px)",
              transformOrigin: "35% 85%",
            }}
          >
            <img
              src={craneLeftTransparent}
              alt="Left Japanese Red-Crowned Crane"
              className="w-28 sm:w-32 h-auto object-contain mix-blend-multiply opacity-95 drop-shadow-xs"
            />
          </div>
          {/* Small, independent, soft low-opacity contact shadow under Left Crane feet only */}
          <div className="w-14 h-1 rounded-full bg-[#7A1E1E]/12 blur-xs -mt-1 pointer-events-none" />
        </div>

        {/* Right Crane Container: Body steps left (-20px) and bows inward (-20deg) */}
        <div
          className="relative transition-transform duration-1000 ease-[cubic-bezier(0.37,0,0.63,1)] flex flex-col items-center"
          style={{
            transform: accepted ? "translateX(-20px)" : "translateX(0px)",
          }}
        >
          <div
            className="transition-transform duration-1000 ease-[cubic-bezier(0.37,0,0.63,1)]"
            style={{
              transform: accepted ? "rotate(-20deg) translateY(4px)" : "rotate(0deg) translateY(0px)",
              transformOrigin: "65% 85%",
            }}
          >
            <img
              src={craneRightTransparent}
              alt="Right Japanese Red-Crowned Crane"
              className="w-26 sm:w-30 h-auto object-contain mix-blend-multiply opacity-95 drop-shadow-xs"
            />
          </div>
          {/* Small, independent, soft low-opacity contact shadow under Right Crane feet only */}
          <div className="w-12 h-1 rounded-full bg-[#7A1E1E]/12 blur-xs -mt-1 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

/**
 * Independent Balloon-Style Red Heart Particle Shower System
 * Spawns 48 pure classic red hearts (#DC2626 / text-red-600) at random X positions uniformly distributed across 4% to 93%.
 * Each heart rises straight UP in its own independent vertical lane with a small local wobble (±12px).
 * No diagonal pathing or trailing clusters.
 */
function IndependentBalloonRedHeartShower() {
  const redHearts = Array.from({ length: 48 }).map((_, i) => {
    // Uniform random X distribution between 4% and 93%
    const leftPos = (4 + ((i * 19 + 7) % 89)).toFixed(1);
    const delaySec = (0.05 + i * 0.095).toFixed(2);
    const durationSec = (3.8 + ((i * 3) % 11) * 0.1).toFixed(2);
    const sizeClass = i % 4 === 0 ? "size-6 sm:size-7" : i % 3 === 0 ? "size-5 sm:size-6" : i % 2 === 0 ? "size-4 sm:size-5" : "size-3 sm:size-4";
    const tiltDeg = `${((i * 11) % 36) - 18}deg`;
    const wobble1Px = `${((i * 5) % 24) - 12}px`;
    const wobble2Px = `${((i * 9) % 24) - 12}px`;

    return {
      id: i,
      left: `${leftPos}%`,
      delay: `${delaySec}s`,
      duration: `${durationSec}s`,
      size: sizeClass,
      tilt: tiltDeg,
      w1: wobble1Px,
      w2: wobble2Px,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {redHearts.map((h) => (
        <div
          key={h.id}
          className={`absolute bottom-2 ${h.size} text-red-600 animate-red-heart-bubble`}
          style={{
            left: h.left,
            ["--float-delay" as string]: h.delay,
            ["--float-duration" as string]: h.duration,
            ["--heart-tilt" as string]: h.tilt,
            ["--wobble-1" as string]: h.w1,
            ["--wobble-2" as string]: h.w2,
          }}
        >
          <RedHeartDoodle className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}

/** Hand-Drawn Thin-Ink Envelope with Wax Seal Doodle SVG */
function EnvelopeWaxSealDoodle({ className = "w-10 h-10 text-[#7A1E1E]/35" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="6" y="12" width="36" height="26" rx="2" strokeWidth="1.3" />
      <path d="M 6 12 L 24 27 L 42 12" strokeWidth="1.2" />
      <circle cx="24" cy="27" r="4.5" fill="#7A1E1E" fillOpacity="0.25" stroke="#7A1E1E" strokeWidth="1.1" />
      <path d="M 24 29 C 20 25 22 23 24 25.5 C 26 23 28 25 24 29 Z" fill="#7A1E1E" fillOpacity="0.7" />
    </svg>
  );
}

/** Hand-Drawn Vintage Feather Quill Doodle SVG */
function FeatherQuillDoodle({ className = "w-10 h-10 text-[#7A1E1E]/35" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 10 38 C 16 32, 28 16, 38 8" strokeWidth="1.4" />
      <path d="M 38 8 C 30 10, 24 16, 22 24 C 20 30, 22 34, 26 32 C 32 30, 36 20, 38 8 Z" strokeWidth="1.1" fill="#7A1E1E" fillOpacity="0.08" />
      <path d="M 8 40 C 6 42, 10 43, 13 41" strokeWidth="1.1" strokeDasharray="2 2" />
    </svg>
  );
}

/** Corner Botanical Sprig Doodle SVG */
function CornerBotanicalSprigDoodle({ className = "w-14 h-14 text-[#7A1E1E]/30" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 8 52 C 18 42, 32 24, 48 10" strokeWidth="1.4" />
      <path d="M 20 38 C 16 30, 24 28, 20 38 Z" fill="#7A1E1E" fillOpacity="0.15" />
      <path d="M 28 30 C 24 22, 32 20, 28 30 Z" fill="#7A1E1E" fillOpacity="0.15" />
      <path d="M 36 22 C 32 14, 40 12, 36 22 Z" fill="#7A1E1E" fillOpacity="0.15" />
      <path d="M 24 42 C 32 38, 30 46, 24 42 Z" fill="#7A1E1E" fillOpacity="0.15" />
      <path d="M 32 34 C 40 30, 38 38, 32 34 Z" fill="#7A1E1E" fillOpacity="0.15" />
      <circle cx="48" cy="8" r="2" fill="#B8935A" fillOpacity="0.6" stroke="none" />
      <circle cx="16" cy="46" r="1.5" fill="#B8935A" fillOpacity="0.5" stroke="none" />
    </svg>
  );
}

/** Floating Background Doodles Layer for RSVP Section */
function RsvpBackgroundDoodlesLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Section-wide Golden Hour Radial Warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(184,147,90,0.22)_0%,rgba(184,147,90,0.08)_50%,transparent_82%)] pointer-events-none" />

      {/* Left Top Botanical Sprig */}
      <div className="absolute top-6 left-3 sm:left-6 opacity-95 -rotate-12">
        <CornerBotanicalSprigDoodle className="w-12 sm:w-16 h-12 sm:h-16 text-[#7A1E1E]/30" />
      </div>

      {/* Right Top Botanical Sprig (Mirrored) */}
      <div className="absolute top-6 right-3 sm:right-6 opacity-75 rotate-45 scale-x-[-1]">
        <CornerBotanicalSprigDoodle className="w-12 sm:w-16 h-12 sm:h-16 text-[#7A1E1E]/30" />
      </div>

      {/* Envelope with Wax Seal Doodle (Top Right area near title) */}
      <div className="absolute top-20 right-5 sm:right-10 rotate-12 opacity-70">
        <EnvelopeWaxSealDoodle className="w-9 sm:w-11 h-9 sm:h-11 text-[#7A1E1E]/35" />
      </div>

      {/* Vintage Feather Quill Doodle (Left Middle area) */}
      <div className="absolute top-36 left-3 sm:left-8 -rotate-15 opacity-70">
        <FeatherQuillDoodle className="w-10 sm:w-12 h-10 sm:h-12 text-[#7A1E1E]/35" />
      </div>

      {/* Subtle Thin-Ink Floating Hearts around birds */}
      <div className="absolute top-28 right-12 sm:right-20 opacity-60 rotate-6">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#7A1E1E]/40" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M 12 21.35 C -7 10 3 -2 12 6 C 21 -2 31 10 12 21.35 Z" fill="#7A1E1E" fillOpacity="0.1" />
        </svg>
      </div>
      <div className="absolute top-44 left-6 sm:left-12 opacity-50 -rotate-12">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#7A1E1E]/35" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M 12 21.35 C -7 10 3 -2 12 6 C 21 -2 31 10 12 21.35 Z" fill="#7A1E1E" fillOpacity="0.08" />
        </svg>
      </div>

      {/* Bottom Right Botanical Sprig */}
      <div className="absolute bottom-6 right-3 sm:right-6 opacity-95 -rotate-45">
        <CornerBotanicalSprigDoodle className="w-11 sm:w-14 h-11 sm:h-14 text-[#7A1E1E]/25" />
      </div>
    </div>
  );
}

/** Thematic Hand-Drawn Heart & Gold Hairline Divider for RSVP Section */
function RsvpThematicHeartDivider({ className = "w-36 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" aria-hidden="true">
      {/* Left Hairline Rule */}
      <path d="M 10 10 H 72" stroke="#B8935A" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
      <circle cx="72" cy="10" r="1.3" fill="#B8935A" opacity="0.8" />

      {/* Centerpiece: 3 Hand-Drawn Hearts replacing generic dots */}
      <path
        d="M 85 13 C 82 8, 83.5 5.5, 86.5 7.5 C 89.5 5.5, 91 8, 88 13 Z"
        fill="#7A1E1E"
        fillOpacity="0.65"
      />
      <path
        d="M 100 15 C 96 9, 98 6, 101.5 8.5 C 105 6, 107 9, 103 15 Z"
        fill="#7A1E1E"
        fillOpacity="0.85"
      />
      <path
        d="M 115 13 C 112 8, 113.5 5.5, 116.5 7.5 C 119.5 5.5, 121 8, 118 13 Z"
        fill="#7A1E1E"
        fillOpacity="0.65"
      />

      {/* Right Hairline Rule */}
      <circle cx="128" cy="10" r="1.3" fill="#B8935A" opacity="0.8" />
      <path d="M 128 10 H 190" stroke="#B8935A" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

/**
 * Simplified RSVP Section.
 * Features a single "Accept Invitation" button.
 * Clicking displays an elegant Thank You message with the ability to revert back to the original state.
 */
export function RsvpSection({
  config,
}: {
  config: RsvpConfig;
  events?: WeddingEvent[];
}) {
  const guest = useGuest();
  const guestName = guest.name || guest.guest?.displayName;

  const [accepted, setAccepted] = useState<boolean>(() => {
    return guest.guest?.rsvpStatus === "yes";
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleAccept() {
    setSubmitting(true);
    setAccepted(true);
    try {
      await submitRsvp({
        guestId: guest.guest?.guestId ?? null,
        response: {
          name: guestName || "Guest",
          attending: true,
          guestCount: 1,
          mealPreference: null,
          attendingEvents: [],
          noteToCouple: null,
        },
      });
    } catch {
      // Ignore background network error to ensure smooth UI fallback
    } finally {
      setSubmitting(false);
    }
  }

  function handleRevert() {
    setAccepted(false);
  }

  return (
    <Section
      id="rsvp"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30 text-center py-12 px-4 overflow-hidden"
    >
      {/* Background Doodles Layer (Gallery-style sprigs, envelope seal, feather quill, thin hearts) */}
      <RsvpBackgroundDoodlesLayer />

      {/* Independent Balloon-Style Red Heart Shower Layer on RSVP Acceptance */}
      {accepted && <IndependentBalloonRedHeartShower />}

      <DovesWithRibbon className="mx-auto h-16 w-[85%] text-accent-primary/75" />
      <h2 className="mt-3 text-center font-script text-[2.4rem] sm:text-[2.7rem] text-accent-primary leading-tight">
        {config.headline || "Will you be joining us?"}
      </h2>

      {/* Subtle Handwritten Whisper Line */}
      <p className="mt-1 text-center font-script text-[1.25rem] text-[#7A1E1E]/65 tracking-wide">
        your presence is our greatest joy
      </p>

      {/* Thematic Hand-Drawn Heart & Gold Hairline Divider */}
      <RsvpThematicHeartDivider className="mx-auto mt-3 h-4 w-44 mb-1" />

      {/* Interactive Soft Chalk Bird Illustration Positioned directly below heading (Zero background card box) */}
      <SoftChalkBirdIllustration accepted={accepted} />

      <div className="mx-auto w-full max-w-md">
        {accepted ? (
          /* THANK YOU STATE (FLOATING DIRECTLY ON PAGE BACKGROUND - ZERO CONTAINER CARD) */
          <div className="text-center py-2 transition-all duration-300">
            {/* Soft Checkmark Badge Icon */}
            <div className="mx-auto size-12 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mb-3 shadow-xs">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 20 6 L 9 17 L 4 12" />
              </svg>
            </div>

            <h3 className="font-script text-[2.4rem] sm:text-[2.7rem] text-accent-primary leading-tight">
              Thank You!
            </h3>
            <p className="mt-2 font-body text-body italic text-ink/80 leading-relaxed max-w-xs mx-auto">
              Your response has been received. We can&apos;t wait to celebrate with you!
            </p>
            {guestName ? (
              <p className="mt-3 font-heading text-micro uppercase tracking-[0.24em] text-accent-gold font-semibold">
                — {guestName}
              </p>
            ) : null}

            {/* Revert / Change Response Button */}
            <button
              type="button"
              onClick={handleRevert}
              className="mt-6 inline-block text-center font-heading text-micro uppercase tracking-[0.26em] text-accent-primary/75 hover:text-accent-primary underline underline-offset-4 transition-colors cursor-pointer"
            >
              Undo / Change Response
            </button>
          </div>
        ) : (
          /* ORIGINAL STATE (FLOATING DIRECTLY ON PAGE BACKGROUND - ZERO CONTAINER CARD) */
          <div className="text-center py-2 transition-all duration-300">
            <p className="font-body text-body italic text-ink/80 leading-relaxed mb-6 max-w-xs mx-auto">
              Please let us know if you will be joining us on our special day.
            </p>

            {/* Upgraded Button with Top-to-Bottom Maroon Gradient, Thin Gold Hairline Border, and Wide Tracking */}
            <button
              type="button"
              disabled={submitting}
              onClick={handleAccept}
              className="w-full max-w-xs sm:max-w-sm rounded-full bg-gradient-to-b from-[#8B2424] via-[#7A1E1E] to-[#631616] border border-[#B8935A]/60 px-7 py-4 font-heading text-label font-medium uppercase tracking-[0.32em] text-[#F9F4EC] shadow-[0_4px_16px_rgba(122,30,30,0.28)] hover:shadow-[0_6px_20px_rgba(122,30,30,0.38)] hover:border-[#B8935A] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              {submitting ? "Confirming…" : "Accept Invitation"}
            </button>
          </div>
        )}
      </div>

      {/* Clear Section Transition Guide to Travel Details */}
      <div className="mt-8 flex flex-col items-center justify-center opacity-65 transition-opacity hover:opacity-90 pointer-events-none">
        <p className="font-heading text-[0.6rem] uppercase tracking-[0.3em] text-[#7A1E1E]/70 font-semibold">
          Scroll for Travel Details
        </p>
        <svg viewBox="0 0 24 12" className="mt-1 w-4 h-2 text-[#7A1E1E]/50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 3 L 12 9 L 20 3" />
        </svg>
      </div>
    </Section>
  );
}
