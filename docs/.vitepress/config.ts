import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Fibbo',
  description: 'Documentation for Fibbo',
  head: [['link', { rel: 'icon', href: '/fibbo/favicon.ico' }]],
  base: '/fibbo/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/getting-started/installation' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Usage', link: '/getting-started/usage' },
        ],
      },
      {
        text: 'Guide',
        items: [
          { text: 'Example Guide', link: '/guide/example-guide' },
        ],
      },
      {
        text: 'API Reference',
        collapsed: true,
        items: [
          { text: 'Index', link: '/api/index.md' },
          { text: 'Classes', items: [
            { text: 'FibboScene', link: '/api/classes/FibboScene' },
            { text: 'FibboModel', link: '/api/classes/FibboModel' },
            { text: 'FibboCube', link: '/api/classes/FibboCube' },
            { text: 'FibboGLTF', link: '/api/classes/FibboGLTF' },
          ] },
          { text: 'Interfaces', items: [
            { text: 'Fibbo3DVector', link: '/api/interfaces/Fibbo3DVector' },
          ] },
          { text: 'Functions', items: [
            { text: 'useRigidBody', link: '/api/functions/useRigidBody' },
          ] },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fibbojs/fibbo' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@fibbojs/fibbo' },
    ],
  },
  ignoreDeadLinks: true,
})
