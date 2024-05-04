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
            { text: 'FibboAttachedCamera', link: '/api/classes/FibboAttachedCamera' },
            { text: 'FibboCamera', link: '/api/classes/FibboCamera' },
            { text: 'FibboFixedCamera', link: '/api/classes/FibboFixedCamera' },
            { text: 'FibboGameCamera', link: '/api/classes/FibboGameCamera' },
            { text: 'FibboOrbitCamera', link: '/api/classes/FibboOrbitCamera' },
          ] },
          { text: 'Core Classes', items: [
            { text: 'FibboComponent', link: '/api/classes/FibboComponent' },
            { text: 'FibboScene', link: '/api/classes/FibboScene' },
          ] },
          { text: 'Model Classes', items: [
            { text: 'FibboCube', link: '/api/classes/FibboCube' },
            { text: 'FibboGLTF', link: '/api/classes/FibboGLTF' },
            { text: 'FibboModel', link: '/api/classes/FibboModel' },
            { text: 'FibboSphere', link: '/api/classes/FibboSphere' },
          ] },
          { text: 'Functions', items: [
            { text: 'useLookAt', link: '/api/functions/useLookAt' },
            { text: 'usePosition', link: '/api/functions/usePosition' },
            { text: 'useRigidBody', link: '/api/functions/useRigidBody' },
            { text: 'useRotation', link: '/api/functions/useRotation' },
            { text: 'useRotationDegree', link: '/api/functions/useRotationDegree' },
            { text: 'useScale', link: '/api/functions/useScale' },
          ] },
          { text: 'Enumerations', items: [
            { text: 'Fibbo3dShapes', link: '/api/enums/Fibbo3dShapes' },
          ] },
          { text: 'Interfaces', items: [
            { text: 'FibboVector3', link: '/api/interfaces/FibboVector3' },
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
