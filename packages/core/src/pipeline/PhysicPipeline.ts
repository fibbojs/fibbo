import { Pipeline } from './Pipeline'

/**
 * Pipeline to handle physic simulation tasks.
 * @category Pipeline
 */
export class PhysicPipeline extends Pipeline {
  constructor(sw: DedicatedWorkerGlobalScope) {
    super(sw)
  }

  frame() {
    // console.log('PhysicPipeline frame')
  }
}
