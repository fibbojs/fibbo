import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Fibbo',
  description: 'Documentation for Fibbo',
  head: [['link', { rel: 'icon', href: '/fibbo/favicon.ico' }]],
  base: '/fibbo/',
  themeConfig: {
    logo: {
      light: '/logo-full-light.png',
      dark: '/logo-full-dark.png',
      alt: 'Fibbo Logo',
    },
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started/introduction' },
      { text: 'API Reference', link: '/api/index' },
    ],

    search: {
      provider: 'local',
    },

    sidebar: {
      '/': [
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
              { text: 'Assets', link: '/guide/core/assets' },
              { text: 'Controllers', link: '/guide/core/controllers' },
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
              { text: 'Introduction', link: '/guide/physics/introduction' },
              { text: 'Colliders', link: '/guide/physics/colliders' },
              { text: 'RigidBody', link: '/guide/physics/rigidbody' },
              { text: 'Joints', link: '/guide/physics/joints' },
            ] },
            { text: 'Events', collapsed: true, items: [
              { text: 'Collisions', link: '/guide/events/collisions' },
              { text: 'Keyboard', link: '/guide/events/keyboard' },
            ] },
            { text: 'Audio', collapsed: true, items: [
              { text: 'Introduction', link: '/guide/audio/introduction' },
            ] },
          ],
        },
        {
          text: 'More',
          items: [
            { text: 'Recipes', collapsed: true, items: [
              { text: 'Character controller', link: '/more/recipes/character-controller' },
              { text: 'Custom controller', link: '/more/recipes/custom-controller' },
            ] },
            { text: 'Deployment', link: '/more/deployment' },
            { text: 'Upgrading', link: '/more/upgrading' },
            { text: 'Devtools', link: '/more/devtools' },
            { text: 'Extending Fibbo', link: '/more/extending-fibbo' },
            { text: 'Contributing', link: '/more/contributing' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
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
                { text: 'Controller Classes', items: [
                  { text: 'FController', link: '/api/2d/classes/FController' },
                  { text: 'FCharacterController', link: '/api/2d/classes/FCharacterController' },
                  { text: 'FCharacterControllerD', link: '/api/2d/classes/FCharacterControllerD' },
                  { text: 'FCharacterControllerK', link: '/api/2d/classes/FCharacterControllerK' },
                  { text: 'FCharacterControllerKP', link: '/api/2d/classes/FCharacterControllerKP' },
                  { text: 'FCharacterControllerKV', link: '/api/2d/classes/FCharacterControllerKV' },
                ] },
                { text: 'Core Classes', items: [
                  { text: 'FComponent', link: '/api/2d/classes/FComponent' },
                  { text: 'FComponentEmpty', link: '/api/2d/classes/FComponentEmpty' },
                  { text: 'FScene', link: '/api/2d/classes/FScene' },
                  { text: 'FTransform', link: '/api/2d/classes/FTransform' },
                  { text: 'FCollider', link: '/api/2d/classes/FCollider' },
                  { text: 'FRigidBody', link: '/api/2d/classes/FRigidBody' },
                ] },
                { text: 'Polygons Classes', items: [
                  { text: 'FPolygon', link: '/api/2d/classes/FPolygon' },
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
                  { text: 'FCharacterControllerOptions', link: '/api/2d/interfaces/FCharacterControllerOptions' },
                  { text: 'FColliderOptions', link: '/api/2d/interfaces/FColliderOptions' },
                  { text: 'FComponentOptions', link: '/api/2d/interfaces/FComponentOptions' },
                  { text: 'FControllerOptions', link: '/api/2d/interfaces/FControllerOptions' },
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
                { text: 'Light Classes', items: [
                  { text: 'FAmbientLight', link: '/api/3d/classes/FAmbientLight' },
                  { text: 'FLight', link: '/api/3d/classes/FLight' },
                  { text: 'FPointLight', link: '/api/3d/classes/FPointLight' },
                ] },
                { text: 'Character Classes', items: [
                  { text: 'FController', link: '/api/3d/classes/FController' },
                  { text: 'FCharacterController', link: '/api/3d/classes/FCharacterController' },
                  { text: 'FCharacterControllerD', link: '/api/3d/classes/FCharacterControllerD' },
                  { text: 'FCharacterControllerK', link: '/api/3d/classes/FCharacterControllerK' },
                  { text: 'FCharacterControllerKP', link: '/api/3d/classes/FCharacterControllerKP' },
                  { text: 'FCharacterControllerKV', link: '/api/3d/classes/FCharacterControllerKV' },
                ] },
                { text: 'Core Classes', items: [
                  { text: 'FComponent', link: '/api/3d/classes/FComponent' },
                  { text: 'FComponentEmpty', link: '/api/3d/classes/FComponentEmpty' },
                  { text: 'FScene', link: '/api/3d/classes/FScene' },
                  { text: 'FTransform', link: '/api/3d/classes/FTransform' },
                  { text: 'FCollider', link: '/api/3d/classes/FCollider' },
                  { text: 'FRigidBody', link: '/api/3d/classes/FRigidBody' },
                ] },
                { text: 'Polyhedrons Classes', items: [
                  { text: 'FCapsule', link: '/api/3d/classes/FCapsule' },
                  { text: 'FCuboid', link: '/api/3d/classes/FCuboid' },
                  { text: 'FPolyhedron', link: '/api/3d/classes/FPolyhedron' },
                  { text: 'FSphere', link: '/api/3d/classes/FSphere' },
                ] },
                { text: 'Model Classes', items: [
                  { text: 'FModel', link: '/api/3d/classes/FModel' },
                  { text: 'FGLTF', link: '/api/3d/classes/FGLTF' },
                  { text: 'FGLB', link: '/api/3d/classes/FGLB' },
                  { text: 'FOBJ', link: '/api/3d/classes/FOBJ' },
                  { text: 'FFBX', link: '/api/3d/classes/FFBX' },
                ] },
                { text: 'Enumerations', items: [
                  { text: 'FShapes', link: '/api/3d/enumerations/FShapes' },
                ] },
                { text: 'Interfaces', items: [
                  { text: 'FAttachedCameraOptions', link: '/api/3d/interfaces/FAttachedCameraOptions' },
                  { text: 'FCameraOptions', link: '/api/3d/interfaces/FCameraOptions' },
                  { text: 'FCharacterControllerOptions', link: '/api/3d/interfaces/FCharacterControllerOptions' },
                  { text: 'FColliderOptions', link: '/api/3d/interfaces/FColliderOptions' },
                  { text: 'FComponentOptions', link: '/api/3d/interfaces/FComponentOptions' },
                  { text: 'FControllerOptions', link: '/api/3d/interfaces/FControllerOptions' },
                  { text: 'FRigidBodyOptions', link: '/api/3d/interfaces/FRigidBodyOptions' },
                  { text: 'FSceneOptions', link: '/api/3d/interfaces/FSceneOptions' },
                  { text: 'FTransformOptions', link: '/api/3d/interfaces/FTransformOptions' },
                ] },
              ] },
              { text: 'core', link: '/api/core/index.md', collapsed: true, items: [
                { text: 'Core Classes', items: [
                  { text: 'FCamera', link: '/api/core/classes/FCamera' },
                  { text: 'FComponent', link: '/api/core/classes/FComponent' },
                  { text: 'FController', link: '/api/core/classes/FController' },
                  { text: 'FGroup', link: '/api/core/classes/FGroup' },
                  { text: 'FLight', link: '/api/core/classes/FLight' },
                  { text: 'FScene', link: '/api/core/classes/FScene' },
                ] },
                { text: 'Interfaces', items: [
                  { text: 'FControllerOptions', link: '/api/core/interfaces/FControllerOptions' },
                  { text: 'FSceneOptions', link: '/api/core/interfaces/FSceneOptions' },
                  { text: 'OnCollisionWithData', link: '/api/core/interfaces/OnCollisionWithData' },
                ] },
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fibbojs/fibbo' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@fibbojs/fibbo' },
    ],
  },
  ignoreDeadLinks: true,
})
