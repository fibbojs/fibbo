[@fibbojs](/api/index) / [3d](/api/3d) / FComponent3d

# Class: `abstract` FComponent3d

## Description

The base class for all 3D objects in FibboJS.

## Extends

- `FComponent`

## Extended by

- [`FGLTF`](FGLTF.md)
- [`FPolyhedron`](FPolyhedron.md)

## Constructors

### new FComponent3d()

> **new FComponent3d**(`scene`): [`FComponent3d`](FComponent3d.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

The 3D scene where the component will be added.

#### Returns

[`FComponent3d`](FComponent3d.md)

#### Overrides

`FComponent.constructor`

#### Defined in

[packages/3d/src/FComponent3d.ts:50](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L50)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`class_`): `void`

#### Parameters

• **class\_**: `any`

The class to emit the

#### Returns

`void`

#### Description

Emit a collision event with a given class.

#### Example

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, () => {
console.log('Player collided with enemy!')
})
player.emitCollisionWith(Enemy)
```

#### Inherited from

`FComponent.emitCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:48

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**

The options for the collider.

• **options.position?**: `Vector3`

The position of the collider. If not defined, it will use the default position of the FComponent3d.

• **options.rotation?**: `Vector3`

The rotation of the collider. If not defined, it will use the default rotation of the FComponent3d.

• **options.scale?**: `Vector3`

The scale of the collider. If not defined, it will use the default scale of the FComponent3d.

• **options.shape?**: [`F3dShapes`](../enumerations/F3dShapes.md)

The shape of the collider. If not defined, it will default to F3dShapes.CUBE.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider({
 position: new THREE.Vector3(0, 1, 0),
 scale: new THREE.Vector3(1, 1, 1),
 rotation: new THREE.Vector3(0, 0, 0),
 shape: F3dShapes.CUBE
})
```

#### Defined in

[packages/3d/src/FComponent3d.ts:238](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L238)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**

The options for the rigid body.

• **options.position?**: `Vector3`

The position of the rigid body. If not defined, it will use the default position of the FComponent3d.

• **options.rotation?**: `Vector3`

The rotation of the rigid body. If not defined, it will use the default rotation of the FComponent3d.

• **options.scale?**: `Vector3`

The scale of the rigid body. If not defined, it will use the default scale of the FComponent3d.

• **options.shape?**: [`F3dShapes`](../enumerations/F3dShapes.md)

The shape of the rigid body. If not defined, it will default to F3dShapes.CUBE.

#### Returns

`void`

#### Description

Init a rigid body for the component.

#### Example

```ts
component.initRigidBody({
 position: new THREE.Vector3(0, 1, 0),
 scale: new THREE.Vector3(1, 1, 1),
 rotation: new THREE.Vector3(0, 0, 0),
 shape: F3dShapes.CUBE
})
```

#### Defined in

[packages/3d/src/FComponent3d.ts:180](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L180)

***

### onCollisionWith()

> **onCollisionWith**(`class_`, `callback`): `void`

#### Parameters

• **class\_**: `any`

The class to add the callback to.

• **callback**

The callback to add.

#### Returns

`void`

#### Description

Add a callback to be called when a collision occurs.

#### Example

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, () => {
 console.log('Player collided with enemy!')
})

#### Overrides

`FComponent.onCollisionWith`

#### Defined in

[packages/3d/src/FComponent3d.ts:273](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L273)

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

`FComponent.onFrame`

#### Defined in

[packages/3d/src/FComponent3d.ts:60](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L60)

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

[packages/3d/src/FComponent3d.ts:93](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L93)

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

[packages/3d/src/FComponent3d.ts:128](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L128)

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

[packages/3d/src/FComponent3d.ts:148](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L148)

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

[packages/3d/src/FComponent3d.ts:109](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L109)

## Properties

### CALLBACKS\_ONCOLLISION

> **CALLBACKS\_ONCOLLISION**: `object`

Callbacks for when a collision occurs with a given class.
It is a dictionary where the key is the class name and the value is the callback.

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Inherited from

`FComponent.CALLBACKS_ONCOLLISION`

#### Defined in

packages/core/dist/index.d.ts:12

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/3d/src/FComponent3d.ts:45](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L45)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

Mesh

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L21)

***

### position

> **position**: `Vector3`

The position of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:27](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L27)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/3d/src/FComponent3d.ts:41](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L41)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:35](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L35)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:31](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L31)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

The scene which the component is in.

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/3d/src/FComponent3d.ts#L16)
