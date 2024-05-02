[@fibbojs/fibbo](/api/index)  / FibboCube

# Class: FibboCube

**`Description`**

A simple cube model in FibboJS.

**`Example`**

```ts
import { FibboCube } from './FibboCube'
import type { FibboScene } from '../FibboScene'

export class MyCube extends FibboCube {
 constructor(scene: FibboScene) {
   super(scene)
 }

 onFrame(delta: number) {
   super.onFrame(delta)
 }
}
```

## Hierarchy

- [`FibboModel`](FibboModel.md)

  ↳ **`FibboCube`**

## Table of contents

### Constructors

- [constructor](FibboCube.md#constructor)

### Methods

- [onFrame](FibboCube.md#onframe)

### Properties

- [collider](FibboCube.md#collider)
- [object3D](FibboCube.md#object3d)
- [position](FibboCube.md#position)
- [rigidBody](FibboCube.md#rigidbody)
- [rotation](FibboCube.md#rotation)
- [scale](FibboCube.md#scale)
- [scene](FibboCube.md#scene)

## Constructors

### constructor

• **new FibboCube**(`scene`): [`FibboCube`](FibboCube.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`FibboScene`](FibboScene.md) |

#### Returns

[`FibboCube`](FibboCube.md)

#### Overrides

[FibboModel](FibboModel.md).[constructor](FibboModel.md#constructor)

#### Defined in

[core/model/FibboCube.ts:30](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboCube.ts#L30)

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

[FibboModel](FibboModel.md).[onFrame](FibboModel.md#onframe)

#### Defined in

[core/model/FibboCube.ts:38](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboCube.ts#L38)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FibboModel](FibboModel.md).[collider](FibboModel.md#collider)

#### Defined in

[core/model/FibboModel.ts:18](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L18)

___

### object3D

• **object3D**: `Object3D`\<`Object3DEventMap`\>

Object3D is redefined from FibboModel without the ? because it is
directly available after the constructor, as the cube is created synchronously.

#### Overrides

[FibboModel](FibboModel.md).[object3D](FibboModel.md#object3d)

#### Defined in

[core/model/FibboCube.ts:28](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboCube.ts#L28)

___

### position

• **position**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[position](FibboModel.md#position)

#### Defined in

[core/model/FibboModel.ts:11](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L11)

___

### rigidBody

• `Optional` **rigidBody**: `RigidBody`

#### Inherited from

[FibboModel](FibboModel.md).[rigidBody](FibboModel.md#rigidbody)

#### Defined in

[core/model/FibboModel.ts:17](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L17)

___

### rotation

• **rotation**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[rotation](FibboModel.md#rotation)

#### Defined in

[core/model/FibboModel.ts:13](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L13)

___

### scale

• **scale**: `Vector3`

#### Inherited from

[FibboModel](FibboModel.md).[scale](FibboModel.md#scale)

#### Defined in

[core/model/FibboModel.ts:12](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L12)

___

### scene

• **scene**: [`FibboScene`](FibboScene.md)

#### Inherited from

[FibboModel](FibboModel.md).[scene](FibboModel.md#scene)

#### Defined in

[core/model/FibboModel.ts:10](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L10)