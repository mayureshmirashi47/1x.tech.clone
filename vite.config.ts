import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // or your current styling import

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/1x.tech.clone/', // 👈 ADD THIS EXACT LINE
})
