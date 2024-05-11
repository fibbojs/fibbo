[@fibbojs](/api/index)  / [2d](/api/modules/2d_src) / FSquare

# Class: FSquare

[2d](/api/modules/2d_src).FSquare

**`Description`**

A simple square in FibboJS.

**`Example`**

```ts
import { FScene2d, FSquare } from '@fibbojs/2d'

const scene = new FScene2d()

const square = new FSquare()
scene.addComponent(square)
```

## Hierarchy

- [`FComponent2d`](2d_src.FComponent2d.md)

  ↳ **`FSquare`**

## Table of contents

### Constructors

- [constructor](2d_src.FSquare.md#constructor)

### Methods

- [onFrame](2d_src.FSquare.md#onframe)
- [setPosition](2d_src.FSquare.md#setposition)
- [setRotation](2d_src.FSquare.md#setrotation)
- [setScale](2d_src.FSquare.md#setscale)

### Properties

- [container](2d_src.FSquare.md#container)

## Constructors

### constructor

• **new FSquare**(): [`FSquare`](2d_src.FSquare.md)

#### Returns

[`FSquare`](2d_src.FSquare.md)

#### Overrides

[FComponent2d](2d_src.FComponent2d.md).[constructor](2d_src.FComponent2d.md#constructor)

#### Defined in

packages/2d/src/polygons/FSquare.ts:18

## Methods

### onFrame

▸ **onFrame**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Overrides

[FComponent2d](2d_src.FComponent2d.md).[onFrame](2d_src.FComponent2d.md#onframe)

#### Defined in

packages/2d/src/polygons/FSquare.ts:30

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

#### Overrides

[FComponent2d](2d_src.FComponent2d.md).[setPosition](2d_src.FComponent2d.md#setposition)

#### Defined in

packages/2d/src/polygons/FSquare.ts:35

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

#### Overrides

[FComponent2d](2d_src.FComponent2d.md).[setRotation](2d_src.FComponent2d.md#setrotation)

#### Defined in

packages/2d/src/polygons/FSquare.ts:43

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

#### Overrides

[FComponent2d](2d_src.FComponent2d.md).[setScale](2d_src.FComponent2d.md#setscale)

#### Defined in

packages/2d/src/polygons/FSquare.ts:39

## Properties

### container

• **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the square.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[container](2d_src.FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:12](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FComponent2d.ts#L12)
