[@fibbojs](/api/index) / [3d](/api/3d) / FCharacterControllerKV

# Class: FCharacterControllerKV

## Description

A pre-defined character controller based on a Kinematic Velocity RigidBody.

## Example

```ts
import { FCapsule, FCharacterControllerKV, FScene } from '@fibbojs/3d'

const scene = new FScene()

const capsule = new FCapsule(scene)
capsule.controller = new FCharacterControllerKV(scene)
scene.addComponent(capsule)
```

## Extends

- [`FCharacterControllerK`](FCharacterControllerK.md)

## Constructors

### new FCharacterControllerKV()

> **new FCharacterControllerKV**(`scene`, `options`): [`FCharacterControllerKV`](FCharacterControllerKV.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerKV`](FCharacterControllerKV.md)

#### Overrides

[`FCharacterControllerK`](FCharacterControllerK.md).[`constructor`](FCharacterControllerK.md#constructors)

#### Defined in

[packages/3d/src/controllers/FCharacterControllerKV.ts:21](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FCharacterControllerKV.ts#L21)

## Methods

### getCorrectedMovements()

> **getCorrectedMovements**(): `object`

Return the corrected movements for the current frame.

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`getCorrectedMovements`](FCharacterControllerK.md#getcorrectedmovements)

#### Defined in

[packages/3d/src/controllers/FCharacterControllerK.ts:47](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FCharacterControllerK.ts#L47)

***

### onFrame()

> **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Description

Update the controller. Should be called every frame.
The purpose of `onFrame` on FController is to update the component's transform in the desired way.
Any rendering process should be done on the component, not here.

#### Overrides

[`FCharacterControllerK`](FCharacterControllerK.md).[`onFrame`](FCharacterControllerK.md#onframe)

#### Defined in

[packages/3d/src/controllers/FCharacterControllerKV.ts:31](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FCharacterControllerKV.ts#L31)

## Properties

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`characterController`](FCharacterControllerK.md#charactercontroller)

#### Defined in

[packages/3d/src/controllers/FCharacterControllerK.ts:21](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FCharacterControllerK.ts#L21)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`component`](FCharacterControllerK.md#component)

#### Defined in

[packages/3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FController.ts#L17)

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

[`FCharacterControllerK`](FCharacterControllerK.md).[`inputs`](FCharacterControllerK.md#inputs)

#### Defined in

[packages/3d/src/controllers/FCharacterController.ts:22](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FCharacterController.ts#L22)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`scene`](FCharacterControllerK.md#scene)

#### Defined in

[packages/3d/src/controllers/FCharacterController.ts:37](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FCharacterController.ts#L37)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`speed`](FCharacterControllerK.md#speed)

#### Defined in

[packages/3d/src/controllers/FCharacterController.ts:32](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FCharacterController.ts#L32)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to apply gravity.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`yVelocity`](FCharacterControllerK.md#yvelocity)

#### Defined in

[packages/3d/src/controllers/FCharacterControllerK.ts:16](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/3d/src/controllers/FCharacterControllerK.ts#L16)
