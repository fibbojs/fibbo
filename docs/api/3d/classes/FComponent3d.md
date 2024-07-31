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

[packages/3d/src/FComponent3d.ts:27](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L27)

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

#### Implementation of

`FComponent.onFrame`

#### Defined in

[packages/3d/src/FComponent3d.ts:36](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L36)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:84](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L84)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Defined in

[packages/3d/src/FComponent3d.ts:22](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L22)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

#### Defined in

[packages/3d/src/FComponent3d.ts:19](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L19)

***

### position

> **position**: `Vector3`

#### Defined in

[packages/3d/src/FComponent3d.ts:15](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L15)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L21)

***

### rotation

> **rotation**: `Vector3`

#### Defined in

[packages/3d/src/FComponent3d.ts:17](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L17)

***

### scale

> **scale**: `Vector3`

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L16)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

#### Defined in

[packages/3d/src/FComponent3d.ts:14](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/3d/src/FComponent3d.ts#L14)
