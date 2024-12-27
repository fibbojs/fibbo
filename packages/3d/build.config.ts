import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/pipeline/PhysicWorkerRun',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: [
    'three',
    '@dimforge/rapier3d',
  ],
  failOnWarn: false,
})
