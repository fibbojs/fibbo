[@fibbojs](/api/index) / [3d](/api/3d) / FRigidBody

# Class: FRigidBody

## Description

A 3d RigidBody.

## Constructors

### new FRigidBody()

> **new FRigidBody**(`component`, `options`?): [`FRigidBody`](FRigidBody.md)

#### Parameters

• **component**: [`FComponent`](FComponent.md)

The component which the collider will be attached to.

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigid body.

#### Returns

[`FRigidBody`](FRigidBody.md)

#### Description

Creates a rigid body for the given component.

#### Example

```ts
const rigidBody = new FRigidBody({
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
 shape: FShapes.CUBE
})
```

#### Defined in

[packages/3d/src/core/FRigidBody.ts:72](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FRigidBody.ts#L72)

## Properties

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[packages/3d/src/core/FRigidBody.ts:41](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FRigidBody.ts#L41)

***

### rigidBody

> **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/3d/src/core/FRigidBody.ts:37](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FRigidBody.ts#L37)
