[@fibbojs](/api/index)  / [3d](/api/modules/3d_src) / FComponent3d

# Class: FComponent3d

[3d](/api/modules/3d_src).FComponent3d

**`Description`**

The base class for all 2D and 3D components in FibboJS.

## Implements

- `FComponent`

## Implemented by

- [`FModel`](3d_src.FModel.md)

## Table of contents

### Constructors

- [constructor](3d_src.FComponent3d.md#constructor)

### Methods

- [onFrame](3d_src.FComponent3d.md#onframe)
- [setPosition](3d_src.FComponent3d.md#setposition)
- [setRotation](3d_src.FComponent3d.md#setrotation)
- [setScale](3d_src.FComponent3d.md#setscale)

## Constructors

### constructor

• **new FComponent3d**(): [`FComponent3d`](3d_src.FComponent3d.md)

#### Returns

[`FComponent3d`](3d_src.FComponent3d.md)

#### Defined in

[packages/3d/src/FComponent3d.ts:8](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/FComponent3d.ts#L8)

## Methods

### onFrame

▸ **onFrame**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Implementation of

FComponent.onFrame

#### Defined in

[packages/3d/src/FComponent3d.ts:11](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/FComponent3d.ts#L11)

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

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/FComponent3d.ts#L16)

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

[packages/3d/src/FComponent3d.ts:26](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/FComponent3d.ts#L26)

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

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/3d/src/FComponent3d.ts#L21)
