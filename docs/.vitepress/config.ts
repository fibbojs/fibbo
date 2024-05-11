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
          { text: 'Modules', items: [
            { text: '2D', link: '/api/modules/2d_src', collapsed: true, items: [
              { text: 'FComponent2d', link: '/api/classes/2d_src.FComponent2d' },
              { text: 'FScene2d', link: '/api/classes/2d_src.FScene2d' },
            ] },
            { text: '3D', link: '/api/modules/3d_src', collapsed: true, items: [
              { text: 'Camera Classes', items: [
                { text: 'FAttachedCamera', link: '/api/classes/3d_src.FAttachedCamera' },
                { text: 'FCamera3d', link: '/api/classes/3d_src.FCamera3d' },
                { text: 'FFixedCamera', link: '/api/classes/3d_src.FFixedCamera' },
                { text: 'FGameCamera', link: '/api/classes/3d_src.FGameCamera' },
                { text: 'FOrbitCamera', link: '/api/classes/3d_src.FOrbitCamera' },
              ] },
              { text: 'Core Classes', items: [
                { text: 'FComponent3d', link: '/api/classes/3d_src.FComponent3d' },
                { text: 'FScene3d', link: '/api/classes/3d_src.FScene3d' },
              ] },
              { text: 'Model Classes', items: [
                { text: 'FCube', link: '/api/classes/3d_src.FCube' },
                { text: 'FGLTF', link: '/api/classes/3d_src.FGLTF' },
                { text: 'FModel', link: '/api/classes/3d_src.FModel' },
                { text: 'FSphere', link: '/api/classes/3d_src.FSphere' },
              ] },
              { text: 'Enumerations', items: [
                { text: 'F3dShapes', link: '/api/enums/3d_src.F3dShapes' },
              ] },
            ] },
            { text: 'Core', link: '/api/modules/core_src', collapsed: true, items: [
              { text: 'FCamera', link: '/api/classes/core_src.FCamera' },
              { text: 'FComponent', link: '/api/classes/core_src.FComponent' },
              { text: 'FScene', link: '/api/classes/core_src.FScene' },
            ] },
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
