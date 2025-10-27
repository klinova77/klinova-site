// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/server'; // ✅ runtime Node (API routes, crypto)
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// Pages à exclure du sitemap
const NOINDEX = new Set([]);

export default defineConfig({
  site: 'https://klinova.fr',

  // ✅ indispensable pour activer les routes API sur Vercel
  output: 'server',

  // ✅ adapter Vercel en runtime Node (pas edge)
  adapter: vercel({
    runtime: 'nodejs',
    // includeFiles: [], // optionnel
  }),

  // Service images (Sharp natif Astro v4)
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  integrations: [
    sitemap({
      filter: (url) => {
        const p = new URL(url).pathname;
        return !NOINDEX.has(p);
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: { transformer: 'lightningcss' },
  },
});
