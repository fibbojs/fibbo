import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['html'],
    coverage: {
      enabled: true,
      include: ['packages'],
      reporter: [['html', { subdir: 'coverage' }]],
      reportsDirectory: 'fibbo',
    },
  },
})
