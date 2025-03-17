import { FRigidBodyType } from '../types/FRigidBodyType'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'

/**
 * A 2d sensor that can be attached to a component.
 * @category Core
 */
export class FSensor extends FRigidBody {
  /**
   * Creates a sensor for the given component.
   * @param options The options for the sensor.
   * @param options.scene The scene the sensor belongs to.
   * @param options.position The position of the sensor. Default is { x: 0, y: 0 }.
   * @param options.rotation The rotation of the sensor in radians. Default is 0.
   * @param options.scale The scale of the sensor. Default is { x: 1, y: 1 }.
   * @param options.positionOffset The position offset of the sensor. Only used if the sensor is attached to a component. Default is { x: 0, y: 0 }.
   * @param options.rotationOffset The rotation offset of the sensor in radians. Only used if the sensor is attached to a component. Default is 0.
   * @param options.scaleOffset The scale offset of the sensor. Only used if the sensor is attached to a component. Default is { x: 0, y: 0 }.
   * @param options.shape The shape of the collider that will be generated from the sensor. If not defined, it will default to 'CUBOID'.
   * @param options.rigidBodyType The type of the sensor. If not defined, it will default to FRigidBodyType.Dynamic.
   * @param options.lockTranslations If true, the sensor will not be able to move.
   * @param options.lockRotations If true, the sensor will not be able to rotate.
   * @param options.enabledTranslations If defined, it will enable or disable translations on the x and y axis.
   * @param options.enabledTranslations.enableX If true, the sensor will be able to move on the x-axis.
   * @param options.enabledTranslations.enableY If true, the sensor will be able to move on the y-axis.
   * @example
   * ```ts
   * const sensor = new FSensor({
   *  position: { x: 0, y: 0, z: 0 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
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
