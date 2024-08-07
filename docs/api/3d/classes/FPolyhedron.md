[@fibbojs](/api/index) / [3d](/api/3d) / FPolyhedron

# Class: `abstract` FPolyhedron

## Description

A simple polyhedron model in FibboJS.
Defaults to a cube.

## Extends

- [`FComponent3d`](FComponent3d.md)

## Extended by

- [`FCube`](FCube.md)
- [`FSphere`](FSphere.md)

## Constructors

### new FPolyhedron()

> **new FPolyhedron**(`scene`, `options`?): [`FPolyhedron`](FPolyhedron.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

• **options?**

• **options.position?**

• **options.position.x?**: `number`

• **options.position.y?**: `number`

• **options.position.z?**: `number`

• **options.rotation?**

• **options.rotation.x?**: `number`

• **options.rotation.y?**: `number`

• **options.rotation.z?**: `number`

• **options.rotationDegree?**

• **options.rotationDegree.x?**: `number`

• **options.rotationDegree.y?**: `number`

• **options.rotationDegree.z?**: `number`

• **options.scale?**

• **options.scale.x?**: `number`

• **options.scale.y?**: `number`

• **options.scale.z?**: `number`

#### Returns

[`FPolyhedron`](FPolyhedron.md)

#### Overrides

[`FComponent3d`](FComponent3d.md).[`constructor`](FComponent3d.md#constructors)

#### Defined in

[packages/3d/src/model/FPolyhedron.ts:17](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/model/FPolyhedron.ts#L17)

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

[packages/3d/src/FComponent3d.ts:329](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L329)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**

The options for the rigid body.

• **options.enabledRotations?**

If defined, it will enable or disable rotations on the x and y axis.

• **options.enabledRotations.enableX?**: `boolean`

• **options.enabledRotations.enableY?**: `boolean`

• **options.enabledRotations.enableZ?**: `boolean`

• **options.enabledTranslations?**

If defined, it will enable or disable translations on the x and y axis.

• **options.enabledTranslations.enableX?**: `boolean`

• **options.enabledTranslations.enableY?**: `boolean`

• **options.enabledTranslations.enableZ?**: `boolean`

• **options.lockRotations?**: `boolean`

If true, the rigid body will not be able to rotate.

• **options.lockTranslations?**: `boolean`

If true, the rigid body will not be able to move.

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

[packages/3d/src/FComponent3d.ts:230](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L230)

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

[packages/3d/src/FComponent3d.ts:364](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L364)

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

[packages/3d/src/model/FPolyhedron.ts:30](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/model/FPolyhedron.ts#L30)

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

[packages/3d/src/model/FPolyhedron.ts:42](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/model/FPolyhedron.ts#L42)

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

[packages/3d/src/FComponent3d.ts:133](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L133)

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

[packages/3d/src/FComponent3d.ts:168](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L168)

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

[packages/3d/src/FComponent3d.ts:188](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L188)

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

[packages/3d/src/FComponent3d.ts:149](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L149)

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

[packages/3d/src/FComponent3d.ts:45](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L45)

***

### mesh

> **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent3d without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Overrides

[`FComponent3d`](FComponent3d.md).[`mesh`](FComponent3d.md#mesh)

#### Defined in

[packages/3d/src/model/FPolyhedron.ts:15](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/model/FPolyhedron.ts#L15)

***

### position

> **position**: `Vector3`

The position of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`position`](FComponent3d.md#position)

#### Defined in

[packages/3d/src/FComponent3d.ts:27](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L27)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rigidBody`](FComponent3d.md#rigidbody)

#### Defined in

[packages/3d/src/FComponent3d.ts:41](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L41)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`rotation`](FComponent3d.md#rotation)

#### Defined in

[packages/3d/src/FComponent3d.ts:35](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L35)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scale`](FComponent3d.md#scale)

#### Defined in

[packages/3d/src/FComponent3d.ts:31](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L31)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

The scene which the component is in.

#### Inherited from

[`FComponent3d`](FComponent3d.md).[`scene`](FComponent3d.md#scene)

#### Defined in

[packages/3d/src/FComponent3d.ts:16](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/3d/src/FComponent3d.ts#L16)
