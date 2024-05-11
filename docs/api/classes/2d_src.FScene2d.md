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
- [onFrame](2d_src.FScene2d.md#onframe)

### Properties

- [app](2d_src.FScene2d.md#app)
- [camera](2d_src.FScene2d.md#camera)
- [components](2d_src.FScene2d.md#components)
- [gravity](2d_src.FScene2d.md#gravity)
- [onFrameCallbacks](2d_src.FScene2d.md#onframecallbacks)
- [world](2d_src.FScene2d.md#world)

## Constructors

### constructor

• **new FScene2d**(): [`FScene2d`](2d_src.FScene2d.md)

#### Returns

[`FScene2d`](2d_src.FScene2d.md)

#### Overrides

FScene.constructor

#### Defined in

[packages/2d/src/FScene2d.ts:25](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FScene2d.ts#L25)

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

[packages/2d/src/FScene2d.ts:52](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FScene2d.ts#L52)

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

### app

• **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/FScene2d.ts:23](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FScene2d.ts#L23)

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

[packages/2d/src/FScene2d.ts:20](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FScene2d.ts#L20)

___

### gravity

• **gravity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Inherited from

FScene.gravity

#### Defined in

packages/core/dist/index.d.ts:26

___

### onFrameCallbacks

• **onFrameCallbacks**: (`delta`: `number`) => `void`[]

#### Inherited from

FScene.onFrameCallbacks

#### Defined in

packages/core/dist/index.d.ts:32

___

### world

• `Optional` **world**: `World`

#### Overrides

FScene.world

#### Defined in

[packages/2d/src/FScene2d.ts:21](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/2d/src/FScene2d.ts#L21)
