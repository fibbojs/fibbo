[@fibbojs](/api/index) / [2d](/api/2d) / FAttachedCamera

# Class: FAttachedCamera

A camera attached to a given target.

## Extends

- [`FCamera`](FCamera.md)

## Constructors

### new FAttachedCamera()

> **new FAttachedCamera**(`scene`, `options`): [`FAttachedCamera`](FAttachedCamera.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options**: [`FAttachedCameraOptions`](../interfaces/FAttachedCameraOptions.md)

#### Returns

[`FAttachedCamera`](FAttachedCamera.md)

#### Overrides

[`FCamera`](FCamera.md).[`constructor`](FCamera.md#constructors)

#### Defined in

[2d/src/cameras/FAttachedCamera.ts:20](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/cameras/FAttachedCamera.ts#L20)

## Methods

### \_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_()

> **\_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_**(): `void`

#### Returns

`void`

#### Overrides

[`FCamera`](FCamera.md).[`__ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__`](FCamera.md#__on_camera_added_to_scene_please_do_not_call_this_by_hand__)

#### Defined in

[2d/src/cameras/FAttachedCamera.ts:33](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/cameras/FAttachedCamera.ts#L33)

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

core/dist/index.d.ts:116

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

core/dist/index.d.ts:93

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

#### Overrides

[`FCamera`](FCamera.md).[`onFrame`](FCamera.md#onframe)

#### Defined in

[2d/src/cameras/FAttachedCamera.ts:25](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/cameras/FAttachedCamera.ts#L25)

***

### setZoom()

> **setZoom**(`zoom`): `void`

Set the zoom of the camera.

#### Parameters

• **zoom**: `number`

#### Returns

`void`

#### Inherited from

[`FCamera`](FCamera.md).[`setZoom`](FCamera.md#setzoom)

#### Defined in

[2d/src/cameras/FCamera.ts:57](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/cameras/FCamera.ts#L57)

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

core/dist/index.d.ts:56

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCamera`](FCamera.md).[`__ID__`](FCamera.md#__id__)

#### Defined in

core/dist/index.d.ts:51

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_2D__`](FCamera.md#__is_2d__)

#### Defined in

[2d/src/cameras/FCamera.ts:16](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/cameras/FCamera.ts#L16)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_3D__`](FCamera.md#__is_3d__)

#### Defined in

core/dist/index.d.ts:45

***

### controller?

> `optional` **controller**: `FController`

The controller attached to the component.

#### Inherited from

[`FCamera`](FCamera.md).[`controller`](FCamera.md#controller)

#### Defined in

core/dist/index.d.ts:62

***

### position

> **position**: `object`

Position of the camera.

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Inherited from

[`FCamera`](FCamera.md).[`position`](FCamera.md#position)

#### Defined in

[2d/src/cameras/FCamera.ts:27](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/cameras/FCamera.ts#L27)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the camera is in.

#### Inherited from

[`FCamera`](FCamera.md).[`scene`](FCamera.md#scene)

#### Defined in

[2d/src/cameras/FCamera.ts:21](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/cameras/FCamera.ts#L21)

***

### target

> **target**: [`FComponent`](FComponent.md)

The target to follow.

#### Defined in

[2d/src/cameras/FAttachedCamera.ts:18](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/2d/src/cameras/FAttachedCamera.ts#L18)
