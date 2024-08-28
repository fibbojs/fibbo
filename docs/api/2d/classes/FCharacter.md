[@fibbojs](/api/index) / [2d](/api/2d) / FCharacter

# Class: `abstract` FCharacter

## Description

An abstract pre-defined character controller.

## Extends

- [`FComponent`](FComponent.md)

## Extended by

- [`FCharacterDynamic`](FCharacterDynamic.md)
- [`FCharacterKinematic`](FCharacterKinematic.md)

## Accessors

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

packages/2d/src/FComponent.ts:375

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

packages/2d/src/FComponent.ts:383

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

packages/2d/src/FComponent.ts:391

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

[`FComponent`](FComponent.md).[`x`](FComponent.md#x)

#### Defined in

packages/2d/src/FComponent.ts:359

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

packages/2d/src/FComponent.ts:367

## Constructors

### new FCharacter()

> **new FCharacter**(`scene`, `options`?): [`FCharacter`](FCharacter.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FCharacterOptions`](../interfaces/FCharacterOptions.md)

#### Returns

[`FCharacter`](FCharacter.md)

#### Overrides

[`FComponent`](FComponent.md).[`constructor`](FComponent.md#constructors)

#### Defined in

packages/2d/src/character/FCharacter.ts:35

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

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FComponentOptions__initCollider`](../interfaces/FComponentOptions__initCollider.md)

The options for the collider.

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
 shape: FShapes.SQUARE
})
```

#### Overrides

[`FComponent`](FComponent.md).[`initCollider`](FComponent.md#initcollider)

#### Defined in

packages/2d/src/character/FCharacter.ts:108

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FComponentOptions__initRigidBody`](../interfaces/FComponentOptions__initRigidBody.md)

The options for the rigid body.

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
 shape: FShapes.SQUARE
})
```

#### Overrides

[`FComponent`](FComponent.md).[`initRigidBody`](FComponent.md#initrigidbody)

#### Defined in

packages/2d/src/character/FCharacter.ts:101

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

packages/2d/src/FComponent.ts:347

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

[`FComponent`](FComponent.md).[`onFrame`](FComponent.md#onframe)

#### Defined in

packages/2d/src/FComponent.ts:119

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

[`FComponent`](FComponent.md).[`setPosition`](FComponent.md#setposition)

#### Defined in

packages/2d/src/FComponent.ts:163

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

packages/2d/src/FComponent.ts:211

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

packages/2d/src/FComponent.ts:230

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

[`FComponent`](FComponent.md).[`setScale`](FComponent.md#setscale)

#### Defined in

packages/2d/src/FComponent.ts:183

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

packages/2d/src/FComponent.ts:45

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

> `optional` **collider**: `Collider`

RAPIER Collider

#### Inherited from

[`FComponent`](FComponent.md).[`collider`](FComponent.md#collider)

#### Defined in

packages/2d/src/FComponent.ts:79

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FComponent`](FComponent.md).[`container`](FComponent.md#container)

#### Defined in

packages/2d/src/FComponent.ts:55

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

#### Defined in

packages/2d/src/character/FCharacter.ts:23

***

### position

> **position**: `PointData`

Position of the component.

#### Inherited from

[`FComponent`](FComponent.md).[`position`](FComponent.md#position)

#### Defined in

packages/2d/src/FComponent.ts:61

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent`](FComponent.md).[`rigidBody`](FComponent.md#rigidbody)

#### Defined in

packages/2d/src/FComponent.ts:75

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Inherited from

[`FComponent`](FComponent.md).[`rotation`](FComponent.md#rotation)

#### Defined in

packages/2d/src/FComponent.ts:69

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Inherited from

[`FComponent`](FComponent.md).[`scale`](FComponent.md#scale)

#### Defined in

packages/2d/src/FComponent.ts:65

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FComponent`](FComponent.md).[`scene`](FComponent.md#scene)

#### Defined in

packages/2d/src/FComponent.ts:50

***

### speed

> **speed**: `number`

The speed of the character.

#### Defined in

packages/2d/src/character/FCharacter.ts:33
