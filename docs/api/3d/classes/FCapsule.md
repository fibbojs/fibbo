[@fibbojs](/api/index) / [3d](/api/3d) / FCapsule

# Class: FCapsule

A simple capsule model in Fibbo.

## Example

```ts
import { FCapsule, FScene } from '@fibbojs/3d'

const scene = new FScene()

const capsule = new FCapsule(scene)
scene.addComponent(capsule)
```

## Extends

- [`FPolyhedron`](FPolyhedron.md)

## Constructors

### new FCapsule()

> **new FCapsule**(`scene`, `options`?): [`FCapsule`](FCapsule.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

#### Returns

[`FCapsule`](FCapsule.md)

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`constructor`](FPolyhedron.md#constructors)

#### Defined in

[3d/src/polyhedrons/FCapsule.ts:23](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/polyhedrons/FCapsule.ts#L23)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**: [`FVector3`](../interfaces/FVector3.md)

#### Returns

`void`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__SET_POSITION__`](FPolyhedron.md#__set_position__)

#### Defined in

[3d/src/core/FComponent.ts:243](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L243)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

#### Parameters

• **rotation**: [`FVector3`](../interfaces/FVector3.md)

#### Returns

`void`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__SET_ROTATION__`](FPolyhedron.md#__set_rotation__)

#### Defined in

[3d/src/core/FComponent.ts:251](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L251)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

#### Parameters

• **scale**: [`FVector3`](../interfaces/FVector3.md)

#### Returns

`void`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__SET_SCALE__`](FPolyhedron.md#__set_scale__)

#### Defined in

[3d/src/core/FComponent.ts:259](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L259)

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

[`FPolyhedron`](FPolyhedron.md).[`__UPDATE_POSITION__`](FPolyhedron.md#__update_position__)

#### Defined in

[3d/src/core/FComponent.ts:123](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L123)

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

[`FPolyhedron`](FPolyhedron.md).[`__UPDATE_ROTATION__`](FPolyhedron.md#__update_rotation__)

#### Defined in

[3d/src/core/FComponent.ts:165](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L165)

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

[`FPolyhedron`](FPolyhedron.md).[`__UPDATE_SCALE__`](FPolyhedron.md#__update_scale__)

#### Defined in

[3d/src/core/FComponent.ts:207](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L207)

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

[`FPolyhedron`](FPolyhedron.md).[`emitCollisionWith`](FPolyhedron.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:293

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`emitOnLoaded`](FPolyhedron.md#emitonloaded)

#### Defined in

core/dist/index.d.ts:247

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

[`FPolyhedron`](FPolyhedron.md).[`frame`](FPolyhedron.md#frame)

#### Defined in

[3d/src/core/FComponent.ts:113](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L113)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

#### Returns

`void`

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`initCollider`](FPolyhedron.md#initcollider)

#### Defined in

[3d/src/polyhedrons/FCapsule.ts:38](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/polyhedrons/FCapsule.ts#L38)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`initRigidBody`](FPolyhedron.md#initrigidbody)

#### Defined in

[3d/src/polyhedrons/FCapsule.ts:45](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/polyhedrons/FCapsule.ts#L45)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`initSensor`](FPolyhedron.md#initsensor)

#### Defined in

[3d/src/polyhedrons/FCapsule.ts:52](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/polyhedrons/FCapsule.ts#L52)

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

[`FPolyhedron`](FPolyhedron.md).[`onCollisionWith`](FPolyhedron.md#oncollisionwith)

#### Defined in

[3d/src/core/FComponent.ts:276](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L276)

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

[`FPolyhedron`](FPolyhedron.md).[`onFrame`](FPolyhedron.md#onframe)

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

[`FPolyhedron`](FPolyhedron.md).[`onLoaded`](FPolyhedron.md#onloaded)

#### Defined in

core/dist/index.d.ts:243

***

### setColor()

> **setColor**(`color`): `void`

Change the color of the polyhedron.

#### Parameters

• **color**: `number`

The color of the polyhedron.

#### Returns

`void`

#### Example

```ts
cube.setColor(0xFF0000)
```

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setColor`](FPolyhedron.md#setcolor)

#### Defined in

[3d/src/polyhedrons/FPolyhedron.ts:43](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/polyhedrons/FPolyhedron.ts#L43)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__CALLBACKS_ON_COLLISION__`](FPolyhedron.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:216

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__CALLBACKS_ON_FRAME__`](FPolyhedron.md#__callbacks_on_frame__)

#### Defined in

core/dist/index.d.ts:207

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__CALLBACKS_ON_LOADED__`](FPolyhedron.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:211

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__ID__`](FPolyhedron.md#__id__)

#### Defined in

core/dist/index.d.ts:203

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__IS_2D__`](FPolyhedron.md#__is_2d__)

#### Defined in

core/dist/index.d.ts:198

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__IS_3D__`](FPolyhedron.md#__is_3d__)

#### Defined in

[3d/src/core/FComponent.ts:30](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L30)

***

### \_\_MESH\_\_

> **\_\_MESH\_\_**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__MESH__`](FPolyhedron.md#__mesh__)

#### Defined in

[3d/src/polyhedrons/FPolyhedron.ts:16](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/polyhedrons/FPolyhedron.ts#L16)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`collider`](FPolyhedron.md#collider)

#### Defined in

[3d/src/core/FComponent.ts:59](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L59)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`controller`](FPolyhedron.md#controller)

#### Defined in

[3d/src/core/FComponent.ts:39](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L39)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rigidBody`](FPolyhedron.md#rigidbody)

#### Defined in

[3d/src/core/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L55)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scene`](FPolyhedron.md#scene)

#### Defined in

[3d/src/core/FComponent.ts:35](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L35)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`sensor`](FPolyhedron.md#sensor)

#### Defined in

[3d/src/core/FComponent.ts:63](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L63)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`transform`](FPolyhedron.md#transform)

#### Defined in

[3d/src/core/FComponent.ts:49](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/3d/src/core/FComponent.ts#L49)
