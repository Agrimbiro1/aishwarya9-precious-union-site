import { createFileRoute } from "@tanstack/react-router";
import { GuestProvider, useGuest } from "@/lib/guest";
import { PhoneStage } from "@/components/experience/PhoneStage";
import { InvitationExperience, Section } from "@/components/experience/InvitationExperience";
import { sampleWedding } from "@/data/sample-wedding";
import type { WeddingData } from "@/data/types";

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
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <GuestProvider>
      <PhoneStage>
        <InvitationExperience>
          <StageOnePreview data={sampleWedding} />
        </InvitationExperience>
      </PhoneStage>
    </GuestProvider>
  );
}

/** Temporary Stage 1 scaffold panel — replaced by real sections in Stage 2+. */
function StageOnePreview({ data }: { data: WeddingData }) {
  const guest = useGuest();
  const greeting = guest.personalize(data.invitation.guestGreetingTemplate);

  return (
    <Section id="stage-one" className="flex min-h-[932px] flex-col justify-center text-center">
      <p className="font-heading text-label uppercase tracking-[0.32em] text-accent-primary/80">
        {data.invitation.eyebrowLabel}
      </p>

      <h1 className="mt-4 font-script text-display leading-[0.95] text-accent-primary">
        {data.invitation.coupleNames.join(" & ")}
      </h1>

      <div className="mx-auto my-8 h-px w-24 bg-accent-secondary" />

      {greeting ? (
        <p className="font-body text-body text-ink">{greeting}</p>
      ) : (
        <p className="font-body text-body italic text-ink/70">
          You are lovingly invited to celebrate with us.
        </p>
      )}

      <p className="mt-6 font-body text-body leading-relaxed text-ink/85">
        {data.invitation.formalWording}
      </p>

      <dl className="mx-auto mt-10 w-full max-w-[18rem] space-y-2 rounded-2xl border border-accent-secondary/40 bg-surface/80 p-5 text-left font-heading text-label uppercase tracking-[0.18em] text-ink/70">
        <div className="flex justify-between gap-3">
          <dt>Guest</dt>
          <dd className="truncate text-accent-primary">{guest.name || "Not identified"}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>Status</dt>
          <dd className="text-accent-primary">{guest.status}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>Seats</dt>
          <dd className="text-accent-primary">{guest.maxGuestCount}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>Events</dt>
          <dd className="text-accent-primary">{guest.invitedEvents?.length ?? "all"}</dd>
        </div>
      </dl>

      <p className="mt-10 font-heading text-micro uppercase tracking-[0.24em] text-ink/45">
        Stage 1 — design system, phone shell &amp; personalization ready
      </p>
    </Section>
  );
}
