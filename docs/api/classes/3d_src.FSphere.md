[@fibbojs](/api/index)  / [3d](/api/modules/3d_src) / FSphere

# Class: FSphere

[3d](/api/modules/3d_src).FSphere

**`Description`**

A simple sphere model in FibboJS.

**`Example`**

```ts
import { FScene3d, FSphere } from '@fibbojs/3d'

const scene = new FScene3d()

const cube = new FSphere(scene)
scene.addComponent(cube)
```

## Hierarchy

- [`FModel`](3d_src.FModel.md)

  ↳ **`FSphere`**

## Table of contents

### Constructors

- [constructor](3d_src.FSphere.md#constructor)

### Methods

- [initRigidBody](3d_src.FSphere.md#initrigidbody)
- [onFrame](3d_src.FSphere.md#onframe)
- [setPosition](3d_src.FSphere.md#setposition)
- [setRotation](3d_src.FSphere.md#setrotation)
- [setRotationDegree](3d_src.FSphere.md#setrotationdegree)
- [setScale](3d_src.FSphere.md#setscale)

### Properties

- [collider](3d_src.FSphere.md#collider)
- [object3D](3d_src.FSphere.md#object3d)
- [position](3d_src.FSphere.md#position)
- [rigidBody](3d_src.FSphere.md#rigidbody)
- [rotation](3d_src.FSphere.md#rotation)
- [scale](3d_src.FSphere.md#scale)
- [scene](3d_src.FSphere.md#scene)

## Constructors

### constructor

• **new FSphere**(`scene`): [`FSphere`](3d_src.FSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FScene3d`](3d_src.FScene3d.md) |

#### Returns

[`FSphere`](3d_src.FSphere.md)

#### Overrides

[FModel](3d_src.FModel.md).[constructor](3d_src.FModel.md#constructor)

#### Defined in

[packages/3d/src/model/FSphere.ts:26](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FSphere.ts#L26)

## Methods

### initRigidBody

▸ **initRigidBody**(`position?`, `scale?`, `rotation?`, `shape?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position?` | `Vector3` |
| `scale?` | `Vector3` |
| `rotation?` | `Vector3` |
| `shape?` | [`F3dShapes`](../enums/3d_src.F3dShapes.md) |

#### Returns

`void`

**`Description`**

Init a rigid body for the model.

#### Overrides

[FModel](3d_src.FModel.md).[initRigidBody](3d_src.FModel.md#initrigidbody)

#### Defined in

[packages/3d/src/model/FSphere.ts:38](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FSphere.ts#L38)

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

[FModel](3d_src.FModel.md).[onFrame](3d_src.FModel.md#onframe)

#### Defined in

[packages/3d/src/model/FSphere.ts:34](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FSphere.ts#L34)

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

Set the position of the model.

#### Inherited from

[FModel](3d_src.FModel.md).[setPosition](3d_src.FModel.md#setposition)

#### Defined in

[packages/3d/src/model/FModel.ts:49](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L49)

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

Set the rotation of the model.

#### Inherited from

[FModel](3d_src.FModel.md).[setRotation](3d_src.FModel.md#setrotation)

#### Defined in

[packages/3d/src/model/FModel.ts:69](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L69)

___

### setRotationDegree

▸ **setRotationDegree**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

**`Description`**

Set the rotation of the model from degrees.

#### Inherited from

[FModel](3d_src.FModel.md).[setRotationDegree](3d_src.FModel.md#setrotationdegree)

#### Defined in

[packages/3d/src/model/FModel.ts:78](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L78)

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

Set the scale of the model.

#### Inherited from

[FModel](3d_src.FModel.md).[setScale](3d_src.FModel.md#setscale)

#### Defined in

[packages/3d/src/model/FModel.ts:60](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L60)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FModel](3d_src.FModel.md).[collider](3d_src.FModel.md#collider)

#### Defined in

[packages/3d/src/model/FModel.ts:22](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L22)

___

### object3D

• **object3D**: `Object3D`\<`Object3DEventMap`\>

Object3D is redefined from FModel without the ? because it is
directly available after the constructor, as the cube is created synchronously.

#### Overrides

[FModel](3d_src.FModel.md).[object3D](3d_src.FModel.md#object3d)

#### Defined in

[packages/3d/src/model/FSphere.ts:24](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FSphere.ts#L24)

___

### position

• **position**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[position](3d_src.FModel.md#position)

#### Defined in

[packages/3d/src/model/FModel.ts:15](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L15)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FModel](3d_src.FModel.md).[rigidBody](3d_src.FModel.md#rigidbody)

#### Defined in

[packages/3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L21)

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[rotation](3d_src.FModel.md#rotation)

#### Defined in

[packages/3d/src/model/FModel.ts:17](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L17)

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FModel](3d_src.FModel.md).[scale](3d_src.FModel.md#scale)

#### Defined in

[packages/3d/src/model/FModel.ts:16](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L16)

___

### scene

• **scene**: [`FScene3d`](3d_src.FScene3d.md)

#### Inherited from

[FModel](3d_src.FModel.md).[scene](3d_src.FModel.md#scene)

#### Defined in

[packages/3d/src/model/FModel.ts:14](https://github.com/fibbojs/fibbo/blob/0d3489d2e4ad78e4ea66790ef822964befd36906/packages/3d/src/model/FModel.ts#L14)
