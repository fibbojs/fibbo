import * as THREE from 'three'
import type { Collider, RigidBody } from '@dimforge/rapier3d'
import * as RAPIER from '@dimforge/rapier3d'
import type { FComponent } from '@fibbojs/core'
import type { FScene3d } from './FScene3d'
import { F3dShapes } from './types/F3dShapes'

/**
 * @description The base class for all 3D objects in FibboJS.
 * @category Core
 */
export abstract class FComponent3d implements FComponent {
  // Scene
  scene: FScene3d
  position: THREE.Vector3
  scale: THREE.Vector3
  rotation: THREE.Vector3
  // Mesh
  mesh?: THREE.Mesh
  // Physics
  rigidBody?: RigidBody
  collider?: Collider

  /**
   * @param scene The 3D scene where the model will be added.
   */
  constructor(scene: FScene3d) {
    this.scene = scene

    // Define default values for position, scale and rotation
    this.position = new THREE.Vector3(0, 1, 0)
    this.scale = new THREE.Vector3(1, 1, 1)
    this.rotation = new THREE.Vector3(0, 0, 0)
  }

  onFrame(_delta: number): void {
    // If the rigid body and mesh exist, update the mesh position and rotation according to the rigid body
    if (this.rigidBody && this.mesh) {
      const newRigidBodyPosition = this.rigidBody.translation()
      const newRigidBodyRotation = this.rigidBody.rotation()
      this.mesh.position.set(newRigidBodyPosition.x, newRigidBodyPosition.y, newRigidBodyPosition.z)
      this.mesh.setRotationFromQuaternion(new THREE.Quaternion(newRigidBodyRotation.x, newRigidBodyRotation.y, newRigidBodyRotation.z, newRigidBodyRotation.w))
    }
    // If the collider and mesh exist, update the mesh position and rotation according to the collider
    else if (this.collider && this.mesh) {
      const newColliderPosition = this.collider.translation()
      const newColliderRotation = this.collider.rotation()
      this.mesh.position.set(newColliderPosition.x, newColliderPosition.y, newColliderPosition.z)
      this.mesh.setRotationFromQuaternion(new THREE.Quaternion(newColliderRotation.x, newColliderRotation.y, newColliderRotation.z, newColliderRotation.w))
    }
    // If the rigid body and collider doesn't exist, update the mesh position and rotation according to the default values
    else {
      this.mesh?.position.set(this.position.x, this.position.y, this.position.z)
      this.mesh?.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z)
    }
  }

  /**
   * @description Set the position of the model.
   */
  setPosition(x: number, y: number, z: number): void {
    this.position.set(x, y, z)
    if (this.mesh)
      this.mesh.position.set(x, y, z)
    if (this.rigidBody)
      this.rigidBody.setTranslation({ x, y, z }, true)
    if (this.collider)
      this.collider.setTranslation({ x, y, z })
  }

  /**
   * @description Set the scale of the model.
   */
  setScale(x: number, y: number, z: number): void {
    this.scale.set(x, y, z)
    if (this.mesh)
      this.mesh.scale.set(x, y, z)
  }

  /**
   * @description Set the rotation of the model.
   */
  setRotation(x: number, y: number, z: number): void {
    this.rotation.set(x, y, z)
    if (this.mesh)
      this.mesh.rotation.set(x, y, z)
    if (this.rigidBody)
      this.rigidBody.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z)), true)
    if (this.collider)
      this.collider.setRotation(new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z)))
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
   * @description Init a rigid body for the component.
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
      // Use default position of the FComponent3d
      rigidBodyPosition = new THREE.Vector3(this.position.x, this.position.y, this.position.z)
    }

    // If scale is not defined
    if (!rigidBodyScale) {
      // Use default scale of the FComponent3d
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
      // Use default rotation of the FComponent3d
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

  /**
   * @description Init a collider for the component.
   */
  initCollider(
    position?: THREE.Vector3,
    scale?: THREE.Vector3,
    rotation?: THREE.Vector3,
    shape?: F3dShapes,
  ): void {
    // Check if the world exists
    if (!this.scene.world)
      throw new Error('FScene must have a world to create a rigid body')

    let colliderPosition: THREE.Vector3 | undefined = position
    let colliderScale: THREE.Vector3 | undefined = scale
    let colliderRotation: THREE.Vector3 | undefined = rotation

    // If position is not defined
    if (!colliderPosition) {
      // Use default position of the FComponent3d
      colliderPosition = new THREE.Vector3(this.position.x, this.position.y, this.position.z)
    }

    // If scale is not defined
    if (!colliderScale) {
      // Use default scale of the FComponent3d
      colliderScale = new THREE.Vector3(this.scale.x, this.scale.y, this.scale.z)
    }

    // Devide scale by 2 (RAPIER uses half-extents)
    if (colliderScale) {
      colliderScale.x /= 2
      colliderScale.y /= 2
      colliderScale.z /= 2
    }

    // If rotation is not defined
    if (!colliderRotation) {
      // Use default rotation of the FComponent3d
      colliderRotation = new THREE.Vector3(this.rotation.x, this.rotation.y, this.rotation.z)
    }

    // If a shape wasn't defined
    if (!shape) {
      // Default to cube
      shape = F3dShapes.CUBE
    }

    // Create a cuboid collider attached to the dynamic rigidBody.
    const colliderDesc = shape === F3dShapes.CUBE
      ? RAPIER.ColliderDesc.cuboid(colliderScale.x, colliderScale.y, colliderScale.z)
      : RAPIER.ColliderDesc.ball(colliderScale.x)
    colliderDesc.setTranslation(colliderPosition.x, colliderPosition.y, colliderPosition.z)
    colliderDesc.setRotation(
      // Create quaternion from Euler angles
      new THREE.Quaternion().setFromEuler(new THREE.Euler(colliderRotation.x, colliderRotation.y, colliderRotation.z)),
    )
    this.collider = this.scene.world.createCollider(colliderDesc)
  }
}
