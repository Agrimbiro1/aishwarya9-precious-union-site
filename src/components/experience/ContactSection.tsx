import { Section } from "./InvitationExperience";
import { Divider } from "./Ornaments";
import type { ContactConfig, ContactPerson } from "@/data/types";

/**
 * Contact — the only section with a photographic backdrop. It stays inside the
 * visual system by sitting behind a cream card with the same border, script
 * heading and tracking as every other section.
 */
export function ContactSection({
  people,
  config,
}: {
  people: ContactPerson[];
  config: ContactConfig;
}) {
  const list = (people ?? []).filter((p) => p?.name);
  if (list.length === 0) return null;

  return (
    <Section
      id="contact"
      className="relative flex min-h-full flex-col justify-center overflow-hidden border-t border-accent-secondary/30"
    >
      {config.backgroundImageUrl ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img
            src={config.backgroundImageUrl}
            alt=""
            loading="lazy"
            className="size-full object-cover"
          />
          <span className="absolute inset-0 bg-background/72" />
        </div>
      ) : null}

      <div className="relative mx-auto w-full max-w-[20rem] rounded-[1.6rem] border border-accent-secondary/55 bg-surface/88 px-5 py-8 text-center shadow-[0_20px_45px_-30px_rgba(0,0,0,0.5)] backdrop-blur-[2px]">
        <h2 className="font-script text-[2.15rem] text-accent-primary">{config.sectionLabel}</h2>
        {config.supportingLine ? (
          <p className="mt-2 font-body text-label italic text-ink/70">{config.supportingLine}</p>
        ) : null}
        <Divider className="mx-auto mt-4 h-3 w-28 text-accent-secondary" />

        <ul className="mt-6 space-y-4 text-left">
          {list.map((p) => (
            <li key={p.id} className="border-b border-accent-secondary/35 pb-4 last:border-0 last:pb-0">
              <p className="font-heading text-heading uppercase tracking-[0.2em] text-accent-primary">
                {p.name}
              </p>
              <p className="font-body text-micro uppercase tracking-[0.16em] text-ink/60">
                {p.role}
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                {p.phone ? (
                  <a
                    href={`tel:${p.phone}`}
                    className="rounded-full border border-accent-primary/55 px-4 py-1.5 font-heading text-micro uppercase tracking-[0.2em] text-accent-primary"
                  >
                    Call
                  </a>
                ) : null}
                {p.whatsapp ? (
                  <a
                    href={`https://wa.me/${p.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-accent-secondary/60 px-4 py-1.5 font-heading text-micro uppercase tracking-[0.2em] text-ink/75"
                  >
                    WhatsApp
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
