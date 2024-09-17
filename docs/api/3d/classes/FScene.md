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

[3d/src/core/FScene.ts:71](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L71)

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

[3d/src/core/FScene.ts:183](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L183)

***

### addLight()

> **addLight**(`light`): `void`

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Description

Add a light to the scene.

#### Overrides

`FSceneCore.addLight`

#### Defined in

[3d/src/core/FScene.ts:236](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L236)

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

[3d/src/core/FScene.ts:159](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L159)

***

### init()

> **init**(): `void`

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:95](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L95)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[3d/src/core/FScene.ts:130](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L130)

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

core/dist/index.d.ts:269

***

### onComponentRemoved()

> **onComponentRemoved**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a component is removed from the scene.

#### Inherited from

`FSceneCore.onComponentRemoved`

#### Defined in

core/dist/index.d.ts:273

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

core/dist/index.d.ts:265

***

### onLightAdded()

> **onLightAdded**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a light is added to the scene.

#### Inherited from

`FSceneCore.onLightAdded`

#### Defined in

core/dist/index.d.ts:282

***

### onLightRemoved()

> **onLightRemoved**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when a light is removed from the scene.

#### Inherited from

`FSceneCore.onLightRemoved`

#### Defined in

core/dist/index.d.ts:286

***

### onReady()

> **onReady**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to be called when the scene is ready.
The scene is ready when the `init` method has finished.

#### Inherited from

`FSceneCore.onReady`

#### Defined in

core/dist/index.d.ts:278

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

[3d/src/core/FScene.ts:214](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L214)

***

### removeLight()

> **removeLight**(`light`): `void`

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Description

Remove a light from the scene.

#### Overrides

`FSceneCore.removeLight`

#### Defined in

[3d/src/core/FScene.ts:243](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L243)

## Properties

### THREE

> **THREE**: `__module`

#### Defined in

[3d/src/core/FScene.ts:60](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L60)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

core/dist/index.d.ts:225

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[]

#### Description

Callbacks for when a component is remove from the scene.
It is an array of functions that take the component as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_REMOVED__`

#### Defined in

core/dist/index.d.ts:230

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_FRAME__`

#### Defined in

core/dist/index.d.ts:220

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[]

#### Description

Callbacks for when a light is added to the scene.
It is an array of functions that take the light as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_ADDED__`

#### Defined in

core/dist/index.d.ts:239

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[]

#### Description

Callbacks for when a light is added to the scene.
It is an array of functions that take the light as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_REMOVED__`

#### Defined in

core/dist/index.d.ts:244

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[]

#### Description

Callbacks for when the scene is ready.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_READY__`

#### Defined in

core/dist/index.d.ts:234

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Inherited from

`FSceneCore.__DOM_NODE__`

#### Defined in

core/dist/index.d.ts:196

***

### \_\_ENABLE\_SHADOWS\_\_

> **\_\_ENABLE\_SHADOWS\_\_**: `boolean`

#### Defined in

[3d/src/core/FScene.ts:52](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L52)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FSceneCore.__IS_2D__`

#### Defined in

core/dist/index.d.ts:192

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FSceneCore.__IS_3D__`

#### Defined in

[3d/src/core/FScene.ts:51](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L51)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Overrides

`FSceneCore.__RAPIER_TO_COMPONENT__`

#### Defined in

[3d/src/core/FScene.ts:69](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L69)

***

### camera

> **camera**: [`FCamera`](FCamera.md)

#### Defined in

[3d/src/core/FScene.ts:63](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L63)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Overrides

`FSceneCore.components`

#### Defined in

[3d/src/core/FScene.ts:55](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L55)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Overrides

`FSceneCore.eventQueue`

#### Defined in

[3d/src/core/FScene.ts:68](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L68)

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

[3d/src/core/FScene.ts:66](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L66)

***

### lights

> **lights**: [`FLight`](FLight.md)[]

The lights in the scene.

#### Overrides

`FSceneCore.lights`

#### Defined in

[3d/src/core/FScene.ts:57](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L57)

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[3d/src/core/FScene.ts:62](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L62)

***

### scene

> **scene**: `Scene`

#### Defined in

[3d/src/core/FScene.ts:61](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L61)

***

### world

> **world**: `World`

#### Overrides

`FSceneCore.world`

#### Defined in

[3d/src/core/FScene.ts:67](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/3d/src/core/FScene.ts#L67)
