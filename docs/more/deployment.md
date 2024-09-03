# Deployment

If you're using the default Vite starter template, building your game is the same as building any other Vite project. Just run `npm run build` (or `tsc && vite build` directly) and you'll get a production-ready build in the `dist` folder.

The starter also provides a GitHub Actions workflow that automatically builds and deploys your game to GitHub Pages whenever you push to the `main` branch. You can find the workflow file [here](https://github.com/fibbojs/starter-3d/blob/main/.github/workflows/release.yml) if you want to customize it.

::: warning
If you're deploying to GitHub Pages, you are likely to run into issues with the default `base` setting in the Vite config. You can fix this by setting `base: '/your-repo-name/'` in `vite.config.ts`.
:::

You can get more information about deploying a Vite project in the [Vite documentation](https://vitejs.dev/guide/build).
