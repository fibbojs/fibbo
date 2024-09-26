[@fibbojs](/api/index) / [3d](/api/3d) / FGLB

# Class: FGLB

A GLB model in Fibbo.
For now, it is just a wrapper around FGLTF as GLB is a binary form of glTF.

## Example

```ts
import { FGLB, FScene } from '@fibbojs/3d'

const scene = new FScene()

const glb = new FGLB(scene, {
  path: 'model.glb',
})
scene.addComponent(glb)
```

## Extends

- [`FGLTF`](FGLTF.md)

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

[`FGLTF`](FGLTF.md).[`position`](FGLTF.md#position)

#### Defined in

[3d/src/core/FComponent.ts:407](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L407)

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

[`FGLTF`](FGLTF.md).[`rotation`](FGLTF.md#rotation)

#### Defined in

[3d/src/core/FComponent.ts:439](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L439)

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

[`FGLTF`](FGLTF.md).[`rotationDegree`](FGLTF.md#rotationdegree)

#### Defined in

[3d/src/core/FComponent.ts:471](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L471)

***

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

[3d/src/core/FComponent.ts:483](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L483)

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

[3d/src/core/FComponent.ts:491](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L491)

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

[3d/src/core/FComponent.ts:499](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L499)

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

[3d/src/core/FComponent.ts:447](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L447)

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

[3d/src/core/FComponent.ts:455](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L455)

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

[3d/src/core/FComponent.ts:463](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L463)

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

[`FGLTF`](FGLTF.md).[`scale`](FGLTF.md#scale)

#### Defined in

[3d/src/core/FComponent.ts:507](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L507)

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

[3d/src/core/FComponent.ts:515](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L515)

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

[3d/src/core/FComponent.ts:523](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L523)

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

[3d/src/core/FComponent.ts:531](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L531)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FGLTF`](FGLTF.md).[`x`](FGLTF.md#x)

#### Defined in

[3d/src/core/FComponent.ts:415](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L415)

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

[3d/src/core/FComponent.ts:423](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L423)

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

[3d/src/core/FComponent.ts:431](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L431)

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

[3d/src/model/FGLB.ts:22](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FGLB.ts#L22)

## Methods

### defineMeshTransforms()

> **defineMeshTransforms**(): `void`

Define mesh transforms (used after loading the model).

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`defineMeshTransforms`](FGLTF.md#definemeshtransforms)

#### Defined in

[3d/src/model/FModel.ts:133](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L133)

***

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

Emit a collision event with a given class or object.

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: `FComponent`

The component to emit the collision event with.

#### Returns

`void`

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

[`FGLTF`](FGLTF.md).[`emitCollisionWith`](FGLTF.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:116

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`emitOnLoaded`](FGLTF.md#emitonloaded)

#### Defined in

[3d/src/model/FModel.ts:116](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L116)

***

### initCollider()

> **initCollider**(`options`?): `void`

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

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

[3d/src/core/FComponent.ts:361](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L361)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

Init a rigid body for the component.

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigid body.

#### Returns

`void`

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

[3d/src/core/FComponent.ts:332](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L332)

***

### initSensor()

> **initSensor**(`options`?): `void`

Init a sensor for the component.
This is useful for triggerings events when the component collides with other components.

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

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

[3d/src/core/FComponent.ts:385](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L385)

***

### loadTextureForMesh()

> **loadTextureForMesh**(`mesh`): `void`

Load the texture for a given mesh.

#### Parameters

• **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The mesh.

#### Returns

`void`

#### Example

```ts
model.loadTextureFor(material)
```

#### Inherited from

[`FGLTF`](FGLTF.md).[`loadTextureForMesh`](FGLTF.md#loadtextureformesh)

#### Defined in

[3d/src/model/FModel.ts:159](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L159)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): () => `void`

Add a callback to be called when a collision occurs.

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

[3d/src/core/FComponent.ts:394](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L394)

***

### onFrame()

> **onFrame**(`_delta`): `void`

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`onFrame`](FGLTF.md#onframe)

#### Defined in

[3d/src/core/FComponent.ts:108](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L108)

***

### onLoaded()

> **onLoaded**(`callback`): `void`

Add a callback to be called when the model is loaded.

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`onLoaded`](FGLTF.md#onloaded)

#### Defined in

[3d/src/model/FModel.ts:109](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L109)

***

### setPosition()

> **setPosition**(`options`): `void`

Set the position of the component.

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

#### Example

```ts
component.setPosition({ x: 0, y: 1, z: 0 })
```

#### Inherited from

[`FGLTF`](FGLTF.md).[`setPosition`](FGLTF.md#setposition)

#### Defined in

[3d/src/core/FComponent.ts:204](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L204)

***

### setRotation()

> **setRotation**(`options`): `void`

Set the rotation of the component from radians.

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

#### Example

```ts
component.setRotation({ x: 0, y: 0, z: 0 })
```

#### Inherited from

[`FGLTF`](FGLTF.md).[`setRotation`](FGLTF.md#setrotation)

#### Defined in

[3d/src/core/FComponent.ts:269](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L269)

***

### setRotationDegree()

> **setRotationDegree**(`options`): `void`

Set the rotation of the component from degrees.

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

#### Example

```ts
component.setRotationDegree({ x: 0, y: 90, z: 0 })
```

#### Inherited from

[`FGLTF`](FGLTF.md).[`setRotationDegree`](FGLTF.md#setrotationdegree)

#### Defined in

[3d/src/core/FComponent.ts:293](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L293)

***

### setScale()

> **setScale**(`options`): `void`

Set the scale of the component.

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

#### Example

```ts
component.setScale({ x: 1, y: 1, z: 1 })
```

#### Inherited from

[`FGLTF`](FGLTF.md).[`setScale`](FGLTF.md#setscale)

#### Defined in

[3d/src/core/FComponent.ts:228](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L228)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FGLTF`](FGLTF.md).[`__CALLBACKS_ON_COLLISION__`](FGLTF.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:56

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the model is loaded

#### Inherited from

[`FGLTF`](FGLTF.md).[`__CALLBACKS_ON_LOADED__`](FGLTF.md#__callbacks_on_loaded__)

#### Defined in

[3d/src/model/FModel.ts:21](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L21)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FGLTF`](FGLTF.md).[`__ID__`](FGLTF.md#__id__)

#### Defined in

core/dist/index.d.ts:51

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__IS_2D__`](FGLTF.md#__is_2d__)

#### Defined in

core/dist/index.d.ts:46

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FGLTF`](FGLTF.md).[`__IS_3D__`](FGLTF.md#__is_3d__)

#### Defined in

[3d/src/core/FComponent.ts:28](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L28)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Inherited from

[`FGLTF`](FGLTF.md).[`collider`](FGLTF.md#collider)

#### Defined in

[3d/src/core/FComponent.ts:57](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L57)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FGLTF`](FGLTF.md).[`controller`](FGLTF.md#controller)

#### Defined in

[3d/src/core/FComponent.ts:37](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L37)

***

### fileExtension

> **fileExtension**: `string`

The file extension of the model.
Default is 'obj'.

#### Inherited from

[`FGLTF`](FGLTF.md).[`fileExtension`](FGLTF.md#fileextension)

#### Defined in

[3d/src/model/FModel.ts:52](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L52)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Inherited from

[`FGLTF`](FGLTF.md).[`mesh`](FGLTF.md#mesh)

#### Defined in

[3d/src/core/FComponent.ts:42](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L42)

***

### name

> **name**: `string`

The name of the model.
Shouldn't contain file extensions.

#### Inherited from

[`FGLTF`](FGLTF.md).[`name`](FGLTF.md#name)

#### Defined in

[3d/src/model/FModel.ts:27](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L27)

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

[3d/src/model/FModel.ts:35](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L35)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Inherited from

[`FGLTF`](FGLTF.md).[`rigidBody`](FGLTF.md#rigidbody)

#### Defined in

[3d/src/core/FComponent.ts:53](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L53)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FGLTF`](FGLTF.md).[`scene`](FGLTF.md#scene)

#### Defined in

[3d/src/core/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L33)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FGLTF`](FGLTF.md).[`sensor`](FGLTF.md#sensor)

#### Defined in

[3d/src/core/FComponent.ts:61](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L61)

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

[3d/src/model/FModel.ts:46](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/model/FModel.ts#L46)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FGLTF`](FGLTF.md).[`transform`](FGLTF.md#transform)

#### Defined in

[3d/src/core/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/3d/src/core/FComponent.ts#L47)
