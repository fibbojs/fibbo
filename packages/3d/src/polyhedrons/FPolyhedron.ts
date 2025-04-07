import * as THREE from 'three'
import { FComponent } from '../core/FComponent'
import type { FComponentOptions } from '../core/FComponent'

export interface FPolyhedronOptions extends FComponentOptions {
  color?: number
}

/**
 * A simple polyhedron model in Fibbo.
 * Defaults to a cube.
 * @category Polyhedrons
 */
export abstract class FPolyhedron extends FComponent {
  /**
   * The color of the polyhedron.
   */
  __COLOR__: number

  /**
   * Mesh is redefined from FComponent without the ? because it is
   * directly available after the constructor, as a polyhedron is created synchronously.
   */
  declare __MESH__: THREE.Mesh

  constructor(options?: FPolyhedronOptions) {
    super(options)

    // Apply default options
    const DEFAULT_OPTIONS = {
      color: 0x666666,
    }
    options = { ...DEFAULT_OPTIONS, ...options }

    // Validate options
    if (options.color === undefined) {
      throw new Error('FibboError: FPolyhedron requires color')
    }

    // Store options
    this.__COLOR__ = options.color

    // Create a cube
    const geometry = new THREE.BoxGeometry(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z)
    const material = new THREE.MeshPhongMaterial({
      color: this.color,
      // Turn on depthWrite if shadows are enabled
      depthWrite: this.scene.__ENABLE_SHADOWS__,
    })
    this.__MESH__ = new THREE.Mesh(geometry, material)
    // If shadows are enabled, cast and receive shadows
    if (this.scene.__ENABLE_SHADOWS__) {
      this.__MESH__.castShadow = true
      this.__MESH__.receiveShadow = true
    }
  }

  // Getters & setters

  get color(): number {
    return this.__COLOR__
  }

  /**
   * Change the color of the polyhedron.
   * @param value The color of the polyhedron.
   * @example
   * ```ts
   * cube.color = 0xff0000
   * ```
   */
  set color(value: number) {
    this.__COLOR__ = value
    this.__MESH__.material = new THREE.MeshPhongMaterial({ color: this.__COLOR__ })
  }
}
