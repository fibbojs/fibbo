[@fibbojs](/api/index) / [2d](/api/2d) / FCharacterControllerKP

# Class: FCharacterControllerKP

## Description

A pre-defined character controller based on a Kinematic Position RigidBody.

## Example

```ts
import { FCapsule, FCharacterControllerKP, FScene } from '@fibbojs/3d'

const scene = new FScene()

const capsule = new FCapsule(scene)
capsule.controller = new FCharacterControllerKP(scene)
scene.addComponent(capsule)
```

## Extends

- [`FCharacterControllerK`](FCharacterControllerK.md)

## Constructors

### new FCharacterControllerKP()

> **new FCharacterControllerKP**(`scene`, `options`): [`FCharacterControllerKP`](FCharacterControllerKP.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FCharacterControllerOptions`](../interfaces/FCharacterControllerOptions.md)

#### Returns

[`FCharacterControllerKP`](FCharacterControllerKP.md)

#### Overrides

[`FCharacterControllerK`](FCharacterControllerK.md).[`constructor`](FCharacterControllerK.md#constructors)

#### Defined in

[2d/src/controllers/FCharacterControllerKP.ts:21](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FCharacterControllerKP.ts#L21)

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

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`getCorrectedMovements`](FCharacterControllerK.md#getcorrectedmovements)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:44](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FCharacterControllerK.ts#L44)

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

[2d/src/controllers/FCharacterControllerKP.ts:32](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FCharacterControllerKP.ts#L32)

## Properties

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`characterController`](FCharacterControllerK.md#charactercontroller)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:20](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FCharacterControllerK.ts#L20)

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`component`](FCharacterControllerK.md#component)

#### Defined in

[2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FController.ts#L17)

***

### inputs

> **inputs**: `object`

The inputs that will be used to move the character.

#### down

> **down**: `boolean`

#### left

> **left**: `boolean`

#### right

> **right**: `boolean`

#### up

> **up**: `boolean`

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`inputs`](FCharacterControllerK.md#inputs)

#### Defined in

[2d/src/controllers/FCharacterController.ts:25](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FCharacterController.ts#L25)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`scene`](FCharacterControllerK.md#scene)

#### Defined in

[2d/src/controllers/FCharacterController.ts:40](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FCharacterController.ts#L40)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`speed`](FCharacterControllerK.md#speed)

#### Defined in

[2d/src/controllers/FCharacterController.ts:35](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FCharacterController.ts#L35)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to simulate gravity.

#### Inherited from

[`FCharacterControllerK`](FCharacterControllerK.md).[`yVelocity`](FCharacterControllerK.md#yvelocity)

#### Defined in

[2d/src/controllers/FCharacterControllerK.ts:15](https://github.com/fibbojs/fibbo/blob/deb1b2647977c28556b303db18b4c729c63a8312/packages/2d/src/controllers/FCharacterControllerK.ts#L15)
