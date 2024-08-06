[@fibbojs](/api/index) / [2d](/api/2d) / FCircle

# Class: FCircle

## Description

A simple circle in FibboJS.

## Example

```ts
import { FScene2d, FCircle } from '@fibbojs/2d'

const scene = new FScene2d()

const circle = new FCircle(scene)
scene.addComponent(circle)
```

## Extends

- [`FComponent2d`](FComponent2d.md)

## Constructors

### new FCircle()

> **new FCircle**(`scene`, `options`?): [`FCircle`](FCircle.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

• **options?**

• **options.position?**: `PointData`

• **options.rotation?**: `number`

• **options.rotationDegree?**: `number`

• **options.scale?**: `PointData`

#### Returns

[`FCircle`](FCircle.md)

#### Overrides

[`FComponent2d`](FComponent2d.md).[`constructor`](FComponent2d.md#constructors)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:20](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/polygons/FCircle.ts#L20)

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

#### Overrides

[`FComponent2d`](FComponent2d.md).[`initCollider`](FComponent2d.md#initcollider)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:49](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/polygons/FCircle.ts#L49)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**

The options for the rigid body.

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

#### Overrides

[`FComponent2d`](FComponent2d.md).[`initRigidBody`](FComponent2d.md#initrigidbody)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:37](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/polygons/FCircle.ts#L37)

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

[packages/2d/src/FComponent2d.ts:275](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L275)

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

[packages/2d/src/polygons/FCircle.ts:33](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/polygons/FCircle.ts#L33)

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

[packages/2d/src/FComponent2d.ts:123](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L123)

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

[packages/2d/src/FComponent2d.ts:154](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L154)

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

[packages/2d/src/FComponent2d.ts:167](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L167)

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

[packages/2d/src/FComponent2d.ts:137](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L137)

## Properties

### CALLBACKS\_ONCOLLISION

> **CALLBACKS\_ONCOLLISION**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`CALLBACKS_ONCOLLISION`](FComponent2d.md#callbacks_oncollision)

#### Defined in

packages/core/dist/index.d.ts:17

***

### ID

> **ID**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`ID`](FComponent2d.md#id)

#### Defined in

packages/core/dist/index.d.ts:12

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`collider`](FComponent2d.md#collider)

#### Defined in

[packages/2d/src/FComponent2d.ts:46](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L46)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`container`](FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L22)

***

### position

> **position**: `PointData`

Position of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`position`](FComponent2d.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:28](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L28)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rigidBody`](FComponent2d.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:42](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L42)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rotation`](FComponent2d.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:36](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L36)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scale`](FComponent2d.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:32](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L32)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scene`](FComponent2d.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:17](https://github.com/fibbojs/fibbo/blob/8d1d863e977b4e67cd08aa4b38688ea89d320e56/packages/2d/src/FComponent2d.ts#L17)
