import * as THREE from 'three'
import type { FScene3d } from '../FScene3d'
import { FComponent3d } from '../FComponent3d'

/**
 * @description A simple polyhedron model in FibboJS.
 * Defaults to a cube.
 * @category Model
 */
export abstract class FPolyhedron extends FComponent3d {
  /**
   * mesh is redefined from FComponent3d without the ? because it is
   * directly available after the constructor, as a polyhedron is created synchronously.
   */
  mesh: THREE.Mesh

  constructor(scene: FScene3d, options?: {
    position?: { x: number, y: number, z: number }
    scale?: { x: number, y: number, z: number }
    rotation?: { x: number, y: number, z: number }
    rotationDegree?: { x: number, y: number, z: number }
  }) {
    super(scene, options)
    // Create a cube
    const geometry = new THREE.BoxGeometry(this.scale.x, this.scale.y, this.scale.z)
    const material = new THREE.MeshBasicMaterial({ color: 0x666666 })
    this.mesh = new THREE.Mesh(geometry, material)
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
    const material = new THREE.MeshBasicMaterial({ color })
    this.mesh.material = material
  }
}
