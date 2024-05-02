import * as THREE from 'three'
import type { FibboVector3 } from '../../types/FibboVector3'
import { useRotation } from './useRotation'

/**
 * @description This decorator is used to alter the rotation of a FibboModel (like FibboCube, FibboGLTF, etc), using degrees.
 * It must be placed before useRigidBody.
 * @param rotation The rotation to be applied.
 * @returns {Function} The class with the rotation altered.
 * @example
 * ```ts
 * import { FibboCube, useRotationDegree } from '@fibbojs/fibbo'
 * import type { FibboScene } from '@fibbojs/fibbo'
 *
 * @useRotationDegree({ x: 90, y: 0, z: 0 })
 * export class MyCube extends FibboCube {
 *  constructor(scene: FibboScene) {
 *   super(scene)
 *  }
 *
 *  onFrame(delta: number) {
 *   super.onFrame(delta)
 *  }
 * }
 * ```
 */
export function useRotationDegree(
  // Default rotation
  rotation: FibboVector3 = { x: 1, y: 1, z: 1 },
): Function {
  // Convert degrees to radians
  const radRotation = {
    x: THREE.MathUtils.degToRad(rotation.x),
    y: THREE.MathUtils.degToRad(rotation.y),
    z: THREE.MathUtils.degToRad(rotation.z),
  }

  return useRotation(radRotation)
}
