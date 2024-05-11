[@fibbojs](/api/index)  / [core](/api/modules/core_src) / FScene

# Class: FScene

[core](/api/modules/core_src).FScene

**`Description`**

A scene which contains the components and the camera.
Also contains the Rapier world if physics is enabled.

## Table of contents

### Constructors

- [constructor](core_src.FScene.md#constructor)

### Methods

- [addComponent](core_src.FScene.md#addcomponent)
- [onFrame](core_src.FScene.md#onframe)

### Properties

- [camera](core_src.FScene.md#camera)
- [components](core_src.FScene.md#components)
- [gravity](core_src.FScene.md#gravity)
- [onFrameCallbacks](core_src.FScene.md#onframecallbacks)
- [world](core_src.FScene.md#world)

## Constructors

### constructor

• **new FScene**(): [`FScene`](core_src.FScene.md)

#### Returns

[`FScene`](core_src.FScene.md)

#### Defined in

[packages/core/src/FScene.ts:19](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/core/src/FScene.ts#L19)

## Methods

### addComponent

▸ **addComponent**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`FComponent`](core_src.FComponent.md) |

#### Returns

`void`

**`Description`**

Add a component to the scene.

#### Defined in

[packages/core/src/FScene.ts:48](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/core/src/FScene.ts#L48)

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

#### Defined in

[packages/core/src/FScene.ts:53](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/core/src/FScene.ts#L53)

## Properties

### camera

• `Optional` **camera**: [`FCamera`](core_src.FCamera.md)

#### Defined in

[packages/core/src/FScene.ts:12](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/core/src/FScene.ts#L12)

___

### components

• `Optional` **components**: [`FComponent`](core_src.FComponent.md)[]

#### Defined in

[packages/core/src/FScene.ts:11](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/core/src/FScene.ts#L11)

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

[packages/core/src/FScene.ts:14](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/core/src/FScene.ts#L14)

___

### onFrameCallbacks

• **onFrameCallbacks**: (`delta`: `number`) => `void`[] = `[]`

#### Defined in

[packages/core/src/FScene.ts:17](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/core/src/FScene.ts#L17)

___

### world

• `Optional` **world**: `World` \| `World`

#### Defined in

[packages/core/src/FScene.ts:15](https://github.com/fibbojs/fibbo/blob/b3efc33731eef5a3996c7b1f098740f83fa3ec10/packages/core/src/FScene.ts#L15)
