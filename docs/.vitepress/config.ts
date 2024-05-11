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
          { text: 'Camera Classes', items: [
            { text: 'FAttachedCamera', link: '/api/classes/FAttachedCamera' },
            { text: 'FCamera', link: '/api/classes/FCamera' },
            { text: 'FFixedCamera', link: '/api/classes/FFixedCamera' },
            { text: 'FGameCamera', link: '/api/classes/FGameCamera' },
            { text: 'FOrbitCamera', link: '/api/classes/FOrbitCamera' },
          ] },
          { text: 'Core Classes', items: [
            { text: 'FComponent', link: '/api/classes/FComponent' },
            { text: 'FScene', link: '/api/classes/FScene' },
          ] },
          { text: 'Model Classes', items: [
            { text: 'FCube', link: '/api/classes/FCube' },
            { text: 'FGLTF', link: '/api/classes/FGLTF' },
            { text: 'FModel', link: '/api/classes/FModel' },
            { text: 'FSphere', link: '/api/classes/FSphere' },
          ] },
          { text: 'Enumerations', items: [
            { text: 'F3dShapes', link: '/api/enums/F3dShapes' },
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
