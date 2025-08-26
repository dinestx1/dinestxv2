import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'https://dinestxbackend.vercel.app',  // Your local backend server
        changeOrigin: true,
    
      },
    },
  },
  plugins: [react()],
})
