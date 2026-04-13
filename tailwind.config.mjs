/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Core identity (use most)
        serif: ['Canela', 'Playfair Display', 'serif'],        // hero / titles
        sans: ['Suisse Intl', 'Inter', 'Helvetica', 'Arial', 'sans-serif'], // UI + body

        // Editorial / long-form
        editorial: ['Libre Baskerville', 'serif'],
        literary: ['EB Garamond', 'serif'],

        // Subtle variation for captions / metadata
        neutral: ['Neue Haas Grotesk', 'Helvetica', 'Arial', 'sans-serif'],

        // Accents (use sparingly)
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],

        // Statement / occasional
        display: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
