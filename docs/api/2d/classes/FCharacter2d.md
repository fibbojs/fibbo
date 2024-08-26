[@fibbojs](/api/index) / [2d](/api/2d) / FCharacter2d

# Class: `abstract` FCharacter2d

## Description

An abstract pre-defined character controller.

## Extends

- [`FComponent2d`](FComponent2d.md)

## Extended by

- [`FCharacter2dDynamic`](FCharacter2dDynamic.md)
- [`FCharacter2dKinematic`](FCharacter2dKinematic.md)

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

[packages/2d/src/FComponent2d.ts:370](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L370)

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

[packages/2d/src/FComponent2d.ts:378](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L378)

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

[packages/2d/src/FComponent2d.ts:386](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L386)

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

[packages/2d/src/FComponent2d.ts:354](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L354)

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

[packages/2d/src/FComponent2d.ts:362](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L362)

## Constructors

### new FCharacter2d()

> **new FCharacter2d**(`scene`, `options`?): [`FCharacter2d`](FCharacter2d.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

• **options?**: [`FCharacter2dOptions`](../interfaces/FCharacter2dOptions.md)

#### Returns

[`FCharacter2d`](FCharacter2d.md)

#### Overrides

[`FComponent2d`](FComponent2d.md).[`constructor`](FComponent2d.md#constructors)

#### Defined in

[packages/2d/src/character/FCharacter2d.ts:35](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2d.ts#L35)

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

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FComponent2dOptions__initCollider`](../interfaces/FComponent2dOptions__initCollider.md)

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
 shape: F2dShapes.SQUARE
})
```

#### Overrides

[`FComponent2d`](FComponent2d.md).[`initCollider`](FComponent2d.md#initcollider)

#### Defined in

[packages/2d/src/character/FCharacter2d.ts:108](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2d.ts#L108)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FComponent2dOptions__initRigidBody`](../interfaces/FComponent2dOptions__initRigidBody.md)

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
 shape: F2dShapes.SQUARE
})
```

#### Overrides

[`FComponent2d`](FComponent2d.md).[`initRigidBody`](FComponent2d.md#initrigidbody)

#### Defined in

[packages/2d/src/character/FCharacter2d.ts:101](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2d.ts#L101)

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

[packages/2d/src/FComponent2d.ts:342](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L342)

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

[`FComponent2d`](FComponent2d.md).[`onFrame`](FComponent2d.md#onframe)

#### Defined in

[packages/2d/src/FComponent2d.ts:114](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L114)

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

[packages/2d/src/FComponent2d.ts:158](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L158)

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

[packages/2d/src/FComponent2d.ts:206](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L206)

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

[packages/2d/src/FComponent2d.ts:225](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L225)

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

[packages/2d/src/FComponent2d.ts:178](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L178)

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

[packages/2d/src/FComponent2d.ts:74](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L74)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`container`](FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:50](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L50)

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

[packages/2d/src/character/FCharacter2d.ts:23](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2d.ts#L23)

***

### position

> **position**: `PointData`

Position of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`position`](FComponent2d.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:56](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L56)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rigidBody`](FComponent2d.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:70](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L70)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rotation`](FComponent2d.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:64](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L64)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scale`](FComponent2d.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:60](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L60)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scene`](FComponent2d.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:45](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L45)

***

### speed

> **speed**: `number`

The speed of the character.

#### Defined in

[packages/2d/src/character/FCharacter2d.ts:33](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2d.ts#L33)