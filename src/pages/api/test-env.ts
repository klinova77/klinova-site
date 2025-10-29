// src/pages/api/test-env.ts
export const prerender = false;
import type { APIRoute } from 'astro';

/**
 * ✅ Route de vérification Cloudinary sécurisée
 * - N'affiche jamais les valeurs réelles
 * - Désactivée automatiquement en production
 */
export const GET: APIRoute = () => {
  const isProd = import.meta.env.PROD;

  if (isProd) {
    return new Response(
      JSON.stringify({
        ok: false,
        note: "Route de test désactivée en production pour raisons de sécurité.",
      }),
      { headers: { "content-type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      note: "Test local uniquement — les valeurs ne sont pas affichées.",
      vars: {
        CLOUDINARY_CLOUD_NAME: !!import.meta.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: !!import.meta.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: !!import.meta.env.CLOUDINARY_API_SECRET,
        CLOUDINARY_UPLOAD_PRESET: !!import.meta.env.CLOUDINARY_UPLOAD_PRESET,
        CLOUDINARY_FOLDER_ROOT: !!import.meta.env.CLOUDINARY_FOLDER_ROOT,
      },
    }),
    { headers: { "content-type": "application/json" } }
  );
};
