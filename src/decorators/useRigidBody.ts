import * as THREE from 'three'
import * as RAPIER from '@dimforge/rapier3d'
import type { FModel } from '../model/FModel'
import type { FVector3 } from '../types/FVector3'
import { F3dShapes } from '../types/F3dShapes'
import { FSphere } from '../model/FSphere'

/**
 * @description
 * This decorator is used to add a rigid body to a FModel (like FCube, FGLTF, etc).
 *
 * If no position, scale or rotation is provided, the default values of the FModel will be used.
 *
 * If no shape is provided, the decorator will try to detect a supported polygonal shape, otherwise it will default to a cube.
 * @param position Position of the rigid body.
 * @param scale Scale of the rigid body.
 * @param rotation Rotation of the rigid body.
 * @param shape Shape of the rigid body.
 * @returns {Function} The class with the rigid body added.
 * @example
 * ```ts
 * import { FCube, useRigidBody } from '@fibbojs/fibbo'
 * import type { FScene } from '../FScene'
 *
 * @useRigidBody()
 * export class MyCube extends FCube {
 *  constructor(scene: FScene) {
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
  position?: FVector3,
  scale?: FVector3,
  rotation?: FVector3,
  shape?: F3dShapes,
): Function {
  return function <T extends { new(...args: any[]): FModel }>(constructor: T) {
    // Store original onFrame method
    const originalOnFrame = constructor.prototype.onFrame

    let rigidBodyPosition: FVector3 | undefined = position
    let rigidBodyScale: FVector3 | undefined = scale
    let rigidBodyRotation: FVector3 | undefined = rotation

    // Return a new class with the rigid body added
    const newClass = class extends constructor {
      constructor(...args: any[]) {
        super(...args)

        // If position is not defined
        if (!rigidBodyPosition) {
          // Use default position of the FModel
          rigidBodyPosition = { x: this.position.x, y: this.position.y, z: this.position.z }
        }

        // If scale is not defined
        if (!rigidBodyScale) {
          // Use default scale of the FModel
          rigidBodyScale = { x: this.scale.x, y: this.scale.y, z: this.scale.z }
        }

        // Devide scale by 2 (RAPIER uses half-extents)
        if (rigidBodyScale) {
          rigidBodyScale.x /= 2
          rigidBodyScale.y /= 2
          rigidBodyScale.z /= 2
        }

        // If rotation is not defined
        if (!rigidBodyRotation) {
          // Use default rotation of the FModel
          rigidBodyRotation = { x: this.rotation.x, y: this.rotation.y, z: this.rotation.z }
        }

        // If a shape wasn't defined
        if (!shape) {
          // Detect if the model is a sphere, and set the shape to sphere
          if (this instanceof FSphere) {
            shape = F3dShapes.SPHERE
            // Add 0.005 to scale so the collider looks better when debugging a ball
            rigidBodyScale.x += 0.005
          }
          else
          // Default to cube
          { shape = F3dShapes.CUBE }
        }

        // Create a dynamic rigid-body.
        const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
          .setTranslation(rigidBodyPosition.x, rigidBodyPosition.y, rigidBodyPosition.z)
          .setRotation(
            // Create quaternion from Euler angles
            new THREE.Quaternion().setFromEuler(new THREE.Euler(rigidBodyRotation.x, rigidBodyRotation.y, rigidBodyRotation.z)),
          )

        this.rigidBody = this.scene.world.createRigidBody(rigidBodyDesc)

        // Create a cuboid collider attached to the dynamic rigidBody.
        const colliderDesc = shape === F3dShapes.CUBE
          ? RAPIER.ColliderDesc.cuboid(rigidBodyScale.x, rigidBodyScale.y, rigidBodyScale.z)
          : RAPIER.ColliderDesc.ball(rigidBodyScale.x)
        this.collider = this.scene.world.createCollider(colliderDesc, this.rigidBody)
      }

      onFrame(_delta: number) {
        if (this.rigidBody && this.object3D) {
          const newRigidBodyPosition = this.rigidBody.translation()
          this.object3D.position.set(newRigidBodyPosition.x, newRigidBodyPosition.y, newRigidBodyPosition.z)
          const newRigidBodyRotation = this.rigidBody.rotation()
          this.object3D.setRotationFromQuaternion(new THREE.Quaternion(newRigidBodyRotation.x, newRigidBodyRotation.y, newRigidBodyRotation.z, newRigidBodyRotation.w))
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
