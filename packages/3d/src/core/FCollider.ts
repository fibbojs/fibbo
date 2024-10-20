import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import { FShapes } from '../types/FShapes'
import type { FVector3 } from '../types/FVector3'
import type { FComponent } from './FComponent'
import type { FRigidBody } from './FRigidBody'
import { FTransform } from './FTransform'

export interface FColliderOptions {
  position?: FVector3
  scale?: FVector3
  rotation?: FVector3
  rotationDegree?: FVector3
  shape?: FShapes
  rigidBody?: FRigidBody
  sensor?: boolean
}

/**
 * A 3d collider that can be attached to a component.
 * @category Core
 */
export class FCollider {
  /**
   * RAPIER Collider
   */
  __COLLIDER__: RAPIER.Collider
  /**
   * Position Offset for the collider.
   * This is used to adjust the collider position relative to the component.
   */
  __POSITION_OFFSET__: FVector3
  /**
   * Rotation Offset for the collider.
   * This is used to adjust the collider position relative to the component.
   */
  __ROTATION_OFFSET__: FVector3
  /**
   * Scale Offset for the collider.
   * This is used to adjust the collider scale relative to the component.
   */
  __SCALE_OFFSET__: FVector3
  /**
   * The component the collider is attached to.
   */
  component: FComponent
  /**
   * The transform of the rigidBody.
   */
  transform: FTransform
  /**
   * The shape of the collider.
   */
  shape: FShapes

