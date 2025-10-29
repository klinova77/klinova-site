export type TrackingData = Record<string, string | number | boolean | null | undefined>;

export function toDataAttrs(obj: TrackingData = {}) {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === null || v === undefined) continue; // on ignore vide
    // clé → kebab-case simple, valeur → string
    const key = 'data-' + String(k).toLowerCase().replace(/[^a-z0-9_-]/g, '-');
    out[key] = String(v);
  }
  return out;
}
