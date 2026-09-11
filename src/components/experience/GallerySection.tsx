import { useState, useEffect } from "react";
import { Section } from "./InvitationExperience";
import type { GalleryConfig, GalleryItem } from "@/data/types";
import { useGuest } from "@/lib/guest";

/* Import generated doodle assets matching authentic hand-inked line technique */
import galleryBowImg from "@/assets/gallery-bow-doodle.png";
import galleryDoveImg from "@/assets/gallery-dove-doodle.png";
import galleryCakeImg from "@/assets/gallery-cake-doodle.png";
import galleryMojarisImg from "@/assets/gallery-mojaris-doodle.png";

/* Import default sample images for fallback if gallery is empty */
import firstMeetImg from "@/assets/first_meet.jpg";
import proposalImg from "@/assets/proposal.jpg";
import dateImg from "@/assets/date.jpg";
import laughingImg from "@/assets/laughing.jpg";
import togetherImg from "@/assets/together.jpg";

const DEFAULT_PHOTOS: GalleryItem[] = [
  {
    id: "def1",
    imageUrl: firstMeetImg,
    caption: "Where it began",
    whisperCaption: "where two stories became one",
  },
  {
    id: "def2",
    imageUrl: proposalImg,
    caption: "The Sweet Proposal",
    whisperCaption: "she said yes, obviously",
  },
  {
    id: "def3",
    imageUrl: dateImg,
    caption: "Planning The Table",
    whisperCaption: "tasting coffee & picking flowers",
  },
  {
    id: "def4",
    imageUrl: laughingImg,
    caption: "Us mostly Laughing",
    whisperCaption: "bursting out laughing mid-pose",
  },
  {
    id: "def5",
    imageUrl: togetherImg,
    caption: "Always and forever together",
    whisperCaption: "here's to a lifetime of this",
  },
];

/* =========================================================================
   100% NATIVE TRANSPARENT SVG DOODLE COMPONENTS (Maroon #7A1E1E & Gold #B8935A)
   Zero white rectangular backgrounds, zero card boxes, 100% vector transparency
   ========================================================================= */

/** Scalloped Frame Silhouette Outline Path for 280x370 viewBox */
const SCALLOPED_FRAME_PATH = `
  M 140 16
  C 152 16, 162 20, 174 24
  C 185 18, 198 22, 208 30
  C 218 24, 230 30, 238 40
  C 246 38, 256 46, 260 58
  C 268 58, 274 70, 272 82
  C 278 86, 280 98, 276 110
  C 282 118, 282 130, 276 142
  C 282 152, 280 164, 274 174
  C 278 186, 276 198, 268 208
  C 272 220, 268 232, 260 242
  C 262 254, 256 266, 246 274
  C 246 286, 236 296, 226 304
  C 222 316, 210 324, 198 332
  C 192 342, 180 350, 168 356
  C 158 362, 148 366, 140 370
  C 132 366, 122 362, 112 356
  C 100 350, 88 342, 82 332
  C 70 324, 58 316, 54 304
  C 44 296, 34 286, 34 274
  C 24 266, 18 254, 20 242
  C 12 232, 8 220, 12 208
  C 4 198, 2 186, 6 174
  C 0 164, -2 152, 4 142
  C -2 130, -2 118, 4 110
  C 0 98, 2 86, 8 82
  C 6 70, 12 58, 20 58
  C 24 46, 34 38, 42 40
  C 50 30, 62 24, 72 30
  C 82 22, 95 18, 106 24
  C 118 20, 128 16, 140 16 Z
`;

