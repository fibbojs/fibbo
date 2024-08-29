[@fibbojs](/api/index) / [2d](/api/2d) / FSprite

# Class: FSprite

## Description

A simple sprite in Fibbo.

## Example

```ts
import { FScene, FSprite } from '@fibbojs/2d'

const scene = new FScene()

const sprite = new FSprite(scene, '/my-texture.png')
scene.addComponent(sprite)
```

## Extends

- [`FComponent`](FComponent.md)

## Accessors

### position

> `get` **position**(): `object`

Setters & getters for transform properties

> `set` **position**(`p`): `void`

#### Parameters

• **p**

• **p.x**: `number`

• **p.y**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Inherited from

[`FComponent`](FComponent.md).[`position`](FComponent.md#position)

#### Defined in

[packages/2d/src/FComponent.ts:328](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L328)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotation`](FComponent.md#rotation)

#### Defined in

[packages/2d/src/FComponent.ts:352](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L352)

***

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationDegree`](FComponent.md#rotationdegree)

#### Defined in

[packages/2d/src/FComponent.ts:360](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L360)

***

### scale

> `get` **scale**(): `object`

> `set` **scale**(`s`): `void`

#### Parameters

• **s**

• **s.x**: `number`

• **s.y**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Inherited from

[`FComponent`](FComponent.md).[`scale`](FComponent.md#scale)

#### Defined in

[packages/2d/src/FComponent.ts:368](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L368)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`scaleX`](FComponent.md#scalex)

#### Defined in

[packages/2d/src/FComponent.ts:376](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L376)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`scaleY`](FComponent.md#scaley)

#### Defined in

[packages/2d/src/FComponent.ts:384](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L384)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`x`](FComponent.md#x)

#### Defined in

[packages/2d/src/FComponent.ts:336](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L336)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`y`](FComponent.md#y)

#### Defined in

[packages/2d/src/FComponent.ts:344](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L344)

## Constructors

### new FSprite()

> **new FSprite**(`scene`, `texture`, `options`?): [`FSprite`](FSprite.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **texture**: `string`

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

#### Returns

[`FSprite`](FSprite.md)

#### Overrides

[`FComponent`](FComponent.md).[`constructor`](FComponent.md#constructors)

#### Defined in

[packages/2d/src/sprite/FSprite.ts:29](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L29)

## Methods

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

[`FComponent`](FComponent.md).[`emitCollisionWith`](FComponent.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:70

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

#### Returns

`void`

#### Description

Emit the onLoaded callbacks.

#### Defined in

[packages/2d/src/sprite/FSprite.ts:94](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L94)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider({
 position: { x: 0, y: 0 },
 scale: { x: 1, y: 1 },
 rotation: 0,
 shape: FShapes.SQUARE
})
```

#### Inherited from

[`FComponent`](FComponent.md).[`initCollider`](FComponent.md#initcollider)

#### Defined in

[packages/2d/src/FComponent.ts:284](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L284)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigid body.

#### Returns

`void`

#### Description

Init a rigid body for the model.

#### Example

```ts
component.initRigidBody({
 position: { x: 0, y: 0 },
 scale: { x: 1, y: 1 },
 rotation: 0,
 shape: FShapes.SQUARE
})
```

#### Inherited from

[`FComponent`](FComponent.md).[`initRigidBody`](FComponent.md#initrigidbody)

#### Defined in

[packages/2d/src/FComponent.ts:257](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L257)

***

### initSensor()

> **initSensor**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

#### Description

Init a sensor for the component.
This is useful for triggerings events when the component collides with other components.

#### Example

```ts
component.initSensor({
 position: { x: 0, y: 0 },
 scale: { x: 1, y: 1 },
 rotation: { x: 0, y: 0 },
 shape: FShapes.SQUARE
})
```

#### Inherited from

[`FComponent`](FComponent.md).[`initSensor`](FComponent.md#initsensor)

#### Defined in

[packages/2d/src/FComponent.ts:308](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L308)

***

### loadTexture()

> **loadTexture**(`texture`): `Promise`\<`void`\>

#### Parameters

• **texture**: `string`

The path to the texture.

#### Returns

`Promise`\<`void`\>

#### Description

Load a texture from a path.

#### Defined in

[packages/2d/src/sprite/FSprite.ts:47](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L47)

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

[`FComponent`](FComponent.md).[`onCollisionWith`](FComponent.md#oncollisionwith)

#### Defined in

[packages/2d/src/FComponent.ts:316](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L316)

***

### onFrame()

> **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Description

Update the component.
Should be called every frame.

#### Overrides

[`FComponent`](FComponent.md).[`onFrame`](FComponent.md#onframe)

#### Defined in

[packages/2d/src/sprite/FSprite.ts:79](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L79)

***

### onLoaded()

> **onLoaded**(`callback`): `void`

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Description

Add a callback to be called when the texture is loaded.

#### Defined in

[packages/2d/src/sprite/FSprite.ts:87](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L87)

***

### setPosition()

> **setPosition**(`options`): `void`

#### Parameters

• **options**

The options for the position.

• **options.x**: `number`

The x position.

• **options.y**: `number`

The y position.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition({ x: 0, y: 0 })
```

#### Inherited from

[`FComponent`](FComponent.md).[`setPosition`](FComponent.md#setposition)

#### Defined in

[packages/2d/src/FComponent.ts:163](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L163)

***

### setRotation()

> **setRotation**(`r`): `void`

#### Parameters

• **r**: `number`

The rotation in radians.

#### Returns

`void`

#### Description

Set the rotation of the component in radians.

#### Example

```ts
component.setRotation(Math.PI / 2)
```

#### Inherited from

[`FComponent`](FComponent.md).[`setRotation`](FComponent.md#setrotation)

#### Defined in

[packages/2d/src/FComponent.ts:212](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L212)

***

### setRotationDegree()

> **setRotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

The rotation in degrees.

#### Returns

`void`

#### Description

Set the rotation of the component in degrees.

#### Example

```ts
component.setRotationDegree(90)
```

#### Inherited from

[`FComponent`](FComponent.md).[`setRotationDegree`](FComponent.md#setrotationdegree)

#### Defined in

[packages/2d/src/FComponent.ts:231](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L231)

***

### setScale()

> **setScale**(`options`): `void`

#### Parameters

• **options**

The options for the scale.

• **options.x**: `number`

The x scale.

• **options.y**: `number`

The y scale.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Example

```ts
component.setScale({ x: 1, y: 1 })
```

#### Inherited from

[`FComponent`](FComponent.md).[`setScale`](FComponent.md#setscale)

#### Defined in

[packages/2d/src/FComponent.ts:184](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L184)

***

### setScaleHeight()

> **setScaleHeight**(`height`): `void`

#### Parameters

• **height**: `number`

The height of the sprite.

#### Returns

`void`

#### Description

Set the scale of the sprite to a specific height.
The width will be calculated according to the aspect ratio of the texture.

#### Defined in

[packages/2d/src/sprite/FSprite.ts:75](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L75)

***

### setScaleWidth()

> **setScaleWidth**(`width`): `void`

#### Parameters

• **width**: `number`

The width of the sprite.

#### Returns

`void`

#### Description

Set the scale of the sprite to a specific width.
The height will be calculated according to the aspect ratio of the texture.

#### Defined in

[packages/2d/src/sprite/FSprite.ts:66](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L66)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_COLLISION__`](FComponent.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the texture is loaded

#### Defined in

[packages/2d/src/sprite/FSprite.ts:27](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L27)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent`](FComponent.md).[`__ID__`](FComponent.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_2D__`](FComponent.md#__is_2d__)

#### Defined in

[packages/2d/src/FComponent.ts:26](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L26)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_3D__`](FComponent.md#__is_3d__)

#### Defined in

packages/core/dist/index.d.ts:11

***

### collider?

> `optional` **collider**: `FCollider`

RAPIER Collider

#### Inherited from

[`FComponent`](FComponent.md).[`collider`](FComponent.md#collider)

#### Defined in

[packages/2d/src/FComponent.ts:51](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L51)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FComponent`](FComponent.md).[`container`](FComponent.md#container)

#### Defined in

[packages/2d/src/FComponent.ts:36](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L36)

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent`](FComponent.md).[`rigidBody`](FComponent.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L47)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FComponent`](FComponent.md).[`scene`](FComponent.md#scene)

#### Defined in

[packages/2d/src/FComponent.ts:31](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L31)

***

### sensor?

> `optional` **sensor**: `FCollider`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FComponent`](FComponent.md).[`sensor`](FComponent.md#sensor)

#### Defined in

[packages/2d/src/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L55)

***

### texture

> **texture**: `Texture`

The texture of the sprite.

#### Defined in

[packages/2d/src/sprite/FSprite.ts:23](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/sprite/FSprite.ts#L23)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FComponent`](FComponent.md).[`transform`](FComponent.md#transform)

#### Defined in

[packages/2d/src/FComponent.ts:41](https://github.com/fibbojs/fibbo/blob/ebbfce6158465f6309c7f36dadb4e328deefcf24/packages/2d/src/FComponent.ts#L41)
