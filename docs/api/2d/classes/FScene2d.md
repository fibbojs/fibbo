[@fibbojs](/api/index) / [2d](/api/2d) / FScene2d

# Class: FScene2d

## Description

A scene which contains the models, the Three.js scene and the Rapier world.

## Example

```ts
import { FScene2d, FSquare } from '@fibbojs/2d'

(async () => {
 const scene = new FScene2d()
 await scene.init()
 await scene.initPhysics()

 const square = new FSquare(scene)
 square.initRigidBody()
 scene.addComponent(square)
})()
```

## Extends

- `FScene`

## Constructors

### new FScene2d()

> **new FScene2d**(`options`): [`FScene2d`](FScene2d.md)

#### Parameters

• **options** = `...`

• **options.debug?**: `boolean`

#### Returns

[`FScene2d`](FScene2d.md)

#### Overrides

`FScene.constructor`

#### Defined in

[packages/2d/src/FScene2d.ts:44](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L44)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent2d`](FComponent2d.md)

#### Returns

`void`

#### Description

Add a component to the scene.

#### Overrides

`FScene.addComponent`

#### Defined in

[packages/2d/src/FScene2d.ts:202](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L202)

***

### debug()

> **debug**(): `void`

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:246](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L246)

***

### handleCollision()

> **handleCollision**(`handle1`, `handle2`, `start`): `void`

#### Parameters

• **handle1**: `number`

The handle of the first collider

• **handle2**: `number`

The handle of the second collider

• **start**: `boolean`

If the collision has started or ended

#### Returns

`void`

#### Description

Handle a collision event between two colliders.

#### Defined in

[packages/2d/src/FScene2d.ts:176](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L176)

***

### init()

> **init**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Description

Initialize the scene.
The application will create a renderer using WebGL, if possible,
with a fallback to a canvas render. It will also setup the ticker
and the root stage PIXI.Container.

#### Defined in

[packages/2d/src/FScene2d.ts:64](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L64)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/FScene2d.ts:145](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L145)

***

### onComponentAdded()

> **onComponentAdded**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a component is added to the scene.

#### Inherited from

`FScene.onComponentAdded`

#### Defined in

packages/core/dist/index.d.ts:145

***

### onFrame()

> **onFrame**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a frame is rendered.

#### Inherited from

`FScene.onFrame`

#### Defined in

packages/core/dist/index.d.ts:141

***

### onReady()

> **onReady**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:242](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L242)

## Properties

### DEBUG\_LINES

> **DEBUG\_LINES**: `Graphics`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:41](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L41)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Inherited from

`FScene.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

packages/core/dist/index.d.ts:132

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Inherited from

`FScene.__CALLBACKS_ON_FRAME__`

#### Defined in

packages/core/dist/index.d.ts:127

***

### \_\_DEBUG\_MODE\_\_

> **\_\_DEBUG\_MODE\_\_**: `boolean` = `false`

#### Defined in

[packages/2d/src/FScene2d.ts:42](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L42)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent2d`](FComponent2d.md)\>

#### Defined in

[packages/2d/src/FScene2d.ts:37](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L37)

***

### app

> **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/FScene2d.ts:31](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L31)

***

### camera?

> `optional` **camera**: `FCamera`

#### Inherited from

`FScene.camera`

#### Defined in

packages/core/dist/index.d.ts:116

***

### components

> **components**: [`FComponent2d`](FComponent2d.md)[]

The components in the scene.

#### Overrides

`FScene.components`

#### Defined in

[packages/2d/src/FScene2d.ts:29](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L29)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[packages/2d/src/FScene2d.ts:36](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L36)

***

### gravity

> **gravity**: `object`

#### x

> **x**: `number`

#### y

> **y**: `number`

#### z

> **z**: `number`

#### Overrides

`FScene.gravity`

#### Defined in

[packages/2d/src/FScene2d.ts:34](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L34)

***

### onReadyCallbacks

> **onReadyCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:39](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L39)

***

### viewport?

> `optional` **viewport**: `Viewport`

#### Defined in

[packages/2d/src/FScene2d.ts:32](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L32)

***

### world?

> `optional` **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/2d/src/FScene2d.ts:35](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/2d/src/FScene2d.ts#L35)
