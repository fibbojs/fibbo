import { beforeEach, describe, expect, it } from 'vitest'
import { FRectangle, FScene } from '@fibbojs/2d'

describe('fCollider', () => {
  let scene: FScene

  beforeEach(async () => {
    scene = new FScene()
    await scene.init()
    await scene.initPhysics()
  })

  it('should create a collider with default options', () => {
    const rectangle = new FRectangle(scene)
    rectangle.initCollider()
    expect(rectangle.collider).toBeDefined()
  })
})
