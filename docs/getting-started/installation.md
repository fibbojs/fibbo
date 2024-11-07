# Installation

Want to create a new game ? Fibbo provides a starter project based on [Vite](https://vitejs.dev/) for both 2D and 3D games. It includes a basic scene as well as devtools to help you get started quickly.

## Prerequisites

- [Node.js](https://nodejs.org/) : for now, Fibbo was only tested with [Node.js 22.2.0](https://nodejs.org/download/release/v22.2.0/), but it should work with any other versions as it is mainly a frontend technology.
- [npm](https://www.npmjs.com/) : should be included with Node.js

## CLI

Fibbo provides a [CLI](https://github.com/fibbojs/cli) to help you create and manage your projects. You can install it globally with npm :

```bash
npm install -g fibbo
fibbo help
```

It can also be used directly through `npx` :

```bash
npx fibbo help
```

## Quick start

::: code-group

```bash [2d]
fibbo init 2d [project-name]
```

```bash [3d]
fibbo init 3d [project-name]
```

:::

You can also clone the templates directly from GitHub :
- [starter-2d](https://github.com/fibbojs/starter-2d)
- [starter-3d](https://github.com/fibbojs/starter-3d)

## Manual installation <Badge type="warning" text="work in progress" />
