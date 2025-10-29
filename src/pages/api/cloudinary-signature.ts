// src/pages/api/cloudinary-signature.ts
export const prerender = false;
export const config = { runtime: 'node' };

import type { APIRoute } from 'astro';
import { createHash } from 'crypto';

// Configuration Cloudinary (à ajouter dans vos variables d'environnement Vercel)
const CLOUDINARY_CLOUD_NAME = import.meta.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = import.meta.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = import.meta.env.CLOUDINARY_API_SECRET;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.CLOUDINARY_UPLOAD_PRESET || 'ml_default';
const CLOUDINARY_FOLDER = import.meta.env.CLOUDINARY_FOLDER || 'klinova/demandes';

// Fonction pour générer la signature Cloudinary
function generateSignature(params: Record<string, any>, apiSecret: string): string {
  // Trier les paramètres par clé
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&');
  
  // Créer la signature avec le secret
  return createHash('sha1')
    .update(sortedParams + apiSecret)
    .digest('hex');
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Vérifier que les variables d'environnement sont définies
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
      console.error('Variables Cloudinary manquantes:', {
        cloudName: !!CLOUDINARY_CLOUD_NAME,
        apiKey: !!CLOUDINARY_API_KEY,
        apiSecret: !!CLOUDINARY_API_SECRET
      });
      
      return new Response(
        JSON.stringify({ 
          ok: false, 
          error: 'Configuration Cloudinary manquante' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Générer un timestamp
    const timestamp = Math.round(Date.now() / 1000);
    
    // Paramètres pour la signature
    const params = {
      timestamp: timestamp,
      folder: CLOUDINARY_FOLDER,
      upload_preset: CLOUDINARY_UPLOAD_PRESET
    };

    // Générer la signature
    const signature = generateSignature(params, CLOUDINARY_API_SECRET);

    // Retourner la réponse avec toutes les infos nécessaires pour l'upload
    return new Response(
      JSON.stringify({
        ok: true,
        signature,
        timestamp,
        cloudName: CLOUDINARY_CLOUD_NAME,
        apiKey: CLOUDINARY_API_KEY,
        folder: CLOUDINARY_FOLDER,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error: any) {
    console.error('[Cloudinary] Erreur génération signature:', error);
    
    return new Response(
      JSON.stringify({ 
        ok: false, 
        error: 'Erreur interne du serveur' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// GET pour healthcheck
export const GET: APIRoute = async () => {
  const configured = !!(CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET);
  
  return new Response(
    JSON.stringify({ 
      ok: true, 
      endpoint: 'cloudinary-signature',
      configured,
      cloudName: CLOUDINARY_CLOUD_NAME || 'non-configuré'
    }),
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};