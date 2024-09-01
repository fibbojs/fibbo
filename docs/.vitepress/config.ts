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
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
        ],
      },
      {
        text: 'Guide',
        items: [
          { text: 'Fundamentals', link: '/guide/fundamentals' },
          { text: 'Core', collapsed: true, items: [
            { text: 'Components', link: '/guide/core/components' },
            { text: 'Transforms', link: '/guide/core/transforms' },
            { text: 'Scene', link: '/guide/core/scene' },
            { text: 'Cameras', link: '/guide/core/cameras' },
            { text: 'Lights', link: '/guide/core/lights' },
          ] },
          { text: '2D', collapsed: true, items: [
            { text: 'Container', link: '/guide/2d/container' },
            { text: 'Polygons', link: '/guide/2d/polygons' },
            { text: 'Sprites', link: '/guide/2d/sprites' },
          ] },
          { text: '3D', collapsed: true, items: [
            { text: 'Mesh', link: '/guide/3d/mesh' },
            { text: 'Polyhedrons', link: '/guide/3d/polyhedrons' },
            { text: 'Models', link: '/guide/3d/models' },
          ] },
          { text: 'Physics', collapsed: true, items: [
            { text: 'Collisions', link: '/guide/physics/collisions' },
            { text: 'Gravity', link: '/guide/physics/gravity' },
            { text: 'Sensor', link: '/guide/physics/sensor' },
          ] },
          { text: 'Events', collapsed: true, items: [
            { text: 'Keyboard', link: '/guide/events/keyboard' },
          ] },
        ],
      },
      {
        text: 'More',
        items: [
          { text: 'Recipes', collapsed: true, items: [
            { text: 'Character controller', link: '/more/recipes/character-controller' },
          ] },
          { text: 'Deployment', link: '/more/deployment' },
          { text: 'Devtools', link: '/more/devtools' },
          { text: 'Extending Fibbo', link: '/more/extending-fibbo' },
          { text: 'Contributing', link: '/more/contributing' },
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
                { text: 'FCamera', link: '/api/2d/classes/FCamera' },
                { text: 'FFixedCamera', link: '/api/3d/classes/FFixedCamera' },
                { text: 'FFreeCamera', link: '/api/3d/classes/FFreeCamera' },
              ] },
              { text: 'Character Classes', items: [
                { text: 'FCharacter', link: '/api/2d/classes/FCharacter' },
                { text: 'FCharacterDynamic', link: '/api/2d/classes/FCharacterDynamic' },
                { text: 'FCharacterKinematic', link: '/api/2d/classes/FCharacterKinematic' },
                { text: 'FCharacterKP', link: '/api/2d/classes/FCharacterKP' },
                { text: 'FCharacterKV', link: '/api/2d/classes/FCharacterKV' },
              ] },
              { text: 'Core Classes', items: [
                { text: 'FComponent', link: '/api/2d/classes/FComponent' },
                { text: 'FComponentEmpty', link: '/api/2d/classes/FComponentEmpty' },
                { text: 'FScene', link: '/api/2d/classes/FScene' },
                { text: 'FTransform', link: '/api/2d/classes/FTransform' },
              ] },
              { text: 'Polygons Classes', items: [
                { text: 'FCircle', link: '/api/2d/classes/FCircle' },
                { text: 'FRectangle', link: '/api/2d/classes/FRectangle' },
              ] },
              { text: 'Sprite Classes', items: [
                { text: 'FSprite', link: '/api/2d/classes/FSprite' },
              ] },
              { text: 'Enumerations', items: [
                { text: 'FShapes', link: '/api/2d/enumerations/FShapes' },
              ] },
              { text: 'Interfaces', items: [
                { text: 'FCameraOptions', link: '/api/2d/interfaces/FCameraOptions' },
                { text: 'FCharacterOptions', link: '/api/2d/interfaces/FCharacterOptions' },
                { text: 'FComponentOptions', link: '/api/2d/interfaces/FComponentOptions' },
                { text: 'FColliderOptions', link: '/api/2d/interfaces/FColliderOptions' },
                { text: 'FRigidBodyOptions', link: '/api/2d/interfaces/FRigidBodyOptions' },
                { text: 'FSceneOptions', link: '/api/2d/interfaces/FSceneOptions' },
                { text: 'FTransformOptions', link: '/api/2d/interfaces/FTransformOptions' },
              ] },
            ] },
            { text: '3d', link: '/api/3d/index.md', collapsed: true, items: [
              { text: 'Camera Classes', items: [
                { text: 'FAttachedCamera', link: '/api/3d/classes/FAttachedCamera' },
                { text: 'FCamera', link: '/api/3d/classes/FCamera' },
                { text: 'FFixedCamera', link: '/api/3d/classes/FFixedCamera' },
                { text: 'FGameCamera', link: '/api/3d/classes/FGameCamera' },
                { text: 'FOrbitCamera', link: '/api/3d/classes/FOrbitCamera' },
              ] },
              { text: 'Character Classes', items: [
                { text: 'FCharacter', link: '/api/3d/classes/FCharacter' },
                { text: 'FCharacterDynamic', link: '/api/3d/classes/FCharacterDynamic' },
                { text: 'FCharacterKinematic', link: '/api/3d/classes/FCharacterKinematic' },
                { text: 'FCharacterKP', link: '/api/3d/classes/FCharacterKP' },
                { text: 'FCharacterKV', link: '/api/3d/classes/FCharacterKV' },
              ] },
              { text: 'Core Classes', items: [
                { text: 'FComponent', link: '/api/3d/classes/FComponent' },
                { text: 'FComponentEmpty', link: '/api/3d/classes/FComponentEmpty' },
                { text: 'FScene', link: '/api/3d/classes/FScene' },
                { text: 'FTransform', link: '/api/3d/classes/FTransform' },
              ] },
              { text: 'Model Classes', items: [
                { text: 'FCapsule', link: '/api/3d/classes/FCapsule' },
                { text: 'FCuboid', link: '/api/3d/classes/FCuboid' },
                { text: 'FGLTF', link: '/api/3d/classes/FGLTF' },
                { text: 'FPolyhedron', link: '/api/3d/classes/FPolyhedron' },
                { text: 'FSphere', link: '/api/3d/classes/FSphere' },
              ] },
              { text: 'Enumerations', items: [
                { text: 'FShapes', link: '/api/3d/enumerations/FShapes' },
              ] },
              { text: 'Interfaces', items: [
                { text: 'FCharacterOptions', link: '/api/3d/interfaces/FCharacterOptions' },
                { text: 'FComponentOptions', link: '/api/3d/interfaces/FComponentOptions' },
                { text: 'FColliderOptions', link: '/api/3d/interfaces/FColliderOptions' },
                { text: 'FRigidBodyOptions', link: '/api/3d/interfaces/FRigidBodyOptions' },
                { text: 'FSceneOptions', link: '/api/3d/interfaces/FSceneOptions' },
                { text: 'FTransformOptions', link: '/api/3d/interfaces/FTransformOptions' },
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
