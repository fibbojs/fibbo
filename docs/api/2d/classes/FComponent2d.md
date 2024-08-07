[@fibbojs](/api/index) / [2d](/api/2d) / FComponent2d

# Class: `abstract` FComponent2d

## Description

The base class for all 2D components in FibboJS.

## Extends

- `FComponent`

## Extended by

- [`FSquare`](FSquare.md)
- [`FCircle`](FCircle.md)
- [`FSprite`](FSprite.md)

## Constructors

### new FComponent2d()

> **new FComponent2d**(`scene`, `options`?): [`FComponent2d`](FComponent2d.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

The 2D scene where the component will be added.

• **options?**

The options for the component.

• **options.position?**: `PointData`

The position of the component.

• **options.rotation?**: `number`

The rotation of the component.

• **options.rotationDegree?**: `number`

The rotation of the component in degrees. If this is provided, the rotation will be converted to radians.

• **options.scale?**: `PointData`

The scale of the component.

#### Returns

[`FComponent2d`](FComponent2d.md)

#### Overrides

`FComponent.constructor`

#### Defined in

[packages/2d/src/FComponent2d.ts:56](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L56)

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

`FComponent.emitCollisionWith`

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

#### Defined in

[packages/2d/src/FComponent2d.ts:267](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L267)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:193](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L193)

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

#### Overrides

`FComponent.onCollisionWith`

#### Defined in

[packages/2d/src/FComponent2d.ts:299](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L299)

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

#### Overrides

`FComponent.onFrame`

#### Defined in

[packages/2d/src/FComponent2d.ts:91](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L91)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:123](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L123)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:154](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L154)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:167](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L167)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:137](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L137)

## Properties

### CALLBACKS\_ONCOLLISION

> **CALLBACKS\_ONCOLLISION**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FComponent.CALLBACKS_ONCOLLISION`

#### Defined in

packages/core/dist/index.d.ts:17

***

### ID

> **ID**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponent.ID`

#### Defined in

packages/core/dist/index.d.ts:12

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/2d/src/FComponent2d.ts:46](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L46)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L22)

***

### position

> **position**: `PointData`

Position of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:28](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L28)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/2d/src/FComponent2d.ts:42](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L42)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:36](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L36)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:32](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L32)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Defined in

[packages/2d/src/FComponent2d.ts:17](https://github.com/fibbojs/fibbo/blob/446efcf6acd7b8597316769fc6a8a3146d7c8a02/packages/2d/src/FComponent2d.ts#L17)
