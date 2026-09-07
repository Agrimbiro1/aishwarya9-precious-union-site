import { Divider } from "./Ornaments";
import type { PreviewData } from "@/data/types";
import { formatLongDate } from "@/lib/format";
import { useGuest } from "@/lib/guest";

/**
 * The gate card revealed behind the curtains. It is NOT a scrollable section:
 * the site stays locked until "Open Invitation" is pressed.
 */
export function InvitationPreviewCard({
  data,
  visible,
  leaving,
  onOpen,
}: {
  data: PreviewData;
  visible: boolean;
  leaving: boolean;
  onOpen: () => void;
}) {
  const guest = useGuest();
  const names = data.coupleNames.filter(Boolean);
  const title = names.join(" & ");
  const isLong = title.length > 20;
  const dateLine = data.dateLabel || formatLongDate(null);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 grid place-items-center px-7"
      style={{
        opacity: leaving ? 0 : visible ? 1 : 0,
        transform: leaving ? "translateY(-18px) scale(0.94)" : visible ? "none" : "scale(0.94)",
        transition: "opacity 600ms ease-out, transform 600ms ease-out",
      }}
    >
      <div
        className={`pointer-events-auto w-full max-w-[19rem] rounded-[1.75rem] border border-accent-secondary/50 bg-surface/95 px-6 py-9 text-center shadow-frame ${
          leaving ? "" : ""
        }`}
      >
        <p className="font-heading text-micro uppercase tracking-[0.3em] text-ink/60">
          {data.eyebrowLabel}
        </p>

        <h1
          className={`mt-5 font-script leading-[1.05] text-accent-primary ${
            isLong ? "text-[2rem]" : "text-[2.6rem]"
          }`}
        >
          {title}
        </h1>

        <Divider className="mx-auto mt-3 h-3 w-28 text-accent-secondary" />

        {dateLine ? (
          <p className="mt-4 font-heading text-label uppercase tracking-[0.26em] text-ink/75">
            {dateLine}
          </p>
        ) : null}

        {data.tagline ? (
          <p className="mt-4 font-body text-body italic leading-relaxed text-ink/80">
            {data.tagline}
          </p>
        ) : null}

        {guest.isPersonalized ? (
          <p className="mt-4 font-body text-label text-ink/60">
            {guest.personalize(data.guestLineTemplate)}
          </p>
        ) : null}

        <button
          type="button"
          onClick={onOpen}
          className="mt-7 w-full min-h-11 rounded-full bg-accent-primary px-6 py-3 font-heading text-label uppercase tracking-[0.24em] text-surface transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary"
        >
          {data.ctaLabel}
        </button>

        <p className="mt-3 font-body text-micro uppercase tracking-[0.2em] text-ink/50">
          {data.ctaSubtext}
        </p>
      </div>
    </div>
  );
}
