[@fibbojs](/api/index) / [3d](/api/3d) / FGLB

# Class: FGLB

## Description

A GLB model in FibboJS.
For now, it is just a wrapper around FGLTF as GLB is a binary form of glTF.

## Example

```ts
import { FScene, FGLB } from '@fibbojs/3d'

const scene = new FScene()

const glb = new FGLB(scene, {
 path: 'model.glb',
})
scene.addComponent(glb)
```

## Extends

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

[`FGLTF`](FGLTF.md).[`rotationDegreeX`](FGLTF.md#rotationdegreex)

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

[`FGLTF`](FGLTF.md).[`rotationDegreeY`](FGLTF.md#rotationdegreey)

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

[`FGLTF`](FGLTF.md).[`rotationDegreeZ`](FGLTF.md#rotationdegreez)

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

[`FGLTF`](FGLTF.md).[`rotationX`](FGLTF.md#rotationx)

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

[`FGLTF`](FGLTF.md).[`rotationY`](FGLTF.md#rotationy)

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

[`FGLTF`](FGLTF.md).[`rotationZ`](FGLTF.md#rotationz)

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

[`FGLTF`](FGLTF.md).[`scaleX`](FGLTF.md#scalex)

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

[`FGLTF`](FGLTF.md).[`scaleY`](FGLTF.md#scaley)

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

[`FGLTF`](FGLTF.md).[`scaleZ`](FGLTF.md#scalez)

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

[`FGLTF`](FGLTF.md).[`x`](FGLTF.md#x)

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

[`FGLTF`](FGLTF.md).[`y`](FGLTF.md#y)

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

[`FGLTF`](FGLTF.md).[`z`](FGLTF.md#z)

#### Defined in

packages/3d/src/FComponent.ts:399

## Constructors

### new FGLB()

> **new FGLB**(`scene`, `options`): [`FGLB`](FGLB.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FModelOptions`](../interfaces/FModelOptions.md)

#### Returns

[`FGLB`](FGLB.md)

#### Overrides

[`FGLTF`](FGLTF.md).[`constructor`](FGLTF.md#constructors)

#### Defined in

[packages/3d/src/model/FGLB.ts:22](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FGLB.ts#L22)

## Methods

### defineMeshTransforms()

> **defineMeshTransforms**(): `void`

#### Returns

`void`

#### Description

Define mesh transforms (used after loading the model).

#### Inherited from

[`FGLTF`](FGLTF.md).[`defineMeshTransforms`](FGLTF.md#definemeshtransforms)

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

[`FGLTF`](FGLTF.md).[`emitCollisionWith`](FGLTF.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:70

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

#### Returns

`void`

#### Description

Emit the onLoaded callbacks.

#### Inherited from

[`FGLTF`](FGLTF.md).[`emitOnLoaded`](FGLTF.md#emitonloaded)

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

[`FGLTF`](FGLTF.md).[`initCollider`](FGLTF.md#initcollider)

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

[`FGLTF`](FGLTF.md).[`initRigidBody`](FGLTF.md#initrigidbody)

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

[`FGLTF`](FGLTF.md).[`initSensor`](FGLTF.md#initsensor)

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

#### Inherited from

[`FGLTF`](FGLTF.md).[`loadTextureForMesh`](FGLTF.md#loadtextureformesh)

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

[`FGLTF`](FGLTF.md).[`onCollisionWith`](FGLTF.md#oncollisionwith)

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

[`FGLTF`](FGLTF.md).[`onFrame`](FGLTF.md#onframe)

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

#### Inherited from

[`FGLTF`](FGLTF.md).[`onLoaded`](FGLTF.md#onloaded)

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

[`FGLTF`](FGLTF.md).[`setPosition`](FGLTF.md#setposition)

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

[`FGLTF`](FGLTF.md).[`setRotation`](FGLTF.md#setrotation)

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

[`FGLTF`](FGLTF.md).[`setRotationDegree`](FGLTF.md#setrotationdegree)

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

[`FGLTF`](FGLTF.md).[`setScale`](FGLTF.md#setscale)

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

[`FGLTF`](FGLTF.md).[`__CALLBACKS_ON_COLLISION__`](FGLTF.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the model is loaded

#### Inherited from

[`FGLTF`](FGLTF.md).[`__CALLBACKS_ON_LOADED__`](FGLTF.md#__callbacks_on_loaded__)

#### Defined in

[packages/3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L21)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FGLTF`](FGLTF.md).[`__ID__`](FGLTF.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__IS_2D__`](FGLTF.md#__is_2d__)

#### Defined in

packages/core/dist/index.d.ts:12

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FGLTF`](FGLTF.md).[`__IS_3D__`](FGLTF.md#__is_3d__)

#### Defined in

packages/3d/src/FComponent.ts:25

***

### collider?

> `optional` **collider**: `FCollider`

Collider

#### Inherited from

[`FGLTF`](FGLTF.md).[`collider`](FGLTF.md#collider)

#### Defined in

packages/3d/src/FComponent.ts:59

***

### fileExtension

> **fileExtension**: `string`

The file extension of the model.
Default is 'obj'.

#### Inherited from

[`FGLTF`](FGLTF.md).[`fileExtension`](FGLTF.md#fileextension)

#### Defined in

[packages/3d/src/model/FModel.ts:52](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L52)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Inherited from

[`FGLTF`](FGLTF.md).[`mesh`](FGLTF.md#mesh)

#### Defined in

packages/3d/src/FComponent.ts:35

***

### name

> **name**: `string`

The name of the model.
Shouldn't contain file extensions.

#### Inherited from

[`FGLTF`](FGLTF.md).[`name`](FGLTF.md#name)

#### Defined in

[packages/3d/src/model/FModel.ts:27](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L27)

***

### path

> **path**: `string`

The path to the model file.
Will be interpreted as a URL if it starts with http.
Will be interpreted as an absolute path if it starts with /.
Otherwise, it will be treated as a relative path to the models folder.

#### Inherited from

[`FGLTF`](FGLTF.md).[`path`](FGLTF.md#path)

#### Defined in

[packages/3d/src/model/FModel.ts:35](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L35)

***

### position

> **position**: `Vector3`

The position of the component.

#### Inherited from

[`FGLTF`](FGLTF.md).[`position`](FGLTF.md#position)

#### Defined in

packages/3d/src/FComponent.ts:41

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RigidBody

#### Inherited from

[`FGLTF`](FGLTF.md).[`rigidBody`](FGLTF.md#rigidbody)

#### Defined in

packages/3d/src/FComponent.ts:55

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Inherited from

[`FGLTF`](FGLTF.md).[`rotation`](FGLTF.md#rotation)

#### Defined in

packages/3d/src/FComponent.ts:49

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Inherited from

[`FGLTF`](FGLTF.md).[`scale`](FGLTF.md#scale)

#### Defined in

packages/3d/src/FComponent.ts:45

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FGLTF`](FGLTF.md).[`scene`](FGLTF.md#scene)

#### Defined in

packages/3d/src/FComponent.ts:30

***

### sensor?

> `optional` **sensor**: `FCollider`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FGLTF`](FGLTF.md).[`sensor`](FGLTF.md#sensor)

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

#### Inherited from

[`FGLTF`](FGLTF.md).[`textures`](FGLTF.md#textures)

#### Defined in

[packages/3d/src/model/FModel.ts:46](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/3d/src/model/FModel.ts#L46)
