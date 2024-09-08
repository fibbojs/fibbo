[@fibbojs](/api/index) / [3d](/api/3d) / FScene

# Class: FScene

## Description

A scene which contains the models, the Three.js scene and the Rapier world.

## Example

```ts
import { FCuboid, FGameCamera, FScene } from '@fibbojs/3d'

(async () => {
 // Initialize the scene
 const scene = new FScene()
 scene.init()
 await scene.initPhysics()

 // Create a ground
 const ground = new FCuboid(scene)
 ground.setScale(15, 0.1, 15)
 ground.setPosition(0, -0.1, 0)
 ground.initCollider()
 ground.setColor(0x1F1F1F)
 scene.addComponent(ground)

 // Create a cube
 const cube = new FCuboid(scene)
 cube.initRigidBody()
 scene.addComponent(cube)

 // Attach a camera to the cube
 scene.camera = new FGameCamera(cube)
})()
```

## Extends

- `FScene`

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

[3d/src/core/FScene.ts:68](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L68)

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

[3d/src/core/FScene.ts:178](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L178)

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

[3d/src/core/FScene.ts:154](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L154)

***

### init()

> **init**(): `void`

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:100](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L100)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[3d/src/core/FScene.ts:125](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L125)

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

[3d/src/core/FScene.ts:209](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L209)

## Properties

### THREE

> **THREE**: `__module`

#### Defined in

[3d/src/core/FScene.ts:58](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L58)

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

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Defined in

[3d/src/core/FScene.ts:56](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L56)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FSceneCore.__IS_2D__`

#### Defined in

core/dist/index.d.ts:174

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FSceneCore.__IS_3D__`

#### Defined in

[3d/src/core/FScene.ts:49](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L49)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Defined in

[3d/src/core/FScene.ts:66](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L66)

***

### camera

> **camera**: [`FCamera`](FCamera.md)

#### Defined in

[3d/src/core/FScene.ts:61](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L61)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Overrides

`FSceneCore.components`

#### Defined in

[3d/src/core/FScene.ts:52](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L52)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[3d/src/core/FScene.ts:65](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L65)

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

[3d/src/core/FScene.ts:63](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L63)

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[3d/src/core/FScene.ts:60](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L60)

***

### scene

> **scene**: `Scene`

#### Defined in

[3d/src/core/FScene.ts:59](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L59)

***

### world

> **world**: `World`

#### Overrides

`FSceneCore.world`

#### Defined in

[3d/src/core/FScene.ts:64](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FScene.ts#L64)
