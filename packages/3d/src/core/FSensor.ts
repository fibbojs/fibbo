import { FRigidBodyType } from '../types/FRigidBodyType'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'
import type { FScene } from './FScene'

/**
 * A 3d sensor that can be attached to a component.
 * @category Core
 */
export class FSensor extends FRigidBody {
  /**
   * Creates a rigidBody for the given component.
   * @param options The options for the rigidBody.
   * @param options.scene The scene the rigidBody belongs to.
   * @param options.position The position of the rigidBody.
   * @param options.scale The scale of the rigidBody.
   * @param options.rotation The rotation of the rigidBody.
   * @param options.shape The shape of the rigidBody. If not defined, it will default to FShapes.CUBOID.
   * @param options.rigidBodyType The type of the rigidBody. If not defined, it will default to FRigidBodyType.Dynamic.
   * @param options.lockTranslations If true, the rigidBody will not be able to move.
   * @param options.lockRotations If true, the rigidBody will not be able to rotate.
   * @param options.enabledTranslations If defined, it will enable or disable translations on the x and y axis.
   * @param options.enabledTranslations.enableX If true, the rigidBody will be able to move on the x-axis.
   * @param options.enabledTranslations.enableY If true, the rigidBody will be able to move on the y-axis.
   * @param options.enabledTranslations.enableZ If true, the rigidBody will be able to move on the z-axis.
   * @param options.enabledRotations If defined, it will enable or disable rotations on the x and y axis.
   * @param options.enabledRotations.enableX If true, the rigidBody will be able to rotate on the x-axis.
   * @param options.enabledRotations.enableY If true, the rigidBody will be able to rotate on the y-axis.
   * @param options.enabledRotations.enableZ If true, the rigidBody will be able to rotate on the z-axis.
   * @example
   * ```ts
   * import { FSensor } from '@fibbojs/3d'
   *
   * const sensor = new FSensor({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  constructor(options?: FRigidBodyOptions) {
    super({
      sensor: true,
      rigidBodyType: FRigidBodyType.KINEMATIC_POSITION_BASED,
      ...options,
    })
  }
}
