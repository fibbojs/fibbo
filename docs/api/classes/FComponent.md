[@fibbojs/fibbo](/api/index)  / FComponent

# Class: FComponent

**`Description`**

The base class for all 3D components in FibboJS.

## Implemented by

- [`FCamera`](FCamera.md)
- [`FModel`](FModel.md)

## Table of contents

### Constructors

- [constructor](FComponent.md#constructor)

### Methods

- [onFrame](FComponent.md#onframe)
- [setPosition](FComponent.md#setposition)
- [setRotation](FComponent.md#setrotation)
- [setScale](FComponent.md#setscale)

## Constructors

### constructor

• **new FComponent**(): [`FComponent`](FComponent.md)

#### Returns

[`FComponent`](FComponent.md)

#### Defined in

[src/core/FComponent.ts:6](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FComponent.ts#L6)

## Methods

### onFrame

▸ **onFrame**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Defined in

[src/core/FComponent.ts:9](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FComponent.ts#L9)

___

### setPosition

▸ **setPosition**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

**`Description`**

Set the position of the component.

#### Defined in

[src/core/FComponent.ts:14](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FComponent.ts#L14)

___

### setRotation

▸ **setRotation**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

**`Description`**

Set the rotation of the component.

#### Defined in

[src/core/FComponent.ts:24](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FComponent.ts#L24)

___

### setScale

▸ **setScale**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

**`Description`**

Set the scale of the component.

#### Defined in

[src/core/FComponent.ts:19](https://github.com/fibbojs/fibbo/blob/4d4543b0732388b4480d2785a954ccaf7d85811f/src/core/FComponent.ts#L19)
