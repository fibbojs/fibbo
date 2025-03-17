import { FRectangle } from '@fibbojs/2d'

export default class MySquare extends FRectangle {
  constructor() {
    super()
    this.transform.rotationDegree = 30
    this.initRigidBody()
  }
}
