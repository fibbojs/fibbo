[@fibbojs](/api/index) / [2d](/api/2d) / FCircle

# Class: FCircle

## Description

A simple circle in Fibbo.

## Example

```ts
import { FScene, FCircle } from '@fibbojs/2d'

const scene = new FScene()

const circle = new FCircle(scene)
scene.addComponent(circle)
```

## Extends

- [`FPolygon`](FPolygon.md)

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

[`FPolygon`](FPolygon.md).[`position`](FPolygon.md#position)

#### Defined in

[packages/2d/src/core/FComponent.ts:335](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L335)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Inherited from

[`FPolygon`](FPolygon.md).[`rotation`](FPolygon.md#rotation)

#### Defined in

[packages/2d/src/core/FComponent.ts:359](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L359)

***

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Inherited from

[`FPolygon`](FPolygon.md).[`rotationDegree`](FPolygon.md#rotationdegree)

#### Defined in

[packages/2d/src/core/FComponent.ts:367](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L367)

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

[`FPolygon`](FPolygon.md).[`scale`](FPolygon.md#scale)

#### Defined in

[packages/2d/src/core/FComponent.ts:375](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L375)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FPolygon`](FPolygon.md).[`scaleX`](FPolygon.md#scalex)

#### Defined in

[packages/2d/src/core/FComponent.ts:383](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L383)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FPolygon`](FPolygon.md).[`scaleY`](FPolygon.md#scaley)

#### Defined in

[packages/2d/src/core/FComponent.ts:391](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L391)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FPolygon`](FPolygon.md).[`x`](FPolygon.md#x)

#### Defined in

[packages/2d/src/core/FComponent.ts:343](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L343)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FPolygon`](FPolygon.md).[`y`](FPolygon.md#y)

#### Defined in

[packages/2d/src/core/FComponent.ts:351](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L351)

## Constructors

### new FCircle()

> **new FCircle**(`scene`, `options`?): [`FCircle`](FCircle.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

#### Returns

[`FCircle`](FCircle.md)

#### Overrides

[`FPolygon`](FPolygon.md).[`constructor`](FPolygon.md#constructors)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:21](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/polygons/FCircle.ts#L21)

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

[`FPolygon`](FPolygon.md).[`emitCollisionWith`](FPolygon.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:100

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

• **options.shape?**: [`FShapes`](../enumerations/FShapes.md)

The shape of the collider.

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

[`FPolygon`](FPolygon.md).[`initCollider`](FPolygon.md#initcollider)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:51](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/polygons/FCircle.ts#L51)

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

• **options.shape?**: [`FShapes`](../enumerations/FShapes.md)

The shape of the rigid body.

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

[`FPolygon`](FPolygon.md).[`initRigidBody`](FPolygon.md#initrigidbody)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:33](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/polygons/FCircle.ts#L33)

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

[`FPolygon`](FPolygon.md).[`initSensor`](FPolygon.md#initsensor)

#### Defined in

[packages/2d/src/core/FComponent.ts:314](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L314)

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

[`FPolygon`](FPolygon.md).[`onCollisionWith`](FPolygon.md#oncollisionwith)

#### Defined in

[packages/2d/src/core/FComponent.ts:323](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L323)

***

### onFrame()

> **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Description

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Overrides

[`FPolygon`](FPolygon.md).[`onFrame`](FPolygon.md#onframe)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:29](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/polygons/FCircle.ts#L29)

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

[`FPolygon`](FPolygon.md).[`setPosition`](FPolygon.md#setposition)

#### Defined in

[packages/2d/src/core/FComponent.ts:169](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L169)

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

[`FPolygon`](FPolygon.md).[`setRotation`](FPolygon.md#setrotation)

#### Defined in

[packages/2d/src/core/FComponent.ts:218](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L218)

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

[`FPolygon`](FPolygon.md).[`setRotationDegree`](FPolygon.md#setrotationdegree)

#### Defined in

[packages/2d/src/core/FComponent.ts:237](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L237)

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

[`FPolygon`](FPolygon.md).[`setScale`](FPolygon.md#setscale)

#### Defined in

[packages/2d/src/core/FComponent.ts:190](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L190)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__CALLBACKS_ON_COLLISION__`](FPolygon.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:47

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FPolygon`](FPolygon.md).[`__ID__`](FPolygon.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:42

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FPolygon`](FPolygon.md).[`__IS_2D__`](FPolygon.md#__is_2d__)

#### Defined in

[packages/2d/src/core/FComponent.ts:27](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L27)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean`

Internal flags

#### Inherited from

[`FPolygon`](FPolygon.md).[`__IS_3D__`](FPolygon.md#__is_3d__)

#### Defined in

packages/core/dist/index.d.ts:36

***

### collider?

> `optional` **collider**: `FCollider`

RAPIER Collider

#### Inherited from

[`FPolygon`](FPolygon.md).[`collider`](FPolygon.md#collider)

#### Defined in

[packages/2d/src/core/FComponent.ts:56](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L56)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FPolygon`](FPolygon.md).[`container`](FPolygon.md#container)

#### Defined in

[packages/2d/src/core/FComponent.ts:41](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L41)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FPolygon`](FPolygon.md).[`controller`](FPolygon.md#controller)

#### Defined in

[packages/2d/src/core/FComponent.ts:36](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L36)

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RAPIER RigidBody

#### Inherited from

[`FPolygon`](FPolygon.md).[`rigidBody`](FPolygon.md#rigidbody)

#### Defined in

[packages/2d/src/core/FComponent.ts:52](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L52)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FPolygon`](FPolygon.md).[`scene`](FPolygon.md#scene)

#### Defined in

[packages/2d/src/core/FComponent.ts:32](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L32)

***

### sensor?

> `optional` **sensor**: `FRigidBody`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FPolygon`](FPolygon.md).[`sensor`](FPolygon.md#sensor)

#### Defined in

[packages/2d/src/core/FComponent.ts:60](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L60)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FPolygon`](FPolygon.md).[`transform`](FPolygon.md#transform)

#### Defined in

[packages/2d/src/core/FComponent.ts:46](https://github.com/fibbojs/fibbo/blob/ca6e10de1cfed8b8d44a28a82c206333ede11c84/packages/2d/src/core/FComponent.ts#L46)
