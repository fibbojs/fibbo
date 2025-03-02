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

[2d/src/core/FComponent.ts:72](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L72)

## Methods

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**: `FVector2`

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:254](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L254)

***

### \_\_SET\_ROTATION\_\_()

> **\_\_SET\_ROTATION\_\_**(`rotation`): `void`

#### Parameters

• **rotation**: `number`

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:261](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L261)

***

### \_\_SET\_SCALE\_\_()

> **\_\_SET\_SCALE\_\_**(`scale`): `void`

#### Parameters

• **scale**: `FVector2`

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:268](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L268)

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

[2d/src/core/FComponent.ts:146](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L146)

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

[2d/src/core/FComponent.ts:186](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L186)

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

[2d/src/core/FComponent.ts:220](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L220)

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

`FComponentCore.addController`

#### Defined in

core/dist/index.d.ts:413

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

core/dist/index.d.ts:484

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

`FComponentCore.emitOnLoaded`

#### Defined in

core/dist/index.d.ts:438

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

#### Overrides

`FComponentCore.frame`

#### Defined in

[2d/src/core/FComponent.ts:102](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L102)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:286](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L286)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:292](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L292)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:298](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L298)

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

[2d/src/core/FComponent.ts:276](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L276)

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

`FComponentCore.onLoaded`

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

`FComponentCore.removeController`

#### Defined in

core/dist/index.d.ts:418

***

### render()

> **render**(`delta`): `void`

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Defined in

[2d/src/core/FComponent.ts:106](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L106)

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

core/dist/index.d.ts:397

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

`FComponentCore.__CALLBACKS_ON_FRAME__`

#### Defined in

core/dist/index.d.ts:388

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

`FComponentCore.__CALLBACKS_ON_LOADED__`

#### Defined in

core/dist/index.d.ts:392

***

### \_\_CONTAINER\_\_

> **\_\_CONTAINER\_\_**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[2d/src/core/FComponent.ts:43](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L43)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

core/dist/index.d.ts:384

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_2D__`

#### Defined in

[2d/src/core/FComponent.ts:29](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L29)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FComponentCore.__IS_3D__`

#### Defined in

core/dist/index.d.ts:378

***

### collider

> **collider**: [`FCollider`](FCollider.md)

RAPIER Collider

#### Defined in

[2d/src/core/FComponent.ts:58](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L58)

***

### controllers

> **controllers**: [`FController`](FController.md)[]

The controllers attached to the component.

#### Overrides

`FComponentCore.controllers`

#### Defined in

[2d/src/core/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L38)

***

### rigidBody

> **rigidBody**: [`FRigidBody`](FRigidBody.md)

RAPIER RigidBody

#### Defined in

[2d/src/core/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L54)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Overrides

`FComponentCore.scene`

#### Defined in

[2d/src/core/FComponent.ts:34](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L34)

***

### sensor

> **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[2d/src/core/FComponent.ts:62](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L62)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Defined in

[2d/src/core/FComponent.ts:48](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/2d/src/core/FComponent.ts#L48)
