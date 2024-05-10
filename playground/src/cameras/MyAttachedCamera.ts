import { FAttachedCamera, usePosition } from '@fibbojs/fibbo'
import type { FModel } from '@fibbojs/fibbo'

@usePosition({ x: 0, y: 5, z: 5 })
export default class MyAttachedCamera extends FAttachedCamera {
  constructor(attachedModel: FModel) {
    super(attachedModel)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
