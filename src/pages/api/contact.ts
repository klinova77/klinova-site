// src/pages/api/contact.ts
export const prerender = false;
export const config = { runtime: 'node' }; // Vercel Node runtime

import type { APIRoute } from 'astro';

// ─────────── ENV (override via Vercel) ───────────
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY as string | undefined;

const MAIL_TO            = import.meta.env.MAIL_TO            || 'klinova.contact@gmail.com';
const THANK_YOU_REDIRECT = import.meta.env.THANK_YOU_REDIRECT || '/contact';

const BRAND_NAME          = import.meta.env.BRAND_NAME          || 'Klinova';
const BRAND_EMAIL         = import.meta.env.BRAND_EMAIL         || 'onboarding@resend.dev'; // OK pour tests
const BRAND_PHONE_DISPLAY = import.meta.env.BRAND_PHONE_DISPLAY || '06 76 73 86 61';
const BRAND_PHONE_E164    = import.meta.env.BRAND_PHONE_E164    || '+33676738661';
const RESEND_FROM         = import.meta.env.RESEND_FROM         || `${BRAND_NAME} <${BRAND_EMAIL}>`;

// ─────────── Utils ───────────
const wantsJSON = (h: Headers) => (h.get('accept') || '').toLowerCase().includes('application/json');

// Regex sécurisées
const isEmail = (s = '') => {
  const emailRegex = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
  return emailRegex.test(s.trim());
};

function normalizePhoneFR(raw?: string | null): string | null {
  if (!raw) return null;
  let v = String(raw).trim().replace(/[^\d+]/g, '');
  if (v.startsWith('00')) v = '+' + v.slice(2);
  if (v.startsWith('+33')) { 
    v = v.slice(3).replace(/^0+/, ''); 
    const nineDigitsRegex = new RegExp('^\\d{9}$');
    return nineDigitsRegex.test(v) ? '+33' + v : null; 
  }
  if (v.startsWith('33'))  { 
    v = v.slice(2).replace(/^0+/, ''); 
    const nineDigitsRegex = new RegExp('^\\d{9}$');
    return nineDigitsRegex.test(v) ? '+33' + v : null; 
  }
  const digits = v.replace(/\D/g, '');
  const tenDigitsRegex = new RegExp('^0\\d{9}$');
  const nineDigitsRegex = new RegExp('^\\d{9}$');
  
  if (tenDigitsRegex.test(digits)) return '+33' + digits.slice(1);
  if (nineDigitsRegex.test(digits)) return '+33' + digits;
  return null;
}

async function sendViaResend(payload: Record<string, any>): Promise<boolean> {
  if (!RESEND_API_KEY) return false;
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!r.ok) {
      console.error('[Resend] HTTP', r.status, await r.text().catch(()=>''));
      return false;
    }
    return true;
  } catch (e) {
    console.error('[Resend] exception', e);
    return false;
  }
}

function toHtmlList(urls: string[]) {
  if (!urls?.length) return '';
  return `<ul>${urls.map((u) => `<li><a href="${u}">${u}</a></li>`).join('')}</ul>`;
}

// ─────────── GET: Healthcheck ───────────
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ ok: true, endpoint: 'contact', resendConfigured: Boolean(RESEND_API_KEY), mail_to: MAIL_TO }),
    { headers: { 'content-type': 'application/json' }, status: 200 }
  );
};

