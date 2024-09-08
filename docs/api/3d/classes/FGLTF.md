[@fibbojs](/api/index) / [3d](/api/3d) / FGLTF

# Class: FGLTF

## Description

A GLTF model in Fibbo.

## Example

```ts
import { FScene, FGLTF } from '@fibbojs/3d'

const scene = new FScene()

const gltf = new FGLTF(scene, {
 path: 'model.glb',
})
scene.addComponent(gltf)
```

## Extends

- [`FModel`](FModel.md)

## Extended by

- [`FGLB`](FGLB.md)

## Accessors

### position

> `get` **position**(): `object`

Setters & getters for transform properties

> `set` **position**(`position`): `void`

#### Parameters

• **position**

• **position.x**: `number`

• **position.y**: `number`

• **position.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Inherited from

[`FModel`](FModel.md).[`position`](FModel.md#position)

#### Defined in

[3d/src/core/FComponent.ts:407](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L407)

***

### rotation

> `get` **rotation**(): `object`

> `set` **rotation**(`rotation`): `void`

#### Parameters

• **rotation**

• **rotation.x**: `number`

• **rotation.y**: `number`

• **rotation.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Inherited from

[`FModel`](FModel.md).[`rotation`](FModel.md#rotation)

#### Defined in

[3d/src/core/FComponent.ts:439](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L439)

***

### rotationDegree

> `get` **rotationDegree**(): `object`

> `set` **rotationDegree**(`rotationDegree`): `void`

#### Parameters

• **rotationDegree**

• **rotationDegree.x**: `number`

• **rotationDegree.y**: `number`

• **rotationDegree.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Inherited from

[`FModel`](FModel.md).[`rotationDegree`](FModel.md#rotationdegree)

#### Defined in

[3d/src/core/FComponent.ts:471](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L471)

***

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

[3d/src/core/FComponent.ts:483](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L483)

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

[3d/src/core/FComponent.ts:491](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L491)

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

[3d/src/core/FComponent.ts:499](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L499)

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

[3d/src/core/FComponent.ts:447](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L447)

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

[3d/src/core/FComponent.ts:455](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L455)

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

[3d/src/core/FComponent.ts:463](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L463)

***

### scale

> `get` **scale**(): `object`

> `set` **scale**(`scale`): `void`

#### Parameters

• **scale**

• **scale.x**: `number`

• **scale.y**: `number`

• **scale.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Inherited from

[`FModel`](FModel.md).[`scale`](FModel.md#scale)

#### Defined in

[3d/src/core/FComponent.ts:507](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L507)

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

[3d/src/core/FComponent.ts:515](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L515)

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

[3d/src/core/FComponent.ts:523](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L523)

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

[3d/src/core/FComponent.ts:531](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L531)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FModel`](FModel.md).[`x`](FModel.md#x)

#### Defined in

[3d/src/core/FComponent.ts:415](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L415)

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

[3d/src/core/FComponent.ts:423](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L423)

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

[3d/src/core/FComponent.ts:431](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L431)

## Constructors

### new FGLTF()

> **new FGLTF**(`scene`, `options`): [`FGLTF`](FGLTF.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FModelOptions`](../interfaces/FModelOptions.md)

#### Returns

[`FGLTF`](FGLTF.md)

#### Overrides

[`FModel`](FModel.md).[`constructor`](FModel.md#constructors)

#### Defined in

[3d/src/model/FGLTF.ts:37](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FGLTF.ts#L37)

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

[3d/src/model/FModel.ts:125](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L125)

***

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: `FComponent`

The component to emit the collision event with.

#### Returns

`void`

#### Description

Emit a collision event with a given class or object.

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith({
 class: Enemy
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith({
 object: enemy
})
```

#### Inherited from

[`FModel`](FModel.md).[`emitCollisionWith`](FModel.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:116

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

[3d/src/model/FModel.ts:116](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L116)

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

[3d/src/core/FComponent.ts:361](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L361)

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

[3d/src/core/FComponent.ts:332](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L332)

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

[3d/src/core/FComponent.ts:385](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L385)

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

[3d/src/model/FModel.ts:151](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L151)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): () => `void`

#### Parameters

• **classOrObject**: `any`

The class or object to add the callback to.

• **callback**

The callback to add.

#### Returns

`Function`

A function to remove the callback.

##### Returns

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

[3d/src/core/FComponent.ts:394](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L394)

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Inherited from

[`FModel`](FModel.md).[`onFrame`](FModel.md#onframe)

#### Defined in

[3d/src/core/FComponent.ts:108](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L108)

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

[3d/src/model/FModel.ts:109](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L109)

***

### setPosition()

> **setPosition**(`options`): `void`

#### Parameters

• **options**

The options for the position.

• **options.x**: `number`

The position on the x-axis.

• **options.y**: `number`

The position on the y-axis.

• **options.z**: `number`

The position on the z-axis.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition({ x: 0, y: 1, z: 0 })
```

#### Inherited from

[`FModel`](FModel.md).[`setPosition`](FModel.md#setposition)

#### Defined in

[3d/src/core/FComponent.ts:204](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L204)

***

### setRotation()

> **setRotation**(`options`): `void`

#### Parameters

• **options**

The options for the rotation.

• **options.x**: `number`

The rotation on the x-axis.

• **options.y**: `number`

The rotation on the y-axis.

• **options.z**: `number`

The rotation on the z-axis.

#### Returns

`void`

#### Description

Set the rotation of the component from radians.

#### Example

```ts
component.setRotation({ x: 0, y: 0, z: 0 })
```

#### Inherited from

[`FModel`](FModel.md).[`setRotation`](FModel.md#setrotation)

#### Defined in

[3d/src/core/FComponent.ts:269](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L269)

***

### setRotationDegree()

> **setRotationDegree**(`options`): `void`

#### Parameters

• **options**

The options for the rotation.

• **options.x**: `number`

The rotation in degrees on the x-axis.

• **options.y**: `number`

The rotation in degrees on the y-axis.

• **options.z**: `number`

The rotation in degrees on the z-axis.

#### Returns

`void`

#### Description

Set the rotation of the component from degrees.

#### Example

```ts
component.setRotationDegree({ x: 0, y: 90, z: 0 })
```

#### Inherited from

[`FModel`](FModel.md).[`setRotationDegree`](FModel.md#setrotationdegree)

#### Defined in

[3d/src/core/FComponent.ts:293](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L293)

***

### setScale()

> **setScale**(`options`): `void`

#### Parameters

• **options**

The options for the scale.

• **options.x**: `number`

The scale on the x-axis.

• **options.y**: `number`

The scale on the y-axis.

• **options.z**: `number`

The scale on the z-axis.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Example

```ts
component.setScale({ x: 1, y: 1, z: 1 })
```

#### Inherited from

[`FModel`](FModel.md).[`setScale`](FModel.md#setscale)

#### Defined in

[3d/src/core/FComponent.ts:228](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L228)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FModel`](FModel.md).[`__CALLBACKS_ON_COLLISION__`](FModel.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:56

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the model is loaded

#### Inherited from

[`FModel`](FModel.md).[`__CALLBACKS_ON_LOADED__`](FModel.md#__callbacks_on_loaded__)

#### Defined in

[3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L21)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FModel`](FModel.md).[`__ID__`](FModel.md#__id__)

#### Defined in

core/dist/index.d.ts:51

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FModel`](FModel.md).[`__IS_2D__`](FModel.md#__is_2d__)

#### Defined in

core/dist/index.d.ts:46

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FModel`](FModel.md).[`__IS_3D__`](FModel.md#__is_3d__)

#### Defined in

[3d/src/core/FComponent.ts:28](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L28)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Inherited from

[`FModel`](FModel.md).[`collider`](FModel.md#collider)

#### Defined in

[3d/src/core/FComponent.ts:57](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L57)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FModel`](FModel.md).[`controller`](FModel.md#controller)

#### Defined in

[3d/src/core/FComponent.ts:37](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L37)

***

### fileExtension

> **fileExtension**: `string`

The file extension of the model.
Default is 'obj'.

#### Inherited from

[`FModel`](FModel.md).[`fileExtension`](FModel.md#fileextension)

#### Defined in

[3d/src/model/FModel.ts:52](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L52)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Inherited from

[`FModel`](FModel.md).[`mesh`](FModel.md#mesh)

#### Defined in

[3d/src/core/FComponent.ts:42](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L42)

***

### name

> **name**: `string`

The name of the model.
Shouldn't contain file extensions.

#### Inherited from

[`FModel`](FModel.md).[`name`](FModel.md#name)

#### Defined in

[3d/src/model/FModel.ts:27](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L27)

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

[3d/src/model/FModel.ts:35](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L35)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Inherited from

[`FModel`](FModel.md).[`rigidBody`](FModel.md#rigidbody)

#### Defined in

[3d/src/core/FComponent.ts:53](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L53)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FModel`](FModel.md).[`scene`](FModel.md#scene)

#### Defined in

[3d/src/core/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L33)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FModel`](FModel.md).[`sensor`](FModel.md#sensor)

#### Defined in

[3d/src/core/FComponent.ts:61](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L61)

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

[3d/src/model/FModel.ts:46](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/model/FModel.ts#L46)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FModel`](FModel.md).[`transform`](FModel.md#transform)

#### Defined in

[3d/src/core/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/c87e9de577b4352e4b6a8336cf19cf678868439d/packages/3d/src/core/FComponent.ts#L47)
