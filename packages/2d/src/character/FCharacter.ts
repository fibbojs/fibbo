import * as PIXI from 'pixi.js'
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
    up: boolean
    down: boolean
    left: boolean
    right: boolean
  }

  /**
   * The speed of the character.
   */
  speed: number

  constructor(scene: FScene, options?: FCharacterOptions) {
    super(scene, {
      scale: { x: 0.5, y: 1 },
      ...options,
    })

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
      up: false,
      down: false,
      left: false,
      right: false,
    }

    // Create a square
    this.container = new PIXI.Graphics()
      .rect(this.position.x, this.position.y, this.scale.x * 100, this.scale.y * 100)
      .fill(new PIXI.FillGradient(0, 0, this.scale.x * 100, this.scale.y * 100).addColorStop(0, 0xFF00FF).addColorStop(1, 0xFFFF00))
    // Set the pivot of the container to the center
    this.container.pivot.set(this.container.width / 2, this.container.height / 2)

    // Create a keyboard instance
    const fKeyboard = new FKeyboard(scene)

    // Key down
    fKeyboard.onKeyDown('w', () => {
      this.inputs.up = true
    })
    fKeyboard.onKeyDown('s', () => {
      this.inputs.down = true
    })
    fKeyboard.onKeyDown('a', () => {
      this.inputs.left = true
    })
    fKeyboard.onKeyDown('d', () => {
      this.inputs.right = true
    })
    // For AZERTY keyboards
    fKeyboard.onKeyDown('z', () => {
      this.inputs.up = true
    })
    fKeyboard.onKeyDown('q', () => {
      this.inputs.left = true
    })

    // Key up
    fKeyboard.onKeyUp('w', () => {
      this.inputs.up = false
    })
    fKeyboard.onKeyUp('s', () => {
      this.inputs.down = false
    })
    fKeyboard.onKeyUp('a', () => {
      this.inputs.left = false
    })
    fKeyboard.onKeyUp('d', () => {
      this.inputs.right = false
    })
    // For AZERTY keyboards
    fKeyboard.onKeyUp('z', () => {
      this.inputs.up = false
    })
    fKeyboard.onKeyUp('q', () => {
      this.inputs.left = false
    })
  }

  initRigidBody(options?: FRigidBodyOptions): void {
    super.initRigidBody({
      shape: FShapes.SQUARE,
      ...options,
    })
  }

  initCollider(options?: FColliderOptions): void {
    super.initCollider({
      shape: FShapes.SQUARE,
      ...options,
    })
  }

  initSensor(options?: FColliderOptions): void {
    super.initSensor({
      scale: { x: 1.2, y: 1.2 },
      shape: FShapes.SQUARE,
      ...options,
    })
  }
}
