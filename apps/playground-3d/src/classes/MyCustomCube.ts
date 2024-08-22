import { FCube } from '@fibbojs/3d'
import type { FComponent3dOptions, FScene3d } from '@fibbojs/3d'

/**
 * Used to demonstrate that collisions are working with "FCube" even if the class is extended.
 */
export default class MyCustomCube extends FCube {
  constructor(scene: FScene3d, options?: FComponent3dOptions) {
    super(scene, options)
  }

  onFrame(delta: number) {
    super.onFrame(delta)
  }
}
