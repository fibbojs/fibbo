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

[packages/2d/src/FComponent2d.ts:30](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L30)

## Methods

### initCollider()

> **initCollider**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `PointData`

The position of the collider.

• **scale?**: `PointData`

The scale of the collider.

• **rotation?**: `number`

The rotation of the collider.

• **shape?**: [`F2dShapes`](../enumerations/F2dShapes.md)

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

[packages/2d/src/FComponent2d.ts:217](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L217)

***

### initRigidBody()

> **initRigidBody**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `PointData`

The position of the rigid body.

• **scale?**: `PointData`

The scale of the rigid body.

• **rotation?**: `number`

The rotation of the rigid body.

• **shape?**: [`F2dShapes`](../enumerations/F2dShapes.md)

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

[packages/2d/src/FComponent2d.ts:142](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L142)

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

[packages/2d/src/FComponent2d.ts:47](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L47)

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

[packages/2d/src/FComponent2d.ts:78](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L78)

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

[packages/2d/src/FComponent2d.ts:109](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L109)

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

[packages/2d/src/FComponent2d.ts:122](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L122)

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

[packages/2d/src/FComponent2d.ts:92](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L92)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Defined in

[packages/2d/src/FComponent2d.ts:25](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L25)

***

### container

> **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the component (can be a square or circle for exemple).

#### Defined in

[packages/2d/src/FComponent2d.ts:19](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L19)

***

### position

> **position**: `PointData`

#### Defined in

[packages/2d/src/FComponent2d.ts:20](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L20)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Defined in

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L24)

***

### rotation

> **rotation**: `number`

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L22)

***

### scale

> **scale**: `PointData`

#### Defined in

[packages/2d/src/FComponent2d.ts:21](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L21)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

#### Defined in

[packages/2d/src/FComponent2d.ts:15](https://github.com/fibbojs/fibbo/blob/b264675ff74b82d5f50dfe9ebf6225959734103c/packages/2d/src/FComponent2d.ts#L15)
