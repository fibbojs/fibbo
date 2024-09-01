import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../core/FScene'
import type { FControllerOptions } from './FController'
import { FController } from './FController'

export interface FCharacterControllerOptions extends FControllerOptions {
  /**
   * The speed of the character.
   */
  speed?: number
}

/**
 * @description An abstract pre-defined character controller.
 * @category Controller
 */
export abstract class FCharacterController extends FController {
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

  /**
   * The scene where the character is.
   */
  scene: FScene

  constructor(scene: FScene, options: FCharacterControllerOptions) {
    super(options)

    // Define default values
    const DEFAULT_OPTIONS = {
      speed: 1,
    }
    // Apply default options
    options = { ...DEFAULT_OPTIONS, ...options }
    // Validate options
    if (!options.speed)
      throw new Error('FibboError: FCharacter requires speed option')

    // Store options
    this.scene = scene
    this.speed = options.speed

    // Map of the movements (will be updated by the keyboard)
    this.inputs = {
      forward: false,
      backward: false,
      left: false,
      right: false,
    }

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
}
