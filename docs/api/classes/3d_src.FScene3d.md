[@fibbojs](/api/index)  / [3d](/api/modules/3d_src) / FScene3d

# Class: FScene3d

[3d](/api/modules/3d_src).FScene3d

**`Description`**

A scene which contains the models, the Three.js scene and the Rapier world.

**`Example`**

```ts
import { FScene } from '@fibbojs/3d'
import { MyCube } from './classes/MyCube'

const scene = new FScene()
const cube = new MyCube(scene)
scene.addComponent(cube)
```

## Hierarchy

- `FScene`

  ↳ **`FScene3d`**

## Table of contents

### Constructors

- [constructor](3d_src.FScene3d.md#constructor)

### Methods

- [addComponent](3d_src.FScene3d.md#addcomponent)
- [addDebugPanel](3d_src.FScene3d.md#adddebugpanel)
- [debug](3d_src.FScene3d.md#debug)
- [onFrame](3d_src.FScene3d.md#onframe)

### Properties

- [camera](3d_src.FScene3d.md#camera)
- [components](3d_src.FScene3d.md#components)
- [controls](3d_src.FScene3d.md#controls)
- [debugCamera](3d_src.FScene3d.md#debugcamera)
- [gravity](3d_src.FScene3d.md#gravity)
- [onFrameCallbacks](3d_src.FScene3d.md#onframecallbacks)
- [renderer](3d_src.FScene3d.md#renderer)
- [scene](3d_src.FScene3d.md#scene)
- [world](3d_src.FScene3d.md#world)

## Constructors

### constructor

• **new FScene3d**(`debug?`): [`FScene3d`](3d_src.FScene3d.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `debug` | `boolean` | `false` |

#### Returns

[`FScene3d`](3d_src.FScene3d.md)

#### Overrides

FScene.constructor

#### Defined in

[packages/3d/src/FScene3d.ts:36](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L36)

## Methods

### addComponent

▸ **addComponent**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`FModel`](3d_src.FModel.md) |

#### Returns

`void`

#### Overrides

FScene.addComponent

#### Defined in

[packages/3d/src/FScene3d.ts:131](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L131)

___

### addDebugPanel

▸ **addDebugPanel**(): `void`

#### Returns

`void`

#### Defined in

[packages/3d/src/FScene3d.ts:147](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L147)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[packages/3d/src/FScene3d.ts:277](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L277)

___

### onFrame

▸ **onFrame**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`delta`: `number`) => `void` |

#### Returns

`void`

**`Description`**

Add a callback to the onFrame event.

#### Inherited from

FScene.onFrame

#### Defined in

packages/core/dist/index.d.ts:41

## Properties

### camera

• **camera**: [`FCamera3d`](3d_src.FCamera3d.md)

#### Overrides

FScene.camera

#### Defined in

[packages/3d/src/FScene3d.ts:29](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L29)

___

### components

• **components**: [`FModel`](3d_src.FModel.md)[]

#### Overrides

FScene.components

#### Defined in

[packages/3d/src/FScene3d.ts:25](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L25)

___

### controls

• `Optional` **controls**: `OrbitControls`

#### Defined in

[packages/3d/src/FScene3d.ts:31](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L31)

___

### debugCamera

• **debugCamera**: [`FCamera3d`](3d_src.FCamera3d.md)

#### Defined in

[packages/3d/src/FScene3d.ts:30](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L30)

___

### gravity

• **gravity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Overrides

FScene.gravity

#### Defined in

[packages/3d/src/FScene3d.ts:33](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L33)

___

### onFrameCallbacks

• **onFrameCallbacks**: (`delta`: `number`) => `void`[]

#### Inherited from

FScene.onFrameCallbacks

#### Defined in

packages/core/dist/index.d.ts:32

___

### renderer

• **renderer**: `WebGLRenderer`

#### Defined in

[packages/3d/src/FScene3d.ts:28](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L28)

___

### scene

• **scene**: `Scene`

#### Defined in

[packages/3d/src/FScene3d.ts:27](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L27)

___

### world

• **world**: `World`

#### Overrides

FScene.world

#### Defined in

[packages/3d/src/FScene3d.ts:34](https://github.com/fibbojs/fibbo/blob/8715037cde0ad11f9fdaddea6b077f941aa8ead4/packages/3d/src/FScene3d.ts#L34)
