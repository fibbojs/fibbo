[@fibbojs](/api/index) / [3d](/api/3d) / FCharacterControllerD

# Class: FCharacterControllerD

## Description

A pre-defined character controller based on a Dynamic RigidBody.

## Example

```ts
import { FCapsule, FCharacterControllerD, FScene } from '@fibbojs/3d'

const scene = new FScene()

const capsule = new FCapsule(scene)
capsule.controller = new FCharacterControllerD(scene)
scene.addComponent(capsule)
```

## Extends

- [`FCharacterController`](FCharacterController.md)

## Constructors

### new FCharacterControllerD()

> **new FCharacterControllerD**(`scene`, `options`): [`FCharacterControllerD`](FCharacterControllerD.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerD`](FCharacterControllerD.md)

#### Overrides

[`FCharacterController`](FCharacterController.md).[`constructor`](FCharacterController.md#constructors)

#### Defined in

[packages/3d/src/controllers/FCharacterControllerD.ts:23](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/controllers/FCharacterControllerD.ts#L23)

## Methods

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the controller. Should be called every frame.
The purpose of `onFrame` on FController is to update the component's transform in the desired way.
Any rendering process should be done on the component, not here.

#### Overrides

[`FCharacterController`](FCharacterController.md).[`onFrame`](FCharacterController.md#onframe)

#### Defined in

[packages/3d/src/controllers/FCharacterControllerD.ts:39](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/controllers/FCharacterControllerD.ts#L39)

## Properties

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`component`](FCharacterController.md#component)

#### Defined in

[packages/3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/controllers/FController.ts#L17)

***

### inputs

> **inputs**: `object`

The inputs that will be used to move the character.

#### backward

> **backward**: `boolean`

#### forward

> **forward**: `boolean`

#### left

> **left**: `boolean`

#### right

> **right**: `boolean`

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`inputs`](FCharacterController.md#inputs)

#### Defined in

[packages/3d/src/controllers/FCharacterController.ts:22](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/controllers/FCharacterController.ts#L22)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`scene`](FCharacterController.md#scene)

#### Defined in

[packages/3d/src/controllers/FCharacterController.ts:37](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/controllers/FCharacterController.ts#L37)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`speed`](FCharacterController.md#speed)

#### Defined in

[packages/3d/src/controllers/FCharacterController.ts:32](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/controllers/FCharacterController.ts#L32)