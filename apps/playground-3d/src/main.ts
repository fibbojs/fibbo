import { F3dShapes, FCube, FGameCamera, FScene3d, FSphere } from '@fibbojs/3d'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'
import './style.css'

(async () => {
  // Initialize the scene
  const scene = new FScene3d({ debug: true })
  scene.init()
  await scene.initPhysics()

  // Create a ground
  const ground = new FCube(scene, {
    position: { x: 0, y: -0.1, z: 0 },
    scale: { x: 15, y: 0.1, z: 15 },
  })
  ground.initCollider()
  ground.setColor(0x1F1F1F)
  scene.addComponent(ground)

  // Create a cube
  const cube = new FCube(scene, {
    position: { x: -5, y: 5, z: 5 },
  })
  cube.setColor(0xA0FFA0)
  cube.initRigidBody({
    lockRotations: true,
  })
  scene.addComponent(cube)

  const sphere = new FSphere(scene, {
    position: { x: 2, y: 4, z: -2 },
  })
  sphere.initRigidBody()
  scene.addComponent(sphere)

  const duck = new Duck(scene)
  scene.addComponent(duck)

  const gltfCube = new GltfCube(scene)
  scene.addComponent(gltfCube)

  const gltfCube2 = new GltfCube(scene)
  gltfCube2.setPosition(2, 5, 2)
  scene.addComponent(gltfCube2)

  cube.onCollisionWith(GltfCube, () => {
    console.log('Cube collided with a GltfCube !')
  })
  cube.onCollisionWith(sphere, () => {
    console.log('Cube collided with the sphere!')
  })

  // After 3 seconds, add a third gltfCube
  setTimeout(() => {
    const gltfCube3 = new GltfCube(scene)
    gltfCube3.setPosition(-2, 5, -2)
    scene.addComponent(gltfCube3)
  }, 3000)

  // Create 8 cubes dynamically in circle from 0 to 2PI
  for (let i = 0; i < 8; i++) {
    const angle = i * Math.PI / 4
    const x = Math.cos(angle) * 4
    const z = Math.sin(angle) * 4
    const cube = new FCube(scene)
    cube.setPosition(x, 1, z)
    cube.initRigidBody({
      shape: i === 0 ? F3dShapes.SPHERE : F3dShapes.CUBE,
    })
    scene.addComponent(cube)
  }

  scene.camera = new FGameCamera(gltfCube, scene)

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
        cube.rigidBody?.applyImpulse({ x: 0, y: 5, z: 0 }, true)
        break
    }
    cube.rigidBody?.applyImpulse(impulse, true)
  })

  // Attach a camera to the cube
  scene.camera = new FGameCamera(cube, scene)
})()
