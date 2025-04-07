import { FAmbientLight, FCapsule, FComponentEmpty, FCuboid, FDirectionalLight, FFBX, FGLB, FGameCamera, FOBJ, FRigidBodyType, FScene, FShapes, FSphere, FSpotLight } from '@fibbojs/3d'
import { fDebug } from '@fibbojs/devtools'
import { FKeyboard } from '@fibbojs/event'
import { Navbar } from '../components/Navbar'
import Duck from './classes/Duck'
import GltfCube from './classes/GltfCube'
import './style.css'
import MyCustomCube from './classes/MyCustomCube'
import Character from './classes/Character'

(async () => {
  new Navbar()

  // Initialize the scene
  const scene = new FScene({
    shadows: true,
  })
  scene.init()
  await scene.initPhysics()
  if (import.meta.env.DEV)
    fDebug(scene)

  // Add directional light to represent the sun
  new FDirectionalLight({
    position: { x: 20, y: 20, z: 0 },
    color: 0xFFFFFF,
    intensity: 3,
    shadowQuality: 12,
  })
  // Add spot light
  new FSpotLight({
    position: { x: 4, y: 4, z: 4 },
    angle: 1,
    distance: 8,
    color: 0xFFFFFF,
    intensity: 30,
    lookAt: { x: 8, y: 0, z: 8 },
    shadowQuality: 7,
  })
  // Add ambient light
  new FAmbientLight({
    color: 0x404040,
    intensity: 20,
  })

  // Create a death zone
  const deathZone = new FComponentEmpty({
    position: { x: 0, y: -20, z: 0 },
    scale: { x: 100, y: 1, z: 100 },
  })
  deathZone.initCollider()

  // Create a ground
  const ground = new FCuboid({
    position: { x: 0, y: -0.1, z: 0 },
    scale: { x: 15, y: 0.1, z: 15 },
    color: 0x60D641,
  })
  ground.initRigidBody({
    rigidBodyType: FRigidBodyType.FIXED,
  })

  // Import 3d models
  const blockGrassCorner = new FOBJ({
    name: 'block-grass-corner',
    position: { x: -10, y: -1, z: -7 },
    scale: { x: 4, y: 4, z: 4 },
    rotationDegree: { x: 0, y: -45, z: 0 },
  })
  blockGrassCorner.initCollider({
    positionOffset: { x: 0, y: 1, z: 0 },
    rotationDegreeOffset: { x: 0, y: 45, z: 0 },
    scaleOffset: { x: -2, y: -2, z: -2 },
  })

  const blockGrassOverhangLargeTall = new FOBJ({
    name: 'block-grass-overhang-large-tall',
    position: { x: -10, y: -5, z: -4 },
    scale: { x: 4, y: 4, z: 4 },
  })
  blockGrassOverhangLargeTall.initCollider({
    positionOffset: { x: 0, y: 2, z: 0 },
  })

  const blockGrassLargeSlope = new FGLB({
    name: 'block-grass-large-slope',
    position: { x: -8.5, y: -1, z: -4 },
    rotationDegree: { x: 0, y: -90, z: 0 },
    scale: { x: 2, y: 2, z: 2 },
  })
  blockGrassLargeSlope.onLoaded(() => {
    blockGrassLargeSlope.initCollider({
      shape: FShapes.MESH,
    })
  })

  const blockGrassLargeSlope2 = new FGLB({
    name: 'block-grass-large-slope',
    position: { x: -13, y: -2, z: -3 },
    rotationDegree: { x: 0, y: -90, z: 0 },
    scale: { x: 2, y: 2, z: 2 },
  })
  blockGrassLargeSlope2.onLoaded(() => {
    blockGrassLargeSlope2.initCollider({
      shape: FShapes.MESH,
    })
  })

  const blockGrassLarge = new FFBX({
    name: 'block-grass-large',
    position: { x: -14, y: -6, z: 0 },
    scale: { x: 8, y: 8, z: 8 },
  })
  blockGrassLarge.initCollider({
    position: { x: 0, y: 2, z: 0 },
    scale: { x: 1, y: 0.5, z: 1 },
  })

  // Add "stairs"
  for (let i = 0; i < 10; i++) {
    const cube = new FCuboid({
      scale: { x: 2, y: 0.2, z: 1 },
      position: { x: 6, y: i / 4, z: -i },
      color: 0x30A641,
    })
    cube.initCollider()
  }

  // Create a second ground
  const ground2 = new FCuboid({
    position: { x: 0, y: 2.2, z: -17 },
    scale: { x: 15, y: 0.1, z: 15 },
    color: 0xA0D6F1,
  })
  ground2.initCollider()

  // Create a character
  const character = new Character()

  // Attach a camera to the character
  scene.camera = new FGameCamera({ target: character })

  /**
   * Create other objects
   */
  const sphere = new FSphere({
    position: { x: 2, y: 5, z: -2 },
  })
  sphere.initRigidBody()

  const capsule = new FCapsule({
    position: { x: -5, y: 5, z: 5 },
    rotationDegree: { x: 0, y: 45, z: 0 },
  })
  capsule.initRigidBody()

  const duck = new Duck()
  duck.transform.position = { x: -5, y: 5, z: -5 }
  duck.initRigidBody()

  new GltfCube()

  const gltfCube2 = new GltfCube()
  gltfCube2.transform.position = { x: 2, y: 5, z: 2 }

  // Create 8 cubes dynamically in circle from 0 to 2PI on the second ground
  for (let i = 0; i < 8; i++) {
    const angle = i * Math.PI / 4
    const x = Math.cos(angle) * 4
    const z = Math.sin(angle) * 4
    // Create cube variable
    let cube
    if (i === 0) {
      // First one is an instance of MyCustomCube
      cube = new MyCustomCube({
        position: { x, y: 10, z: z - 17 },
      })
      cube.initRigidBody({
        // First one gets a sphere collider, the others get a cube collider
        shape: FShapes.SPHERE,
      })
    }
    else {
      cube = new FCuboid({
        position: { x, y: 10, z: z - 17 },
      })
      cube.initRigidBody()
    }
  }

  // Create a rotating cube
  const rotatingCube = new FCuboid({
    position: { x: 0, y: 5, z: 0 },
    color: 0xFF0000,
  })
  rotatingCube.initSensor()
  let totalDelta = 0
  scene.onFrame((delta) => {
    // Each frame, move the cube on a circle of radius 3
    const x = Math.cos(totalDelta) * 3
    const y = Math.sin(totalDelta) * 3
    rotatingCube.transform.position = { x, y, z: -5 }
    totalDelta += delta
  })

  /**
   * Add collision events
   */
  character.onCollisionWith(FCuboid, ({ component }) => {
    // Cast the component to FCuboid
    const cube = component as FCuboid
    console.log('Character collided with a cube', cube)
    // Change the color of the cube to a random color
    // cube.color = Math.random() * 0xFFFFFF
  })
  character.onCollisionWith(sphere, () => {
    console.log('Character collided with the sphere.')
  })
  character.onCollisionWith(deathZone, () => {
    console.log('Character fell into the death zone.')
    character.transform.position = { x: 0, y: 10, z: 0 }
  })

  // Create keyboard
  const keyboard = new FKeyboard()
  keyboard.onKeyDown('p', () => {
    character.transform.position = { x: 0, y: 5, z: 0 }
  })

  // After 3 seconds, add a third gltfCube
  setTimeout(() => {
    const gltfCube3 = new GltfCube()
    gltfCube3.transform.position = { x: -2, y: 5, z: -2 }
  }, 3000)
})()
