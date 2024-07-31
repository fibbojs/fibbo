[@fibbojs](/api/index) / [2d](/api/2d) / FScene2d

# Class: FScene2d

## Description

A scene which contains the models, the Three.js scene and the Rapier world.

## Example

```ts
import { FScene2d, FSquare } from '@fibbojs/2d'

const scene = new FScene2d()

const square = new FSquare()
scene.addComponent(square)
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

[packages/2d/src/FScene2d.ts:37](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L37)

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

[packages/2d/src/FScene2d.ts:163](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L163)

***

### debug()

> **debug**(): `void`

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:198](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L198)

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

[packages/2d/src/FScene2d.ts:58](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L58)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/FScene2d.ts:139](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L139)

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

packages/core/dist/index.d.ts:41

***

### onReady()

> **onReady**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:194](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L194)

## Properties

### DEBUG\_LINES

> **DEBUG\_LINES**: `Graphics`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:33](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L33)

***

### DEBUG\_MODE

> **DEBUG\_MODE**: `boolean` = `false`

#### Defined in

[packages/2d/src/FScene2d.ts:35](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L35)

***

### app

> **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/FScene2d.ts:26](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L26)

***

### camera?

> `optional` **camera**: `FCamera`

#### Inherited from

`FScene.camera`

#### Defined in

packages/core/dist/index.d.ts:25

***

### components

> **components**: [`FComponent2d`](FComponent2d.md)[]

#### Overrides

`FScene.components`

#### Defined in

[packages/2d/src/FScene2d.ts:23](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L23)

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

[packages/2d/src/FScene2d.ts:29](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L29)

***

### onFrameCallbacks

> **onFrameCallbacks**: (`delta`) => `void`[]

#### Inherited from

`FScene.onFrameCallbacks`

#### Defined in

packages/core/dist/index.d.ts:32

***

### onReadyCallbacks

> **onReadyCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:31](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L31)

***

### viewport?

> `optional` **viewport**: `Viewport`

#### Defined in

[packages/2d/src/FScene2d.ts:27](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L27)

***

### world?

> `optional` **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/2d/src/FScene2d.ts:24](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/2d/src/FScene2d.ts#L24)
