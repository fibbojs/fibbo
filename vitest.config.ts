import { defineConfig } from 'vitest/config'

/**
 * This configuration will be used to run tests for all packages.
 * This means paths are relative to the root of each package.
 */
export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
    },
  },
})
