[@fibbojs](/api/index) / [3d](/api/3d) / FModel

# Class: `abstract` FModel

An abstract 3D Model base class.

## Extends

- [`FComponent`](FComponent.md)

## Extended by

- [`FFBX`](FFBX.md)
- [`FGLTF`](FGLTF.md)
- [`FOBJ`](FOBJ.md)

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

[3d/src/model/FModel.ts:55](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/model/FModel.ts#L55)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`__SET_POSITION__`](FComponent.md#__set_position__)

#### Defined in

[3d/src/core/FComponent.ts:242](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L242)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

#### Parameters

• **rotation**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`__SET_ROTATION__`](FComponent.md#__set_rotation__)

#### Defined in

[3d/src/core/FComponent.ts:252](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L252)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

#### Parameters

• **scale**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`__SET_SCALE__`](FComponent.md#__set_scale__)

#### Defined in

[3d/src/core/FComponent.ts:262](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L262)

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

[`FComponent`](FComponent.md).[`__UPDATE_POSITION__`](FComponent.md#__update_position__)

#### Defined in

[3d/src/core/FComponent.ts:122](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L122)

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

[`FComponent`](FComponent.md).[`__UPDATE_ROTATION__`](FComponent.md#__update_rotation__)

#### Defined in

[3d/src/core/FComponent.ts:164](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L164)

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

[`FComponent`](FComponent.md).[`__UPDATE_SCALE__`](FComponent.md#__update_scale__)

#### Defined in

[3d/src/core/FComponent.ts:206](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L206)

***

### defineMeshTransforms()

> **defineMeshTransforms**(): `void`

Define mesh transforms (used after loading the model).

#### Returns

`void`

#### Defined in

[3d/src/model/FModel.ts:106](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/model/FModel.ts#L106)

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

[`FComponent`](FComponent.md).[`emitCollisionWith`](FComponent.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:293

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.
It was overridden to add shadow support.

#### Returns

`void`

#### Overrides

[`FComponent`](FComponent.md).[`emitOnLoaded`](FComponent.md#emitonloaded)

#### Defined in

[3d/src/model/FModel.ts:89](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/model/FModel.ts#L89)

***

### frame()

> **frame**(`_delta`): `void`

Update the component. Should be called every frame.
The purpose of this method is to render the component, its mesh/sprite, and its properties.

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`frame`](FComponent.md#frame)

#### Defined in

[3d/src/core/FComponent.ts:112](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L112)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`initCollider`](FComponent.md#initcollider)

#### Defined in

[3d/src/core/FComponent.ts:289](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L289)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`initRigidBody`](FComponent.md#initrigidbody)

#### Defined in

[3d/src/core/FComponent.ts:298](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L298)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`initSensor`](FComponent.md#initsensor)

#### Defined in

[3d/src/core/FComponent.ts:307](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L307)

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

#### Defined in

[3d/src/model/FModel.ts:132](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/model/FModel.ts#L132)

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

[`FComponent`](FComponent.md).[`onCollisionWith`](FComponent.md#oncollisionwith)

#### Defined in

[3d/src/core/FComponent.ts:279](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L279)

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

[`FComponent`](FComponent.md).[`onFrame`](FComponent.md#onframe)

#### Defined in

core/dist/index.d.ts:238

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

[`FComponent`](FComponent.md).[`onLoaded`](FComponent.md#onloaded)

#### Defined in

core/dist/index.d.ts:243

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_COLLISION__`](FComponent.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:216

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_FRAME__`](FComponent.md#__callbacks_on_frame__)

#### Defined in

core/dist/index.d.ts:207

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_LOADED__`](FComponent.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:211

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent`](FComponent.md).[`__ID__`](FComponent.md#__id__)

#### Defined in

core/dist/index.d.ts:203

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_2D__`](FComponent.md#__is_2d__)

#### Defined in

core/dist/index.d.ts:198

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_3D__`](FComponent.md#__is_3d__)

#### Defined in

[3d/src/core/FComponent.ts:29](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L29)

***

### \_\_MESH\_\_?

> `optional` **\_\_MESH\_\_**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Inherited from

[`FComponent`](FComponent.md).[`__MESH__`](FComponent.md#__mesh__)

#### Defined in

[3d/src/core/FComponent.ts:43](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L43)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Inherited from

[`FComponent`](FComponent.md).[`collider`](FComponent.md#collider)

#### Defined in

[3d/src/core/FComponent.ts:58](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L58)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FComponent`](FComponent.md).[`controller`](FComponent.md#controller)

#### Defined in

[3d/src/core/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L38)

***

### fileExtension

> **fileExtension**: `string`

The file extension of the model.
Default is 'obj'.

#### Defined in

[3d/src/model/FModel.ts:48](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/model/FModel.ts#L48)

***

### name

> **name**: `string`

The name of the model.
Shouldn't contain file extensions.

#### Defined in

[3d/src/model/FModel.ts:23](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/model/FModel.ts#L23)

***

### path

> **path**: `string`

The path to the model file.
Will be interpreted as a URL if it starts with http.
Will be interpreted as an absolute path if it starts with /.
Otherwise, it will be treated as a relative path to the models folder.

#### Defined in

[3d/src/model/FModel.ts:31](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/model/FModel.ts#L31)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Inherited from

[`FComponent`](FComponent.md).[`rigidBody`](FComponent.md#rigidbody)

#### Defined in

[3d/src/core/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L54)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FComponent`](FComponent.md).[`scene`](FComponent.md#scene)

#### Defined in

[3d/src/core/FComponent.ts:34](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L34)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FComponent`](FComponent.md).[`sensor`](FComponent.md#sensor)

#### Defined in

[3d/src/core/FComponent.ts:62](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L62)

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

[3d/src/model/FModel.ts:42](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/model/FModel.ts#L42)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FComponent`](FComponent.md).[`transform`](FComponent.md#transform)

#### Defined in

[3d/src/core/FComponent.ts:48](https://github.com/fibbojs/fibbo/blob/fe513db46f793b2520946de03583c9b4464b47bc/packages/3d/src/core/FComponent.ts#L48)
