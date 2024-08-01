[@fibbojs](/api/index) / [3d](/api/3d) / FCube

# Class: FCube

## Description

A simple cube model in FibboJS.

## Example

```ts
import { FScene3d, FCube } from '@fibbojs/3d'

const scene = new FScene3d()

const cube = new FCube(scene)
scene.addComponent(cube)
```

## Extends

- [`FPolyhedron`](FPolyhedron.md)

## Constructors

### new FCube()

> **new FCube**(`scene`): [`FCube`](FCube.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

#### Returns

[`FCube`](FCube.md)

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`constructor`](FPolyhedron.md#constructors)

#### Defined in

[packages/3d/src/model/FCube.ts:18](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FCube.ts#L18)

## Methods

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

[`FPolyhedron`](FPolyhedron.md).[`initCollider`](FPolyhedron.md#initcollider)

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

[`FPolyhedron`](FPolyhedron.md).[`initRigidBody`](FPolyhedron.md#initrigidbody)

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

[`FPolyhedron`](FPolyhedron.md).[`onFrame`](FPolyhedron.md#onframe)

#### Defined in

[packages/3d/src/model/FCube.ts:22](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FCube.ts#L22)

***

### setColor()

> **setColor**(`color`): `void`

#### Parameters

• **color**: `number`

The color of the polyhedron.

#### Returns

`void`

#### Description

Change the color of the polyhedron.

#### Example

```ts
cube.setColor(0xff0000)
```

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setColor`](FPolyhedron.md#setcolor)

#### Defined in

[packages/3d/src/model/FPolyhedron.ts:37](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FPolyhedron.ts#L37)

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

[`FPolyhedron`](FPolyhedron.md).[`setPosition`](FPolyhedron.md#setposition)

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

[`FPolyhedron`](FPolyhedron.md).[`setRotation`](FPolyhedron.md#setrotation)

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

[`FPolyhedron`](FPolyhedron.md).[`setRotationDegree`](FPolyhedron.md#setrotationdegree)

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

[`FPolyhedron`](FPolyhedron.md).[`setScale`](FPolyhedron.md#setscale)

#### Defined in

[packages/3d/src/FComponent3d.ts:108](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L108)

## Properties

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`collider`](FPolyhedron.md#collider)

#### Defined in

[packages/3d/src/FComponent3d.ts:45](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L45)

***

### mesh

> **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent3d without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`mesh`](FPolyhedron.md#mesh)

#### Defined in

[packages/3d/src/model/FPolyhedron.ts:15](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/model/FPolyhedron.ts#L15)

***

### position

> **position**: `Vector3`

The position of the component.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`position`](FPolyhedron.md#position)

#### Defined in

[packages/3d/src/FComponent3d.ts:27](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L27)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rigidBody`](FPolyhedron.md#rigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:41](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L41)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rotation`](FPolyhedron.md#rotation)

#### Defined in

[packages/3d/src/FComponent3d.ts:35](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L35)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scale`](FPolyhedron.md#scale)

#### Defined in

[packages/3d/src/FComponent3d.ts:31](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L31)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

The scene which the component is in.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scene`](FPolyhedron.md#scene)

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/2fc7696bf6e72ce4d25b27bb8d1ec5dce7632448/packages/3d/src/FComponent3d.ts#L16)
