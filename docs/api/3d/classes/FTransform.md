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

[packages/3d/src/FTransform.ts:44](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FTransform.ts#L44)

## Properties

### position

> **position**: `Vector3`

The position of the component.

#### Defined in

[packages/3d/src/FTransform.ts:18](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FTransform.ts#L18)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Defined in

[packages/3d/src/FTransform.ts:26](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FTransform.ts#L26)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Defined in

[packages/3d/src/FTransform.ts:22](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FTransform.ts#L22)
