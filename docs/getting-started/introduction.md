# Introduction

Fibbo is a free and [open-source](https://github.com/fibbojs/fibbo) web-based game engine that allows you to create interactive experiences using JavaScript, right in your browser.

It is designed to be simple to use, extensible, and flexible. You can use it to create games, simulations, visualizations, and more.

Fibbo exposes a simple object-oriented API that allows you to create and manipulate objects in a scene, both in 2D or 3D. You can add objects to the scene, move them around, rotate them, and much more.

## Why Fibbo ?

There are already many game engines available, such as [Unity](https://unity.com/), [Unreal Engine](https://www.unrealengine.com/), and [Godot](https://godotengine.org/). So why did we create Fibbo ?

There are a few reasons:
- **Accessibility** : Web games are easy to share, run on any device, and don't require any installation. We think this is an appropriate plateform for many types of experiences, such as arcade games, educational games, and more.
- **Easy to learn** : We think that Fibbo is easier to learn than other game engines. The API is fairly minimal, and the documentation was designed to be accessible to beginners.
- **Extensible** : Fibbo is designed to be extensible. You can create your own components, behaviors, and systems to extend the engine's functionality, but also share them easily through libraries (which can then be installed easily using [npm](https://www.npmjs.com/) for example).
- **Free and open-source** : Fibbo is free to use and open-source. You can use it for any purpose, commercial or non-commercial, without any restrictions.

## Why not Fibbo ?

Although we think Fibbo is a great tool for many types of experiences, it may not be the best choice for all projects.

Here are a few reasons why you might not want to use Fibbo :

- **Performance** : It is fair to say that the web platform can't get as much performance as native platforms. And this is even more true for Fibbo, which is still in its early stages of development.
- **Standardization** : Fibbo is new and still not widely used. If you're on your way to become a professional game developer, you should probably consider more standard tools (we highly recommend [Godot](https://godotengine.org/) as a free and open-source game engine !).

## So should I use it ?

Well it's really up to you ! We believe Fibbo can create fun experiences for everyone.

Moreover, we would really appreciate your feedback, so if you have any suggestions, questions, or if you encounter any issues, please let us know by either [asking on the forum](https://github.com/orgs/fibbojs/discussions) or [opening an issue on GitHub](https://github.com/fibbojs/fibbo/issues).

We are doing our best to create a great tool so developers can create amazing experiences, and your feedback is really important to us.

## Architecture

Fibbo is a monorepo managed with [Nx](https://nx.dev/). It is composed of multiple packages, each with its own responsibility.

Here are the main packages :
- [`@fibbojs/core`](https://www.npmjs.com/package/@fibbojs/core) : The core package, which defines fundamental classes and interfaces.
- [`@fibbojs/2d`](https://www.npmjs.com/package/@fibbojs/2d) : The 2D engine, mainly based on [PixiJS](https://pixijs.com/) and [Rapier](https://rapier.rs/).
- [`@fibbojs/3d`](https://www.npmjs.com/package/@fibbojs/3d) : The 3D engine, mainly based on [Three.js](https://threejs.org/) and [Rapier](https://rapier.rs/).
- [`@fibbojs/event`](https://www.npmjs.com/package/@fibbojs/event) : The event system, which allows you to create and listen to events in the browser.
- [`@fibbojs/devtools`](https://www.npmjs.com/package/@fibbojs/devtools) : The devtools, which allow you to inspect and debug your scenes.

For now, here is what the tech stack looks like :

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
