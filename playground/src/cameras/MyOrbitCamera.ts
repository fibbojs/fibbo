import { FibboOrbitCamera } from '@fibbojs/fibbo'
import type { FibboModel, FibboScene } from '@fibbojs/fibbo'

export default class MyOrbitCamera extends FibboOrbitCamera {
  constructor(attachedModel: FibboModel, scene: FibboScene) {
    super(attachedModel, scene)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
