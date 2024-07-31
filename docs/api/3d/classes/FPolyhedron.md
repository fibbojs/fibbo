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

[packages/3d/src/model/FPolyhedron.ts:26](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/model/FPolyhedron.ts#L26)

## Methods

### initCollider()

> **initCollider**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `Vector3`

The position of the collider. If not defined, it will use the default position of the FComponent3d.

• **scale?**: `Vector3`

The scale of the collider. If not defined, it will use the default scale of the FComponent3d.

• **rotation?**: `Vector3`

The rotation of the collider. If not defined, it will use the default rotation of the FComponent3d.

• **shape?**: [`F3dShapes`](../enumerations/F3dShapes.md)

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

[packages/3d/src/FComponent3d.ts:225](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L225)

***

### initRigidBody()

> **initRigidBody**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `Vector3`

The position of the rigid body. If not defined, it will use the default position of the FComponent3d.

• **scale?**: `Vector3`

The scale of the rigid body. If not defined, it will use the default scale of the FComponent3d.

• **rotation?**: `Vector3`

The rotation of the rigid body. If not defined, it will use the default rotation of the FComponent3d.

• **shape?**: [`F3dShapes`](../enumerations/F3dShapes.md)

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

[packages/3d/src/FComponent3d.ts:146](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L146)

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

[packages/3d/src/model/FPolyhedron.ts:34](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/model/FPolyhedron.ts#L34)

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

[packages/3d/src/model/FPolyhedron.ts:46](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/model/FPolyhedron.ts#L46)

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

[packages/3d/src/FComponent3d.ts:68](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L68)

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

[packages/3d/src/FComponent3d.ts:100](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L100)

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

[packages/3d/src/FComponent3d.ts:120](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L120)

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

[packages/3d/src/FComponent3d.ts:84](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L84)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`collider`](FComponent3d.md#collider)

#### Defined in

[packages/3d/src/FComponent3d.ts:22](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L22)

***

### mesh

> **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent3d without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Overrides

[`FComponent3d`](FComponent3d.md).[`mesh`](FComponent3d.md#mesh)

#### Defined in

[packages/3d/src/model/FPolyhedron.ts:24](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/model/FPolyhedron.ts#L24)

***

### position

> **position**: `Vector3`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`position`](FComponent3d.md#position)

#### Defined in

[packages/3d/src/FComponent3d.ts:15](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L15)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rigidBody`](FComponent3d.md#rigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L21)

***

### rotation

> **rotation**: `Vector3`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rotation`](FComponent3d.md#rotation)

#### Defined in

[packages/3d/src/FComponent3d.ts:17](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L17)

***

### scale

> **scale**: `Vector3`

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scale`](FComponent3d.md#scale)

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L16)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scene`](FComponent3d.md#scene)

#### Defined in

[packages/3d/src/FComponent3d.ts:14](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L14)
