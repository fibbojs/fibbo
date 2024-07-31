import { FAttachedCamera } from '@fibbojs/3d'
import type { FComponent3d } from '@fibbojs/3d'

export default class MyAttachedCamera extends FAttachedCamera {
  constructor(attachedComponent: FComponent3d) {
    super(attachedComponent)
    this.setPosition(0, 5, 5)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
