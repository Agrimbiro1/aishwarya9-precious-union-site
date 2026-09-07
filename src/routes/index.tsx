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
  return (
    <GuestProvider>
      <PhoneStage>
        <InvitationExperience>
          <OpeningAnimation data={data.opening} />
          <InvitationSection data={data.invitation} />
          <CoupleSection data={data.couple} />
        </InvitationExperience>
      </PhoneStage>
    </GuestProvider>
  );
}

