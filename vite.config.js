import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // .....
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/scripts/main.min.js',
        assetFileNames: 'assets/[name].min.[ext]'
      }
    }
  }
});