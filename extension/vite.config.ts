import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-manifest',
      closeBundle() {
        fs.copyFileSync(
          resolve(__dirname, 'manifest.json'),
          resolve(__dirname, 'dist/manifest.json')
        )
      },
    },
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        sidebar: resolve(__dirname, 'index.html'),
        background: resolve(__dirname, 'src/background/index.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      }
    }
  }
})
