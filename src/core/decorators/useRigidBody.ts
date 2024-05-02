import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { FibboModel } from '../model/FibboModel'
import type { FibboVector3 } from '../../types/FibboVector3'
import { Fibbo3dShapes } from '../../types/Fibbo3dShapes'
import { FibboSphere } from '../model/FibboSphere'

/**
 * @description
 * This decorator is used to add a rigid body to a FibboModel (like FibboCube, FibboGLTF, etc).
 *
 * If no position, scale or rotation is provided, the default values of the FibboModel will be used.
 *
 * If no shape is provided, the decorator will try to detect a supported polygonal shape, otherwise it will default to a cube.
 * @param position Position of the rigid body.
 * @param scale Scale of the rigid body.
 * @param rotation Rotation of the rigid body.
 * @param shape Shape of the rigid body.
 * @returns {Function} The class with the rigid body added.
 * @example
 * ```ts
 * import { FibboCube, useRigidBody } from '@fibbojs/fibbo'
 * import type { FibboScene } from '../FibboScene'
 *
 * @useRigidBody()
 * export class MyCube extends FibboCube {
 *  constructor(scene: FibboScene) {
 *   super(scene)
 *  }
 *
 *  onFrame(delta: number) {
 *   super.onFrame(delta)
 *  }
 * }
 * ```
 */
export function useRigidBody(
  position?: FibboVector3,
  scale?: FibboVector3,
  rotation?: FibboVector3,
  shape?: Fibbo3dShapes,
): Function {
  return function <T extends { new(...args: any[]): FibboModel }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        // If position is not defined
        if (!position) {
          // Use default position of the FibboModel
          position = { x: this.position.x, y: this.position.y, z: this.position.z }
        }

        // If scale is not defined
        if (!scale) {
          // Use default scale of the FibboModel
          scale = { x: this.scale.x, y: this.scale.y, z: this.scale.z }
        }

        // Devide scale by 2 (RAPIER uses half-extents for cuboids)
        if (scale) {
          scale.x /= 2
          scale.y /= 2
          scale.z /= 2
        }

        // If rotation is not defined
        if (!rotation) {
          // Use default rotation of the FibboModel
          rotation = { x: this.rotation.x, y: this.rotation.y, z: this.rotation.z }
        }

        // If a shape wasn't defined
        if (!shape) {
          // Detect if the model is a sphere, and set the shape to sphere
          if (this instanceof FibboSphere)
            shape = Fibbo3dShapes.SPHERE
          else
            // Default to cube
            shape = Fibbo3dShapes.CUBE
        }

        // Create a dynamic rigid-body.
        const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
          .setTranslation(position.x, position.y, position.z)
          .setRotation(
            // Create quaternion from Euler angles
            new THREE.Quaternion().setFromEuler(new THREE.Euler(rotation.x, rotation.y, rotation.z)),
          )

        this.rigidBody = this.scene.world.createRigidBody(rigidBodyDesc)

        // Create a cuboid collider attached to the dynamic rigidBody.
        const colliderDesc = shape === Fibbo3dShapes.CUBE
          ? RAPIER.ColliderDesc.cuboid(scale.x, scale.y, scale.z)
          : RAPIER.ColliderDesc.ball(scale.x)
        this.collider = this.scene.world.createCollider(colliderDesc, this.rigidBody)
      }

      onFrame(_delta: number) {
        if (this.rigidBody && this.object3D) {
          const position = this.rigidBody.translation()
          this.object3D.position.set(position.x, position.y, position.z)
          const quaternion = this.rigidBody.rotation()
          this.object3D.setRotationFromQuaternion(new THREE.Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w))
        }

        // Call the original onFrame method
        originalOnFrame.call(this, _delta)
      }
    }

    // Define constructor name
    Object.defineProperty(newClass, 'name', { value: constructor.name })

    return newClass
  }
}
