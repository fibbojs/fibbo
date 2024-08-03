[@fibbojs](/api/index) / [core](/api/core) / FScene

# Class: `abstract` FScene

## Description

A scene which contains the components and the camera.
Also contains the Rapier world if physics is enabled.

## Constructors

### new FScene()

> **new FScene**(): [`FScene`](FScene.md)

#### Returns

[`FScene`](FScene.md)

#### Defined in

[packages/core/src/FScene.ts:22](https://github.com/fibbojs/fibbo/blob/e7d9273a28a254e3c2d88f8fb630ca0c812fc191/packages/core/src/FScene.ts#L22)

## Methods

### addComponent()

> `abstract` **addComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Description

Add a component to the scene.

#### Defined in

[packages/core/src/FScene.ts:51](https://github.com/fibbojs/fibbo/blob/e7d9273a28a254e3c2d88f8fb630ca0c812fc191/packages/core/src/FScene.ts#L51)

***

### onFrame()

> **onFrame**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to the onFrame event.

#### Defined in

[packages/core/src/FScene.ts:56](https://github.com/fibbojs/fibbo/blob/e7d9273a28a254e3c2d88f8fb630ca0c812fc191/packages/core/src/FScene.ts#L56)

## Properties

### camera?

> `optional` **camera**: [`FCamera`](FCamera.md)

#### Defined in

[packages/core/src/FScene.ts:15](https://github.com/fibbojs/fibbo/blob/e7d9273a28a254e3c2d88f8fb630ca0c812fc191/packages/core/src/FScene.ts#L15)

***

### components?

> `optional` **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Defined in

[packages/core/src/FScene.ts:14](https://github.com/fibbojs/fibbo/blob/e7d9273a28a254e3c2d88f8fb630ca0c812fc191/packages/core/src/FScene.ts#L14)

***

### gravity

> **gravity**: `object`

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

#### Defined in

[packages/core/src/FScene.ts:17](https://github.com/fibbojs/fibbo/blob/e7d9273a28a254e3c2d88f8fb630ca0c812fc191/packages/core/src/FScene.ts#L17)

***

### onFrameCallbacks

> **onFrameCallbacks**: (`delta`) => `void`[] = `[]`

#### Defined in

[packages/core/src/FScene.ts:20](https://github.com/fibbojs/fibbo/blob/e7d9273a28a254e3c2d88f8fb630ca0c812fc191/packages/core/src/FScene.ts#L20)

***

### world?

> `optional` **world**: `World` \| `World`

#### Defined in

[packages/core/src/FScene.ts:18](https://github.com/fibbojs/fibbo/blob/e7d9273a28a254e3c2d88f8fb630ca0c812fc191/packages/core/src/FScene.ts#L18)
