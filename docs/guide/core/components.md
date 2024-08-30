# Components

Components are the main building blocks of Fibbo. They are the objects that you can add to a scene, move around, rotate, and interact with.

## What is a component ?

A component is a class that extends the [`FComponent`](/api/core/classes/FComponent) class. It represents an object in a scene, will be rendered, updated, and interacted with.

It is mainly composed of the following attributes :
- [`transform`](/guide/transforms) : The position, rotation, and scale of the object.
- `collider` : (optional) The collider of the object, used for physics interactions.
- `rigidBody` : (optional) The rigid body of the object, used for physics interactions.
- `sensor` : (optional) The sensor of the object, used for detecting and emitting collisions events.

And the following methods :
- `onFrame` : Called every frame by the [Scene](/guide/scene) to update the component.
- `initCollider` : Initialize the collider of the object.
- `initRigidBody` : Initialize the rigid body of the object.
- `initSensor` : Initialize the sensor of the object.
- Various methods to modify the transform of the object.
  - `setPosition` : Set the position of the object.
  - `setRotation` : Set the rotation of the object.
  - `setScale` : Set the scale of the object.

## Creating a component

To create a component, you can just import it and create a new instance :

```typescript
import { FCube } from '@fibbojs/3d'

const cube = new FCube()
```

This will create a new cube component, that can be added to a [Scene](/guide/scene) (which we'll see in the next section).

Basic options can be passed to the constructor :

```typescript
import { FCube } from '@fibbojs/3d'

const cube = new FCube({
  position: { x: 1, y: 2, z: 3 },
  scale: { x: 2, y: 2, z: 2 },
  rotation: { x: 0, y: 0, z: 0 }
  // also available as rotationDegree: { x: 0, y: 0, z: 0 }
})
```

## Getters and setters

For convenience, components expose getters and setters for interacting with their [transform](/guide/transforms).

```typescript
const cube = new FCube()

// Get the position of the cube
const position = cube.x

// Set the position of the cube
cube.x = 1
```

This is especially useful when you want to use things like [2-way data binding](https://en.wikipedia.org/wiki/Data_binding#Two-way_data_binding) in modern UI libraries (e.g. React, Vue, Angular,...).

For example, in Vue, you could bind the position of a cube to a `v-model` :
```vue
<template>
  <div>
    <input v-model="cube.x" type="number">
    <input v-model="cube.y" type="number">
    <input v-model="cube.z" type="number">
  </div>
</template>
```

You can check the [API documentation](/api) for more information on the available getters and setters : [here for a 3D component](/api/3d/classes/FComponent) or [here for a 2D component](/api/2d/classes/FComponent).
