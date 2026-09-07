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
  events: [
    {
      id: "engagement",
      name: "Engagement",
      dateTime: "2026-12-01T18:30:00+05:30",
      venueName: "Sharma Residence, Jaipur",
      note: "An intimate ring ceremony with close family.",
      icon: "ring",
    },
    {
      id: "mehendi",
      name: "Mehendi",
      dateTime: "2026-12-02T11:00:00+05:30",
      venueName: "The Courtyard, Hotel Rambagh",
      note: "Henna, chai and far too many photographs.",
      dressCode: "Bright florals",
      icon: "flower",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      dateTime: "2026-12-03T19:00:00+05:30",
      venueName: "The Lawns, Hotel Rambagh",
      note: "Music, dancing, and a family dance-off.",
      icon: "music",
    },
    {
      id: "haldi",
      name: "Haldi",
      dateTime: null,
      venueName: "Poolside, Hotel Rambagh",
      note: "Wear something you don't mind turning yellow.",
      icon: "flower",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      dateTime: "2026-12-04T19:30:00+05:30",
      venueName: "Amrit Bagh, Jaipur",
      note: "The vows, under the same sky.",
      icon: "sparkle",
    },
    {
      id: "reception",
      name: "Reception",
      dateTime: "2026-12-05T20:00:00+05:30",
      venueName: "The Grand Ballroom, Hotel Rambagh",
      note: "Dinner, toasts and a very tall cake.",
      icon: "glass",
    },
  ],
  eventsConfig: {
    sectionLabel: "Time Line",
    uninvitedEventDisplay: "special-invitation",
    specialInvitationLabel: "By special invitation",
    collapseAfter: 4,
    dressCode: {
      global: "Festive Indian",
      colorPalette: ["#FBF3E7", "#C98A8A", "#7A1E1E", "#8C9C6B"],
    },
  },
  rsvp: {
    headline: "Will you be joining us?",
    supportingLine: "Kindly respond by 15 November 2026.",
    mealOptions: ["Vegetarian", "Non-Vegetarian", "Jain", "Vegan"],
    eventsAvailableForRsvp: ["engagement", "mehendi", "sangeet", "haldi", "wedding", "reception"],
    deadline: "2026-11-15T23:59:00+05:30",
    defaultMaxGuests: 4,
  },

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
  submitted: {
    guestId: "g_done1",
    displayName: "Vikram Iyer",
    guestGroup: "Groom's Friends",
    invitedEvents: ["sangeet", "wedding", "reception"],
    allowedGuestCount: 3,
    rsvpStatus: "yes",
    rsvpResponse: {
      name: "Vikram Iyer",
      attending: true,
      guestCount: 2,
      mealPreference: "Vegetarian",
      attendingEvents: ["wedding", "reception"],
      noteToCouple: "Wouldn't miss it for the world!",
    },
    language: "en",
    side: "groom",
  },

};

export async function resolveGuestToken(token: string | null): Promise<Guest | null> {
  if (!token) return null;
  return guestDirectory[token.toLowerCase()] ?? null;
}
