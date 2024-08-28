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
    fKeyboard.onKeyDown('w', () => {
      this.inputs.forward = true
    })
    fKeyboard.onKeyDown('s', () => {
      this.inputs.backward = true
    })
    fKeyboard.onKeyDown('a', () => {
      this.inputs.left = true
    })
    fKeyboard.onKeyDown('d', () => {
      this.inputs.right = true
    })
    // For AZERTY keyboards
    fKeyboard.onKeyDown('z', () => {
      this.inputs.forward = true
    })
    fKeyboard.onKeyDown('q', () => {
      this.inputs.left = true
    })

    // Key up
    fKeyboard.onKeyUp('w', () => {
      this.inputs.forward = false
    })
    fKeyboard.onKeyUp('s', () => {
      this.inputs.backward = false
    })
    fKeyboard.onKeyUp('a', () => {
      this.inputs.left = false
    })
    fKeyboard.onKeyUp('d', () => {
      this.inputs.right = false
    })
    // For AZERTY keyboards
    fKeyboard.onKeyUp('z', () => {
      this.inputs.forward = false
    })
    fKeyboard.onKeyUp('q', () => {
      this.inputs.left = false
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
      scale: { x: 1.1, y: 1.1, z: 1.1 },
      shape: F3dShapes.CAPSULE,
      ...options,
    })
  }
}
