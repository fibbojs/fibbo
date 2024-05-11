import { FSphere } from '@fibbojs/fibbo'
import type { FScene } from '@fibbojs/fibbo'

export default class MySphere extends FSphere {
  constructor(scene: FScene) {
    super(scene)
    this.setPosition(-2, 3, -2)
    this.initRigidBody()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
