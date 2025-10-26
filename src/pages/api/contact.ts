// src/pages/api/contact.ts
export const prerender = false;

import type { APIRoute } from 'astro';

// ───────────────────────────────────────────────────────────────────────────────
// Config (ENV + valeurs par défaut adaptées à Klinova)
// ───────────────────────────────────────────────────────────────────────────────
const MAIL_TO = import.meta.env.MAIL_TO || 'klinova.contact@gmail.com';
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY as string | undefined;

// Permet de surcharger par ENV si tu veux
const BRAND_NAME = import.meta.env.BRAND_NAME || 'Klinova';
const BRAND_EMAIL = import.meta.env.BRAND_EMAIL || 'contact@klinova.fr';
const BRAND_PHONE_DISPLAY = import.meta.env.BRAND_PHONE_DISPLAY || '06 76 73 86 61';
const BRAND_PHONE_E164 = import.meta.env.BRAND_PHONE_E164 || '+33676738661';

// Où rediriger en non-AJAX (tu peux créer /merci plus tard si tu veux)
const THANK_YOU_REDIRECT = import.meta.env.THANK_YOU_REDIRECT || '/contact';

// ───────────────────────────────────────────────────────────────────────────────
// Utils
// ───────────────────────────────────────────────────────────────────────────────
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

// n'échoue jamais : log l’erreur et renvoie false
async function trySendResend(payload: Record<string, any>): Promise<boolean> {
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
      console.error('Resend error:', res.status, txt);
      return false;
    }
    return true;
  } catch (e) {
    console.error('Resend exception:', e);
    return false;
  }
}

// ───────────────────────────────────────────────────────────────────────────────
// Handler
// ───────────────────────────────────────────────────────────────────────────────
export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();

  // Honeypot anti-spam
  if ((form.get('website') as string)?.trim()) {
    return new Response(null, { status: 204 });
  }

  // Champs (alias possibles pour compatibilité)
  const prenom = String(form.get('prenom') || '').trim(); // facultatif
  const nom = String(form.get('nom') || '').trim();
  const email = String(form.get('email') || '').trim();

  const telephoneRaw = String((form.get('telephone') ?? form.get('phone') ?? '')).trim();
  const telephoneE164FromForm = String(form.get('telephone_e164') || '').trim();

  const code_postal = String((form.get('code_postal') ?? form.get('cp') ?? '')).trim();
  const surface = String(form.get('surface') || '').trim();
  const message = String(form.get('message') || '').trim();
  const source = String(form.get('source') || 'form').trim();
  const rgpd = String(form.get('rgpd') ?? form.get('consent') ?? '').trim();

  // Support optionnel d’URLs de photos (ex: Cloudinary) : photos[]
  const photos = form.getAll('photos[]').map(v => String(v)).filter(Boolean);

  // Validations minimales (email réellement optionnel)
  const telNorm = telephoneE164FromForm || normalizePhoneFR(telephoneRaw);
  if (!telNorm) {
    return new Response('Téléphone invalide (ex: 06… ou +33…)', { status: 400 });
  }
  if (code_postal && !/^\d{5}$/.test(code_postal)) {
    return new Response('Code postal invalide (5 chiffres requis)', { status: 400 });
  }
  if (email && !isEmail(email)) {
    return new Response('Email invalide', { status: 400 });
  }
  // RGPD : décommente si tu veux bloquer sans consentement
  // if (!rgpd) return new Response('Veuillez accepter la politique de confidentialité.', { status: 400 });

  // Si pas de clé Resend, ne bloque pas la conversion
  if (!RESEND_API_KEY) {
    console.warn('[contact] RESEND_API_KEY manquant — aucun email envoyé.');
    return wantsJSON(request.headers)
      ? new Response(JSON.stringify({ status: 'ok' }), { status: 200, headers: { 'content-type': 'application/json' } })
      : redirect(THANK_YOU_REDIRECT, 303);
  }

  // Sujet + corps (branding Klinova)
  const subjectInterne =
    `🧼 Nouvelle demande – ${prenom || 'Client'}${nom ? ' ' + nom : ''}` +
    (code_postal ? ` (${code_postal})` : '');

  const bodyInterne = [
    `——— Demande reçue via ${BRAND_NAME} ———`,
    prenom ? `Prénom : ${prenom}` : null,
    nom ? `Nom : ${nom}` : null,
    email ? `Email : ${email}` : null,
    `Téléphone (E164) : ${telNorm}`,
    `Téléphone (brut) : ${telephoneRaw || '—'}`,
    code_postal ? `Code postal : ${code_postal}` : null,
    surface ? `Surface : ${surface}` : null,
    `Source : ${source}`,
    rgpd ? `RGPD : ${rgpd}` : null,
    photos.length ? `\nPhotos :\n${photos.map(u => `- ${u}`).join('\n')}` : null,
    '',
    message || 'Aucun message spécifique',
    '',
    `— Email généré automatiquement par ${BRAND_NAME}`,
  ]
    .filter(Boolean)
    .join('\n');

  // Email interne
  await trySendResend({
    from: `${BRAND_NAME} <${BRAND_EMAIL}>`,
    to: [MAIL_TO],
    reply_to: isEmail(email) ? email : undefined,
    subject: subjectInterne,
    text: bodyInterne,
  });

  // Accusé de réception client (si email fourni)
  if (isEmail(email)) {
    await trySendResend({
      from: `${BRAND_NAME} <${BRAND_EMAIL}>`,
      to: [email],
      subject: 'Nous avons bien reçu votre demande ✔',
      text: `
Bonjour ${prenom || ''},

Merci pour votre demande. Notre équipe ${BRAND_NAME} vous recontacte très vite (souvent sous quelques heures ouvrées).

Pour toute urgence, vous pouvez nous appeler directement au ${BRAND_PHONE_DISPLAY}.

— ${BRAND_NAME}
${BRAND_EMAIL}
      `.trim(),
    });
  }

  // Réponse UX-friendly : JSON pour AJAX, sinon redirection
  return wantsJSON(request.headers)
    ? new Response(JSON.stringify({ status: 'ok' }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      })
    : redirect(THANK_YOU_REDIRECT, 303);
};
