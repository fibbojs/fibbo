[@fibbojs](/api/index) / [2d](/api/2d) / FCollider

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
 position: { x: 0, y: 1 },
 scale: { x: 1, y: 1 },
 rotation: 0,
 shape: FShapes.CUBE
})
```

#### Defined in

[2d/src/core/FCollider.ts:56](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/2d/src/core/FCollider.ts#L56)

## Properties

### collider

> **collider**: `Collider`

RAPIER Collider

#### Defined in

[2d/src/core/FCollider.ts:23](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/2d/src/core/FCollider.ts#L23)

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

[2d/src/core/FCollider.ts:28](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/2d/src/core/FCollider.ts#L28)

***

### colliderRotationOffset

> **colliderRotationOffset**: `number`

Rotation Offset for the collider.
This is used to adjust the collider position relative to the mesh.

#### Defined in

[2d/src/core/FCollider.ts:33](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/2d/src/core/FCollider.ts#L33)
