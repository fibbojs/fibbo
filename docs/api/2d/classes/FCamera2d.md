[@fibbojs](/api/index) / [2d](/api/2d) / FCamera2d

# Class: `abstract` FCamera2d

## Description

The base class for 2D cameras in FibboJS.

## Extends

- `FCamera`

## Extended by

- [`FAttachedCamera`](FAttachedCamera.md)
- [`FFixedCamera`](FFixedCamera.md)
- [`FFreeCamera`](FFreeCamera.md)

## Constructors

### new FCamera2d()

> **new FCamera2d**(`scene`, `options`?): [`FCamera2d`](FCamera2d.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

The scene the camera is in.

• **options?**: [`FCamera2dOptions`](../interfaces/FCamera2dOptions.md)

The options for the camera.

#### Returns

[`FCamera2d`](FCamera2d.md)

#### Description

Create a new 2D camera.

#### Overrides

`FCamera.constructor`

#### Defined in

[packages/2d/src/cameras/FCamera2d.ts:30](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FCamera2d.ts#L30)

## Methods

### \_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_()

> `abstract` **\_\_ON\_CAMERA\_ADDED\_TO\_SCENE\_PLEASE\_DO\_NOT\_CALL\_THIS\_BY\_HAND\_\_**(): `void`

#### Returns

`void`

#### Defined in

[packages/2d/src/cameras/FCamera2d.ts:51](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FCamera2d.ts#L51)

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

`FCamera.emitCollisionWith`

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

`FCamera.onCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:48

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

`FCamera.onFrame`

#### Defined in

[packages/2d/src/cameras/FCamera2d.ts:49](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FCamera2d.ts#L49)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FCamera.__CALLBACKS_ON_COLLISION__`

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FCamera.__ID__`

#### Defined in

packages/core/dist/index.d.ts:12

***

### position

> **position**: `PointData`

Position of the camera.

#### Defined in

[packages/2d/src/cameras/FCamera2d.ts:23](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FCamera2d.ts#L23)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

#### Description

The scene the camera is in.

#### Defined in

[packages/2d/src/cameras/FCamera2d.ts:17](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/cameras/FCamera2d.ts#L17)
