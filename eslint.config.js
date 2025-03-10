// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      // overrides
      'no-console': 'off',
      'vue/component-tags-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'no-new': 'off',
    },
  },
)
