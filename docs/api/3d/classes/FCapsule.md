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

[packages/3d/src/polyhedrons/FCapsule.ts:23](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/polyhedrons/FCapsule.ts#L23)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__SET_POSITION__`](FPolyhedron.md#__set_position__)

#### Defined in

[packages/3d/src/core/FComponent.ts:242](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L242)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

#### Parameters

• **rotation**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__SET_ROTATION__`](FPolyhedron.md#__set_rotation__)

#### Defined in

[packages/3d/src/core/FComponent.ts:252](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L252)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

#### Parameters

• **scale**: `FVector3`

#### Returns

`void`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__SET_SCALE__`](FPolyhedron.md#__set_scale__)

#### Defined in

[packages/3d/src/core/FComponent.ts:262](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L262)

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

[packages/3d/src/core/FComponent.ts:122](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L122)

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

[packages/3d/src/core/FComponent.ts:164](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L164)

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

[packages/3d/src/core/FComponent.ts:206](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L206)

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

packages/core/dist/index.d.ts:298

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`emitOnLoaded`](FPolyhedron.md#emitonloaded)

#### Defined in

packages/core/dist/index.d.ts:252

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

[packages/3d/src/core/FComponent.ts:112](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L112)

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

[packages/3d/src/polyhedrons/FCapsule.ts:38](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/polyhedrons/FCapsule.ts#L38)

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

[packages/3d/src/polyhedrons/FCapsule.ts:45](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/polyhedrons/FCapsule.ts#L45)

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

[packages/3d/src/polyhedrons/FCapsule.ts:52](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/polyhedrons/FCapsule.ts#L52)

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

[packages/3d/src/core/FComponent.ts:279](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L279)

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

packages/core/dist/index.d.ts:243

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

packages/core/dist/index.d.ts:248

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

[packages/3d/src/polyhedrons/FPolyhedron.ts:43](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/polyhedrons/FPolyhedron.ts#L43)

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

packages/core/dist/index.d.ts:221

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__CALLBACKS_ON_FRAME__`](FPolyhedron.md#__callbacks_on_frame__)

#### Defined in

packages/core/dist/index.d.ts:212

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__CALLBACKS_ON_LOADED__`](FPolyhedron.md#__callbacks_on_loaded__)

#### Defined in

packages/core/dist/index.d.ts:216

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__ID__`](FPolyhedron.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:208

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__IS_2D__`](FPolyhedron.md#__is_2d__)

#### Defined in

packages/core/dist/index.d.ts:203

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__IS_3D__`](FPolyhedron.md#__is_3d__)

#### Defined in

[packages/3d/src/core/FComponent.ts:29](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L29)

***

### \_\_MESH\_\_

> **\_\_MESH\_\_**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__MESH__`](FPolyhedron.md#__mesh__)

#### Defined in

[packages/3d/src/polyhedrons/FPolyhedron.ts:16](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/polyhedrons/FPolyhedron.ts#L16)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`collider`](FPolyhedron.md#collider)

#### Defined in

[packages/3d/src/core/FComponent.ts:58](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L58)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`controller`](FPolyhedron.md#controller)

#### Defined in

[packages/3d/src/core/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L38)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rigidBody`](FPolyhedron.md#rigidbody)

#### Defined in

[packages/3d/src/core/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L54)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scene`](FPolyhedron.md#scene)

#### Defined in

[packages/3d/src/core/FComponent.ts:34](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L34)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`sensor`](FPolyhedron.md#sensor)

#### Defined in

[packages/3d/src/core/FComponent.ts:62](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L62)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`transform`](FPolyhedron.md#transform)

#### Defined in

[packages/3d/src/core/FComponent.ts:48](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/3d/src/core/FComponent.ts#L48)
