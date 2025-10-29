// src/pages/api/notify-upload.ts
export const prerender = false;
export const config = { runtime: 'node' };

import type { APIRoute } from 'astro';

const MAIL_TO = import.meta.env.MAIL_TO || 'klinova.contact@gmail.com';
const BRAND_NAME = import.meta.env.BRAND_NAME || 'Klinova';
const BRAND_EMAIL = import.meta.env.BRAND_EMAIL || 'contact@klinova.fr';

function formatBytes(bytes: number) {
  if (!bytes) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

function escapeHtml(s: string) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { Resend } = await import('resend'); // import dynamique (évite le bundling)
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const data = await request.json().catch(() => ({}));
    if (!data?.cloudinary?.secure_url) {
      return new Response(JSON.stringify({ ok: false, error: 'missing secure_url' }), {
        status: 400,
        headers: { 'content-type': 'application/json' },
      });
    }

    const subject = `Nouvel upload Cloudinary – ${data?.file?.name ?? 'fichier'}`;
    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
        <h2 style="margin:0 0 12px">${BRAND_NAME} – Upload Cloudinary</h2>
        <ul style="margin:8px 0 16px; padding-left:18px">
          <li><strong>Nom :</strong> ${escapeHtml(data?.file?.name ?? '-')}</li>
          <li><strong>Taille :</strong> ${formatBytes(data?.file?.size ?? 0)}</li>
          <li><strong>Type :</strong> ${escapeHtml(data?.file?.type ?? '-')}</li>
          <li><strong>Dossier :</strong> ${escapeHtml(data?.cloudinary?.folder ?? '-')}</li>
          <li><strong>Public ID :</strong> ${escapeHtml(data?.cloudinary?.public_id ?? '-')}</li>
        </ul>
        <p style="margin:0 0 8px"><strong>URL sécurisée :</strong> <a href="${data.cloudinary.secure_url}" target="_blank" rel="noopener">${data.cloudinary.secure_url}</a></p>
        ${
          data?.form?.email || data?.form?.name
            ? `<p style="margin:12px 0 0"><strong>Demandeur :</strong> ${escapeHtml(data?.form?.name ?? '')} &lt;${escapeHtml(data?.form?.email ?? '')}&gt;</p>`
            : ''
        }
      </div>
    `;

    await resend.emails.send({
      from: `${BRAND_NAME} <${BRAND_EMAIL}>`,
      to: MAIL_TO,
      subject,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
};
