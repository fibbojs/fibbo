import { FAttachedCamera } from '@fibbojs/fibbo'
import type { FModel } from '@fibbojs/fibbo'

export default class MyAttachedCamera extends FAttachedCamera {
  constructor(attachedModel: FModel) {
    super(attachedModel)
    this.setPosition(0, 5, 5)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
