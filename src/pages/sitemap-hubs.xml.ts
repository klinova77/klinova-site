// src/pages/sitemap-hubs.xml.ts
import type { APIRoute } from "astro";
import { generateCityPaths } from "~/utils/generate-city-pages";

const SITE_URL = "https://klinova.fr";
export const prerender = true;

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const GET: APIRoute = () => {
  const paths = generateCityPaths();

  // 1) extraire les couples uniques (department, city)
  const cityHubs = new Set<string>();
  const deptHubs = new Set<string>();

  for (const { params } of paths) {
    deptHubs.add(`${SITE_URL}/zones-d-intervention/${params.department}`);
    cityHubs.add(`${SITE_URL}/zones-d-intervention/${params.department}/${params.city}`);
  }

  const urls = [
    `${SITE_URL}/zones-d-intervention`,
    ...Array.from(deptHubs).sort(),
    ...Array.from(cityHubs).sort(),
  ]
    .map(
      (loc) => `
  <url>
    <loc>${esc(loc)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
