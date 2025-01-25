import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'src/pages/app/index.html'),
        popup: resolve(__dirname, 'src/extension/popup/index.html'),
        background: resolve(__dirname, 'src/extension/background.js'),
        content: resolve(__dirname, 'src/extension/content.js'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.includes('icon')) {
            return 'icons/[name][extname]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
    outDir: 'dist',
  },
});