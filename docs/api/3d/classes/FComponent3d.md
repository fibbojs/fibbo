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

The 3D scene where the component will be added.

#### Returns

[`FComponent3d`](FComponent3d.md)

#### Defined in

[packages/3d/src/FComponent3d.ts:50](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L50)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:251](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L251)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:172](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L172)

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

[packages/3d/src/FComponent3d.ts:59](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L59)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:91](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L91)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:126](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L126)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:146](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L146)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:107](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L107)

## Properties

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/3d/src/FComponent3d.ts:45](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L45)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

Mesh

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L21)

***

### position

> **position**: `Vector3`

The position of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:27](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L27)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/3d/src/FComponent3d.ts:41](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L41)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:35](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L35)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:31](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L31)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

The scene which the component is in.

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/10787392517d7c42542c836b0fad578d96d8c1ac/packages/3d/src/FComponent3d.ts#L16)
