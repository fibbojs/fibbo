import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { FScene3d } from './FScene3d'
import { F3dShapes } from './types/F3dShapes'
import type { FComponent3d } from './FComponent3d'

export interface FCollider3dOptions {
  position?: { x: number, y: number, z: number }
  scale?: { x: number, y: number, z: number }
  rotation?: { x: number, y: number, z: number }
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
   * Offset for the collider.
   * This is used to adjust the collider position relative to the mesh.
   */
  colliderOffset: THREE.Vector3

  /**
   * @description Creates a collider for a given component.
   * @param component The component which the collider will be attached to.
   * @param options The options for the collider.
   * @param options.position The position of the collider. If not defined, it will use the default position of the FComponent3d.
   * @param options.scale The scale of the collider. If not defined, it will use the default scale of the FComponent3d.
   * @param options.rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent3d.
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
      position: new THREE.Vector3(0, 0, 0),
      scale: new THREE.Vector3(component.scale.x, component.scale.y, component.scale.z),
      rotation: new THREE.Vector3(component.rotation.x, component.rotation.y, component.rotation.z),
      shape: F3dShapes.CUBE,
      rigidBody: undefined,
      sensor: false,
    }
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || !options.scale || !options.rotation || !options.shape || options.sensor === undefined)
      throw new Error('initCollider requires position, scale, rotation and shape options')

    // Check if the world exists
    if (!component.scene.world)
      throw new Error('FScene must have a world to create a rigid body')

    // Store the collider offset
    this.colliderOffset = new THREE.Vector3(options.position.x, options.position.y, options.position.z)

    // Devide the scale by 2 for the collider
    options.scale = new THREE.Vector3(options.scale.x / 2, options.scale.y / 2, options.scale.z / 2)

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
        if (component.mesh instanceof THREE.Mesh) {
          colliderDesc = RAPIER.ColliderDesc.trimesh(
            component.mesh?.geometry.attributes.position.array as Float32Array,
            component.mesh?.geometry.index?.array as Uint32Array,
          )
        }
        else {
          throw new TypeError('Mesh collider can only be created from a THREE.Mesh')
        }
        break
      default:
        throw new Error(`Shape not supported : ${options.shape}`)
    }
    // If no rigidbody given, the collider is free : set translation and rotation for the collider
    if (options.rigidBody === undefined) {
      // Interprete the given position as relative to the component's position
      const finalPosition = new THREE.Vector3(
        component.position.x + options.position.x,
        component.position.y + options.position.y,
        component.position.z + options.position.z,
      )
      finalPosition.add(this.colliderOffset)

      colliderDesc.setTranslation(finalPosition.x, finalPosition.y, finalPosition.z)
      colliderDesc.setRotation(
        // Create quaternion from Euler angles
        new THREE.Quaternion().setFromEuler(new THREE.Euler(options.rotation.x, options.rotation.y, options.rotation.z)),
      )
    }
    // Set the sensor flag
    colliderDesc.setSensor(options.sensor)

    // Create the collider
    this.collider = component.scene.world.createCollider(colliderDesc, options.rigidBody)
  }
}
