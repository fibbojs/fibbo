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
 await scene.init()
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

[packages/3d/src/FScene3d.ts:55](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L55)

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

[packages/3d/src/FScene3d.ts:154](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L154)

***

### init()

> **init**(): `void`

#### Returns

`void`

#### Defined in

[packages/3d/src/FScene3d.ts:66](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L66)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/3d/src/FScene3d.ts:122](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L122)

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

packages/core/dist/index.d.ts:78

## Properties

### DEBUG\_MODE

> **DEBUG\_MODE**: `boolean`

#### Defined in

[packages/3d/src/FScene3d.ts:53](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L53)

***

### camera

> **camera**: [`FCamera3d`](FCamera3d.md)

#### Overrides

`FScene.camera`

#### Defined in

[packages/3d/src/FScene3d.ts:46](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L46)

***

### components

> **components**: [`FComponent3d`](FComponent3d.md)[]

#### Overrides

`FScene.components`

#### Defined in

[packages/3d/src/FScene3d.ts:42](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L42)

***

### controls?

> `optional` **controls**: `OrbitControls`

#### Defined in

[packages/3d/src/FScene3d.ts:48](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L48)

***

### debugCamera

> **debugCamera**: [`FCamera3d`](FCamera3d.md)

#### Defined in

[packages/3d/src/FScene3d.ts:47](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L47)

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

[packages/3d/src/FScene3d.ts:50](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L50)

***

### onFrameCallbacks

> **onFrameCallbacks**: (`delta`) => `void`[]

#### Inherited from

`FScene.onFrameCallbacks`

#### Defined in

packages/core/dist/index.d.ts:69

***

### renderer

> **renderer**: `WebGLRenderer`

#### Defined in

[packages/3d/src/FScene3d.ts:45](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L45)

***

### scene

> **scene**: `Scene`

#### Defined in

[packages/3d/src/FScene3d.ts:44](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L44)

***

### world

> **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/3d/src/FScene3d.ts:51](https://github.com/fibbojs/fibbo/blob/80b6fdf057f7308259e47b328813060ab5ca7088/packages/3d/src/FScene3d.ts#L51)
