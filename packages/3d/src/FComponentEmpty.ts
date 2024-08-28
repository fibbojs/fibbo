import type { FScene3d } from './FScene3d'
import { FComponent3d } from './FComponent3d'
import type { FComponent3dOptions } from './FComponent3d'

/**
 * @description An empty component. No mesh is created.
 * @category Core
 */
export class FComponentEmpty extends FComponent3d {
  constructor(scene: FScene3d, options?: FComponent3dOptions) {
    super(scene, options)
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }
}
