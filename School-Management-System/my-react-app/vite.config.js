import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const posthogProxy = {
  '/ingest/static': {
    target: 'https://us-assets.i.posthog.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/ingest/, ''),
  },
  '/ingest': {
    target: 'https://us.i.posthog.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/ingest/, ''),
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: posthogProxy,
  },
  preview: {
    proxy: posthogProxy,
  },
})
