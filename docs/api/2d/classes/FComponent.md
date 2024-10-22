[@fibbojs](/api/index) / [2d](/api/2d) / FComponent

# Class: `abstract` FComponent

The base class for all 2D components in Fibbo.

## Extends

- `FComponent`

## Extended by

- [`FComponentEmpty`](FComponentEmpty.md)
- [`FPolygon`](FPolygon.md)
- [`FSprite`](FSprite.md)

## Constructors

### new FComponent()

> **new FComponent**(`scene`, `options`?): [`FComponent`](FComponent.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

The 2D scene where the component will be added.

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

The options for the component.

#### Returns

[`FComponent`](FComponent.md)

#### Overrides

`FComponentCore.constructor`

#### Defined in

[2d/src/core/FComponent.ts:73](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L73)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**: [`FVector2`](../interfaces/FVector2.md)

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:221](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L221)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

#### Parameters

• **rotation**: `number`

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:228](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L228)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

#### Parameters

• **scale**: [`FVector2`](../interfaces/FVector2.md)

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:235](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L235)

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

#### Defined in

[2d/src/core/FComponent.ts:113](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L113)

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

#### Defined in

[2d/src/core/FComponent.ts:153](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L153)

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

#### Defined in

[2d/src/core/FComponent.ts:187](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L187)

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

`FComponentCore.emitCollisionWith`

#### Defined in

core/dist/index.d.ts:293

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

`FComponentCore.emitOnLoaded`

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

#### Overrides

`FComponentCore.frame`

#### Defined in

[2d/src/core/FComponent.ts:103](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L103)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:253](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L253)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:259](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L259)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:265](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L265)

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

#### Overrides

`FComponentCore.onCollisionWith`

#### Defined in

[2d/src/core/FComponent.ts:243](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L243)

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

`FComponentCore.onFrame`

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

`FComponentCore.onLoaded`

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

`FComponentCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

core/dist/index.d.ts:216

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

`FComponentCore.__CALLBACKS_ON_FRAME__`

#### Defined in

core/dist/index.d.ts:207

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

`FComponentCore.__CALLBACKS_ON_LOADED__`

#### Defined in

core/dist/index.d.ts:211

***

### \_\_CONTAINER\_\_

> **\_\_CONTAINER\_\_**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[2d/src/core/FComponent.ts:44](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L44)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

core/dist/index.d.ts:203

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_2D__`

#### Defined in

[2d/src/core/FComponent.ts:30](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L30)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FComponentCore.__IS_3D__`

#### Defined in

core/dist/index.d.ts:197

***

### collider

> **collider**: [`FCollider`](FCollider.md)

RAPIER Collider

#### Defined in

[2d/src/core/FComponent.ts:59](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L59)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Overrides

`FComponentCore.controller`

#### Defined in

[2d/src/core/FComponent.ts:39](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L39)

***

### rigidBody

> **rigidBody**: [`FRigidBody`](FRigidBody.md)

RAPIER RigidBody

#### Defined in

[2d/src/core/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L55)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Overrides

`FComponentCore.scene`

#### Defined in

[2d/src/core/FComponent.ts:35](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L35)

***

### sensor

> **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[2d/src/core/FComponent.ts:63](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L63)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Defined in

[2d/src/core/FComponent.ts:49](https://github.com/fibbojs/fibbo/blob/31a9adc82b7f9e94d4aaa254912cda4482699c0d/packages/2d/src/core/FComponent.ts#L49)
