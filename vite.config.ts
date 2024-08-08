import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: [
      '@unocss/preset-mini',
    ],
  },
  slidev: {
    vue: {
      template: {
        transformAssetUrls: {
          video: ['src', 'poster'],
          source: ['src'],
          img: ['src'],
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href'],
          ImageWithHint: ['src'],
        }
      }
    }
  },
})
