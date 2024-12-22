import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Fibbo',
  description: 'Documentation for Fibbo',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['script', { src: '/press-f.js', type: 'module' }],
  ],
  base: '/',
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
      // API DOC START
      '/api/': [
        { text: 'API Reference', items: [
          { text: '2d', link: '/api/2d/index.md', collapsed: true, items: [
            { text: 'Camera', collapsed: true, items: [
              { text: 'FFixedCamera', link: '/api/2d/classes/FFixedCamera.md' },
              { text: 'FFreeCamera', link: '/api/2d/classes/FFreeCamera.md' },
              { text: 'FAttachedCamera', link: '/api/2d/classes/FAttachedCamera.md' },
              { text: 'FCamera', link: '/api/2d/classes/FCamera.md' },
            ] },
            { text: 'Controller', collapsed: true, items: [
              { text: 'FCharacterControllerK', link: '/api/2d/classes/FCharacterControllerK.md' },
              { text: 'FCharacterControllerKV', link: '/api/2d/classes/FCharacterControllerKV.md' },
              { text: 'FCharacterControllerD', link: '/api/2d/classes/FCharacterControllerD.md' },
              { text: 'FCharacterController', link: '/api/2d/classes/FCharacterController.md' },
              { text: 'FCharacterControllerKP', link: '/api/2d/classes/FCharacterControllerKP.md' },
            ] },
            { text: 'Core', collapsed: true, items: [
              { text: 'FRigidBody', link: '/api/2d/classes/FRigidBody.md' },
              { text: 'FSensor', link: '/api/2d/classes/FSensor.md' },
              { text: 'FCollider', link: '/api/2d/classes/FCollider.md' },
              { text: 'FComponent', link: '/api/2d/classes/FComponent.md' },
              { text: 'FComponentEmpty', link: '/api/2d/classes/FComponentEmpty.md' },
              { text: 'FTransform', link: '/api/2d/classes/FTransform.md' },
              { text: 'FScene', link: '/api/2d/classes/FScene.md' },
            ] },
            { text: 'Light', collapsed: true, items: [
              { text: 'FLight', link: '/api/2d/classes/FLight.md' },
            ] },
            { text: 'Polygons', collapsed: true, items: [
              { text: 'FPolygon', link: '/api/2d/classes/FPolygon.md' },
              { text: 'FCircle', link: '/api/2d/classes/FCircle.md' },
              { text: 'FRectangle', link: '/api/2d/classes/FRectangle.md' },
            ] },
            { text: 'Sprite', collapsed: true, items: [
              { text: 'FSprite', link: '/api/2d/classes/FSprite.md' },
            ] },
            { text: 'Enumerations', collapsed: true, items: [
              { text: 'FRigidBodyType', link: '/api/2d/enumerations/FRigidBodyType.md' },
              { text: 'FShapes', link: '/api/2d/enumerations/FShapes.md' },
            ] },
            { text: 'Interfaces', collapsed: true, items: [
              { text: 'FRigidBodyOptions', link: '/api/2d/interfaces/FRigidBodyOptions.md' },
              { text: 'FColliderOptions', link: '/api/2d/interfaces/FColliderOptions.md' },
              { text: 'FComponentOptions', link: '/api/2d/interfaces/FComponentOptions.md' },
              { text: 'FTransformOptions', link: '/api/2d/interfaces/FTransformOptions.md' },
              { text: 'FSceneOptions', link: '/api/2d/interfaces/FSceneOptions.md' },
              { text: 'GradientStep', link: '/api/2d/interfaces/GradientStep.md' },
              { text: 'FPolygonOptions', link: '/api/2d/interfaces/FPolygonOptions.md' },
              { text: 'FAttachedCameraOptions', link: '/api/2d/interfaces/FAttachedCameraOptions.md' },
              { text: 'FCameraOptions', link: '/api/2d/interfaces/FCameraOptions.md' },
              { text: 'FSpriteOptions', link: '/api/2d/interfaces/FSpriteOptions.md' },
              { text: 'FControllerOptions', link: '/api/2d/interfaces/FControllerOptions.md' },
              { text: 'FCharacterControllerOptions', link: '/api/2d/interfaces/FCharacterControllerOptions.md' },
              { text: 'FLightOptions', link: '/api/2d/interfaces/FLightOptions.md' },
            ] },
          ] },
          { text: '3d', link: '/api/3d/index.md', collapsed: true, items: [
            { text: 'Camera', collapsed: true, items: [
              { text: 'FGameCamera', link: '/api/3d/classes/FGameCamera.md' },
              { text: 'FOrbitCamera', link: '/api/3d/classes/FOrbitCamera.md' },
              { text: 'FFixedCamera', link: '/api/3d/classes/FFixedCamera.md' },
              { text: 'FPointerLockCamera', link: '/api/3d/classes/FPointerLockCamera.md' },
              { text: 'FAttachedCamera', link: '/api/3d/classes/FAttachedCamera.md' },
              { text: 'FCamera', link: '/api/3d/classes/FCamera.md' },
            ] },
            { text: 'Controller', collapsed: true, items: [
              { text: 'FCharacterControllerK', link: '/api/3d/classes/FCharacterControllerK.md' },
              { text: 'FCharacterControllerKV', link: '/api/3d/classes/FCharacterControllerKV.md' },
              { text: 'FCharacterControllerD', link: '/api/3d/classes/FCharacterControllerD.md' },
              { text: 'FCharacterController', link: '/api/3d/classes/FCharacterController.md' },
              { text: 'FCharacterControllerKP', link: '/api/3d/classes/FCharacterControllerKP.md' },
            ] },
            { text: 'Core', collapsed: true, items: [
              { text: 'FRigidBody', link: '/api/3d/classes/FRigidBody.md' },
              { text: 'FSensor', link: '/api/3d/classes/FSensor.md' },
              { text: 'FCollider', link: '/api/3d/classes/FCollider.md' },
              { text: 'FComponent', link: '/api/3d/classes/FComponent.md' },
              { text: 'FComponentEmpty', link: '/api/3d/classes/FComponentEmpty.md' },
              { text: 'FTransform', link: '/api/3d/classes/FTransform.md' },
              { text: 'FScene', link: '/api/3d/classes/FScene.md' },
            ] },
            { text: 'Light', collapsed: true, items: [
              { text: 'FLightProbe', link: '/api/3d/classes/FLightProbe.md' },
              { text: 'FDirectionalLight', link: '/api/3d/classes/FDirectionalLight.md' },
              { text: 'FHemisphereLight', link: '/api/3d/classes/FHemisphereLight.md' },
              { text: 'FSpotLight', link: '/api/3d/classes/FSpotLight.md' },
              { text: 'FPointLight', link: '/api/3d/classes/FPointLight.md' },
              { text: 'FLight', link: '/api/3d/classes/FLight.md' },
              { text: 'FAmbientLight', link: '/api/3d/classes/FAmbientLight.md' },
            ] },
            { text: 'Model', collapsed: true, items: [
              { text: 'FModel', link: '/api/3d/classes/FModel.md' },
              { text: 'FGLB', link: '/api/3d/classes/FGLB.md' },
              { text: 'FFBX', link: '/api/3d/classes/FFBX.md' },
              { text: 'FGLTF', link: '/api/3d/classes/FGLTF.md' },
              { text: 'FOBJ', link: '/api/3d/classes/FOBJ.md' },
            ] },
            { text: 'Polyhedrons', collapsed: true, items: [
              { text: 'FCapsule', link: '/api/3d/classes/FCapsule.md' },
              { text: 'FPolyhedron', link: '/api/3d/classes/FPolyhedron.md' },
              { text: 'FCuboid', link: '/api/3d/classes/FCuboid.md' },
              { text: 'FSphere', link: '/api/3d/classes/FSphere.md' },
            ] },
            { text: 'Enumerations', collapsed: true, items: [
              { text: 'FRigidBodyType', link: '/api/3d/enumerations/FRigidBodyType.md' },
              { text: 'FShapes', link: '/api/3d/enumerations/FShapes.md' },
            ] },
            { text: 'Interfaces', collapsed: true, items: [
              { text: 'FRigidBodyOptions', link: '/api/3d/interfaces/FRigidBodyOptions.md' },
              { text: 'FColliderOptions', link: '/api/3d/interfaces/FColliderOptions.md' },
              { text: 'FComponentOptions', link: '/api/3d/interfaces/FComponentOptions.md' },
              { text: 'FTransformOptions', link: '/api/3d/interfaces/FTransformOptions.md' },
              { text: 'FSceneOptions', link: '/api/3d/interfaces/FSceneOptions.md' },
              { text: 'FAttachedCameraOptions', link: '/api/3d/interfaces/FAttachedCameraOptions.md' },
              { text: 'FCameraOptions', link: '/api/3d/interfaces/FCameraOptions.md' },
              { text: 'FModelOptions', link: '/api/3d/interfaces/FModelOptions.md' },
              { text: 'FControllerOptions', link: '/api/3d/interfaces/FControllerOptions.md' },
              { text: 'FCharacterControllerOptions', link: '/api/3d/interfaces/FCharacterControllerOptions.md' },
              { text: 'FLightProbeOptions', link: '/api/3d/interfaces/FLightProbeOptions.md' },
              { text: 'FHemisphereLightOptions', link: '/api/3d/interfaces/FHemisphereLightOptions.md' },
              { text: 'FSpotLightOptions', link: '/api/3d/interfaces/FSpotLightOptions.md' },
              { text: 'FLightOptions', link: '/api/3d/interfaces/FLightOptions.md' },
            ] },
          ] },
          { text: 'core', link: '/api/core/index.md', collapsed: true, items: [
            { text: 'Core', collapsed: true, items: [
              { text: 'FController', link: '/api/core/classes/FController.md' },
              { text: 'FGroup', link: '/api/core/classes/FGroup.md' },
              { text: 'FCamera', link: '/api/core/classes/FCamera.md' },
              { text: 'FComponent', link: '/api/core/classes/FComponent.md' },
              { text: 'FLight', link: '/api/core/classes/FLight.md' },
              { text: 'FScene', link: '/api/core/classes/FScene.md' },
            ] },
            { text: 'Pipeline', collapsed: true, items: [
              { text: 'CustomWorker', link: '/api/core/classes/CustomWorker.md' },
              { text: 'Pipeline', link: '/api/core/classes/Pipeline.md' },
              { text: 'RenderPipeline', link: '/api/core/classes/RenderPipeline.md' },
              { text: 'PhysicPipeline', link: '/api/core/classes/PhysicPipeline.md' },
            ] },
            { text: 'Enumerations', collapsed: true, items: [
              { text: 'PipelineCommands', link: '/api/core/enumerations/PipelineCommands.md' },
              { text: 'PipelineState', link: '/api/core/enumerations/PipelineState.md' },
            ] },
            { text: 'Interfaces', collapsed: true, items: [
              { text: 'FVector3', link: '/api/core/interfaces/FVector3.md' },
              { text: 'FVector2', link: '/api/core/interfaces/FVector2.md' },
              { text: 'FVector4', link: '/api/core/interfaces/FVector4.md' },
              { text: 'FControllerOptions', link: '/api/core/interfaces/FControllerOptions.md' },
              { text: 'FComponentOptions', link: '/api/core/interfaces/FComponentOptions.md' },
              { text: 'OnCollisionWithData', link: '/api/core/interfaces/OnCollisionWithData.md' },
              { text: 'FLightOptions', link: '/api/core/interfaces/FLightOptions.md' },
              { text: 'FSceneOptions', link: '/api/core/interfaces/FSceneOptions.md' },
            ] },
          ] },
          { text: 'event', link: '/api/event/index.md', collapsed: true, items: [
            { text: 'Event', collapsed: true, items: [
              { text: 'FKeyboard', link: '/api/event/classes/FKeyboard.md' },
            ] },
          ] },
          { text: 'util', link: '/api/util/index.md', collapsed: true, items: [
            { text: 'Core', collapsed: true, items: [
              { text: 'FAssetUtil', link: '/api/util/classes/FAssetUtil.md' },
              { text: 'FMathUtil', link: '/api/util/classes/FMathUtil.md' },
            ] },
          ] },
        ] },
      ],
      // API DOC END
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fibbojs/fibbo' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@fibbojs/fibbo' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/fibbo.dev' },
    ],
  },
  ignoreDeadLinks: true,
})
