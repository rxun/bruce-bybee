// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: 'static',
  integrations: [],
  // Disable Vercel image optimization to avoid costs
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash:8][extname]'
        }
      }
    }
  }
});
