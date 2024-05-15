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

- [initCollider](2d_src.FSquare.md#initcollider)
- [initRigidBody](2d_src.FSquare.md#initrigidbody)
- [onFrame](2d_src.FSquare.md#onframe)
- [setPosition](2d_src.FSquare.md#setposition)
- [setRotation](2d_src.FSquare.md#setrotation)
- [setScale](2d_src.FSquare.md#setscale)

### Properties

- [collider](2d_src.FSquare.md#collider)
- [container](2d_src.FSquare.md#container)
- [position](2d_src.FSquare.md#position)
- [rigidBody](2d_src.FSquare.md#rigidbody)
- [rotation](2d_src.FSquare.md#rotation)
- [scale](2d_src.FSquare.md#scale)
- [scene](2d_src.FSquare.md#scene)

## Constructors

### constructor

• **new FSquare**(`scene`): [`FSquare`](2d_src.FSquare.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FScene2d`](2d_src.FScene2d.md) |

#### Returns

[`FSquare`](2d_src.FSquare.md)

#### Overrides

[FComponent2d](2d_src.FComponent2d.md).[constructor](2d_src.FComponent2d.md#constructor)

#### Defined in

[packages/2d/src/polygons/FSquare.ts:19](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/polygons/FSquare.ts#L19)

## Methods

### initCollider

▸ **initCollider**(`position?`, `scale?`, `shape?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position?` | `PointData` |
| `scale?` | `PointData` |
| `shape?` | [`F2dShapes`](../enums/2d_src.F2dShapes.md) |

#### Returns

`void`

**`Description`**

Only init a collider for the model, without a rigid body.
This is useful for static objects.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[initCollider](2d_src.FComponent2d.md#initcollider)

#### Defined in

[packages/2d/src/FComponent2d.ts:142](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L142)

___

### initRigidBody

▸ **initRigidBody**(`position?`, `scale?`, `rotation?`, `shape?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position?` | `PointData` |
| `scale?` | `PointData` |
| `rotation?` | `number` |
| `shape?` | [`F2dShapes`](../enums/2d_src.F2dShapes.md) |

#### Returns

`void`

**`Description`**

Init a rigid body for the model.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[initRigidBody](2d_src.FComponent2d.md#initrigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:80](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L80)

___

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

[packages/2d/src/polygons/FSquare.ts:27](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/polygons/FSquare.ts#L27)

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

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[setPosition](2d_src.FComponent2d.md#setposition)

#### Defined in

[packages/2d/src/FComponent2d.ts:56](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L56)

___

### setRotation

▸ **setRotation**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

**`Description`**

Set the rotation of the component.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[setRotation](2d_src.FComponent2d.md#setrotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:72](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L72)

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

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[setScale](2d_src.FComponent2d.md#setscale)

#### Defined in

[packages/2d/src/FComponent2d.ts:64](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L64)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[collider](2d_src.FComponent2d.md#collider)

#### Defined in

[packages/2d/src/FComponent2d.ts:25](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L25)

___

### container

• **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the square.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[container](2d_src.FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:19](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L19)

___

### position

• **position**: `PointData`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[position](2d_src.FComponent2d.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:20](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L20)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[rigidBody](2d_src.FComponent2d.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L24)

___

### rotation

• **rotation**: `number`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[rotation](2d_src.FComponent2d.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L22)

___

### scale

• **scale**: `PointData`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[scale](2d_src.FComponent2d.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:21](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L21)

___

### scene

• **scene**: [`FScene2d`](2d_src.FScene2d.md)

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[scene](2d_src.FComponent2d.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:15](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FComponent2d.ts#L15)
