import { useState, useEffect, useRef } from "react";
import { Section } from "./InvitationExperience";
import type { FooterData } from "@/data/types";
import dovesRibbonImg from "@/assets/doves-ribbon-countdown.png";

/**
 * Footer — closing line, love birds holding ribbon illustration, monogram crest, hashtag ribbon tag, share action, and final closing flourish.
 * The share URL is rebuilt without the personal guest token (?g=…) so nobody forwards someone else's personalised invitation.
 */
function shareableUrl(): string {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  url.searchParams.delete("g");
  url.hash = "";
  return url.toString();
}

/**
 * Celebratory Dense Hearts & Gold Sparkles Shower Burst Effect
 * Triggers EVERY TIME the guest scrolls into the Footer section.
 */
function ClosingSparkleBurst() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [burstKey, setBurstKey] = useState(1);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsActive(true);
          setBurstKey((prev) => prev + 1);
        } else {
          setIsActive(false);
        }
      },
      { threshold: 0.05 }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  // 38 Dense Floating Hearts & Metallic Gold Sparkles in Staggered Waves
  const sparkles = [
    // Wave 1 — Initial Burst
    { left: "5%", delay: "0s", duration: "3.8s", size: "text-sm", char: "♥", color: "text-[#7A1E1E]/80", sway: "-16px" },
    { left: "10%", delay: "0.2s", duration: "4.2s", size: "text-base", char: "♥", color: "text-[#C98A8A]", sway: "20px" },
    { left: "15%", delay: "0.5s", duration: "3.4s", size: "text-xs", char: "✦", color: "text-[#C89B48]", sway: "-10px" },
    { left: "20%", delay: "0.1s", duration: "4.0s", size: "text-lg", char: "♥", color: "text-[#7A1E1E]", sway: "-24px" },
    { left: "25%", delay: "0.7s", duration: "4.4s", size: "text-xs", char: "♥", color: "text-[#C98A8A]/90", sway: "18px" },
    { left: "30%", delay: "0.3s", duration: "3.8s", size: "text-sm", char: "✧", color: "text-[#B8935A]", sway: "12px" },
    { left: "35%", delay: "0.9s", duration: "4.7s", size: "text-xl", char: "♥", color: "text-[#7A1E1E]/85", sway: "-20px" },
    { left: "40%", delay: "0.4s", duration: "3.5s", size: "text-xs", char: "♥", color: "text-[#C89B48]", sway: "15px" },
    { left: "45%", delay: "0.0s", duration: "4.1s", size: "text-base", char: "♥", color: "text-[#7A1E1E]", sway: "-14px" },
    { left: "50%", delay: "0.6s", duration: "4.3s", size: "text-sm", char: "✦", color: "text-[#C89B48]", sway: "22px" },
    { left: "55%", delay: "0.2s", duration: "3.9s", size: "text-lg", char: "♥", color: "text-[#C98A8A]", sway: "-18px" },
    { left: "60%", delay: "0.8s", duration: "4.6s", size: "text-xs", char: "♥", color: "text-[#7A1E1E]/80", sway: "16px" },
    { left: "65%", delay: "0.35s", duration: "3.6s", size: "text-base", char: "✧", color: "text-[#C89B48]", sway: "-22px" },
    { left: "70%", delay: "1.0s", duration: "4.8s", size: "text-xl", char: "♥", color: "text-[#7A1E1E]", sway: "26px" },
    { left: "75%", delay: "0.15s", duration: "3.8s", size: "text-sm", char: "♥", color: "text-[#C98A8A]/95", sway: "-12px" },
    { left: "80%", delay: "0.65s", duration: "4.2s", size: "text-xs", char: "✦", color: "text-[#B8935A]", sway: "14px" },
    { left: "85%", delay: "0.25s", duration: "4.0s", size: "text-lg", char: "♥", color: "text-[#7A1E1E]/90", sway: "-26px" },
    { left: "90%", delay: "0.85s", duration: "4.5s", size: "text-sm", char: "♥", color: "text-[#C89B48]", sway: "18px" },
    { left: "95%", delay: "0.45s", duration: "3.7s", size: "text-xs", char: "♥", color: "text-[#7A1E1E]/75", sway: "-15px" },

    // Wave 2 — Staggered Floating Hearts Shower
    { left: "8%", delay: "1.1s", duration: "4.4s", size: "text-base", char: "♥", color: "text-[#7A1E1E]", sway: "16px" },
    { left: "18%", delay: "1.4s", duration: "4.1s", size: "text-xs", char: "♥", color: "text-[#C89B48]", sway: "-18px" },
    { left: "28%", delay: "1.2s", duration: "4.7s", size: "text-lg", char: "♥", color: "text-[#C98A8A]", sway: "22px" },
    { left: "38%", delay: "1.6s", duration: "3.9s", size: "text-sm", char: "✦", color: "text-[#C89B48]", sway: "-14px" },
    { left: "48%", delay: "1.3s", duration: "4.5s", size: "text-xl", char: "♥", color: "text-[#7A1E1E]/90", sway: "25px" },
    { left: "58%", delay: "1.7s", duration: "4.2s", size: "text-xs", char: "♥", color: "text-[#C98A8A]", sway: "-20px" },
    { left: "68%", delay: "1.15s", duration: "4.0s", size: "text-base", char: "♥", color: "text-[#7A1E1E]", sway: "15px" },
    { left: "78%", delay: "1.5s", duration: "4.6s", size: "text-sm", char: "✧", color: "text-[#C89B48]", sway: "-22px" },
    { left: "88%", delay: "1.35s", duration: "4.3s", size: "text-lg", char: "♥", color: "text-[#7A1E1E]/85", sway: "19px" },
    { left: "93%", delay: "1.8s", duration: "3.8s", size: "text-xs", char: "♥", color: "text-[#C89B48]", sway: "-10px" },

    // Wave 3 — High Density Grand Finale Hearts
    { left: "14%", delay: "2.0s", duration: "4.2s", size: "text-sm", char: "♥", color: "text-[#7A1E1E]/80", sway: "14px" },
    { left: "32%", delay: "2.2s", duration: "4.8s", size: "text-lg", char: "♥", color: "text-[#C98A8A]", sway: "-26px" },
    { left: "52%", delay: "1.9s", duration: "4.0s", size: "text-base", char: "♥", color: "text-[#7A1E1E]", sway: "18px" },
    { left: "72%", delay: "2.1s", duration: "4.5s", size: "text-xl", char: "♥", color: "text-[#C89B48]", sway: "-20px" },
    { left: "86%", delay: "2.3s", duration: "4.1s", size: "text-sm", char: "♥", color: "text-[#7A1E1E]/90", sway: "16px" },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-20"
      aria-hidden="true"
    >
      {isActive && (
        <div key={burstKey} className="absolute inset-0 pointer-events-none">
          {sparkles.map((sp, i) => (
            <span
              key={i}
              className={`absolute bottom-4 font-serif ${sp.size} ${sp.color} animate-footer-sparkle select-none opacity-0`}
              style={{
                left: sp.left,
                animationDelay: sp.delay,
                animationDuration: sp.duration,
                ["--sparkle-delay" as string]: sp.delay,
                ["--sparkle-duration" as string]: sp.duration,
                ["--sparkle-sway" as string]: sp.sway,
              }}
            >
              {sp.char}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   SCATTERED CORNER & MARGIN DOODLES (Subtle Low-Opacity Organic Ink Strokes)
   ========================================================================= */

/** 1. Simple Clean Heart Outline Doodle */
function HandDrawnCleanHeartDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      <path
        d="M 30 18 C 24 6, 8 12, 12 28 C 16 40, 30 50, 30 52 C 30 50, 44 40, 48 28 C 52 12, 36 6, 30 18 Z"
        stroke="#7A1E1E"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** 2. Small Hand-Drawn Vintage Camera Doodle with Flash Burst */
function HandDrawnCameraDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 85 70" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      <path d="M 22 8 L 18 2 M 28 6 L 28 0 M 34 8 L 38 2" stroke="#C89B48" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="12" y="20" width="58" height="38" rx="7" stroke="#7A1E1E" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 28 20 L 32 14 L 48 14 L 52 20" stroke="#7A1E1E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="41" cy="39" r="13" stroke="#7A1E1E" strokeWidth="2.2" fill="none" />
      <circle cx="41" cy="39" r="6.5" stroke="#7A1E1E" strokeWidth="1.6" fill="none" />
      <circle cx="60" cy="28" r="2" fill="#C89B48" />
    </svg>
  );
}

/** 3. Cozy Hand-Drawn Coffee Cup Doodle with Hand-Inked Steam Swirls & Gold Sparkles */
function HandDrawnCoffeeCupDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 95" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      {/* 3 Hand-Drawn Rising Steam Swirls */}
      <path d="M 32 26 C 26 18, 35 12, 29 4 C 27 1, 23 3, 27 7" stroke="#7A1E1E" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <path d="M 45 24 C 38 15, 49 9, 43 1 C 41 -2, 37 0, 41 4" stroke="#7A1E1E" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <path d="M 58 26 C 52 18, 61 12, 55 4 C 53 1, 49 3, 53 7" stroke="#7A1E1E" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      
      {/* Delicate Gold Sparkle Dots in Steam */}
      <circle cx="37" cy="14" r="1.3" fill="#C89B48" opacity="0.9" />
      <circle cx="50" cy="11" r="1.3" fill="#C89B48" opacity="0.9" />

      {/* Coffee Mug Body */}
      <path d="M 24 30 L 66 30 C 65 54, 58 68, 45 68 C 32 68, 25 54, 24 30 Z" stroke="#7A1E1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Rim top curve */}
      <path d="M 22 30 C 22 26, 68 26, 68 30 C 68 34, 22 34, 22 30 Z" stroke="#7A1E1E" strokeWidth="1.8" fill="none" />
      {/* Mug Handle */}
      <path d="M 65 34 C 82 34, 80 56, 62 56" stroke="#7A1E1E" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Saucer plate */}
      <path d="M 16 72 C 32 76, 58 76, 74 72" stroke="#7A1E1E" strokeWidth="2.2" strokeLinecap="round" />
      {/* Little Foil Gold Heart Accent on Mug Body */}
      <path d="M 45 44 C 42 39, 38 41, 45 50 C 52 41, 48 39, 45 44 Z" fill="#C89B48" opacity="0.9" />
    </svg>
  );
}

/** 4. Hand-Drawn Train & Travel Ticket Doodle */
function HandDrawnTrainTicketDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 75" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      <path
        d="M 12 18 C 12 18, 22 18, 30 18 C 30 22, 34 25, 38 22 C 42 18, 76 18, 76 18 C 76 30, 76 45, 76 56 C 76 56, 42 56, 38 52 C 34 49, 30 52, 30 56 C 22 56, 12 56, 12 56 Z"
        stroke="#7A1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="34" y1="20" x2="34" y2="54" stroke="#7A1E1E" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.8" />
      <path d="M 44 42 L 68 42 L 68 34 L 60 34 L 60 28 L 50 28 L 50 34 L 44 34 Z" stroke="#7A1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="48" cy="45" r="2.2" stroke="#7A1E1E" strokeWidth="1.4" />
      <circle cx="56" cy="45" r="2.2" stroke="#7A1E1E" strokeWidth="1.4" />
      <circle cx="64" cy="45" r="2.2" stroke="#7A1E1E" strokeWidth="1.4" />
      <path d="M 47 26 C 44 22, 49 18, 46 14" stroke="#C89B48" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
      <path d="M 22 34 L 23 37 L 26 38 L 23 39 L 22 42 L 21 39 L 18 38 L 21 37 Z" fill="#C89B48" opacity="0.9" />
    </svg>
  );
}