// ─────────── POST: FormData uniquement (stable) ───────────
export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const form = await request.formData();

    // Honeypot
    if ((form.get('website') as string)?.trim()) return new Response(null, { status: 204 });

    // Champs classiques
    const prenom = String(form.get('prenom') || '').trim();
    const nom    = String(form.get('nom') || '').trim();
    const email  = String(form.get('email') || '').trim();

    const telephoneRaw = String((form.get('telephone') ?? form.get('phone') ?? '')).trim();
    const telE164From  = String(form.get('telephone_e164') || '').trim();
    const telNorm      = telE164From || normalizePhoneFR(telephoneRaw);

    const code_postal  = String((form.get('code_postal') ?? form.get('cp') ?? '')).trim();
    const surface      = String(form.get('surface') || '').trim();
    const message      = String(form.get('message') || '').trim();
    const source       = String(form.get('source') || 'form').trim();
    const rgpd         = String(form.get('rgpd') ?? form.get('consent') ?? '').trim();

    // URLs Cloudinary injectées par le JS (inputs hidden name="photos[]")
    const photos = form.getAll('photos[]').map(v => String(v)).filter(Boolean);

    // Validations minimales
    if (!telNorm) {
      const msg = 'Téléphone invalide (ex: 06… ou +33…)';
      return wantsJSON(request.headers)
        ? new Response(JSON.stringify({ ok: false, error: msg }), { status: 400, headers: { 'content-type': 'application/json' } })
        : new Response(msg, { status: 400 });
    }
    
    if (code_postal && code_postal.length > 0) {
      const cpRegex = new RegExp('^\\d{5}$');
      if (!cpRegex.test(code_postal)) {
        const msg = 'Code postal invalide (5 chiffres requis)';
        return wantsJSON(request.headers)
          ? new Response(JSON.stringify({ ok: false, error: msg }), { status: 400, headers: { 'content-type': 'application/json' } })
          : new Response(msg, { status: 400 });
      }
    }
    
    if (email && !isEmail(email)) {
      const msg = 'Email invalide';
      return wantsJSON(request.headers)
        ? new Response(JSON.stringify({ ok: false, error: msg }), { status: 400, headers: { 'content-type': 'application/json' } })
        : new Response(msg, { status: 400 });
    }

    // Email interne (texte + HTML)
    const subject = `🧼 Nouvelle demande – ${prenom || 'Client'}${nom ? ' ' + nom : ''}${code_postal ? ` (${code_postal})` : ''}`;

    const txt = [
      `——— Demande reçue via ${BRAND_NAME} ———`,
      `Prénom : ${prenom || '-'}`,
      `Nom : ${nom || '-'}`,
      `Email : ${email || '-'}`,
      `Téléphone (E164) : ${telNorm || '-'}`,
      telephoneRaw ? `Téléphone (brut) : ${telephoneRaw}` : null,
      code_postal ? `Code postal : ${code_postal}` : null,
      surface ? `Surface : ${surface}` : null,
      `Source : ${source}`,
      rgpd ? `RGPD : ${rgpd}` : null,
      photos.length ? `\nPhotos :\n${photos.map(u => `- ${u}`).join('\n')}` : null,
      '',
      message || 'Aucun message spécifique',
      '',
      `— Email généré automatiquement par ${BRAND_NAME}`,
    ].filter(Boolean).join('\n');

    const html = `
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

    const okInterne = await sendViaResend({
      from: RESEND_FROM,
      to: [MAIL_TO],
      reply_to: isEmail(email) ? email : undefined,
      subject,
      text: txt,
      html,
    });

    if (!okInterne) {
      console.warn('[contact] Envoi Resend KO (RESEND_API_KEY manquant ? domaine non vérifié ?)');
    }

    // Accusé client si mail fourni
    if (isEmail(email)) {
      const ackText = [
        `Bonjour ${prenom || ''},`,
        '',
        `Merci pour votre demande. Notre équipe ${BRAND_NAME} vous recontacte très vite (souvent sous quelques heures ouvrées).`,
        '',
        `Pour toute urgence : ${BRAND_PHONE_DISPLAY} (${BRAND_PHONE_E164}).`,
        '',
        `— ${BRAND_NAME}`,
        `${BRAND_EMAIL}`,
      ].join('\n');

      const ackHtml = `
        <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
          <p>Bonjour ${prenom || ''},</p>
          <p>Merci pour votre demande. Notre équipe <strong>${BRAND_NAME}</strong> vous recontacte très vite (souvent sous quelques heures ouvrées).</p>
          <p>Pour toute urgence : <strong>${BRAND_PHONE_DISPLAY}</strong> (${BRAND_PHONE_E164}).</p>
          <p>— ${BRAND_NAME}<br/>${BRAND_EMAIL}</p>
        </div>
      `;
      await sendViaResend({ from: RESEND_FROM, to: [email], subject: 'Nous avons bien reçu votre demande ✔', text: ackText, html: ackHtml });
    }

    if (wantsJSON(request.headers)) {
      return new Response(JSON.stringify({ ok: true, photosCount: photos.length }), {
        status: 200, headers: { 'content-type': 'application/json' },
      });
    }
    return redirect(THANK_YOU_REDIRECT, 303);
  } catch (e: any) {
    console.error('[contact] Exception', e?.message || e);
    const msg = 'Une erreur est survenue. Merci de réessayer.';
    return wantsJSON(request.headers)
      ? new Response(JSON.stringify({ ok: false, error: msg }), { status: 500, headers: { 'content-type': 'application/json' } })
      : new Response(msg, { status: 500 });
  }
};