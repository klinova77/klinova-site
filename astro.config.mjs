// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel'; // ✅ bon import (server runtime)
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// Pages à exclure du sitemap
const NOINDEX = new Set([]);

// ────────────────────────────────────────────────────────────────
// ⚙️ Configuration principale Astro + Vercel (runtime Node)
// ────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://klinova.fr',

  // ✅ Sortie "server" nécessaire pour les routes API (Cloudinary, Resend…)
  output: 'server',

  // ✅ Adaptateur Vercel (runtime Node, pas Edge)
  adapter: vercel({
    // includeFiles: [], // si tu veux embarquer des fichiers spécifiques
  }),

  // ✅ Service d’images avec Sharp natif (Astro v4)
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // ✅ Optimisations build
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  // ✅ Intégrations (sitemap, etc.)
  integrations: [
    sitemap({
      filter: (url) => {
        const p = new URL(url).pathname;
        return !NOINDEX.has(p);
      },
    }),
  ],

  // ────────────────────────────────────────────────────────────────
  // ⚙️ Configuration Vite (plugins, alias, SSR)
  // ────────────────────────────────────────────────────────────────
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: { transformer: 'lightningcss' },

    // ✅ Important : ne pas bundler certaines libs Node côté SSR
    ssr: {
      external: ['resend'], // évite l’erreur "Rollup failed to resolve import 'resend'"
    },
  },
});
