import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import process from 'node:process'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    port: Number(process.env.PORT) || 5173,
    // /api/refeicoes -> JSON Server em http://localhost:3001/refeicoes
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
