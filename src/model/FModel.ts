import * as THREE from 'three'
import type { Collider, RigidBody } from '@dimforge/rapier3d'
import * as RAPIER from '@dimforge/rapier3d'
import type { FScene } from '../core/FScene'
import type { FComponent } from '../core/FComponent'
import { F3dShapes } from '../types/F3dShapes'

/**
 * @description The base class for all models in FibboJS.
 * @category Model
 */
export abstract class FModel implements FComponent {
  // Scene
  scene: FScene
  position: THREE.Vector3
  scale: THREE.Vector3
  rotation: THREE.Vector3
  // Object3D
  object3D?: THREE.Object3D
  // Physics
  rigidBody?: RigidBody
  collider?: Collider

  /**
   * @param scene The FScene where the model will be added.
   */
  constructor(scene: FScene) {
    this.scene = scene

    // Define default values for position, scale and rotation
    this.position = new THREE.Vector3(0, 1, 0)
    this.scale = new THREE.Vector3(1, 1, 1)
    this.rotation = new THREE.Vector3(0, 0, 0)
  }

  onFrame(_delta: number): void {
    // If the rigid body and object3D exist, update the object3D position and rotation according to the rigid body
    if (this.rigidBody && this.object3D) {
      const newRigidBodyPosition = this.rigidBody.translation()
      this.object3D.position.set(newRigidBodyPosition.x, newRigidBodyPosition.y, newRigidBodyPosition.z)
      const newRigidBodyRotation = this.rigidBody.rotation()
      this.object3D.setRotationFromQuaternion(new THREE.Quaternion(newRigidBodyRotation.x, newRigidBodyRotation.y, newRigidBodyRotation.z, newRigidBodyRotation.w))
    }
  }

  /**
   * @description Set the position of the model.
   */
  setPosition(x: number, y: number, z: number): void {
    this.position.set(x, y, z)
    if (this.object3D)
      this.object3D.position.set(x, y, z)
    if (this.rigidBody)
      this.rigidBody.setTranslation({ x, y, z }, true)
  }

  /**
   * @description Set the scale of the model.
   */
  setScale(x: number, y: number, z: number): void {
    this.scale.set(x, y, z)
    if (this.object3D)
      this.object3D.scale.set(x, y, z)
  }

  /**
   * @description Set the rotation of the model.
   */
  setRotation(x: number, y: number, z: number): void {
    this.rotation.set(x, y, z)
    if (this.object3D)
      this.object3D.rotation.set(x, y, z)
  }

  /**
   * @description Set the rotation of the model from degrees.
   */
  setRotationDegree(
    x: number,
    y: number,
    z: number,
  ): void {
  // Convert degrees to radians
    const radRotation = {
      x: THREE.MathUtils.degToRad(x),
      y: THREE.MathUtils.degToRad(y),
      z: THREE.MathUtils.degToRad(z),
    }

    this.setRotation(radRotation.x, radRotation.y, radRotation.z)
  }

  /**
   * @description Init a rigid body for the model.
   */
  initRigidBody(
    position?: THREE.Vector3,
    scale?: THREE.Vector3,
    rotation?: THREE.Vector3,
    shape?: F3dShapes,
  ): void {
    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a rigid body')

    let rigidBodyPosition: THREE.Vector3 | undefined = position
    let rigidBodyScale: THREE.Vector3 | undefined = scale
    let rigidBodyRotation: THREE.Vector3 | undefined = rotation

    // If position is not defined
    if (!rigidBodyPosition) {
      // Use default position of the FModel
      rigidBodyPosition = new THREE.Vector3(this.position.x, this.position.y, this.position.z)
    }

    // If scale is not defined
    if (!rigidBodyScale) {
      // Use default scale of the FModel
      rigidBodyScale = new THREE.Vector3(this.scale.x, this.scale.y, this.scale.z)
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
      rigidBodyRotation = new THREE.Vector3(this.rotation.x, this.rotation.y, this.rotation.z)
    }

    // If a shape wasn't defined
    if (!shape) {
      // Default to cube
      shape = F3dShapes.CUBE
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
}
