import { FSprite } from '@fibbojs/2d'

function addBelowGround(position: { x: number, y: number }) {
  const ground = new FSprite({
    texture: 'ground_0122.jpeg',
    position,
  })
  ground.initCollider()
}

function addGround(position: { x: number, y: number }) {
  const ground = new FSprite({
    texture: 'ground_0022.png',
    position,
  })
  ground.initCollider()
}

function addBackground(position: { x: number, y: number }) {
  const background = new FSprite({
    texture: 'background_0000.jpg',
    position,
  })
  background.onLoaded(() => {
    background.__CONTAINER__.zIndex = -1
  })
}

function addBackgroundDark(position: { x: number, y: number }) {
  const background = new FSprite({
    texture: 'background_0016.png',
    position,
  })
  background.onLoaded(() => {
    background.__CONTAINER__.zIndex = -1
  })
}

function addBackgroundVariation(position: { x: number, y: number }, variation = 0) {
  const background = new FSprite({
    texture: variation === 0
      ? 'background_0008.webp'
      : variation === 1
        ? 'background_0009.png'
        : variation === 2
          ? 'background_0010.png'
          : 'background_0011.png',
    position,
  })
  background.onLoaded(() => {
    background.__CONTAINER__.zIndex = -1
  })
}

export function loadLevel() {
  // Create the ground
  for (let x = 0; x < 10; x++) {
    addGround({ x: x - 4.5, y: -1 })
  }
  for (let x = 0; x < 10; x++) {
    addBelowGround({ x: x - 4.5, y: -2 })
  }
  // Add left border
  addGround({ x: -5.5, y: 0 })

  // Add platforms
  addGround({ x: 6, y: 3 })
  addGround({ x: 7, y: 3 })

  // Add background
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (y === 6) {
        addBackgroundVariation({ x: x - 4.5, y: y - 4.5 }, x % 4)
      }
      else {
        if (y < 6) {
          addBackgroundDark({ x: x - 4.5, y: y - 4.5 })
        }
        else {
          addBackground({ x: x - 4.5, y: y - 4.5 })
        }
      }
    }
  }
}
