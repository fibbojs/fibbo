[fibbojs](../README.md) / [Modules](../modules.md) / [2d/src](../modules/2d_src.md) / FComponent2d

# Class: FComponent2d

[2d/src](../modules/2d_src.md).FComponent2d

**`Description`**

The base class for all 2D components in FibboJS.

## Hierarchy

- `FComponent`

  ↳ **`FComponent2d`**

## Table of contents

### Constructors

- [constructor](2d_src.FComponent2d.md#constructor)

### Methods

- [onFrame](2d_src.FComponent2d.md#onframe)
- [setPosition](2d_src.FComponent2d.md#setposition)
- [setRotation](2d_src.FComponent2d.md#setrotation)
- [setScale](2d_src.FComponent2d.md#setscale)

## Constructors

### constructor

• **new FComponent2d**(): [`FComponent2d`](2d_src.FComponent2d.md)

#### Returns

[`FComponent2d`](2d_src.FComponent2d.md)

#### Overrides

FComponent.constructor

#### Defined in

packages/2d/src/FComponent2d.ts:8

## Methods

### onFrame

▸ **onFrame**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Overrides

FComponent.onFrame

#### Defined in

packages/2d/src/FComponent2d.ts:12

___

### setPosition

▸ **setPosition**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

**`Description`**

Set the position of the component.

#### Defined in

packages/2d/src/FComponent2d.ts:17

___

### setRotation

▸ **setRotation**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

**`Description`**

Set the rotation of the component.

#### Defined in

packages/2d/src/FComponent2d.ts:27

___

### setScale

▸ **setScale**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

**`Description`**

Set the scale of the component.

#### Defined in

packages/2d/src/FComponent2d.ts:22
