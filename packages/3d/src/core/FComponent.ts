import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { OnCollisionWithData } from '@fibbojs/core'
import { FComponent as FComponentCore } from '@fibbojs/core'
import type { FController } from '../controllers/FController'
import type { FVector3 } from '../types/FVector3'
import type { FScene } from './FScene'
import type { FCollider } from './FCollider'
import type { FRigidBody } from './FRigidBody'
import { FTransform } from './FTransform'

export interface FComponentOptions {
  position?: FVector3
  scale?: FVector3
  rotation?: FVector3
  rotationDegree?: FVector3
}

/**
 * The base class for all 3D objects in Fibbo.
 * @category Core
 */
export abstract class FComponent extends FComponentCore {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = true

  /**
   * The scene which the component is in.
   */
  scene: FScene

  // The controller attached to the component.
  // Redefined here to be able to use the updated FController type.
  declare controller?: FController

  /**
   * Mesh
   */
  __MESH__?: THREE.Mesh | THREE.Group

  /**
   * Transforms
   */
  transform: FTransform

  // Physics & collision
  /**
   * RigidBody
   */
  rigidBody?: FRigidBody
  /**
   * Collider
   */
  collider?: FCollider
  /**
   * Sensor (a collider that doesn't collide with other colliders, but still triggers events)
   */
  sensor?: FRigidBody

