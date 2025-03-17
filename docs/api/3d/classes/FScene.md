[@fibbojs](/api/index) / [3d](/api/3d) / FScene

# Class: FScene

A scene which contains the components, the Three.js scene and the Rapier world.

## Example

```ts
import { FCuboid, FGameCamera, FScene } from '@fibbojs/3d'

(async () => {
  // Initialize the scene
  const scene = new FScene()
  scene.init()
  await scene.initPhysics()

  // Create a ground
  const ground = new FCuboid()
  ground.transform.setScale(15, 0.1, 15)
  ground.transform.setPosition(0, -0.1, 0)
  ground.initCollider()
  ground.setColor(0x1F1F1F)

  // Create a cube
  const cube = new FCuboid()
  cube.initRigidBody()

  // Attach a camera to the cube
  scene.camera = new FGameCamera({ target: cube })
})()
```

## Extends

- `FScene`

## Accessors

### camera

> `get` **camera**(): [`FCamera`](FCamera.md)

The camera of the scene.

> `set` **camera**(`camera`): `void`

The camera of the scene.

#### Parameters

• **camera**: [`FCamera`](FCamera.md)

#### Returns

[`FCamera`](FCamera.md)

#### Overrides

`FSceneCore.camera`

#### Defined in

[3d/src/core/FScene.ts:255](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L255)

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

[3d/src/core/FScene.ts:75](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L75)

## Methods

### addCollider()

> **addCollider**(`collider`): `void`

#### Parameters

• **collider**: [`FCollider`](FCollider.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:232](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L232)

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

[3d/src/core/FScene.ts:183](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L183)

***

### addHandle()

> **addHandle**(`handle`, `component`): `void`

#### Parameters

• **handle**: `number`

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:175](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L175)

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

[3d/src/core/FScene.ts:220](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L220)

***

### addRigidBody()

> **addRigidBody**(`rigidBody`): `void`

#### Parameters

• **rigidBody**: [`FRigidBody`](FRigidBody.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:243](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L243)

***

### frame()

> **frame**(`delta`): `void`

Compute a frame with the given delta time.
By default, it is called every frame in the main pipeline, but this behavior can be changed by giving the `autoLoop` option as `false` when creating the scene.

#### Parameters

• **delta**: `number`

The time in seconds since the last frame.

#### Returns

`void`

#### Inherited from

`FSceneCore.frame`

#### Defined in

core/dist/index.d.ts:307

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

[3d/src/core/FScene.ts:151](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L151)

***

### init()

> **init**(): `void`

Initialize the scene.

#### Returns

`void`

#### Overrides

`FSceneCore.init`

#### Defined in

[3d/src/core/FScene.ts:103](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L103)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

Initialize the physics world.

#### Returns

`Promise`\<`void`\>

#### Overrides

`FSceneCore.initPhysics`

#### Defined in

[3d/src/core/FScene.ts:131](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L131)

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

core/dist/index.d.ts:323

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

core/dist/index.d.ts:327

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

core/dist/index.d.ts:311

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

core/dist/index.d.ts:339

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

core/dist/index.d.ts:343

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

core/dist/index.d.ts:348

***

### removeCollider()

> **removeCollider**(`collider`): `void`

#### Parameters

• **collider**: [`FCollider`](FCollider.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:236](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L236)

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

[3d/src/core/FScene.ts:198](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L198)

***

### removeHandle()

> **removeHandle**(`handle`): `void`

#### Parameters

• **handle**: `number`

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:179](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L179)

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

[3d/src/core/FScene.ts:226](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L226)

***

### removeRigidBody()

> **removeRigidBody**(`rigidBody`): `void`

#### Parameters

• **rigidBody**: [`FRigidBody`](FRigidBody.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:247](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L247)

## Properties

### THREE

> **THREE**: `__module`

#### Defined in

[3d/src/core/FScene.ts:64](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L64)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

Callbacks for when a component is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

