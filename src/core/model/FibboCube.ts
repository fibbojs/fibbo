import * as THREE from 'three'
import { FibboModel } from './FibboModel'

export class FibboCube extends FibboModel {
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y, z)
    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
    this.object3D = new THREE.Mesh(geometry, material)
  }

  onFrame(delta: number): void {
    super.onFrame(delta)
  }
}
