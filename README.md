# Fibbo

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Test][test-src]][test-href]

An open-source, web-based game engine.

- [🏡 Documentation](https://fibbojs.github.io/fibbo/)
- [🧪 Test Report](https://fibbojs.github.io/fibbo/test-reports)
- [🎮 2D Playground](https://fibbojs.github.io/fibbo/playground-2d)
- [🎮 3D Playground](https://fibbojs.github.io/fibbo/playground-3d)

## Tech stack

- Game stuff
  - [Three.js](https://threejs.org/) for 3D rendering
  - [Rapier](https://rapier.rs/) for physics
  - [PixiJS](https://pixijs.com/) for 2D rendering
  - [Vue](https://vuejs.org/) for the devtools
- Tooling
  - [Nx](https://nx.dev/) for monorepo management
  - [unbuild](https://github.com/unjs/unbuild) for building the packages
  - [Vite](https://vitejs.dev/) for the playgrounds + building the devtools
  - [VitePress](https://vitepress.dev/) for the documentation
  - [Vitest](https://vitest.dev/) for testing
  - [TypeDoc](https://typedoc.org/) for the API Reference part of the documentation
  - [ESLint](https://eslint.org/) for linting

## Development

- Install dependencies

```bash
npm install
```

- To develop on the 3D package, run the 3D playground :

```bash
npm run dev:3d
# or on Windows :
npm run dev:3d:windows
```

You can now open your browser and navigate to `http://localhost:5173/fibbo/playground-3d`.

- To develop on the 2D package, run the 2D playground :

```bash
npm run dev:2d
# or on Windows :
npm run dev:2d:windows
```

You can now open your browser and navigate to `http://localhost:5173/fibbo/playground-2d`.

## Documentation

The documentation is using [VitePress](https://vitepress.dev/).
You can run the documentation locally by running:

```bash
npm run docs:dev
```

Also, the API Reference part is generated using [TypeDoc](https://typedoc.org/). You can generate it by running:

```bash
npm run docs:generate
```

You can now open your browser and navigate to `http://localhost:5173/fibbo`.

## Credits

3D models and sprites used for development purpose are from [Kenney](https://kenney.nl/assets?q=3d) and [glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@fibbojs/fibbo/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@fibbojs/fibbo

[npm-downloads-src]: https://img.shields.io/npm/dm/@fibbojs/fibbo.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@fibbojs/fibbo

[license-src]: https://img.shields.io/npm/l/@fibbojs/fibbo.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@fibbojs/fibbo

[test-src]: https://img.shields.io/badge/test-report-28CF8D?style=flat&colorA=18181B&colorB=28CF8D
[test-href]: https://fibbojs.github.io/fibbo/test-reports
