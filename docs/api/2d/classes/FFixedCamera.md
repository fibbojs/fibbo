[@fibbojs](/api/index) / [2d](/api/2d) / FFixedCamera

# Class: FFixedCamera

## Description

A fixed camera.

## Extends

- [`FCamera`](FCamera.md)

## Constructors

### new FFixedCamera()

> **new FFixedCamera**(`scene`, `options`?): [`FFixedCamera`](FFixedCamera.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FCameraOptions`](../interfaces/FCameraOptions.md)

#### Returns

[`FFixedCamera`](FFixedCamera.md)

#### Overrides

[`FCamera`](FCamera.md).[`constructor`](FCamera.md#constructors)

#### Defined in

[packages/2d/src/cameras/FFixedCamera.ts:10](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/2d/src/cameras/FFixedCamera.ts#L10)

## Methods

### \_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_()

> **\_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_**(): `void`

#### Returns

`void`

#### Overrides

[`FCamera`](FCamera.md).[`__ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__`](FCamera.md#__on_camera_added_to_scene_please_do_not_call_this_by_hand__)

#### Defined in

[packages/2d/src/cameras/FFixedCamera.ts:17](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/2d/src/cameras/FFixedCamera.ts#L17)

***

### emitCollisionWith()

> **emitCollisionWith**(`classOrObject`): `void`

#### Parameters

• **classOrObject**: `any`

The class or object to emit the collision event with.

#### Returns

`void`

#### Description

Emit a collision event with a given class.

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith(Enemy)
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith(enemy)
```

#### Inherited from

[`FCamera`](FCamera.md).[`emitCollisionWith`](FCamera.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:70

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): `void`

#### Parameters

• **classOrObject**: `any`

The class or object to add the callback to.

• **callback**

The callback to add.

#### Returns

`void`

#### Description

Add a callback to be called when a collision occurs.

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

packages/core/dist/index.d.ts:53

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the component.
Should be called every frame.

#### Overrides

[`FCamera`](FCamera.md).[`onFrame`](FCamera.md#onframe)

#### Defined in

[packages/2d/src/cameras/FFixedCamera.ts:14](https://github.com/fibbojs/fibbo/blob/e2f94db3c5f5c8ad9defb691b298d5af8c1622f6/packages/2d/src/cameras/FFixedCamera.ts#L14)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FCamera`](FCamera.md).[`__CALLBACKS_ON_COLLISION__`](FCamera.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCamera`](FCamera.md).[`__ID__`](FCamera.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_2D__`](FCamera.md#__is_2d__)

#### Defined in

packages/2d/src/cameras/FCamera.ts:17

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

[`FCamera`](FCamera.md).[`__IS_3D__`](FCamera.md#__is_3d__)

#### Defined in

packages/core/dist/index.d.ts:11

***

### position

> **position**: `PointData`

Position of the camera.

#### Inherited from

[`FCamera`](FCamera.md).[`position`](FCamera.md#position)

#### Defined in

packages/2d/src/cameras/FCamera.ts:28

***

### scene

> **scene**: [`FScene`](FScene.md)

#### Description

The scene the camera is in.

#### Inherited from

[`FCamera`](FCamera.md).[`scene`](FCamera.md#scene)

#### Defined in

packages/2d/src/cameras/FCamera.ts:22
