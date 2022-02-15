import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

module.exports = defineConfig({
  outDir: 'out',
  plugins: [
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
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
