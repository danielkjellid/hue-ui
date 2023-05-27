import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: './sandbox/index.html',
  },
  build: {
    rollupOptions: {
      input: {
        sandbox: './sandbox/index.html',
      },
    },
  },
})
