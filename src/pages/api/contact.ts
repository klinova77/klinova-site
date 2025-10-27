// src/pages/api/contact.ts
export const prerender = false;

import type { APIRoute } from 'astro';

// ─────────────────────────────────────────────────────────────
// ENV & Defaults (tout surchargable via Vercel Env Vars)
// ─────────────────────────────────────────────────────────────
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY as string | undefined;

const MAIL_TO             = import.meta.env.MAIL_TO             || 'klinova.contact@gmail.com';
const THANK_YOU_REDIRECT  = import.meta.env.THANK_YOU_REDIRECT  || '/contact';

const BRAND_NAME          = import.meta.env.BRAND_NAME          || 'Klinova';
// ⚠️ Pour les tests Resend sans domaine vérifié, garde onboarding@resend.dev.
// Quand ton domaine est vérifié sur Resend, passe à 'contact@klinova.fr'.
const BRAND_EMAIL         = import.meta.env.BRAND_EMAIL         || 'onboarding@resend.dev'; 
const BRAND_PHONE_DISPLAY = import.meta.env.BRAND_PHONE_DISPLAY || '06 76 73 86 61';
const BRAND_PHONE_E164    = import.meta.env.BRAND_PHONE_E164    || '+33676738661';

// Optionnel : override explicite de l'expéditeur (ex: "Klinova <contact@klinova.fr>")
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

// ─────────────────────────────────────────────────────────────
// Healthcheck simple (utile en debug)
// ─────────────────────────────────────────────────────────────
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      ok: true,
      mail_to: MAIL_TO,
      brand: BRAND_NAME,
      resendConfigured: Boolean(RESEND_API_KEY),
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
};

// ─────────────────────────────────────────────────────────────
// Handler principal
// ─────────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request, redirect }) => {
  // Le front envoie du FormData (submit native) → on lit formData()
  // (Si jamais tu envoies en fetch JSON, tu peux ajouter une branche JSON.)
  const form = await request.formData();

  // Honeypot anti-spam (champ caché "website")
  if ((form.get('website') as string)?.trim()) {
    return new Response(null, { status: 204 });
  }

  // Champs attendus (avec alias courants pour compatibilité)
  const prenom       = String(form.get('prenom') || '').trim();
  const nom          = String(form.get('nom') || '').trim();
  const email        = String(form.get('email') || '').trim();

  const telephoneRaw = String((form.get('telephone') ?? form.get('phone') ?? '')).trim();
  const telephoneE164FromForm = String(form.get('telephone_e164') || '').trim();
  const telNorm      = telephoneE164FromForm || normalizePhoneFR(telephoneRaw);

  const code_postal  = String((form.get('code_postal') ?? form.get('cp') ?? '')).trim();
  const surface      = String(form.get('surface') || '').trim();
  const message      = String(form.get('message') || '').trim();
  const source       = String(form.get('source') || 'form').trim();
  const rgpd         = String(form.get('rgpd') ?? form.get('consent') ?? '').trim();

  // URLs d’images facultatives (photos[])
  const photos = form.getAll('photos[]').map(v => String(v)).filter(Boolean);

  // Validations souples (on ne bloque que le strict minimum)
  if (!telNorm) {
    const msg = 'Téléphone invalide (ex: 06… ou +33…)';
    return wantsJSON(request.headers)
      ? new Response(JSON.stringify({ ok: false, error: msg }), { status: 400, headers: { 'content-type': 'application/json' } })
      : new Response(msg, { status: 400 });
  }
  if (code_postal && !/^\d{5}$/.test(code_postal)) {
    const msg = 'Code postal invalide (5 chiffres requis)';
    return wantsJSON(request.headers)
      ? new Response(JSON.stringify({ ok: false, error: msg }), { status: 400, headers: { 'content-type': 'application/json' } })
      : new Response(msg, { status: 400 });
  }
  if (email && !isEmail(email)) {
    const msg = 'Email invalide';
    return wantsJSON(request.headers)
      ? new Response(JSON.stringify({ ok: false, error: msg }), { status: 400, headers: { 'content-type': 'application/json' } })
      : new Response(msg, { status: 400 });
  }

  // Sujet + contenu interne
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
    photos.length ? `\nPhotos :\n${photos.map(u => `- ${u}`).join('\n')}` : null,
    '',
    message || 'Aucun message spécifique',
    '',
    `— Email généré automatiquement par ${BRAND_NAME}`,
  ].filter(Boolean);
  const bodyInterne = lines.join('\n');

  // Envoi interne (ne casse pas la conversion si Resend indispo)
  const okInterne = await sendViaResend({
    from: RESEND_FROM,            // ex: "Klinova <onboarding@resend.dev>" en test
    to: [MAIL_TO],
    reply_to: isEmail(email) ? email : undefined,
    subject: subjectInterne,
    text: bodyInterne,
  });

  if (!okInterne) {
    console.warn('[contact] RESEND_API_KEY absent ou envoi impossible — aucun email interne envoyé.');
  }

  // Accusé réception client (si email fourni)
  if (isEmail(email)) {
    const ack = [
      `Bonjour ${prenom || ''},`,
      '',
      `Merci pour votre demande. Notre équipe ${BRAND_NAME} vous recontacte très vite (souvent sous quelques heures ouvrées).`,
      '',
      `Pour toute urgence, vous pouvez nous appeler au ${BRAND_PHONE_DISPLAY} (${BRAND_PHONE_E164}).`,
      '',
      `— ${BRAND_NAME}`,
      `${BRAND_EMAIL}`,
    ].join('\n');

    await sendViaResend({
      from: RESEND_FROM,
      to: [email],
      subject: 'Nous avons bien reçu votre demande ✔',
      text: ack,
    });
  }

  // Réponse UX-friendly
  return wantsJSON(request.headers)
    ? new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      })
    : redirect(THANK_YOU_REDIRECT, 303);
};
