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
        sidepanel: resolve(__dirname, 'src/extension/sidepanel/index.html'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(html)$/i.test(assetInfo.name)) {
            return `[name].[ext]`;
          }
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