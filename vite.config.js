import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  base: './',
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        entryFileNames: 'assets/js/[name].js', // Specify the desired output file name for the main JS file
        chunkFileNames: 'assets/js/[name].js', // Specify the desired output file name for chunks
        // assetFileNames: '[name].css', // Specify the desired output file name for CSS
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (['png', 'jpg', 'webp', 'jpeg', 'gif', 'svg','ico'].includes(extType)) {
            return 'assets/images/[name][extname]'; // Images
          }
          if (['woff', 'woff2', 'ttf', 'otf'].includes(extType)) {
            return 'assets/fonts/[name][extname]'; // Fonts
          }
          return 'assets/sass/[name][extname]'; // Other assets
        },
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})