import { FCuboid } from '@fibbojs/3d'
import type { FComponentOptions } from '@fibbojs/3d'

/**
 * Used to demonstrate that collisions are working with "FCuboid" even if the class is extended.
 */
export default class MyCustomCube extends FCuboid {
  constructor(options?: FComponentOptions) {
    super(options)
  }
}
