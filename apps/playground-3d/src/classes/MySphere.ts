import { FSphere } from '@fibbojs/3d'
import type { FScene3d } from '@fibbojs/3d'

export default class MySphere extends FSphere {
  constructor(scene: FScene3d) {
    super(scene)
    this.setPosition(-2, 3, -2)
    this.initRigidBody()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
