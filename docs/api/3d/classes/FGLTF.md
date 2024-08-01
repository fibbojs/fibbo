[@fibbojs](/api/index) / [3d](/api/3d) / FGLTF

# Class: FGLTF

## Description

A GLTF model in FibboJS.

## Example

```ts
import { FScene3d, FGLTF } from '@fibbojs/3d'

const scene = new FScene3d()

const gltf = new FGLTF(scene, 'model.glb')
scene.addComponent(gltf)
```

## Extends

- [`FComponent3d`](FComponent3d.md)

## Constructors

### new FGLTF()

> **new FGLTF**(`scene`, `model`): [`FGLTF`](FGLTF.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

The 3D scene where the model will be added.

• **model**: `string`

The name of the model file to load.
Should be a GLTF or GLB file.

#### Returns

[`FGLTF`](FGLTF.md)

#### Overrides

[`FComponent3d`](FComponent3d.md).[`constructor`](FComponent3d.md#constructors)

#### Defined in

[packages/3d/src/model/FGLTF.ts:43](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FGLTF.ts#L43)

## Methods

### emitOnLoaded()

> **emitOnLoaded**(): `void`

#### Returns

`void`

#### Defined in

[packages/3d/src/model/FGLTF.ts:98](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FGLTF.ts#L98)

***

### initCollider()

> **initCollider**(`position`, `scale`, `rotation`, `shape`): `void`

#### Parameters

• **position**: `Vector3` = `...`

The position of the collider. If not defined, it will use the default position of the FComponent3d.

• **scale**: `Vector3` = `...`

The scale of the collider. If not defined, it will use the default scale of the FComponent3d.

• **rotation**: `Vector3` = `...`

The rotation of the collider. If not defined, it will use the default rotation of the FComponent3d.

• **shape**: [`F3dShapes`](../enumerations/F3dShapes.md) = `F3dShapes.CUBE`

The shape of the collider. If not defined, it will default to F3dShapes.CUBE.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider(
 new THREE.Vector3(0, 1, 0),
 new THREE.Vector3(1, 1, 1),
 new THREE.Vector3(0, 0, 0),
 F3dShapes.CUBE
)
```

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`initCollider`](FComponent3d.md#initcollider)

#### Defined in

[packages/3d/src/FComponent3d.ts:217](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L217)

***

### initRigidBody()

> **initRigidBody**(`position`, `scale`, `rotation`, `shape`): `void`

#### Parameters

• **position**: `Vector3` = `...`

The position of the rigid body. If not defined, it will use the default position of the FComponent3d.

• **scale**: `Vector3` = `...`

The scale of the rigid body. If not defined, it will use the default scale of the FComponent3d.

• **rotation**: `Vector3` = `...`

The rotation of the rigid body. If not defined, it will use the default rotation of the FComponent3d.

• **shape**: [`F3dShapes`](../enumerations/F3dShapes.md) = `F3dShapes.CUBE`

The shape of the rigid body. If not defined, it will default to F3dShapes.CUBE.

#### Returns

`void`

#### Description

Init a rigid body for the component.

#### Example

```ts
component.initRigidBody(new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 1), new THREE.Vector3(0, 0, 0), F3dShapes.CUBE)
```

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`initRigidBody`](FComponent3d.md#initrigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:173](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L173)

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

#### Overrides

[`FComponent3d`](FComponent3d.md).[`onFrame`](FComponent3d.md#onframe)

#### Defined in

[packages/3d/src/model/FGLTF.ts:90](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FGLTF.ts#L90)

***

### onLoaded()

> **onLoaded**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/3d/src/model/FGLTF.ts:94](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FGLTF.ts#L94)

***

### setPosition()

> **setPosition**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

The position on the x-axis.

• **y**: `number`

The position on the y-axis.

• **z**: `number`

The position on the z-axis.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition(0, 1, 0)
```

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`setPosition`](FComponent3d.md#setposition)

#### Defined in

[packages/3d/src/FComponent3d.ts:92](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L92)

***

### setRotation()

> **setRotation**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

The rotation in radians on the x-axis.

• **y**: `number`

The rotation in radians on the y-axis.

• **z**: `number`

The rotation in radians on the z-axis.

#### Returns

`void`

#### Description

Set the rotation of the component from radians.

#### Example

```ts
component.setRotation(0, Math.PI / 2, 0)
```

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`setRotation`](FComponent3d.md#setrotation)

#### Defined in

[packages/3d/src/FComponent3d.ts:127](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L127)

***

### setRotationDegree()

> **setRotationDegree**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

The rotation in degrees on the x-axis.

• **y**: `number`

The rotation in degrees on the y-axis.

• **z**: `number`

The rotation in degrees on the z-axis.

#### Returns

`void`

#### Description

Set the rotation of the component from degrees.

#### Example

```ts
component.setRotationDegree(0, 90, 0)
```

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`setRotationDegree`](FComponent3d.md#setrotationdegree)

#### Defined in

[packages/3d/src/FComponent3d.ts:147](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L147)

***

### setScale()

> **setScale**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

The scale on the x-axis.

• **y**: `number`

The scale on the y-axis.

• **z**: `number`

The scale on the z-axis.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`setScale`](FComponent3d.md#setscale)

#### Defined in

[packages/3d/src/FComponent3d.ts:108](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L108)

## Properties

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`collider`](FComponent3d.md#collider)

#### Defined in

[packages/3d/src/FComponent3d.ts:45](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L45)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

Mesh

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`mesh`](FComponent3d.md#mesh)

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L21)

***

### onLoadedCallbacks

> **onLoadedCallbacks**: () => `void`[] = `[]`

#### Defined in

[packages/3d/src/model/FGLTF.ts:36](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FGLTF.ts#L36)

***

### position

> **position**: `Vector3`

The position of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`position`](FComponent3d.md#position)

#### Defined in

[packages/3d/src/FComponent3d.ts:27](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L27)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rigidBody`](FComponent3d.md#rigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:41](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L41)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rotation`](FComponent3d.md#rotation)

#### Defined in

[packages/3d/src/FComponent3d.ts:35](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L35)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scale`](FComponent3d.md#scale)

#### Defined in

[packages/3d/src/FComponent3d.ts:31](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L31)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

The scene which the component is in.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scene`](FComponent3d.md#scene)

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L16)

***

### type

> **type**: `string` = `'FGLTF'`

#### Defined in

[packages/3d/src/model/FGLTF.ts:35](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FGLTF.ts#L35)
