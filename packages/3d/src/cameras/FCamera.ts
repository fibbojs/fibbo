import * as THREE from 'three'
import { FCamera as FCameraCore } from '@fibbojs/core'
import type { FTransformOptions } from '../core/FTransform'
import { FTransform } from '../core/FTransform'
import type { FScene } from '../core/FScene'

export interface FCameraOptions extends FTransformOptions {}

/**
 * The base class for 3d cameras in Fibbo.
 * @category Camera
 */
export abstract class FCamera extends FCameraCore {
  /**
   * Internal flags
   */
  public __IS_3D__: boolean = true
  public __IS_2D__: boolean = false

  /**
   * Three.js camera object.
   */
  __CAMERA__: THREE.PerspectiveCamera

  /**
   * Transform of the camera.
   */
  transform: FTransform

  constructor(scene: FScene, options?: FCameraOptions) {
    super(scene)

    // Define default options
    const DEFAULT_OPTIONS = {
      position: { x: 5, y: 5, z: 5 },
      rotation: { x: 0, y: 0.7853981634, z: 0 },
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.position || (!options.rotation && !options.rotationDegree))
      throw new Error('FibboError: FCamera requires position and rotation options')

    // Create the Three.js camera
    this.__CAMERA__ = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // Store transform
    this.transform = new FTransform({
      position: options.position,
      rotation: options.rotation,
      rotationDegree: options.rotationDegree,
    })

    // Set the position
    this.__CAMERA__.position.set(this.transform.position.x, this.transform.position.y, this.transform.position.z)
    // Set the rotation
    this.__CAMERA__.rotation.set(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z)
  }

  /**
   * Set the position of the camera.
   */
  setPosition(position: { x: number, y: number, z: number }): void {
    this.__CAMERA__.position.set(position.x, position.y, position.z)
    this.transform.position = position
  }

  /**
   * Set the scale of the camera.
   */
  setScale(scale: { x: number, y: number, z: number }): void {
    this.__CAMERA__.scale.set(scale.x, scale.y, scale.z)
    this.transform.scale = scale
  }

  /**
   * Set the rotation of the camera.
   */
  setRotation(rotation: { x: number, y: number, z: number }): void {
    this.__CAMERA__.rotation.set(rotation.x, rotation.y, rotation.z)
    this.transform.rotation = rotation
  }

  /**
   * Set the rotation of the camera in degrees.
   */
  setRotationDegree(rotation: { x: number, y: number, z: number }): void {
    const rotationRad = {
      x: THREE.MathUtils.degToRad(rotation.x),
      y: THREE.MathUtils.degToRad(rotation.y),
      z: THREE.MathUtils.degToRad(rotation.z),
    }
    this.__CAMERA__.rotation.set(rotationRad.x, rotationRad.y, rotationRad.z)
    this.transform.rotation = rotationRad
  }

  /**
   * Set the zoom of the camera.
   */
  setZoom(zoom: number): void {
    this.__CAMERA__.zoom = zoom
    this.__CAMERA__.updateProjectionMatrix()
  }

  /**
   * Look at a point in the scene.
   */
  lookAt(target: { x: number, y: number, z: number }): void {
    this.__CAMERA__.lookAt(target.x, target.y, target.z)
  }

  /**
   * Get the direction of the camera.
   * This method is useful to get the direction of the camera to apply forces in the direction of the camera.
   * @returns The direction of the camera. It is a normalized vector.
   */
  getCameraDirection() {
    const direction = new THREE.Vector3()
    this.__CAMERA__.getWorldDirection(direction)
    direction.normalize()
    return direction
  }

  // Setters & getters

  get position() {
    return this.transform.position
  }

  set position(position: { x: number, y: number, z: number }) {
    this.setPosition(position)
  }

  get x() {
    return this.transform.position.x
  }

  set x(x: number) {
    this.setPosition({ x, y: this.y, z: this.z })
  }

  get y() {
    return this.transform.position.y
  }

  set y(y: number) {
    this.setPosition({ x: this.x, y, z: this.z })
  }

  get z() {
    return this.transform.position.z
  }

  set z(z: number) {
    this.setPosition({ x: this.x, y: this.y, z })
  }

  get rotation() {
    return this.transform.rotation
  }

  set rotation(rotation: { x: number, y: number, z: number }) {
    this.setRotation(rotation)
  }

  get rotationX() {
    return this.transform.rotation.x
  }

  set rotationX(x: number) {
    this.setRotation({ x, y: this.rotationY, z: this.rotationZ })
  }

  get rotationY() {
    return this.transform.rotation.y
  }

  set rotationY(y: number) {
    this.setRotation({ x: this.rotationX, y, z: this.rotationZ })
  }

  get rotationZ() {
    return this.transform.rotation.z
  }

  set rotationZ(z: number) {
    this.setRotation({ x: this.rotationX, y: this.rotationY, z })
  }

  get rotationDegree() {
    return this.transform.rotationDegree
  }

  set rotationDegree(rotation: { x: number, y: number, z: number }) {
    this.setRotation(rotation)
  }

  get rotationDegreeX() {
    return this.transform.rotationDegree.x
  }

  set rotationDegreeX(x: number) {
    this.setRotationDegree({ x, y: this.rotationDegreeY, z: this.rotationDegreeZ })
  }

  get rotationDegreeY() {
    return this.transform.rotationDegree.y
  }

  set rotationDegreeY(y: number) {
    this.setRotationDegree({ x: this.rotationDegreeX, y, z: this.rotationDegreeZ })
  }

  get rotationDegreeZ() {
    return this.transform.rotationDegree.z
  }

  set rotationDegreeZ(z: number) {
    this.setRotationDegree({ x: this.rotationDegreeX, y: this.rotationDegreeY, z })
  }

  get scale() {
    return this.transform.scale
  }

  set scale(scale: { x: number, y: number, z: number }) {
    this.setScale(scale)
  }

  get scaleX() {
    return this.transform.scale.x
  }

  set scaleX(x: number) {
    this.setScale({ x, y: this.scaleY, z: this.scaleZ })
  }

  get scaleY() {
    return this.transform.scale.y
  }

  set scaleY(y: number) {
    this.setScale({ x: this.scaleX, y, z: this.scaleZ })
  }

  get scaleZ() {
    return this.transform.scale.z
  }

  set scaleZ(z: number) {
    this.setScale({ x: this.scaleX, y: this.scaleY, z })
  }

  get zoom() {
    return this.__CAMERA__.zoom
  }

  set zoom(zoom: number) {
    this.setZoom(zoom)
  }
}