/**
 * Hand-Crafted Calligraphic Ribbon Tag Banner for the Wedding Hashtag
 * Outline-based design matching the site's thin hairline aesthetic (no heavy solid fill)
 */
function HashtagRibbonTag({ hashtag }: { hashtag: string }) {
  return (
    <div className="inline-flex items-center justify-center relative group cursor-pointer select-none">
      <div className="relative px-6 py-2.5 flex items-center justify-center">
        {/* SVG Ribbon Hairline Outline Frame */}
        <svg
          className="absolute inset-0 size-full transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(122,30,30,0.08)]"
          viewBox="0 0 240 44"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Outer Swallowtail Thin Maroon Ink Hairline Outline */}
          <path
            d="M 16 6 L 224 6 L 214 22 L 224 38 L 16 38 L 26 22 Z"
            fill="#FAF5EE"
            fillOpacity="0.25"
            stroke="#7A1E1E"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeLinejoin="round"
            className="group-hover:stroke-opacity-85 transition-opacity"
          />
          {/* Inner Micro-Dashed Foil Gold Accent Line */}
          <path
            d="M 22 10.5 L 218 10.5 M 22 33.5 L 218 33.5"
            stroke="#C89B48"
            strokeWidth="0.9"
            strokeDasharray="2.5 2"
            strokeOpacity="0.75"
          />
        </svg>

        {/* Hashtag Text in Bold Maroon Tracked Caps with Side Micro Stars */}
        <div className="relative z-10 flex items-center gap-2.5 font-heading text-[0.78rem] sm:text-[0.85rem] uppercase tracking-[0.28em] text-[#7A1E1E] font-semibold pl-[0.28em]">
          <span className="text-[#C89B48] text-xs">✦</span>
          <span>{hashtag}</span>
          <span className="text-[#C89B48] text-xs">✦</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Bespoke Hand-Drawn Share Icon SVG
 */
function HandDrawnShareIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Hand-sketched Nodes with organic curve feel */}
      <circle cx="17.5" cy="5" r="2.5" strokeWidth="1.4" />
      <circle cx="6" cy="12" r="2.5" strokeWidth="1.4" />
      <circle cx="17.5" cy="19" r="2.5" strokeWidth="1.4" />
      {/* Hand-drawn curved connecting lines */}
      <path d="M 8.3 10.8 Q 12.8 8.2 15.2 6.3" strokeWidth="1.3" />
      <path d="M 8.3 13.2 Q 12.8 15.8 15.2 17.7" strokeWidth="1.3" />
    </svg>
  );
}

