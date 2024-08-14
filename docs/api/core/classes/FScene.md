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

[packages/core/src/FScene.ts:31](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L31)

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

[packages/core/src/FScene.ts:63](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L63)

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

[packages/core/src/FScene.ts:78](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L78)

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

[packages/core/src/FScene.ts:71](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L71)

## Properties

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[] = `[]`

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Defined in

[packages/core/src/FScene.ts:29](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L29)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[] = `[]`

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Defined in

[packages/core/src/FScene.ts:24](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L24)

***

### camera?

> `optional` **camera**: [`FCamera`](FCamera.md)

#### Defined in

[packages/core/src/FScene.ts:15](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L15)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Defined in

[packages/core/src/FScene.ts:14](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L14)

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

[packages/core/src/FScene.ts:17](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L17)

***

### world?

> `optional` **world**: `World` \| `World`

#### Defined in

[packages/core/src/FScene.ts:18](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/core/src/FScene.ts#L18)
