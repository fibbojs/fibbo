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

    search: {
      provider: 'local',
    },

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
              { text: 'Camera Classes', items: [
                { text: 'FAttachedCamera', link: '/api/2d/classes/FAttachedCamera' },
                { text: 'FCamera2d', link: '/api/2d/classes/FCamera2d' },
                { text: 'FFixedCamera', link: '/api/3d/classes/FFixedCamera' },
                { text: 'FFreeCamera', link: '/api/3d/classes/FFreeCamera' },
              ] },
              { text: 'Character Classes', items: [
                { text: 'FCharacter2d', link: '/api/2d/classes/FCharacter2d' },
                { text: 'FCharacter2dDynamic', link: '/api/2d/classes/FCharacter2dDynamic' },
                { text: 'FCharacter2dKinematic', link: '/api/2d/classes/FCharacter2dKinematic' },
                { text: 'FCharacter2dKP', link: '/api/2d/classes/FCharacter2dKP' },
                { text: 'FCharacter2dKV', link: '/api/2d/classes/FCharacter2dKV' },
              ] },
              { text: 'Core Classes', items: [
                { text: 'FComponent2d', link: '/api/2d/classes/FComponent2d' },
                { text: 'FScene2d', link: '/api/2d/classes/FScene2d' },
              ] },
              { text: 'Polygons Classes', items: [
                { text: 'FCircle', link: '/api/2d/classes/FCircle' },
                { text: 'FSquare', link: '/api/2d/classes/FSquare' },
              ] },
              { text: 'Sprite Classes', items: [
                { text: 'FSprite', link: '/api/2d/classes/FSprite' },
              ] },
              { text: 'Enumerations', items: [
                { text: 'F2dShapes', link: '/api/2d/enumerations/F2dShapes' },
              ] },
              { text: 'Interfaces', items: [
                { text: 'FCamera2dOptions', link: '/api/2d/interfaces/FCamera2dOptions' },
                { text: 'FCharacter2dOptions', link: '/api/2d/interfaces/FCharacter2dOptions' },
                { text: 'FComponent2dOptions', link: '/api/2d/interfaces/FComponent2dOptions' },
                { text: 'FComponent2dOptions__initCollider', link: '/api/2d/interfaces/FComponent2dOptions__initCollider' },
                { text: 'FComponent2dOptions__initRigidBody', link: '/api/2d/interfaces/FComponent2dOptions__initRigidBody' },
                { text: 'FScene2dOptions', link: '/api/2d/interfaces/FScene2dOptions' },
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
              { text: 'Character Classes', items: [
                { text: 'FCharacter3d', link: '/api/3d/classes/FCharacter3d' },
                { text: 'FCharacter3dDynamic', link: '/api/3d/classes/FCharacter3dDynamic' },
                { text: 'FCharacter3dKinematic', link: '/api/3d/classes/FCharacter3dKinematic' },
                { text: 'FCharacter3dKP', link: '/api/3d/classes/FCharacter3dKP' },
                { text: 'FCharacter3dKV', link: '/api/3d/classes/FCharacter3dKV' },
              ] },
              { text: 'Core Classes', items: [
                { text: 'FComponent3d', link: '/api/3d/classes/FComponent3d' },
                { text: 'FScene3d', link: '/api/3d/classes/FScene3d' },
              ] },
              { text: 'Model Classes', items: [
                { text: 'FCapsule', link: '/api/3d/classes/FCapsule' },
                { text: 'FCube', link: '/api/3d/classes/FCube' },
                { text: 'FGLTF', link: '/api/3d/classes/FGLTF' },
                { text: 'FPolyhedron', link: '/api/3d/classes/FPolyhedron' },
                { text: 'FSphere', link: '/api/3d/classes/FSphere' },
              ] },
              { text: 'Enumerations', items: [
                { text: 'F3dShapes', link: '/api/3d/enumerations/F3dShapes' },
              ] },
              { text: 'Interfaces', items: [
                { text: 'FCharacter3dOptions', link: '/api/3d/interfaces/FCharacter3dOptions' },
                { text: 'FComponent3dOptions', link: '/api/3d/interfaces/FComponent3dOptions' },
                { text: 'FComponent3dOptions__initCollider', link: '/api/3d/interfaces/FComponent3dOptions__initCollider' },
                { text: 'FComponent3dOptions__initRigidBody', link: '/api/3d/interfaces/FComponent3dOptions__initRigidBody' },
                { text: 'FScene3dOptions', link: '/api/3d/interfaces/FScene3dOptions' },
              ] },
            ] },
            { text: 'core', link: '/api/core/index.md', collapsed: true, items: [
              { text: 'FCamera', link: '/api/core/classes/FCamera' },
              { text: 'FComponent', link: '/api/core/classes/FComponent' },
              { text: 'FGroup', link: '/api/core/classes/FGroup' },
              { text: 'FScene', link: '/api/core/classes/FScene' },
            ] },
            { text: 'devtools', link: '/api/devtools/index.md', collapsed: true, items: [
              { text: 'FDebug', link: '/api/devtools/classes/FDebug' },
              { text: 'fDebug', link: '/api/devtools/functions/fDebug' },
            ] },
            { text: 'event', link: '/api/event/index.md', collapsed: true, items: [
              { text: 'FKeyboard', link: '/api/event/classes/FKeyboard' },
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
