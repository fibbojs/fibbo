[@fibbojs](/api/index) / [3d](/api/3d) / FComponent3d

# Class: `abstract` FComponent3d

## Description

The base class for all 3D objects in FibboJS.

## Extended by

- [`FGLTF`](FGLTF.md)
- [`FPolyhedron`](FPolyhedron.md)

## Implements

- `FComponent`

## Constructors

### new FComponent3d()

> **new FComponent3d**(`scene`): [`FComponent3d`](FComponent3d.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

The 3D scene where the model will be added.

#### Returns

[`FComponent3d`](FComponent3d.md)

#### Defined in

[packages/3d/src/FComponent3d.ts:27](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L27)

## Methods

### initCollider()

> **initCollider**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `Vector3`

• **scale?**: `Vector3`

• **rotation?**: `Vector3`

• **shape?**: [`F3dShapes`](../enumerations/F3dShapes.md)

#### Returns

`void`

#### Description

Init a collider for the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:179](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L179)

***

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

Init a rigid body for the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:114](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L114)

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the component.
Should be called every frame.

#### Implementation of

`FComponent.onFrame`

#### Defined in

[packages/3d/src/FComponent3d.ts:36](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L36)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:61](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L61)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:83](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L83)

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

[packages/3d/src/FComponent3d.ts:96](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L96)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:74](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L74)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Defined in

[packages/3d/src/FComponent3d.ts:22](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L22)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

#### Defined in

[packages/3d/src/FComponent3d.ts:19](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L19)

***

### position

> **position**: `Vector3`

#### Defined in

[packages/3d/src/FComponent3d.ts:15](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L15)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L21)

***

### rotation

> **rotation**: `Vector3`

#### Defined in

[packages/3d/src/FComponent3d.ts:17](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L17)

***

### scale

> **scale**: `Vector3`

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L16)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

#### Defined in

[packages/3d/src/FComponent3d.ts:14](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L14)
