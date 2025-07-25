import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, loaderContext) => {
          // Don't inject globals into the global stylesheet itself
          if (loaderContext.includes(path.normalize('assets/css/main.css'))) {
            return content;
          }
          return `@use "assets/css/main.css" as *;` + content;
        }
      }
    }
  }
});
