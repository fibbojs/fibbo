import { FCube } from '@fibbojs/3d'
import type { FScene3d } from '@fibbojs/3d'

export default class MyCube extends FCube {
  constructor(scene: FScene3d) {
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
