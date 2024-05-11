import { FCube } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

export default class MyCube extends FCube {
  constructor(scene: FScene) {
    super(scene)
    this.setPosition(4, 5, -2)
    this.setScale(2, 0.5, 1)
    this.setRotationDegree(60, 0, 0)
    this.initRigidBody()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
