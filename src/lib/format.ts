/** Shared date helpers so every section formats content identically. */

export function formatLongDate(value: string | null | undefined): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatNumericDate(value: string | null | undefined): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())} . ${pad(d.getMonth() + 1)} . ${d.getFullYear()}`;
}

/**
 * Formats an ISO datetime in the *event's own* timezone (the offset written in
 * the string), so a guest browsing from another country still reads the local
 * ceremony time. Returns "" for missing/TBD values.
 */
export function formatEventWhen(value: string | null | undefined): string {
  if (!value) return "";
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(value);
  if (!m) return "";
  const [, y, mo, d, hh, mm] = m as unknown as string[];
  const utc = new Date(
    Date.UTC(Number(y), Number(mo) - 1, Number(d), Number(hh), Number(mm)),
  );
  if (Number.isNaN(utc.getTime())) return "";
  const day = utc.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });
  const time = utc.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  });
  return `${day}, ${time}`;
}
