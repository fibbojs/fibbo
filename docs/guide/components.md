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

## Moving a component

When moving a component, you should always use the methods exposed by the component itself (like `setPosition`, `setRotation`, `setScale`).

Not only this is important for consistency, but it also ensures various underlying systems (like the physic engine) are updated correctly.

For example, to move a component to a new position, you should use the `setPosition` method :

```typescript
const cube = new FCube()
cube.setPosition({ x: 1, y: 2, z: 3 })
```
