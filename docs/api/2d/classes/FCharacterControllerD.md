[@fibbojs](/api/index) / [2d](/api/2d) / FCharacterControllerD

# Class: FCharacterControllerD

A pre-defined character controller based on a Dynamic RigidBody.

## Example

```ts
import { FCapsule, FCharacterControllerD, FScene } from '@fibbojs/2d'

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

[2d/src/controllers/FCharacterControllerD.ts:22](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/controllers/FCharacterControllerD.ts#L22)

## Methods

### frame()

> **frame**(`_delta`): `void`

Update the controller. Should be called every frame.
The purpose of this method is to update the component transform based on the controller logic.

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Overrides

[`FCharacterController`](FCharacterController.md).[`frame`](FCharacterController.md#frame)

#### Defined in

[2d/src/controllers/FCharacterControllerD.ts:38](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/controllers/FCharacterControllerD.ts#L38)

## Properties

### \_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_

> **\_\_RUN\_IN\_PHYSIC\_PIPELINE\_\_**: `boolean`

True if the controller should run in the physic pipeline.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`__RUN_IN_PHYSIC_PIPELINE__`](FCharacterController.md#__run_in_physic_pipeline__)

#### Defined in

core/dist/index.d.ts:20

***

### component

> **component**: [`FComponent`](FComponent.md)

The component attached to the controller.
It is redefined here to get the correct type (with 2D properties).

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`component`](FCharacterController.md#component)

#### Defined in

[2d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/controllers/FController.ts#L17)

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

[`FCharacterController`](FCharacterController.md).[`inputs`](FCharacterController.md#inputs)

#### Defined in

[2d/src/controllers/FCharacterController.ts:21](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/controllers/FCharacterController.ts#L21)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`scene`](FCharacterController.md#scene)

#### Defined in

[2d/src/controllers/FCharacterController.ts:36](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/controllers/FCharacterController.ts#L36)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`speed`](FCharacterController.md#speed)

#### Defined in

[2d/src/controllers/FCharacterController.ts:31](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/controllers/FCharacterController.ts#L31)
