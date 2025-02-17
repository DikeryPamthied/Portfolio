import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/Portfolio/',  // Ensure leading and trailing slash
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
