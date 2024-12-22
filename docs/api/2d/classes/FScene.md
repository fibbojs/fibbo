[@fibbojs](/api/index) / [2d](/api/2d) / FScene

# Class: FScene

A scene which contains the components, the Pixi.js scene and the Rapier world.

## Example

```ts
import { FRectangle, FScene } from '@fibbojs/2d'

(async () => {
  const scene = new FScene()
  await scene.init()
  await scene.initPhysics()

  const square = new FRectangle(scene)
  square.initRigidBody()
})()
```

## Extends

- `FScene`

## Accessors

### camera

> `get` **camera**(): [`FCamera`](FCamera.md)

Getter for the camera.
This is required because the camera is a private property.

> `set` **camera**(`camera`): `void`

Setter for the camera.
This is required so when the camera is set, its method to defined the viewport behavior is called.

#### Parameters

• **camera**: [`FCamera`](FCamera.md)

#### Returns

[`FCamera`](FCamera.md)

#### Defined in

[packages/2d/src/core/FScene.ts:285](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L285)

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

[packages/2d/src/core/FScene.ts:63](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L63)

## Methods

### addCollider()

> **addCollider**(`collider`): `void`

#### Parameters

• **collider**: [`FCollider`](FCollider.md)

#### Returns

`void`

#### Defined in

[packages/2d/src/core/FScene.ts:256](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L256)

***

### addComponent()

> **addComponent**(`component`): `void`

Add a component to the scene.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Overrides

`FSceneCore.addComponent`

#### Defined in

[packages/2d/src/core/FScene.ts:213](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L213)

***

### addHandle()

> **addHandle**(`handle`, `component`): `void`

#### Parameters

• **handle**: `number`

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[packages/2d/src/core/FScene.ts:205](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L205)

***

### addLight()

> **addLight**(`light`): `void`

Add a light to the scene.

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Overrides

`FSceneCore.addLight`

#### Defined in

[packages/2d/src/core/FScene.ts:248](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L248)

***

### addRigidBody()

> **addRigidBody**(`rigidBody`): `void`

#### Parameters

• **rigidBody**: [`FRigidBody`](FRigidBody.md)

#### Returns

`void`

#### Defined in

[packages/2d/src/core/FScene.ts:267](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L267)

***

### frame()

> **frame**(`delta`): `void`

Compute a frame with the given delta time.
By default, it is called every frame, but this behavior can be changed by giving the `autoLoop` option as `false` when creating the scene.

#### Parameters

• **delta**: `number`

The time in seconds since the last frame.

#### Returns

`void`

#### Inherited from

`FSceneCore.frame`

#### Defined in

packages/core/dist/index.d.ts:154

***

### handleCollision()

> **handleCollision**(`handle1`, `handle2`, `start`): `void`

Handle a collision event between two colliders.

#### Parameters

• **handle1**: `number`

The handle of the first collider

• **handle2**: `number`

The handle of the second collider

• **start**: `boolean`

If the collision has started or ended

#### Returns

`void`

#### Defined in

[packages/2d/src/core/FScene.ts:181](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L181)

***

### init()

> **init**(): `Promise`\<`void`\>

Initialize the scene.
The application will create a renderer using WebGL, if possible,
with a fallback to a canvas render. It will also setup the ticker
and the root stage PIXI.Container.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/core/FScene.ts:85](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L85)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/2d/src/core/FScene.ts:146](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L146)

***

### onComponentAdded()

> **onComponentAdded**(`callback`): `void`

Add a callback to be called when a component is added to the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Inherited from

`FSceneCore.onComponentAdded`

#### Defined in

packages/core/dist/index.d.ts:162

***

### onComponentRemoved()

> **onComponentRemoved**(`callback`): `void`

Add a callback to be called when a component is removed from the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Inherited from

`FSceneCore.onComponentRemoved`

#### Defined in

packages/core/dist/index.d.ts:166

***

### onFrame()

> **onFrame**(`callback`): `void`

Add a callback to be called when a frame is rendered.

#### Parameters

• **callback**

#### Returns

`void`

#### Inherited from

`FSceneCore.onFrame`

#### Defined in

packages/core/dist/index.d.ts:158

***

### onLightAdded()

> **onLightAdded**(`callback`): `void`

Add a callback to be called when a light is added to the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Inherited from

`FSceneCore.onLightAdded`

#### Defined in

packages/core/dist/index.d.ts:175

***

### onLightRemoved()

> **onLightRemoved**(`callback`): `void`

Add a callback to be called when a light is removed from the scene.

#### Parameters

• **callback**

#### Returns

`void`

#### Inherited from

