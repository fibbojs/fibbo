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
   * @param scene The 3D scene where the component will be added.
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
   * @description Set the position of the component.
   * @param x The position on the x-axis.
   * @param y The position on the y-axis.
   * @param z The position on the z-axis.
   * @example
   * ```ts
   * component.setPosition(0, 1, 0)
   * ```
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
   * @description Set the scale of the component.
   * @param x The scale on the x-axis.
   * @param y The scale on the y-axis.
   * @param z The scale on the z-axis.
   */
  setScale(x: number, y: number, z: number): void {
    this.scale.set(x, y, z)
    if (this.mesh)
      this.mesh.scale.set(x, y, z)
  }

  /**
   * @description Set the rotation of the component from radians.
   * @param x The rotation in radians on the x-axis.
   * @param y The rotation in radians on the y-axis.
   * @param z The rotation in radians on the z-axis.
   * @example
   * ```ts
   * component.setRotation(0, Math.PI / 2, 0)
   * ```
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
   * @description Set the rotation of the component from degrees.
   * @param x The rotation in degrees on the x-axis.
   * @param y The rotation in degrees on the y-axis.
   * @param z The rotation in degrees on the z-axis.
   * @example
   * ```ts
   * component.setRotationDegree(0, 90, 0)
   * ```
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
   * @param position The position of the rigid body. If not defined, it will use the default position of the FComponent3d.
   * @param scale The scale of the rigid body. If not defined, it will use the default scale of the FComponent3d.
   * @param rotation The rotation of the rigid body. If not defined, it will use the default rotation of the FComponent3d.
   * @param shape The shape of the rigid body. If not defined, it will default to F3dShapes.CUBE.
   * @example
   * ```ts
   * component.initRigidBody(new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 1), new THREE.Vector3(0, 0, 0), F3dShapes.CUBE)
   * ```
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
   * @description Only init a collider for the component, without a rigid body.
   * This is useful for static objects.
   * @param position The position of the collider. If not defined, it will use the default position of the FComponent3d.
   * @param scale The scale of the collider. If not defined, it will use the default scale of the FComponent3d.
   * @param rotation The rotation of the collider. If not defined, it will use the default rotation of the FComponent3d.
   * @param shape The shape of the collider. If not defined, it will default to F3dShapes.CUBE.
   * @example
   * ```ts
   * component.initCollider(
   *  new THREE.Vector3(0, 1, 0),
   *  new THREE.Vector3(1, 1, 1),
   *  new THREE.Vector3(0, 0, 0),
   *  F3dShapes.CUBE
   * )
   * ```
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
