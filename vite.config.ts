
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Важно для корректных путей на GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
