import type { FScene } from '@fibbojs/2d'
import { FRectangle } from '@fibbojs/2d'

export default class MySquare extends FRectangle {
  constructor(scene: FScene) {
    super(scene)
    this.setRotationDegree(30)
    this.initRigidBody()
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
