import { FOrbitCamera } from '@fibbojs/3d'
import type { FComponent3d, FScene3d } from '@fibbojs/3d'

export default class MyOrbitCamera extends FOrbitCamera {
  constructor(attachedComponent: FComponent3d, scene: FScene3d) {
    super(attachedComponent, scene)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
