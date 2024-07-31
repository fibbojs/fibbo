import { FGameCamera } from '@fibbojs/3d'
import type { FComponent3d, FScene3d } from '@fibbojs/3d'

export default class MyGameCamera extends FGameCamera {
  constructor(attachedComponent: FComponent3d, scene: FScene3d) {
    super(attachedComponent, scene)
    this.setPosition(0, 5, 5)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
