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

[packages/3d/src/model/FGLTF.ts:45](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/model/FGLTF.ts#L45)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`classOrObject`): `void`

#### Parameters

• **classOrObject**: `any`

The class or object to emit the collision event with.

#### Returns

`void`

#### Description

Emit a collision event with a given class.

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith(Enemy)
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith(enemy)
```

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`emitCollisionWith`](FComponent3d.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:65

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

#### Returns

`void`

#### Description

Emit the onLoaded callbacks.

#### Defined in

[packages/3d/src/model/FGLTF.ts:103](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/model/FGLTF.ts#L103)

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

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`initCollider`](FComponent3d.md#initcollider)

#### Defined in

[packages/3d/src/FComponent3d.ts:238](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L238)

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

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`initRigidBody`](FComponent3d.md#initrigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:180](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L180)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): `void`

#### Parameters

• **classOrObject**: `any`

The class or object to add the callback to.

• **callback**

The callback to add.

#### Returns

`void`

#### Description

Add a callback to be called when a collision occurs.

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, () => {
 console.log('Player collided with an Enemy!')
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(enemy, () => {
 console.log('Player collided with the enemy!')
})
```

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`onCollisionWith`](FComponent3d.md#oncollisionwith)

#### Defined in

[packages/3d/src/FComponent3d.ts:273](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L273)

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

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`onFrame`](FComponent3d.md#onframe)

#### Defined in

[packages/3d/src/FComponent3d.ts:60](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L60)

***

### onLoaded()

> **onLoaded**(`fn`): `void`

#### Parameters

• **fn**

The callback function.

#### Returns

`void`

#### Description

Add a callback to be called when the model is loaded.

#### Defined in

[packages/3d/src/model/FGLTF.ts:96](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/model/FGLTF.ts#L96)

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

[packages/3d/src/FComponent3d.ts:93](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L93)

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

[packages/3d/src/FComponent3d.ts:128](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L128)

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

[packages/3d/src/FComponent3d.ts:148](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L148)

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

[packages/3d/src/FComponent3d.ts:109](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L109)

## Properties

### CALLBACKS\_ONCOLLISION

> **CALLBACKS\_ONCOLLISION**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`CALLBACKS_ONCOLLISION`](FComponent3d.md#callbacks_oncollision)

#### Defined in

packages/core/dist/index.d.ts:17

***

### CALLBACKS\_ONLOADED

> **CALLBACKS\_ONLOADED**: () => `void`[] = `[]`

Callbacks for when the model is loaded

#### Defined in

[packages/3d/src/model/FGLTF.ts:38](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/model/FGLTF.ts#L38)

***

### ID

> **ID**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`ID`](FComponent3d.md#id)

#### Defined in

packages/core/dist/index.d.ts:12

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`collider`](FComponent3d.md#collider)

#### Defined in

[packages/3d/src/FComponent3d.ts:45](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L45)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

Mesh

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`mesh`](FComponent3d.md#mesh)

#### Defined in

[packages/3d/src/FComponent3d.ts:21](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L21)

***

### position

> **position**: `Vector3`

The position of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`position`](FComponent3d.md#position)

#### Defined in

[packages/3d/src/FComponent3d.ts:27](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L27)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rigidBody`](FComponent3d.md#rigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:41](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L41)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rotation`](FComponent3d.md#rotation)

#### Defined in

[packages/3d/src/FComponent3d.ts:35](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L35)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scale`](FComponent3d.md#scale)

#### Defined in

[packages/3d/src/FComponent3d.ts:31](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L31)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

The scene which the component is in.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scene`](FComponent3d.md#scene)

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/2b94dbe5ad7abc15b8f9f57b33427a79de05c36b/packages/3d/src/FComponent3d.ts#L16)
