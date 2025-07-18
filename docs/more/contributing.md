# Contributing

Want to contribute to Fibbo ? We would love to have you on board !

Here are some ways you can help.

## Reporting bugs

If you encounter any issues while using Fibbo, please let us know by [opening an issue on GitHub](https://github.com/fibbojs/fibbo/issues/new).

Before opening an issue, please make sure to :
- Check if the issue has already been reported by searching the [existing issues](https://github.com/fibbojs/fibbo/issues) on GitHub.
- Provide as much information as possible, such as the steps to reproduce the issue, the expected behavior, and the actual behavior.
- If possible, provide a minimal example that reproduces the issue. It could be a link to a repository, a code snippet or an online playground (StackBlitz, CodeSandbox, etc.).

## Share ideas

If you have any ideas for new features, improvements, or anything else, please let us know by [opening a discussion on GitHub](https://github.com/orgs/fibbojs/discussions).

As Fibbo is still in its early stages, we are open to any suggestions that could help us improve the engine and make it more user-friendly.

Game engines are complex tools, and game developers have tons of different needs, so your feedback is crucial to us.

## Contributing code

If you want to contribute code to Fibbo, you can do so by [forking the repository](https://github.com/fibbojs/fibbo/fork) and [opening a pull request](https://github.com/fibbojs/fibbo/compare) once you're done.

Preferrably, you should follow these steps :
- Choose an issue to work on from the [project board](https://github.com/orgs/fibbojs/projects/1) (or the [issues list](https://github.com/fibbojs/fibbo/issues) directly, but make sure it's planned and not already in progress).
- Fork the repository and clone it on your machine.
- Commit your changes using [conventional commits](https://www.conventionalcommits.org/).
- Open a pull request that targets the `main` branch of the main repository.

::: tip
If you're a beginner, do not hesitate to ask for help in the issue you're working on. We will be happy to guide you through the process.

It's okay to make mistakes, as long as you're willing to learn from them. We all started somewhere, and we're here to help you grow.
:::

## Architecture

Some information about the architecture of Fibbo might help you understand how the engine is structured and how you can contribute to it.

Fibbo is a monorepo managed with [Nx](https://nx.dev/). It is composed of multiple packages, each with its own responsibility.

Here are the main packages :
- [`@fibbojs/core`](https://www.npmjs.com/package/@fibbojs/core) : The core package, which defines fundamental classes and interfaces.
- [`@fibbojs/2d`](https://www.npmjs.com/package/@fibbojs/2d) : The 2D engine, mainly based on [PixiJS](https://pixijs.com/) and [Rapier](https://rapier.rs/).
- [`@fibbojs/3d`](https://www.npmjs.com/package/@fibbojs/3d) : The 3D engine, mainly based on [Three.js](https://threejs.org/) and [Rapier](https://rapier.rs/).
- [`@fibbojs/event`](https://www.npmjs.com/package/@fibbojs/event) : The event system, which allows you to create and listen to events in the browser.
- [`@fibbojs/devtools`](https://www.npmjs.com/package/@fibbojs/devtools) : The devtools, which lets you inspect and debug your scenes.
- [`@fibbojs/util`](https://www.npmjs.com/package/@fibbojs/util) : Common utilities used by the other packages.
- [`@fibbojs/config`](https://www.npmjs.com/package/@fibbojs/config) : The configuration package, responsible for building and serving your application.
- [`fibbo`](https://www.npmjs.com/package/fibbo) : The CLI mainly used to call the `@fibbojs/config` package.

For now, here is what the tech stack looks like :

- Game stuff
  - [Three.js](https://threejs.org/) for 3D rendering
  - [Rapier](https://rapier.rs/) for physics
  - [PixiJS](https://pixijs.com/) for 2D rendering
  - [Vue](https://vuejs.org/) for the devtools
- Tooling
  - [Nx](https://nx.dev/) for monorepo management
  - [tsdown](https://tsdown.dev/) for building the packages
  - [Vite](https://vitejs.dev/) for the playgrounds + building the devtools
  - [VitePress](https://vitepress.dev/) for the documentation
  - [Vitest](https://vitest.dev/) for testing
  - [TypeDoc](https://typedoc.org/) for the API Reference part of the documentation
  - [Biome](https://biomejs.dev/) for formatting and linting
