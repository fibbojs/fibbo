[@fibbojs](/api/index) / [3d](/api/3d) / FModel

# Class: `abstract` FModel

## Description

An abstract 3D Model base class.

## Extends

- [`FComponent`](FComponent.md)

## Extended by

- [`FFBX`](FFBX.md)
- [`FOBJ`](FOBJ.md)
- [`FGLTF`](FGLTF.md)

## Accessors

### rotationDegreeX

> `get` **rotationDegreeX**(): `number`

> `set` **rotationDegreeX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationDegreeX`](FComponent.md#rotationdegreex)

#### Defined in

packages/3d/src/FComponent.ts:431

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationDegreeY`](FComponent.md#rotationdegreey)

#### Defined in

packages/3d/src/FComponent.ts:439

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationDegreeZ`](FComponent.md#rotationdegreez)

#### Defined in

packages/3d/src/FComponent.ts:447

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationX`](FComponent.md#rotationx)

#### Defined in

packages/3d/src/FComponent.ts:407

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationY`](FComponent.md#rotationy)

#### Defined in

packages/3d/src/FComponent.ts:415

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationZ`](FComponent.md#rotationz)

#### Defined in

packages/3d/src/FComponent.ts:423

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`scaleX`](FComponent.md#scalex)

#### Defined in

packages/3d/src/FComponent.ts:455

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`scaleY`](FComponent.md#scaley)

#### Defined in

packages/3d/src/FComponent.ts:463

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`scaleZ`](FComponent.md#scalez)

#### Defined in

packages/3d/src/FComponent.ts:471

***

### x

> `get` **x**(): `number`

Setters & getters for transform properties

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`x`](FComponent.md#x)

#### Defined in

packages/3d/src/FComponent.ts:383

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`y`](FComponent.md#y)

#### Defined in

packages/3d/src/FComponent.ts:391

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`z`](FComponent.md#z)

#### Defined in

packages/3d/src/FComponent.ts:399

## Constructors

### new FModel()

> **new FModel**(`scene`, `options`): [`FModel`](FModel.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

The 3D scene where the model will be added.

• **options**: [`FModelOptions`](../interfaces/FModelOptions.md)

The options for the component (inherits from FComponent).

#### Returns

[`FModel`](FModel.md)

#### Overrides

[`FComponent`](FComponent.md).[`constructor`](FComponent.md#constructors)

#### Defined in

[packages/3d/src/model/FModel.ts:59](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L59)

## Methods

### defineMeshTransforms()

> **defineMeshTransforms**(): `void`

#### Returns

`void`

#### Description

Define mesh transforms (used after loading the model).

#### Defined in

[packages/3d/src/model/FModel.ts:125](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L125)

***

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

[`FComponent`](FComponent.md).[`emitCollisionWith`](FComponent.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:70

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

#### Returns

`void`

#### Description

Emit the onLoaded callbacks.

#### Defined in

[packages/3d/src/model/FModel.ts:116](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L116)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider({
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
 shape: FShapes.CUBE
})
```

#### Inherited from

[`FComponent`](FComponent.md).[`initCollider`](FComponent.md#initcollider)

#### Defined in

packages/3d/src/FComponent.ts:339

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigid body.

#### Returns

`void`

#### Description

Init a rigid body for the component.

#### Example

```ts
component.initRigidBody({
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
 shape: FShapes.CUBE
})
```

#### Inherited from

[`FComponent`](FComponent.md).[`initRigidBody`](FComponent.md#initrigidbody)

#### Defined in

packages/3d/src/FComponent.ts:310

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

#### Description

Init a sensor for the component.
This is useful for triggerings events when the component collides with other components.

#### Example

```ts
component.initSensor({
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
 shape: FShapes.CUBE
})
```

#### Inherited from

[`FComponent`](FComponent.md).[`initSensor`](FComponent.md#initsensor)

#### Defined in

packages/3d/src/FComponent.ts:363

***

### loadTextureForMesh()

> **loadTextureForMesh**(`mesh`): `void`

#### Parameters

• **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The mesh.

#### Returns

`void`

#### Description

Load the texture for a given mesh.

#### Example

```ts
model.loadTextureFor(material)
```

#### Defined in

[packages/3d/src/model/FModel.ts:151](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L151)

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

[`FComponent`](FComponent.md).[`onCollisionWith`](FComponent.md#oncollisionwith)

#### Defined in

packages/3d/src/FComponent.ts:371

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

[`FComponent`](FComponent.md).[`onFrame`](FComponent.md#onframe)

#### Defined in

packages/3d/src/FComponent.ts:113

***

### onLoaded()

> **onLoaded**(`callback`): `void`

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Description

Add a callback to be called when the model is loaded.

#### Defined in

[packages/3d/src/model/FModel.ts:109](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L109)

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

[`FComponent`](FComponent.md).[`setPosition`](FComponent.md#setposition)

#### Defined in

packages/3d/src/FComponent.ts:185

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

[`FComponent`](FComponent.md).[`setRotation`](FComponent.md#setrotation)

#### Defined in

packages/3d/src/FComponent.ts:244

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

[`FComponent`](FComponent.md).[`setRotationDegree`](FComponent.md#setrotationdegree)

#### Defined in

packages/3d/src/FComponent.ts:267

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

[`FComponent`](FComponent.md).[`setScale`](FComponent.md#setscale)

#### Defined in

packages/3d/src/FComponent.ts:204

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_COLLISION__`](FComponent.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the model is loaded

#### Defined in

[packages/3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L21)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent`](FComponent.md).[`__ID__`](FComponent.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_2D__`](FComponent.md#__is_2d__)

#### Defined in

packages/core/dist/index.d.ts:12

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_3D__`](FComponent.md#__is_3d__)

#### Defined in

packages/3d/src/FComponent.ts:25

***

### collider?

> `optional` **collider**: `FCollider`

Collider

#### Inherited from

[`FComponent`](FComponent.md).[`collider`](FComponent.md#collider)

#### Defined in

packages/3d/src/FComponent.ts:59

***

### fileExtension

> **fileExtension**: `string`

The file extension of the model.
Default is 'obj'.

#### Defined in

[packages/3d/src/model/FModel.ts:52](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L52)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Inherited from

[`FComponent`](FComponent.md).[`mesh`](FComponent.md#mesh)

#### Defined in

packages/3d/src/FComponent.ts:35

***

### name

> **name**: `string`

The name of the model.
Shouldn't contain file extensions.

#### Defined in

[packages/3d/src/model/FModel.ts:27](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L27)

***

### path

> **path**: `string`

The path to the model file.
Will be interpreted as a URL if it starts with http.
Will be interpreted as an absolute path if it starts with /.
Otherwise, it will be treated as a relative path to the models folder.

#### Defined in

[packages/3d/src/model/FModel.ts:35](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L35)

***

### position

> **position**: `Vector3`

The position of the component.

#### Inherited from

[`FComponent`](FComponent.md).[`position`](FComponent.md#position)

#### Defined in

packages/3d/src/FComponent.ts:41

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RigidBody

#### Inherited from

[`FComponent`](FComponent.md).[`rigidBody`](FComponent.md#rigidbody)

#### Defined in

packages/3d/src/FComponent.ts:55

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Inherited from

[`FComponent`](FComponent.md).[`rotation`](FComponent.md#rotation)

#### Defined in

packages/3d/src/FComponent.ts:49

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Inherited from

[`FComponent`](FComponent.md).[`scale`](FComponent.md#scale)

#### Defined in

packages/3d/src/FComponent.ts:45

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FComponent`](FComponent.md).[`scene`](FComponent.md#scene)

#### Defined in

packages/3d/src/FComponent.ts:30

***

### sensor?

> `optional` **sensor**: `FCollider`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FComponent`](FComponent.md).[`sensor`](FComponent.md#sensor)

#### Defined in

packages/3d/src/FComponent.ts:63

***

### textures

> **textures**: `Record`\<`string`, `string`\>

A record containing texture path for each material.

#### Example

```json
{
 "default": "/models/my-model/my-model.png"
}
```

#### Defined in

[packages/3d/src/model/FModel.ts:46](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L46)
