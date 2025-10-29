export const prerender = false;
export const config = { runtime: 'node' };

import type { APIRoute } from 'astro';
import crypto from 'node:crypto';

// 🔐 On récupère les variables d'environnement
const {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_FOLDER_ROOT,
} = import.meta.env;

export const GET: APIRoute = async () => {
  try {
    // Vérification basique
    if (!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET || !CLOUDINARY_CLOUD_NAME) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'Cloudinary credentials manquants',
          details: { CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME },
        }),
        { status: 500, headers: { 'content-type': 'application/json' } }
      );
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const folder = CLOUDINARY_FOLDER_ROOT || 'klinova/uploads-preview';
    const uploadPreset = CLOUDINARY_UPLOAD_PRESET || 'ml_default';

    // Construction de la signature Cloudinary
    const toSign = `folder=${folder}&timestamp=${timestamp}&upload_preset=${uploadPreset}${CLOUDINARY_API_SECRET}`;
    const signature = crypto.createHash('sha1').update(toSign).digest('hex');

    // Création d’un petit fichier texte à uploader
    const fd = new FormData();
    fd.append('file', new Blob(['Hello from Klinova!'], { type: 'text/plain' }));
    fd.append('api_key', CLOUDINARY_API_KEY);
    fd.append('timestamp', String(timestamp));
    fd.append('signature', signature);
    fd.append('folder', folder);
    fd.append('upload_preset', uploadPreset);

    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
    const res = await fetch(url, { method: 'POST', body: fd });
    const json = await res.json();

    return new Response(
      JSON.stringify(
        {
          ok: res.ok,
          status: res.status,
          message: res.ok ? '✅ Upload réussi' : '❌ Upload échoué',
          json,
          used: { folder, uploadPreset, CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME },
        },
        null,
        2
      ),
      { status: res.ok ? 200 : 500, headers: { 'content-type': 'application/json' } }
    );
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500 });
  }
};
