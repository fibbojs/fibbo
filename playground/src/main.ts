import './style.css'
import { FScene } from '@fibbojs/fibbo'
import MyCube from './classes/MyCube'
import MySphere from './classes/MySphere'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'
import MyGameCamera from './cameras/MyGameCamera'

const scene = new FScene(true)

const cube = new MyCube(scene)
scene.addModel(cube)

const sphere = new MySphere(scene)
scene.addModel(sphere)

const duck = new Duck(scene)
scene.addModel(duck)

const gltfCube = new GltfCube(scene)
scene.addModel(gltfCube)

scene.camera = new MyGameCamera(gltfCube, scene)

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
    case ' ':
      impulse.y = 5
      break
  }
  gltfCube.rigidBody?.applyImpulse(impulse, true)
})
