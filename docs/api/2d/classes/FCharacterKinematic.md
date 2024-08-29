[@fibbojs](/api/index) / [2d](/api/2d) / FCharacterKinematic

# Class: `abstract` FCharacterKinematic

## Description

An abstract pre-defined character controller based on Kinematic rigidbodies.

## Extends

- [`FCharacter`](FCharacter.md)

## Extended by

- [`FCharacterKP`](FCharacterKP.md)
- [`FCharacterKV`](FCharacterKV.md)

## Accessors

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`rotationDegree`](FCharacter.md#rotationdegree)

#### Defined in

[packages/2d/src/FComponent.ts:344](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L344)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`scaleX`](FCharacter.md#scalex)

#### Defined in

[packages/2d/src/FComponent.ts:352](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L352)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`scaleY`](FCharacter.md#scaley)

#### Defined in

[packages/2d/src/FComponent.ts:360](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L360)

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

[`FCharacter`](FCharacter.md).[`x`](FCharacter.md#x)

#### Defined in

[packages/2d/src/FComponent.ts:328](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L328)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`y`](FCharacter.md#y)

#### Defined in

[packages/2d/src/FComponent.ts:336](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L336)

## Constructors

### new FCharacterKinematic()

> **new FCharacterKinematic**(`scene`, `options`?): [`FCharacterKinematic`](FCharacterKinematic.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FCharacterOptions`](../interfaces/FCharacterOptions.md)

#### Returns

[`FCharacterKinematic`](FCharacterKinematic.md)

#### Overrides

[`FCharacter`](FCharacter.md).[`constructor`](FCharacter.md#constructors)

#### Defined in

[packages/2d/src/character/FCharacterKinematic.ts:25](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacterKinematic.ts#L25)

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

[`FCharacter`](FCharacter.md).[`emitCollisionWith`](FCharacter.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:70

***

### getCorrectedMovements()

> **getCorrectedMovements**(`delta`): `object`

Return the corrected movements for the current frame.

#### Parameters

• **delta**: `number`

The time elapsed since the last frame.

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Defined in

[packages/2d/src/character/FCharacterKinematic.ts:48](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacterKinematic.ts#L48)

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

#### Overrides

[`FCharacter`](FCharacter.md).[`initCollider`](FCharacter.md#initcollider)

#### Defined in

[packages/2d/src/character/FCharacterKinematic.ts:85](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacterKinematic.ts#L85)

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

#### Overrides

[`FCharacter`](FCharacter.md).[`initRigidBody`](FCharacter.md#initrigidbody)

#### Defined in

[packages/2d/src/character/FCharacterKinematic.ts:78](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacterKinematic.ts#L78)

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

[`FCharacter`](FCharacter.md).[`initSensor`](FCharacter.md#initsensor)

#### Defined in

[packages/2d/src/character/FCharacter.ts:136](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacter.ts#L136)

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

[`FCharacter`](FCharacter.md).[`onCollisionWith`](FCharacter.md#oncollisionwith)

#### Defined in

[packages/2d/src/FComponent.ts:316](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L316)

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

#### Inherited from

[`FCharacter`](FCharacter.md).[`onFrame`](FCharacter.md#onframe)

#### Defined in

[packages/2d/src/FComponent.ts:98](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L98)

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

[`FCharacter`](FCharacter.md).[`setPosition`](FCharacter.md#setposition)

#### Defined in

[packages/2d/src/FComponent.ts:163](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L163)

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

[`FCharacter`](FCharacter.md).[`setRotation`](FCharacter.md#setrotation)

#### Defined in

[packages/2d/src/FComponent.ts:212](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L212)

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

[`FCharacter`](FCharacter.md).[`setRotationDegree`](FCharacter.md#setrotationdegree)

#### Defined in

[packages/2d/src/FComponent.ts:231](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L231)

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

[`FCharacter`](FCharacter.md).[`setScale`](FCharacter.md#setscale)

#### Defined in

[packages/2d/src/FComponent.ts:184](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L184)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FCharacter`](FCharacter.md).[`__CALLBACKS_ON_COLLISION__`](FCharacter.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCharacter`](FCharacter.md).[`__ID__`](FCharacter.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FCharacter`](FCharacter.md).[`__IS_2D__`](FCharacter.md#__is_2d__)

#### Defined in

[packages/2d/src/FComponent.ts:26](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L26)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

[`FCharacter`](FCharacter.md).[`__IS_3D__`](FCharacter.md#__is_3d__)

#### Defined in

packages/core/dist/index.d.ts:11

***

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Defined in

[packages/2d/src/character/FCharacterKinematic.ts:23](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacterKinematic.ts#L23)

***

### collider?

> `optional` **collider**: `FCollider`

RAPIER Collider

#### Inherited from

[`FCharacter`](FCharacter.md).[`collider`](FCharacter.md#collider)

#### Defined in

[packages/2d/src/FComponent.ts:51](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L51)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FCharacter`](FCharacter.md).[`container`](FCharacter.md#container)

#### Defined in

[packages/2d/src/FComponent.ts:36](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L36)

***

### inputs

> **inputs**: `object`

The inputs that will be used to move the character.

#### down

> **down**: `boolean`

#### left

> **left**: `boolean`

#### right

> **right**: `boolean`

#### up

> **up**: `boolean`

#### Inherited from

[`FCharacter`](FCharacter.md).[`inputs`](FCharacter.md#inputs)

#### Defined in

[packages/2d/src/character/FCharacter.ts:25](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacter.ts#L25)

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RAPIER RigidBody

#### Inherited from

[`FCharacter`](FCharacter.md).[`rigidBody`](FCharacter.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L47)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FCharacter`](FCharacter.md).[`scene`](FCharacter.md#scene)

#### Defined in

[packages/2d/src/FComponent.ts:31](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L31)

***

### sensor?

> `optional` **sensor**: `FCollider`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FCharacter`](FCharacter.md).[`sensor`](FCharacter.md#sensor)

#### Defined in

[packages/2d/src/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L55)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacter`](FCharacter.md).[`speed`](FCharacter.md#speed)

#### Defined in

[packages/2d/src/character/FCharacter.ts:35](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacter.ts#L35)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FCharacter`](FCharacter.md).[`transform`](FCharacter.md#transform)

#### Defined in

[packages/2d/src/FComponent.ts:41](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/FComponent.ts#L41)

***

### yVelocity

> **yVelocity**: `number`

The y velocity of the character. Used to simulate gravity.

#### Defined in

[packages/2d/src/character/FCharacterKinematic.ts:18](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/2d/src/character/FCharacterKinematic.ts#L18)
