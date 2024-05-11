import { FGameCamera } from '@fibbojs/fibbo'
import type { FModel, FScene } from '@fibbojs/fibbo'

export default class MyGameCamera extends FGameCamera {
  constructor(attachedModel: FModel, scene: FScene) {
    super(attachedModel, scene)
    this.setPosition(0, 5, 5)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
