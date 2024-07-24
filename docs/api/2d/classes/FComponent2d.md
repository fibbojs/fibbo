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

#### Returns

[`FComponent2d`](FComponent2d.md)

#### Overrides

`FComponent.constructor`

#### Defined in

[packages/2d/src/FComponent2d.ts:27](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L27)

## Methods

### initCollider()

> **initCollider**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `PointData`

• **scale?**: `PointData`

• **rotation?**: `number`

• **shape?**: [`F2dShapes`](../enumerations/F2dShapes.md)

#### Returns

`void`

#### Description

Only init a collider for the model, without a rigid body.
This is useful for static objects.

#### Defined in

[packages/2d/src/FComponent2d.ts:169](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L169)

***

### initRigidBody()

> **initRigidBody**(`position`?, `scale`?, `rotation`?, `shape`?): `void`

#### Parameters

• **position?**: `PointData`

• **scale?**: `PointData`

• **rotation?**: `number`

• **shape?**: [`F2dShapes`](../enumerations/F2dShapes.md)

#### Returns

`void`

#### Description

Init a rigid body for the model.

#### Defined in

[packages/2d/src/FComponent2d.ts:107](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L107)

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Overrides

`FComponent.onFrame`

#### Defined in

[packages/2d/src/FComponent2d.ts:44](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L44)

***

### setPosition()

> **setPosition**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Description

Set the position of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:69](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L69)

***

### setRotation()

> **setRotation**(`r`): `void`

#### Parameters

• **r**: `number`

The rotation in radians.

#### Returns

`void`

#### Description

Set the rotation of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:90](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L90)

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

#### Defined in

[packages/2d/src/FComponent2d.ts:99](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L99)

***

### setScale()

> **setScale**(`x`, `y`): `void`

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

`void`

#### Description

Set the scale of the component.

#### Defined in

[packages/2d/src/FComponent2d.ts:77](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L77)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Defined in

[packages/2d/src/FComponent2d.ts:25](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L25)

***

### container

> **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the component (can be a square or circle for exemple).

#### Defined in

[packages/2d/src/FComponent2d.ts:19](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L19)

***

### position

> **position**: `PointData`

#### Defined in

[packages/2d/src/FComponent2d.ts:20](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L20)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Defined in

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L24)

***

### rotation

> **rotation**: `number`

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L22)

***

### scale

> **scale**: `PointData`

#### Defined in

[packages/2d/src/FComponent2d.ts:21](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L21)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

#### Defined in

[packages/2d/src/FComponent2d.ts:15](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L15)
