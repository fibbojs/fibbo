import { FFixedCamera } from '@fibbojs/3d'

export default class MyCamera extends FFixedCamera {
  constructor() {
    super()
    this.setPosition(5, 5, 5)
    this.lookAt(0, 0, 0)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
