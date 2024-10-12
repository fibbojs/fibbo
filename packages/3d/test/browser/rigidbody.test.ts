import { beforeEach, describe, expect, it } from 'vitest'
import RAPIER from '@dimforge/rapier3d'
import { FCuboid, FScene, FShapes } from '../../src'

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
    cuboid.initRigidBody()
    expect(cuboid.rigidBody).toBeDefined()
    // Validate offset
    expect(cuboid.rigidBody.__RIGIDBODY_POSITION_OFFSET__).toEqual({ x: 0, y: 0, z: 0 })
    expect(cuboid.rigidBody.__RIGIDBODY_ROTATION_OFFSET__).toEqual({ x: 0, y: 0, z: 0 })
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(0)
    expect(cuboid.rigidBody.position.y).toEqual(0)
    expect(cuboid.rigidBody.position.z).toEqual(0)
    expect(cuboid.rigidBody.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(1)
    expect(cuboid.rigidBody.scale.y).toEqual(1)
    expect(cuboid.rigidBody.scale.z).toEqual(1)
    expect(cuboid.rigidBody.collider.shape).toEqual(FShapes.CUBOID)
    // Validate scaleX, scaleY and scaleZ
    cuboid.rigidBody.scaleX = 2
    cuboid.rigidBody.scaleY = 3
    cuboid.rigidBody.scaleZ = 4
    expect(cuboid.rigidBody.scaleX).toEqual(2)
    expect(cuboid.rigidBody.scaleY).toEqual(3)
    expect(cuboid.rigidBody.scaleZ).toEqual(4)
    expect(cuboid.rigidBody.scaleX).toEqual(cuboid.rigidBody.scale.x)
    expect(cuboid.rigidBody.scaleY).toEqual(cuboid.rigidBody.scale.y)
    expect(cuboid.rigidBody.scaleZ).toEqual(cuboid.rigidBody.scale.z)
  })

  it('should create a collider with custom transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0.1, y: 0.2, z: 0.3 },
      scale: { x: 1, y: 2, z: 3 },
    })
    cuboid.initRigidBody({
      position: { x: -2, y: 3, z: -4 },
      rotation: { x: -0.3, y: 0.2, z: 0.1 },
      scale: { x: 2, y: 2, z: 2 },
    })
    expect(cuboid.rigidBody).toBeDefined()
    // Validate offset
    expect(cuboid.rigidBody.__RIGIDBODY_POSITION_OFFSET__).toEqual({ x: -2, y: 3, z: -4 })
    expect(cuboid.rigidBody.__RIGIDBODY_ROTATION_OFFSET__).toEqual({ x: -0.3, y: 0.2, z: 0.1 })
    expect(cuboid.rigidBody.collider.__COLLIDER_SCALE_OFFSET__).toEqual({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(-1)
    expect(cuboid.rigidBody.position.y).toEqual(4)
    expect(cuboid.rigidBody.position.z).toEqual(-3)
    expect(cuboid.rigidBody.rotation.x).closeTo(-0.2, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0.4, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(2)
    expect(cuboid.rigidBody.scale.y).toEqual(4)
    expect(cuboid.rigidBody.scale.z).toEqual(6)
  })

  it('should create a collider with a sphere shape', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initRigidBody({
      shape: FShapes.SPHERE,
    })
    expect(cuboid.rigidBody).toBeDefined()
    // Validate shape
    expect(cuboid.rigidBody.collider.shape).toEqual(FShapes.SPHERE)
    expect(cuboid.rigidBody.collider.__COLLIDER__.shape).toBeDefined()
    expect(cuboid.rigidBody.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(0)
    expect(cuboid.rigidBody.position.y).toEqual(0)
    expect(cuboid.rigidBody.position.z).toEqual(0)
    expect(cuboid.rigidBody.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(1)
    expect(cuboid.rigidBody.scale.y).toEqual(1)
    expect(cuboid.rigidBody.scale.z).toEqual(1)
  })

  it('should modify collider transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 0, z: 0 },
      rotation: { x: 0, y: 0.2, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initRigidBody()
    expect(cuboid.rigidBody).toBeDefined()
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(1)
    expect(cuboid.rigidBody.position.y).toEqual(0)
    expect(cuboid.rigidBody.position.z).toEqual(0)
    expect(cuboid.rigidBody.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(1)
    expect(cuboid.rigidBody.scale.y).toEqual(1)
    expect(cuboid.rigidBody.scale.z).toEqual(1)
    // Modify transforms with functions
    cuboid.rigidBody.setPosition({ x: 1, y: 1, z: 1 })
    cuboid.rigidBody.setRotation({ x: 0.1, y: 0.2, z: 0.3 })
    cuboid.rigidBody.setScale({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(1)
    expect(cuboid.rigidBody.position.y).toEqual(1)
    expect(cuboid.rigidBody.position.z).toEqual(1)
    expect(cuboid.rigidBody.rotation.x).closeTo(0.1, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0.3, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(2)
    expect(cuboid.rigidBody.scale.y).toEqual(2)
    expect(cuboid.rigidBody.scale.z).toEqual(2)
    // Modify transforms with setters
    cuboid.rigidBody.position = { x: 2, y: 4, z: 6 }
    cuboid.rigidBody.rotation = { x: 0.2, y: 0.4, z: 0.6 }
    cuboid.rigidBody.scale = { x: 3, y: 4, z: 5 }
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(2)
    expect(cuboid.rigidBody.position.y).toEqual(4)
    expect(cuboid.rigidBody.position.z).toEqual(6)
    expect(cuboid.rigidBody.rotation.x).closeTo(0.2, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0.6, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(3)
    expect(cuboid.rigidBody.scale.y).toEqual(4)
    expect(cuboid.rigidBody.scale.z).toEqual(5)
  })

  it('should modify collider transforms with a sphere shape', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    })
    cuboid.initRigidBody({
      shape: FShapes.SPHERE,
    })
    expect(cuboid.rigidBody).toBeDefined()
    // Validate shape
    expect(cuboid.rigidBody.collider.shape).toEqual(FShapes.SPHERE)
    expect(cuboid.rigidBody.collider.__COLLIDER__.shape).toBeDefined()
    expect(cuboid.rigidBody.collider.__COLLIDER__.shape.type).toEqual(RAPIER.ShapeType.Ball)
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(0)
    expect(cuboid.rigidBody.position.y).toEqual(0)
    expect(cuboid.rigidBody.position.z).toEqual(0)
    expect(cuboid.rigidBody.rotation.x).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(1)
    expect(cuboid.rigidBody.scale.y).toEqual(1)
    expect(cuboid.rigidBody.scale.z).toEqual(1)
    // Modify transforms with functions
    cuboid.rigidBody.setPosition({ x: 1, y: 1, z: 1 })
    cuboid.rigidBody.setRotation({ x: 0.1, y: 0.2, z: 0.3 })
    cuboid.rigidBody.setScale({ x: 2, y: 2, z: 2 })
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(1)
    expect(cuboid.rigidBody.position.y).toEqual(1)
    expect(cuboid.rigidBody.position.z).toEqual(1)
    expect(cuboid.rigidBody.rotation.x).closeTo(0.1, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0.2, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0.3, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(2)
    expect(cuboid.rigidBody.scale.y).toEqual(2)
    expect(cuboid.rigidBody.scale.z).toEqual(2)
    // Modify transforms with setters
    cuboid.rigidBody.position = { x: 2, y: 4, z: 6 }
    cuboid.rigidBody.rotation = { x: 0.2, y: 0.4, z: 0.6 }
    cuboid.rigidBody.scale = { x: 3, y: 5, z: 4 }
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(2)
    expect(cuboid.rigidBody.position.y).toEqual(4)
    expect(cuboid.rigidBody.position.z).toEqual(6)
    expect(cuboid.rigidBody.rotation.x).closeTo(0.2, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0.6, 0.0001)
    // Circle shape has the same scale for x, y and z (the highest value is used)
    expect(cuboid.rigidBody.scale.x).toEqual(5)
    expect(cuboid.rigidBody.scale.y).toEqual(5)
    expect(cuboid.rigidBody.scale.z).toEqual(5)
  })

  it('should update collider transforms with attached component transforms', () => {
    const cuboid = new FCuboid(scene, {
      position: { x: 1, y: 1, z: 1 },
      rotation: { x: 0.1, y: 0.2, z: 0.3 },
      scale: { x: 1, y: 0.5, z: 1 },
    })
    cuboid.initRigidBody({
      position: { x: -2, y: 3, z: -4 },
      rotation: { x: -0.3, y: 0.2, z: 0.1 },
      scale: { x: 2, y: 4, z: 2 },
    })
    expect(cuboid.rigidBody).toBeDefined()
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(-1)
    expect(cuboid.rigidBody.position.y).toEqual(4)
    expect(cuboid.rigidBody.position.z).toEqual(-3)
    expect(cuboid.rigidBody.rotation.x).closeTo(-0.2, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0.4, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0.4, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(2)
    expect(cuboid.rigidBody.scale.y).toEqual(2)
    expect(cuboid.rigidBody.scale.z).toEqual(2)
    // Modify component transforms
    cuboid.setPosition({ x: 2, y: 2, z: 6 })
    cuboid.setRotation({ x: 0.2, y: 0.4, z: 0.6 })
    cuboid.setScale({ x: 3, y: 4, z: 5 })
    // Validate transforms
    expect(cuboid.rigidBody.position.x).toEqual(0)
    expect(cuboid.rigidBody.position.y).toEqual(5)
    expect(cuboid.rigidBody.position.z).toEqual(2)
    expect(cuboid.rigidBody.rotation.x).closeTo(-0.1, 0.0001)
    expect(cuboid.rigidBody.rotation.y).closeTo(0.6, 0.0001)
    expect(cuboid.rigidBody.rotation.z).closeTo(0.7, 0.0001)
    expect(cuboid.rigidBody.scale.x).toEqual(6)
    expect(cuboid.rigidBody.scale.y).toEqual(16)
    expect(cuboid.rigidBody.scale.z).toEqual(10)
  })
})
