import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: [
    '@dimforge/rapier3d',
    '@dimforge/rapier2d',
  ],
  failOnWarn: false,
})