core/dist/index.d.ts:276

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[]

Callbacks for when a component is removed from the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_REMOVED__`

#### Defined in

core/dist/index.d.ts:280

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_FRAME__`

#### Defined in

core/dist/index.d.ts:272

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[]

Callbacks for when a light is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_ADDED__`

#### Defined in

core/dist/index.d.ts:288

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[]

Callbacks for when a light is removed from the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_REMOVED__`

#### Defined in

core/dist/index.d.ts:292

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[]

Callbacks for when the scene is ready.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_READY__`

#### Defined in

core/dist/index.d.ts:284

***

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: [`FCamera`](FCamera.md)

The camera of the scene.

#### Overrides

`FSceneCore.__CAMERA__`

#### Defined in

[3d/src/core/FScene.ts:67](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L67)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Inherited from

`FSceneCore.__DOM_NODE__`

#### Defined in

core/dist/index.d.ts:241

***

### \_\_ENABLE\_SHADOWS\_\_

> **\_\_ENABLE\_SHADOWS\_\_**: `boolean`

#### Defined in

[3d/src/core/FScene.ts:53](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L53)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FSceneCore.__IS_2D__`

#### Defined in

core/dist/index.d.ts:227

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FSceneCore.__IS_3D__`

#### Defined in

[3d/src/core/FScene.ts:52](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L52)

***

### \_\_PHYSIC\_CONTROLLERS\_\_

> **\_\_PHYSIC\_CONTROLLERS\_\_**: `FController`[]

Controllers that will run in the physic pipeline.

#### Inherited from

`FSceneCore.__PHYSIC_CONTROLLERS__`

#### Defined in

core/dist/index.d.ts:257

***

### \_\_PHYSIC\_FRAME\_RATE\_\_

> **\_\_PHYSIC\_FRAME\_RATE\_\_**: `number`

Physic frame rate.
It is stored here as the initialisation of the physics pipeline is handled by child classes.

#### Inherited from

`FSceneCore.__PHYSIC_FRAME_RATE__`

#### Defined in

core/dist/index.d.ts:237

***

### \_\_PIPELINE\_MANAGER\_\_

> **\_\_PIPELINE\_MANAGER\_\_**: `PipelineManager`

Pipeline manager that manages the pipelines of the scene.
By default, it contains the main pipeline.

#### Inherited from

`FSceneCore.__PIPELINE_MANAGER__`

#### Defined in

core/dist/index.d.ts:232

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Overrides

`FSceneCore.__RAPIER_TO_COMPONENT__`

#### Defined in

[3d/src/core/FScene.ts:73](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L73)

***

### colliders

> **colliders**: [`FCollider`](FCollider.md)[]

#### Defined in

[3d/src/core/FScene.ts:60](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L60)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Overrides

`FSceneCore.components`

#### Defined in

[3d/src/core/FScene.ts:56](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L56)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Overrides

`FSceneCore.eventQueue`

#### Defined in

[3d/src/core/FScene.ts:72](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L72)

***

### gravity

> **gravity**: `FVector3`

#### Overrides

`FSceneCore.gravity`

#### Defined in

[3d/src/core/FScene.ts:70](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L70)

***

### lights

> **lights**: [`FLight`](FLight.md)[]

The lights in the scene.

#### Overrides

`FSceneCore.lights`

#### Defined in

[3d/src/core/FScene.ts:58](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L58)

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[3d/src/core/FScene.ts:66](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L66)

***

### rigidBodies

> **rigidBodies**: [`FRigidBody`](FRigidBody.md)[]

#### Defined in

[3d/src/core/FScene.ts:62](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L62)

***

### scene

> **scene**: `Scene`

#### Defined in

[3d/src/core/FScene.ts:65](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L65)

***

### world

> **world**: `World`

#### Overrides

`FSceneCore.world`

#### Defined in

[3d/src/core/FScene.ts:71](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/3d/src/core/FScene.ts#L71)
