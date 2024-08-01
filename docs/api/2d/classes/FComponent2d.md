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

[packages/2d/src/FComponent2d.ts:51](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L51)

## Methods

### initCollider()

> **initCollider**(`position`, `scale`, `rotation`, `shape`): `void`

#### Parameters

• **position**: `PointData` = `...`

The position of the collider.

• **scale**: `PointData` = `...`

The scale of the collider.

• **rotation**: `number` = `...`

The rotation of the collider.

• **shape**: [`F2dShapes`](../enumerations/F2dShapes.md) = `F2dShapes.SQUARE`

The shape of the collider.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider(
 new PIXI.Point(0, 0),
 new PIXI.Point(1, 1),
 0,
 F2dShapes.SQUARE
)
```

#### Defined in

[packages/2d/src/FComponent2d.ts:204](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L204)

***

### initRigidBody()

> **initRigidBody**(`position`, `scale`, `rotation`, `shape`): `void`

#### Parameters

• **position**: `PointData` = `...`

The position of the rigid body.

• **scale**: `PointData` = `...`

The scale of the rigid body.

• **rotation**: `number` = `...`

The rotation of the rigid body.

• **shape**: [`F2dShapes`](../enumerations/F2dShapes.md) = `F2dShapes.SQUARE`

The shape of the rigid body.

#### Returns

`void`

#### Description

Init a rigid body for the model.

#### Example

```ts
component.initRigidBody(
 new PIXI.Point(0, 0),
 new PIXI.Point(1, 1),
 0,
 F2dShapes.SQUARE
)

#### Defined in

[packages/2d/src/FComponent2d.ts:163](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L163)

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

[packages/2d/src/FComponent2d.ts:68](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L68)

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

[packages/2d/src/FComponent2d.ts:100](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L100)

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

[packages/2d/src/FComponent2d.ts:131](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L131)

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

[packages/2d/src/FComponent2d.ts:144](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L144)

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

[packages/2d/src/FComponent2d.ts:114](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L114)

## Properties

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/2d/src/FComponent2d.ts:46](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L46)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L22)

***

### position

> **position**: `PointData`

Position of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:28](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L28)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/2d/src/FComponent2d.ts:42](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L42)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:36](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L36)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:32](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L32)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Defined in

[packages/2d/src/FComponent2d.ts:17](https://github.com/fibbojs/fibbo/blob/3bfecee9c2a4f3f6d193d8bfdda5d3ae6585b4f9/packages/2d/src/FComponent2d.ts#L17)
