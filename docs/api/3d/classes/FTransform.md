[@fibbojs](/api/index) / [3d](/api/3d) / FTransform

# Class: FTransform

3D Transforms for a component.

## Constructors

### new FTransform()

> **new FTransform**(`options`?): [`FTransform`](FTransform.md)

Create a new FTransform.

#### Parameters

• **options?**: [`FTransformOptions`](../interfaces/FTransformOptions.md)

The options for the collider.

#### Returns

[`FTransform`](FTransform.md)

#### Example

```ts
const collider = new FTransform({
  position: { x: 0, y: 0, z: 0 },
  scale: { x: 1, y: 1, z: 1 },
  rotation: { x: 0, y: 0, z: 0 },
})
```

#### Defined in

[3d/src/core/FTransform.ts:44](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/core/FTransform.ts#L44)

## Properties

### position

> **position**: `Vector3`

The position of the component.

#### Defined in

[3d/src/core/FTransform.ts:18](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/core/FTransform.ts#L18)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Defined in

[3d/src/core/FTransform.ts:26](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/core/FTransform.ts#L26)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Defined in

[3d/src/core/FTransform.ts:22](https://github.com/fibbojs/fibbo/blob/c8bca4c6d190e0a6b19c44fcd12f335601e086d6/packages/3d/src/core/FTransform.ts#L22)
