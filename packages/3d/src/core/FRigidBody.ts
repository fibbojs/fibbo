import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import { FShapes } from '../types/FShapes'
import type { FVector3 } from '../types/FVector3'
import type { FComponent } from './FComponent'
import { FCollider } from './FCollider'
import { FTransform } from './FTransform'

export interface FRigidBodyOptions {
  position?: FVector3
  scale?: FVector3
  rotation?: FVector3
  rotationDegree?: FVector3
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
 * A 3d rigidBody that can be attached to a component.
 * @category Core
 */
export class FRigidBody {
  /**
   * RAPIER RigidBody
   */
  __RIGIDBODY__: RAPIER.RigidBody
  /**
   * Fibbo Collider
   */
  collider: FCollider
  /**
   * Position Offset for the rigidBody.
   * This is used to adjust the rigidBody position relative to the component.
   */
  __POSITION_OFFSET__: FVector3
  /**
   * Rotation Offset for the rigidBody.
   * This is used to adjust the rigidBody position relative to the component.
   */
  __ROTATION_OFFSET__: FVector3
  /**
   * The component the rigidBody is attached to.
   */
  component: FComponent
  /**
   * The transform of the rigidBody.
   */
  transform: FTransform

  /**
   * Creates a rigidBody for the given component.
   * @param component The component which the collider will be attached to.
   * @param options The options for the rigidBody.
   * @param options.position The position of the rigidBody. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the rigidBody. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the rigidBody. If not defined, it will use the default rotation of the FComponent.
   * @param options.shape The shape of the rigidBody. If not defined, it will default to FShapes.CUBOID.
   * @param options.rigidBodyType The type of the rigidBody. If not defined, it will default to RAPIER.RigidBodyType.Dynamic.
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
   * const rigidBody = new FRigidBody({
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
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
      shape: FShapes.CUBOID,
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
      throw new Error('FibboError: initRigidBody requires transforms options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FibboError: FScene must have a world to create a rigidBody')

    // Store the options
    this.__POSITION_OFFSET__ = { x: options.position.x, y: options.position.y, z: options.position.z }
    this.__ROTATION_OFFSET__ = { x: options.rotation.x, y: options.rotation.y, z: options.rotation.z }
    this.component = component

    // If rotation degree is given, convert it to radians
    if (options.rotationDegree) {
      options.rotation.x = THREE.MathUtils.degToRad(options.rotationDegree.x)
      options.rotation.y = THREE.MathUtils.degToRad(options.rotationDegree.y)
      options.rotation.z = THREE.MathUtils.degToRad(options.rotationDegree.z)
    }

    // Create a rigidBody description according to the type
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

    // Create the rigidBody
    this.__RIGIDBODY__ = component.scene.world.createRigidBody(rigidBodyDesc)

    // Lock the translation if needed
    if (options.lockTranslations)
      this.__RIGIDBODY__.lockTranslations(true, true)
    // Lock the rotation if needed
    if (options.lockRotations)
      this.__RIGIDBODY__.lockRotations(true, true)
    // Enable only specific translations if needed
    if (options.enabledTranslations) {
      this.__RIGIDBODY__.setEnabledTranslations(
        options.enabledTranslations.enableX,
        options.enabledTranslations.enableY,
        options.enabledTranslations.enableZ,
        true,
      )
    }
    // Enable only specific rotations if needed
    if (options.enabledRotations) {
      this.__RIGIDBODY__.setEnabledRotations(
        options.enabledRotations.enableX,
        options.enabledRotations.enableY,
        options.enabledRotations.enableZ,
        true,
      )
    }

    // Create the transform
    this.transform = new FTransform({
      position: options.position,
      rotation: options.rotation,
      scale: options.scale,
    })

    // Create the collider
    this.collider = new FCollider(component, {
      ...options,
      rigidBody: this,
    })
  }

  /**
   * Update the position of the rigidBody according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the rigidBody won't be considered as the initiator of the rotation update.
   * This means the offset will be added to the rotation.
   * Setting this to true will propagate the event to other objects (component, collider, sensor,...).
   */
  __UPDATE_POSITION__(initiator: boolean = false): void {
    const newPosition = {
      x: this.component.transform.position.x,
      y: this.component.transform.position.y,
      z: this.component.transform.position.z,
    }
    // If the rigidBody is the initiator, propagate the position update
    if (initiator) {
      this.component.__UPDATE_POSITION__()
      this.collider.__UPDATE_POSITION__()
    }
    // Else, it was propagated to the rigidBody, so add the offset
    else {
      newPosition.x += this.__POSITION_OFFSET__.x
      newPosition.y += this.__POSITION_OFFSET__.y
      newPosition.z += this.__POSITION_OFFSET__.z
    }
    // Update the rigidBody position
    this.__RIGIDBODY__.setTranslation(newPosition, true)
  }

  /**
   * Update the rotation of the rigidBody according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the rigidBody won't be considered as the initiator of the rotation update.
   * This means the offset will be added to the rotation.
   * Setting this to true will propagate the event to other objects (component, collider, sensor,...).
   */
  __UPDATE_ROTATION__(initiator: boolean = false): void {
    const newRotation = new THREE.Euler(
      this.component.transform.rotation.x,
      this.component.transform.rotation.y,
      this.component.transform.rotation.z,
    )
    // If the rigidBody is the initiator, propagate the rotation update
    if (initiator) {
      this.component.__UPDATE_ROTATION__()
      this.collider.__UPDATE_ROTATION__()
    }
    // Else, it was propagated to the rigidBody, so add the offset
    else {
      newRotation.x += this.__ROTATION_OFFSET__.x
      newRotation.y += this.__ROTATION_OFFSET__.y
      newRotation.z += this.__ROTATION_OFFSET__.z
    }
    // Update the rigidBody rotation
    this.__RIGIDBODY__.setRotation(new THREE.Quaternion().setFromEuler(newRotation), true)
  }

  /**
   * Update the scale of the rigidBody according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the rigidBody won't be considered as the initiator of the scale update.
   * This means the offset will be added to the scale.
   * Setting this to true will propagate the event to other objects (component, collider, sensor,...).
   */
  __UPDATE_SCALE__(initiator: boolean = false): void {
    // If the rigidBody is the initiator, propagate the scale update
    if (initiator) {
      this.component.__UPDATE_SCALE__()
      this.collider.__UPDATE_SCALE__()
    }
  }
}
