[@fibbojs](/api/index) / [2d](/api/2d) / FFreeCamera

# Class: FFreeCamera

A free camera that can be moved around.

## Extends

- [`FCamera`](FCamera.md)

## Constructors

### new FFreeCamera()

> **new FFreeCamera**(`options`?): [`FFreeCamera`](FFreeCamera.md)

#### Parameters

• **options?**: [`FCameraOptions`](../interfaces/FCameraOptions.md)

#### Returns

[`FFreeCamera`](FFreeCamera.md)

#### Overrides

[`FCamera`](FCamera.md).[`constructor`](FCamera.md#constructors)

#### Defined in

[2d/src/cameras/FFreeCamera.ts:9](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FFreeCamera.ts#L9)

## Methods

### \_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_()

> **\_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_**(): `void`

#### Returns

`void`

#### Overrides

[`FCamera`](FCamera.md).[`__ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__`](FCamera.md#__on_camera_added_to_scene_please_do_not_call_this_by_hand__)

#### Defined in

[2d/src/cameras/FFreeCamera.ts:13](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FFreeCamera.ts#L13)

***

### \_\_SET\_POSITION\_\_()

> **\_\_SET\_POSITION\_\_**(`position`): `void`

#### Parameters

• **position**

• **position.x**: `number`

• **position.y**: `number`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`__SET_POSITION__`](FCamera.md#__set_position__)

#### Defined in

[2d/src/cameras/FCamera.ts:80](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FCamera.ts#L80)

***

### \_\_UPDATE\_POSITION\_\_()

> **\_\_UPDATE\_POSITION\_\_**(): `void`

Update the position of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`__UPDATE_POSITION__`](FCamera.md#__update_position__)

#### Defined in

[2d/src/cameras/FCamera.ts:59](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FCamera.ts#L59)

***

### \_\_UPDATE\_ROTATION\_\_()

> **\_\_UPDATE\_ROTATION\_\_**(): `void`

Update the rotation of the camera according to the transform.
This method should be called after updating the transform properties.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`__UPDATE_ROTATION__`](FCamera.md#__update_rotation__)

#### Defined in

[2d/src/cameras/FCamera.ts:67](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FCamera.ts#L67)

***

### \_\_UPDATE\_SCALE\_\_()

> **\_\_UPDATE\_SCALE\_\_**(): `void`

Update the scale of the camera according to the transform.
This method should be called after updating the transform properties.
This method does not make sense for cameras, but it is implemented for consistency.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`__UPDATE_SCALE__`](FCamera.md#__update_scale__)

#### Defined in

[2d/src/cameras/FCamera.ts:76](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FCamera.ts#L76)

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

[`FCamera`](FCamera.md).[`addController`](FCamera.md#addcontroller)

#### Defined in

core/dist/index.d.ts:415

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

[`FCamera`](FCamera.md).[`emitCollisionWith`](FCamera.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:486

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`emitOnLoaded`](FCamera.md#emitonloaded)

#### Defined in

core/dist/index.d.ts:440

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

[`FCamera`](FCamera.md).[`frame`](FCamera.md#frame)

#### Defined in

core/dist/index.d.ts:426

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

[`FCamera`](FCamera.md).[`onCollisionWith`](FCamera.md#oncollisionwith)

#### Defined in

core/dist/index.d.ts:463

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

[`FCamera`](FCamera.md).[`onFrame`](FCamera.md#onframe)

#### Defined in

core/dist/index.d.ts:431

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

[`FCamera`](FCamera.md).[`onLoaded`](FCamera.md#onloaded)

#### Defined in

core/dist/index.d.ts:436

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

[`FCamera`](FCamera.md).[`removeController`](FCamera.md#removecontroller)

#### Defined in

core/dist/index.d.ts:420

***

### setZoom()

> **setZoom**(`zoom`): `void`

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setZoom`](FCamera.md#setzoom)

#### Defined in

[2d/src/cameras/FCamera.ts:51](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FCamera.ts#L51)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_COLLISION__`](FCamera.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:399

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[]

Callbacks for when a frame is rendered.

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_FRAME__`](FCamera.md#__callbacks_on_frame__)

#### Defined in

core/dist/index.d.ts:390

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[]

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_LOADED__`](FCamera.md#__callbacks_on_loaded__)

#### Defined in

core/dist/index.d.ts:394

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCamera`](FCamera.md).[`__ID__`](FCamera.md#__id__)

#### Defined in

core/dist/index.d.ts:386

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_2D__`](FCamera.md#__is_2d__)

#### Defined in

[2d/src/cameras/FCamera.ts:19](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FCamera.ts#L19)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_3D__`](FCamera.md#__is_3d__)

#### Defined in

core/dist/index.d.ts:380

***

### controllers

> **controllers**: `FController`[]

The controllers attached to the component.

#### Inherited from

[`FCamera`](FCamera.md).[`controllers`](FCamera.md#controllers)

#### Defined in

core/dist/index.d.ts:409

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the component is attached to.

#### Inherited from

[`FCamera`](FCamera.md).[`scene`](FCamera.md#scene)

#### Defined in

[2d/src/cameras/FCamera.ts:21](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FCamera.ts#L21)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transform of the camera.
It is used to store the position of the camera.
The scale and rotation of the transform are not used.

#### Inherited from

[`FCamera`](FCamera.md).[`transform`](FCamera.md#transform)

#### Defined in

[2d/src/cameras/FCamera.ts:28](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/2d/src/cameras/FCamera.ts#L28)
