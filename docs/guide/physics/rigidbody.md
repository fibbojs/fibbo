# RigidBody

The real-time simulation of rigid-bodies subjected to forces and contacts is the main feature of a physics engine. Rigid-bodies are responsible for the dynamics and kinematics of a solid.

Rigid-bodies are typically used to simulate the dynamics of non-deformable solids as well as to integrate the trajectory of solids which velocities are controlled by the user (e.g. moving platforms).

On the other hand, rigid-bodies are not enough to simulate, e.g., cars, ragdolls, or robotic systems, as those use-cases require adding restrictions on the relative motion between their parts using [joints](/guide/physics/joints).

## Relation with colliders

A [collider](/guide/physics/colliders) can be attached to a rigid-body to specify its shape and enable collision-detection.

A rigid-body without collider attached to it will not be affected by contacts (because there is no shape to compute contact against).

::: tip
By default, Fibbo always create a collider when a rigid-body is created.
:::

## Types of rigid-bodies

There are 4 types of rigid-bodies :
There are four types of rigid-bodies, identified by the RigidBodyType enumeration:

- Dynamic (`RAPIER.RigidBodyType.Dynamic`) : Indicates that the body is affected by external forces and contacts. This is the one used for objects affeted by gravity, forces, etc.
- Fixed (`RAPIER.RigidBodyType.Fixed`) : Indicates the body cannot move. It acts as if it has an infinite mass and will not be affected by any force. It will continue to collide with dynamic bodies but not with fixed nor with kinematic bodies. This is typically used for the ground or for temporarily freezing a body.
- Kinematic Position Based (`RAPIER.RigidBodyType.KinematicPositionBased`): Indicates that the body position must not be altered by the physics engine. The user is free to set its next position and the body velocity will be deduced at each update accordingly to ensure a realistic behavior of dynamic bodies in contact with it. This is typically used for moving characters, platforms, elevators, etc.
- Kinematic Velocity Based (`RAPIER.RigidBodyType.KinematicVelocityBased`): Indicates that the body velocity must not be altered by the physics engine. The user is free to set its velocity and the next body position will be deduced at each update accordingly to ensure a realistic behavior of dynamic bodies in contact with it. This is typically used for moving characters, platforms, elevators, etc.

## Adding a rigid-body to a component

Every [`FComponent`](/api/core/classes/FComponent) has a [`initRigidBody`](/api/3d/classes/FComponent#initrigidbody) method that allows you to create a rigid-body and attach it to the component directly.

```typescript
import { FCuboid, FShape } from '@fibbojs/3d'

const cube = new FCuboid()
cube.initRigidBody({
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  rotationDegree: { x: 0, y: 0, z: 0 },
  shape: FShape.CUBE,
  rigidBodyType: RAPIER.RigidBodyType.Dynamic
})
```

Apart from the classic [transform](/guide/core/transforms) properties, the `initRigidBody` method accepts the following parameters :
- `shape` : The shape of the collider attached to the rigid-body. This is required to compute contacts.
- `rigidBodyType` : The type of the rigid-body.
- `lockTranslations` : A boolean indicating if the translations of the rigid-body should be locked.
- `enabledTranslations` : An object containing the enabled translations of the rigid-body.
  - `enableX` : A boolean indicating if the translation along the x-axis is enabled.
  - `enableY` : A boolean indicating if the translation along the y-axis is enabled.
  - `enableZ` : A boolean indicating if the translation along the z-axis is enabled. (only exist on 3d rigid-bodies)
- `lockRotations` : A boolean indicating if the rotations of the rigid-body should be locked.
- `enabledRotations` : An object containing the enabled rotations of the rigid-body. (only exist on 3d rigid-bodies)
  - `enableX` : A boolean indicating if the rotation around the x-axis is enabled.
  - `enableY` : A boolean indicating if the rotation around the y-axis is enabled.
  - `enableZ` : A boolean indicating if the rotation around the z-axis is enabled.

## Creating a rigid-body by hand

You can also directly use the [`FRigidBody`](/api/3d/classes/FRigidBody) class to create a rigid-body and attach it to a component.

```typescript
import { FCuboid, FRigidBody, FShape } from '@fibbojs/3d'

const cube = new FCuboid()
cube.rigidBody = new FRigidBody({
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
  rotationDegree: { x: 0, y: 0, z: 0 },
  shape: FShape.CUBE,
  rigidBodyType: RAPIER.RigidBodyType.Dynamic
})
```

To learn more about rigid-bodies, you can refer to the [Rapier documentation](https://rapier.rs/docs/user_guides/javascript/rigid_bodies).
