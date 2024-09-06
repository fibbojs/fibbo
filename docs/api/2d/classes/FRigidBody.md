[@fibbojs](/api/index) / [2d](/api/2d) / FRigidBody

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
 position: { x: 0, y: 0 },
 scale: { x: 1, y: 1 },
 rotation: 0
 shape: FShapes.CUBE
})
```

#### Defined in

[packages/2d/src/core/FRigidBody.ts:65](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FRigidBody.ts#L65)

## Properties

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[packages/2d/src/core/FRigidBody.ts:34](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FRigidBody.ts#L34)

***

### rigidBody

> **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/2d/src/core/FRigidBody.ts:30](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FRigidBody.ts#L30)
