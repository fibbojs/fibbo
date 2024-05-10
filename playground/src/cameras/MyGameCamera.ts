import { FGameCamera, usePosition } from '@fibbojs/fibbo'
import type { FModel, FScene } from '@fibbojs/fibbo'

@usePosition({ x: 0, y: 5, z: 5 })
export default class MyGameCamera extends FGameCamera {
  constructor(attachedModel: FModel, scene: FScene) {
    super(attachedModel, scene)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
