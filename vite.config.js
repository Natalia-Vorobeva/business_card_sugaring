import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: '/',
  plugins: [react()],
	build: {
    outDir: 'dist'
  }
})

// git add .
// git commit -m "Обновление"
// git push origin main
