[@fibbojs](/api/index) / [3d](/api/3d) / FCharacterControllerD

# Class: FCharacterControllerD

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

[3d/src/controllers/FCharacterControllerD.ts:23](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/controllers/FCharacterControllerD.ts#L23)

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

[3d/src/controllers/FCharacterControllerD.ts:39](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/controllers/FCharacterControllerD.ts#L39)

***

### getCorrectedRotation()

> **getCorrectedRotation**(): `Quaternion`

Return the corrected rotation for the current frame.
Uses the camera so the character nevers faces the camera.

#### Returns

`Quaternion`

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`getCorrectedRotation`](FCharacterController.md#getcorrectedrotation)

#### Defined in

[3d/src/controllers/FCharacterController.ts:123](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/controllers/FCharacterController.ts#L123)

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
It is redefined here to get the correct type (with 3D properties).

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`component`](FCharacterController.md#component)

#### Defined in

[3d/src/controllers/FController.ts:17](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/controllers/FController.ts#L17)

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

[3d/src/controllers/FCharacterController.ts:24](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/controllers/FCharacterController.ts#L24)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene where the character is.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`scene`](FCharacterController.md#scene)

#### Defined in

[3d/src/controllers/FCharacterController.ts:39](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/controllers/FCharacterController.ts#L39)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacterController`](FCharacterController.md).[`speed`](FCharacterController.md#speed)

#### Defined in

[3d/src/controllers/FCharacterController.ts:34](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/controllers/FCharacterController.ts#L34)
