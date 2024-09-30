// vitest.workspace.ts
import { defineWorkspace } from 'vitest/config'
import wasm from 'vite-plugin-wasm'

export default defineWorkspace([
  // Node-based tests
  {
    test: {
      include: [
        './**/test/unit/**/*.test.ts',
      ],
      name: 'unit',
      environment: 'node',
    },
  },
  // Browser-based tests
  {
    plugins: [
      wasm(),
    ],
    test: {
      include: [
        './**/test/browser/**/*.test.ts',
      ],
      name: 'browser',
      browser: {
        enabled: true,
        provider: 'playwright',
        name: 'chromium',
        headless: true,
      },
    },
  },
])
