import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from './FScene3d'
import { F3dShapes } from './types/F3dShapes'
import type { FComponent3d } from './FComponent3d'

export interface FCollider3dOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
  rotationDegree?: { x: number, y: number, z: number }
  shape?: F3dShapes
  rigidBody?: RAPIER.RigidBody
  sensor?: boolean
}

/**
 * @description A 3d collider.
 * @category Core
 */
export class FCollider3d {
  /**
   * RAPIER Collider
   */
  collider: RAPIER.Collider
  /**
   * Position Offset for the collider.
   * This is used to adjust the collider position relative to the mesh.
   */
  colliderPositionOffset: THREE.Vector3
  /**
   * Rotation Offset for the collider.
   * This is used to adjust the collider position relative to the mesh.
   */
  colliderRotationOffset: THREE.Vector3

  /**
   * @description Creates a collider for a given component.
   * @param component The component which the collider will be attached to.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent3d.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent3d.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent3d.
   * @param options.rotationDegree The rotation of the collider in degrees. If not defined, it will default to 0.
   * @param options.shape The shape of the collider. If not defined, it will default to F3dShapes.CUBE.
   * @param options.rigidBody The rigid body to attach the collider to. (optional)
   * @param options.sensor If true, the collider will be a sensor.
   * @example
   * ```ts
   * component.initCollider(scene, component, {
   *  position: new THREE.Vector3(0, 1, 0),
   *  scale: new THREE.Vector3(1, 1, 1),
   *  rotation: new THREE.Vector3(0, 0, 0),
   *  shape: F3dShapes.CUBE
   * })
   * ```
   */
  constructor(component: FComponent3d, options?: FCollider3dOptions) {
    // Apply default options
    const DEFAULT_OPTIONS = {
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: { x: 0, y: 0, z: 0 },
      rotationDegree: undefined,
      shape: F3dShapes.CUBE,
      rigidBody: undefined,
      sensor: false,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape || options.sensor === undefined)
      throw new Error('FibboError: initCollider requires position, scale, rotation and shape options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FibboError: FScene must have a world to create a rigid body')

    // If rotation degree is given, convert it to radians
    if (options.rotationDegree) {
      options.rotation.x = THREE.MathUtils.degToRad(options.rotationDegree.x)
      options.rotation.y = THREE.MathUtils.degToRad(options.rotationDegree.y)
      options.rotation.z = THREE.MathUtils.degToRad(options.rotationDegree.z)
    }

    // Store the collider offset
    this.colliderPositionOffset = new THREE.Vector3(options.position.x, options.position.y, options.position.z)
    this.colliderRotationOffset = new THREE.Vector3(options.rotation.x, options.rotation.y, options.rotation.z)

    // Devide the scale by 2 for the collider (RAPIER uses half-extents)
    // Also interpete the scale as relative to the component's scale
    options.scale = {
      x: component.scale.x * (options.scale.x / 2),
      y: component.scale.y * (options.scale.y / 2),
      z: component.scale.z * (options.scale.z / 2),
    }

    // Create a collider description according to the shape given
    let colliderDesc
    switch (options.shape) {
      case F3dShapes.CUBE:
        colliderDesc = RAPIER.ColliderDesc.cuboid(options.scale.x, options.scale.y, options.scale.z)
        break
      case F3dShapes.SPHERE:
        colliderDesc = RAPIER.ColliderDesc.ball(options.scale.x)
        break
      case F3dShapes.CAPSULE:
        colliderDesc = RAPIER.ColliderDesc.capsule(options.scale.x, options.scale.y)
        break
      case F3dShapes.MESH:
      // If component.mesh isn't defined, throw an error
      {
        if (!component.mesh)
          throw new Error('FibboError: Mesh collider can only be created from a THREE.Mesh')
        // Flag to check if a THREE.Mesh was found
        let found = false
        // Traverse the mesh tree until we find a THREE.Mesh
        component.mesh.traverse((child) => {
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
        component.position.x + options.position.x,
        component.position.y + options.position.y,
        component.position.z + options.position.z,
      )
      finalPosition.add(this.colliderPositionOffset)
      colliderDesc.setTranslation(finalPosition.x, finalPosition.y, finalPosition.z)

      // Interprete the given rotation as relative to the component's rotation
      const finalRotation = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          component.rotation.x + options.rotation.x / 2,
          component.rotation.y + options.rotation.y / 2,
          component.rotation.z + options.rotation.z / 2,
        ),
      )
      colliderDesc.setRotation(finalRotation)
    }
    // Set the sensor flag
    colliderDesc.setSensor(options.sensor)

    // Create the collider
    this.collider = component.scene.world.createCollider(colliderDesc, options.rigidBody)
  }
}
