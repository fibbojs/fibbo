[@fibbojs](/api/index) / [3d](/api/3d) / FScene

# Class: FScene

## Description

A scene which contains the models, the Three.js scene and the Rapier world.

## Example

```ts
import { FCube, FGameCamera, FScene } from '@fibbojs/3d'

(async () => {
 // Initialize the scene
 const scene = new FScene()
 scene.init()
 await scene.initPhysics()

 // Create a ground
 const ground = new FCube(scene)
 ground.setScale(15, 0.1, 15)
 ground.setPosition(0, -0.1, 0)
 ground.initCollider()
 ground.setColor(0x1F1F1F)
 scene.addComponent(ground)

 // Create a cube
 const cube = new FCube(scene)
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

[packages/3d/src/FScene.ts:70](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L70)

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

[packages/3d/src/FScene.ts:189](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L189)

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

[packages/3d/src/FScene.ts:163](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L163)

***

### init()

> **init**(): `void`

#### Returns

`void`

#### Defined in

[packages/3d/src/FScene.ts:102](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L102)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/3d/src/FScene.ts:134](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L134)

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

packages/core/dist/index.d.ts:154

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

packages/core/dist/index.d.ts:150

## Properties

### THREE

> **THREE**: `__module`

#### Defined in

[packages/3d/src/FScene.ts:59](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L59)

***

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

packages/core/dist/index.d.ts:141

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Inherited from

`FSceneCore.__CALLBACKS_ON_FRAME__`

#### Defined in

packages/core/dist/index.d.ts:136

***

### \_\_DOM\_NODE\_\_

> **\_\_DOM\_NODE\_\_**: `HTMLElement`

DOM element that the renderer will be appended to

#### Defined in

[packages/3d/src/FScene.ts:57](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L57)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FSceneCore.__IS_2D__`

#### Defined in

packages/core/dist/index.d.ts:121

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FSceneCore.__IS_3D__`

#### Defined in

[packages/3d/src/FScene.ts:50](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L50)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent`](FComponent.md)\>

#### Defined in

[packages/3d/src/FScene.ts:68](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L68)

***

### camera

> **camera**: [`FCamera`](FCamera.md)

#### Defined in

[packages/3d/src/FScene.ts:62](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L62)

***

### components

> **components**: [`FComponent`](FComponent.md)[]

The components in the scene.

#### Overrides

`FSceneCore.components`

#### Defined in

[packages/3d/src/FScene.ts:53](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L53)

***

### controls?

> `optional` **controls**: `OrbitControls`

#### Defined in

[packages/3d/src/FScene.ts:63](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L63)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[packages/3d/src/FScene.ts:67](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L67)

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

[packages/3d/src/FScene.ts:65](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L65)

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[packages/3d/src/FScene.ts:61](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L61)

***

### scene

> **scene**: `Scene`

#### Defined in

[packages/3d/src/FScene.ts:60](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L60)

***

### world

> **world**: `World`

#### Overrides

`FSceneCore.world`

#### Defined in

[packages/3d/src/FScene.ts:66](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FScene.ts#L66)
