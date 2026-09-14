import type { CSSProperties } from "react";

/**
 * Helper function to create responsive CSS background-image style with WebP support and fallback.
 * Uses CSS image-set() with baseline url() fallback.
 */
export function getResponsiveBackgroundImage(
  webpUrl: string,
  fallbackUrl: string,
  mimeType: "image/jpeg" | "image/png" = "image/png"
): CSSProperties {
  const resolvedMime =
    mimeType ||
    (fallbackUrl.endsWith(".jpg") || fallbackUrl.endsWith(".jpeg")
      ? "image/jpeg"
      : "image/png");

  return {
    backgroundImage: `url("${fallbackUrl}"), image-set(url("${webpUrl}") 1x type("image/webp"), url("${fallbackUrl}") 1x type("${resolvedMime}"))`,
  };
}

export interface ImageAsset {
  url: string;
  webpUrl?: string;
}
