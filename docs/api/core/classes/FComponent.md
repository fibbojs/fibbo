[@fibbojs](/api/index) / [core](/api/core) / FComponent

# Class: `abstract` FComponent

## Description

The base class for all 2D and 3D components in FibboJS.

## Extended by

- [`FCamera`](FCamera.md)

## Constructors

### new FComponent()

> **new FComponent**(): [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[packages/core/src/FComponent.ts:5](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FComponent.ts#L5)

## Methods

### onFrame()

> `abstract` **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Description

Update the component.
Should be called every frame.

#### Defined in

[packages/core/src/FComponent.ts:13](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FComponent.ts#L13)
