import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/vitest/vitest-setup.ts',
    include: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    exclude: ['./node_modules'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
