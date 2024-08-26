import { F3dShapes, FCapsule, FCharacter3dKV, FCube, FFBX, FGLB, FGameCamera, FOBJ, FScene3d, FSphere } from '@fibbojs/3d'
import { fDebug } from '@fibbojs/devtools'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'
import './style.css'
import MyCustomCube from './classes/MyCustomCube'

(async () => {
  // Initialize the scene
  const scene = new FScene3d()
  scene.init()
  await scene.initPhysics()
  // Debug the scene
  if (import.meta.env.DEV)
    fDebug(scene)

  // Create a ground
  const ground = new FCube(scene, {
    position: { x: 0, y: -0.1, z: 0 },
    scale: { x: 15, y: 0.1, z: 15 },
  })
  ground.initCollider()
  ground.setColor(0x1F1F1F)
  scene.addComponent(ground)

  // Import 3d models
  const blockGrassCorner = new FOBJ(scene, {
    name: 'block-grass-corner',
    position: { x: -10, y: 0, z: -8 },
    scale: { x: 4, y: 4, z: 4 },
  })
  blockGrassCorner.initCollider()
  scene.addComponent(blockGrassCorner)

  const blockGrassOverhangLargeTall = new FOBJ(scene, {
    name: 'block-grass-overhang-large-tall',
    position: { x: -10, y: -4, z: -4 },
    scale: { x: 4, y: 4, z: 4 },
  })
  blockGrassOverhangLargeTall.initCollider()
  scene.addComponent(blockGrassOverhangLargeTall)

  const blockGrassLargeSlope = new FGLB(scene, {
    name: 'block-grass-large-slope',
    position: { x: -12, y: 0, z: -4 },
    scale: { x: 2, y: 2, z: 2 },
    rotationDegree: { x: 0, y: 90, z: 0 },
  })
  blockGrassLargeSlope.initCollider()
  scene.addComponent(blockGrassLargeSlope)

  const blockGrassLarge = new FFBX(scene, {
    name: 'block-grass-large',
    position: { x: -12, y: -4, z: 0 },
    scale: { x: 4, y: 4, z: 4 },
  })
  blockGrassLarge.initCollider()
  scene.addComponent(blockGrassLarge)

  // Add "stairs"
  for (let i = 0; i < 10; i++) {
    const cube = new FCube(scene, {
      scale: { x: 2, y: 1, z: 1 },
      position: { x: 6, y: i / 4 - 0.5, z: -i },
    })
    cube.initCollider()
    cube.setColor(0x1F1F1F)
    scene.addComponent(cube)
  }

  // Create a second ground
  const ground2 = new FCube(scene, {
    position: { x: 0, y: 2.2, z: -17 },
    scale: { x: 15, y: 0.1, z: 15 },
  })
  ground2.initCollider()
  ground2.setColor(0x1F1F1F)
  scene.addComponent(ground2)

  // Create a character
  const character = new FCharacter3dKV(scene)
  scene.addComponent(character)

  // Attach a camera to the character
  scene.camera = new FGameCamera(character, scene)

  /**
   * Create other objects
   */
  const sphere = new FSphere(scene, {
    position: { x: 2, y: 4, z: -2 },
  })
  sphere.initRigidBody()
  scene.addComponent(sphere)

  const capsule = new FCapsule(scene, {
    position: { x: -5, y: 5, z: 5 },
    rotationDegree: { x: 0, y: 45, z: 0 },
  })
  capsule.initRigidBody()
  scene.addComponent(capsule)

  const duck = new Duck(scene)
  duck.setPosition(-5, 1, -5)
  duck.initRigidBody()
  scene.addComponent(duck)

  const gltfCube = new GltfCube(scene)
  scene.addComponent(gltfCube)

  const gltfCube2 = new GltfCube(scene)
  gltfCube2.setPosition(2, 5, 2)
  scene.addComponent(gltfCube2)

  // Create 8 cubes dynamically in circle from 0 to 2PI on the second ground
  for (let i = 0; i < 8; i++) {
    const angle = i * Math.PI / 4
    const x = Math.cos(angle) * 4
    const z = Math.sin(angle) * 4
    // Create cube variable
    let cube
    if (i === 0) {
      // First one is an instance of MyCustomCube
      cube = new MyCustomCube(scene)
      cube.setPosition(x, 3, z - 17)
      cube.initRigidBody({
        // First one gets a sphere collider, the others get a cube collider
        shape: F3dShapes.SPHERE,
      })
    }
    else {
      cube = new FCube(scene)
      cube.setPosition(x, 3, z - 17)
      cube.initRigidBody()
    }
    scene.addComponent(cube)
  }

  /**
   * Add collision events
   */
  character.onCollisionWith(FCube, () => {
    console.log('Character collided with a FCube !')
  })
  character.onCollisionWith(sphere, () => {
    console.log('Character collided with the sphere!')
  })

  // After 3 seconds, add a third gltfCube
  setTimeout(() => {
    const gltfCube3 = new GltfCube(scene)
    gltfCube3.setPosition(-2, 5, -2)
    scene.addComponent(gltfCube3)
  }, 3000)
})()
