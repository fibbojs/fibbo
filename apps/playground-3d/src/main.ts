import './style.css'
import { FCube, FScene3d } from '@fibbojs/3d'
import MyCube from './classes/MyCube'
import MySphere from './classes/MySphere'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'
import MyGameCamera from './cameras/MyGameCamera'

(async () => {
  const scene = new FScene3d({ debug: true })
  scene.init()
  await scene.initPhysics()

  const cube = new MyCube(scene)
  scene.addComponent(cube)

  const sphere = new MySphere(scene)
  scene.addComponent(sphere)

  const duck = new Duck(scene)
  scene.addComponent(duck)

  const gltfCube = new GltfCube(scene)
  scene.addComponent(gltfCube)

  // Create 8 cubes dynamically in circle from 0 to 2PI
  for (let i = 0; i < 8; i++) {
    const angle = i * Math.PI / 4
    const x = Math.cos(angle) * 4
    const z = Math.sin(angle) * 4
    const cube = new FCube(scene)
    cube.setPosition(x, 1, z)
    cube.initRigidBody()
    scene.addComponent(cube)
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
})()
