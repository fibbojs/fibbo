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

- [initCollider](2d_src.FComponent2d.md#initcollider)
- [initRigidBody](2d_src.FComponent2d.md#initrigidbody)
- [onFrame](2d_src.FComponent2d.md#onframe)
- [setPosition](2d_src.FComponent2d.md#setposition)
- [setRotation](2d_src.FComponent2d.md#setrotation)
- [setRotationDegree](2d_src.FComponent2d.md#setrotationdegree)
- [setScale](2d_src.FComponent2d.md#setscale)

### Properties

- [collider](2d_src.FComponent2d.md#collider)
- [container](2d_src.FComponent2d.md#container)
- [position](2d_src.FComponent2d.md#position)
- [rigidBody](2d_src.FComponent2d.md#rigidbody)
- [rotation](2d_src.FComponent2d.md#rotation)
- [scale](2d_src.FComponent2d.md#scale)
- [scene](2d_src.FComponent2d.md#scene)

## Constructors

### constructor

• **new FComponent2d**(`scene`): [`FComponent2d`](2d_src.FComponent2d.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FScene2d`](2d_src.FScene2d.md) |

#### Returns

[`FComponent2d`](2d_src.FComponent2d.md)

#### Overrides

FComponent.constructor

#### Defined in

[packages/2d/src/FComponent2d.ts:27](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L27)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:97](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L97)

___

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

[packages/2d/src/FComponent2d.ts:44](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L44)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:71](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L71)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Defined in

[packages/2d/src/FComponent2d.ts:25](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L25)

___

### container

• **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the square.

#### Defined in

[packages/2d/src/FComponent2d.ts:19](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L19)

___

### position

• **position**: `PointData`

#### Defined in

[packages/2d/src/FComponent2d.ts:20](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L20)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Defined in

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L24)

___

### rotation

• **rotation**: `number`

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L22)

___

### scale

• **scale**: `PointData`

#### Defined in

[packages/2d/src/FComponent2d.ts:21](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L21)

___

### scene

• **scene**: [`FScene2d`](2d_src.FScene2d.md)

#### Defined in

[packages/2d/src/FComponent2d.ts:15](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/2d/src/FComponent2d.ts#L15)
