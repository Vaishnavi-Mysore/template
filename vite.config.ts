import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@aegov/design-system': resolve(__dirname, 'src/lib/aegov.tsx'),
    },
  },
})
