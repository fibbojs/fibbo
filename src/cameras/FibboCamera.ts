import * as THREE from 'three'
import type { FibboComponent } from '../core/FibboComponent'

/**
 * @description The base class for cameras in FibboJS.
 * @category Camera
 */
export abstract class FibboCamera extends THREE.PerspectiveCamera implements FibboComponent {
  constructor() {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  }

  abstract onFrame(_delta: number): void
}
