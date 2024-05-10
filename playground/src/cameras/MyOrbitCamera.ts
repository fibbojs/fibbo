import { FOrbitCamera } from '@fibbojs/fibbo'
import type { FModel, FScene } from '@fibbojs/fibbo'

export default class MyOrbitCamera extends FOrbitCamera {
  constructor(attachedModel: FModel, scene: FScene) {
    super(attachedModel, scene)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
