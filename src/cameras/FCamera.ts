import * as THREE from 'three'
import type { FComponent } from '../core/FComponent'

/**
 * @description The base class for cameras in FibboJS.
 * @category Camera
 */
export abstract class FCamera extends THREE.PerspectiveCamera implements FComponent {
  constructor() {
    super(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  }

  abstract onFrame(_delta: number): void
}
