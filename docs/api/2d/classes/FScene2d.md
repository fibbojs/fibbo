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

## Accessors

### camera

> `get` **camera**(): [`FCamera2d`](FCamera2d.md)

#### Description

Getter for the camera.
This is required because the camera is a private property.

> `set` **camera**(`camera`): `void`

#### Description

Setter for the camera.
This is required so when the camera is set, its method to defined the viewport behavior is called.

#### Parameters

• **camera**: [`FCamera2d`](FCamera2d.md)

#### Returns

[`FCamera2d`](FCamera2d.md)

#### Defined in

[packages/2d/src/FScene2d.ts:238](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L238)

## Constructors

### new FScene2d()

> **new FScene2d**(`options`?): [`FScene2d`](FScene2d.md)

#### Parameters

• **options?**: [`FScene2dOptions`](../interfaces/FScene2dOptions.md)

#### Returns

[`FScene2d`](FScene2d.md)

#### Overrides

`FScene.constructor`

#### Defined in

[packages/2d/src/FScene2d.ts:55](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L55)

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

[packages/2d/src/FScene2d.ts:206](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L206)

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

[packages/2d/src/FScene2d.ts:180](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L180)

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

[packages/2d/src/FScene2d.ts:88](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L88)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/FScene2d.ts:149](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L149)

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

packages/core/dist/index.d.ts:144

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

packages/core/dist/index.d.ts:140

***

### onReady()

> **onReady**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[packages/2d/src/FScene2d.ts:230](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L230)

## Properties

### PIXI

> **PIXI**: `__module`

#### Defined in

[packages/2d/src/FScene2d.ts:44](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L44)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Inherited from

`FScene.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

packages/core/dist/index.d.ts:131

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Inherited from

`FScene.__CALLBACKS_ON_FRAME__`

#### Defined in

packages/core/dist/index.d.ts:126

***

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: [`FCamera2d`](FCamera2d.md)

#### Defined in

[packages/2d/src/FScene2d.ts:38](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L38)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Defined in

[packages/2d/src/FScene2d.ts:42](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L42)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent2d`](FComponent2d.md)\>

#### Defined in

[packages/2d/src/FScene2d.ts:51](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L51)

***

### app

> **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/FScene2d.ts:45](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L45)

***

### components

> **components**: [`FComponent2d`](FComponent2d.md)[]

The components in the scene.

#### Overrides

`FScene.components`

#### Defined in

[packages/2d/src/FScene2d.ts:36](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L36)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[packages/2d/src/FScene2d.ts:50](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L50)

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

[packages/2d/src/FScene2d.ts:48](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L48)

***

### onReadyCallbacks

> **onReadyCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/2d/src/FScene2d.ts:53](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L53)

***

### viewport

> **viewport**: `Viewport`

#### Defined in

[packages/2d/src/FScene2d.ts:46](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L46)

***

### world

> **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/2d/src/FScene2d.ts:49](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FScene2d.ts#L49)
