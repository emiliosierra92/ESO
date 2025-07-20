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
          if (loaderContext.includes(path.normalize('src/styles/global.scss'))) {
            return content;
          }
          return `@use "src/styles/global.scss" as *;` + content;
        }
      }
    }
  }
});
