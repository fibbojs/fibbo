# Transforms

In most game engines, a transform is an object responsible for handling the position, rotation, and scale of a component in the scene.

In Fibbo, each component (sprites, lights, cameras, ...) or physic object (colliders, rigidbodies, ...) has a `transform` property that exposes these attributes.

The transform is meant to be accessed and modified using getters and setters.

You can find the API reference for a [2d transform here](/api/2d/classes/FTransform) and for a [3d transform here](/api/3d/classes/FTransform).

::: warning
For now, transforms are not deeply reactive, so you need to use the provided setters to update the values. For example :
- `transform.position = { x: 1, y: 2 }` is reactive
- `transform.x = 1` is reactive
- `transform.position.x = 1` is **NOT** reactive
:::

## Position

The position of an object is a 2D/3D vector that represents its location in the scene. For more information on the unit system, see the [fundamentals](/guide/fundamentals#unit-system) section.

You can set the position as follows :

::: code-group

```typescript [2d]
const rectangle = new FRectangle()
rectangle.transform.position = { x: 1, y: 2 }
// Or using the function directly :
rectangle.transform.setPosition({ x: 1, y: 2 })
// Accessing a specific axis :
rectangle.transform.x = 1
rectangle.transform.y = 2
```

```typescript [3d]
const cube = new FCuboid()
cube.transform.position = { x: 1, y: 2, z: 3 }
// Or using the function directly :
cube.transform.setPosition({ x: 1, y: 2, z: 3 })
// Accessing a specific axis :
cube.transform.x = 1
cube.transform.y = 2
cube.transform.z = 3
```

:::

## Rotation

The rotation of an object is a either a number (in 2D scenes) or a 3D vector (in 3D scenes) that represents its orientation in the scene. The rotation is expressed in [radians](https://en.wikipedia.org/wiki/Radian).

You can set the rotation as follows :

::: code-group

```typescript [2d]
const rectangle = new FRectangle()
rectangle.transform.rotation = Math.PI / 2
// Or using the function directly :
rectangle.transform.setRotation(Math.PI / 2)
```

```typescript [3d]
const cube = new FCuboid()
cube.transform.rotation = { x: Math.PI / 2, y: Math.PI / 2, z: Math.PI / 2 }
// Or using the function directly :
cube.transform.setRotation({ x: Math.PI / 2, y: Math.PI / 2, z: Math.PI / 2 })
// Accessing a specific axis :
cube.transform.rotationX = Math.PI / 2
cube.transform.rotationY = Math.PI / 2
cube.transform.rotationZ = Math.PI / 2
```

:::

Alternatively, you can use the `rotationDegree` property to set the rotation in degrees :

::: code-group

```typescript [2d]
const rectangle = new FRectangle()
rectangle.transform.rotationDegree = 90
// Or using the function directly :
rectangle.transform.setRotationDegree(90)
```

```typescript [3d]
const cube = new FCuboid()
cube.transform.rotationDegree = { x: 90, y: 90, z: 90 }
// Or using the function directly :
cube.transform.setRotationDegree({ x: 90, y: 90, z: 90 })
// Accessing a specific axis :
cube.transform.rotationDegreeX = 90
cube.transform.rotationDegreeY = 90
cube.transform.rotationDegreeZ = 90
```

:::

## Scale

The scale of an object is a 2D/3D vector that represents its size in the scene. For more information on the units system, see the [fundamentals](/guide/fundamentals#unit-system) section.

You can set the scale as follows :

::: code-group

```typescript [2d]
const rectangle = new FRectangle()
rectangle.transform.scale = { x: 2, y: 2 }
// Or using the function directly :
rectangle.transform.setScale({ x: 2, y: 2 })
// Accessing a specific axis :
rectangle.transform.scaleX = 2
rectangle.transform.scaleY = 2
```

```typescript [3d]
const cube = new FCuboid()
cube.transform.scale = { x: 2, y: 2, z: 2 }
// Or using the function directly :
cube.transform.setScale({ x: 2, y: 2, z: 2 })
// Accessing a specific axis :
cube.transform.scaleX = 2
cube.transform.scaleY = 2
cube.transform.scaleZ = 2
```

:::
