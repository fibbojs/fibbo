[@fibbojs](/api/index) / [2d](/api/2d) / FTransform

# Class: FTransform

## Description

2D Transforms for a component.

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
 position: { x: 0, y: 0 },
 scale: { x: 1, y: 1 },
 rotation: 0,
})
```

#### Defined in

[packages/2d/src/core/FTransform.ts:42](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FTransform.ts#L42)

## Properties

### position

> **position**: `object`

Position of the component.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[packages/2d/src/core/FTransform.ts:16](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FTransform.ts#L16)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Defined in

[packages/2d/src/core/FTransform.ts:24](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FTransform.ts#L24)

***

### scale

> **scale**: `object`

Scale of the component.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[packages/2d/src/core/FTransform.ts:20](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/2d/src/core/FTransform.ts#L20)
