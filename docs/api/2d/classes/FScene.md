[@fibbojs](/api/index) / [2d](/api/2d) / FScene

# Class: FScene

## Description

A scene which contains the models, the Pixi.js scene and the Rapier world.

## Example

```ts
import { FScene, FRectangle } from '@fibbojs/2d'

(async () => {
 const scene = new FScene()
 await scene.init()
 await scene.initPhysics()

 const square = new FRectangle(scene)
 square.initRigidBody()
 scene.addComponent(square)
})()
```

## Extends

- `FScene`

## Accessors

### camera

> `get` **camera**(): [`FCamera`](FCamera.md)

#### Description

Getter for the camera.
This is required because the camera is a private property.

> `set` **camera**(`camera`): `void`

#### Description

Setter for the camera.
This is required so when the camera is set, its method to defined the viewport behavior is called.

#### Parameters

• **camera**: [`FCamera`](FCamera.md)

#### Returns

[`FCamera`](FCamera.md)

#### Defined in

[2d/src/core/FScene.ts:273](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L273)

## Constructors

### new FScene()

> **new FScene**(`options`?): [`FScene`](FScene.md)

#### Parameters

• **options?**: [`FSceneOptions`](../interfaces/FSceneOptions.md)

#### Returns

[`FScene`](FScene.md)

#### Overrides

`FSceneCore.constructor`

#### Defined in

[2d/src/core/FScene.ts:60](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L60)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Description

Add a component to the scene.

#### Overrides

`FSceneCore.addComponent`

#### Defined in

[2d/src/core/FScene.ts:214](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L214)

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

[2d/src/core/FScene.ts:190](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L190)

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

[2d/src/core/FScene.ts:98](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L98)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[2d/src/core/FScene.ts:159](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L159)

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

`FSceneCore.onComponentAdded`

#### Defined in

core/dist/index.d.ts:216

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

`FSceneCore.onFrame`

#### Defined in

core/dist/index.d.ts:212

***

### onReady()

> **onReady**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Defined in

[2d/src/core/FScene.ts:265](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L265)

***

### removeComponent()

> **removeComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Description

Remove a component from the scene.

#### Overrides

`FSceneCore.removeComponent`

#### Defined in

[2d/src/core/FScene.ts:244](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L244)

## Properties

### PIXI

> **PIXI**: `__module`

#### Defined in

[2d/src/core/FScene.ts:49](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L49)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

core/dist/index.d.ts:194

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[]

#### Description

Callbacks for when a component is remove from the scene.
It is an array of functions that take the component as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_REMOVED__`

#### Defined in

core/dist/index.d.ts:199

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_FRAME__`

#### Defined in

core/dist/index.d.ts:189

***

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: [`FCamera`](FCamera.md)

#### Defined in

[2d/src/core/FScene.ts:43](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L43)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Defined in

[2d/src/core/FScene.ts:47](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L47)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FSceneCore.__IS_2D__`

#### Defined in

[2d/src/core/FScene.ts:38](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L38)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FSceneCore.__IS_3D__`

#### Defined in

core/dist/index.d.ts:173

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Defined in

[2d/src/core/FScene.ts:56](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L56)

***

### app

> **app**: `Application`\<`Renderer`\>

#### Defined in

[2d/src/core/FScene.ts:50](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L50)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Overrides

`FSceneCore.components`

#### Defined in

[2d/src/core/FScene.ts:41](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L41)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[2d/src/core/FScene.ts:55](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L55)

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

`FSceneCore.gravity`

#### Defined in

[2d/src/core/FScene.ts:53](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L53)

***

### onReadyCallbacks

> **onReadyCallbacks**: () => `void`[] = `[]`

#### Defined in

[2d/src/core/FScene.ts:58](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L58)

***

### viewport

> **viewport**: `Viewport`

#### Defined in

[2d/src/core/FScene.ts:51](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L51)

***

### world

> **world**: `World`

#### Overrides

`FSceneCore.world`

#### Defined in

[2d/src/core/FScene.ts:54](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/2d/src/core/FScene.ts#L54)
