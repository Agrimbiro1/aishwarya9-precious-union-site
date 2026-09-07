import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GuestProvider } from "@/lib/guest";
import { PhoneStage } from "@/components/experience/PhoneStage";
import { InvitationExperience } from "@/components/experience/InvitationExperience";
import { OpeningAnimation } from "@/components/experience/OpeningAnimation";
import { InvitationSection } from "@/components/experience/InvitationSection";
import { CoupleSection } from "@/components/experience/CoupleSection";
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
        <InvitationExperience locked={!unlocked}>
          <InvitationSection data={data.invitation} />
          <CoupleSection data={data.couple} />
        </InvitationExperience>
        <OpeningAnimation
          data={data.opening}
          preview={data.preview}
          onOpened={() => setUnlocked(true)}
        />
      </PhoneStage>
    </GuestProvider>
  );
}
