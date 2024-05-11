import './style.css'
import { FCube, FScene } from '@fibbojs/fibbo'
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

// Create 8 cubes dynamically in circle from 0 to 2PI
for (let i = 0; i < 8; i++) {
  const angle = i * Math.PI / 4
  const x = Math.cos(angle) * 4
  const z = Math.sin(angle) * 4
  const cube = new FCube(scene)
  cube.setPosition(x, 1, z)
  cube.initRigidBody()
  scene.addModel(cube)
}

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
      gltfCube.rigidBody?.applyImpulse({ x: 0, y: 5, z: 0 }, true)
      break
  }
  gltfCube.rigidBody?.applyImpulse(impulse, true)
})
