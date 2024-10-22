import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import { FShapes } from '../types/FShapes'
import type { FVector3 } from '../types/FVector3'
import type { FComponent } from './FComponent'
import type { FRigidBody } from './FRigidBody'
import { FTransform } from './FTransform'
import type { FScene } from './FScene'

export interface FColliderOptions {
  position?: FVector3
  rotation?: FVector3
  rotationDegree?: FVector3
  scale?: FVector3
  positionOffset?: FVector3
  rotationOffset?: FVector3
  rotationDegreeOffset?: FVector3
  scaleOffset?: FVector3
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
   * The component the collider is attached to.
   */
  __COMPONENT__?: FComponent
  /**
   * The transform of the collider.
   */
  transform: FTransform
  /**
   * The transform offset of the collider.
   */
  offset: FTransform
  /**
   * The shape of the collider.
   */
  shape: FShapes

  /**
   * Creates a collider for a given component.
   * @param scene The scene the collider belongs to.
   * @param options The options for the collider.
   * @param options.position The position of the collider. Default is { x: 0, y: 0, z: 0 }.
   * @param options.rotation The rotation of the collider. Default is { x: 0, y: 0, z: 0 }.
   * @param options.rotationDegree The rotation of the collider in degrees.
   * @param options.scale The scale of the collider. Default is { x: 1, y: 1, z: 1 }.
   * @param options.positionOffset The position offset of the collider. Only used if the collider is attached to a component. Default is { x: 0, y: 0, z: 0 }.
   * @param options.rotationOffset The rotation offset of the collider. Only used if the collider is attached to a component. Default is { x: 0, y: 0, z: 0 }.
   * @param options.rotationDegreeOffset The rotation offset of the collider in degrees. Only used if the collider is attached to a component.
   * @param options.scaleOffset The scale offset of the collider. Only used if the collider is attached to a component. Default is { x: 0, y: 0, z: 0 }.
   * @param options.shape The shape of the collider. If not defined, it will default to FShapes.CUBOID.
   * @param options.rigidBody The rigidBody to attach the collider to. (optional)
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * const collider = new FCollider(scene, {
   *  position: { x: 0, y: 0, z: 0 },
   *  scale: { x: 1, y: 1, z: 1 },
   *  rotation: { x: 0, y: 0, z: 0 },
   *  shape: FShapes.CUBOID
   * })
   * ```
   */
  constructor(scene: FScene, options?: FColliderOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      shape: FShapes.CUBOID,
      sensor: false,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape || options.sensor === undefined)
      throw new Error('FibboError: options missing in FCollider constructor')

    // Check if the world exists
    if (!scene.world)
      throw new Error('FibboError: FScene must have a world to create a collider')

    // Store the options
    this.shape = options.shape

    // Configure transform
    this.transform = new FTransform({
      position: options.position,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
      scale: options.scale,
    })
    this.transform.onPositionUpdated(() => this.__UPDATE_POSITION__(true))
    this.transform.onRotationUpdated(() => this.__UPDATE_ROTATION__(true))
    this.transform.onScaleUpdated(() => this.__UPDATE_SCALE__(true))
    this.offset = new FTransform({
      position: options.positionOffset || { x: 0, y: 0, z: 0 },
      rotation: options.rotationOffset ? options.rotationOffset : (options.rotationDegreeOffset ? undefined : { x: 0, y: 0, z: 0 }),
      rotationDegree: options.rotationDegreeOffset ? options.rotationDegreeOffset : (options.rotationOffset ? undefined : { x: 0, y: 0, z: 0 }),
      scale: options.scaleOffset || { x: 0, y: 0, z: 0 },
    })

