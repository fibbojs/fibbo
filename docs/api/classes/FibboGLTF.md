[@fibbojs/fibbo](/api/index)  / FibboGLTF

# Class: FibboGLTF

**`Description`**

A GLTF model in FibboJS.

**`Example`**

```ts
import { FibboGLTF } from './FibboGLTF'
import type { FibboScene } from '../FibboScene'

export class MyGltfModel extends FibboGLTF {
 constructor(scene: FibboScene) {
   super(scene, 'Cube.gltf')
 }

 onFrame(delta: number) {
   super.onFrame(delta)
 }
}
```

## Hierarchy

- [`FibboModel`](FibboModel.md)

  ↳ **`FibboGLTF`**

## Table of contents

### Constructors

- [constructor](FibboGLTF.md#constructor)

### Methods

- [onFrame](FibboGLTF.md#onframe)

### Properties

- [collider](FibboGLTF.md#collider)
- [object3D](FibboGLTF.md#object3d)
- [onLoaded](FibboGLTF.md#onloaded)
- [position](FibboGLTF.md#position)
- [rigidBody](FibboGLTF.md#rigidbody)
- [rotation](FibboGLTF.md#rotation)
- [scale](FibboGLTF.md#scale)
- [scene](FibboGLTF.md#scene)
- [type](FibboGLTF.md#type)

## Constructors

### constructor

• **new FibboGLTF**(`scene`, `model`): [`FibboGLTF`](FibboGLTF.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scene` | [`FibboScene`](FibboScene.md) | The FibboScene where the model will be added. |
| `model` | `string` | The name of the model file to load. Should be a GLTF or GLB file. |

#### Returns

[`FibboGLTF`](FibboGLTF.md)

#### Overrides

[FibboModel](FibboModel.md).[constructor](FibboModel.md#constructor)

#### Defined in

[core/model/FibboGLTF.ts:47](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboGLTF.ts#L47)

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

[core/model/FibboGLTF.ts:85](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboGLTF.ts#L85)

## Properties

### collider

• `Optional` **collider**: `Collider`

#### Inherited from

[FibboModel](FibboModel.md).[collider](FibboModel.md#collider)

#### Defined in

[core/model/FibboModel.ts:18](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L18)

___

### object3D

• `Optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Inherited from

[FibboModel](FibboModel.md).[object3D](FibboModel.md#object3d)

#### Defined in

[core/model/FibboModel.ts:15](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboModel.ts#L15)

___

### onLoaded

• **onLoaded**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[core/model/FibboGLTF.ts:40](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboGLTF.ts#L40)

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

___

### type

• **type**: `string` = `'FibboGLTF'`

#### Defined in

[core/model/FibboGLTF.ts:39](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/model/FibboGLTF.ts#L39)
