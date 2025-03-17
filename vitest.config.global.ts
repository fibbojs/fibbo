import { defineConfig } from 'vitest/config'

/**
 * This configuration will be used to run tests from the root of the project.
 */
export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ['packages'],
      exclude: ['packages/**/dist', 'packages/**/coverage', 'packages/**/test'],
      provider: 'v8',
    },
  },
})
