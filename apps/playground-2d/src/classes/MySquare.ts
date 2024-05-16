import type { FScene2d } from '@fibbojs/2d'
import { FSquare } from '@fibbojs/2d'

export default class MySquare extends FSquare {
  constructor(scene: FScene2d) {
    super(scene)
    this.setRotation(0.5)
    this.initRigidBody()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
