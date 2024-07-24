[@fibbojs](/api/index) / [3d](/api/3d) / FSphere

# Class: FSphere

## Description

A simple sphere model in FibboJS.

## Example

```ts
import { FScene3d, FSphere } from '@fibbojs/3d'

const scene = new FScene3d()

const cube = new FSphere(scene)
scene.addComponent(cube)
```

## Extends

- [`FModel`](FModel.md)

## Constructors

### new FSphere()

> **new FSphere**(`scene`): [`FSphere`](FSphere.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

#### Returns

[`FSphere`](FSphere.md)

#### Overrides

[`FModel`](FModel.md).[`constructor`](FModel.md#constructors)

#### Defined in

[packages/3d/src/model/FSphere.ts:26](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FSphere.ts#L26)

## Methods

### initRigidBody()

> **initRigidBody**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `Vector3`

• **scale?**: `Vector3`

• **rotation?**: `Vector3`

• **shape?**: [`F3dShapes`](../enumerations/F3dShapes.md)

#### Returns

`void`

#### Description

Init a rigid body for the model.

#### Overrides

[`FModel`](FModel.md).[`initRigidBody`](FModel.md#initrigidbody)

#### Defined in

[packages/3d/src/model/FSphere.ts:38](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FSphere.ts#L38)

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Overrides

[`FModel`](FModel.md).[`onFrame`](FModel.md#onframe)

#### Defined in

[packages/3d/src/model/FSphere.ts:34](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FSphere.ts#L34)

***

### setPosition()

> **setPosition**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Description

Set the position of the model.

#### Inherited from

[`FModel`](FModel.md).[`setPosition`](FModel.md#setposition)

#### Defined in

[packages/3d/src/model/FModel.ts:49](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L49)

***

### setRotation()

> **setRotation**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Description

Set the rotation of the model.

#### Inherited from

[`FModel`](FModel.md).[`setRotation`](FModel.md#setrotation)

#### Defined in

[packages/3d/src/model/FModel.ts:69](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L69)

***

### setRotationDegree()

> **setRotationDegree**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Description

Set the rotation of the model from degrees.

#### Inherited from

[`FModel`](FModel.md).[`setRotationDegree`](FModel.md#setrotationdegree)

#### Defined in

[packages/3d/src/model/FModel.ts:78](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L78)

***

### setScale()

> **setScale**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

#### Returns

`void`

#### Description

Set the scale of the model.

#### Inherited from

[`FModel`](FModel.md).[`setScale`](FModel.md#setscale)

#### Defined in

[packages/3d/src/model/FModel.ts:60](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L60)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Inherited from

[`FModel`](FModel.md).[`collider`](FModel.md#collider)

#### Defined in

[packages/3d/src/model/FModel.ts:22](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L22)

***

### object3D

> **object3D**: `Object3D`\<`Object3DEventMap`\>

Object3D is redefined from FModel without the ? because it is
directly available after the constructor, as the cube is created synchronously.

#### Overrides

[`FModel`](FModel.md).[`object3D`](FModel.md#object3d)

#### Defined in

[packages/3d/src/model/FSphere.ts:24](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FSphere.ts#L24)

***

### position

> **position**: `Vector3`

#### Inherited from

[`FModel`](FModel.md).[`position`](FModel.md#position)

#### Defined in

[packages/3d/src/model/FModel.ts:15](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L15)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Inherited from

[`FModel`](FModel.md).[`rigidBody`](FModel.md#rigidbody)

#### Defined in

[packages/3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L21)

***

### rotation

> **rotation**: `Vector3`

#### Inherited from

[`FModel`](FModel.md).[`rotation`](FModel.md#rotation)

#### Defined in

[packages/3d/src/model/FModel.ts:17](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L17)

***

### scale

> **scale**: `Vector3`

#### Inherited from

[`FModel`](FModel.md).[`scale`](FModel.md#scale)

#### Defined in

[packages/3d/src/model/FModel.ts:16](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L16)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

#### Inherited from

[`FModel`](FModel.md).[`scene`](FModel.md#scene)

#### Defined in

[packages/3d/src/model/FModel.ts:14](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/3d/src/model/FModel.ts#L14)
