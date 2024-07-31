[@fibbojs](/api/index) / [3d](/api/3d) / FScene3d

# Class: FScene3d

## Description

A scene which contains the models, the Three.js scene and the Rapier world.

## Example

```ts
import { FScene } from '@fibbojs/3d'
import { MyCube } from './classes/MyCube'

const scene = new FScene()
const cube = new MyCube(scene)
scene.addComponent(cube)
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

[packages/3d/src/FScene3d.ts:37](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L37)

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

[packages/3d/src/FScene3d.ts:136](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L136)

***

### init()

> **init**(): `void`

#### Returns

`void`

#### Defined in

[packages/3d/src/FScene3d.ts:48](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L48)

***

### initPhysics()

> **initPhysics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/3d/src/FScene3d.ts:104](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L104)

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

[packages/3d/src/FScene3d.ts:35](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L35)

***

### camera

> **camera**: [`FCamera3d`](FCamera3d.md)

#### Overrides

`FScene.camera`

#### Defined in

[packages/3d/src/FScene3d.ts:28](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L28)

***

### components

> **components**: [`FComponent3d`](FComponent3d.md)[]

#### Overrides

`FScene.components`

#### Defined in

[packages/3d/src/FScene3d.ts:24](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L24)

***

### controls?

> `optional` **controls**: `OrbitControls`

#### Defined in

[packages/3d/src/FScene3d.ts:30](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L30)

***

### debugCamera

> **debugCamera**: [`FCamera3d`](FCamera3d.md)

#### Defined in

[packages/3d/src/FScene3d.ts:29](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L29)

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

[packages/3d/src/FScene3d.ts:32](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L32)

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

[packages/3d/src/FScene3d.ts:27](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L27)

***

### scene

> **scene**: `Scene`

#### Defined in

[packages/3d/src/FScene3d.ts:26](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L26)

***

### world

> **world**: `World`

#### Overrides

`FScene.world`

#### Defined in

[packages/3d/src/FScene3d.ts:33](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FScene3d.ts#L33)
