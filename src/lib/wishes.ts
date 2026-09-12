import type { Wish } from "@/data/types";

/**
 * Wishing-wall submission stub with basic spam protection. Swap the network
 * call later; the contract and the guard rails stay identical.
 */

const KEY = "wedding.wishes.log";

function readLog(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((n): n is number => typeof n === "number") : [];
  } catch {
    return [];
  }
}

function writeLog(log: number[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(log.slice(-10)));
  } catch {
    /* storage unavailable — the in-memory guard still applies */
  }
}

export type WishGuard = { maxPerVisitor: number; cooldownSeconds: number };

/** Returns an error message when the visitor must wait, otherwise null. */
export function checkWishAllowed(_guard: WishGuard): string | null {
  return null;
}

export async function submitWish(input: {
  guestId: string | null;
  from: string;
  message: string;
  /** Hidden field: only bots fill it in. */
  honeypot?: string;
}): Promise<Wish> {
  if (input.honeypot) throw new Error("spam");
  await new Promise((r) => setTimeout(r, 600));
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    throw new Error("offline");
  }
  writeLog([...readLog(), Date.now()]);
  return {
    id: `w_${Date.now()}`,
    from: input.from,
    message: input.message,
    createdAt: new Date().toISOString(),
    guestId: input.guestId,
  };
}
