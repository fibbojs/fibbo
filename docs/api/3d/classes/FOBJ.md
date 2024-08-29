[@fibbojs](/api/index) / [3d](/api/3d) / FOBJ

# Class: FOBJ

## Description

An OBJ model in Fibbo.

## Example

```ts
import { FScene, FOBJ } from '@fibbojs/3d';

const scene = new FScene();

const obj = new FOBJ(scene, {
  path: 'model.obj',
});
scene.addComponent(obj);
```

## Extends

- [`FModel`](FModel.md)

## Accessors

### rotationDegreeX

> `get` **rotationDegreeX**(): `number`

> `set` **rotationDegreeX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`rotationDegreeX`](FModel.md#rotationdegreex)

#### Defined in

[packages/3d/src/FComponent.ts:431](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L431)

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`rotationDegreeY`](FModel.md#rotationdegreey)

#### Defined in

[packages/3d/src/FComponent.ts:439](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L439)

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`rotationDegreeZ`](FModel.md#rotationdegreez)

#### Defined in

[packages/3d/src/FComponent.ts:447](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L447)

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`rotationX`](FModel.md#rotationx)

#### Defined in

[packages/3d/src/FComponent.ts:407](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L407)

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`rotationY`](FModel.md#rotationy)

#### Defined in

[packages/3d/src/FComponent.ts:415](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L415)

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`rotationZ`](FModel.md#rotationz)

#### Defined in

[packages/3d/src/FComponent.ts:423](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L423)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`scaleX`](FModel.md#scalex)

#### Defined in

[packages/3d/src/FComponent.ts:455](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L455)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`scaleY`](FModel.md#scaley)

#### Defined in

[packages/3d/src/FComponent.ts:463](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L463)

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`scaleZ`](FModel.md#scalez)

#### Defined in

[packages/3d/src/FComponent.ts:471](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L471)

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

[`FModel`](FModel.md).[`x`](FModel.md#x)

#### Defined in

[packages/3d/src/FComponent.ts:383](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L383)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`y`](FModel.md#y)

#### Defined in

[packages/3d/src/FComponent.ts:391](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L391)

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`z`](FModel.md#z)

#### Defined in

[packages/3d/src/FComponent.ts:399](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L399)

## Constructors

### new FOBJ()

> **new FOBJ**(`scene`, `options`): [`FOBJ`](FOBJ.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FModelOptions`](../interfaces/FModelOptions.md)

#### Returns

[`FOBJ`](FOBJ.md)

#### Overrides

[`FModel`](FModel.md).[`constructor`](FModel.md#constructors)

#### Defined in

[packages/3d/src/model/FOBJ.ts:23](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FOBJ.ts#L23)

## Methods

### defineMeshTransforms()

> **defineMeshTransforms**(): `void`

#### Returns

`void`

#### Description

Define mesh transforms (used after loading the model).

#### Inherited from

[`FModel`](FModel.md).[`defineMeshTransforms`](FModel.md#definemeshtransforms)

#### Defined in

[packages/3d/src/model/FModel.ts:125](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L125)

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

[`FModel`](FModel.md).[`emitCollisionWith`](FModel.md#emitcollisionwith)

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

[`FModel`](FModel.md).[`emitOnLoaded`](FModel.md#emitonloaded)

#### Defined in

[packages/3d/src/model/FModel.ts:116](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L116)

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

[`FModel`](FModel.md).[`initCollider`](FModel.md#initcollider)

#### Defined in

[packages/3d/src/FComponent.ts:339](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L339)

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

[`FModel`](FModel.md).[`initRigidBody`](FModel.md#initrigidbody)

#### Defined in

[packages/3d/src/FComponent.ts:310](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L310)

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

[`FModel`](FModel.md).[`initSensor`](FModel.md#initsensor)

#### Defined in

[packages/3d/src/FComponent.ts:363](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L363)

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

[`FModel`](FModel.md).[`loadTextureForMesh`](FModel.md#loadtextureformesh)

#### Defined in

[packages/3d/src/model/FModel.ts:151](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L151)

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

[`FModel`](FModel.md).[`onCollisionWith`](FModel.md#oncollisionwith)

#### Defined in

[packages/3d/src/FComponent.ts:371](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L371)

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

[`FModel`](FModel.md).[`onFrame`](FModel.md#onframe)

#### Defined in

[packages/3d/src/FComponent.ts:113](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L113)

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

[`FModel`](FModel.md).[`onLoaded`](FModel.md#onloaded)

#### Defined in

[packages/3d/src/model/FModel.ts:109](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L109)

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

[`FModel`](FModel.md).[`setPosition`](FModel.md#setposition)

#### Defined in

[packages/3d/src/FComponent.ts:185](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L185)

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

[`FModel`](FModel.md).[`setRotation`](FModel.md#setrotation)

#### Defined in

[packages/3d/src/FComponent.ts:244](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L244)

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

[`FModel`](FModel.md).[`setRotationDegree`](FModel.md#setrotationdegree)

#### Defined in

[packages/3d/src/FComponent.ts:267](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L267)

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

[`FModel`](FModel.md).[`setScale`](FModel.md#setscale)

#### Defined in

[packages/3d/src/FComponent.ts:204](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L204)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FModel`](FModel.md).[`__CALLBACKS_ON_COLLISION__`](FModel.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the model is loaded

#### Inherited from

[`FModel`](FModel.md).[`__CALLBACKS_ON_LOADED__`](FModel.md#__callbacks_on_loaded__)

#### Defined in

[packages/3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L21)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FModel`](FModel.md).[`__ID__`](FModel.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FModel`](FModel.md).[`__IS_2D__`](FModel.md#__is_2d__)

#### Defined in

packages/core/dist/index.d.ts:12

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FModel`](FModel.md).[`__IS_3D__`](FModel.md#__is_3d__)

#### Defined in

[packages/3d/src/FComponent.ts:25](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L25)

***

### collider?

> `optional` **collider**: `FCollider`

Collider

#### Inherited from

[`FModel`](FModel.md).[`collider`](FModel.md#collider)

#### Defined in

[packages/3d/src/FComponent.ts:59](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L59)

***

### fileExtension

> **fileExtension**: `string`

The file extension of the model.
Default is 'obj'.

#### Inherited from

[`FModel`](FModel.md).[`fileExtension`](FModel.md#fileextension)

#### Defined in

[packages/3d/src/model/FModel.ts:52](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L52)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Inherited from

[`FModel`](FModel.md).[`mesh`](FModel.md#mesh)

#### Defined in

[packages/3d/src/FComponent.ts:35](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L35)

***

### name

> **name**: `string`

The name of the model.
Shouldn't contain file extensions.

#### Inherited from

[`FModel`](FModel.md).[`name`](FModel.md#name)

#### Defined in

[packages/3d/src/model/FModel.ts:27](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L27)

***

### path

> **path**: `string`

The path to the model file.
Will be interpreted as a URL if it starts with http.
Will be interpreted as an absolute path if it starts with /.
Otherwise, it will be treated as a relative path to the models folder.

#### Inherited from

[`FModel`](FModel.md).[`path`](FModel.md#path)

#### Defined in

[packages/3d/src/model/FModel.ts:35](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L35)

***

### position

> **position**: `Vector3`

The position of the component.

#### Inherited from

[`FModel`](FModel.md).[`position`](FModel.md#position)

#### Defined in

[packages/3d/src/FComponent.ts:41](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L41)

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RigidBody

#### Inherited from

[`FModel`](FModel.md).[`rigidBody`](FModel.md#rigidbody)

#### Defined in

[packages/3d/src/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L55)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Inherited from

[`FModel`](FModel.md).[`rotation`](FModel.md#rotation)

#### Defined in

[packages/3d/src/FComponent.ts:49](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L49)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Inherited from

[`FModel`](FModel.md).[`scale`](FModel.md#scale)

#### Defined in

[packages/3d/src/FComponent.ts:45](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L45)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FModel`](FModel.md).[`scene`](FModel.md#scene)

#### Defined in

[packages/3d/src/FComponent.ts:30](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L30)

***

### sensor?

> `optional` **sensor**: `FCollider`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FModel`](FModel.md).[`sensor`](FModel.md#sensor)

#### Defined in

[packages/3d/src/FComponent.ts:63](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/FComponent.ts#L63)

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

[`FModel`](FModel.md).[`textures`](FModel.md#textures)

#### Defined in

[packages/3d/src/model/FModel.ts:46](https://github.com/fibbojs/fibbo/blob/b75caee36f4519a3126901ff2e1c5645cf5db4a7/packages/3d/src/model/FModel.ts#L46)