/** Hand-Drawn Ribbon Bow Doodle (100% Vector SVG, Zero Background) */
function HandDrawnBowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 80" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      {/* Central Knot */}
      <path d="M 74 28 C 72 22, 86 22, 84 28 C 86 34, 72 34, 74 28 Z" fill="#7A1E1E" stroke="#7A1E1E" strokeWidth="1.2" />
      {/* Left Loop */}
      <path d="M 74 26 C 50 10, 20 22, 35 38 C 45 48, 68 36, 75 30" stroke="#7A1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 68 28 C 48 18, 30 26, 42 36" stroke="#7A1E1E" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      {/* Right Loop */}
      <path d="M 84 26 C 108 10, 138 22, 123 38 C 113 48, 90 36, 83 30" stroke="#7A1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 90 28 C 110 18, 128 26, 116 36" stroke="#7A1E1E" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      {/* Left Ribbon Tail */}
      <path d="M 73 32 C 65 48, 52 60, 48 72 C 46 76, 54 74, 58 66 C 65 54, 75 42, 77 34" stroke="#7A1E1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right Ribbon Tail */}
      <path d="M 85 32 C 93 48, 106 60, 110 72 C 112 76, 104 74, 100 66 C 93 54, 83 42, 81 34" stroke="#7A1E1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Cozy Hand-Drawn Coffee Cup Doodle with Steam Swirls (100% Vector SVG, Zero Background) */
function HandDrawnCoffeeCupDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      {/* Hand-drawn steam swirls */}
      <path d="M 32 20 C 26 14, 34 8, 30 2 C 28 -1, 24 1, 28 5" stroke="#7A1E1E" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <path d="M 45 18 C 38 10, 48 4, 42 -2 C 40 -4, 36 -2, 40 2" stroke="#7A1E1E" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <path d="M 58 20 C 52 14, 60 8, 56 2 C 54 -1, 50 1, 54 5" stroke="#7A1E1E" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      {/* Steam sparkle dots */}
      <circle cx="38" cy="8" r="1.3" fill="#B8935A" />
      <circle cx="50" cy="6" r="1.3" fill="#B8935A" />
      {/* Mug Body */}
      <path d="M 24 24 L 66 24 C 65 48, 58 62, 45 62 C 32 62, 25 48, 24 24 Z" stroke="#7A1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Rim top curve */}
      <path d="M 22 24 C 22 20, 68 20, 68 24 C 68 28, 22 28, 22 24 Z" stroke="#7A1E1E" strokeWidth="2" fill="none" />
      {/* Mug Handle */}
      <path d="M 65 28 C 82 28, 80 50, 62 50" stroke="#7A1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Saucer plate */}
      <path d="M 16 66 C 32 70, 58 70, 74 66" stroke="#7A1E1E" strokeWidth="2.4" strokeLinecap="round" />
      {/* Little Heart Accent on Mug */}
      <path d="M 45 38 C 42 33, 38 35, 45 44 C 52 35, 48 33, 45 38 Z" fill="#7A1E1E" opacity="0.9" />
    </svg>
  );
}

/** Simple Clean Single Heart Outline Doodle (100% Vector SVG, Zero Background) */
function HandDrawnCleanHeartDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      <path
        d="M 30 18 C 24 6, 8 12, 12 28 C 16 40, 30 50, 30 52 C 30 50, 44 40, 48 28 C 52 12, 36 6, 30 18 Z"
        stroke="#7A1E1E"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Small Hand-Drawn Camera Doodle with Click Flash Rays (100% Vector SVG, Zero Background) */
function HandDrawnCameraDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 85 70" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      {/* Flash "click" burst rays & spark dots */}
      <path d="M 22 8 L 18 2 M 28 6 L 28 0 M 34 8 L 38 2" stroke="#B8935A" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="4" r="1.5" fill="#7A1E1E" opacity="0.85" />
      <circle cx="40" cy="4" r="1.5" fill="#7A1E1E" opacity="0.85" />
      {/* Sparkle burst star at flash */}
      <path d="M 28 4 L 30 7 L 33 8 L 30 9 L 28 12 L 26 9 L 23 8 L 26 7 Z" fill="#B8935A" />
      {/* Camera Body */}
      <rect x="12" y="20" width="58" height="38" rx="7" stroke="#7A1E1E" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* Flash Bump */}
      <path d="M 28 20 L 32 14 L 48 14 L 52 20" stroke="#7A1E1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Lens Circle */}
      <circle cx="41" cy="39" r="13" stroke="#7A1E1E" strokeWidth="2.4" fill="none" />
      <circle cx="41" cy="39" r="6.5" stroke="#7A1E1E" strokeWidth="1.8" fill="none" />
      {/* Shutter Button */}
      <line x1="20" y1="16" x2="24" y2="16" stroke="#7A1E1E" strokeWidth="2.2" strokeLinecap="round" />
      {/* Small Gold Accent */}
      <circle cx="60" cy="28" r="2" fill="#B8935A" />
    </svg>
  );
}

