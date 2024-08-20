import { F3dShapes, FCube, FGameCamera, FScene3d, FSphere } from '@fibbojs/3d'
import { fDebug } from '@fibbojs/devtools'
import { FKeyboard } from '@fibbojs/event'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'
import './style.css'

(async () => {
  // Initialize the scene
  const scene = new FScene3d()
  scene.init()
  await scene.initPhysics()
  // Debug the scene
  fDebug(scene)

  // Create a ground
  const ground = new FCube(scene, {
    position: { x: 0, y: -0.1, z: 0 },
    scale: { x: 15, y: 0.1, z: 15 },
  })
  ground.initCollider()
  ground.setColor(0x1F1F1F)
  scene.addComponent(ground)

  // Create a cube that will be controlled by the player
  const cube = new FCube(scene, {
    position: { x: -5, y: 5, z: 5 },
  })
  cube.setColor(0xA0FFA0)
  cube.initRigidBody({
    lockRotations: true,
  })
  scene.addComponent(cube)

  /**
   * Create other objects
   */
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

  /**
   * Add collision events
   */
  cube.onCollisionWith(GltfCube, () => {
    console.log('Cube collided with a GltfCube !')
  })
  cube.onCollisionWith(sphere, () => {
    console.log('Cube collided with the sphere!')
  })

  // Create a keyboard instance
  const fKeyboard = new FKeyboard(scene)
  // Detect inputs to move the cube
  fKeyboard.on('ArrowUp', () => {
    cube.rigidBody?.applyImpulse({ x: 0, y: 0, z: -0.2 }, true)
  })
  fKeyboard.on('ArrowDown', () => {
    cube.rigidBody?.applyImpulse({ x: 0, y: 0, z: 0.2 }, true)
  })
  fKeyboard.on('ArrowLeft', () => {
    cube.rigidBody?.applyImpulse({ x: -0.2, y: 0, z: 0 }, true)
  })
  fKeyboard.on('ArrowRight', () => {
    cube.rigidBody?.applyImpulse({ x: 0.2, y: 0, z: 0 }, true)
  })
  fKeyboard.on(' ', () => {
    cube.rigidBody?.applyImpulse({ x: 0, y: 1, z: 0 }, true)
  })

  // Attach a camera to the cube
  scene.camera = new FGameCamera(cube, scene)

  // After 3 seconds, add a third gltfCube
  setTimeout(() => {
    const gltfCube3 = new GltfCube(scene)
    gltfCube3.setPosition(-2, 5, -2)
    scene.addComponent(gltfCube3)
  }, 3000)
})()
