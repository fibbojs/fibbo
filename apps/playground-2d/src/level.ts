import type { FScene } from '@fibbojs/2d'
import { FSprite } from '@fibbojs/2d'

function addBelowGround(scene: FScene, position: { x: number, y: number }) {
  const ground = new FSprite(scene, {
    texture: 'ground_0122.jpeg',
    position,
  })
  ground.initCollider()
  scene.addComponent(ground)
}

function addGround(scene: FScene, position: { x: number, y: number }) {
  const ground = new FSprite(scene, {
    texture: 'ground_0022.png',
    position,
  })
  ground.initCollider()
  scene.addComponent(ground)
}

function addBackground(scene: FScene, position: { x: number, y: number }) {
  const background = new FSprite(scene, {
    texture: 'background_0000.jpg',
    position,
  })
  background.onLoaded(() => {
    background.container.zIndex = -1
  })
  scene.addComponent(background)
}

function addBackgroundDark(scene: FScene, position: { x: number, y: number }) {
  const background = new FSprite(scene, {
    texture: 'background_0016.png',
    position,
  })
  background.onLoaded(() => {
    background.container.zIndex = -1
  })
  scene.addComponent(background)
}

function addBackgroundVariation(scene: FScene, position: { x: number, y: number }, variation = 0) {
  const background = new FSprite(scene, {
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
    background.container.zIndex = -1
  })
  scene.addComponent(background)
}

export function loadLevel(scene: FScene) {
  // Create the ground
  for (let x = 0; x < 10; x++) {
    addGround(scene, { x: x - 4.5, y: -1 })
  }
  for (let x = 0; x < 10; x++) {
    addBelowGround(scene, { x: x - 4.5, y: -2 })
  }
  // Add left border
  addGround(scene, { x: -5.5, y: 0 })

  // Add platforms
  addGround(scene, { x: 6, y: 3 })
  addGround(scene, { x: 7, y: 3 })

  // Add background
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (y === 6) {
        addBackgroundVariation(scene, { x: x - 4.5, y: y - 4.5 }, x % 4)
      }
      else {
        if (y < 6) {
          addBackgroundDark(scene, { x: x - 4.5, y: y - 4.5 })
        }
        else {
          addBackground(scene, { x: x - 4.5, y: y - 4.5 })
        }
      }
    }
  }
}
