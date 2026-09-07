import { useState } from "react";
import { Section } from "./InvitationExperience";
import { Divider, WeddingCar } from "./Ornaments";
import type { FooterData } from "@/data/types";

/**
 * Footer — closing line, monogram and a share action. The share URL is rebuilt
 * without the personal guest token (?g=…) so nobody forwards someone else's
 * personalised invitation.
 */
function shareableUrl(): string {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  url.searchParams.delete("g");
  url.hash = "";
  return url.toString();
}

export function FooterSection({ data }: { data: FooterData }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = shareableUrl();
    const text = data.shareMessage ?? data.closingLine;
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: data.monogramText, text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section
      id="footer"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30 text-center"
    >
      <WeddingCar className="mx-auto h-28 w-[70%] text-accent-primary/70" />
      <p className="mt-4 font-script text-[2rem] leading-snug text-accent-primary">
        {data.closingLine}
      </p>
      <Divider className="mx-auto mt-4 h-3 w-32 text-accent-secondary" />

      <p className="mt-5 font-heading text-display text-accent-primary/85">{data.monogramText}</p>

      {data.hashtag ? (
        <p className="mt-3 font-heading text-label uppercase tracking-[0.26em] text-ink/70">
          {data.hashtag}
        </p>
      ) : null}

      <button
        type="button"
        onClick={handleShare}
        className="mx-auto mt-8 rounded-full border border-accent-primary/60 px-6 py-3 font-heading text-micro uppercase tracking-[0.24em] text-accent-primary"
      >
        {copied ? "Link copied" : (data.shareLabel ?? "Share this invitation")}
      </button>
      <p className="mt-2 font-body text-micro italic text-ink/55">
        Shares the general invitation, without your personal link.
      </p>

      {data.creditLine ? (
        <p className="mt-8 font-body text-micro text-ink/45">{data.creditLine}</p>
      ) : null}
    </Section>
  );
}