    // Create a collider description according to the shape given
    let colliderDesc
    switch (options.shape) {
      case FShapes.CUBOID:
        colliderDesc = RAPIER.ColliderDesc.cuboid(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z)
        break
      case FShapes.SPHERE:
        colliderDesc = RAPIER.ColliderDesc.ball(this.transform.scale.x)
        break
      case FShapes.CAPSULE:
        colliderDesc = RAPIER.ColliderDesc.capsule(this.transform.scale.y / 2, this.transform.scale.x / 2)
        break
      default:
        throw new Error(`FibboError: shape not supported : ${options.shape}`)
    }
    // Move the collider to the position
    colliderDesc.setTranslation(this.transform.position.x, this.transform.position.y, this.transform.position.z)
    // Rotate the collider
    colliderDesc.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)))

    // Set the sensor flag
    if (options.sensor) {
      colliderDesc.setSensor(true)
      colliderDesc.setActiveCollisionTypes(RAPIER.ActiveCollisionTypes.ALL)
    }

    // Create the collider
    this.__COLLIDER__ = scene.world.createCollider(colliderDesc, options.rigidBody?.__RIGIDBODY__)

    // Add the collider to the scene
    scene.addCollider(this)
  }

  frame(_delta: number): void {
    // As the collider should have moved, update the transform to sync with the collider
    this.transform.position = this.__COLLIDER__.translation()
    this.transform.rotation = new THREE.Euler().setFromQuaternion(new THREE.Quaternion().copy(this.__COLLIDER__.rotation()))
  }

  /**
   * Update the position of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the position update.
   * This means the new position will be the position of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_POSITION__(initiator: boolean = false): void {
    // If the collider is the initiator
    if (initiator) {
      if (this.component) {
        // Update the collider position
        this.__SET_POSITION__(this.transform.position)
        // Propagate the position update
        this.component.__UPDATE_POSITION__()
        this.component.sensor?.__UPDATE_POSITION__()
      }
    }
    // Else, it was propagated to the collider, so move the collider to the new position with the offset
    else if (this.component) {
      const newPosition = {
        x: this.component.transform.position.x + this.offset.position.x,
        y: this.component.transform.position.y + this.offset.position.y,
        z: this.component.transform.position.z + this.offset.position.z,
      }
      // Update the collider position
      this.__SET_POSITION__(newPosition)
    }
  }

  /**
   * Update the rotation of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the rotation update.
   * This means the new rotation will be the rotation of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_ROTATION__(initiator: boolean = false): void {
    // If the collider is the initiator
    if (initiator) {
      if (this.component) {
        // Update the collider rotation
        this.__SET_ROTATION__(this.transform.rotation)
        // Propagate the rotation update
        this.component.__UPDATE_ROTATION__()
        this.component.sensor?.__UPDATE_ROTATION__()
      }
    }
    // Else, it was propagated to the collider, so rotate the collider to the new rotation with the offset
    else if (this.component) {
      const newRotation = {
        x: this.component.transform.rotation.x + this.offset.rotation.x,
        y: this.component.transform.rotation.y + this.offset.rotation.y,
        z: this.component.transform.rotation.z + this.offset.rotation.z,
      }
      // Update the collider rotation
      this.__SET_ROTATION__(newRotation)
    }
  }

  /**
   * Update the scale of the collider according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the collider won't be considered as the initiator of the scale update.
   * This means the new scale will be the scale of the attached component, plus the offset.
   * Setting this to true will propagate the event to other objects (component, sensor,...).
   */
  __UPDATE_SCALE__(initiator: boolean = false): void {
    // If the collider is the initiator
    if (initiator) {
      if (this.component) {
        // Update the collider scale
        this.__SET_SCALE__(this.transform.scale)
        // Propagate the scale update
        this.component.__UPDATE_SCALE__()
        this.component.sensor?.__UPDATE_SCALE__()
      }
    }
    // Else, it was propagated to the collider, so scale the collider to the new scale with the offset
    else if (this.component) {
      const newScale = {
        x: this.component.transform.scale.x + this.offset.scale.x,
        y: this.component.transform.scale.y + this.offset.scale.y,
        z: this.component.transform.scale.z + this.offset.scale.z,
      }
      // Update the collider scale
      this.__SET_SCALE__(newScale)
    }
  }

  /**
   * Set the position of the collider.
   * @param position The new position of the collider.
   */
  __SET_POSITION__(position: FVector3): void {
    this.__COLLIDER__.setTranslation(position)
    this.transform.__POSITION__ = position
  }

  /**
   * Set the rotation of the collider.
   * @param rotation The new rotation of the collider.
   */
  __SET_ROTATION__(rotation: FVector3): void {
    this.__COLLIDER__.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(rotation.x, rotation.y, rotation.z)))
    this.transform.__ROTATION__ = rotation
  }

  /**
   * Set the scale of the collider.
   * @param scale The new scale of the collider.
   */
  __SET_SCALE__(scale: FVector3): void {
    // If the shape is a sphere, the scale should be the same on all axis
    if (this.shape === FShapes.SPHERE) {
      scale.x = Math.max(scale.x, scale.y, scale.z)
      scale.y = scale.x
      scale.z = scale.x
    }
    // If the shape is a capsule, the scale should be the same on the x and z axis
    else if (this.shape === FShapes.CAPSULE) {
      scale.x = Math.max(scale.x, scale.z)
      scale.z = scale.x
    }
    // If the collider is a cuboid, update its half extents
    if (this.__COLLIDER__.shape instanceof RAPIER.Cuboid) {
      this.__COLLIDER__.setShape(new RAPIER.Cuboid(scale.x / 2, scale.y / 2, scale.z / 2))
    }
    // If the collider is a ball, update its radius
    else if (this.__COLLIDER__.shape instanceof RAPIER.Ball) {
      this.__COLLIDER__.setShape(new RAPIER.Ball(scale.x / 2))
    }
    // If the collider is a capsule, update its half extents
    else if (this.__COLLIDER__.shape instanceof RAPIER.Capsule) {
      this.__COLLIDER__.setShape(new RAPIER.Capsule(scale.y / 2, scale.x / 2))
    }
    this.transform.__SCALE__ = scale
  }

  /**
   * Generate a mesh collider from a component.
   * @param component The component to generate the mesh collider from.
   */
  generateShapeFromComponent(component: FComponent): void {
    if (!component.__MESH__)
      throw new Error('FibboError: Mesh collider can only be created from a THREE.Mesh')
    let colliderDesc
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
    if (!found || !colliderDesc)
      throw new Error('FibboError: Mesh collider can only be created if a THREE.Mesh is found in the component')
    // Create the collider
    this.__COLLIDER__ = component.scene.world.createCollider(colliderDesc, component.rigidBody?.__RIGIDBODY__)
    // Move the collider to the position
    this.__SET_POSITION__(this.transform.position)
    // Rotate the collider
    this.__SET_ROTATION__(this.transform.rotation)
    // Define the shape as a mesh
    this.shape = FShapes.MESH
  }

  // Setters & Getters

  get component(): FComponent | undefined {
    return this.__COMPONENT__
  }

  set component(component: FComponent | undefined) {
    this.__COMPONENT__ = component
    // Update the position, rotation and scale of the collider
    this.__UPDATE_POSITION__()
    this.__UPDATE_ROTATION__()
    this.__UPDATE_SCALE__()
  }
}