/**
 * Bespoke Hand-Drawn Heart & Floral Bud Divider Ornament for Footer
 */
function FooterDividerOrnament() {
  return (
    <div className="my-8 sm:my-11 flex items-center justify-center gap-3 text-[#C89B48] select-none" aria-hidden="true">
      <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#C89B48]/70 to-[#C89B48]" />
      <span className="text-[0.65rem] text-[#C89B48]/80">✦</span>
      <svg className="w-4 h-4 text-[#C89B48] filter drop-shadow-[0_1px_2px_rgba(122,30,30,0.15)]" viewBox="0 0 24 24" fill="none">
        <path
          d="M 12 20.5 C 12 20.5 4.5 14 4.5 8.5 C 4.5 5.2 7 3 9.8 3 C 11.4 3 12.8 4 13.5 5 C 14.2 4 15.6 3 17.2 3 C 20 3 22.5 5.2 22.5 8.5 C 22.5 14 15 20.5 12 20.5 Z"
          fill="#C89B48"
          fillOpacity="0.4"
          stroke="#7A1E1E"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[0.65rem] text-[#C89B48]/80">✦</span>
      <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#C89B48]/70 to-[#C89B48]" />
    </div>
  );
}

/**
 * Final Calligraphic Closing Ornament — Visual full-stop for the bottom of the invitation
 */
function FinalClosingFlourish() {
  return (
    <div className="mt-7 flex items-center justify-center gap-2.5 text-[#C89B48]/85 select-none pb-1" aria-hidden="true">
      <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C89B48]/65" />
      <svg viewBox="0 0 24 14" className="w-5 h-3 text-[#B8935A] shrink-0" fill="none">
        {/* Calligraphic Heart / Petal End Flourish Motif */}
        <path
          d="M 12 11 C 12 11 6 7 6 4 C 6 2.2 7.5 1.5 9 1.5 C 10.5 1.5 11.5 2.5 12 3.2 C 12.5 2.5 13.5 1.5 15 1.5 C 16.5 1.5 18 2.2 18 4 C 18 7 12 11 12 11 Z"
          fill="#C89B48"
          fillOpacity="0.35"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="6" r="1" fill="#7A1E1E" />
      </svg>
      <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C89B48]/65" />
    </div>
  );
}

