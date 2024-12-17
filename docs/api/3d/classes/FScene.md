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
  const ground = new FCuboid(scene)
  ground.transform.setScale(15, 0.1, 15)
  ground.transform.setPosition(0, -0.1, 0)
  ground.initCollider()
  ground.setColor(0x1F1F1F)

  // Create a cube
  const cube = new FCuboid(scene)
  cube.initRigidBody()

  // Attach a camera to the cube
  scene.camera = new FGameCamera(scene, { target: cube })
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

[3d/src/core/FScene.ts:73](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L73)

## Methods

### addCollider()

> **addCollider**(`collider`): `void`

#### Parameters

• **collider**: [`FCollider`](FCollider.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:250](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L250)

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

[3d/src/core/FScene.ts:201](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L201)

***

### addHandle()

> **addHandle**(`handle`, `component`): `void`

#### Parameters

• **handle**: `number`

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:193](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L193)

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

[3d/src/core/FScene.ts:238](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L238)

***

### addRigidBody()

> **addRigidBody**(`rigidBody`): `void`

#### Parameters

• **rigidBody**: [`FRigidBody`](FRigidBody.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:261](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L261)

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

core/dist/index.d.ts:149

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

[3d/src/core/FScene.ts:169](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L169)

***

### init()

> **init**(): `void`

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:101](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L101)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[3d/src/core/FScene.ts:136](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L136)

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

core/dist/index.d.ts:157

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

core/dist/index.d.ts:161

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

core/dist/index.d.ts:153

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

core/dist/index.d.ts:170

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

core/dist/index.d.ts:174

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

core/dist/index.d.ts:166

***

### removeCollider()

> **removeCollider**(`collider`): `void`

#### Parameters

• **collider**: [`FCollider`](FCollider.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:254](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L254)

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

[3d/src/core/FScene.ts:216](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L216)

***

### removeHandle()

> **removeHandle**(`handle`): `void`

#### Parameters

• **handle**: `number`

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:197](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L197)

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

[3d/src/core/FScene.ts:244](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L244)

***

### removeRigidBody()

> **removeRigidBody**(`rigidBody`): `void`

#### Parameters

• **rigidBody**: [`FRigidBody`](FRigidBody.md)

#### Returns

`void`

#### Defined in

[3d/src/core/FScene.ts:265](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L265)

## Properties

### THREE

> **THREE**: `__module`

#### Defined in

[3d/src/core/FScene.ts:62](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L62)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

Callbacks for when a component is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

core/dist/index.d.ts:110

***

### \_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_REMOVED\_\_**: (`component`) => `void`[]

Callbacks for when a component is remove from the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_REMOVED__`

#### Defined in

core/dist/index.d.ts:114

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_FRAME__`

#### Defined in

core/dist/index.d.ts:106

***

### \_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_ADDED\_\_**: (`light`) => `void`[]

Callbacks for when a light is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_ADDED__`

#### Defined in

core/dist/index.d.ts:122

***

### \_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_

> **\_\_CALLBACKS\_ON\_LIGHT\_REMOVED\_\_**: (`light`) => `void`[]

Callbacks for when a light is added to the scene.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_LIGHT_REMOVED__`

#### Defined in

core/dist/index.d.ts:126

***

### \_\_CALLBACKS\_ON\_READY\_\_

> **\_\_CALLBACKS\_ON\_READY\_\_**: () => `void`[]

Callbacks for when the scene is ready.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_READY__`

#### Defined in

core/dist/index.d.ts:118

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Inherited from

`FSceneCore.__DOM_NODE__`

#### Defined in

core/dist/index.d.ts:83

***

### \_\_ENABLE\_SHADOWS\_\_

> **\_\_ENABLE\_SHADOWS\_\_**: `boolean`

#### Defined in

[3d/src/core/FScene.ts:51](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L51)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FSceneCore.__IS_2D__`

#### Defined in

core/dist/index.d.ts:79

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FSceneCore.__IS_3D__`

#### Defined in

[3d/src/core/FScene.ts:50](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L50)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Overrides

`FSceneCore.__RAPIER_TO_COMPONENT__`

#### Defined in

[3d/src/core/FScene.ts:71](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L71)

***

### camera

> **camera**: [`FCamera`](FCamera.md)

#### Defined in

[3d/src/core/FScene.ts:65](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L65)

***

### colliders

> **colliders**: [`FCollider`](FCollider.md)[]

#### Defined in

[3d/src/core/FScene.ts:58](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L58)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Overrides

`FSceneCore.components`

#### Defined in

[3d/src/core/FScene.ts:54](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L54)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Overrides

`FSceneCore.eventQueue`

#### Defined in

[3d/src/core/FScene.ts:70](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L70)

***

### gravity

> **gravity**: `FVector3`

#### Overrides

`FSceneCore.gravity`

#### Defined in

[3d/src/core/FScene.ts:68](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L68)

***

### lights

> **lights**: [`FLight`](FLight.md)[]

The lights in the scene.

#### Overrides

`FSceneCore.lights`

#### Defined in

[3d/src/core/FScene.ts:56](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L56)

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[3d/src/core/FScene.ts:64](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L64)

***

### rigidBodies

> **rigidBodies**: [`FRigidBody`](FRigidBody.md)[]

#### Defined in

[3d/src/core/FScene.ts:60](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L60)

***

### scene

> **scene**: `Scene`

#### Defined in

[3d/src/core/FScene.ts:63](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L63)

***

### world

> **world**: `World`

#### Overrides

`FSceneCore.world`

#### Defined in

[3d/src/core/FScene.ts:69](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FScene.ts#L69)
