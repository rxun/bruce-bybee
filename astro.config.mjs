// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Disable Vercel image optimization to avoid costs
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  // Static generation to avoid serverless costs
  output: 'static',
  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro' // Keep assets organized
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          // Minimize asset file names to reduce CDN costs
          assetFileNames: 'assets/[name].[hash:8][extname]'
        }
      }
    }
  }
});
