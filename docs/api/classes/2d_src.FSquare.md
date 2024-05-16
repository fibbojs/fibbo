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
- [setRotationDegree](2d_src.FSquare.md#setrotationdegree)
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

[packages/2d/src/polygons/FSquare.ts:19](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/polygons/FSquare.ts#L19)

## Methods

### initCollider

▸ **initCollider**(`position?`, `scale?`, `rotation?`, `shape?`): `void`

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

Only init a collider for the model, without a rigid body.
This is useful for static objects.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[initCollider](2d_src.FComponent2d.md#initcollider)

#### Defined in

[packages/2d/src/FComponent2d.ts:159](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L159)

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

[packages/2d/src/FComponent2d.ts:97](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L97)

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

[packages/2d/src/polygons/FSquare.ts:29](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/polygons/FSquare.ts#L29)

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

[packages/2d/src/FComponent2d.ts:63](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L63)

___

### setRotation

▸ **setRotation**(`r`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | The rotation in radians. |

#### Returns

`void`

**`Description`**

Set the rotation of the component.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[setRotation](2d_src.FComponent2d.md#setrotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:80](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L80)

___

### setRotationDegree

▸ **setRotationDegree**(`r`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | The rotation in degrees. |

#### Returns

`void`

**`Description`**

Set the rotation of the component in degrees.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[setRotationDegree](2d_src.FComponent2d.md#setrotationdegree)

#### Defined in

[packages/2d/src/FComponent2d.ts:89](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L89)

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

[packages/2d/src/FComponent2d.ts:71](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L71)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[collider](2d_src.FComponent2d.md#collider)

#### Defined in

[packages/2d/src/FComponent2d.ts:25](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L25)

___

### container

• **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the square.

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[container](2d_src.FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:19](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L19)

___

### position

• **position**: `PointData`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[position](2d_src.FComponent2d.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:20](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L20)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[rigidBody](2d_src.FComponent2d.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L24)

___

### rotation

• **rotation**: `number`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[rotation](2d_src.FComponent2d.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L22)

___

### scale

• **scale**: `PointData`

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[scale](2d_src.FComponent2d.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:21](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L21)

___

### scene

• **scene**: [`FScene2d`](2d_src.FScene2d.md)

#### Inherited from

[FComponent2d](2d_src.FComponent2d.md).[scene](2d_src.FComponent2d.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:15](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L15)
