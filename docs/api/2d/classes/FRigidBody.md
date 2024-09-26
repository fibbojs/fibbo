[@fibbojs](/api/index) / [2d](/api/2d) / FRigidBody

# Class: FRigidBody

A 3d RigidBody.

## Constructors

### new FRigidBody()

> **new FRigidBody**(`component`, `options`?): [`FRigidBody`](FRigidBody.md)

Creates a rigid body for the given component.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

The component which the collider will be attached to.

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigid body.

#### Returns

[`FRigidBody`](FRigidBody.md)

#### Example

```ts
const rigidBody = new FRigidBody({
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
  rotation: 0,
  shape: FShapes.CUBE
})
```

#### Defined in

[2d/src/core/FRigidBody.ts:65](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/core/FRigidBody.ts#L65)

## Properties

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[2d/src/core/FRigidBody.ts:34](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/core/FRigidBody.ts#L34)

***

### rigidBody

> **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[2d/src/core/FRigidBody.ts:30](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/core/FRigidBody.ts#L30)
