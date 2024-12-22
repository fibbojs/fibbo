[@fibbojs](/api/index) / [2d](/api/2d) / FCircle

# Class: FCircle

A simple circle in Fibbo.

## Example

```ts
import { FCircle, FScene } from '@fibbojs/2d'

const scene = new FScene()

const circle = new FCircle(scene)
scene.addComponent(circle)
```

## Extends

- [`FPolygon`](FPolygon.md)

## Accessors

### color

> `get` **color**(): `undefined` \| `number`

> `set` **color**(`value`): `void`

#### Parameters

• **value**: `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[`FPolygon`](FPolygon.md).[`color`](FPolygon.md#color)

#### Defined in

[packages/2d/src/polygons/FPolygon.ts:63](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FPolygon.ts#L63)

## Constructors

### new FCircle()

> **new FCircle**(`scene`, `options`?): [`FCircle`](FCircle.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FPolygonOptions`](../interfaces/FPolygonOptions.md)

#### Returns

[`FCircle`](FCircle.md)

#### Overrides

[`FPolygon`](FPolygon.md).[`constructor`](FPolygon.md#constructors)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:23](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FCircle.ts#L23)

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

[packages/2d/src/polygons/FCircle.ts:48](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FCircle.ts#L48)

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

[packages/2d/src/core/FComponent.ts:220](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L220)

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

[packages/2d/src/core/FComponent.ts:227](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L227)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

#### Parameters

• **scale**: `FVector2`

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`__SET_SCALE__`](FPolygon.md#__set_scale__)

#### Defined in

[packages/2d/src/core/FComponent.ts:234](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L234)

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

[packages/2d/src/core/FComponent.ts:112](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L112)

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

[packages/2d/src/core/FComponent.ts:152](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L152)

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

[packages/2d/src/core/FComponent.ts:186](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L186)

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

packages/core/dist/index.d.ts:298

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FPolygon`](FPolygon.md).[`emitOnLoaded`](FPolygon.md#emitonloaded)

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

[`FPolygon`](FPolygon.md).[`frame`](FPolygon.md#frame)

#### Defined in

[packages/2d/src/core/FComponent.ts:102](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L102)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

#### Returns

`void`

#### Overrides

[`FPolygon`](FPolygon.md).[`initCollider`](FPolygon.md#initcollider)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:52](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FCircle.ts#L52)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Overrides

[`FPolygon`](FPolygon.md).[`initRigidBody`](FPolygon.md#initrigidbody)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:59](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FCircle.ts#L59)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Overrides

[`FPolygon`](FPolygon.md).[`initSensor`](FPolygon.md#initsensor)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:66](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FCircle.ts#L66)

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

[`FPolygon`](FPolygon.md).[`onCollisionWith`](FPolygon.md#oncollisionwith)

#### Defined in

[packages/2d/src/core/FComponent.ts:242](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L242)

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

[`FPolygon`](FPolygon.md).[`onLoaded`](FPolygon.md#onloaded)

#### Defined in

packages/core/dist/index.d.ts:248

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

packages/core/dist/index.d.ts:221

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__CALLBACKS_ON_FRAME__`](FPolygon.md#__callbacks_on_frame__)

#### Defined in

packages/core/dist/index.d.ts:212

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FPolygon`](FPolygon.md).[`__CALLBACKS_ON_LOADED__`](FPolygon.md#__callbacks_on_loaded__)

#### Defined in

packages/core/dist/index.d.ts:216

***

### \_\_COLOR\_\_?

> `optional` **\_\_COLOR\_\_**: `number`

The color of the polygon.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__COLOR__`](FPolygon.md#__color__)

#### Defined in

[packages/2d/src/polygons/FPolygon.ts:24](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FPolygon.ts#L24)

***

### \_\_CONTAINER\_\_

> **\_\_CONTAINER\_\_**: `Graphics`

PIXI container

#### Inherited from

[`FPolygon`](FPolygon.md).[`__CONTAINER__`](FPolygon.md#__container__)

#### Defined in

[packages/2d/src/polygons/FPolygon.ts:31](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FPolygon.ts#L31)

***

### \_\_GRADIENT\_\_?

> `optional` **\_\_GRADIENT\_\_**: [`GradientStep`](../interfaces/GradientStep.md)[]

The gradient of the polygon.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__GRADIENT__`](FPolygon.md#__gradient__)

#### Defined in

[packages/2d/src/polygons/FPolygon.ts:28](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/polygons/FPolygon.ts#L28)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__ID__`](FPolygon.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:208

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FPolygon`](FPolygon.md).[`__IS_2D__`](FPolygon.md#__is_2d__)

#### Defined in

[packages/2d/src/core/FComponent.ts:29](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L29)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

[`FPolygon`](FPolygon.md).[`__IS_3D__`](FPolygon.md#__is_3d__)

#### Defined in

packages/core/dist/index.d.ts:202

***

### collider

> **collider**: [`FCollider`](FCollider.md)

RAPIER Collider

#### Inherited from

[`FPolygon`](FPolygon.md).[`collider`](FPolygon.md#collider)

#### Defined in

[packages/2d/src/core/FComponent.ts:58](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L58)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FPolygon`](FPolygon.md).[`controller`](FPolygon.md#controller)

#### Defined in

[packages/2d/src/core/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L38)

***

### rigidBody

> **rigidBody**: [`FRigidBody`](FRigidBody.md)

RAPIER RigidBody

#### Inherited from

[`FPolygon`](FPolygon.md).[`rigidBody`](FPolygon.md#rigidbody)

#### Defined in

[packages/2d/src/core/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L54)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FPolygon`](FPolygon.md).[`scene`](FPolygon.md#scene)

#### Defined in

[packages/2d/src/core/FComponent.ts:34](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L34)

***

### sensor

> **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FPolygon`](FPolygon.md).[`sensor`](FPolygon.md#sensor)

#### Defined in

[packages/2d/src/core/FComponent.ts:62](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L62)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FPolygon`](FPolygon.md).[`transform`](FPolygon.md#transform)

#### Defined in

[packages/2d/src/core/FComponent.ts:48](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/2d/src/core/FComponent.ts#L48)
