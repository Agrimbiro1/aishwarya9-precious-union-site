import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Guest } from "@/data/types";
import { resolveGuestToken } from "@/data/sample-wedding";

/** PRD §6.4 — a single personalize() utility with guaranteed fallbacks. */
export function personalize(
  template: string,
  guest: Guest | null,
  fallbacks: Record<string, string> = {},
): string {
  const values: Record<string, string> = {
    guestName: guest?.displayName?.trim() || fallbacks["guestName"] || "",
    formalName:
      guest?.formalName?.trim() || guest?.displayName?.trim() || fallbacks["formalName"] || "",
    guestGroup: guest?.guestGroup?.trim() || fallbacks["guestGroup"] || "",
    ...fallbacks,
  };

  let missing = false;
  const out = template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_m, key: string) => {
    const value = values[key];
    if (!value) missing = true;
    return value ?? "";
  });
  // Never render a half-filled template line.
  return missing ? "" : out.replace(/\s+/g, " ").trim();
}

type GuestState = {
  guest: Guest | null;
  status: "loading" | "resolved" | "anonymous";
  /** true when we have a usable name to address the guest by */
  isPersonalized: boolean;
  /** Safe display name for inline use, never null/undefined. */
  name: string;
  /** Events this guest may see; null means "show everything public". */
  invitedEvents: string[] | null;
  maxGuestCount: number;
  personalize: (template: string, fallbacks?: Record<string, string>) => string;
  greeting: string;
};

const GuestContext = createContext<GuestState | null>(null);

function readToken(): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get("g");
}

export function GuestProvider({ children }: { children: ReactNode }) {
  const [guest, setGuest] = useState<Guest | null>(null);
  const [status, setStatus] = useState<GuestState["status"]>("loading");

  useEffect(() => {
    let alive = true;
    const token = readToken();
    if (!token) {
      setStatus("anonymous");
      return;
    }
    resolveGuestToken(token)
      .then((g) => {
        if (!alive) return;
        setGuest(g);
        setStatus(g ? "resolved" : "anonymous");
      })
      .catch(() => {
        if (alive) setStatus("anonymous");
      });
    return () => {
      alive = false;
    };
  }, []);

  const value = useMemo<GuestState>(() => {
    const name = guest?.displayName?.trim() || "";
    const isPersonalized = name.length > 0;
    const greeting = isPersonalized ? personalize("A special invite for {{guestName}}", guest) : "";
    return {
      guest,
      status,
      isPersonalized,
      name,
      invitedEvents:
        guest?.invitedEvents && guest.invitedEvents.length > 0 ? guest.invitedEvents : null,
      maxGuestCount: Math.max(1, guest?.allowedGuestCount ?? 1),
      personalize: (template, fallbacks) => personalize(template, guest, fallbacks),
      greeting,
    };
  }, [guest, status]);

  return <GuestContext.Provider value={value}>{children}</GuestContext.Provider>;
}

export function useGuest(): GuestState {
  const ctx = useContext(GuestContext);
  if (!ctx) {
    // Never crash a section because personalization is unavailable.
    return {
      guest: null,
      status: "anonymous",
      isPersonalized: false,
      name: "",
      invitedEvents: null,
      maxGuestCount: 1,
      personalize: (template) => personalize(template, null),
      greeting: "",
    };
  }
  return ctx;
}
