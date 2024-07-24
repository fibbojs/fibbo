[@fibbojs](/api/index) / [2d](/api/2d) / FCircle

# Class: FCircle

## Description

A simple square in FibboJS.

## Example

```ts
import { FScene2d, FCircle } from '@fibbojs/2d'

const scene = new FScene2d()

const square = new FCircle(scene)
scene.addComponent(square)
```

## Extends

- [`FComponent2d`](FComponent2d.md)

## Constructors

### new FCircle()

> **new FCircle**(`scene`): [`FCircle`](FCircle.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

#### Returns

[`FCircle`](FCircle.md)

#### Overrides

[`FComponent2d`](FComponent2d.md).[`constructor`](FComponent2d.md#constructors)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:20](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/polygons/FCircle.ts#L20)

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

#### Overrides

[`FComponent2d`](FComponent2d.md).[`initCollider`](FComponent2d.md#initcollider)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:43](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/polygons/FCircle.ts#L43)

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

#### Overrides

[`FComponent2d`](FComponent2d.md).[`initRigidBody`](FComponent2d.md#initrigidbody)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:32](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/polygons/FCircle.ts#L32)

***

### onFrame()

> **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Overrides

[`FComponent2d`](FComponent2d.md).[`onFrame`](FComponent2d.md#onframe)

#### Defined in

[packages/2d/src/polygons/FCircle.ts:28](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/polygons/FCircle.ts#L28)

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

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setPosition`](FComponent2d.md#setposition)

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

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setRotation`](FComponent2d.md#setrotation)

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

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setRotationDegree`](FComponent2d.md#setrotationdegree)

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

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`setScale`](FComponent2d.md#setscale)

#### Defined in

[packages/2d/src/FComponent2d.ts:77](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L77)

## Properties

### collider?

> `optional` **collider**: `Collider`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`collider`](FComponent2d.md#collider)

#### Defined in

[packages/2d/src/FComponent2d.ts:25](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L25)

***

### container

> **container**: `Container`\<`ContainerChild`\>

container is the PIXI container that holds the component (can be a square or circle for exemple).

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`container`](FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:19](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L19)

***

### position

> **position**: `PointData`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`position`](FComponent2d.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:20](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L20)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rigidBody`](FComponent2d.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:24](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L24)

***

### rotation

> **rotation**: `number`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rotation`](FComponent2d.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L22)

***

### scale

> **scale**: `PointData`

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scale`](FComponent2d.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:21](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L21)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scene`](FComponent2d.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:15](https://github.com/fibbojs/fibbo/blob/944d69b0cc66d95350cb5724765ad71ca7d3b375/packages/2d/src/FComponent2d.ts#L15)
