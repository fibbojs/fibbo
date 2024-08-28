import * as PIXI from 'pixi.js'
import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../FScene'
import { FShapes } from '../types/FShapes'
import type { FComponentOptions, FComponentOptions__initCollider, FComponentOptions__initRigidBody } from '../FComponent'
import { FComponent } from '../FComponent'

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
    fKeyboard.onKeyDown('ArrowUp', () => {
      this.inputs.up = true
    })
    fKeyboard.onKeyDown('ArrowDown', () => {
      this.inputs.down = true
    })
    fKeyboard.onKeyDown('ArrowLeft', () => {
      this.inputs.left = true
    })
    fKeyboard.onKeyDown('ArrowRight', () => {
      this.inputs.right = true
    })

    // Key up
    fKeyboard.onKeyUp('ArrowUp', () => {
      this.inputs.up = false
    })
    fKeyboard.onKeyUp('ArrowDown', () => {
      this.inputs.down = false
    })
    fKeyboard.onKeyUp('ArrowLeft', () => {
      this.inputs.left = false
    })
    fKeyboard.onKeyUp('ArrowRight', () => {
      this.inputs.right = false
    })
  }

  initRigidBody(options?: FComponentOptions__initRigidBody): void {
    super.initRigidBody({
      shape: FShapes.SQUARE,
      ...options,
    })
  }

  initCollider(options?: FComponentOptions__initCollider): void {
    super.initCollider({
      shape: FShapes.SQUARE,
      ...options,
    })
  }
}
