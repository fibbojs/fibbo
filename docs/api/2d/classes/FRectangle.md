[@fibbojs](/api/index) / [2d](/api/2d) / FRectangle

# Class: FRectangle

A simple square in Fibbo.

## Example

```ts
import { FRectangle } from '@fibbojs/2d'

const square = new FRectangle()
```

## Extends

- [`FPolygon`](FPolygon.md)

## Accessors

### color

> `get` **color**(): `number`

> `set` **color**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`FPolygon`](FPolygon.md).[`color`](FPolygon.md#color)

#### Defined in

[2d/src/polygons/FPolygon.ts:61](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/polygons/FPolygon.ts#L61)

## Constructors

### new FRectangle()

> **new FRectangle**(`options`?): [`FRectangle`](FRectangle.md)

#### Parameters

• **options?**: [`FPolygonOptions`](../interfaces/FPolygonOptions.md)

#### Returns

[`FRectangle`](FRectangle.md)

#### Overrides

[`FPolygon`](FPolygon.md).[`constructor`](FPolygon.md#constructors)

#### Defined in

[2d/src/polygons/FRectangle.ts:17](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/polygons/FRectangle.ts#L17)

## Methods

### \_\_DRAW\_SHAPE\_\_()

> **\_\_DRAW\_SHAPE\_\_**(`graphics`): `void`

Draw the shape of the polygon.
This method should be implemented by the child class.

#### Parameters

• **graphics**: `Graphics`

The PIXI.Graphics object to draw the shape on.

#### Returns

`void`

#### Overrides

[`FPolygon`](FPolygon.md).[`__DRAW_SHAPE__`](FPolygon.md#__draw_shape__)

#### Defined in

[2d/src/polygons/FRectangle.ts:47](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/polygons/FRectangle.ts#L47)

***

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**: `FVector2`

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`__SET_POSITION__`](FPolygon.md#__set_position__)

#### Defined in

[2d/src/core/FComponent.ts:254](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L254)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

#### Parameters

• **rotation**: `number`

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`__SET_ROTATION__`](FPolygon.md#__set_rotation__)

#### Defined in

[2d/src/core/FComponent.ts:261](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L261)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

#### Parameters

• **scale**: `FVector2`

#### Returns

`void`

#### Overrides

[`FPolygon`](FPolygon.md).[`__SET_SCALE__`](FPolygon.md#__set_scale__)

#### Defined in

[2d/src/polygons/FRectangle.ts:42](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/polygons/FRectangle.ts#L42)

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

[`FPolygon`](FPolygon.md).[`__UPDATE_POSITION__`](FPolygon.md#__update_position__)

#### Defined in

[2d/src/core/FComponent.ts:146](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L146)

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

[`FPolygon`](FPolygon.md).[`__UPDATE_ROTATION__`](FPolygon.md#__update_rotation__)

#### Defined in

[2d/src/core/FComponent.ts:186](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L186)

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

[`FPolygon`](FPolygon.md).[`__UPDATE_SCALE__`](FPolygon.md#__update_scale__)

#### Defined in

[2d/src/core/FComponent.ts:220](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L220)

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

[`FPolygon`](FPolygon.md).[`addController`](FPolygon.md#addcontroller)

#### Defined in

core/dist/index.d.ts:418

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

[`FPolygon`](FPolygon.md).[`emitCollisionWith`](FPolygon.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:499

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`emitOnLoaded`](FPolygon.md#emitonloaded)

#### Defined in

core/dist/index.d.ts:443

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

[`FPolygon`](FPolygon.md).[`frame`](FPolygon.md#frame)

#### Defined in

[2d/src/core/FComponent.ts:102](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L102)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`initCollider`](FPolygon.md#initcollider)

#### Defined in

[2d/src/core/FComponent.ts:286](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L286)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`initRigidBody`](FPolygon.md#initrigidbody)

#### Defined in

[2d/src/core/FComponent.ts:295](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L295)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`initSensor`](FPolygon.md#initsensor)

#### Defined in

[2d/src/core/FComponent.ts:304](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L304)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): () => `void`

Add a callback to be called when a collision occurs.

#### Parameters

• **classOrObject**: `any`

The class or object to observe for collisions. Should inherit from FComponent.

• **callback**

The callback to add to the collision event.

#### Returns

`Function`

A function to remove the callback.

##### Returns

`void`

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, ({ component }) => {
  console.log('Player collided with an Enemy!')
  console.log('The enemy is:', component)
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(enemy, () => {
  console.log('Player collided with the enemy!')
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
const removeThisCallback = player.onCollisionWith(enemy, () => {
 console.log('Player collided with the enemy!')
})
// To remove the callback, call the function returned by onCollisionWith
removeThisCallback()

#### Inherited from

[`FPolygon`](FPolygon.md).[`onCollisionWith`](FPolygon.md#oncollisionwith)

#### Defined in

[2d/src/core/FComponent.ts:276](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L276)

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

[`FPolygon`](FPolygon.md).[`onFrame`](FPolygon.md#onframe)

#### Defined in

core/dist/index.d.ts:434

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

[`FPolygon`](FPolygon.md).[`onLoaded`](FPolygon.md#onloaded)

#### Defined in

core/dist/index.d.ts:439

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

[`FPolygon`](FPolygon.md).[`removeController`](FPolygon.md#removecontroller)

#### Defined in

core/dist/index.d.ts:423

***

### render()

> **render**(`delta`): `void`

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`render`](FPolygon.md#render)

#### Defined in

[2d/src/core/FComponent.ts:106](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L106)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FPolygon`](FPolygon.md).[`__CALLBACKS_ON_COLLISION__`](FPolygon.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:402

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__CALLBACKS_ON_FRAME__`](FPolygon.md#__callbacks_on_frame__)

#### Defined in

core/dist/index.d.ts:393

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FPolygon`](FPolygon.md).[`__CALLBACKS_ON_LOADED__`](FPolygon.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:397

***

### \_\_COLOR\_\_?

> `optional` **\_\_COLOR\_\_**: `number`

The color of the polygon.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__COLOR__`](FPolygon.md#__color__)

#### Defined in

[2d/src/polygons/FPolygon.ts:23](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/polygons/FPolygon.ts#L23)

***

### \_\_CONTAINER\_\_

> **\_\_CONTAINER\_\_**: `Graphics`

PIXI container

#### Inherited from

[`FPolygon`](FPolygon.md).[`__CONTAINER__`](FPolygon.md#__container__)

#### Defined in

[2d/src/polygons/FPolygon.ts:30](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/polygons/FPolygon.ts#L30)

***

### \_\_GRADIENT\_\_?

> `optional` **\_\_GRADIENT\_\_**: [`GradientStep`](../interfaces/GradientStep.md)[]

The gradient of the polygon.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__GRADIENT__`](FPolygon.md#__gradient__)

#### Defined in

[2d/src/polygons/FPolygon.ts:27](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/polygons/FPolygon.ts#L27)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__ID__`](FPolygon.md#__id__)

#### Defined in

core/dist/index.d.ts:389

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FPolygon`](FPolygon.md).[`__IS_2D__`](FPolygon.md#__is_2d__)

#### Defined in

[2d/src/core/FComponent.ts:30](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L30)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

[`FPolygon`](FPolygon.md).[`__IS_3D__`](FPolygon.md#__is_3d__)

#### Defined in

core/dist/index.d.ts:383

***

### collider

> **collider**: [`FCollider`](FCollider.md)

RAPIER Collider

#### Inherited from

[`FPolygon`](FPolygon.md).[`collider`](FPolygon.md#collider)

#### Defined in

[2d/src/core/FComponent.ts:58](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L58)

***

### controllers

> **controllers**: [`FController`](FController.md)[]

The controllers attached to the component.

#### Inherited from

[`FPolygon`](FPolygon.md).[`controllers`](FPolygon.md#controllers)

#### Defined in

[2d/src/core/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L38)

***

### rigidBody

> **rigidBody**: [`FRigidBody`](FRigidBody.md)

RAPIER RigidBody

#### Inherited from

[`FPolygon`](FPolygon.md).[`rigidBody`](FPolygon.md#rigidbody)

#### Defined in

[2d/src/core/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L54)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the component is attached to.

#### Inherited from

[`FPolygon`](FPolygon.md).[`scene`](FPolygon.md#scene)

#### Defined in

[2d/src/core/FComponent.ts:34](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L34)

***

### sensor

> **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FPolygon`](FPolygon.md).[`sensor`](FPolygon.md#sensor)

#### Defined in

[2d/src/core/FComponent.ts:62](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L62)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FPolygon`](FPolygon.md).[`transform`](FPolygon.md#transform)

#### Defined in

[2d/src/core/FComponent.ts:48](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/2d/src/core/FComponent.ts#L48)
