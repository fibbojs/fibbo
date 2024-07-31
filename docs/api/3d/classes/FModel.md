[@fibbojs](/api/index) / [3d](/api/3d) / FModel

# Class: `abstract` FModel

## Description

The base class for all 3D objects in FibboJS.

## Extended by

- [`FCube`](FCube.md)
- [`FSphere`](FSphere.md)
- [`FGLTF`](FGLTF.md)

## Implements

- [`FComponent3d`](FComponent3d.md)

## Constructors

### new FModel()

> **new FModel**(`scene`): [`FModel`](FModel.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

The 3D scene where the model will be added.

#### Returns

[`FModel`](FModel.md)

#### Defined in

[packages/3d/src/model/FModel.ts:27](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L27)

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

#### Defined in

[packages/3d/src/model/FModel.ts:96](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L96)

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Implementation of

[`FComponent3d`](FComponent3d.md).[`onFrame`](FComponent3d.md#onframe)

#### Defined in

[packages/3d/src/model/FModel.ts:36](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L36)

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

#### Implementation of

[`FComponent3d`](FComponent3d.md).[`setPosition`](FComponent3d.md#setposition)

#### Defined in

[packages/3d/src/model/FModel.ts:49](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L49)

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

#### Implementation of

[`FComponent3d`](FComponent3d.md).[`setRotation`](FComponent3d.md#setrotation)

#### Defined in

[packages/3d/src/model/FModel.ts:69](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L69)

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

#### Defined in

[packages/3d/src/model/FModel.ts:78](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L78)

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

#### Implementation of

[`FComponent3d`](FComponent3d.md).[`setScale`](FComponent3d.md#setscale)

#### Defined in

[packages/3d/src/model/FModel.ts:60](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L60)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Defined in

[packages/3d/src/model/FModel.ts:22](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L22)

***

### object3D?

> `optional` **object3D**: `Object3D`\<`Object3DEventMap`\>

#### Defined in

[packages/3d/src/model/FModel.ts:19](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L19)

***

### position

> **position**: `Vector3`

#### Defined in

[packages/3d/src/model/FModel.ts:15](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L15)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Defined in

[packages/3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L21)

***

### rotation

> **rotation**: `Vector3`

#### Defined in

[packages/3d/src/model/FModel.ts:17](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L17)

***

### scale

> **scale**: `Vector3`

#### Defined in

[packages/3d/src/model/FModel.ts:16](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L16)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

#### Defined in

[packages/3d/src/model/FModel.ts:14](https://github.com/fibbojs/fibbo/blob/3bef0bf91c3e7db5b4ea3649ad46b9ed67e6f935/packages/3d/src/model/FModel.ts#L14)
