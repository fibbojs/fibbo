import { Pipeline } from './Pipeline'

export class RenderPipeline extends Pipeline {
  constructor(sw: DedicatedWorkerGlobalScope) {
    super(sw)
  }

  frame() {
    // console.log('RenderPipeline frame')
  }
}
