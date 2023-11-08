import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // バンドルしたビルドファイル名を指定
      output: {
        entryFileNames: 'assets/contents.js', // ここでファイル名を指定
      },
    },
  },
});
