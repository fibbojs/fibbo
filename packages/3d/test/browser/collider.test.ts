import { beforeEach, describe, expect, it } from 'vitest'
import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d'
import { FCuboid, FScene, FShapes } from '../../src'

function validateRapierCollider(collider: RAPIER.Collider, transform: {
  position: { x: number, y: number, z: number }
  rotation: { x: number, y: number, z: number }
  scale: { x: number, y: number, z: number }
  shape: RAPIER.ShapeType
}) {
  // Validate RAPIER collider
  expect(collider).toBeDefined()
  expect(collider.translation().x).toEqual(transform.position.x)
  expect(collider.translation().y).toEqual(transform.position.y)
  expect(collider.translation().z).toEqual(transform.position.z)
  const quaternion = collider.rotation()
  const rotation = new THREE.Euler().setFromQuaternion(new THREE.Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w))
  expect(rotation.x).closeTo(transform.rotation.x, 0.0001)
  expect(rotation.y).closeTo(transform.rotation.y, 0.0001)
  expect(rotation.z).closeTo(transform.rotation.z, 0.0001)
  expect(collider.shape).toBeDefined()
  expect(collider.shape.type).toEqual(transform.shape)
  if (transform.shape === RAPIER.ShapeType.Cuboid) {
    const colliderShape = collider.shape as RAPIER.Cuboid
    expect(colliderShape.halfExtents.x).toEqual(transform.scale.x)
    expect(colliderShape.halfExtents.y).toEqual(transform.scale.y)
    expect(colliderShape.halfExtents.z).toEqual(transform.scale.z)
  }
  else if (transform.shape === RAPIER.ShapeType.Ball) {
    const colliderShape = collider.shape as RAPIER.Ball
    expect(colliderShape.radius).toEqual(transform.scale.x)
  }
}