  /**
   * Creates a collider for a given component.
   * @param component The component which the collider will be attached to.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent.
   * @param options.rotationDegree The rotation of the collider in degrees. If not defined, it will default to 0.
   * @param options.shape The shape of the collider. If not defined, it will default to FShapes.CUBOID.
   * @param options.rigidBody The rigidBody to attach the collider to. (optional)
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * const collider = new FCollider(component, {
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  constructor(component: FComponent, options?: FColliderOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      rotationDegree: undefined,
      shape: FShapes.CUBOID,
      rigidBody: undefined,
      sensor: false,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape || options.sensor === undefined)
      throw new Error('FibboError: initCollider requires transforms options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FibboError: FScene must have a world to create a collider')

    // If rotation degree is given, convert it to radians
    if (options.rotationDegree) {
      options.rotation = {
        x: THREE.MathUtils.degToRad(options.rotationDegree.x),
        y: THREE.MathUtils.degToRad(options.rotationDegree.y),
        z: THREE.MathUtils.degToRad(options.rotationDegree.z),
      }
    }

    // Store the options
    this.__POSITION_OFFSET__ = { x: options.position.x, y: options.position.y, z: options.position.z }
    this.__ROTATION_OFFSET__ = { x: options.rotation.x, y: options.rotation.y, z: options.rotation.z }
    this.__SCALE_OFFSET__ = { x: options.scale.x, y: options.scale.y, z: options.scale.z }
    this.component = component
    this.shape = options.shape

    // Devide the scale by 2 for the collider (RAPIER uses half-extents)
    // Also interpete the scale as relative to the component's scale
    options.scale = {
      x: component.transform.scale.x / 2 * options.scale.x,
      y: component.transform.scale.y / 2 * options.scale.y,
      z: component.transform.scale.z / 2 * options.scale.z,
    }

    // Create a collider description according to the shape given
    let colliderDesc
    switch (options.shape) {
      case FShapes.CUBOID:
        colliderDesc = RAPIER.ColliderDesc.cuboid(options.scale.x, options.scale.y, options.scale.z)
        break
      case FShapes.SPHERE:
        colliderDesc = RAPIER.ColliderDesc.ball(options.scale.x)
        break
      case FShapes.CAPSULE:
        colliderDesc = RAPIER.ColliderDesc.capsule(options.scale.y / 2, options.scale.x / 2)
        break
      case FShapes.MESH:
      // If component.__MESH__ isn't defined, throw an error
      {
        if (!component.__MESH__)
          throw new Error('FibboError: Mesh collider can only be created from a THREE.Mesh')
        // Flag to check if a THREE.Mesh was found
        let found = false
        // Traverse the mesh tree until we find a THREE.Mesh
        component.__MESH__.traverse((child) => {
          if (!found && child instanceof THREE.Mesh) {
            colliderDesc = RAPIER.ColliderDesc.trimesh(
              child.geometry.attributes.position.array as Float32Array,
              child.geometry.index?.array as Uint32Array,
            )
            found = true
          }
        })
        // If no THREE.Mesh was found, throw an error
        if (!found)
          throw new Error('FibboError: Mesh collider can only be created if a THREE.Mesh is found in the component')
        break
      }
      default:
        throw new Error(`FibboError: shape not supported : ${options.shape}`)
    }
    // Verify the collider description was created
    if (!colliderDesc)
      throw new Error('FibboError: Collider description could not be created')

    // If no rigidbody given, the collider is free : set translation and rotation for the collider
    if (options.rigidBody === undefined) {
      // Interprete the given position as relative to the component's position
      const finalPosition = new THREE.Vector3(
        component.transform.position.x + options.position.x,
        component.transform.position.y + options.position.y,
        component.transform.position.z + options.position.z,
      )
      colliderDesc.setTranslation(finalPosition.x, finalPosition.y, finalPosition.z)

      // Interprete the given rotation as relative to the component's rotation
      const finalRotation = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          component.transform.rotation.x + options.rotation.x,
          component.transform.rotation.y + options.rotation.y,
          component.transform.rotation.z + options.rotation.z,
        ),
      )
      colliderDesc.setRotation(finalRotation)
    }
    // Set the sensor flag
    if (options.sensor) {
      colliderDesc.setSensor(true)
      colliderDesc.setActiveCollisionTypes(RAPIER.ActiveCollisionTypes.ALL)
    }

    // Create the transform
    this.transform = new FTransform({
      position: options.position,
      rotation: options.rotation,
      scale: options.scale,
    })

    // Create the collider
    this.__COLLIDER__ = component.scene.world.createCollider(colliderDesc, options.rigidBody?.__RIGIDBODY__)
  }

  /**
   * Update the position of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the position update.
   * This means the offset will be added to the position.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_POSITION__(initiator: boolean = false): void {
    const newPosition = {
      x: this.component.transform.position.x,
      y: this.component.transform.position.y,
      z: this.component.transform.position.z,
    }
    // If the collider is the initiator, propagate the position update
    if (initiator) {
      this.component.__UPDATE_POSITION__()
      this.component.sensor?.__UPDATE_POSITION__()
    }
    // Else, it was propagated to the collider, so add the offset
    else {
      newPosition.x += this.__POSITION_OFFSET__.x
      newPosition.y += this.__POSITION_OFFSET__.y
      newPosition.z += this.__POSITION_OFFSET__.z
    }
    // Update the collider position
    this.__COLLIDER__.setTranslation(newPosition)
  }

  /**
   * Update the rotation of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the rotation update.
   * This means the offset will be added to the rotation.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_ROTATION__(initiator: boolean = false): void {
    const newRotation = new THREE.Euler(
      this.component.transform.rotation.x,
      this.component.transform.rotation.y,
      this.component.transform.rotation.z,
    )
    // If the collider is the initiator, propagate the rotation update
    if (initiator) {
      this.component.__UPDATE_ROTATION__()
      this.component.sensor?.__UPDATE_ROTATION__()
    }
    // Else, it was propagated to the collider, so add the offset
    else {
      newRotation.x += this.__ROTATION_OFFSET__.x
      newRotation.y += this.__ROTATION_OFFSET__.y
      newRotation.z += this.__ROTATION_OFFSET__.z
    }
    // Update the collider rotation
    this.__COLLIDER__.setRotation(new THREE.Quaternion().setFromEuler(newRotation))
  }

  /**
   * Update the scale of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the scale update.
   * This means the offset will be added to the scale.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_SCALE__(initiator: boolean = false): void {
    // If the collider is the initiator, propagate the scale update
    if (initiator) {
      this.component.__UPDATE_SCALE__()
      this.component.sensor?.__UPDATE_SCALE__()
    }
    // If the collider is a cuboid, update its half extents
    if (this.__COLLIDER__.shape instanceof RAPIER.Cuboid) {
      this.__COLLIDER__.setShape(new RAPIER.Cuboid(this.transform.scale.x / 2, this.transform.scale.y / 2, this.transform.scale.z / 2))
    }
    // If the collider is a ball, update its radius
    else if (this.__COLLIDER__.shape instanceof RAPIER.Ball) {
      this.__COLLIDER__.setShape(new RAPIER.Ball(Math.max(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z) / 2))
    }
  }
}
