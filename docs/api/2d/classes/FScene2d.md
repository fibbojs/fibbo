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

[packages/2d/src/FScene2d.ts:42](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L42)

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

[packages/2d/src/FScene2d.ts:168](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L168)

***

### debug()

> **debug**(): `void`

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:203](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L203)

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

[packages/2d/src/FScene2d.ts:63](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L63)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/FScene2d.ts:144](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L144)

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

packages/core/dist/index.d.ts:78

***

### onReady()

> **onReady**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:199](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L199)

## Properties

### DEBUG\_LINES

> **DEBUG\_LINES**: `Graphics`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:38](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L38)

***

### DEBUG\_MODE

> **DEBUG\_MODE**: `boolean` = `false`

#### Defined in

[packages/2d/src/FScene2d.ts:40](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L40)

***

### app

> **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/FScene2d.ts:31](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L31)

***

### camera?

> `optional` **camera**: `FCamera`

#### Inherited from

`FScene.camera`

#### Defined in

packages/core/dist/index.d.ts:62

***

### components

> **components**: [`FComponent2d`](FComponent2d.md)[]

#### Overrides

`FScene.components`

#### Defined in

[packages/2d/src/FScene2d.ts:28](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L28)

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

[packages/2d/src/FScene2d.ts:34](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L34)

***

### onFrameCallbacks

> **onFrameCallbacks**: (`delta`) => `void`[]

#### Inherited from

`FScene.onFrameCallbacks`

#### Defined in

packages/core/dist/index.d.ts:69

***

### onReadyCallbacks

> **onReadyCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:36](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L36)

***

### viewport?

> `optional` **viewport**: `Viewport`

#### Defined in

[packages/2d/src/FScene2d.ts:32](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L32)

***

### world?

> `optional` **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/2d/src/FScene2d.ts:29](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/2d/src/FScene2d.ts#L29)
