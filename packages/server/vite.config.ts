/// <reference types="vitest">

import { defineConfig } from 'vitest/config'
import * as path from 'path'

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/__mocks__/**'],
      all: true,
      reporter: ['html', 'clover', 'text'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
})
