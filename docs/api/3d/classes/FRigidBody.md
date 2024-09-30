[@fibbojs](/api/index) / [3d](/api/3d) / FRigidBody

# Class: FRigidBody

A 3d RigidBody.

## Constructors

### new FRigidBody()

> **new FRigidBody**(`component`, `options`?): [`FRigidBody`](FRigidBody.md)

Creates a rigidBody for the given component.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

The component which the collider will be attached to.

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigidBody.

#### Returns

[`FRigidBody`](FRigidBody.md)

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

[3d/src/core/FRigidBody.ts:72](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FRigidBody.ts#L72)

## Properties

### collider

> **collider**: [`FCollider`](FCollider.md)

Fibbo Collider

#### Defined in

[3d/src/core/FRigidBody.ts:41](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FRigidBody.ts#L41)

***

### rigidBody

> **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[3d/src/core/FRigidBody.ts:37](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FRigidBody.ts#L37)
