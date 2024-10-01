import { FKeyboard } from '@fibbojs/event'
import type { FScene } from '../core/FScene'
import { FShapes } from '../types/FShapes'
import { FController, type FControllerOptions } from './FController'

export interface FCharacterControllerOptions extends FControllerOptions {
  /**
   * The speed of the character.
   */
  speed?: number
}

/**
 * An abstract pre-defined character controller.
 * @category Controller
 */
export abstract class FCharacterController extends FController {
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
      up: false,
      down: false,
      left: false,
      right: false,
    }

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

    // Initialize a sensor
    this.component.initSensor({
      shape: FShapes.RECTANGLE,
      scale: { x: 1.1, y: 1.1 },
    })
  }
}
