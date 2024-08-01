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

[packages/core/src/FComponent.ts:5](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/core/src/FComponent.ts#L5)

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

[packages/core/src/FComponent.ts:13](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/core/src/FComponent.ts#L13)
