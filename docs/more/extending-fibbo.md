# Extending Fibbo

We provide a [module starter](https://github.com/fibbojs/starter-module) to help you get started with creating your own modules for Fibbo.

This concept was highly inspired by the [Nuxt module system](https://nuxt.com/modules), so shoutout to them for the idea !

## Usage

- Clone the repository

```bash
npx tiged fibbojs/starter-module starter-module
```

- Do not forget to modify the following fields :
    - package.json : `name`, `description`, `author`, `homepage`, `repository`, `bugs`
    - vite.config.ts : `build.lib.name`

- Install the dependencies

```bash
cd starter-module
npm install
```

- Run the playground to test your module

```bash
npm run dev
```

- Build the module for production

```bash
npm run build
```

## Publishing a module

Once you are ready to publish your module, you can do so by running the following command :

```bash
npm publish
```

If you're not familiar with publishing packages to npm, you can refer to the [official documentation](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry).
