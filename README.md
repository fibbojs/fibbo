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

- [Three.js](https://threejs.org/)
- [Rappier](https://rapier.rs/)
- [PixiJS](https://pixijs.com/)

## Development

- Install dependencies

```bash
npm install
```

- To develop on the 3D package, run the 3D playground :

```bash
# In one terminal
nx dev @fibbojs/playground-3d
# In another terminal
nx watch --projects=@fibbojs/3d,@fibbojs/devtools --includeDependentProjects -- nx run \$NX_PROJECT_NAME:build
# or on Windows : nx watch --projects=@fibbojs/3d,@fibbojs/devtools --includeDependentProjects -- nx run %NX_PROJECT_NAME%:build
```

You can now open your browser and navigate to `http://localhost:5173/fibbo/playground-3d`.

- To develop on the 2D package, run the 2D playground :

```bash
# In one terminal
nx dev @fibbojs/playground-2d
# In another terminal
nx watch --projects=@fibbojs/2d,@fibbojs/devtools --includeDependentProjects -- nx run \$NX_PROJECT_NAME:build
# or on Windows : nx watch --projects=@fibbojs/2d,@fibbojs/devtools --includeDependentProjects -- nx run %NX_PROJECT_NAME%:build
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

3D Models used for development purpose are from [glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets) and [Kenney](https://kenney.nl/assets?q=3d).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@fibbojs/fibbo/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@fibbojs/fibbo

[npm-downloads-src]: https://img.shields.io/npm/dm/@fibbojs/fibbo.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@fibbojs/fibbo

[license-src]: https://img.shields.io/npm/l/@fibbojs/fibbo.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@fibbojs/fibbo

[test-src]: https://img.shields.io/badge/test-report-28CF8D?style=flat&colorA=18181B&colorB=28CF8D
[test-href]: https://fibbojs.github.io/fibbo/test-reports
