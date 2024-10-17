import '../../src/style.css'
import { FCuboid, FOrbitCamera, FScene, FSphere } from '@fibbojs/3d'
import * as THREE from 'three'

(async () => {
  const scene = new FScene()
  scene.init()

  // Define the radius for the rainbow effect
  const RADIUS = 5
  const ELEVATION = 5

  // Create a sphere grid of given size
  const grid: FSphere[][] = []
  const GRID_ROWS = 20
  const GRID_COLS = 20
  const GRID_GAP = 1.5

  for (let i = 0; i < GRID_ROWS; i++) {
    grid[i] = []
    for (let j = 0; j < GRID_COLS; j++) {
    // Create the sphere to display
      const sphere = new FSphere(scene)
      sphere.setPosition({ x: i * GRID_GAP - GRID_ROWS * GRID_GAP / 2, y: 1, z: j * GRID_GAP - GRID_COLS * GRID_GAP / 2 })
      // @ts-expect-error Disable typing for the mesh property
      sphere.__MESH__.material.color.set(new THREE.Color(0x2C2C2C))

      // Create a cube for the hitbox
      const cube = new FCuboid(scene)
      cube.setPosition({ x: i * GRID_GAP - GRID_ROWS * GRID_GAP / 2, y: 1, z: j * GRID_GAP - GRID_COLS * GRID_GAP / 2 })
      cube.setScale({ x: GRID_GAP, y: 1, z: GRID_GAP })
      // Make the cube invisible
      // @ts-expect-error Disable typing for the mesh property
      cube.__MESH__.material.transparent = true
      // @ts-expect-error Disable typing for the mesh property
      cube.__MESH__.material.opacity = 0
      // Attach coordinates to the cube
      cube.__MESH__.userData = { x: i, y: j }

      // Add the sphere to the scene
      scene.addComponent(sphere)
      // Add the cube to the scene
      scene.addComponent(cube)

      // Add the sphere to the grid
      grid[i][j] = sphere
    }
  }

  // Create a camera target
  const cameraTarget = new FCuboid(scene)
  cameraTarget.setPosition({ x: 0, y: 1, z: 0 })
  // Create a camera
  const camera = new FOrbitCamera(scene, {
    target: cameraTarget,
  })
  camera.setPosition({ x: 14, y: 12, z: 14 })
  camera.lookAt({ x: 0, y: 0, z: 0 })
  scene.camera = camera

  // Create raycaster and pointer
  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()

  // Detect mouse movement
  document.addEventListener('mousemove', (event) => {
  // Define pointer position
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1

    // Update the picking ray with the camera and pointer position
    raycaster.setFromCamera(pointer, scene.camera as unknown as THREE.Camera)

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.scene.children as unknown as THREE.Object3D[])

    intersects.forEach((intersect) => {
      if (intersect.object.userData && intersect.object.userData.x !== undefined) {
      // Move the spheres back to their original position
        for (let i = 0; i < GRID_ROWS; i++) {
          for (let j = 0; j < GRID_COLS; j++) {
            grid[i][j].__MESH__.position.lerp(
              new THREE.Vector3(
                grid[i][j].__MESH__.position.x,
                1,
                grid[i][j].__MESH__.position.z,
              )
              , 0.1,
            )
          }
        }

        // Get all spheres within the radius
        for (let i = 0; i < GRID_ROWS; i++) {
          for (let j = 0; j < GRID_COLS; j++) {
            const sphere = grid[i][j]
            const mousePoint = {
              x: intersect.point.x / GRID_GAP + GRID_ROWS / 2,
              z: intersect.point.z / GRID_GAP + GRID_COLS / 2,
            }
            const distance = Math.sqrt((mousePoint.x - i) ** 2 + (mousePoint.z - j) ** 2)
            if (distance < RADIUS) {
            // Change the color of the sphere based on the distance
            // @ts-expect-error Disable typing for the mesh property
              sphere.__MESH__.material.color.set(new THREE.Color(`hsl(${(distance / RADIUS) * 360}, 90%, 70%)`))
              // Elevate the sphere based on the distance
              sphere.__MESH__.position.lerp(
                new THREE.Vector3(
                  sphere.__MESH__.position.x,
                  1 + ELEVATION * (1 - distance / RADIUS),
                  sphere.__MESH__.position.z,
                )
                , 0.1,
              )
            }
            // @ts-expect-error Disable typing for the mesh property
            else { sphere.__MESH__.material.color.set(new THREE.Color(0x2C2C2C)) }
          }
        }
      }
    })
  })
})()
