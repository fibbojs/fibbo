[@fibbojs](/api/index) / [2d](/api/2d) / FCollider

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
 position: { x: 0, y: 1 },
 scale: { x: 1, y: 1 },
 rotation: 0,
 shape: FShapes.CUBE
})
```

#### Defined in

[packages/2d/src/core/FCollider.ts:56](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/2d/src/core/FCollider.ts#L56)

## Properties

### collider

> **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/2d/src/core/FCollider.ts:23](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/2d/src/core/FCollider.ts#L23)

***

### colliderPositionOffset

> **colliderPositionOffset**: `object`

Position Offset for the collider.
This is used to adjust the collider position relative to the mesh.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[packages/2d/src/core/FCollider.ts:28](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/2d/src/core/FCollider.ts#L28)

***

### colliderRotationOffset

> **colliderRotationOffset**: `number`

Rotation Offset for the collider.
This is used to adjust the collider position relative to the mesh.

#### Defined in

[packages/2d/src/core/FCollider.ts:33](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/2d/src/core/FCollider.ts#L33)
