// src/pages/api/contact.ts
export const prerender = false;
// Runtime Node pour compat Vercel + fetch/crypto/etc.
export const config = { runtime: 'node' };

import type { APIRoute } from 'astro';

// ─────────────────────────────────────────────────────────────
// ENV & Defaults (surchargables via Vercel Env Vars)
// ─────────────────────────────────────────────────────────────
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY as string | undefined;

const MAIL_TO            = import.meta.env.MAIL_TO            || 'klinova.contact@gmail.com';
const THANK_YOU_REDIRECT = import.meta.env.THANK_YOU_REDIRECT || '/contact';

const BRAND_NAME          = import.meta.env.BRAND_NAME          || 'Klinova';
// ⚠️ En test sans domaine Resend vérifié, garde onboarding@resend.dev
const BRAND_EMAIL         = import.meta.env.BRAND_EMAIL         || 'onboarding@resend.dev';
const BRAND_PHONE_DISPLAY = import.meta.env.BRAND_PHONE_DISPLAY || '06 76 73 86 61';
const BRAND_PHONE_E164    = import.meta.env.BRAND_PHONE_E164    || '+33676738661';

// Optionnel : override "from" explicite (ex: "Klinova <contact@klinova.fr>")
const RESEND_FROM         = import.meta.env.RESEND_FROM         || `${BRAND_NAME} <${BRAND_EMAIL}>`;

// ─────────────────────────────────────────────────────────────
// Utils
// ─────────────────────────────────────────────────────────────
const wantsJSON = (h: Headers) =>
  (h.get('accept') || '').toLowerCase().includes('application/json');

const isEmail = (s = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());

function normalizePhoneFR(raw?: string | null): string | null {
  if (!raw) return null;
  let v = String(raw).trim().replace(/[^\d+]/g, '');
  if (v.startsWith('00')) v = '+' + v.slice(2);
  if (v.startsWith('+33')) {
    v = v.slice(3).replace(/^0+/, '');
    return /^\d{9}$/.test(v) ? '+33' + v : null;
  }
  if (v.startsWith('33')) {
    v = v.slice(2).replace(/^0+/, '');
    return /^\d{9}$/.test(v) ? '+33' + v : null;
  }
  const digits = v.replace(/\D/g, '');
  if (/^0\d{9}$/.test(digits)) return '+33' + digits.slice(1);
  if (/^\d{9}$/.test(digits)) return '+33' + digits;
  return null;
}

async function sendViaResend(payload: Record<string, any>): Promise<boolean> {
  try {
    if (!RESEND_API_KEY) return false;
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      console.error('[Resend] HTTP', res.status, txt);
      return false;
    }
    return true;
  } catch (e) {
    console.error('[Resend] exception', e);
    return false;
  }
}

function textBlock(label: string, value?: string | null) {
  if (!value) return null;
  return `${label} ${value}`;
}

function listify(label: string, arr: string[]) {
  if (!arr?.length) return null;
  return `${label}\n${arr.map((u) => `- ${u}`).join('\n')}`;
}

function toHtmlList(urls: string[]) {
  if (!urls?.length) return '';
  return `<ul>${urls.map((u) => `<li><a href="${u}">${u}</a></li>`).join('')}</ul>`;
}

// ─────────────────────────────────────────────────────────────
// GET — Healthcheck (utile en debug preview)
// ─────────────────────────────────────────────────────────────
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      ok: true,
      brand: BRAND_NAME,
      mail_to: MAIL_TO,
      resendConfigured: Boolean(RESEND_API_KEY),
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
};

