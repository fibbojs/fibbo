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

[packages/2d/src/FScene2d.ts:43](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L43)

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

[packages/2d/src/FScene2d.ts:202](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L202)

***

### debug()

> **debug**(): `void`

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:246](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L246)

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

[packages/2d/src/FScene2d.ts:176](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L176)

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

[packages/2d/src/FScene2d.ts:64](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L64)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/FScene2d.ts:145](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L145)

***

### onFrame()

> **onFrame**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to the onFrame event.

#### Inherited from

`FScene.onFrame`

#### Defined in

packages/core/dist/index.d.ts:132

***

### onReady()

> **onReady**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:242](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L242)

## Properties

### DEBUG\_LINES

> **DEBUG\_LINES**: `Graphics`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:40](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L40)

***

### DEBUG\_MODE

> **DEBUG\_MODE**: `boolean` = `false`

#### Defined in

[packages/2d/src/FScene2d.ts:41](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L41)

***

### app

> **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/FScene2d.ts:30](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L30)

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

[packages/2d/src/FScene2d.ts:28](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L28)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[packages/2d/src/FScene2d.ts:35](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L35)

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

[packages/2d/src/FScene2d.ts:33](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L33)

***

### onFrameCallbacks

> **onFrameCallbacks**: (`delta`) => `void`[]

#### Inherited from

`FScene.onFrameCallbacks`

#### Defined in

packages/core/dist/index.d.ts:123

***

### onReadyCallbacks

> **onReadyCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:38](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L38)

***

### __RAPIER_TO_COMPONENT__

> **__RAPIER_TO_COMPONENT__**: `Map`\<`number`, [`FComponent2d`](FComponent2d.md)\>

#### Defined in

[packages/2d/src/FScene2d.ts:36](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L36)

***

### viewport?

> `optional` **viewport**: `Viewport`

#### Defined in

[packages/2d/src/FScene2d.ts:31](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L31)

***

### world?

> `optional` **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/2d/src/FScene2d.ts:34](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FScene2d.ts#L34)
