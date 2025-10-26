import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';



// Pages à exclure du sitemap (gère / et sans /)
const NOINDEX = new Set([

]);

export default defineConfig({
  site: 'https://klinova.fr',
  adapter: vercel(),

  // Service images (Sharp natif Astro v4)
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // Petit gain perf
  compressHTML: true,

  // Build options
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  // Intégrations
  integrations: [
  sitemap({
    filter: (url) => {
      const p = new URL(url).pathname;
      return !NOINDEX.has(p);
    },
  }),
],


  // Vite / Tailwind v4
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