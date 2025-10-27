// src/pages/api/test-env.ts
export const prerender = false;
import type { APIRoute } from 'astro';

function mask(v?: string) {
  if (!v) return null;
  if (v.length <= 8) return '****';
  return v.slice(0, 4) + '…' + v.slice(-4);
}

export const GET: APIRoute = async () => {
  const CLOUDINARY_CLOUD_NAME = import.meta.env.CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_API_KEY = import.meta.env.CLOUDINARY_API_KEY;
  const CLOUDINARY_API_SECRET = import.meta.env.CLOUDINARY_API_SECRET; // masqué dans la réponse
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env.CLOUDINARY_UPLOAD_PRESET;
  const CLOUDINARY_FOLDER_ROOT = import.meta.env.CLOUDINARY_FOLDER_ROOT;

  const ok =
    !!CLOUDINARY_CLOUD_NAME &&
    !!CLOUDINARY_API_KEY &&
    !!CLOUDINARY_API_SECRET &&
    !!CLOUDINARY_UPLOAD_PRESET &&
    !!CLOUDINARY_FOLDER_ROOT;

  return new Response(
    JSON.stringify({
      ok,
      CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: mask(CLOUDINARY_API_SECRET),
      CLOUDINARY_UPLOAD_PRESET,
      CLOUDINARY_FOLDER_ROOT,
      runtime: 'astro api route',
      note: 'Si ok=false, au moins une variable manque au runtime.',
    }),
    { status: ok ? 200 : 500, headers: { 'Content-Type': 'application/json' } },
  );
};
