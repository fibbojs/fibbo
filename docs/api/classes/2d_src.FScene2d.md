[@fibbojs](/api/index)  / [2d](/api/modules/2d_src) / FScene2d

# Class: FScene2d

[2d](/api/modules/2d_src).FScene2d

**`Description`**

A scene which contains the models, the Three.js scene and the Rapier world.

**`Example`**

```ts
import { FScene2d, FSquare } from '@fibbojs/2d'

const scene = new FScene2d()

const square = new FSquare()
scene.addComponent(square)
```

## Hierarchy

- `FScene`

  ↳ **`FScene2d`**

## Table of contents

### Constructors

- [constructor](2d_src.FScene2d.md#constructor)

### Methods

- [addComponent](2d_src.FScene2d.md#addcomponent)
- [debug](2d_src.FScene2d.md#debug)
- [onFrame](2d_src.FScene2d.md#onframe)
- [onReady](2d_src.FScene2d.md#onready)

### Properties

- [DEBUG\_LINES](2d_src.FScene2d.md#debug_lines)
- [app](2d_src.FScene2d.md#app)
- [camera](2d_src.FScene2d.md#camera)
- [components](2d_src.FScene2d.md#components)
- [gravity](2d_src.FScene2d.md#gravity)
- [onFrameCallbacks](2d_src.FScene2d.md#onframecallbacks)
- [onReadyCallbacks](2d_src.FScene2d.md#onreadycallbacks)
- [viewport](2d_src.FScene2d.md#viewport)
- [world](2d_src.FScene2d.md#world)

## Constructors

### constructor

• **new FScene2d**(): [`FScene2d`](2d_src.FScene2d.md)

#### Returns

[`FScene2d`](2d_src.FScene2d.md)

#### Overrides

FScene.constructor

#### Defined in

[packages/2d/src/FScene2d.ts:35](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L35)

## Methods

### addComponent

▸ **addComponent**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`FComponent2d`](2d_src.FComponent2d.md) |

#### Returns

`void`

#### Overrides

FScene.addComponent

#### Defined in

[packages/2d/src/FScene2d.ts:128](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L128)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:142](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L142)

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

___

### onReady

▸ **onReady**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:138](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L138)

## Properties

### DEBUG\_LINES

• **DEBUG\_LINES**: `Graphics`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:33](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L33)

___

### app

• **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/FScene2d.ts:26](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L26)

___

### camera

• `Optional` **camera**: `FCamera`

#### Inherited from

FScene.camera

#### Defined in

packages/core/dist/index.d.ts:25

___

### components

• **components**: [`FComponent2d`](2d_src.FComponent2d.md)[]

#### Overrides

FScene.components

#### Defined in

[packages/2d/src/FScene2d.ts:23](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L23)

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

[packages/2d/src/FScene2d.ts:29](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L29)

___

### onFrameCallbacks

• **onFrameCallbacks**: (`delta`: `number`) => `void`[]

#### Inherited from

FScene.onFrameCallbacks

#### Defined in

packages/core/dist/index.d.ts:32

___

### onReadyCallbacks

• **onReadyCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:31](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L31)

___

### viewport

• `Optional` **viewport**: `Viewport`

#### Defined in

[packages/2d/src/FScene2d.ts:27](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L27)

___

### world

• `Optional` **world**: `World`

#### Overrides

FScene.world

#### Defined in

[packages/2d/src/FScene2d.ts:24](https://github.com/fibbojs/fibbo/blob/9584d07c63ad13d7f8125433d0b79fffa747f5c1/packages/2d/src/FScene2d.ts#L24)
