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

[packages/3d/src/model/FCube.ts:19](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/model/FCube.ts#L19)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`initCollider`](FPolyhedron.md#initcollider)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`initRigidBody`](FPolyhedron.md#initrigidbody)

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

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`onFrame`](FPolyhedron.md#onframe)

#### Defined in

[packages/3d/src/model/FCube.ts:23](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/model/FCube.ts#L23)

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

packages/3d/src/model/FPolyhedron.ts:46

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

[`FPolyhedron`](FPolyhedron.md).[`setPosition`](FPolyhedron.md#setposition)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setRotation`](FPolyhedron.md#setrotation)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setRotationDegree`](FPolyhedron.md#setrotationdegree)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setScale`](FPolyhedron.md#setscale)

#### Defined in

[packages/3d/src/FComponent3d.ts:74](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L74)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`collider`](FPolyhedron.md#collider)

#### Defined in

[packages/3d/src/FComponent3d.ts:22](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L22)

***

### mesh

> **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent3d without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`mesh`](FPolyhedron.md#mesh)

#### Defined in

packages/3d/src/model/FPolyhedron.ts:24

***

### position

> **position**: `Vector3`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`position`](FPolyhedron.md#position)

#### Defined in

[packages/3d/src/FComponent3d.ts:15](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L15)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rigidBody`](FPolyhedron.md#rigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L21)

***

### rotation

> **rotation**: `Vector3`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rotation`](FPolyhedron.md#rotation)

#### Defined in

[packages/3d/src/FComponent3d.ts:17](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L17)

***

### scale

> **scale**: `Vector3`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scale`](FPolyhedron.md#scale)

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L16)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scene`](FPolyhedron.md#scene)

#### Defined in

[packages/3d/src/FComponent3d.ts:14](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L14)