export function FooterSection({ data }: { data: FooterData }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = shareableUrl();
    const text = data.shareMessage ?? data.closingLine;
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: data.monogramText, text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section
      id="footer"
      className="relative flex flex-col justify-start border-t border-[#B8935A]/35 text-center pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 overflow-hidden"
    >
      {/* Subtle Golden-Hour Sunset Ambient Radial Glow Wash (Farewell / Closing Scene Atmospheric Bloom) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-75"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.965 0.024 78 / 0.55) 0%, oklch(0.96 0.018 78 / 0.35) 40%, oklch(0.952 0.01 78 / 0.15) 75%, transparent 100%)",
        }}
      />

      {/* Celebratory Dense Hearts & Sparkles Burst */}
      <ClosingSparkleBurst />

      {/* --- SPARSE SCATTERED CORNER DOODLES (Subtle Low-Opacity Margins Fill) --- */}
      
      {/* Top-Left Corner: Heart Outline Doodle */}
      <div className="absolute top-5 left-3 sm:left-6 rotate-[-12deg] opacity-30 hover:opacity-60 transition-opacity pointer-events-none z-10">
        <HandDrawnCleanHeartDoodle className="w-8 sm:w-10 h-auto" />
      </div>

      {/* Top-Right Corner: Vintage Camera Doodle */}
      <div className="absolute top-6 right-3 sm:right-7 rotate-[14deg] opacity-30 hover:opacity-60 transition-opacity pointer-events-none z-10">
        <HandDrawnCameraDoodle className="w-10 sm:w-12 h-auto" />
      </div>

      {/* Bottom-Left Margin: Cozy Coffee Cup Doodle */}
      <div className="absolute bottom-16 left-3 sm:left-6 rotate-[-8deg] opacity-30 hover:opacity-60 transition-opacity pointer-events-none z-10">
        <HandDrawnCoffeeCupDoodle className="w-11 sm:w-13 h-auto" />
      </div>

      {/* Bottom-Right Margin: Train & Travel Ticket Doodle */}
      <div className="absolute bottom-14 right-3 sm:right-7 rotate-[10deg] opacity-30 hover:opacity-60 transition-opacity pointer-events-none z-10">
        <HandDrawnTrainTicketDoodle className="w-12 sm:w-14 h-auto" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-lg">
        {/* Hand-Drawn Love Birds & Ribbon Illustration Header */}
        <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18.5rem] select-none pointer-events-none mb-1">
          <img
            src={dovesRibbonImg}
            alt="Hand-drawn love birds holding ribbon illustration"
            className="w-full h-auto object-contain mix-blend-multiply opacity-95 filter drop-shadow-[0_2px_4px_rgba(122,30,30,0.12)]"
          />
        </div>

        {/* EMOTIONAL CLIMAX CLOSING LINE — Hero font size with grand breathing room */}
        <div className="my-7 sm:my-11 max-w-md mx-auto">
          <p className="font-script text-[2.8rem] sm:text-[3.5rem] leading-[1.2] text-[#7A1E1E] select-none filter drop-shadow-[0_2px_8px_rgba(122,30,30,0.16)] px-2">
            {data.closingLine}
          </p>
        </div>

        {/* Hand-Drawn Heart & Botanical Bud Divider Ornament */}
        <FooterDividerOrnament />

        {/* Visually Distinct Hand-Crafted Hashtag Ribbon Tag */}
        {data.hashtag ? (
          <div className="my-8 sm:my-10 mx-auto">
            <HashtagRibbonTag hashtag={data.hashtag} />
          </div>
        ) : null}

        {/* Share Invitation Action Button with Bespoke Hand-Drawn Share Icon */}
        <div className="my-8 sm:my-10">
          <button
            type="button"
            onClick={handleShare}
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#C89B48]/90 bg-[#FAF5EE]/95 px-6 py-2.5 font-heading text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.24em] text-[#7A1E1E] font-semibold shadow-[0_2px_8px_rgba(200,155,72,0.16)] hover:border-[#7A1E1E] hover:bg-[#7A1E1E] hover:text-[#FFF5DF] transition-all duration-300 cursor-pointer ring-1 ring-[#C89B48]/25 mx-auto"
          >
            <HandDrawnShareIcon className="w-3.5 h-3.5 text-[#C89B48] group-hover:text-[#FFF5DF] transition-colors" />
            <span>{copied ? "Link Copied!" : data.shareLabel || "Share Invitation"}</span>
          </button>
        </div>

        {/* Handwritten Script Signature Credit Line flanked by Micro-Doodle Floral Sprigs */}
        {data.creditLine ? (
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2 sm:gap-3 text-[#7A1E1E]/80 select-none">
            {/* Left Micro Botanical Leaf Sprig */}
            <svg viewBox="0 0 32 18" className="w-5 sm:w-6 h-auto text-[#7A1E1E]/70 shrink-0 rotate-[-8deg] pointer-events-none" fill="none" aria-hidden="true">
              <path d="M 28 14 C 22 10, 12 9, 3 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              {/* Gold Flower Bud Tip */}
              <circle cx="2" cy="12" r="1.5" fill="#C89B48" />
              {/* Delicate Leaves */}
              <path d="M 20 11 C 17 6, 12 7, 15 10 Z" fill="#C89B48" fillOpacity="0.85" stroke="currentColor" strokeWidth="0.9" />
              <path d="M 12 10 C 9 5, 4 7, 7 9 Z" fill="#7A1E1E" fillOpacity="0.45" stroke="currentColor" strokeWidth="0.9" />
            </svg>

            <p className="font-script text-[1.25rem] sm:text-[1.4rem] text-[#7A1E1E]/85 filter drop-shadow-[0_1px_2px_rgba(122,30,30,0.1)] px-1">
              {data.creditLine}
            </p>

            {/* Right Micro Heart & Tendril Sprig */}
            <svg viewBox="0 0 32 18" className="w-5 sm:w-6 h-auto text-[#7A1E1E]/70 shrink-0 rotate-[8deg] pointer-events-none" fill="none" aria-hidden="true">
              <path d="M 4 14 C 10 10, 20 9, 29 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              {/* Foil Gold Heart Accent on Tip */}
              <path d="M 28 6 C 26 3, 23 4, 28 9 C 33 4, 30 3, 28 6 Z" fill="#C89B48" opacity="0.9" stroke="currentColor" strokeWidth="0.9" />
              {/* Delicate Leaf */}
              <path d="M 12 10 C 15 5, 20 7, 17 9 Z" fill="#7A1E1E" fillOpacity="0.45" stroke="currentColor" strokeWidth="0.9" />
            </svg>
          </div>
        ) : null}

        {/* Final Decorative Closing Flourish — Elegant "The End" Visual Full-Stop */}
        <FinalClosingFlourish />
      </div>
    </Section>
  );
}
