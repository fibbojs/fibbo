import { Pipeline } from './Pipeline'

export class PhysicPipeline extends Pipeline {
  constructor(sw: DedicatedWorkerGlobalScope) {
    super(sw)
  }

  frame() {
    // console.log('PhysicPipeline frame')
  }
}
