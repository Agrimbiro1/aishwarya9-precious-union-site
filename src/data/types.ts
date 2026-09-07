/**
 * Data contracts for the wedding invitation experience (PRD §6, §8).
 * Nothing couple-specific lives in component code — everything flows from here.
 */

export type Guest = {
  guestId: string;
  displayName: string | null;
  formalName?: string | null;
  guestGroup?: string | null;
  invitedEvents?: string[] | null;
  allowedGuestCount?: number | null;
  rsvpStatus?: "pending" | "yes" | "no" | "maybe";
  rsvpResponse?: unknown | null;
  language?: string;
  side?: "bride" | "groom" | null;
};

export type OpeningData = {
  monogramText: string;
  coupleFullNames: string[];
  openingLine: string;
  supportedLanguages: string[];
  ambientAudioUrl?: string | null;
  audioDefaultMuted: boolean;
};

export type PreviewData = {
  eyebrowLabel: string;
  coupleNames: string[];
  dateLabel: string;
  tagline?: string | null;
  ctaLabel: string;
  ctaSubtext: string;
  guestLineTemplate: string;
};

export type InvitationData = {
  eyebrowLabel: string;
  coupleNames: string[];
  weddingDate: string;
  formalWording: string;
  guestGreetingTemplate: string;
};


export type Pet = { name: string; type: string; imageUrl?: string | null };

export type CoupleData = {
  portraitImageUrl?: string | null;
  coupleNames: string[];
  tagline?: string | null;
  pets: Pet[];
  eventDateShort: string;
};

export type CountdownData = {
  targetDateTime: string;
  supportingLine?: string | null;
  timezone?: string;
};

export type WeddingEvent = {
  id: string;
  name: string;
  /** ISO datetime, or null/"" when the time is still to be announced. */
  dateTime: string | null;
  venueName: string;
  venueAddress?: string | null;
  dressCode?: string | null;
  note?: string | null;
  mapUrl?: string | null;
  icon?: "sparkle" | "glass" | "ring" | "cake" | "music" | "flower";
};

export type DressCode = { global?: string | null; colorPalette?: string[] };

/** Per-couple choice for functions the guest isn't invited to (PRD §8.5). */
export type EventsConfig = {
  sectionLabel: string;
  uninvitedEventDisplay: "hide" | "special-invitation";
  specialInvitationLabel: string;
  collapseAfter: number;
  dressCode?: DressCode | null;
};

export type RsvpConfig = {
  headline: string;
  supportingLine?: string | null;
  mealOptions: string[];
  eventsAvailableForRsvp: string[];
  deadline?: string | null;
  defaultMaxGuests: number;
};

export type RsvpResponse = {
  attending: boolean;
  guestCount: number;
  mealPreference?: string | null;
  attendingEvents: string[];
  noteToCouple?: string | null;
  name?: string | null;
};

export type GalleryItem = { id: string; imageUrl: string; caption?: string | null };


export type FamilyMember = {
  id: string;
  name: string;
  relation: string;
  side: "bride" | "groom" | "both";
  imageUrl?: string | null;
};

export type Wish = {
  id: string;
  from: string;
  message: string;
  createdAt: string;
  guestId?: string | null;
};

export type TravelOption = {
  id: string;
  kind: "flight" | "train" | "road" | "shuttle" | "stay";
  title: string;
  detail: string;
  link?: string | null;
};

export type ContactPerson = {
  id: string;
  name: string;
  role: string;
  phone?: string | null;
  whatsapp?: string | null;
};

export type WeddingData = {
  coupleSlug: string;
  opening: OpeningData;
  preview: PreviewData;
  invitation: InvitationData;

  couple: CoupleData;
  countdown: CountdownData;
  events: WeddingEvent[];
  eventsConfig: EventsConfig;
  rsvp: RsvpConfig;

  gallery: GalleryItem[];
  family: FamilyMember[];
  wishes: Wish[];
  travel: TravelOption[];
  contacts: ContactPerson[];
  footer: { closingLine: string; hashtag?: string | null; monogramText: string };
};
