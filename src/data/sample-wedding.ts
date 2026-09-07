import type { WeddingData, Guest } from "./types";

/**
 * Sample content only — swap this object per couple with zero code changes.
 */
export const sampleWedding: WeddingData = {
  coupleSlug: "kavya-rohan",
  opening: {
    monogramText: "K & R",
    coupleFullNames: ["Kavya", "Rohan"],
    openingLine: "You are cordially invited to celebrate the wedding of",
    supportedLanguages: ["en", "hi"],
    ambientAudioUrl: null,
    audioDefaultMuted: true,
  },
  preview: {
    eyebrowLabel: "Together with their families",
    coupleNames: ["Kavya", "Rohan"],
    dateLabel: "04 . 12 . 2026",
    tagline: "Two families, one celebration — and a whole lot of marigolds.",
    ctaLabel: "Open Invitation",
    ctaSubtext: "Tap to begin our story",
    guestLineTemplate: "For {{guestName}}",
  },
  invitation: {

    eyebrowLabel: "with the blessings of our families",
    coupleNames: ["Kavya", "Rohan"],
    weddingDate: "2026-12-04",
    formalWording:
      "Together with their families, request the honour of your presence as they begin a new journey, hand in hand, under the same sky.",
    guestGreetingTemplate: "Dear {{guestName}},",
  },
  couple: {
    portraitImageUrl: null,
    coupleNames: ["Kavya", "Rohan"],
    tagline: "Two cities, one long train ride, and a very persistent dog.",
    pets: [{ name: "Laddoo", type: "dog" }],
    eventDateShort: "Friday, December 4, 2026",
  },
  countdown: {
    targetDateTime: "2026-12-04T19:30:00+05:30",
    supportingLine: "Until we say I do",
  },
  events: [],
  gallery: [],
  family: [],
  wishes: [],
  travel: [],
  contacts: [],
  footer: {
    closingLine: "We can't wait to celebrate with you",
    hashtag: "#KavyaFoundRohan",
    monogramText: "K & R",
  },
};

/**
 * Stand-in for the backend guest-token lookup (PRD §6.1).
 * Replace with a server call later; the contract stays identical.
 */
const guestDirectory: Record<string, Guest> = {
  radhika: {
    guestId: "g_8f21a",
    displayName: "Aunty Radhika",
    formalName: "Mrs. Radhika Sharma",
    guestGroup: "Bride's Family",
    invitedEvents: ["engagement", "sangeet", "wedding", "reception"],
    allowedGuestCount: 2,
    rsvpStatus: "pending",
    rsvpResponse: null,
    language: "en",
    side: "bride",
  },
  longname: {
    guestId: "g_long1",
    displayName: "Padmavathi Srinivasan Venkataramanan",
    formalName: "Smt. Padmavathi Srinivasan Venkataramanan",
    guestGroup: "Groom's Family",
    invitedEvents: ["reception"],
    allowedGuestCount: 1,
    rsvpStatus: "pending",
    language: "en",
    side: "groom",
  },
  blank: {
    guestId: "g_blank",
    displayName: null,
    invitedEvents: null,
    allowedGuestCount: null,
    rsvpStatus: "pending",
  },
};

export async function resolveGuestToken(token: string | null): Promise<Guest | null> {
  if (!token) return null;
  return guestDirectory[token.toLowerCase()] ?? null;
}
