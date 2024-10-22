import type { FScene } from '@fibbojs/2d'
import { FRectangle } from '@fibbojs/2d'

export default class MySquare extends FRectangle {
  constructor(scene: FScene) {
    super(scene)
    this.transform.rotationDegree = 30
    this.initRigidBody()
  }
}
