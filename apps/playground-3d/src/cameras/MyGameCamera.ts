import { FGameCamera } from '@fibbojs/3d'
import type { FModel, FScene3d } from '@fibbojs/3d'

export default class MyGameCamera extends FGameCamera {
  constructor(attachedModel: FModel, scene: FScene3d) {
    super(attachedModel, scene)
    this.setPosition(0, 5, 5)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
