import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['html'],
    coverage: {
      enabled: true,
      include: ['packages'],
      exclude: ['packages/**/dist', 'packages/**/coverage', 'packages/**/test'],
      reporter: [['html', { subdir: 'coverage' }]],
      provider: 'v8',
    },
  },
})