// ─────────────────────────────────────────────────────────────
// POST — Handler principal (FormData OU JSON)
// ─────────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request, redirect }) => {
  const ctype = (request.headers.get('content-type') || '').toLowerCase();

  // Honeypot anti-spam si on est en FormData (champ "website")
  // NB: si JSON, on vérifie aussi le champ éventuel.
  let honeypotTrip = false;

  // Champs communs
  let prenom = '';
  let nom = '';
  let email = '';
  let telephoneRaw = '';
  let telephoneE164FromForm = '';
  let telNorm: string | null = null;
  let code_postal = '';
  let surface = '';
  let message = '';
  let source = 'form';
  let rgpd = '';

  // URLs d’images (venues de Cloudinary via inputs hidden "photos[]")
  let photos: string[] = [];

  if (ctype.includes('application/json')) {
    // ── JSON branch (fetch POST application/json)
    const body = await request.json().catch(() => ({} as any));

    honeypotTrip = Boolean((body?.website || '').trim());

    prenom = String(body?.prenom || '').trim();
    nom = String(body?.nom || '').trim();
    email = String(body?.email || '').trim();

    telephoneRaw = String(body?.telephone ?? body?.phone ?? '').trim();
    telephoneE164FromForm = String(body?.telephone_e164 || '').trim();
    telNorm = telephoneE164FromForm || normalizePhoneFR(telephoneRaw);

    code_postal = String(body?.code_postal ?? body?.cp ?? '').trim();
    surface = String(body?.surface || '').trim();
    message = String(body?.message || '').trim();
    source = String(body?.source || 'form').trim();
    rgpd = String(body?.rgpd ?? body?.consent ?? '').trim();

    // Photos: accepter plusieurs formats (photos, photos[], photos_json, cloudinary_urls)
    const rawPhotos = [
      ...(Array.isArray(body?.photos) ? body.photos : []),
      ...(Array.isArray(body?.['photos[]']) ? body['photos[]'] : []),
    ];
    if (typeof body?.photos_json === 'string') {
      try {
        const arr = JSON.parse(body.photos_json);
        if (Array.isArray(arr)) rawPhotos.push(...arr);
      } catch {}
    }
    if (typeof body?.cloudinary_urls === 'string') {
      rawPhotos.push(...body.cloudinary_urls.split(',').map((s: string) => s.trim()));
    }
    photos = rawPhotos
      .map((v: any) => String(v || '').trim())
      .filter((u: string) => !!u);

  } else {
    // ── FormData branch (submit natif)
    const form = await request.formData();

    honeypotTrip = Boolean((form.get('website') as string)?.trim());
    if (honeypotTrip) return new Response(null, { status: 204 });

    prenom = String(form.get('prenom') || '').trim();
    nom = String(form.get('nom') || '').trim();
    email = String(form.get('email') || '').trim();

    telephoneRaw = String((form.get('telephone') ?? form.get('phone') ?? '')).trim();
    telephoneE164FromForm = String(form.get('telephone_e164') || '').trim();
    telNorm = telephoneE164FromForm || normalizePhoneFR(telephoneRaw);

    code_postal = String((form.get('code_postal') ?? form.get('cp') ?? '')).trim();
    surface = String(form.get('surface') || '').trim();
    message = String(form.get('message') || '').trim();
    source = String(form.get('source') || 'form').trim();
    rgpd = String(form.get('rgpd') ?? form.get('consent') ?? '').trim();

    // Photos: inputs hidden "photos[]" injectés par le JS d’upload Cloudinary
    const p1 = form.getAll('photos[]').map((v) => String(v)).filter(Boolean);
    // Accepter aussi variantes si jamais
    const p2 = (form.get('photos') ? [String(form.get('photos'))] : []).filter(Boolean);
    const p3 = (form.get('cloudinary_urls') ? String(form.get('cloudinary_urls')).split(',') : []).map((s) => s.trim());
    photos = [...p1, ...p2, ...p3].filter(Boolean);
  }

  // Honeypot en JSON
  if (honeypotTrip) return new Response(null, { status: 204 });

  // Validations souples (ne bloquer que l’essentiel)
  if (!telNorm) {
    const msg = 'Téléphone invalide (ex: 06… ou +33…)';
    return wantsJSON(request.headers)
      ? new Response(JSON.stringify({ ok: false, error: msg }), {
          status: 400,
          headers: { 'content-type': 'application/json' },
        })
      : new Response(msg, { status: 400 });
  }
  if (code_postal && !/^\d{5}$/.test(code_postal)) {
    const msg = 'Code postal invalide (5 chiffres requis)';
    return wantsJSON(request.headers)
      ? new Response(JSON.stringify({ ok: false, error: msg }), {
          status: 400,
          headers: { 'content-type': 'application/json' },
        })
      : new Response(msg, { status: 400 });
  }
  if (email && !isEmail(email)) {
    const msg = 'Email invalide';
    return wantsJSON(request.headers)
      ? new Response(JSON.stringify({ ok: false, error: msg }), {
          status: 400,
          headers: { 'content-type': 'application/json' },
        })
      : new Response(msg, { status: 400 });
  }

  // Sujet + contenus (texte + HTML) pour l’email interne
  const subjectInterne =
    `🧼 Nouvelle demande – ${prenom || 'Client'}${nom ? ' ' + nom : ''}` +
    (code_postal ? ` (${code_postal})` : '');

  const lines = [
    `——— Demande reçue via ${BRAND_NAME} ———`,
    textBlock('Prénom :', prenom),
    textBlock('Nom :', nom),
    textBlock('Email :', email || null),
    textBlock('Téléphone (E164) :', telNorm),
    textBlock('Téléphone (brut) :', telephoneRaw || null),
    textBlock('Code postal :', code_postal || null),
    textBlock('Surface :', surface || null),
    textBlock('Source :', source),
    textBlock('RGPD :', rgpd || null),
    listify('Photos :', photos),
    '',
    message || 'Aucun message spécifique',
    '',
    `— Email généré automatiquement par ${BRAND_NAME}`,
  ].filter(Boolean) as string[];

  const bodyInterneText = lines.join('\n');

  const bodyInterneHtml = `
    <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5">
      <h2 style="margin:0 0 12px">Demande reçue via ${BRAND_NAME}</h2>
      <p><strong>Prénom :</strong> ${prenom || '-'}</p>
      <p><strong>Nom :</strong> ${nom || '-'}</p>
      <p><strong>Email :</strong> ${email || '-'}</p>
      <p><strong>Téléphone (E164) :</strong> ${telNorm || '-'}</p>
      ${telephoneRaw ? `<p><strong>Téléphone (brut) :</strong> ${telephoneRaw}</p>` : ''}
      ${code_postal ? `<p><strong>Code postal :</strong> ${code_postal}</p>` : ''}
      ${surface ? `<p><strong>Surface :</strong> ${surface}</p>` : ''}
      <p><strong>Source :</strong> ${source}</p>
      ${rgpd ? `<p><strong>RGPD :</strong> ${rgpd}</p>` : ''}
      ${photos?.length ? `<h3>Photos</h3>${toHtmlList(photos)}` : ''}
      <h3>Message</h3>
      <pre style="white-space:pre-wrap;background:#f6f7f9;padding:12px;border-radius:8px">${message || 'Aucun message spécifique'}</pre>
      <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb" />
      <p style="color:#475569">— Email généré automatiquement par ${BRAND_NAME}</p>
    </div>
  `;

  // Envoi interne (ne bloque pas la réponse si Resend indispo)
  const okInterne = await sendViaResend({
    from: RESEND_FROM,
    to: [MAIL_TO],
    reply_to: isEmail(email) ? email : undefined,
    subject: subjectInterne,
    text: bodyInterneText,
    html: bodyInterneHtml,
  });

  if (!okInterne) {
    console.warn('[contact] RESEND_API_KEY absent ou échec envoi — aucun email interne envoyé.');
  }

  // Accusé de réception client (si email fourni)
  if (isEmail(email)) {
    const ackText = [
      `Bonjour ${prenom || ''},`,
      '',
      `Merci pour votre demande. Notre équipe ${BRAND_NAME} vous recontacte très vite (souvent sous quelques heures ouvrées).`,
      '',
      `Pour toute urgence, vous pouvez nous appeler au ${BRAND_PHONE_DISPLAY} (${BRAND_PHONE_E164}).`,
      '',
      `— ${BRAND_NAME}`,
      `${BRAND_EMAIL}`,
    ].join('\n');

    const ackHtml = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
        <p>Bonjour ${prenom || ''},</p>
        <p>Merci pour votre demande. Notre équipe <strong>${BRAND_NAME}</strong> vous recontacte très vite (souvent sous quelques heures ouvrées).</p>
        <p>Pour toute urgence, vous pouvez nous appeler au <strong>${BRAND_PHONE_DISPLAY}</strong> (${BRAND_PHONE_E164}).</p>
        <p>— ${BRAND_NAME}<br/>${BRAND_EMAIL}</p>
      </div>
    `;

    await sendViaResend({
      from: RESEND_FROM,
      to: [email],
      subject: 'Nous avons bien reçu votre demande ✔',
      text: ackText,
      html: ackHtml,
    });
  }

  // Réponse
  if (wantsJSON(request.headers)) {
    return new Response(
      JSON.stringify({ ok: true, photosCount: photos.length }),
      { status: 200, headers: { 'content-type': 'application/json' } }
    );
  }
  return redirect(THANK_YOU_REDIRECT, 303);
};
