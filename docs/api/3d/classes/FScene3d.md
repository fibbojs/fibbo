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

[packages/3d/src/FScene3d.ts:57](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L57)

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

[packages/3d/src/FScene3d.ts:187](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L187)

***

### init()

> **init**(): `void`

#### Returns

`void`

#### Defined in

[packages/3d/src/FScene3d.ts:68](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L68)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/3d/src/FScene3d.ts:124](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L124)

***

### onCollision()

> **onCollision**(`handle1`, `handle2`, `_`): `void`

#### Parameters

• **handle1**: `number`

• **handle2**: `number`

• **\_**: `boolean`

#### Returns

`void`

#### Defined in

[packages/3d/src/FScene3d.ts:164](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L164)

***

### onFrame()

> **onFrame**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Description

Add a callback to the onFrame event.

#### Inherited from

`FScene.onFrame`

#### Defined in

packages/core/dist/index.d.ts:132

## Properties

### DEBUG\_MODE

> **DEBUG\_MODE**: `boolean`

#### Defined in

[packages/3d/src/FScene3d.ts:55](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L55)

***

### camera

> **camera**: [`FCamera3d`](FCamera3d.md)

#### Overrides

`FScene.camera`

#### Defined in

[packages/3d/src/FScene3d.ts:46](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L46)

***

### components

> **components**: [`FComponent3d`](FComponent3d.md)[]

The components in the scene.

#### Overrides

`FScene.components`

#### Defined in

[packages/3d/src/FScene3d.ts:42](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L42)

***

### controls?

> `optional` **controls**: `OrbitControls`

#### Defined in

[packages/3d/src/FScene3d.ts:48](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L48)

***

### debugCamera

> **debugCamera**: [`FCamera3d`](FCamera3d.md)

#### Defined in

[packages/3d/src/FScene3d.ts:47](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L47)

***

### eventQueue

> **eventQueue**: `EventQueue`

#### Defined in

[packages/3d/src/FScene3d.ts:52](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L52)

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

[packages/3d/src/FScene3d.ts:50](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L50)

***

### onFrameCallbacks

> **onFrameCallbacks**: (`delta`) => `void`[]

#### Inherited from

`FScene.onFrameCallbacks`

#### Defined in

packages/core/dist/index.d.ts:123

***

### rapierToComponent

> **rapierToComponent**: `Map`\<`number`, [`FComponent3d`](FComponent3d.md)\>

#### Defined in

[packages/3d/src/FScene3d.ts:53](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L53)

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[packages/3d/src/FScene3d.ts:45](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L45)

***

### scene

> **scene**: `Scene`

#### Defined in

[packages/3d/src/FScene3d.ts:44](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L44)

***

### world

> **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/3d/src/FScene3d.ts:51](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FScene3d.ts#L51)
