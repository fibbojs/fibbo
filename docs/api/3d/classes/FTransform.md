[@fibbojs](/api/index) / [3d](/api/3d) / FTransform

# Class: FTransform

## Description

3D Transforms for a component.

## Constructors

### new FTransform()

> **new FTransform**(`options`?): [`FTransform`](FTransform.md)

#### Parameters

• **options?**: [`FTransformOptions`](../interfaces/FTransformOptions.md)

The options for the collider.

#### Returns

[`FTransform`](FTransform.md)

#### Description

Create a new FTransform.

#### Example

```ts
const collider = new FTransform({
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
})
```

#### Defined in

[packages/3d/src/core/FTransform.ts:44](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FTransform.ts#L44)

## Properties

### position

> **position**: `Vector3`

The position of the component.

#### Defined in

[packages/3d/src/core/FTransform.ts:18](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FTransform.ts#L18)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Defined in

[packages/3d/src/core/FTransform.ts:26](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FTransform.ts#L26)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Defined in

[packages/3d/src/core/FTransform.ts:22](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FTransform.ts#L22)
