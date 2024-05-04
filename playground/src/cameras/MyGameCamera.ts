import { FibboGameCamera, usePosition } from '@fibbojs/fibbo'
import type { FibboModel, FibboScene } from '@fibbojs/fibbo'

@usePosition({ x: 0, y: 5, z: 5 })
export default class MyGameCamera extends FibboGameCamera {
  constructor(attachedModel: FibboModel, scene: FibboScene) {
    super(attachedModel, scene)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
