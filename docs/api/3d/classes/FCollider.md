[@fibbojs](/api/index) / [3d](/api/3d) / FCollider

# Class: FCollider

A 3d collider.

## Constructors

### new FCollider()

> **new FCollider**(`component`, `options`?): [`FCollider`](FCollider.md)

Creates a collider for a given component.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

The component which the collider will be attached to.

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

[`FCollider`](FCollider.md)

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

[3d/src/core/FCollider.ts:57](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FCollider.ts#L57)

## Properties

### collider

> **collider**: `Collider`

RAPIER Collider

#### Defined in

[3d/src/core/FCollider.ts:24](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FCollider.ts#L24)

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

[3d/src/core/FCollider.ts:29](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FCollider.ts#L29)

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

[3d/src/core/FCollider.ts:34](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FCollider.ts#L34)
