import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    port: 5000,
    host: true,
    allowedHosts: ['todo-app-mern.up.railway.app']
}
})
