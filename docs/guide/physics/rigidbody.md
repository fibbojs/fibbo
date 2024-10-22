# RigidBody

The real-time simulation of rigidBodies subjected to forces and contacts is the main feature of a physics engine. rigidBodies are responsible for the dynamics and kinematics of a solid.

rigidBodies are typically used to simulate the dynamics of non-deformable solids as well as to integrate the trajectory of solids which velocities are controlled by the user (e.g. moving platforms).

On the other hand, rigidBodies are not enough to simulate, e.g., cars, ragdolls, or robotic systems, as those use-cases require adding restrictions on the relative motion between their parts using [joints](/guide/physics/joints).

## Relation with colliders

A [collider](/guide/physics/colliders) can be attached to a rigidBody to specify its shape and enable collision-detection.

A rigidBody without collider attached to it will not be affected by contacts (because there is no shape to compute contact against).

::: tip
By default, Fibbo always create a collider when a rigidBody is created.
:::

## Types of RigidBody

There are 4 types of rigidbody :

- Dynamic (`FRigidBodyType.DYNAMIC`) : Indicates that the body is affected by external forces and contacts. This is the one used for objects affeted by gravity, forces, etc.
- Fixed (`FRigidBodyType.FIXED`) : Indicates the body cannot move. It acts as if it has an infinite mass and will not be affected by any force. It will continue to collide with dynamic bodies but not with fixed nor with kinematic bodies. This is typically used for the ground or for temporarily freezing a body.
- Kinematic Position Based (`FRigidBodyType.KINEMATIC_POSITION_BASED`): Indicates that the body position must not be altered by the physics engine. The user is free to set its next position and the body velocity will be deduced at each update accordingly to ensure a realistic behavior of dynamic bodies in contact with it. This is typically used for moving characters, platforms, elevators, etc.
- Kinematic Velocity Based (`FRigidBodyType.KINEMATIC_VELOCITY_BASED`): Indicates that the body velocity must not be altered by the physics engine. The user is free to set its velocity and the next body position will be deduced at each update accordingly to ensure a realistic behavior of dynamic bodies in contact with it. This is typically used for moving characters, platforms, elevators, etc.

## Adding a rigidBody to a component

Every [`FComponent`](/api/core/classes/FComponent) has a [`initRigidBody`](/api/3d/classes/FComponent#initrigidbody) method that allows you to create a rigidBody and attach it to the component directly.

::: code-group

```typescript [2d]
import { FRectangle, FShapes } from '@fibbojs/2d'

const rectangle = new FRectangle(scene)
rectangle.initRigidBody({
  positionOffset: { x: 0, y: 0 },
  rotationOffset: 0,
  rotationDegreeOffset: 0,
  scaleOffset: { x: 1, y: 1 },
  shape: FShapes.CUBE,
  rigidBodyType: FRigidBodyType.DYNAMIC
})
```

```typescript [3d]
import { FCuboid, FShapes } from '@fibbojs/3d'

const cube = new FCuboid(scene)
cube.initRigidBody({
  positionOffset: { x: 0, y: 0, z: 0 },
  rotationOffset: { x: 0, y: 0, z: 0 },
  rotationDegreeOffset: { x: 0, y: 0, z: 0 },
  scaleOffset: { x: 1, y: 1, z: 1 },
  shape: FShapes.CUBE,
  rigidBodyType: FRigidBodyType.DYNAMIC
})
```

:::

Apart from the classic [transform](/guide/core/transforms) properties, the `initRigidBody` method accepts the following parameters :
- `position` : The position of the rigidBody.
- `rotation` : The rotation of the rigidBody.
- `rotationDegree` : The rotation of the rigidBody in degrees.
- `scale` : The scale of the rigidBody.
- `positionOffset` : The offset of the position of the rigidBody.
- `rotationOffset` : The offset of the rotation of the rigidBody.
- `rotationDegreeOffset` : The offset of the rotation of the rigidBody in degrees.
- `scaleOffset` : The offset of the scale of the rigidBody.
- `shape` : The shape of the collider attached to the rigidBody. This is required to compute contacts.
- `rigidBodyType` : The type of the rigidBody.
- `lockTranslations` : A boolean indicating if the translations of the rigidBody should be locked.
- `enabledTranslations` : An object containing the enabled translations of the rigidBody.
  - `enableX` : A boolean indicating if the translation along the x-axis is enabled.
  - `enableY` : A boolean indicating if the translation along the y-axis is enabled.
  - `enableZ` : A boolean indicating if the translation along the z-axis is enabled. (only exist on 3d rigidBodies)
- `lockRotations` : A boolean indicating if the rotations of the rigidBody should be locked.
- `enabledRotations` : An object containing the enabled rotations of the rigidBody. (only exist on 3d rigidBodies)
  - `enableX` : A boolean indicating if the rotation around the x-axis is enabled.
  - `enableY` : A boolean indicating if the rotation around the y-axis is enabled.
  - `enableZ` : A boolean indicating if the rotation around the z-axis is enabled.

As soon as a rigidBody is attached to a component, the component's transform will be updated relatively to the rigidBody's transform.

An offset can be applied to the rigidBody's transform so it can be placed relatively to the component's transform.

To learn more about rigidBodies, you can refer to the [Rapier documentation](https://rapier.rs/docs/user_guides/javascript/rigid_bodies).
