import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GuestProvider } from "@/lib/guest";
import { PhoneStage } from "@/components/experience/PhoneStage";
import { InvitationExperience } from "@/components/experience/InvitationExperience";
import { OpeningAnimation } from "@/components/experience/OpeningAnimation";
import { InvitationSection } from "@/components/experience/InvitationSection";
import { CoupleSection } from "@/components/experience/CoupleSection";
import { CountdownSection } from "@/components/experience/CountdownSection";
import { EventsSection } from "@/components/experience/EventsSection";
import { RsvpSection } from "@/components/experience/RsvpSection";
import { GallerySection } from "@/components/experience/GallerySection";
import { FamilySection } from "@/components/experience/FamilySection";
import { WishesSection } from "@/components/experience/WishesSection";
import { TravelSection } from "@/components/experience/TravelSection";
import { ContactSection } from "@/components/experience/ContactSection";
import { FooterSection } from "@/components/experience/FooterSection";

import { sampleWedding } from "@/data/sample-wedding";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavya & Rohan — A Wedding Invitation" },
      {
        name: "description",
        content:
          "A personal digital wedding invitation: events, countdown, RSVP, wishes and travel details, all in one place.",
      },
      { property: "og:title", content: "Kavya & Rohan — A Wedding Invitation" },
      {
        property: "og:description",
        content: "You are lovingly invited. Tap to open the invitation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const data = sampleWedding;
  const [unlocked, setUnlocked] = useState(false);

  return (
    <GuestProvider>
      <PhoneStage>
        <div className="relative h-full w-full overflow-hidden">
        <InvitationExperience locked={!unlocked}>
          <InvitationSection data={data.invitation} />
          <CoupleSection data={data.couple} />
          <CountdownSection data={data.countdown} />
          <EventsSection events={data.events} config={data.eventsConfig} />
          <GallerySection items={data.gallery} config={data.galleryConfig} />
          <FamilySection members={data.family} config={data.familyConfig} />
          <WishesSection wishes={data.wishes} config={data.wishesConfig} />
          <RsvpSection config={data.rsvp} events={data.events} />
          <TravelSection options={data.travel} config={data.travelConfig} />
          <ContactSection people={data.contacts} config={data.contactConfig} />
          <FooterSection data={data.footer} />


        </InvitationExperience>
        <OpeningAnimation
          data={data.opening}
          preview={data.preview}
          onOpened={() => setUnlocked(true)}
        />
        </div>
      </PhoneStage>
    </GuestProvider>
  );
}