`FSceneCore.onLightRemoved`

#### Defined in

packages/core/dist/index.d.ts:179

***

### onReady()

> **onReady**(`callback`): `void`

Add a callback to be called when the scene is ready.
The scene is ready when the `init` method has finished.

#### Parameters

• **callback**

#### Returns

`void`

#### Inherited from

`FSceneCore.onReady`

#### Defined in

packages/core/dist/index.d.ts:171

***

### removeCollider()

> **removeCollider**(`collider`): `void`

#### Parameters

• **collider**: [`FCollider`](FCollider.md)

#### Returns

`void`

#### Defined in

[packages/2d/src/core/FScene.ts:260](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L260)

***

### removeComponent()

> **removeComponent**(`component`): `void`

Remove a component from the scene.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Overrides

`FSceneCore.removeComponent`

#### Defined in

[packages/2d/src/core/FScene.ts:227](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L227)

***

### removeHandle()

> **removeHandle**(`handle`): `void`

#### Parameters

• **handle**: `number`

#### Returns

`void`

#### Defined in

[packages/2d/src/core/FScene.ts:209](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L209)

***

### removeLight()

> **removeLight**(`light`): `void`

Remove a light from the scene.

#### Parameters

• **light**: [`FLight`](FLight.md)

#### Returns

`void`

#### Overrides

`FSceneCore.removeLight`

#### Defined in

[packages/2d/src/core/FScene.ts:252](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L252)

***

### removeRigidBody()

> **removeRigidBody**(`rigidBody`): `void`

#### Parameters

• **rigidBody**: [`FRigidBody`](FRigidBody.md)

#### Returns

`void`

#### Defined in

[packages/2d/src/core/FScene.ts:271](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L271)

## Properties

### PIXI

> **PIXI**: `__module`

#### Defined in

[packages/2d/src/core/FScene.ts:53](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L53)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

Callbacks for when a component is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

packages/core/dist/index.d.ts:115

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[]

Callbacks for when a component is remove from the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_REMOVED__`

#### Defined in

packages/core/dist/index.d.ts:119

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_FRAME__`

#### Defined in

packages/core/dist/index.d.ts:111

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[]

Callbacks for when a light is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_ADDED__`

#### Defined in

packages/core/dist/index.d.ts:127

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[]

Callbacks for when a light is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_REMOVED__`

#### Defined in

packages/core/dist/index.d.ts:131

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[]

Callbacks for when the scene is ready.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_READY__`

#### Defined in

packages/core/dist/index.d.ts:123

***

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: [`FCamera`](FCamera.md)

#### Defined in

[packages/2d/src/core/FScene.ts:50](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L50)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Inherited from

`FSceneCore.__DOM_NODE__`

#### Defined in

packages/core/dist/index.d.ts:88

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FSceneCore.__IS_2D__`

#### Defined in

[packages/2d/src/core/FScene.ts:38](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L38)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FSceneCore.__IS_3D__`

#### Defined in

packages/core/dist/index.d.ts:78

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Overrides

`FSceneCore.__RAPIER_TO_COMPONENT__`

#### Defined in

[packages/2d/src/core/FScene.ts:61](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L61)

***

### app

> **app**: `Application`\<`Renderer`\>

#### Defined in

[packages/2d/src/core/FScene.ts:54](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L54)

***

### colliders

> **colliders**: [`FCollider`](FCollider.md)[]

#### Defined in

[packages/2d/src/core/FScene.ts:45](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L45)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Overrides

`FSceneCore.components`

#### Defined in

[packages/2d/src/core/FScene.ts:41](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L41)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Overrides

`FSceneCore.eventQueue`

#### Defined in

[packages/2d/src/core/FScene.ts:60](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L60)

***

### gravity

> **gravity**: `object`

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Overrides

`FSceneCore.gravity`

#### Defined in

[packages/2d/src/core/FScene.ts:58](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L58)

***

### lights

> **lights**: [`FLight`](FLight.md)[]

The lights in the scene.

#### Overrides

`FSceneCore.lights`

#### Defined in

[packages/2d/src/core/FScene.ts:43](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L43)

***

### rigidBodies

> **rigidBodies**: [`FRigidBody`](FRigidBody.md)[]

#### Defined in

[packages/2d/src/core/FScene.ts:47](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L47)

***

### viewport

> **viewport**: `Viewport`

#### Defined in

[packages/2d/src/core/FScene.ts:55](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L55)

***

### world

> **world**: `World`

#### Overrides

`FSceneCore.world`

#### Defined in

[packages/2d/src/core/FScene.ts:59](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FScene.ts#L59)
