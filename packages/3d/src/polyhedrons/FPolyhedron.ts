import * as THREE from 'three'
import type { FScene } from '../core/FScene'
import { FComponent } from '../core/FComponent'
import type { FComponentOptions } from '../core/FComponent'

/**
 * @description A simple polyhedron model in Fibbo.
 * Defaults to a cube.
 * @category Model
 */
export abstract class FPolyhedron extends FComponent {
  /**
   * mesh is redefined from FComponent without the ? because it is
   * directly available after the constructor, as a polyhedron is created synchronously.
   */
  mesh: THREE.Mesh

  constructor(scene: FScene, options?: FComponentOptions) {
    super(scene, options)
    // Create a cube
    const geometry = new THREE.BoxGeometry(this.transform.scale.x, this.transform.scale.y, this.transform.scale.z)
    const material = new THREE.MeshPhongMaterial({ color: 0x666666 })
    this.mesh = new THREE.Mesh(geometry, material)
    // If shadows are enabled, cast and receive shadows
    if (scene.__ENABLE_SHADOWS__) {
      this.mesh.castShadow = true
      this.mesh.receiveShadow = true
    }
  }

  onFrame(_delta: number): void {
    super.onFrame(_delta)
  }

  /**
   * @description Change the color of the polyhedron.
   * @param color The color of the polyhedron.
   * @example
   * ```ts
   * cube.setColor(0xff0000)
   * ```
   */
  setColor(color: number): void {
    const material = new THREE.MeshPhongMaterial({ color })
    this.mesh.material = material
  }
}
