import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

module.exports = defineConfig({
  outDir: 'out',
  plugins: [
    vue()
  ],
  server: {
    fs: {
      strict: true
    }
  },
  optimizeDeps: {
    include: ['vue']
  }
})
