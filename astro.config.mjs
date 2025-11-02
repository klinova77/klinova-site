// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel'; // ✅ runtime Node
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
    // includeFiles: [],
  }),

  // ✅ Service d’images avec Sharp natif
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
  // ⚙️ Configuration Vite (plugins, alias, SSR, optimisations CSS)
  // ────────────────────────────────────────────────────────────────
  vite: {
    plugins: [
      tailwindcss(),

      // 🌿 Plugin maison : rendre les CSS non bloquants (sauf global index.css)
      {
        name: 'async-css-links',
        transformIndexHtml(html) {
          return html.replaceAll(
            /<link\s+rel="stylesheet"\s+href="([^"]+)">/g,
            (match, href) => {
              // On garde le CSS principal bloquant
              if (href.includes('index.')) return match;
              // Autres CSS → non-bloquants
              return `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'">`;
            }
          );
        },
      },
    ],

    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    css: { transformer: 'lightningcss' },

    // ✅ Important : ne pas bundler certaines libs Node côté SSR
    ssr: {
      external: ['resend'],
    },
  },
});
