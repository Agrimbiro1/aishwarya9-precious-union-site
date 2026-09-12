import type { WeddingData, Guest } from "./types";
import contactBg from "@/assets/contact-bg.jpg.asset.json";
import firstMeetImg from "@/assets/first_meet.jpg";
import proposalImg from "@/assets/proposal.jpg";
import dateImg from "@/assets/date.jpg";
import laughingImg from "@/assets/laughing.jpg";
import togetherImg from "@/assets/together.jpg";


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
    venueLabel: "Taj Palace, Jaipur",
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
    tagline: "Two cities, one long train ride, and a whole lot of marigolds.",
    quoteLine: "two hearts, one journey",
    pets: [],
    showPetIllustration: false,
    eventDateShort: "Friday, December 4, 2026",
    venueLabel: "Taj Palace, Jaipur",
  },
  countdown: {
    targetDateTime: "2026-12-04T19:30:00+05:30",
    supportingLine: "Until we say I do",
  },
  events: [
    {
      id: "mehendi",
      name: "Mehendi",
      dateTime: "2026-12-02T11:00:00+05:30",
      venueName: "The Courtyard, Hotel Rambagh",
      note: "Henna, chai and far too many photographs.",
      mapUrl: "https://maps.google.com/?q=Hotel+Rambagh+Palace+Jaipur",
      icon: "flower",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      dateTime: "2026-12-03T19:00:00+05:30",
      venueName: "The Lawns, Hotel Rambagh",
      note: "Music, dancing, and a family dance-off.",
      mapUrl: "https://maps.google.com/?q=Hotel+Rambagh+Palace+Jaipur",
      icon: "music",
    },
    {
      id: "haldi",
      name: "Haldi",
      dateTime: "2026-12-04T10:00:00+05:30",
      venueName: "Poolside, Hotel Rambagh",
      note: "Wear something you don't mind turning yellow.",
      mapUrl: "https://maps.google.com/?q=Hotel+Rambagh+Palace+Jaipur",
      icon: "flower",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      dateTime: "2026-12-04T19:30:00+05:30",
      venueName: "Amrit Bagh, Jaipur",
      note: "The sacred vows, under the starlit sky.",
      mapUrl: "https://maps.google.com/?q=Amrit+Bagh+Jaipur",
      icon: "sparkle",
    },
    {
      id: "reception",
      name: "Reception",
      dateTime: "2026-12-05T20:00:00+05:30",
      venueName: "The Grand Ballroom, Hotel Rambagh",
      note: "Dinner, toasts and a grand celebration.",
      mapUrl: "https://maps.google.com/?q=Hotel+Rambagh+Palace+Jaipur",
      icon: "glass",
    },
  ],
  eventsConfig: {
    sectionLabel: "Time Line",
    uninvitedEventDisplay: "special-invitation",
    specialInvitationLabel: "By special invitation",
    collapseAfter: 5,
  },
  rsvp: {
    headline: "Will you be joining us?",
    supportingLine: "Kindly respond by 15 November 2026.",
    mealOptions: ["Vegetarian", "Non-Vegetarian", "Jain", "Vegan"],
    eventsAvailableForRsvp: ["mehendi", "sangeet", "haldi", "wedding", "reception"],
    deadline: "2026-11-15T23:59:00+05:30",
    defaultMaxGuests: 4,
  },

  /* Empty on purpose — demonstrates the illustrated gallery placeholder. */
  gallery: [
    {
      id: "g1",
      imageUrl: firstMeetImg,
      caption: "Where it began",
      whisperCaption: "where two stories became one",
    },
    {
      id: "g2",
      imageUrl: proposalImg,
      caption: "The Sweet Proposal",
      whisperCaption: "she said yes, obviously",
    },
    {
      id: "g3",
      imageUrl: dateImg,
      caption: "Planning The Table",
      whisperCaption: "tasting coffee & picking flowers",
    },
    {
      id: "g4",
      imageUrl: laughingImg,
      caption: "Us mostly Laughing",
      whisperCaption: "bursting out laughing mid-pose",
    },
    {
      id: "g5",
      imageUrl: togetherImg,
      caption: "Always and forever together",
      whisperCaption: "here's to a lifetime of this",
    },
  ],
  galleryConfig: {
    sectionLabel: "Our Album",
    supportingLine: "A few of our favourite moments so far.",
    emptyStateLine: "Photographs are being picked out — do come back closer to the day.",
  },
  family: [
    { id: "b1", name: "Mr. Anil Sharma", relation: "Father of the bride", side: "bride" },
    { id: "b2", name: "Mrs. Meera Sharma", relation: "Mother of the bride", side: "bride" },
    { id: "b3", name: "Aarav Sharma", relation: "Brother of the bride", side: "bride" },
    { id: "b4", name: "Ishita Sharma", relation: "Sister of the bride", side: "bride" },
    { id: "b5", name: "Mrs. Radhika Sharma", relation: "Aunt of the bride", side: "bride" },
    { id: "b6", name: "Mr. Suresh Sharma", relation: "Uncle of the bride", side: "bride" },
    { id: "b7", name: "Smt. Kamala Devi", relation: "Grandmother of the bride", side: "bride" },
    { id: "b8", name: "Shri Gopal Sharma", relation: "Grandfather of the bride", side: "bride" },
    { id: "b9", name: "Nidhi Sharma", relation: "Cousin of the bride", side: "bride" },
    { id: "b10", name: "Tanvi Sharma", relation: "Cousin of the bride", side: "bride" },
    { id: "b11", name: "Kabir Malhotra", relation: "Cousin of the bride", side: "bride" },
    { id: "b12", name: "Ananya Deshpande", relation: "Bridesmaid", side: "bride" },
    { id: "g1", name: "Mr. Rajesh Iyer", relation: "Father of the groom", side: "groom" },
    { id: "g2", name: "Mrs. Lakshmi Iyer", relation: "Mother of the groom", side: "groom" },
    { id: "g3", name: "Vikram Iyer", relation: "Brother of the groom", side: "groom" },
    { id: "g4", name: "Shruti Iyer", relation: "Sister of the groom", side: "groom" },
    { id: "g5", name: "Smt. Padmavathi Srinivasan", relation: "Grandmother of the groom", side: "groom" },
    { id: "g6", name: "Shri Venkataraman Iyer", relation: "Grandfather of the groom", side: "groom" },
    { id: "g7", name: "Mr. Prakash Iyer", relation: "Uncle of the groom", side: "groom" },
    { id: "g8", name: "Mrs. Sudha Iyer", relation: "Aunt of the groom", side: "groom" },
    { id: "g9", name: "Rahul Menon", relation: "Cousin of the groom", side: "groom" },
    { id: "g10", name: "Divya Menon", relation: "Cousin of the groom", side: "groom" },
    { id: "g11", name: "Arjun Nair", relation: "Groomsman", side: "groom" },
    { id: "g12", name: "Karthik Rao", relation: "Groomsman", side: "groom" },
  ],
  familyConfig: {
    sectionLabel: "Our Families",
    supportingLine: "The people who made this celebration possible.",
    brideSideLabel: "PARENTS OF THE BRIDE",
    groomSideLabel: "PARENTS OF THE GROOM",
    initialVisiblePerGroup: 6,
    brideParents: {
      names: "Mr. Anil & Mrs. Meera Sharma",
      message: "With joy in our hearts, we welcome you to share this day with our family.",
    },
    groomParents: {
      names: "Mr. Rajesh & Mrs. Lakshmi Iyer",
      message: "Your blessings mean everything to us. Thank you for standing with our children.",
    },
  },
  /* Sample wishes for the Ornate Pinned Wishing Wall. */
  wishes: [
    {
      id: "w_1",
      from: "Aunty Radhika",
      message: "May your lives together be filled with laughter, endless happiness, and sweet cups of chai!",
      createdAt: "2026-11-20T10:00:00Z",
    },
    {
      id: "w_2",
      from: "Vikram Iyer",
      message: "Wishing you both a lifetime of love and adventurous train journeys together. Can't wait for the Sangeet!",
      createdAt: "2026-11-21T14:30:00Z",
    },
    {
      id: "w_3",
      from: "Aarav & Nidhi",
      message: "So thrilled to celebrate this beautiful union. May your bond grow stronger with every passing day!",
      createdAt: "2026-11-22T09:15:00Z",
    },
    {
      id: "w_4",
      from: "Meera & Anil Sharma",
      message: "Our dearest Kavya and Rohan, our blessings are always with you as you step into this magical new chapter.",
      createdAt: "2026-11-23T18:40:00Z",
    },
    {
      id: "w_5",
      from: "Kabir Malhotra",
      message: "To the couple of the decade! Here's to love, marigolds, and unforgettable celebrations in Jaipur.",
      createdAt: "2026-11-24T11:20:00Z",
    },
    {
      id: "w_6",
      from: "Smt. Kamala Devi",
      message: "Sada Sukhi Raho! May God shower endless peace, prosperity, and joy upon your home.",
      createdAt: "2026-11-25T08:00:00Z",
    },
    {
      id: "w_7",
      from: "Ananya Deshpande",
      message: "Super excited for the wedding of the century! Wishing you two eternal love and warm smiles.",
      createdAt: "2026-11-25T16:45:00Z",
    },
    {
      id: "w_8",
      from: "Shri Gopal Sharma",
      message: "May your journey together be as serene as Jaipur mornings and as bright as the evening stars.",
      createdAt: "2026-11-26T12:00:00Z",
    },
  ],
  wishesConfig: {
    sectionLabel: "Wishing Wall",
    supportingLine: "Leave a blessing for us to read on the morning of the wedding.",
    emptyStateLine: "Be the first to leave a wish!",
    placeholder: "Write your blessing…",
    maxLength: 280,
    maxPerVisitor: 3,
    cooldownSeconds: 30,
  },
  travel: [
    {
      id: "flight",
      kind: "flight",
      title: "By air",
      detail: "Jaipur International (JAI) — 30 minutes from Hotel Rambagh.",
      link: "https://www.google.com/flights?q=Jaipur",
      bookingCode: "KR-AIR-2026",
      priceNote: "Group fare available until 1 November.",
    },
    {
      id: "train",
      kind: "train",
      title: "By train",
      detail: "Jaipur Junction is well connected from Delhi and Mumbai.",
      link: "https://www.irctc.co.in",
    },
    {
      id: "road",
      kind: "road",
      title: "By road",
      detail: "About 5 hours from Delhi on NH48 — parking available at all venues.",
    },
    {
      id: "shuttle",
      kind: "shuttle",
      title: "Wedding shuttle",
      detail: "Complimentary shuttles run between Hotel Rambagh and Amrit Bagh every 30 minutes.",
    },
    {
      id: "rambagh",
      kind: "stay",
      title: "Hotel Rambagh",
      detail: "Our main venue hotel — most functions are on the property.",
      link: "https://example.com/rambagh",
      bookingCode: "KAVYAROHAN",
      priceNote: "From ₹8,500 per night with our code.",
    },
    {
      id: "havelistay",
      kind: "stay",
      title: "Amrit Haveli",
      detail: "A quieter heritage option, 10 minutes from the wedding venue.",
      link: "https://example.com/haveli",
      bookingCode: "KR-HAVELI",
    },
  ],
  travelConfig: {
    sectionLabel: "Travel & Stay",
    supportingLine: "Everything you need to reach us comfortably.",
    gettingThereLabel: "Getting There",
    stayLabel: "Where to Stay",
  },
  contacts: [
    { id: "c1", name: "Aarav Sharma", role: "Bride's brother", phone: "+911234567890", whatsapp: "911234567890" },
    { id: "c2", name: "Vikram Iyer", role: "Groom's brother", phone: "+919876543210", whatsapp: "919876543210" },
    { id: "c3", name: "Nidhi Sharma", role: "Guest coordinator", phone: "+919812345678" },
  ],
  contactConfig: {
    sectionLabel: "Need a Hand?",
    supportingLine: "Call or message any of us — we're happy to help with anything.",
    backgroundImageUrl: contactBg.url,
  },
  footer: {
    closingLine: "We can't wait to celebrate with you",
    hashtag: "#KavyaFoundRohan",
    monogramText: "K & R",
    shareLabel: "Share this invitation",
    shareMessage: "You're invited to Kavya & Rohan's wedding — 4 December 2026, Jaipur.",
    creditLine: "Made with love, for our families.",
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
