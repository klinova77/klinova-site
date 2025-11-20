import type { APIRoute } from 'astro';
import { generateCityPaths } from '~/utils/generate-city-pages';

const SITE_URL = 'https://klinova.fr'; // adapte si besoin

export const prerender = true;

export const GET: APIRoute = () => {
  const paths = generateCityPaths();

  const urls = paths
    .map(({ params }) => {
      const loc = `${SITE_URL}/zones-d-intervention/${params.city}/${params.service}`;
      return `
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
