import * as RAPIER from '@dimforge/rapier2d'
import { FShapes } from '../types/FShapes'
import type { FComponent } from './FComponent'

export interface FColliderOptions {
  position?: { x: number, y: number }
  scale?: { x: number, y: number }
  rotation?: number
  rotationDegree?: number
  shape?: FShapes
  rigidBody?: RAPIER.RigidBody
  sensor?: boolean
}

/**
 * A 3d collider.
 * @category Core
 */
export class FCollider {
  /**
   * RAPIER Collider
   */
  __COLLIDER__: RAPIER.Collider
  /**
   * Position Offset for the collider.
   * This is used to adjust the collider position relative to the mesh.
   */
  __COLLIDER_POSITION_OFFSET__: { x: number, y: number }
  /**
   * Rotation Offset for the collider.
   * This is used to adjust the collider position relative to the mesh.
   */
  __COLLIDER_ROTATION_OFFSET__: number
  /**
   * Scale Offset for the collider.
   * This is used to adjust the collider scale relative to the mesh.
   */
  __COLLIDER_SCALE_OFFSET__: { x: number, y: number }
  /**
   * The component the collider is attached to.
   */
  component: FComponent

  /**
   * Creates a collider for a given component.
   * @param component The component which the collider will be attached to.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent.
   * @param options.rotationDegree The rotation of the collider in degrees. If not defined, it will default to 0.
   * @param options.shape The shape of the collider. If not defined, it will default to FShapes.CUBE.
   * @param options.rigidBody The rigidBody to attach the collider to. (optional)
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * const collider = new FCollider(component, {
   *  position: { x: 0, y: 1 },
   *  scale: { x: 1, y: 1 },
   *  rotation: 0,
   *  shape: FShapes.CUBE
   * })
   * ```
   */
  constructor(component: FComponent, options?: FColliderOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0 },
      scale: { x: 1, y: 1 },
      rotation: 0,
      rotationDegree: undefined,
      shape: FShapes.SQUARE,
      rigidBody: undefined,
      sensor: false,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || options.rotation === undefined || !options.shape || options.sensor === undefined)
      throw new Error('FibboError: initCollider requires position, scale, rotation and shape options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FibboError: FScene must have a world to create a rigidBody')

    // If rotation degree is given, convert it to radians
    if (options.rotationDegree) {
      // Convert the degree to radians
      options.rotation = (options.rotationDegree * Math.PI) / 180
    }

    // Store the collider offset
    this.__COLLIDER_POSITION_OFFSET__ = { x: options.position.x, y: options.position.y }
    this.__COLLIDER_ROTATION_OFFSET__ = options.rotation
    this.__COLLIDER_SCALE_OFFSET__ = { x: options.scale.x, y: options.scale.y }
    // Store the component
    this.component = component

    // Devide the scale by 2 for the collider (RAPIER uses half-extents)
    // Also interpete the scale as relative to the component's scale
    options.scale = {
      x: component.transform.scale.x / 2 * options.scale.x,
      y: component.transform.scale.y / 2 * options.scale.y,
    }

    // Create a collider description according to the shape given
    let colliderDesc
    switch (options.shape) {
      case FShapes.SQUARE:
        colliderDesc = RAPIER.ColliderDesc.cuboid(options.scale.x, options.scale.y)
        break
      case FShapes.CIRCLE:
        colliderDesc = RAPIER.ColliderDesc.ball(options.scale.x)
        break
      default:
        throw new Error(`FibboError: shape not supported : ${options.shape}`)
    }
    // Verify the collider description was created
    if (!colliderDesc)
      throw new Error('FibboError: Collider description could not be created')

    // If no rigidbody given, the collider is free : set translation and rotation for the collider
    if (options.rigidBody === undefined) {
      // Interprete the given position as relative to the component's position
      const newPosition = component.transform.position
      newPosition.x += options.position.x
      newPosition.y += options.position.y
      colliderDesc.setTranslation(newPosition.x, newPosition.y)

      // Interprete the given rotation as relative to the component's rotation
      const finalRotation = component.transform.rotation + options.rotation
      colliderDesc.setRotation(finalRotation)
    }
    // Set the sensor flag
    if (options.sensor) {
      colliderDesc.setSensor(true)
      colliderDesc.setActiveCollisionTypes(RAPIER.ActiveCollisionTypes.ALL)
    }

    // Create the collider
    this.__COLLIDER__ = component.scene.world.createCollider(colliderDesc, options.rigidBody)
  }

  /**
   * Set the position of the collider.
   * @param position The new position of the collider.
   * @param position.x The new x position of the collider.
   * @param position.y The new y position of the collider.
   */
  setPosition(position: { x: number, y: number }) {
    this.__COLLIDER__.setTranslation(position)
  }

  /**
   * Set the rotation of the collider.
   * @param rotation The new rotation of the collider.
   */
  setRotation(rotation: number) {
    this.__COLLIDER__.setRotation(rotation)
  }

  /**
   * Set the rotation of the collider in degrees.
   * @param rotation The new rotation of the collider in degrees.
   */
  setRotationDegree(rotation: number) {
    this.__COLLIDER__.setRotation((rotation * Math.PI) / 180)
  }

  /**
   * Set the scale of the collider.
   * @param scale The new scale of the collider.
   * @param scale.x The new x scale of the collider.
   * @param scale.y The new y scale of the collider.
   */
  setScale(scale: { x: number, y: number }) {
    // If the collider is a cuboid, update its half extents
    if (this.__COLLIDER__.shape.type === RAPIER.ShapeType.Cuboid) {
      this.__COLLIDER__.setHalfExtents(new RAPIER.Vector2(scale.x / 2, scale.y / 2))
    }
    // If the collider is a ball, update its radius
    else if (this.__COLLIDER__.shape.type === RAPIER.ShapeType.Ball) {
      this.__COLLIDER__.setRadius(
        // Get the maximum value of x and y
        Math.max(scale.x, scale.y) / 2,
      )
    }
  }

  /**
   * Update the position of the collider according to the component's position.
   * This takes into account the position offset.
   */
  updatePosition() {
    const newPosition = this.component.transform.position
    newPosition.x += this.__COLLIDER_POSITION_OFFSET__.x
    newPosition.y += this.__COLLIDER_POSITION_OFFSET__.y
    this.setPosition(newPosition)
  }

  /**
   * Update the rotation of the collider according to the component's rotation.
   * This takes into account the rotation offset.
   */
  updateRotation() {
    this.setRotation(this.component.transform.rotation + this.__COLLIDER_ROTATION_OFFSET__)
  }

  /**
   * Update the scale of the collider according to the component's scale.
   * This takes into account the scale offset.
   */
  updateScale() {
    // If the collider is a cuboid, update its half extents
    if (this.__COLLIDER__.shape.type === RAPIER.ShapeType.Cuboid) {
      this.__COLLIDER__.setHalfExtents(new RAPIER.Vector2(this.component.scale.x / 2 * this.__COLLIDER_SCALE_OFFSET__.x, this.component.scale.y / 2 * this.__COLLIDER_SCALE_OFFSET__.y))
    }
    // If the collider is a ball, update its radius
    else if (this.__COLLIDER__.shape.type === RAPIER.ShapeType.Ball) {
      this.__COLLIDER__.setRadius(
        // Get the maximum value of x and y
        Math.max(this.component.scale.x, this.component.scale.y) / 2 * this.__COLLIDER_SCALE_OFFSET__.x,
      )
    }
  }
}
