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

> **new FScene2d**(`_options`): [`FScene2d`](FScene2d.md)

#### Parameters

• **\_options**: `object` = `{}`

#### Returns

[`FScene2d`](FScene2d.md)

#### Overrides

`FScene.constructor`

#### Defined in

[packages/2d/src/FScene2d.ts:42](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L42)

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

[packages/2d/src/FScene2d.ts:172](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L172)

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

[packages/2d/src/FScene2d.ts:146](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L146)

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

[packages/2d/src/FScene2d.ts:59](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L59)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/FScene2d.ts:115](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L115)

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

[packages/2d/src/FScene2d.ts:212](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L212)

## Properties

### PIXI

> **PIXI**: `__module`

#### Defined in

[packages/2d/src/FScene2d.ts:31](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L31)

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

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent2d`](FComponent2d.md)\>

#### Defined in

[packages/2d/src/FScene2d.ts:38](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L38)

***

### app

> **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/FScene2d.ts:32](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L32)

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

[packages/2d/src/FScene2d.ts:29](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L29)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[packages/2d/src/FScene2d.ts:37](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L37)

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

[packages/2d/src/FScene2d.ts:35](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L35)

***

### onReadyCallbacks

> **onReadyCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:40](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L40)

***

### viewport

> **viewport**: `Viewport`

#### Defined in

[packages/2d/src/FScene2d.ts:33](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L33)

***

### world

> **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/2d/src/FScene2d.ts:36](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FScene2d.ts#L36)
