import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import { FShapes } from '../types/FShapes'
import type { FComponent } from './FComponent'
import { FCollider } from './FCollider'

export interface FRigidBodyOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
  shape?: FShapes
  rigidBodyType?: RAPIER.RigidBodyType
  sensor?: boolean
  lockTranslations?: boolean
  lockRotations?: boolean
  enabledTranslations?: {
    enableX: boolean
    enableY: boolean
    enableZ: boolean
  }
  enabledRotations?: {
    enableX: boolean
    enableY: boolean
    enableZ: boolean
  }
}

/**
 * @description A 3d RigidBody.
 * @category Core
 */
export class FRigidBody {
  /**
   * RAPIER RigidBody
   */
  rigidBody: RAPIER.RigidBody
  /**
   * Fibbo Collider
   */
  collider: FCollider

  /**
   * @description Creates a rigid body for the given component.
   * @param component The component which the collider will be attached to.
   * @param options The options for the rigid body.
   * @param options.position The position of the rigid body. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the rigid body. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the rigid body. If not defined, it will use the default rotation of the FComponent.
   * @param options.shape The shape of the rigid body. If not defined, it will default to FShapes.CUBE.
   * @param options.rigidBodyType The type of the rigid body. If not defined, it will default to RAPIER.RigidBodyType.Dynamic.
   * @param options.lockTranslations If true, the rigid body will not be able to move.
   * @param options.lockRotations If true, the rigid body will not be able to rotate.
   * @param options.enabledTranslations If defined, it will enable or disable translations on the x and y axis.
   * @param options.enabledTranslations.enableX If true, the rigid body will be able to move on the x-axis.
   * @param options.enabledTranslations.enableY If true, the rigid body will be able to move on the y-axis.
   * @param options.enabledTranslations.enableZ If true, the rigid body will be able to move on the z-axis.
   * @param options.enabledRotations If defined, it will enable or disable rotations on the x and y axis.
   * @param options.enabledRotations.enableX If true, the rigid body will be able to rotate on the x-axis.
   * @param options.enabledRotations.enableY If true, the rigid body will be able to rotate on the y-axis.
   * @param options.enabledRotations.enableZ If true, the rigid body will be able to rotate on the z-axis.
   * @example
   * ```ts
   * const rigidBody = new FRigidBody({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBE
   * })
   * ```
   */
  constructor(component: FComponent, options?: FRigidBodyOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      rotationDegree: undefined,
      shape: FShapes.CUBE,
      rigidBodyType: RAPIER.RigidBodyType.Dynamic,
      sensor: false,
      lockTranslations: false,
      lockRotations: false,
      enabledTranslations: undefined,
      enabledRotations: undefined,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape)
      throw new Error('FibboError: initRigidBody requires position, scale, rotation, shape and rigidBodyType options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FibboError: FScene must have a world to create a rigid body')

    // If rotation degree is given, convert it to radians
    if (options.rotationDegree) {
      options.rotation.x = THREE.MathUtils.degToRad(options.rotationDegree.x)
      options.rotation.y = THREE.MathUtils.degToRad(options.rotationDegree.y)
      options.rotation.z = THREE.MathUtils.degToRad(options.rotationDegree.z)
    }

    // Create a rigid body description according to the type
    const rigidBodyDesc = new RAPIER.RigidBodyDesc(options.rigidBodyType as RAPIER.RigidBodyType)
    // Interprete the given position as relative to the component's position
    rigidBodyDesc.setTranslation(
      component.transform.position.x + options.position.x,
      component.transform.position.y + options.position.y,
      component.transform.position.z + options.position.z,
    )

    // Interprete the given rotation as relative to the component's rotation
    rigidBodyDesc.setRotation(new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        component.transform.rotation.x + options.rotation.x,
        component.transform.rotation.y + options.rotation.y,
        component.transform.rotation.z + options.rotation.z,
      ),
    ))

    // Create the rigid body
    this.rigidBody = component.scene.world.createRigidBody(rigidBodyDesc)

    // Lock the translation if needed
    if (options.lockTranslations)
      this.rigidBody.lockTranslations(true, true)
    // Lock the rotation if needed
    if (options.lockRotations)
      this.rigidBody.lockRotations(true, true)
    // Enable only specific translations if needed
    if (options.enabledTranslations) {
      this.rigidBody.setEnabledTranslations(
        options.enabledTranslations.enableX,
        options.enabledTranslations.enableY,
        options.enabledTranslations.enableZ,
        true,
      )
    }
    // Enable only specific rotations if needed
    if (options.enabledRotations) {
      this.rigidBody.setEnabledRotations(
        options.enabledRotations.enableX,
        options.enabledRotations.enableY,
        options.enabledRotations.enableZ,
        true,
      )
    }

    // Create the collider
    this.collider = new FCollider(component, {
      ...options,
      rigidBody: this.rigidBody,
    })
  }
}
