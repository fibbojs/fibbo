import { FAttachedCamera } from '@fibbojs/3d'
import type { FModel } from '@fibbojs/3d'

export default class MyAttachedCamera extends FAttachedCamera {
  constructor(attachedModel: FModel) {
    super(attachedModel)
    this.setPosition(0, 5, 5)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
