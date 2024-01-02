import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true,
    strictPort: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    exclude: [...configDefaults.exclude, './cypress/**/*'],
  },
})
