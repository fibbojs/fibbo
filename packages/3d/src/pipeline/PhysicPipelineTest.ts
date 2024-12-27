import { BackgroundPipeline } from '@fibbojs/core'

export enum PhysicPipelineCommands {
  START = 'start',
  STOP = 'stop',
}

/**
 * Physic pipeline.
 * @category Pipeline
 */
export class PhysicPipelineTest extends BackgroundPipeline {
  constructor() {
    super('../../3d/dist/pipeline/PhysicWorkerRun.mjs')
  }

  frame(_delta: number) {
    // console.log('PhysicPipeline frame')
  }
}
