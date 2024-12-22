import { Pipeline } from './Pipeline'

/**
 * Pipeline to handle rendering tasks.
 * @category Pipeline
 */
export class RenderPipeline extends Pipeline {
  constructor(sw: DedicatedWorkerGlobalScope) {
    super(sw)
  }

  frame() {
    // console.log('RenderPipeline frame')
  }
}
