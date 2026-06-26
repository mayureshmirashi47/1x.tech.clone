import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 👈 1. ADD THIS IMPORT

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/1x.tech.clone/', // This matches your repository base URL path from the log image
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 2. ADD THIS ALIAS CONFIGURATION
    },
  },
})
