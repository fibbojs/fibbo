import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { FVector3, OnCollisionWithData } from '@fibbojs/core'
import { FComponent as FComponentCore } from '@fibbojs/core'
import type { FController } from '../controllers/FController'
import type { FScene } from './FScene'
import type { FColliderOptions } from './FCollider'
import { FCollider } from './FCollider'
import type { FRigidBodyOptions } from './FRigidBody'
import { FRigidBody } from './FRigidBody'
import { FTransform } from './FTransform'
import { FSensor } from './FSensor'

export interface FComponentOptions {
  position?: FVector3
  rotation?: FVector3
  rotationDegree?: FVector3
  scale?: FVector3
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
   * @param options.rotation The rotation of the component.
   * @param options.rotation.x The rotation in radians on the x-axis.
   * @param options.rotation.y The rotation in radians on the y-axis.
   * @param options.rotation.z The rotation in radians on the z-axis.
   * @param options.rotationDegree The rotation of the component in degrees. If this is provided, the rotation will be converted to radians.
   * @param options.rotationDegree.x The rotation in degrees on the x-axis.
   * @param options.rotationDegree.y The rotation in degrees on the y-axis.
   * @param options.rotationDegree.z The rotation in degrees on the z-axis.
   * @param options.scale The scale of the component.
   * @param options.scale.x The scale on the x-axis.
   * @param options.scale.y The scale on the y-axis.
   * @param options.scale.z The scale on the z-axis.
   */
  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene)
    this.scene = scene

    // Define default values
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 1, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || (!options.rotation && !options.rotationDegree) || !options.scale)
      throw new Error('FibboError: FComponent requires transform properties.')

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
  }

  frame(_delta: number): void {
    super.frame(_delta)
  }

  /**
   * Update the position of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the position update.
   * Set this to true to propagate the position update to the rigidBody, collider and sensor.
   */
  __UPDATE_POSITION__(initiator: boolean = false): void {
    // If the component is the initiator
    if (initiator) {
      // Move the component
      this.__SET_POSITION__(this.transform.position)
      // Propagate the position update to the rigidBody, collider and sensor
      if (this.rigidBody)
        this.rigidBody.__UPDATE_POSITION__()
      else if (this.collider)
        this.collider.__UPDATE_POSITION__()
      if (this.sensor)
        this.sensor.__UPDATE_POSITION__()
    }
    else {
      // The event was propagated to the component
      // If a rigidBody exists, the propagation comes from the rigidBody
      if (this.rigidBody) {
        // Move the component
        this.__SET_POSITION__({
          x: this.rigidBody.transform.x - this.rigidBody.offset.x,
          y: this.rigidBody.transform.y - this.rigidBody.offset.y,
          z: this.rigidBody.transform.z - this.rigidBody.offset.z,
        })
      }
      // If a collider exists, the propagation comes from the collider
      else if (this.collider) {
        // Move the component
        this.__SET_POSITION__({
          x: this.collider.transform.x - this.collider.offset.x,
          y: this.collider.transform.y - this.collider.offset.y,
          z: this.collider.transform.z - this.collider.offset.z,
        })
      }
    }
  }

  /**
   * Update the rotation of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the rotation update.
   * Set this to true to propagate the rotation update to the rigidBody, collider and sensor.
   */
  __UPDATE_ROTATION__(initiator: boolean = false): void {
    // If the component is the initiator
    if (initiator) {
      // Rotate the component
      this.__SET_ROTATION__(this.transform.rotation)
      // Propagate the rotation update to the rigidBody, collider and sensor
      if (this.rigidBody)
        this.rigidBody.__UPDATE_ROTATION__()
      else if (this.collider)
        this.collider.__UPDATE_ROTATION__()
      if (this.sensor)
        this.sensor.__UPDATE_ROTATION__()
    }
    else {
      // The event was propagated to the component
      // If a rigidBody exists, the propagation comes from the rigidBody
      if (this.rigidBody) {
        // Rotate the component
        this.__SET_ROTATION__({
          x: this.rigidBody.transform.rotationX - this.rigidBody.offset.rotationX,
          y: this.rigidBody.transform.rotationY - this.rigidBody.offset.rotationY,
          z: this.rigidBody.transform.rotationZ - this.rigidBody.offset.rotationZ,
        })
      }
      // If a collider exists, the propagation comes from the collider
      else if (this.collider) {
        // Rotate the component
        this.__SET_ROTATION__({
          x: this.collider.transform.rotationX - this.collider.offset.rotationX,
          y: this.collider.transform.rotationY - this.collider.offset.rotationY,
          z: this.collider.transform.rotationZ - this.collider.offset.rotationZ,
        })
      }
    }
  }

  /**
   * Update the scale of the component according to the transform.
   * This method should be called after updating the transform properties.
   * @param initiator By default (false), the component won't be considered as the initiator of the scale update.
   * Set this to true to propagate the scale update to the rigidBody, collider and sensor.
   */
  __UPDATE_SCALE__(initiator: boolean = false): void {
    // If the component is the initiator
    if (initiator) {
      // Scale the component
      this.__SET_SCALE__(this.transform.scale)
      // Propagate the scale update to the rigidBody, collider and sensor
      if (this.rigidBody)
        this.rigidBody.__UPDATE_SCALE__()
      else if (this.collider)
        this.collider.__UPDATE_SCALE__()
      if (this.sensor)
        this.sensor.__UPDATE_SCALE__()
    }
    else {
      // The event was propagated to the component
      // If a rigidBody exists, the propagation comes from the rigidBody
      if (this.rigidBody) {
        // Scale the component
        this.__SET_SCALE__({
          x: this.rigidBody.transform.scale.x - this.rigidBody.offset.scaleX,
          y: this.rigidBody.transform.scale.y - this.rigidBody.offset.scaleY,
          z: this.rigidBody.transform.scale.z - this.rigidBody.offset.scaleZ,
        })
      }
      // If a collider exists, the propagation comes from the collider
      else if (this.collider) {
        // Scale the component
        this.__SET_SCALE__({
          x: this.collider.transform.scale.x - this.collider.offset.scaleX,
          y: this.collider.transform.scale.y - this.collider.offset.scaleY,
          z: this.collider.transform.scale.z - this.collider.offset.scaleZ,
        })
      }
    }
  }

  __SET_POSITION__(position: FVector3): void {
    // Move the mesh
    if (this.__MESH__)
      this.__MESH__.position.set(position.x, position.y, position.z)
    // Update the transform
    this.transform.__POSITION__.x = position.x
    this.transform.__POSITION__.y = position.y
    this.transform.__POSITION__.z = position.z
  }

  __SET_ROTATION__(rotation: FVector3): void {
    // Rotate the mesh
    if (this.__MESH__)
      this.__MESH__.rotation.set(rotation.x, rotation.y, rotation.z)
    // Update the transform
    this.transform.__ROTATION__.x = rotation.x
    this.transform.__ROTATION__.y = rotation.y
    this.transform.__ROTATION__.z = rotation.z
  }

  __SET_SCALE__(scale: FVector3): void {
    // Scale the mesh
    if (this.__MESH__) {
      // If the mesh is a classic polyhedron
      if (this.__MESH__ instanceof THREE.Mesh && (this.__MESH__.geometry instanceof THREE.BoxGeometry || this.__MESH__.geometry instanceof THREE.SphereGeometry)) {
        this.__MESH__.scale.set(scale.x, scale.y, scale.z)
      }
      // We don't know the type of the mesh, probably a custom mesh
      else {
        // I don't really know why the scale should be devided by 2 for custom meshes, but it works
        this.__MESH__.scale.set(scale.x / 2, scale.y / 2, scale.z / 2)
      }
    }
    // Update the transform
    this.transform.__SCALE__ = scale
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

  initCollider(options?: FColliderOptions) {
    this.collider = new FCollider(this.scene, {
      mesh: this.__MESH__,
      ...options,
    })
    this.collider.component = this
    this.scene.addHandle(this.collider.__COLLIDER__.handle, this)
  }

  initRigidBody(options?: FRigidBodyOptions) {
    this.rigidBody = new FRigidBody(this.scene, {
      mesh: this.__MESH__,
      ...options,
    })
    this.rigidBody.component = this
    this.scene.addHandle(this.rigidBody.collider.__COLLIDER__.handle, this)
  }

  initSensor(options?: FRigidBodyOptions) {
    this.sensor = new FSensor(this.scene, {
      mesh: this.__MESH__,
      ...options,
    })
    this.sensor.component = this
    // If a rigidBody or collider is already defined, remove its handle from being used to detect collisions
    if (this.rigidBody)
      this.scene.removeHandle(this.rigidBody.__RIGIDBODY__.handle)
    else if (this.collider)
      this.scene.removeHandle(this.collider.__COLLIDER__.handle)
    // Add the sensor's handle to the scene's handle map
    this.scene.addHandle(this.sensor.collider.__COLLIDER__.handle, this)
  }
}
