# Transforms

In most game engines, a transform is an object responsible for handling the position, rotation, and scale of a component in the scene.

In Fibbo, each component has a `transform` property that exposes these attributes.

However you should not modify the transform directly, but use the provided methods instead.

You can find the API reference for a [2d transform here](/api/2d/classes/FTransform) and for a [3d transform here](/api/3d/classes/FTransform).

## Position

The position of an object is a 2D/3D vector that represents its location in the scene. For more information on the unit system, see the [fundamentals](/guide/fundamentals#unit-system) section.

You can set the position as follows :

```typescript
const cube = new FCuboid()
cube.setPosition({ x: 1, y: 2, z: 3 })
// Or using the setter :
cube.position = { x: 1, y: 2, z: 3 }
```

You can also get the position of an object using the `position` property :

```typescript
const position = cube.position
```

## Rotation

The rotation of an object is a either a number (in 2D scenes) or a 3D vector (in 3D scenes) that represents its orientation in the scene. The rotation is expressed in [radians](https://en.wikipedia.org/wiki/Radian).

You can set the rotation as follows :

```typescript
const cube = new FCuboid()
cube.setRotation({ x: 0, y: 0.7853981634, z: 0 })
// Or using the setter :
cube.rotation = { x: 0, y: 0.7853981634, z: 0 }
```

You can also get the rotation of an object using the `rotation` property :

```typescript
const rotation = cube.rotation
```

In most cases, you'll want to use the `rotationDegree` alternative, which helps you set the rotation in degrees :

```typescript
cube.setRotationDegree({ x: 0, y: 45, z: 0 })
cube.rotationDegree = { x: 0, y: 45, z: 0 }
const rotationDegree = cube.rotationDegree
```

## Scale

The scale of an object is a 2D/3D vector that represents its size in the scene. For more information on the units system, see the [fundamentals](/guide/fundamentals#unit-system) section.

You can set the scale as follows :

```typescript
const cube = new FCuboid()
cube.setScale({ x: 2, y: 2, z: 2 })
// Or using the setter :
cube.scale = { x: 2, y: 2, z: 2 }
```

You can also get the scale of an object using the `scale` property :

```typescript
const scale = cube.scale
```
