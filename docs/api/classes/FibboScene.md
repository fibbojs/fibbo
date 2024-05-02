[@fibbojs/fibbo](/api/index)  / FibboScene

# Class: FibboScene

**`Description`**

A scene which contains the models, the Three.js scene and the Rapier world.

**`Example`**

```ts
import { FibboScene } from './FibboScene'
import { MyCube } from './model/MyCube'

const scene = new FibboScene()
const cube = new MyCube(scene)
scene.addModel(cube)
```

## Table of contents

### Constructors

- [constructor](FibboScene.md#constructor)

### Methods

- [addDebugPanel](FibboScene.md#adddebugpanel)
- [addModel](FibboScene.md#addmodel)
- [debug](FibboScene.md#debug)

### Properties

- [camera](FibboScene.md#camera)
- [controls](FibboScene.md#controls)
- [gravity](FibboScene.md#gravity)
- [models](FibboScene.md#models)
- [scene](FibboScene.md#scene)
- [world](FibboScene.md#world)

## Constructors

### constructor

• **new FibboScene**(`debug?`): [`FibboScene`](FibboScene.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `debug` | `boolean` | `false` |

#### Returns

[`FibboScene`](FibboScene.md)

#### Defined in

[core/FibboScene.ts:30](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L30)

## Methods

### addDebugPanel

▸ **addDebugPanel**(): `void`

#### Returns

`void`

#### Defined in

[core/FibboScene.ts:148](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L148)

___

### addModel

▸ **addModel**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`FibboModel`](FibboModel.md) |

#### Returns

`void`

#### Defined in

[core/FibboScene.ts:132](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L132)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[core/FibboScene.ts:187](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L187)

## Properties

### camera

• **camera**: `PerspectiveCamera`

#### Defined in

[core/FibboScene.ts:24](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L24)

___

### controls

• **controls**: `undefined` \| `OrbitControls`

#### Defined in

[core/FibboScene.ts:25](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L25)

___

### gravity

• **gravity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[core/FibboScene.ts:27](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L27)

___

### models

• **models**: [`FibboModel`](FibboModel.md)[]

#### Defined in

[core/FibboScene.ts:21](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L21)

___

### scene

• **scene**: `Scene`

#### Defined in

[core/FibboScene.ts:23](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L23)

___

### world

• **world**: `World`

#### Defined in

[core/FibboScene.ts:28](https://github.com/fibbojs/fibbo/blob/b9b900181d67ac688b761b1972f316cdd1f56ef2/src/core/FibboScene.ts#L28)
