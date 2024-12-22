import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/pipeline/RenderPipelineWorker',
    'src/pipeline/PhysicPipelineWorker',
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
})
