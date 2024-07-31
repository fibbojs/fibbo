[@fibbojs](/api/index) / [3d](/api/3d) / FPolyhedron

# Class: `abstract` FPolyhedron

## Description

A simple polyhedron model in FibboJS.
Defaults to a cube.

## Example

```ts
import { FScene3d, FPolyhedron } from '@fibbojs/3d'

const scene = new FScene3d()

const cube = new FPolyhedron(scene)
scene.addComponent(cube)
```

## Extends

- [`FComponent3d`](FComponent3d.md)

## Extended by

- [`FCube`](FCube.md)
- [`FSphere`](FSphere.md)

## Constructors

### new FPolyhedron()

> **new FPolyhedron**(`scene`): [`FPolyhedron`](FPolyhedron.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

#### Returns

[`FPolyhedron`](FPolyhedron.md)

#### Overrides

[`FComponent3d`](FComponent3d.md).[`constructor`](FComponent3d.md#constructors)

#### Defined in

packages/3d/src/model/FPolyhedron.ts:26

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

[`FComponent3d`](FComponent3d.md).[`initCollider`](FComponent3d.md#initcollider)

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

[`FComponent3d`](FComponent3d.md).[`initRigidBody`](FComponent3d.md#initrigidbody)

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

[`FComponent3d`](FComponent3d.md).[`onFrame`](FComponent3d.md#onframe)

#### Defined in

packages/3d/src/model/FPolyhedron.ts:34

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

[`FComponent3d`](FComponent3d.md).[`setPosition`](FComponent3d.md#setposition)

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

[`FComponent3d`](FComponent3d.md).[`setRotation`](FComponent3d.md#setrotation)

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

[`FComponent3d`](FComponent3d.md).[`setRotationDegree`](FComponent3d.md#setrotationdegree)

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

[`FComponent3d`](FComponent3d.md).[`setScale`](FComponent3d.md#setscale)

#### Defined in

[packages/3d/src/FComponent3d.ts:74](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L74)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`collider`](FComponent3d.md#collider)

#### Defined in

[packages/3d/src/FComponent3d.ts:22](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L22)

***

### mesh

> **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent3d without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Overrides

[`FComponent3d`](FComponent3d.md).[`mesh`](FComponent3d.md#mesh)

#### Defined in

packages/3d/src/model/FPolyhedron.ts:24

***

### position

> **position**: `Vector3`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`position`](FComponent3d.md#position)

#### Defined in

[packages/3d/src/FComponent3d.ts:15](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L15)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rigidBody`](FComponent3d.md#rigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L21)

***

### rotation

> **rotation**: `Vector3`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rotation`](FComponent3d.md#rotation)

#### Defined in

[packages/3d/src/FComponent3d.ts:17](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L17)

***

### scale

> **scale**: `Vector3`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scale`](FComponent3d.md#scale)

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L16)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scene`](FComponent3d.md#scene)

#### Defined in

[packages/3d/src/FComponent3d.ts:14](https://github.com/fibbojs/fibbo/blob/29cafb1855352d51829178769ad4b8831f2b3e1b/packages/3d/src/FComponent3d.ts#L14)
