import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/multiform-login-page/', // ← Add this with YOUR repo name
  build: {
    outDir: 'dist',
  }
})