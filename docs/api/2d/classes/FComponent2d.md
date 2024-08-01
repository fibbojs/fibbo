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

> **new FComponent2d**(`scene`): [`FComponent2d`](FComponent2d.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

The 2D scene where the component will be added.

#### Returns

[`FComponent2d`](FComponent2d.md)

#### Overrides

`FComponent.constructor`

#### Defined in

[packages/2d/src/FComponent2d.ts:51](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L51)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`class_`): `void`

#### Parameters

• **class\_**: `any`

The class to emit the

#### Returns

`void`

#### Description

Emit a collision event with a given class.

#### Example

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, () => {
console.log('Player collided with enemy!')
})
player.emitCollisionWith(Enemy)
```

#### Inherited from

`FComponent.emitCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:48

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

[packages/2d/src/FComponent2d.ts:220](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L220)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:165](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L165)

***

### onCollisionWith()

> **onCollisionWith**(`class_`, `callback`): `void`

#### Parameters

• **class\_**: `any`

The class to add the callback to.

• **callback**

The callback to add.

#### Returns

`void`

#### Description

Add a callback to be called when a collision occurs.

#### Example

```typescript
const player = new Player()
const enemy = new Enemy()
player.onCollisionWith(Enemy, () => {
 console.log('Player collided with enemy!')
})

#### Inherited from

`FComponent.onCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:34

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

[packages/2d/src/FComponent2d.ts:68](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L68)

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

[packages/2d/src/FComponent2d.ts:100](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L100)

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

[packages/2d/src/FComponent2d.ts:131](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L131)

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

[packages/2d/src/FComponent2d.ts:144](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L144)

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

[packages/2d/src/FComponent2d.ts:114](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L114)

## Properties

### CALLBACKS\_ONCOLLISION

> **CALLBACKS\_ONCOLLISION**: `object`

Callbacks for when a collision occurs with a given class.
It is a dictionary where the key is the class name and the value is the callback.

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Inherited from

`FComponent.CALLBACKS_ONCOLLISION`

#### Defined in

packages/core/dist/index.d.ts:12

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/2d/src/FComponent2d.ts:46](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L46)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L22)

***

### position

> **position**: `PointData`

Position of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:28](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L28)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/2d/src/FComponent2d.ts:42](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L42)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:36](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L36)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:32](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L32)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Defined in

[packages/2d/src/FComponent2d.ts:17](https://github.com/fibbojs/fibbo/blob/b0ef6c5de7076d583a0c1746364b2ee4ba074b5e/packages/2d/src/FComponent2d.ts#L17)
