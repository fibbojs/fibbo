[@fibbojs](/api/index)  / [2d](/api/modules/2d_src) / FComponent2d

# Class: FComponent2d

[2d](/api/modules/2d_src).FComponent2d

**`Description`**

The base class for all 2D components in FibboJS.

## Hierarchy

- `FComponent`

  ↳ **`FComponent2d`**

  ↳↳ [`FSquare`](2d_src.FSquare.md)

## Table of contents

### Constructors

- [constructor](2d_src.FComponent2d.md#constructor)

### Methods

- [onFrame](2d_src.FComponent2d.md#onframe)
- [setPosition](2d_src.FComponent2d.md#setposition)
- [setRotation](2d_src.FComponent2d.md#setrotation)
- [setScale](2d_src.FComponent2d.md#setscale)

### Properties

- [container](2d_src.FComponent2d.md#container)

## Constructors

### constructor

• **new FComponent2d**(): [`FComponent2d`](2d_src.FComponent2d.md)

#### Returns

[`FComponent2d`](2d_src.FComponent2d.md)

#### Overrides

FComponent.constructor

#### Defined in

[packages/2d/src/FComponent2d.ts:14](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FComponent2d.ts#L14)

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

[packages/2d/src/FComponent2d.ts:19](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FComponent2d.ts#L19)

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

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FComponent2d.ts#L24)

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

[packages/2d/src/FComponent2d.ts:34](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FComponent2d.ts#L34)

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

[packages/2d/src/FComponent2d.ts:29](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FComponent2d.ts#L29)

## Properties

### container

• **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the square.

#### Defined in

[packages/2d/src/FComponent2d.ts:12](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FComponent2d.ts#L12)
