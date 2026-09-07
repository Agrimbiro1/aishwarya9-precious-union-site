import type { RsvpResponse } from "@/data/types";

/**
 * Stand-in for the backend RSVP write. Same contract as the future server call,
 * so the section never changes when the real endpoint lands. Rejects when the
 * device is offline so the UI can show a retry prompt instead of guessing.
 */
export async function submitRsvp(payload: {
  guestId: string | null;
  response: RsvpResponse;
}): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, 650));
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    throw new Error("offline");
  }
  // eslint-disable-next-line no-console
  console.info("RSVP submitted", payload.guestId ? "(known guest)" : "(anonymous guest)");
  return { ok: true };
}
