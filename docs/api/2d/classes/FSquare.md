[@fibbojs](/api/index) / [2d](/api/2d) / FSquare

# Class: FSquare

## Description

A simple square in FibboJS.

## Example

```ts
import { FScene2d, FSquare } from '@fibbojs/2d'

const scene = new FScene2d()

const square = new FSquare(scene)
scene.addComponent(square)
```

## Extends

- [`FComponent2d`](FComponent2d.md)

## Constructors

### new FSquare()

> **new FSquare**(`scene`): [`FSquare`](FSquare.md)

#### Parameters

• **scene**: [`FScene2d`](FScene2d.md)

#### Returns

[`FSquare`](FSquare.md)

#### Overrides

[`FComponent2d`](FComponent2d.md).[`constructor`](FComponent2d.md#constructors)

#### Defined in

[packages/2d/src/polygons/FSquare.ts:19](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/polygons/FSquare.ts#L19)

## Methods

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

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`initCollider`](FComponent2d.md#initcollider)

#### Defined in

[packages/2d/src/FComponent2d.ts:219](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L219)

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

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`initRigidBody`](FComponent2d.md#initrigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:165](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L165)

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

[packages/2d/src/polygons/FSquare.ts:29](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/polygons/FSquare.ts#L29)

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

[packages/2d/src/FComponent2d.ts:100](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L100)

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

[packages/2d/src/FComponent2d.ts:131](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L131)

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

[packages/2d/src/FComponent2d.ts:144](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L144)

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

[packages/2d/src/FComponent2d.ts:114](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L114)

## Properties

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`collider`](FComponent2d.md#collider)

#### Defined in

[packages/2d/src/FComponent2d.ts:46](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L46)

***

### container

> **container**: `Container`\<`ContainerChild`\>

PIXI container

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`container`](FComponent2d.md#container)

#### Defined in

[packages/2d/src/FComponent2d.ts:22](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L22)

***

### position

> **position**: `PointData`

Position of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`position`](FComponent2d.md#position)

#### Defined in

[packages/2d/src/FComponent2d.ts:28](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L28)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rigidBody`](FComponent2d.md#rigidbody)

#### Defined in

[packages/2d/src/FComponent2d.ts:42](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L42)

***

### rotation

> **rotation**: `number`

Rotation of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`rotation`](FComponent2d.md#rotation)

#### Defined in

[packages/2d/src/FComponent2d.ts:36](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L36)

***

### scale

> **scale**: `PointData`

Scale of the component.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scale`](FComponent2d.md#scale)

#### Defined in

[packages/2d/src/FComponent2d.ts:32](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L32)

***

### scene

> **scene**: [`FScene2d`](FScene2d.md)

The scene which the component is in.

#### Inherited from

[`FComponent2d`](FComponent2d.md).[`scene`](FComponent2d.md#scene)

#### Defined in

[packages/2d/src/FComponent2d.ts:17](https://github.com/fibbojs/fibbo/blob/854b295adc4e4ce7db9ffee939bdf1bce33bc12e/packages/2d/src/FComponent2d.ts#L17)
