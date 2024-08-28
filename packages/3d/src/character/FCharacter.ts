import * as THREE from 'three'
import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../FScene'
import { FShapes } from '../types/FShapes'
import type { FComponentOptions } from '../FComponent'
import { FComponent } from '../FComponent'
import type { FRigidBodyOptions } from '../FRigidBody'
import type { FColliderOptions } from '../FCollider'

export interface FCharacterOptions extends FComponentOptions {
  /**
   * The speed of the character.
   */
  speed?: number
}

/**
 * @description An abstract pre-defined character controller.
 * @category Character
 */
export abstract class FCharacter extends FComponent {
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

  constructor(scene: FScene, options?: FCharacterOptions) {
    super(scene, options)

    // Define default values
    const DEFAULT_OPTIONS = {
      speed: 1,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.speed)
      throw new Error('FibboError: FCharacter requires speed option')

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

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      shape: FShapes.CAPSULE,
      ...options,
    })
  }

  initCollider(options?: FColliderOptions): void {
    super.initCollider({
      shape: FShapes.CAPSULE,
      ...options,
    })
  }

  initSensor(options?: FColliderOptions): void {
    super.initSensor({
      scale: { x: 1.1, y: 1.1, z: 1.1 },
      shape: FShapes.CAPSULE,
      ...options,
    })
  }
}
