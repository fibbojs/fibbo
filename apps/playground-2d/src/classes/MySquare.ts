import type { FScene } from '@fibbojs/2d'
import { FSquare } from '@fibbojs/2d'

export default class MySquare extends FSquare {
  constructor(scene: FScene) {
    super(scene)
    this.setRotationDegree(30)
    this.initRigidBody()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
