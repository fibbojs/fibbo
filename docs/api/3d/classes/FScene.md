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
  const ground = new FCuboid({
    position: { x: 0, y: -0.1, z: 0 },
    scale: { x: 15, y: 0.1, z: 15 },
    color: 0x1F1F1F,
  })
  ground.initCollider()

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

[3d/src/core/FScene.ts:256](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L256)

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

[3d/src/core/FScene.ts:76](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L76)

## Methods

### addCollider()

> **addCollider**(`collider`): `void`

#### Parameters

• **collider**: [`FCollider`](FCollider.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:233](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L233)

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

[3d/src/core/FScene.ts:184](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L184)

***

### addHandle()

> **addHandle**(`handle`, `component`): `void`

#### Parameters

• **handle**: `number`

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:176](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L176)

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

[3d/src/core/FScene.ts:221](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L221)

***

### addRigidBody()

> **addRigidBody**(`rigidBody`): `void`

#### Parameters

• **rigidBody**: [`FRigidBody`](FRigidBody.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:244](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L244)

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

core/dist/index.d.ts:310

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

[3d/src/core/FScene.ts:152](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L152)

***

### init()

> **init**(): `void`

Initialize the scene.

#### Returns

`void`

#### Overrides

`FSceneCore.init`

#### Defined in

[3d/src/core/FScene.ts:104](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L104)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

Initialize the physics world.

#### Returns

`Promise`\<`void`\>

#### Overrides

`FSceneCore.initPhysics`

#### Defined in

[3d/src/core/FScene.ts:132](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L132)

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

core/dist/index.d.ts:326

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

core/dist/index.d.ts:330

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

core/dist/index.d.ts:314

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

core/dist/index.d.ts:342

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

core/dist/index.d.ts:346

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

core/dist/index.d.ts:351

***

### removeCollider()

> **removeCollider**(`collider`): `void`

#### Parameters

• **collider**: [`FCollider`](FCollider.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:237](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L237)

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

[3d/src/core/FScene.ts:199](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L199)

***

### removeHandle()

> **removeHandle**(`handle`): `void`

#### Parameters

• **handle**: `number`

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:180](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L180)

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

[3d/src/core/FScene.ts:227](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L227)

***

### removeRigidBody()

> **removeRigidBody**(`rigidBody`): `void`

#### Parameters

• **rigidBody**: [`FRigidBody`](FRigidBody.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:248](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L248)

## Properties

### THREE

> **THREE**: `__module`

#### Defined in

[3d/src/core/FScene.ts:65](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L65)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

Callbacks for when a component is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

core/dist/index.d.ts:279

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[]

Callbacks for when a component is removed from the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_REMOVED__`

#### Defined in

core/dist/index.d.ts:283

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_FRAME__`

#### Defined in

core/dist/index.d.ts:275

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[]

Callbacks for when a light is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_ADDED__`

#### Defined in

core/dist/index.d.ts:291

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[]

Callbacks for when a light is removed from the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_REMOVED__`

#### Defined in

core/dist/index.d.ts:295

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[]

Callbacks for when the scene is ready.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_READY__`

#### Defined in

core/dist/index.d.ts:287

***

### \_\_CAMERA\_\_

> **\_\_CAMERA\_\_**: [`FCamera`](FCamera.md)

The camera of the scene.

#### Overrides

`FSceneCore.__CAMERA__`

#### Defined in

[3d/src/core/FScene.ts:68](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L68)

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Inherited from

`FSceneCore.__DOM_NODE__`

#### Defined in

core/dist/index.d.ts:244

***

### \_\_ENABLE\_SHADOWS\_\_

> **\_\_ENABLE\_SHADOWS\_\_**: `boolean`

#### Defined in

[3d/src/core/FScene.ts:54](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L54)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FSceneCore.__IS_2D__`

#### Defined in

core/dist/index.d.ts:230

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FSceneCore.__IS_3D__`

#### Defined in

[3d/src/core/FScene.ts:53](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L53)

***

### \_\_PHYSIC\_CONTROLLERS\_\_

> **\_\_PHYSIC\_CONTROLLERS\_\_**: `FController`[]

Controllers that will run in the physic pipeline.

#### Inherited from

`FSceneCore.__PHYSIC_CONTROLLERS__`

#### Defined in

core/dist/index.d.ts:260

***

### \_\_PHYSIC\_FRAME\_RATE\_\_

> **\_\_PHYSIC\_FRAME\_RATE\_\_**: `number`

Physic frame rate.
It is stored here as the initialisation of the physics pipeline is handled by child classes.

#### Inherited from

`FSceneCore.__PHYSIC_FRAME_RATE__`

#### Defined in

core/dist/index.d.ts:240

***

### \_\_PIPELINE\_MANAGER\_\_

> **\_\_PIPELINE\_MANAGER\_\_**: `PipelineManager`

Pipeline manager that manages the pipelines of the scene.
By default, it contains the main pipeline.

#### Inherited from

`FSceneCore.__PIPELINE_MANAGER__`

#### Defined in

core/dist/index.d.ts:235

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Overrides

`FSceneCore.__RAPIER_TO_COMPONENT__`

#### Defined in

[3d/src/core/FScene.ts:74](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L74)

***

### colliders

> **colliders**: [`FCollider`](FCollider.md)[]

#### Defined in

[3d/src/core/FScene.ts:61](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L61)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Overrides

`FSceneCore.components`

#### Defined in

[3d/src/core/FScene.ts:57](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L57)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Overrides

`FSceneCore.eventQueue`

#### Defined in

[3d/src/core/FScene.ts:73](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L73)

***

### gravity

> **gravity**: `FVector3`

#### Overrides

`FSceneCore.gravity`

#### Defined in

[3d/src/core/FScene.ts:71](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L71)

***

### lights

> **lights**: [`FLight`](FLight.md)[]

The lights in the scene.

#### Overrides

`FSceneCore.lights`

#### Defined in

[3d/src/core/FScene.ts:59](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L59)

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[3d/src/core/FScene.ts:67](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L67)

***

### rigidBodies

> **rigidBodies**: [`FRigidBody`](FRigidBody.md)[]

#### Defined in

[3d/src/core/FScene.ts:63](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L63)

***

### scene

> **scene**: `Scene`

#### Defined in

[3d/src/core/FScene.ts:66](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L66)

***

### world

> **world**: `World`

#### Overrides

`FSceneCore.world`

#### Defined in

[3d/src/core/FScene.ts:72](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/3d/src/core/FScene.ts#L72)
