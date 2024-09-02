[@fibbojs](/api/index) / [3d](/api/3d) / FCollider

# Class: FCollider

## Description

A 3d collider.

## Constructors

### new FCollider()

> **new FCollider**(`component`, `options`?): [`FCollider`](FCollider.md)

#### Parameters

• **component**: [`FComponent`](FComponent.md)

The component which the collider will be attached to.

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

[`FCollider`](FCollider.md)

#### Description

Creates a collider for a given component.

#### Example

```ts
const collider = new FCollider(component, {
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
 shape: FShapes.CUBE
})
```

#### Defined in

[packages/3d/src/core/FCollider.ts:57](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FCollider.ts#L57)

## Properties

### collider

> **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/3d/src/core/FCollider.ts:24](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FCollider.ts#L24)

***

### colliderPositionOffset

> **colliderPositionOffset**: `object`

Position Offset for the collider.
This is used to adjust the collider position relative to the mesh.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

#### Defined in

[packages/3d/src/core/FCollider.ts:29](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FCollider.ts#L29)

***

### colliderRotationOffset

> **colliderRotationOffset**: `object`

Rotation Offset for the collider.
This is used to adjust the collider position relative to the mesh.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

#### Defined in

[packages/3d/src/core/FCollider.ts:34](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FCollider.ts#L34)
