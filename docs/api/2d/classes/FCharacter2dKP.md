[@fibbojs](/api/index) / [2d](/api/2d) / FCharacter2dKP

# Class: FCharacter2dKP

## Description

A pre-defined character controller based on Kinematic Position rigidbodies.

## Example

```ts
import { FScene2d, FCharacter2dKP } from '@fibbojs/2d'

const scene = new FScene2d()

const capsule = new FCharacter2dKP(scene)
scene.addComponent(capsule)
```

## Extends

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`rotationDegree`](FCharacter2dKinematic.md#rotationdegree)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`scaleX`](FCharacter2dKinematic.md#scalex)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`scaleY`](FCharacter2dKinematic.md#scaley)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`x`](FCharacter2dKinematic.md#x)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`y`](FCharacter2dKinematic.md#y)

#### Defined in

[packages/2d/src/FComponent2d.ts:362](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L362)

## Constructors

### new FCharacter2dKP()

> **new FCharacter2dKP**(`scene`, `options`?): [`FCharacter2dKP`](FCharacter2dKP.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

• **options?**: [`FComponent2dOptions`](../interfaces/FComponent2dOptions.md)

#### Returns

[`FCharacter2dKP`](FCharacter2dKP.md)

#### Overrides

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`constructor`](FCharacter2dKinematic.md#constructors)

#### Defined in

[packages/2d/src/character/FCharacter2dKP.ts:21](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2dKP.ts#L21)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`emitCollisionWith`](FCharacter2dKinematic.md#emitcollisionwith)

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

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`initCollider`](FCharacter2dKinematic.md#initcollider)

#### Defined in

[packages/2d/src/character/FCharacter2dKinematic.ts:34](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2dKinematic.ts#L34)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`initRigidBody`](FCharacter2dKinematic.md#initrigidbody)

#### Defined in

[packages/2d/src/character/FCharacter2dKP.ts:59](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2dKP.ts#L59)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`onCollisionWith`](FCharacter2dKinematic.md#oncollisionwith)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`onFrame`](FCharacter2dKinematic.md#onframe)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`setPosition`](FCharacter2dKinematic.md#setposition)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`setRotation`](FCharacter2dKinematic.md#setrotation)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`setRotationDegree`](FCharacter2dKinematic.md#setrotationdegree)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`setScale`](FCharacter2dKinematic.md#setscale)

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

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`__CALLBACKS_ON_COLLISION__`](FCharacter2dKinematic.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`__ID__`](FCharacter2dKinematic.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:12

***

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`characterController`](FCharacter2dKinematic.md#charactercontroller)

#### Defined in

[packages/2d/src/character/FCharacter2dKinematic.ts:16](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2dKinematic.ts#L16)

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`collider`](FCharacter2dKinematic.md#collider)

#### Defined in

[packages/2d/src/FComponent2d.ts:74](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L74)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`container`](FCharacter2dKinematic.md#container)

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

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`inputs`](FCharacter2dKinematic.md#inputs)

#### Defined in

[packages/2d/src/character/FCharacter2d.ts:23](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2d.ts#L23)

***

### position

> **position**: `PointData`

Position of the component.

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`position`](FCharacter2dKinematic.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:56](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L56)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`rigidBody`](FCharacter2dKinematic.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:70](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L70)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`rotation`](FCharacter2dKinematic.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:64](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L64)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`scale`](FCharacter2dKinematic.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:60](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L60)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`scene`](FCharacter2dKinematic.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:45](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/FComponent2d.ts#L45)

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacter2dKinematic`](FCharacter2dKinematic.md).[`speed`](FCharacter2dKinematic.md#speed)

#### Defined in

[packages/2d/src/character/FCharacter2d.ts:33](https://github.com/fibbojs/fibbo/blob/0743d3ecbe169ee26bac94fe1f739f65dc5abae3/packages/2d/src/character/FCharacter2d.ts#L33)
