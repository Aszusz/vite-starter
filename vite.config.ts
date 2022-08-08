import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': resolve(__dirname, './src/api'),
      '@app': resolve(__dirname, './src/app'),
      '@assets': resolve(__dirname, './src/assets'),
      '@model': resolve(__dirname, './src/model'),
      '@utils': resolve(__dirname, './src/utils'),
      '@view': resolve(__dirname, './src/view'),
    },
  },
})