describe('fCollider', () => {
  let scene: FScene

  beforeEach(async () => {
    scene = new FScene({
      autoLoop: false,
    })
    await scene.init()
    await scene.initPhysics()
  })

  it('should create a collider with default options', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initCollider()
    expect(cuboid.collider).toBeDefined()
    if (!cuboid.collider)
      return
    // Validate offset
    expect(cuboid.collider.offset.position).toEqual({ x: 0, y: 0, z: 0 })
    expect(cuboid.collider.offset.rotation).toEqual({ x: 0, y: 0, z: 0 })
    expect(cuboid.collider.offset.scale).toEqual({ x: 0, y: 0, z: 0 })
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(0)
    expect(cuboid.collider.transform.position.y).toEqual(0)
    expect(cuboid.collider.transform.position.z).toEqual(0)
    expect(cuboid.collider.transform.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(1)
    expect(cuboid.collider.transform.scale.y).toEqual(1)
    expect(cuboid.collider.transform.scale.z).toEqual(1)
    expect(cuboid.collider.shape).toEqual(FShapes.CUBOID)
    // Validate scaleX, scaleY and scaleZ
    cuboid.collider.transform.scaleX = 2
    cuboid.collider.transform.scaleY = 3
    cuboid.collider.transform.scaleZ = 4
    expect(cuboid.collider.transform.scaleX).toEqual(2)
    expect(cuboid.collider.transform.scaleY).toEqual(3)
    expect(cuboid.collider.transform.scaleZ).toEqual(4)
    expect(cuboid.collider.transform.scaleX).toEqual(cuboid.collider.transform.scale.x)
    expect(cuboid.collider.transform.scaleY).toEqual(cuboid.collider.transform.scale.y)
    expect(cuboid.collider.transform.scaleZ).toEqual(cuboid.collider.transform.scale.z)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1.5, z: 2 },
      shape: RAPIER.ShapeType.Cuboid,
    })
  })

  it('should create a collider with custom transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0.1, y: 0.2, z: 0.3 },
      scale: { x: 1, y: 2, z: 3 },
    })
    cuboid.initCollider({
      positionOffset: { x: -2, y: 3, z: -4 },
      rotationOffset: { x: -0.3, y: 0.2, z: 0.1 },
      scaleOffset: { x: 2, y: 2, z: 2 },
    })
    expect(cuboid.collider).toBeDefined()
    if (!cuboid.collider)
      return
    // Validate offset
    expect(cuboid.collider.offset.position).toEqual({ x: -2, y: 3, z: -4 })
    expect(cuboid.collider.offset.rotation).toEqual({ x: -0.3, y: 0.2, z: 0.1 })
    expect(cuboid.collider.offset.scale).toEqual({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(-1)
    expect(cuboid.collider.transform.position.y).toEqual(4)
    expect(cuboid.collider.transform.position.z).toEqual(-3)
    expect(cuboid.collider.transform.rotation.x).closeTo(-0.2, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0.4, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(3)
    expect(cuboid.collider.transform.scale.y).toEqual(4)
    expect(cuboid.collider.transform.scale.z).toEqual(5)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: -1, y: 4, z: -3 },
      rotation: { x: -0.2, y: 0.4, z: 0.4 },
      scale: { x: 1.5, y: 2, z: 2.5 },
      shape: RAPIER.ShapeType.Cuboid,
    })
  })

  it('should create a collider with a sphere shape', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initCollider({
      shape: FShapes.SPHERE,
    })
    expect(cuboid.collider).toBeDefined()
    if (!cuboid.collider)
      return
    // Validate shape
    expect(cuboid.collider.shape).toEqual(FShapes.SPHERE)
    expect(cuboid.collider.__COLLIDER__.shape).toBeDefined()
    expect(cuboid.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(0)
    expect(cuboid.collider.transform.position.y).toEqual(0)
    expect(cuboid.collider.transform.position.z).toEqual(0)
    expect(cuboid.collider.transform.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(1)
    expect(cuboid.collider.transform.scale.y).toEqual(1)
    expect(cuboid.collider.transform.scale.z).toEqual(1)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      shape: RAPIER.ShapeType.Ball,
    })
  })

  it('should modify collider transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 0, z: 0 },
      rotation: { x: 0, y: 0.2, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initCollider()
    expect(cuboid.collider).toBeDefined()
    if (!cuboid.collider)
      return
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(1)
    expect(cuboid.collider.transform.position.y).toEqual(0)
    expect(cuboid.collider.transform.position.z).toEqual(0)
    expect(cuboid.collider.transform.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(1)
    expect(cuboid.collider.transform.scale.y).toEqual(1)
    expect(cuboid.collider.transform.scale.z).toEqual(1)
    // Modify transforms with functions
    cuboid.collider.transform.setPosition({ x: 1, y: 1, z: 1 })
    cuboid.collider.transform.setRotation({ x: 0.1, y: 0.2, z: 0.3 })
    cuboid.collider.transform.setScale({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(1)
    expect(cuboid.collider.transform.position.y).toEqual(1)
    expect(cuboid.collider.transform.position.z).toEqual(1)
    expect(cuboid.collider.transform.rotation.x).closeTo(0.1, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0.3, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(2)
    expect(cuboid.collider.transform.scale.y).toEqual(2)
    expect(cuboid.collider.transform.scale.z).toEqual(2)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0.1, y: 0.2, z: 0.3 },
      scale: { x: 1, y: 1, z: 1 },
      shape: RAPIER.ShapeType.Cuboid,
    })
    // Modify transforms with setters
    cuboid.collider.transform.position = { x: 2, y: 4, z: 6 }
    cuboid.collider.transform.rotation = { x: 0.2, y: 0.4, z: 0.6 }
    cuboid.collider.transform.scale = { x: 3, y: 4, z: 5 }
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(2)
    expect(cuboid.collider.transform.position.y).toEqual(4)
    expect(cuboid.collider.transform.position.z).toEqual(6)
    expect(cuboid.collider.transform.rotation.x).closeTo(0.2, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0.6, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(3)
    expect(cuboid.collider.transform.scale.y).toEqual(4)
    expect(cuboid.collider.transform.scale.z).toEqual(5)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: 2, y: 4, z: 6 },
      rotation: { x: 0.2, y: 0.4, z: 0.6 },
      scale: { x: 1.5, y: 2, z: 2.5 },
      shape: RAPIER.ShapeType.Cuboid,
    })
  })

  it('should modify collider transforms with a sphere shape', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initCollider({
      shape: FShapes.SPHERE,
    })
    expect(cuboid.collider).toBeDefined()
    if (!cuboid.collider)
      return
    // Validate shape
    expect(cuboid.collider.shape).toEqual(FShapes.SPHERE)
    expect(cuboid.collider.__COLLIDER__.shape).toBeDefined()
    expect(cuboid.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(0)
    expect(cuboid.collider.transform.position.y).toEqual(0)
    expect(cuboid.collider.transform.position.z).toEqual(0)
    expect(cuboid.collider.transform.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(1)
    expect(cuboid.collider.transform.scale.y).toEqual(1)
    expect(cuboid.collider.transform.scale.z).toEqual(1)
    // Modify transforms with functions
    cuboid.collider.transform.setPosition({ x: 1, y: 1, z: 1 })
    cuboid.collider.transform.setRotation({ x: 0.1, y: 0.2, z: 0.3 })
    cuboid.collider.transform.setScale({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(1)
    expect(cuboid.collider.transform.position.y).toEqual(1)
    expect(cuboid.collider.transform.position.z).toEqual(1)
    expect(cuboid.collider.transform.rotation.x).closeTo(0.1, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0.3, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(2)
    expect(cuboid.collider.transform.scale.y).toEqual(2)
    expect(cuboid.collider.transform.scale.z).toEqual(2)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0.1, y: 0.2, z: 0.3 },
      scale: { x: 1, y: 1, z: 1 },
      shape: RAPIER.ShapeType.Ball,
    })
    // Modify transforms with setters
    cuboid.collider.transform.position = { x: 2, y: 4, z: 6 }
    cuboid.collider.transform.rotation = { x: 0.2, y: 0.4, z: 0.6 }
    cuboid.collider.transform.scale = { x: 3, y: 5, z: 4 }
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(2)
    expect(cuboid.collider.transform.position.y).toEqual(4)
    expect(cuboid.collider.transform.position.z).toEqual(6)
    expect(cuboid.collider.transform.rotation.x).closeTo(0.2, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0.6, 0.0001)
    // Sphere shape has the same scale for x, y and z (the highest value is used)
    expect(cuboid.collider.transform.scale.x).toEqual(5)
    expect(cuboid.collider.transform.scale.y).toEqual(5)
    expect(cuboid.collider.transform.scale.z).toEqual(5)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: 2, y: 4, z: 6 },
      rotation: { x: 0.2, y: 0.4, z: 0.6 },
      scale: { x: 2.5, y: 2.5, z: 2.5 },
      shape: RAPIER.ShapeType.Ball,
    })
  })

  it('should update collider transforms with attached component transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0.1, y: 0.2, z: 0.3 },
      scale: { x: 1, y: 0.5, z: 1 },
    })
    cuboid.initCollider({
      positionOffset: { x: -2, y: 3, z: -4 },
      rotationOffset: { x: -0.3, y: 0.2, z: 0.1 },
      scaleOffset: { x: 2, y: 4, z: 2 },
    })
    expect(cuboid.collider).toBeDefined()
    if (!cuboid.collider)
      return
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(-1)
    expect(cuboid.collider.transform.position.y).toEqual(4)
    expect(cuboid.collider.transform.position.z).toEqual(-3)
    expect(cuboid.collider.transform.rotation.x).closeTo(-0.2, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0.4, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(3)
    expect(cuboid.collider.transform.scale.y).toEqual(4.5)
    expect(cuboid.collider.transform.scale.z).toEqual(3)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: -1, y: 4, z: -3 },
      rotation: { x: -0.2, y: 0.4, z: 0.4 },
      scale: { x: 1.5, y: 2.25, z: 1.5 },
      shape: RAPIER.ShapeType.Cuboid,
    })
    // Modify component transforms
    cuboid.transform.setPosition({ x: 2, y: 2, z: 6 })
    cuboid.transform.setRotation({ x: 0.2, y: 0.4, z: 0.6 })
    cuboid.transform.setScale({ x: 3, y: 4, z: 5 })
    // Validate transforms
    expect(cuboid.collider.transform.position.x).toEqual(0)
    expect(cuboid.collider.transform.position.y).toEqual(5)
    expect(cuboid.collider.transform.position.z).toEqual(2)
    expect(cuboid.collider.transform.rotation.x).closeTo(-0.1, 0.0001)
    expect(cuboid.collider.transform.rotation.y).closeTo(0.6, 0.0001)
    expect(cuboid.collider.transform.rotation.z).closeTo(0.7, 0.0001)
    expect(cuboid.collider.transform.scale.x).toEqual(5)
    expect(cuboid.collider.transform.scale.y).toEqual(8)
    expect(cuboid.collider.transform.scale.z).toEqual(7)
    // Validate RAPIER collider
    validateRapierCollider(cuboid.collider.__COLLIDER__, {
      position: { x: 0, y: 5, z: 2 },
      rotation: { x: -0.1, y: 0.6, z: 0.7 },
      scale: { x: 2.5, y: 4, z: 3.5 },
      shape: RAPIER.ShapeType.Cuboid,
    })
  })
})
