import * as THREE from 'three'
import { FComponent } from '../core/FComponent'
import type { FComponentOptions } from '../core/FComponent'

/**
 * A simple polyhedron model in Fibbo.
 * Defaults to a cube.
 * @category Polyhedrons
 */
export abstract class FPolyhedron extends FComponent {
  /**
   * mesh is redefined from FComponent without the ? because it is
   * directly available after the constructor, as a polyhedron is created synchronously.
   */
  declare __MESH__: THREE.Mesh

  constructor(options?: FComponentOptions) {
    super(options)
    // Create a cube
    const geometry = new THREE.BoxGeometry(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z)
    const material = new THREE.MeshPhongMaterial({
      color: 0x666666,
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

  /**
   * Change the color of the polyhedron.
   * @param color The color of the polyhedron.
   * @example
   * ```ts
   * cube.setColor(0xff0000)
   * ```
   */
  setColor(color: number): void {
    const material = new THREE.MeshPhongMaterial({ color })
    this.__MESH__.material = material
  }
}
