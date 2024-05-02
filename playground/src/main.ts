import './style.css'
import { FibboScene } from '@fibbojs/fibbo'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'

const scene = new FibboScene(true)

const duck = new Duck(scene)
scene.addModel(duck)

const gltfCube = new GltfCube(scene)
scene.addModel(gltfCube)

setTimeout(() => {
  gltfCube.rigidBody?.applyImpulse({ x: 0, y: 5, z: 0 }, true)
}, 2000)

// Detect inputs to move the cube
document.addEventListener('keydown', (event) => {
  const impulse = { x: 0, y: 0, z: 0 }
  switch (event.key) {
    case 'ArrowUp':
      impulse.z = -1
      break
    case 'ArrowDown':
      impulse.z = 1
      break
    case 'ArrowLeft':
      impulse.x = -1
      break
    case 'ArrowRight':
      impulse.x = 1
      break
  }
  gltfCube.rigidBody?.applyImpulse(impulse, true)
})