/** Hand-Drawn Calendar / Date Tag Keepsake Doodle (100% Vector SVG, Zero Background) */
function HandDrawnDateTagDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 95 105" className={`select-none pointer-events-none ${className}`} fill="none" aria-hidden="true">
      {/* Top Hanging Ring & Pin */}
      <path d="M 47 4 L 47 16" stroke="#7A1E1E" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="47" cy="4" r="2.5" fill="#B8935A" />

      {/* Binder Rings on Top Bar */}
      <path d="M 28 12 C 28 8, 34 8, 34 16" stroke="#7A1E1E" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 61 12 C 61 8, 67 8, 67 16" stroke="#7A1E1E" strokeWidth="1.6" strokeLinecap="round" />

      {/* Hand-Drawn Wobbly Calendar Tag Outer Border */}
      <path
        d="M 16 18 C 30 16, 65 16, 79 18 C 82 28, 83 75, 80 88 C 65 90, 30 89, 15 87 C 12 75, 13 28, 16 18 Z"
        stroke="#7A1E1E"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner Header Divider Rule Line */}
      <path d="M 16 38 C 35 36, 60 36, 79 38" stroke="#7A1E1E" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />

      {/* Month Header Text: DEC */}
      <text x="47.5" y="32" textAnchor="middle" fill="#7A1E1E" fontSize="12" fontWeight="bold" fontFamily="Cinzel, serif" letterSpacing="2">
        DEC
      </text>

      {/* Date Number: 4 */}
      <text x="47.5" y="66" textAnchor="middle" fill="#7A1E1E" fontSize="27" fontWeight="bold" fontFamily="Playfair Display, serif">
        4
      </text>

      {/* Year: 2026 */}
      <text x="47.5" y="82" textAnchor="middle" fill="#7A1E1E" fontSize="11" fontStyle="italic" fontFamily="Great Vibes, cursive">
        2026
      </text>

      {/* Corner Botanical Leaf Accent */}
      <path d="M 76 80 C 82 82, 86 78, 84 72 C 80 74, 78 78, 76 80 Z" fill="#B8935A" opacity="0.9" />
    </svg>
  );
}

/** Sparkle Accent Star Motif */
function SparkleDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="#B8935A" opacity="0.9" />
    </svg>
  );
}

/** Marigold Base Flower Cluster */
function MarigoldClusterDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" aria-hidden="true">
      <path
        d="M 60 20 C 50 8, 30 14, 40 28 C 25 24, 20 40, 38 38 C 45 42, 55 36, 60 30 C 65 36, 75 42, 82 38 C 100 40, 95 24, 80 28 C 90 14, 70 8, 60 20 Z"
        stroke="#7A1E1E"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="24" r="4.5" fill="#B8935A" />
      <circle cx="42" cy="28" r="3.5" fill="#B8935A" />
      <circle cx="78" cy="28" r="3.5" fill="#B8935A" />
    </svg>
  );
}

/** Hand-Drawn Interactive Photo Progress Dots Indicator */
function HandDrawnProgressDots({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 z-30 pointer-events-auto">
      {Array.from({ length: total }).map((_, idx) => {
        const isActive = idx === current % total;
        return (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(idx);
            }}
            className="group relative p-1 focus:outline-none transition-transform hover:scale-125"
            aria-label={`Go to photo ${idx + 1}`}
            title={`View photo ${idx + 1}`}
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#7A1E1E]" fill="none">
              {isActive ? (
                <>
                  {/* Outer hand-drawn active ring */}
                  <circle cx="8" cy="8" r="6.5" stroke="#7A1E1E" strokeWidth="1.6" strokeDasharray="12 2" />
                  {/* Filled inner core */}
                  <circle cx="8" cy="8" r="3.8" fill="#7A1E1E" />
                  <circle cx="8" cy="8" r="1.5" fill="#B8935A" />
                </>
              ) : (
                /* Inactive sketchy open circle */
                <circle
                  cx="8"
                  cy="8"
                  r="4.2"
                  stroke="#7A1E1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-50 group-hover:opacity-100 transition-opacity"
                />
              )}
            </svg>
          </button>
        );
      })}
    </div>
  );
}

