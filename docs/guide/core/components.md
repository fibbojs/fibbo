# Components

Components are the main building blocks of Fibbo. They are the objects that you can add to a scene, move around, rotate, and interact with.

## What is a component ?

A component is a class that extends the [`FComponent`](/api/core/classes/FComponent) class. It represents an object in a scene, will be rendered, updated, and interacted with.

It is mainly composed of the following attributes :
- [`transform`](/guide/core/transforms) : The position, rotation, and scale of the component. It can be accessed and modified using getters and setters.
- [`collider`](/guide/physics/colliders) : (optional) The collider of the component, used for physics interactions.
- [`rigidBody`](/guide/physics/rigidbody) : (optional) The rigidBody of the component, used for physics interactions.
- [`sensor`](/guide/events/collisions) : (optional) The sensor of the component, used for detecting and emitting collisions events.

And the following methods :
- `frame` : Called every frame by the [Scene](/guide/scene) to update the component.
- `onFrame` : A method that takes a callback to be called every frame.
- `initCollider` : Initialize the collider of the component.
- `initRigidBody` : Initialize the rigidBody of the component.
- `initSensor` : Initialize the sensor of the component.

## Creating a component

To create a component, you can just import it and create a new instance :

::: code-group

```typescript [2d]
import { FRectangle } from '@fibbojs/2d'

const rectangle = new FRectangle(scene)
```

```typescript [3d]
import { FCuboid } from '@fibbojs/3d'

const cube = new FCuboid(scene)
```

:::

This will create a new component, that will automatically be added to the scene you passed as an argument.

Various options can be passed to the constructor :

::: code-group

```typescript [2d]
import { FRectangle } from '@fibbojs/2d'

const cube = new FRectangle(scene, {
  position: { x: 1, y: 2 },
  rotation: 0,
  rotationDegree: 0,
  scale: { x: 2, y: 2 },
})
```

```typescript [3d]
import { FCuboid } from '@fibbojs/3d'

const cube = new FCuboid(scene, {
  position: { x: 1, y: 2, z: 3 },
  rotation: { x: 0, y: 0, z: 0 },
  rotationDegree: { x: 0, y: 0, z: 0 },
  scale: { x: 2, y: 2, z: 2 },
})
```

:::
