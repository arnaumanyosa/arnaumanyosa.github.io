import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arnau.me',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: false,
    },
  },
});
