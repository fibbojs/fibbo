[@fibbojs](/api/index) / [2d](/api/2d) / FAttachedCamera

# Class: FAttachedCamera

## Description

A camera attached to a given target.

## Extends

- [`FCamera2d`](FCamera2d.md)

## Constructors

### new FAttachedCamera()

> **new FAttachedCamera**(`scene`, `options`): [`FAttachedCamera`](FAttachedCamera.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

• **options**: `FAttachedCameraOptions`

#### Returns

[`FAttachedCamera`](FAttachedCamera.md)

#### Overrides

[`FCamera2d`](FCamera2d.md).[`constructor`](FCamera2d.md#constructors)

#### Defined in

[packages/2d/src/cameras/FAttachedCamera.ts:20](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FAttachedCamera.ts#L20)

## Methods

### \_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_()

> **\_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_**(): `void`

#### Returns

`void`

#### Overrides

[`FCamera2d`](FCamera2d.md).[`__ON_CAMERA_ADDED_TO_SCENE_PLEASE_DO_NOT_CALL_THIS_BY_HAND__`](FCamera2d.md#__on_camera_added_to_scene_please_do_not_call_this_by_hand__)

#### Defined in

[packages/2d/src/cameras/FAttachedCamera.ts:33](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FAttachedCamera.ts#L33)

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

[`FCamera2d`](FCamera2d.md).[`emitCollisionWith`](FCamera2d.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:65

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

[`FCamera2d`](FCamera2d.md).[`onCollisionWith`](FCamera2d.md#oncollisionwith)

#### Defined in

packages/core/dist/index.d.ts:48

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

[`FCamera2d`](FCamera2d.md).[`onFrame`](FCamera2d.md#onframe)

#### Defined in

[packages/2d/src/cameras/FAttachedCamera.ts:25](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FAttachedCamera.ts#L25)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FCamera2d`](FCamera2d.md).[`__CALLBACKS_ON_COLLISION__`](FCamera2d.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCamera2d`](FCamera2d.md).[`__ID__`](FCamera2d.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:12

***

### position

> **position**: `PointData`

Position of the camera.

#### Inherited from

[`FCamera2d`](FCamera2d.md).[`position`](FCamera2d.md#position)

#### Defined in

[packages/2d/src/cameras/FCamera2d.ts:23](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FCamera2d.ts#L23)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

#### Description

The scene the camera is in.

#### Inherited from

[`FCamera2d`](FCamera2d.md).[`scene`](FCamera2d.md#scene)

#### Defined in

[packages/2d/src/cameras/FCamera2d.ts:17](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FCamera2d.ts#L17)

***

### target

> **target**: [`FComponent2d`](FComponent2d.md)

#### Description

The target to follow.

#### Defined in

[packages/2d/src/cameras/FAttachedCamera.ts:18](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FAttachedCamera.ts#L18)
