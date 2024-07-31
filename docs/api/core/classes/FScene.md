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

[packages/core/src/FScene.ts:19](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FScene.ts#L19)

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

[packages/core/src/FScene.ts:48](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FScene.ts#L48)

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

[packages/core/src/FScene.ts:53](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FScene.ts#L53)

## Properties

### camera?

> `optional` **camera**: [`FCamera`](FCamera.md)

#### Defined in

[packages/core/src/FScene.ts:12](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FScene.ts#L12)

***

### components?

> `optional` **components**: [`FComponent`](FComponent.md)[]

#### Defined in

[packages/core/src/FScene.ts:11](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FScene.ts#L11)

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

[packages/core/src/FScene.ts:14](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FScene.ts#L14)

***

### onFrameCallbacks

> **onFrameCallbacks**: (`delta`) => `void`[] = `[]`

#### Defined in

[packages/core/src/FScene.ts:17](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FScene.ts#L17)

***

### world?

> `optional` **world**: `World` \| `World`

#### Defined in

[packages/core/src/FScene.ts:15](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/core/src/FScene.ts#L15)
