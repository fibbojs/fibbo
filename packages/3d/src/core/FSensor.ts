import * as RAPIER from '@dimforge/rapier3d'
import type { FComponent } from './FComponent'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'

/**
 * A 3d sensor that can be attached to a component.
 * @category Core
 */
export class FSensor extends FRigidBody {
  /**
   * Creates a sensor for the given component.
   * It is basically a rigidBody that defaults to a kinematic position based type aswell as the sensor flag.
   * @param component The component which the collider will be attached to.
   * @param options The options for the sensor.
   * @param options.position The position of the sensor. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the sensor. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the sensor. If not defined, it will use the default rotation of the FComponent.
   * @param options.shape The shape of the sensor. If not defined, it will default to FShapes.CUBOID.
   * @param options.rigidBodyType The type of the sensor. If not defined, it will default to RAPIER.RigidBodyType.Dynamic.
   * @param options.lockTranslations If true, the sensor will not be able to move.
   * @param options.lockRotations If true, the sensor will not be able to rotate.
   * @param options.enabledTranslations If defined, it will enable or disable translations on the x and y axis.
   * @param options.enabledTranslations.enableX If true, the sensor will be able to move on the x-axis.
   * @param options.enabledTranslations.enableY If true, the sensor will be able to move on the y-axis.
   * @param options.enabledTranslations.enableZ If true, the sensor will be able to move on the z-axis.
   * @param options.enabledRotations If defined, it will enable or disable rotations on the x and y axis.
   * @param options.enabledRotations.enableX If true, the sensor will be able to rotate on the x-axis.
   * @param options.enabledRotations.enableY If true, the sensor will be able to rotate on the y-axis.
   * @param options.enabledRotations.enableZ If true, the sensor will be able to rotate on the z-axis.
   * @example
   * ```ts
   * const sensor = new FSensor({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  constructor(component: FComponent, options?: FRigidBodyOptions) {
    super(component, {
      sensor: true,
      rigidBodyType: RAPIER.RigidBodyType.KinematicPositionBased,
      ...options,
    })
  }
}
