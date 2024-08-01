import './style.css'
import { FCube, FGameCamera, FScene3d } from '@fibbojs/3d'

(async () => {
  // Initialize the scene
  const scene = new FScene3d()
  await scene.init()
  await scene.initPhysics()

  // Create a ground
  const ground = new FCube(scene)
  ground.setScale(15, 0.1, 15)
  ground.setPosition(0, -0.1, 0)
  ground.initCollider()
  ground.setColor(0x1F1F1F)
  scene.addComponent(ground)

  // Create a cube
  const cube = new FCube(scene)
  cube.initRigidBody()
  scene.addComponent(cube)

  // Attach a camera to the cube
  scene.camera = new FGameCamera(cube, scene)
})()