  /**
   * @param scene The 3D scene where the component will be added.
   * @param options The options for the component.
   * @param options.position The position of the component.
   * @param options.position.x The position on the x-axis.
   * @param options.position.y The position on the y-axis.
   * @param options.position.z The position on the z-axis.
   * @param options.scale The scale of the component.
   * @param options.scale.x The scale on the x-axis.
   * @param options.scale.y The scale on the y-axis.
   * @param options.scale.z The scale on the z-axis.
   * @param options.rotation The rotation of the component.
   * @param options.rotation.x The rotation in radians on the x-axis.
   * @param options.rotation.y The rotation in radians on the y-axis.
   * @param options.rotation.z The rotation in radians on the z-axis.
   * @param options.rotationDegree The rotation of the component in degrees. If this is provided, the rotation will be converted to radians.
   * @param options.rotationDegree.x The rotation in degrees on the x-axis.
   * @param options.rotationDegree.y The rotation in degrees on the y-axis.
   * @param options.rotationDegree.z The rotation in degrees on the z-axis.
   */
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene)
    this.scene = scene

    // Define default values
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 1, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || (!options.rotation && !options.rotationDegree))
      throw new Error('FibboError: FComponent requires position, scale and rotation options')

    // Create the transform
    this.transform = new FTransform({
      component: this,
      position: options.position,
      scale: options.scale,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
    })
  }

  frame(_delta: number): void {
    super.frame(_delta)
    // If the rigidBody and mesh exist, update the mesh position and rotation according to the rigidBody
    if (this.rigidBody && this.collider && this.__MESH__) {
      // Translation
      const newMeshPosition = this.rigidBody.__RIGIDBODY__.translation()
      // Remove offset
      newMeshPosition.x -= this.collider.__POSITION_OFFSET__.x
      newMeshPosition.y -= this.collider.__POSITION_OFFSET__.y
      newMeshPosition.z -= this.collider.__POSITION_OFFSET__.z

      // Rotation
      const newMeshRotation = new THREE.Euler().setFromQuaternion(
        new THREE.Quaternion(
          this.rigidBody.__RIGIDBODY__.rotation().x,
          this.rigidBody.__RIGIDBODY__.rotation().y,
          this.rigidBody.__RIGIDBODY__.rotation().z,
          this.rigidBody.__RIGIDBODY__.rotation().w,
        ),
      )
      // Remove offset
      newMeshRotation.x -= this.collider.__ROTATION_OFFSET__.x
      newMeshRotation.y -= this.collider.__ROTATION_OFFSET__.y
      newMeshRotation.z -= this.collider.__ROTATION_OFFSET__.z

      // Apply the new transforms to the mesh
      this.__MESH__.position.set(newMeshPosition.x, newMeshPosition.y, newMeshPosition.z)
      this.__MESH__.setRotationFromEuler(newMeshRotation)

      // Update position and rotation properties of the component according to the rigidBody
      this.transform.position = newMeshPosition
      this.transform.rotation = newMeshRotation
      // If a sensor exists, update its position and rotation according to the rigidBody
      if (this.sensor) {
        // Apply offset to the sensor
        newMeshPosition.x += this.sensor.collider.__POSITION_OFFSET__.x
        newMeshPosition.y += this.sensor.collider.__POSITION_OFFSET__.y
        newMeshPosition.z += this.sensor.collider.__POSITION_OFFSET__.z
        this.sensor.__RIGIDBODY__.setTranslation(newMeshPosition, true)
        this.sensor.__RIGIDBODY__.setRotation(new THREE.Quaternion().setFromEuler(newMeshRotation), true)
      }
    }
    // If the collider and mesh exist, update the mesh position and rotation according to the collider
    else if (this.collider && this.__MESH__) {
      // Translation
      const newMeshPosition = this.collider.__COLLIDER__.translation()
      // Remove offset
      newMeshPosition.x -= this.collider.__POSITION_OFFSET__.x
      newMeshPosition.y -= this.collider.__POSITION_OFFSET__.y
      newMeshPosition.z -= this.collider.__POSITION_OFFSET__.z

      // Rotation
      const newMeshRotation = new THREE.Euler().setFromQuaternion(
        new THREE.Quaternion(
          this.collider.__COLLIDER__.rotation().x,
          this.collider.__COLLIDER__.rotation().y,
          this.collider.__COLLIDER__.rotation().z,
          this.collider.__COLLIDER__.rotation().w,
        ),
      )
      // Remove offset
      newMeshRotation.x -= this.collider.__ROTATION_OFFSET__.x
      newMeshRotation.y -= this.collider.__ROTATION_OFFSET__.y
      newMeshRotation.z -= this.collider.__ROTATION_OFFSET__.z

      // Apply the new transforms to the mesh
      this.__MESH__.position.set(newMeshPosition.x, newMeshPosition.y, newMeshPosition.z)
      this.__MESH__.setRotationFromEuler(newMeshRotation)
      // Update position and rotation properties of the component
      this.transform.position = newMeshPosition
      this.transform.rotation = newMeshRotation
    }
    // If the rigidBody and collider doesn't exist, update the mesh position and rotation according to the default values
    else if (this.__MESH__) {
      this.__MESH__.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
      this.__MESH__.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
      // If a sensor exists, update its position and rotation according to the default values
      if (this.sensor) {
        this.sensor.__RIGIDBODY__.setTranslation({ x: this.transform.position.x, y: this.transform.position.y, z: this.transform.position.z }, true)
        this.sensor.__RIGIDBODY__.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)), true)
      }
    }
    // If the mesh still doesn't exist, do nothing
  }

  /**
   * Update the position of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the position update.
   * Set this to true to propagate the position update to the rigidBody, collider and sensor.
   */
  __UPDATE_POSITION__(initiator: boolean = false): void {
    // If a mesh exists, update its position
    if (this.__MESH__)
      this.__MESH__.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
    // If the component is the initiator, propagate the position update to the rigidBody, collider and sensor
    if (initiator) {
      if (this.rigidBody)
        this.rigidBody.__UPDATE_POSITION__()
      else if (this.collider)
        this.collider.__UPDATE_POSITION__()
      if (this.sensor)
        this.sensor.__UPDATE_POSITION__()
    }
  }

  /**
   * Update the rotation of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the rotation update.
   * Set this to true to propagate the rotation update to the rigidBody, collider and sensor.
   */
  __UPDATE_ROTATION__(initiator: boolean = false): void {
    // If a mesh exists, update its rotation
    if (this.__MESH__)
      this.__MESH__.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
    // If the component is the initiator, propagate the rotation update to the rigidBody, collider and sensor
    if (initiator) {
      if (this.rigidBody)
        this.rigidBody.__UPDATE_ROTATION__()
      else if (this.collider)
        this.collider.__UPDATE_ROTATION__()
      if (this.sensor)
        this.sensor.__UPDATE_ROTATION__()
    }
  }

  /**
   * Update the scale of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the scale update.
   * Set this to true to propagate the scale update to the rigidBody, collider and sensor.
   */
  __UPDATE_SCALE__(initiator: boolean = false): void {
    // If a mesh exists
    if (this.__MESH__) {
      // If the mesh is a classic polyhedron
      if (this.__MESH__ instanceof THREE.Mesh && (this.__MESH__.geometry instanceof THREE.BoxGeometry || this.__MESH__.geometry instanceof THREE.SphereGeometry)) {
        this.__MESH__.scale.set(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z)
      }
      // We don't know the type of the mesh, probably a custom mesh
      else {
        // I don't really know why the scale should be devided by 2 for custom meshes, but it works
        this.__MESH__.scale.set(this.transform.scale.x / 2, this.transform.scale.y / 2, this.transform.scale.z / 2)
      }
    }
    // If the component is the initiator, propagate the scale update to the rigidBody, collider and sensor
    if (initiator) {
      if (this.rigidBody)
        this.rigidBody.__UPDATE_SCALE__()
      else if (this.collider)
        this.collider.__UPDATE_SCALE__()
      if (this.sensor)
        this.sensor.__UPDATE_SCALE__()
    }
  }

  onCollisionWith(classOrObject: any, callback: (data: OnCollisionWithData) => void): () => void {
    // Activate collision events if they are not already activated
    if (this.sensor && this.sensor.collider.__COLLIDER__.activeEvents() === RAPIER.ActiveEvents.NONE) {
      // Set the active events
      this.sensor.collider.__COLLIDER__.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS)
    }
    // Call the core onCollisionWith method
    return super.onCollisionWith(classOrObject, callback)
  }
}
