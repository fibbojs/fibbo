import '../../src/style.css'
import { FFixedCamera, FRectangle, FScene } from '@fibbojs/2d'
import { Navbar } from '../../components/Navbar'
import { PerlinNoise } from './PerlinNoise'

// Constants
const chunkSize = 16
const noiseGenerator = new PerlinNoise()
const SQUARE_SCALE = 0.1

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

/**
 * Generate a chunk of perlin noise
 * @param chunk The z coordinate of the chunk
 * @returns A 4D array representing the perlin noise chunk (x, y, z, rgb)
 */
function generateChunk(chunk: number = 0) {
  const noise = [] as number[][][]
  for (let x = 0; x < chunkSize; x++) {
    noise[x] = []
    for (let y = 0; y < chunkSize; y++) {
      noise[x][y] = []
      for (let z = 0; z < chunkSize; z++) {
        noise[x][y][z] = noiseGenerator.getGreyScale((x + chunk * chunkSize) / 8, (y + chunk * chunkSize) / 8, (z + chunk * chunkSize) / 8)
      }
    }
  }
  return noise
}

/**
 * Display a layer of a given chunk of perlin noise
 * @param layer The layer to display
 * @param chunk The chunk of perlin noise
 * @param rectangles The list of rectangles to add the new rectangles to
 */
function displayLayer(layer: number, chunk: number[][][], rectangles: FRectangle[]) {
  for (let x = 0; x < chunkSize; x++) {
    for (let y = 0; y < chunkSize; y++) {
      const grayScale = chunk[x][y][layer]
      // Below 0x555555, the color is the same as the background
      let color
      if (grayScale < 0x666666) {
        color = 0x222324
      }
      // Else the color is a rainbow gradient depending on the gray scale value
      else {
        const [r, g, b] = hslToRgb(grayScale / 0xFFFFFF * 360, 100, 50)
        color = r << 16 | g << 8 | b
      }
      rectangles.push(new FRectangle({
        position: {
          x: (x - chunkSize / 2) * SQUARE_SCALE,
          y: (y - chunkSize / 2) * SQUARE_SCALE,
        },
        scale: { x: SQUARE_SCALE, y: SQUARE_SCALE },
        color,
      }))
    }
  }
}

(async () => {
  new Navbar()

  const scene = new FScene()
  await scene.init()
  await scene.initPhysics()

  /**
   * Generate perlin noise chunk
   */
  let chunk = generateChunk()

  // List of rectangles to display the perlin noise
  const rectangles = [] as FRectangle[]

  // Every 100ms, update the noise to display the next layer
  let currentChunk = 0
  let currentLayer = 0
  setInterval(() => {
    rectangles.forEach(rectangle => scene.removeComponent(rectangle))
    displayLayer(currentLayer, chunk, rectangles)
    currentLayer = (currentLayer + 1) % chunkSize
    // When the layer is 15, generate a new chunk
    if (currentLayer === 0) {
      currentChunk++
      chunk = generateChunk(currentChunk)
    }
  }, 100)

  // Create a fixed camera
  scene.camera = new FFixedCamera({
    position: { x: 0, y: -0.2 },
  })
  scene.camera.setZoom(2)
})()