export function GallerySection({
  gallery,
  items,
  config,
}: {
  gallery?: GalleryItem[];
  items?: GalleryItem[];
  config: GalleryConfig;
}) {
  const guest = useGuest();
  const rawPhotos = gallery && gallery.length > 0 ? gallery : items && items.length > 0 ? items : DEFAULT_PHOTOS;
  const activePhotos = rawPhotos.filter((i) => i?.imageUrl);
  const totalPhotos = activePhotos.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Auto-rotation timer (4.5 seconds per photo)
  useEffect(() => {
    if (!isPlaying || totalPhotos <= 1 || lightboxOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPhotos);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, totalPhotos, lightboxOpen]);

  // Keyboard navigation for full-screen Lightbox modal
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % totalPhotos);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, totalPhotos]);

  const currentPhoto = activePhotos[currentIndex % totalPhotos];

  const handleOpenLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(currentIndex % totalPhotos);
    setLightboxOpen(true);
  };

  return (
    <Section
      id="gallery"
      className="relative flex min-h-full flex-col items-center justify-center border-t border-accent-secondary/30 py-12 px-4 overflow-hidden bg-background select-none"
    >
      {/* SVG ClipPath Definition for Scalloped Frame Silhouette */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="scalloped-gallery-frame-clip" clipPathUnits="userSpaceOnUse">
            <path d={SCALLOPED_FRAME_PATH} />
          </clipPath>
        </defs>
      </svg>

      {/* Subtle Warm Radial Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(ellipse_at_50%_45%,rgba(212,175,55,0.08)_0%,rgba(245,230,210,0.15)_50%,transparent_75%)]"
        aria-hidden="true"
      />

      {/* FULL ART PIECE COMPOSITION CONTAINER */}
      <div className="relative mx-auto w-full max-w-[23.5rem] sm:max-w-[26rem] flex flex-col items-center text-center z-10">

        {/* SECTION EYEBROW HEADER */}
        <div className="inline-flex items-center justify-center gap-3 text-[#7A1E1E] mb-1">
          <span className="font-heading text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.45em] text-[#7A1E1E]/85 font-semibold pl-[0.45em]">
            Memories
          </span>
        </div>

        {/* SECTION SCRIPT TITLE HEADER (ISSUE 2 FIX: "Our Album", no wedding announcement) */}
        <h2 className="font-script text-[2.4rem] sm:text-[2.8rem] text-[#7A1E1E] leading-tight tracking-wide filter drop-shadow-[0_2px_4px_rgba(122,30,30,0.15)]">
          {config.sectionLabel || "Our Album"}
        </h2>

        {/* CENTRAL SCALLOPED FRAME & CONTEXTUAL DOODLES COMPOSITION */}
        <div className="relative w-full flex items-center justify-center my-3">

          {/* --- SPARINGLY PLACED CONTEXTUAL DOODLES (ISSUE 1 & 3 FIX: 100% Vector SVG, Zero Background, No Shoes) --- */}

          {/* Top-Right: Simple Clean Heart Outline */}
          <div className="absolute top-1 right-2 rotate-[12deg] pointer-events-none z-20">
            <HandDrawnCleanHeartDoodle className="w-9 sm:w-11 h-auto" />
          </div>

          {/* Middle-Left: Hand-Drawn Calendar / Date Tag Keepsake Doodle */}
          <div className="absolute top-[30%] -left-2 sm:-left-4 rotate-[-8deg] pointer-events-none z-20">
            <HandDrawnDateTagDoodle className="w-16 sm:w-20 h-auto filter drop-shadow-[0_1px_3px_rgba(122,30,30,0.12)]" />
          </div>

          {/* Bottom-Left: Cozy Coffee Cup Doodle (Echoing candid coffee moments) */}
          <div className="absolute -bottom-3 left-0 sm:left-1 flex flex-col items-start rotate-[-4deg] pointer-events-none z-20">
            <HandDrawnCoffeeCupDoodle className="w-14 sm:w-16 h-auto" />
          </div>

          {/* Bottom-Right: Small Hand-Drawn Camera Doodle */}
          <div className="absolute -bottom-4 right-0 sm:right-1 flex flex-col items-center rotate-[5deg] pointer-events-none z-20">
            <HandDrawnCameraDoodle className="w-12 sm:w-14 h-auto" />
          </div>

          {/* Top Frame Ribbon Bow */}
          <div className="absolute -top-4 z-30 pointer-events-none w-28 sm:w-32">
            <HandDrawnBowDoodle className="w-full h-auto" />
          </div>

          {/* Golden-Hour Backlight Glow directly behind central photo frame */}
          <div
            className="absolute inset-0 m-auto w-[240px] sm:w-[270px] h-[310px] sm:h-[350px] pointer-events-none rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.26)_0%,rgba(184,147,90,0.15)_45%,rgba(245,230,210,0.05)_70%,transparent_90%)] filter blur-2xl opacity-95 transition-opacity duration-700 z-0"
            aria-hidden="true"
          />

          {/* --- CENTRAL SCALLOPED PHOTO DISPLAY CONTAINER --- */}
          <div
            onClick={handleOpenLightbox}
            className="relative w-[230px] sm:w-[260px] h-[304px] sm:h-[343px] cursor-pointer group select-none transition-transform duration-300 hover:scale-[1.018] z-10"
            title="Click photo to view full screen"
          >
            {/* Unified SVG: 100% Exact Scallop Masking & Ink Outline Overlay (ISSUE 4 VERIFIED) */}
            <svg
              className="absolute inset-0 w-full h-full text-[#7A1E1E] overflow-visible"
              viewBox="0 0 280 370"
              aria-hidden="true"
            >
              <defs>
                <clipPath id="scallop-photo-clip">
                  <path d={SCALLOPED_FRAME_PATH} />
                </clipPath>
              </defs>

              {/* Photo layer clipped strictly inside SCALLOPED_FRAME_PATH */}
              <g clipPath="url(#scallop-photo-clip)">
                {activePhotos.map((photo, index) => {
                  const isActive = index === currentIndex % totalPhotos;
                  return (
                    <image
                      key={photo.id || index}
                      href={photo.imageUrl}
                      x="0"
                      y="0"
                      width="280"
                      height="370"
                      preserveAspectRatio="xMidYMid slice"
                      className={`transition-opacity duration-1000 ease-in-out ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  );
                })}
              </g>

              {/* Precise Hand-Drawn Scalloped Ink Outline Overlay */}
              <path
                d={SCALLOPED_FRAME_PATH}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Hand-Sketched Organic Pause/Play Toggle Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying((prev) => !prev);
              }}
              className="absolute top-3 right-4 z-40 p-1.5 rounded-full text-[#7A1E1E] opacity-70 hover:opacity-100 transition-all pointer-events-auto bg-background/65 hover:bg-background/90 backdrop-blur-[3px] border border-[#7A1E1E]/25 shadow-sm"
              aria-label={isPlaying ? "Pause photo rotation" : "Play photo rotation"}
              title={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
            >
              {isPlaying ? (
                /* Hand-Sketched Organic Pause Bars */
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M 6.5 4 C 6.2 8, 6.8 12, 6.5 16" />
                  <path d="M 13.5 4 C 13.2 8, 13.8 12, 13.5 16" />
                </svg>
              ) : (
                /* Hand-Sketched Organic Play Triangle Stroke */
                <svg className="w-3.5 h-3.5 pl-0.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 6.2 3.8 C 6.8 3.4, 7.8 3.6, 8.5 4.1 L 15.5 9.1 C 16.3 9.6, 16.3 10.4, 15.5 10.9 L 8.5 15.9 C 7.8 16.4, 6.8 16.6, 6.2 16.2 C 5.6 15.8, 5.8 14.2, 5.8 10 C 5.8 5.8, 5.6 4.2, 6.2 3.8 Z" />
                  <path d="M 8.2 6.8 C 8.2 8.5, 8.5 11.5, 8.2 13.2" strokeWidth="1.2" opacity="0.65" />
                </svg>
              )}
            </button>

            {/* Subtle hover zoom hint for direct photo expand (no View Photo pill button) */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2.5 rounded-full bg-[#7A1E1E]/75 text-surface backdrop-blur-sm shadow-md scale-95 group-hover:scale-100 transition-transform">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>

            {/* Interactive Hand-Drawn Photo Progress Indicator Dots & Marigold Base */}
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 pointer-events-auto">
              <HandDrawnProgressDots
                total={totalPhotos}
                current={currentIndex % totalPhotos}
                onSelect={(idx) => setCurrentIndex(idx)}
              />
              <div className="relative pointer-events-none -mt-0.5">
                <MarigoldClusterDoodle className="w-16 sm:w-18 h-auto opacity-90" />
              </div>
            </div>

          </div>

        </div>

        {/* DYNAMIC ACTIVE PHOTO TAGLINE & DYNAMIC CURSIVE WHISPER-CAPTION */}
        <div className="mt-8 flex flex-col items-center justify-center min-h-[4.2rem] px-4">
          <p
            key={`caption-${currentPhoto?.id || currentIndex}`}
            className="font-script text-[1.8rem] sm:text-[2.1rem] text-[#7A1E1E] text-center max-w-[22rem] leading-tight tracking-wide animate-in fade-in duration-300"
          >
            {currentPhoto?.caption || "A Few of Our Favourite Moments"}
          </p>
          <p
            key={`whisper-${currentPhoto?.id || currentIndex}`}
            className="mt-1 font-script text-[1.15rem] sm:text-[1.3rem] italic text-[#7A1E1E]/80 text-center tracking-wide animate-in fade-in duration-500"
          >
            {currentPhoto?.whisperCaption || "moments we'll always treasure"}
          </p>
        </div>

      </div>

      {/* =========================================================================
         FULL-SCREEN LIGHTBOX MODAL
         ========================================================================= */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Lightbox Content Container */}
          <div
            className="relative max-w-3xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close photo view"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M 18 6 L 6 18 M 6 6 L 18 18" strokeLinecap="round" />
              </svg>
            </button>

            {/* Main Lightbox Photo */}
            {(() => {
              const lightboxPhoto = activePhotos[lightboxIndex % totalPhotos] ?? activePhotos[0];
              return (
                <>
                  <div className="relative overflow-hidden rounded-2xl border-2 border-accent-gold/40 shadow-2xl max-h-[75vh]">
                    <img
                      src={lightboxPhoto?.imageUrl ?? firstMeetImg}
                      alt={lightboxPhoto?.caption ?? "Full view couple photo"}
                      className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
                    />
                  </div>

                  {/* Caption & Controls Bar */}
                  <div className="mt-4 flex items-center justify-between w-full px-4 text-white">
                    {/* Prev Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos)
                      }
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Previous photo"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M 15 18 L 9 12 L 15 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Caption & Index */}
                    <div className="text-center px-4">
                      <p className="font-body text-body italic text-white/95">
                        {lightboxPhoto?.caption || "A special moment from our story"}
                      </p>
                      <p className="font-heading text-micro uppercase tracking-widest text-accent-gold mt-1">
                        {(lightboxIndex % totalPhotos) + 1} of {totalPhotos}
                      </p>
                    </div>

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={() => setLightboxIndex((prev) => (prev + 1) % totalPhotos)}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Next photo"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M 9 18 L 15 12 L 9 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </Section>
  );
}
