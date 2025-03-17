import '../../src/style.css'
import { FFixedCamera, FRectangle, FScene } from '@fibbojs/2d'
import { Navbar } from '../../components/Navbar'

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  // Normalize values
  h /= 360
  s /= 100
  l /= 100

  let r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  }
  else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0)
        t += 1
      if (t > 1)
        t -= 1
      if (t < 1 / 6)
        return p + (q - p) * 6 * t
      if (t < 1 / 2)
        return q
      if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

(async () => {
  new Navbar()

  const scene = new FScene()
  await scene.init()
  await scene.initPhysics()

  // Create a matrix to hold the squares
  const matrix = [] as FRectangle[][]

  // Create a grid of 40x40 squares
  const GRID_ROWS = 40
  const GRID_COLS = 40
  const GRID_GAP = 0.5
  for (let i = 0; i < GRID_ROWS; i++) {
    for (let j = 0; j < GRID_COLS; j++) {
      const square = new FRectangle({
        position: { x: i * GRID_GAP - GRID_ROWS * GRID_GAP / 2, y: j * GRID_GAP - GRID_COLS * GRID_GAP / 2 },
        scale: { x: 0.5, y: 0.5 },
        color: 0x2C2C2C,
      })
      square.initSensor()
      square.__CONTAINER__.eventMode = 'static'
      square.__CONTAINER__.on('mouseenter', () => {
        // Color closest squares to the mouse depending on the distance
        square.color = 0x00FF00
        const distance = 8
        for (let x = Math.max(0, i - distance); x <= Math.min(GRID_ROWS - 1, i + distance); x++) {
          for (let y = Math.max(0, j - distance); y <= Math.min(GRID_COLS - 1, j + distance); y++) {
            const dist = Math.sqrt((x - i) ** 2 + (y - j) ** 2)
            if (dist <= distance) {
              // Normalize dist to be between 0 and 1
              const normalizedDist = dist / distance
              // Convert normalized distance to hue (0-360)
              const hue = normalizedDist * 360
              // Convert HSL to RGB
              const rgb = hslToRgb(hue, 90, 70)
              matrix[x][y].color = (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]
            }
          }
        }
      })
      square.__CONTAINER__.on('mouseleave', () => {
        // Reset the color and rotation of all squares
        square.color = 0x2C2C2C
        for (let x = 0; x < GRID_ROWS; x++) {
          for (let y = 0; y < GRID_COLS; y++) {
            matrix[x][y].color = 0x2C2C2C
          }
        }
      })
      if (matrix[i] === undefined)
        matrix[i] = []
      matrix[i][j] = square
    }
  }

  // Create a fixed camera
  scene.camera = new FFixedCamera({
    position: { x: 0, y: -0.2 },
  })
  scene.camera.setZoom(0.5)
})()
