// src/lib/utm.ts
export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

/**
 * Ajoute proprement des UTM à une URL http/https.
 * - Ignore tel:/mailto:/#...
 * - Préserve l’ancre #hash
 * - N’écrase pas les UTM existantes sauf si override = true
 */
export function withUtm(href: string, utm: UtmParams = {}, override = false): string {
  if (/^(tel:|mailto:|#)/i.test(href)) return href;
  if (!/^https?:\/\//i.test(href)) return href;

  const [pathAndQuery, hash = ''] = href.split('#');
  const [path, query = ''] = pathAndQuery.split('?');
  const params = new URLSearchParams(query);

  for (const [k, v] of Object.entries(utm)) {
    if (!v) continue;
    if (override || !params.get(k)) params.set(k, v);
  }

  const qs = params.toString();
  const rebuilt = qs ? `${path}?${qs}` : path;
  return hash ? `${rebuilt}#${hash}` : rebuilt;
}
