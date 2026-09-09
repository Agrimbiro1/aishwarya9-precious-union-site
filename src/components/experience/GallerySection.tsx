import { Section } from "./InvitationExperience";
import { Divider, PhotoPlaceholder } from "./Ornaments";
import type { GalleryConfig, GalleryItem } from "@/data/types";

import { useGuest } from "@/lib/guest";

/**
 * Gallery — a scrapbook strip of photographs. When the couple hasn't uploaded
 * anything yet we draw an illustrated frame in the same line style, never a
 * broken image. Individual images that fail to load are hidden the same way.
 */
export function GallerySection({
  items,
  config,
}: {
  items: GalleryItem[];
  config: GalleryConfig;
}) {
  const { personalize } = useGuest();
  const photos = (items ?? []).filter((i) => i?.imageUrl);
  const supportingText = config.supportingLine ? personalize(config.supportingLine) || config.supportingLine : null;
  const emptyText = config.emptyStateLine ? personalize(config.emptyStateLine) || config.emptyStateLine : null;

  return (
    <Section
      id="gallery"
      className="relative flex min-h-full flex-col justify-center border-t border-accent-secondary/30"
    >
      <h2 className="text-center font-script text-[2.3rem] text-accent-primary">
        {config.sectionLabel}
      </h2>
      {supportingText ? (
        <p className="mt-2 text-center font-body text-label italic text-ink/70">
          {supportingText}
        </p>
      ) : null}
      <Divider className="mx-auto mt-4 h-3 w-32 text-accent-secondary" />

      {photos.length === 0 ? (
        <div className="mt-8 rounded-[1.6rem] border border-dashed border-accent-secondary/60 bg-surface/60 px-6 py-9 text-center">
          <PhotoPlaceholder className="mx-auto h-32 w-24 text-accent-primary/55" />
          <p className="mt-5 font-body text-body italic leading-relaxed text-ink/75">
            {emptyText}
          </p>
        </div>
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-3">
          {photos.map((photo, i) => (
            <li
              key={photo.id}
              className={`overflow-hidden rounded-[1.1rem] border border-accent-secondary/45 bg-surface/70 ${
                i % 3 === 0 ? "col-span-2" : ""
              }`}
            >
              <img
                src={photo.imageUrl}
                alt={photo.caption ?? "A moment from the couple's album"}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.closest("li")?.setAttribute("hidden", "true");
                }}
                className={`w-full object-cover ${i % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}
              />
              {photo.caption ? (
                <p className="px-3 py-2 font-body text-micro italic text-ink/70">{photo.caption}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
