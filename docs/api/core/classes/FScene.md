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

[packages/core/src/FScene.ts:30](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L30)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Description

Add a component to the scene.

#### Defined in

[packages/core/src/FScene.ts:62](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L62)

***

### onComponentAdded()

> **onComponentAdded**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a component is added to the scene.

#### Defined in

[packages/core/src/FScene.ts:77](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L77)

***

### onFrame()

> **onFrame**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a frame is rendered.

#### Defined in

[packages/core/src/FScene.ts:70](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L70)

## Properties

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[] = `[]`

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Defined in

[packages/core/src/FScene.ts:28](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L28)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[] = `[]`

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Defined in

[packages/core/src/FScene.ts:23](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L23)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Defined in

[packages/core/src/FScene.ts:14](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L14)

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

[packages/core/src/FScene.ts:16](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L16)

***

### world?

> `optional` **world**: `World` \| `World`

#### Defined in

[packages/core/src/FScene.ts:17](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/core/src/FScene.ts#L17)
