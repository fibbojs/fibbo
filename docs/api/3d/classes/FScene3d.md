[@fibbojs](/api/index) / [3d](/api/3d) / FScene3d

# Class: FScene3d

## Description

A scene which contains the models, the Three.js scene and the Rapier world.

## Example

```ts
import { FCube, FGameCamera, FScene3d } from '@fibbojs/3d'

(async () => {
 // Initialize the scene
 const scene = new FScene3d()
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
 scene.camera = new FGameCamera(cube, scene)
})()
```

## Extends

- `FScene`

## Constructors

### new FScene3d()

> **new FScene3d**(`options`): [`FScene3d`](FScene3d.md)

#### Parameters

• **options** = `...`

• **options.debug?**: `boolean`

#### Returns

[`FScene3d`](FScene3d.md)

#### Overrides

`FScene.constructor`

#### Defined in

[packages/3d/src/FScene3d.ts:58](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L58)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent3d`](FComponent3d.md)

#### Returns

`void`

#### Description

Add a component to the scene.

#### Overrides

`FScene.addComponent`

#### Defined in

[packages/3d/src/FScene3d.ts:195](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L195)

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

[packages/3d/src/FScene3d.ts:169](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L169)

***

### init()

> **init**(): `void`

#### Returns

`void`

#### Defined in

[packages/3d/src/FScene3d.ts:67](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L67)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/3d/src/FScene3d.ts:123](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L123)

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

packages/core/dist/index.d.ts:145

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

packages/core/dist/index.d.ts:141

## Properties

### \_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_

> **\_\_CALLBACKS\_ON\_COMPONENT\_ADDED\_\_**: (`component`) => `void`[]

#### Description

Callbacks for when a component is added to the scene.
It is an array of functions that take the component as an argument.

#### Inherited from

`FScene.__CALLBACKS_ON_COMPONENT_ADDED__`

#### Defined in

packages/core/dist/index.d.ts:132

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: (`delta`) => `void`[]

#### Description

Callbacks for when a frame is rendered.
It is an array of functions that take the delta time as an argument.

#### Inherited from

`FScene.__CALLBACKS_ON_FRAME__`

#### Defined in

packages/core/dist/index.d.ts:127

***

### \_\_DEBUG\_MODE\_\_

> **\_\_DEBUG\_MODE\_\_**: `boolean`

#### Defined in

[packages/3d/src/FScene3d.ts:56](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L56)

***

### \_\_RAPIER\_TO\_COMPONENT\_\_

> **\_\_RAPIER\_TO\_COMPONENT\_\_**: `Map`\<`number`, [`FComponent3d`](FComponent3d.md)\>

#### Defined in

[packages/3d/src/FScene3d.ts:54](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L54)

***

### camera

> **camera**: [`FCamera3d`](FCamera3d.md)

#### Overrides

`FScene.camera`

#### Defined in

[packages/3d/src/FScene3d.ts:47](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L47)

***

### components

> **components**: [`FComponent3d`](FComponent3d.md)[]

The components in the scene.

#### Overrides

`FScene.components`

#### Defined in

[packages/3d/src/FScene3d.ts:43](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L43)

***

### controls?

> `optional` **controls**: `OrbitControls`

#### Defined in

[packages/3d/src/FScene3d.ts:49](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L49)

***

### debugCamera

> **debugCamera**: [`FCamera3d`](FCamera3d.md)

#### Defined in

[packages/3d/src/FScene3d.ts:48](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L48)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[packages/3d/src/FScene3d.ts:53](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L53)

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

[packages/3d/src/FScene3d.ts:51](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L51)

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[packages/3d/src/FScene3d.ts:46](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L46)

***

### scene

> **scene**: `Scene`

#### Defined in

[packages/3d/src/FScene3d.ts:45](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L45)

***

### world

> **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/3d/src/FScene3d.ts:52](https://github.com/fibbojs/fibbo/blob/037932c67cd8fc486977eea739246a0cee17f938/packages/3d/src/FScene3d.ts#L52)
