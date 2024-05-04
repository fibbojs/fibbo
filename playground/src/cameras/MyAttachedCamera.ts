import { FibboAttachedCamera, usePosition } from '@fibbojs/fibbo'
import type { FibboModel } from '@fibbojs/fibbo'

@usePosition({ x: 0, y: 5, z: 5 })
export default class MyAttachedCamera extends FibboAttachedCamera {
  constructor(attachedModel: FibboModel) {
    super(attachedModel)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
