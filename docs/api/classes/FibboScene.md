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
- [cameraOffset](FibboScene.md#cameraoffset)
- [controls](FibboScene.md#controls)
- [debugCamera](FibboScene.md#debugcamera)
- [gravity](FibboScene.md#gravity)
- [models](FibboScene.md#models)
- [renderer](FibboScene.md#renderer)
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

[src/core/FibboScene.ts:36](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L36)

## Methods

### addDebugPanel

▸ **addDebugPanel**(): `void`

#### Returns

`void`

#### Defined in

[src/core/FibboScene.ts:166](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L166)

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

[src/core/FibboScene.ts:150](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L150)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/core/FibboScene.ts:294](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L294)

## Properties

### camera

• **camera**: `Camera`

#### Defined in

[src/core/FibboScene.ts:28](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L28)

___

### cameraOffset

• **cameraOffset**: [`FibboVector3`](../interfaces/FibboVector3.md)

#### Defined in

[src/core/FibboScene.ts:29](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L29)

___

### controls

• **controls**: `undefined` \| `OrbitControls`

#### Defined in

[src/core/FibboScene.ts:31](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L31)

___

### debugCamera

• **debugCamera**: `PerspectiveCamera`

#### Defined in

[src/core/FibboScene.ts:30](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L30)

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

[src/core/FibboScene.ts:33](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L33)

___

### models

• **models**: [`FibboModel`](FibboModel.md)[]

#### Defined in

[src/core/FibboScene.ts:24](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L24)

___

### renderer

• **renderer**: `WebGLRenderer`

#### Defined in

[src/core/FibboScene.ts:27](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L27)

___

### scene

• **scene**: `Scene`

#### Defined in

[src/core/FibboScene.ts:26](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L26)

___

### world

• **world**: `World`

#### Defined in

[src/core/FibboScene.ts:34](https://github.com/fibbojs/fibbo/blob/919659600127e89dd8df0ecbacb53d15d120b2c4/src/core/FibboScene.ts#L34)
