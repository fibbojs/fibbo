[@fibbojs](/api/index) / [2d](/api/2d) / FCamera

# Class: `abstract` FCamera

## Description

The base class for 2D cameras in FibboJS.

## Extends

- `FCamera`

## Extended by

- [`FAttachedCamera`](FAttachedCamera.md)
- [`FFixedCamera`](FFixedCamera.md)
- [`FFreeCamera`](FFreeCamera.md)

## Constructors

### new FCamera()

> **new FCamera**(`scene`, `options`?): [`FCamera`](FCamera.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

The scene the camera is in.

• **options?**: [`FCameraOptions`](../interfaces/FCameraOptions.md)

The options for the camera.

#### Returns

[`FCamera`](FCamera.md)

#### Description

Create a new 2D camera.

#### Overrides

`FCameraCore.constructor`

#### Defined in

packages/2d/src/cameras/FCamera.ts:35

## Methods

### \_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_()

> `abstract` **\_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_**(): `void`

#### Returns

`void`

#### Defined in

packages/2d/src/cameras/FCamera.ts:56

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

`FCameraCore.emitCollisionWith`

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

`FCameraCore.onCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:53

***

### onFrame()

> `abstract` **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the component.
Should be called every frame.

#### Overrides

`FCameraCore.onFrame`

#### Defined in

packages/2d/src/cameras/FCamera.ts:54

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FCameraCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FCameraCore.__ID__`

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FCameraCore.__IS_2D__`

#### Defined in

packages/2d/src/cameras/FCamera.ts:17

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

`FCameraCore.__IS_3D__`

#### Defined in

packages/core/dist/index.d.ts:11

***

### position

> **position**: `PointData`

Position of the camera.

#### Defined in

packages/2d/src/cameras/FCamera.ts:28

***

### scene

> **scene**: [`FScene`](FScene.md)

#### Description

The scene the camera is in.

#### Defined in

packages/2d/src/cameras/FCamera.ts:22
