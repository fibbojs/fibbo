[@fibbojs](/api/index) / [2d](/api/2d) / FSprite

# Class: FSprite

## Description

A simple sprite in FibboJS.

## Example

```ts
import { FScene2d, FSprite } from '@fibbojs/2d'

const scene = new FScene2d()

const sprite = new FSprite(scene, '/my-texture.png')
scene.addComponent(sprite)
```

## Extends

- [`FComponent2d`](FComponent2d.md)

## Accessors

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rotationDegree`](FComponent2d.md#rotationdegree)

#### Defined in

[packages/2d/src/FComponent2d.ts:362](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L362)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scaleX`](FComponent2d.md#scalex)

#### Defined in

[packages/2d/src/FComponent2d.ts:370](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L370)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scaleY`](FComponent2d.md#scaley)

#### Defined in

[packages/2d/src/FComponent2d.ts:378](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L378)

***

### x

> `get` **x**(): `number`

Setters & getters for transform properties

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`x`](FComponent2d.md#x)

#### Defined in

[packages/2d/src/FComponent2d.ts:346](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L346)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`y`](FComponent2d.md#y)

#### Defined in

[packages/2d/src/FComponent2d.ts:354](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L354)

## Constructors

### new FSprite()

> **new FSprite**(`scene`, `texture`, `options`?): [`FSprite`](FSprite.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

• **texture**: `string`

• **options?**

• **options.position?**: `PointData`

• **options.rotation?**: `number`

• **options.rotationDegree?**: `number`

• **options.scale?**: `PointData`

#### Returns

[`FSprite`](FSprite.md)

#### Overrides

[`FComponent2d`](FComponent2d.md).[`constructor`](FComponent2d.md#constructors)

#### Defined in

[packages/2d/src/sprite/FSprite.ts:28](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L28)

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

[`FComponent2d`](FComponent2d.md).[`emitCollisionWith`](FComponent2d.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:65

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

#### Returns

`void`

#### Description

Emit the onLoaded callbacks.

#### Defined in

[packages/2d/src/sprite/FSprite.ts:98](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L98)

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**

The options for the collider.

• **options.position?**: `PointData`

The position of the collider.

• **options.rotation?**: `number`

The rotation of the collider.

• **options.scale?**: `PointData`

The scale of the collider.

• **options.shape?**: [`F2dShapes`](../enumerations/F2dShapes.md)

The shape of the collider.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider({
 position: new PIXI.Point(0, 0),
 scale: new PIXI.Point(1, 1),
 rotation: 0,
 shape: F2dShapes.SQUARE
})
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`initCollider`](FComponent2d.md#initcollider)

#### Defined in

[packages/2d/src/FComponent2d.ts:302](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L302)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**

The options for the rigid body.

• **options.enabledTranslations?**

Enable only specific translations of the rigid body.

• **options.enabledTranslations.enableX?**: `boolean`

• **options.enabledTranslations.enableY?**: `boolean`

• **options.lockRotations?**: `boolean`

Lock the rotations of the rigid body.

• **options.lockTranslations?**: `boolean`

Lock the translations of the rigid body.

• **options.position?**: `PointData`

The position of the rigid body.

• **options.rotation?**: `number`

The rotation of the rigid body.

• **options.scale?**: `PointData`

The scale of the rigid body.

• **options.shape?**: [`F2dShapes`](../enumerations/F2dShapes.md)

The shape of the rigid body.

#### Returns

`void`

#### Description

Init a rigid body for the model.

#### Example

```ts
component.initRigidBody({
 position: new PIXI.Point(0, 0),
 scale: new PIXI.Point(1, 1),
 rotation: 0,
 shape: F2dShapes.SQUARE
})
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`initRigidBody`](FComponent2d.md#initrigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:228](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L228)

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

[packages/2d/src/sprite/FSprite.ts:51](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L51)

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

[`FComponent2d`](FComponent2d.md).[`onCollisionWith`](FComponent2d.md#oncollisionwith)

#### Defined in

[packages/2d/src/FComponent2d.ts:334](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L334)

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

[`FComponent2d`](FComponent2d.md).[`onFrame`](FComponent2d.md#onframe)

#### Defined in

[packages/2d/src/sprite/FSprite.ts:83](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L83)

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

[packages/2d/src/sprite/FSprite.ts:91](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L91)

***

### setPosition()

> **setPosition**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

The x position.

• **y**: `number`

The y position.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition(0, 0)
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setPosition`](FComponent2d.md#setposition)

#### Defined in

[packages/2d/src/FComponent2d.ts:135](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L135)

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

[`FComponent2d`](FComponent2d.md).[`setRotation`](FComponent2d.md#setrotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:183](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L183)

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

[`FComponent2d`](FComponent2d.md).[`setRotationDegree`](FComponent2d.md#setrotationdegree)

#### Defined in

[packages/2d/src/FComponent2d.ts:202](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L202)

***

### setScale()

> **setScale**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

The x scale.

• **y**: `number`

The y scale.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Example

```ts
component.setScale(1, 1)
```

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setScale`](FComponent2d.md#setscale)

#### Defined in

[packages/2d/src/FComponent2d.ts:155](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L155)

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

[packages/2d/src/sprite/FSprite.ts:79](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L79)

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

[packages/2d/src/sprite/FSprite.ts:70](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L70)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`__CALLBACKS_ON_COLLISION__`](FComponent2d.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the texture is loaded

#### Defined in

[packages/2d/src/sprite/FSprite.ts:26](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L26)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`__ID__`](FComponent2d.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:12

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`collider`](FComponent2d.md#collider)

#### Defined in

[packages/2d/src/FComponent2d.ts:46](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L46)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`container`](FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L22)

***

### position

> **position**: `PointData`

Position of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`position`](FComponent2d.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:28](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L28)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rigidBody`](FComponent2d.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:42](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L42)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rotation`](FComponent2d.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:36](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L36)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scale`](FComponent2d.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:32](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L32)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scene`](FComponent2d.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:17](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/FComponent2d.ts#L17)

***

### texture

> **texture**: `Texture`

The texture of the sprite.

#### Defined in

[packages/2d/src/sprite/FSprite.ts:22](https://github.com/fibbojs/fibbo/blob/0adbc560caeec29b0e6104421f527824bddd8320/packages/2d/src/sprite/FSprite.ts#L22)
