export const prerender = false;
export const config = { runtime: 'node' };

import type { APIRoute } from 'astro';
import crypto from 'node:crypto';

const {
  CLOUDINARY_API_SECRET,
  CLOUDINARY_FOLDER_ROOT,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_API_KEY,
  CLOUDINARY_CLOUD_NAME,
} = import.meta.env;

function generateSignature(params: Record<string, string | number>) {
  const entries = Object.entries(params)
    .filter(([k, v]) => v !== undefined && v !== '' && k !== 'file' && k !== 'tags')
    .sort(([a], [b]) => a.localeCompare(b));
  const toSign = entries.map(([k, v]) => `${k}=${v}`).join('&');
  return crypto.createHash('sha1').update(`${toSign}${CLOUDINARY_API_SECRET}`).digest('hex');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const timestamp = Math.floor(Date.now() / 1000);

    const params: Record<string, string | number> = {
      timestamp,
      folder: body.folder ?? (CLOUDINARY_FOLDER_ROOT || 'uploads'),
      upload_preset: CLOUDINARY_UPLOAD_PRESET!,
      // public_id: body.public_id,
      // context: body.context,
      // eager: 'f_webp,q_auto:good',
    };

    const signature = generateSignature(params);

    return new Response(
      JSON.stringify({
        ok: true,
        signature,
        timestamp,
        apiKey: CLOUDINARY_API_KEY,
        cloudName: CLOUDINARY_CLOUD_NAME,
        folder: params.folder,
        uploadPreset: params.upload_preset,
      }),
      { headers: { 'content-type': 'application/json' } }
    );
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 400 });
  }
};
