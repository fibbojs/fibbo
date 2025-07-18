# Deployment

To bundle your game for deployment, just run `npm run build` and you'll get a production-ready build in the `dist` folder.

The starter also provides a GitHub Actions workflow that automatically builds and deploys your game to GitHub Pages whenever you push to the `main` branch. You can find the workflow file [here](https://github.com/fibbojs/create-fibbo/blob/main/templates/3d/.github/workflows/release.yml) if you want to customize it.

::: warning
If you're deploying to GitHub Pages, you are likely to run into issues with the default `base` setting in the `vite` config. You can fix this by setting `vite.base: '/your-repo-name/'` in `fibbo.config.ts`.
:::

As Fibbo is based on Vite, you can refer to the [Vite documentation](https://vitejs.dev/guide/build) to learn more about the build process and how to customize it.
