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
            { text: '2d', link: '/api/2d/index.md', collapsed: true, items: [
              { text: 'Core Classes', items: [
                { text: 'FComponent2d', link: '/api/2d/classes/FComponent2d' },
                { text: 'FScene2d', link: '/api/2d/classes/FScene2d' },
              ] },
              { text: 'Polygons Classes', items: [
                { text: 'FSquare', link: '/api/2d/classes/FSquare' },
                { text: 'FCircle', link: '/api/2d/classes/FCircle' },
              ] },
              { text: 'Sprite Classes', items: [
                { text: 'FSprite', link: '/api/2d/classes/FSprite' },
              ] },
              { text: 'Enumerations', items: [
                { text: 'F2dShapes', link: '/api/2d/enumerations/F2dShapes' },
              ] },
            ] },
            { text: '3d', link: '/api/3d/index.md', collapsed: true, items: [
              { text: 'Camera Classes', items: [
                { text: 'FAttachedCamera', link: '/api/3d/classes/FAttachedCamera' },
                { text: 'FCamera3d', link: '/api/3d/classes/FCamera3d' },
                { text: 'FFixedCamera', link: '/api/3d/classes/FFixedCamera' },
                { text: 'FGameCamera', link: '/api/3d/classes/FGameCamera' },
                { text: 'FOrbitCamera', link: '/api/3d/classes/FOrbitCamera' },
              ] },
              { text: 'Core Classes', items: [
                { text: 'FComponent3d', link: '/api/3d/classes/FComponent3d' },
                { text: 'FScene3d', link: '/api/3d/classes/FScene3d' },
              ] },
              { text: 'Model Classes', items: [
                { text: 'FCube', link: '/api/3d/classes/FCube' },
                { text: 'FGLTF', link: '/api/3d/classes/FGLTF' },
                { text: 'FModel', link: '/api/3d/classes/FModel' },
                { text: 'FSphere', link: '/api/3d/classes/FSphere' },
              ] },
              { text: 'Enumerations', items: [
                { text: 'F3dShapes', link: '/api/3d/enumerations/F3dShapes' },
              ] },
            ] },
            { text: 'core', link: '/api/core/index.md', collapsed: true, items: [
              { text: 'FCamera', link: '/api/core/classes/FCamera' },
              { text: 'FComponent', link: '/api/core/classes/FComponent' },
              { text: 'FGroup', link: '/api/core/classes/FGroup' },
              { text: 'FScene', link: '/api/core/classes/FScene' },
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
