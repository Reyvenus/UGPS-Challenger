import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/games': {
  //       target: 'https://api.rawg.io/api/',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
})
