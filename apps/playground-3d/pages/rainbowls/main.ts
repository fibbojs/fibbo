import '../../src/style.css'
import { FCube, FOrbitCamera, FScene, FSphere } from '@fibbojs/3d'
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
      sphere.mesh.material.color.set(new THREE.Color(0x2C2C2C))

      // Create a cube for the hitbox
      const cube = new FCube(scene)
      cube.setPosition({ x: i * GRID_GAP - GRID_ROWS * GRID_GAP / 2, y: 1, z: j * GRID_GAP - GRID_COLS * GRID_GAP / 2 })
      cube.setScale({ x: GRID_GAP, y: 1, z: GRID_GAP })
      // Make the cube invisible
      // @ts-expect-error Disable typing for the mesh property
      cube.mesh.material.transparent = true
      // @ts-expect-error Disable typing for the mesh property
      cube.mesh.material.opacity = 0
      // Attach coordinates to the cube
      cube.mesh.userData = { x: i, y: j }

      // Add the sphere to the scene
      scene.addComponent(sphere)
      // Add the cube to the scene
      scene.addComponent(cube)

      // Add the sphere to the grid
      grid[i][j] = sphere
    }
  }

  // Create a camera target
  const cameraTarget = new FCube(scene)
  cameraTarget.setPosition({ x: 0, y: 1, z: 0 })
  // Create a camera
  const camera = new FOrbitCamera(cameraTarget)
  camera.setPosition(14, 12, 14)
  camera.lookAt(0, 0, 0)
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
    raycaster.setFromCamera(pointer, scene.camera)

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.scene.children)

    intersects.forEach((intersect) => {
      if (intersect.object.userData && intersect.object.userData.x !== undefined) {
      // Move the spheres back to their original position
        for (let i = 0; i < GRID_ROWS; i++) {
          for (let j = 0; j < GRID_COLS; j++) {
            grid[i][j].mesh.position.lerp(
              new THREE.Vector3(
                grid[i][j].mesh.position.x,
                1,
                grid[i][j].mesh.position.z,
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
              sphere.mesh.material.color.set(new THREE.Color(`hsl(${(distance / RADIUS) * 360}, 90%, 70%)`))
              // Elevate the sphere based on the distance
              sphere.mesh.position.lerp(
                new THREE.Vector3(
                  sphere.mesh.position.x,
                  1 + ELEVATION * (1 - distance / RADIUS),
                  sphere.mesh.position.z,
                )
                , 0.1,
              )
            }
            // @ts-expect-error Disable typing for the mesh property
            else { sphere.mesh.material.color.set(new THREE.Color(0x2C2C2C)) }
          }
        }
      }
    })
  })
})()
