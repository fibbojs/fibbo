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

[3d/src/model/FGLB.ts:22](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/model/FGLB.ts#L22)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__SET_POSITION__`](FGLTF.md#__set_position__)

#### Defined in

[3d/src/core/FComponent.ts:285](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L285)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

#### Parameters

• **rotation**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__SET_ROTATION__`](FGLTF.md#__set_rotation__)

#### Defined in

[3d/src/core/FComponent.ts:294](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L294)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

#### Parameters

• **scale**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__SET_SCALE__`](FGLTF.md#__set_scale__)

#### Defined in

[3d/src/core/FComponent.ts:304](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L304)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(`initiator`): `void`

Update the position of the component according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the component won't be considered as the initiator of the position update.
Set this to true to propagate the position update to the rigidBody, collider and sensor.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__UPDATE_POSITION__`](FGLTF.md#__update_position__)

#### Defined in

[3d/src/core/FComponent.ts:165](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L165)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(`initiator`): `void`

Update the rotation of the component according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the component won't be considered as the initiator of the rotation update.
Set this to true to propagate the rotation update to the rigidBody, collider and sensor.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__UPDATE_ROTATION__`](FGLTF.md#__update_rotation__)

#### Defined in

[3d/src/core/FComponent.ts:207](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L207)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(`initiator`): `void`

Update the scale of the component according to the transform.
This method should be called after updating the transform properties.

#### Parameters

• **initiator**: `boolean` = `false`

By default (false), the component won't be considered as the initiator of the scale update.
Set this to true to propagate the scale update to the rigidBody, collider and sensor.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__UPDATE_SCALE__`](FGLTF.md#__update_scale__)

#### Defined in

[3d/src/core/FComponent.ts:249](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L249)

***

### addController()

> **addController**(`controller`): `void`

Add a controller to the component.

#### Parameters

• **controller**: `FController`

The controller to add.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`addController`](FGLTF.md#addcontroller)

#### Defined in

core/dist/index.d.ts:413

***

### defineMeshTransforms()

> **defineMeshTransforms**(): `void`

Define mesh transforms (used after loading the model).

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`defineMeshTransforms`](FGLTF.md#definemeshtransforms)

#### Defined in

[3d/src/model/FModel.ts:106](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/model/FModel.ts#L106)

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

core/dist/index.d.ts:484

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.
It was overridden to add shadow support.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`emitOnLoaded`](FGLTF.md#emitonloaded)

#### Defined in

[3d/src/model/FModel.ts:89](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/model/FModel.ts#L89)

***

### frame()

> **frame**(`delta`): `void`

Update the component. Should be called every frame.
The purpose of this method is to render the component, its mesh/sprite, and its properties.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`frame`](FGLTF.md#frame)

#### Defined in

[3d/src/core/FComponent.ts:113](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L113)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`initCollider`](FGLTF.md#initcollider)

#### Defined in

[3d/src/core/FComponent.ts:331](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L331)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`initRigidBody`](FGLTF.md#initrigidbody)

#### Defined in

[3d/src/core/FComponent.ts:340](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L340)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`initSensor`](FGLTF.md#initsensor)

#### Defined in

[3d/src/core/FComponent.ts:349](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L349)

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

[3d/src/model/FModel.ts:132](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/model/FModel.ts#L132)

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

[3d/src/core/FComponent.ts:321](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L321)

***

### onFrame()

> **onFrame**(`callback`): `void`

Add a callback to be called every frame.

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`onFrame`](FGLTF.md#onframe)

#### Defined in

core/dist/index.d.ts:429

***

### onLoaded()

> **onLoaded**(`callback`): `void`

Add a callback to be called when the component is loaded (could be a texture, a 3D model, etc).

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`onLoaded`](FGLTF.md#onloaded)

#### Defined in

core/dist/index.d.ts:434

***

### removeController()

> **removeController**(`controller`): `void`

Remove a controller from the component.

#### Parameters

• **controller**: `FController`

The controller to remove.

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`removeController`](FGLTF.md#removecontroller)

#### Defined in

core/dist/index.d.ts:418

***

### render()

> **render**(`delta`): `void`

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Inherited from

[`FGLTF`](FGLTF.md).[`render`](FGLTF.md#render)

#### Defined in

[3d/src/core/FComponent.ts:117](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L117)

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

core/dist/index.d.ts:397

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FGLTF`](FGLTF.md).[`__CALLBACKS_ON_FRAME__`](FGLTF.md#__callbacks_on_frame__)

#### Defined in

core/dist/index.d.ts:388

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FGLTF`](FGLTF.md).[`__CALLBACKS_ON_LOADED__`](FGLTF.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:392

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FGLTF`](FGLTF.md).[`__ID__`](FGLTF.md#__id__)

#### Defined in

core/dist/index.d.ts:384

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FGLTF`](FGLTF.md).[`__IS_2D__`](FGLTF.md#__is_2d__)

#### Defined in

core/dist/index.d.ts:379

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FGLTF`](FGLTF.md).[`__IS_3D__`](FGLTF.md#__is_3d__)

#### Defined in

[3d/src/core/FComponent.ts:30](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L30)

***

### \_\_MESH\_\_?

> `optional` **\_\_MESH\_\_**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Inherited from

[`FGLTF`](FGLTF.md).[`__MESH__`](FGLTF.md#__mesh__)

#### Defined in

[3d/src/core/FComponent.ts:44](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L44)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Inherited from

[`FGLTF`](FGLTF.md).[`collider`](FGLTF.md#collider)

#### Defined in

[3d/src/core/FComponent.ts:59](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L59)

***

### controllers

> **controllers**: [`FController`](FController.md)[]

The controllers attached to the component.

#### Inherited from

[`FGLTF`](FGLTF.md).[`controllers`](FGLTF.md#controllers)

#### Defined in

[3d/src/core/FComponent.ts:39](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L39)

***

### fileExtension

> **fileExtension**: `string`

The file extension of the model.
Default is 'obj'.

#### Inherited from

[`FGLTF`](FGLTF.md).[`fileExtension`](FGLTF.md#fileextension)

#### Defined in

[3d/src/model/FModel.ts:48](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/model/FModel.ts#L48)

***

### name

> **name**: `string`

The name of the model.
Shouldn't contain file extensions.

#### Inherited from

[`FGLTF`](FGLTF.md).[`name`](FGLTF.md#name)

#### Defined in

[3d/src/model/FModel.ts:23](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/model/FModel.ts#L23)

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

[3d/src/model/FModel.ts:31](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/model/FModel.ts#L31)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Inherited from

[`FGLTF`](FGLTF.md).[`rigidBody`](FGLTF.md#rigidbody)

#### Defined in

[3d/src/core/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L55)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FGLTF`](FGLTF.md).[`scene`](FGLTF.md#scene)

#### Defined in

[3d/src/core/FComponent.ts:35](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L35)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FGLTF`](FGLTF.md).[`sensor`](FGLTF.md#sensor)

#### Defined in

[3d/src/core/FComponent.ts:63](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L63)

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

[3d/src/model/FModel.ts:42](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/model/FModel.ts#L42)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FGLTF`](FGLTF.md).[`transform`](FGLTF.md#transform)

#### Defined in

[3d/src/core/FComponent.ts:49](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/3d/src/core/FComponent.ts#L49)
