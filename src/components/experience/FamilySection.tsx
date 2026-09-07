import { useState } from "react";
import { Section } from "./InvitationExperience";
import { Divider, PersonSilhouette } from "./Ornaments";
import type { FamilyConfig, FamilyMember } from "@/data/types";

/**
 * Family — grouped by side so a 40-person list stays readable: each group shows
 * a few members and expands on request. Members without an illustration fall
 * back to a hand-drawn silhouette in the same style.
 */
export function FamilySection({
  members,
  config,
}: {
  members: FamilyMember[];
  config: FamilyConfig;
}) {
  const all = (members ?? []).filter((m) => m?.name);
  const groups = [
    { key: "bride", label: config.brideSideLabel, list: all.filter((m) => m.side === "bride") },
    { key: "groom", label: config.groomSideLabel, list: all.filter((m) => m.side === "groom") },
    { key: "both", label: "And With Us", list: all.filter((m) => m.side === "both") },
  ].filter((g) => g.list.length > 0);

  if (all.length === 0) return null;

  return (
    <Section
      id="family"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30"
    >
      <h2 className="text-center font-script text-[2.3rem] text-accent-primary">
        {config.sectionLabel}
      </h2>
      {config.supportingLine ? (
        <p className="mt-2 text-center font-body text-label italic text-ink/70">
          {config.supportingLine}
        </p>
      ) : null}
      <Divider className="mx-auto mt-4 h-3 w-32 text-accent-secondary" />

      <div className="mt-8 space-y-9">
        {groups.map((group) => (
          <FamilyGroup
            key={group.key}
            label={group.label}
            list={group.list}
            initial={Math.max(2, config.initialVisiblePerGroup)}
          />
        ))}
      </div>
    </Section>
  );
}

function FamilyGroup({
  label,
  list,
  initial,
}: {
  label: string;
  list: FamilyMember[];
  initial: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = list.length > initial;
  const visible = collapsible && !expanded ? list.slice(0, initial) : list;

  return (
    <div>
      <p className="text-center font-heading text-label uppercase tracking-[0.28em] text-accent-primary/85">
        {label}
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5">
        {visible.map((m) => (
          <li key={m.id} className="text-center">
            <span className="mx-auto grid size-16 place-items-center overflow-hidden rounded-full border border-accent-secondary/50 bg-surface/75">
              {m.imageUrl ? (
                <img
                  src={m.imageUrl}
                  alt={m.name}
                  loading="lazy"
                  className="size-full object-cover"
                />
              ) : (
                <PersonSilhouette className="size-9 text-accent-primary/60" />
              )}
            </span>
            <p className="mt-2 font-body text-label leading-snug text-ink/85">{m.name}</p>
            <p className="font-heading text-micro uppercase tracking-[0.16em] text-ink/55">
              {m.relation}
            </p>
          </li>
        ))}
      </ul>
      {collapsible ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mx-auto mt-5 block rounded-full border border-accent-primary/55 px-5 py-2 font-heading text-micro uppercase tracking-[0.22em] text-accent-primary"
        >
          {expanded ? "Show fewer" : `Show all ${list.length}`}
        </button>
      ) : null}
    </div>
  );
}
