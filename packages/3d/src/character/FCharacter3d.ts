import * as THREE from 'three'
import { FKeyboard } from '@fibbojs/event'
import type { FScene3d } from '../FScene3d'
import { F3dShapes } from '../types/F3dShapes'
import type { FComponent3dOptions } from '../FComponent3d'
import { FComponent3d } from '../FComponent3d'
import type { FRigidBody3dOptions } from '../FRigidBody3d'
import type { FCollider3dOptions } from '../FCollider3d'

export interface FCharacter3dOptions extends FComponent3dOptions {
  /**
   * The speed of the character.
   */
  speed?: number
}

/**
 * @description An abstract pre-defined character controller.
 * @category Character
 */
export abstract class FCharacter3d extends FComponent3d {
  /**
   * The inputs that will be used to move the character.
   */
  inputs: {
    forward: boolean
    backward: boolean
    left: boolean
    right: boolean
  }

  /**
   * The speed of the character.
   */
  speed: number

  constructor(scene: FScene3d, options?: FCharacter3dOptions) {
    super(scene, options)

    // Define default values
    const DEFAULT_OPTIONS = {
      speed: 1,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.speed)
      throw new Error('FibboError: FCharacter3d requires speed option')

    // Store speed
    this.speed = options.speed

    // Map of the movements (will be updated by the keyboard)
    this.inputs = {
      forward: false,
      backward: false,
      left: false,
      right: false,
    }

    // Create a capsule mesh
    const geometry = new THREE.CapsuleGeometry(0.5, 1, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0xA0FFA0 })
    this.mesh = new THREE.Mesh(geometry, material)

    // Create a keyboard instance
    const fKeyboard = new FKeyboard(scene)

    // Key down
    fKeyboard.onKeyDown('ArrowUp', () => {
      this.inputs.forward = true
    })
    fKeyboard.onKeyDown('ArrowDown', () => {
      this.inputs.backward = true
    })
    fKeyboard.onKeyDown('ArrowLeft', () => {
      this.inputs.left = true
    })
    fKeyboard.onKeyDown('ArrowRight', () => {
      this.inputs.right = true
    })

    // Key up
    fKeyboard.onKeyUp('ArrowUp', () => {
      this.inputs.forward = false
    })
    fKeyboard.onKeyUp('ArrowDown', () => {
      this.inputs.backward = false
    })
    fKeyboard.onKeyUp('ArrowLeft', () => {
      this.inputs.left = false
    })
    fKeyboard.onKeyUp('ArrowRight', () => {
      this.inputs.right = false
    })
  }

  initRigidBody(options?: FRigidBody3dOptions): void {
    super.initRigidBody({
      shape: F3dShapes.CAPSULE,
      ...options,
    })
  }

  initCollider(options?: FCollider3dOptions): void {
    super.initCollider({
      shape: F3dShapes.CAPSULE,
      ...options,
    })
  }

  initSensor(options?: FCollider3dOptions): void {
    super.initSensor({
      scale: new THREE.Vector3(1.1, 1.1, 1.1),
      shape: F3dShapes.CAPSULE,
      ...options,
    })
  }
}
