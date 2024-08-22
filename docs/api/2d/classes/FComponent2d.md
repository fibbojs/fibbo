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

## Accessors

### rotationDegree

> `get` **rotationDegree**(): `number`

> `set` **rotationDegree**(`r`): `void`

#### Parameters

• **r**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent2d.ts:364](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L364)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent2d.ts:372](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L372)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent2d.ts:380](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L380)

***

### x

> `get` **x**(): `number`

Setters & getters for transform properties

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent2d.ts:348](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L348)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/2d/src/FComponent2d.ts:356](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L356)

## Constructors

### new FComponent2d()

> **new FComponent2d**(`scene`, `options`?): [`FComponent2d`](FComponent2d.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

The 2D scene where the component will be added.

• **options?**: [`FComponent2dOptions`](../interfaces/FComponent2dOptions.md)

The options for the component.

#### Returns

[`FComponent2d`](FComponent2d.md)

#### Overrides

`FComponent.constructor`

#### Defined in

[packages/2d/src/FComponent2d.ts:63](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L63)

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

[packages/2d/src/FComponent2d.ts:304](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L304)

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

[packages/2d/src/FComponent2d.ts:230](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L230)

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

[packages/2d/src/FComponent2d.ts:336](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L336)

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

[packages/2d/src/FComponent2d.ts:93](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L93)

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

[packages/2d/src/FComponent2d.ts:137](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L137)

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

[packages/2d/src/FComponent2d.ts:185](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L185)

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

[packages/2d/src/FComponent2d.ts:204](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L204)

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

[packages/2d/src/FComponent2d.ts:157](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L157)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FComponent.__CALLBACKS_ON_COLLISION__`

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponent.__ID__`

#### Defined in

packages/core/dist/index.d.ts:12

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/2d/src/FComponent2d.ts:53](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L53)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[packages/2d/src/FComponent2d.ts:29](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L29)

***

### position

> **position**: `PointData`

Position of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:35](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L35)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/2d/src/FComponent2d.ts:49](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L49)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:43](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L43)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:39](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L39)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Defined in

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/2d/src/FComponent2d.ts#L24)
