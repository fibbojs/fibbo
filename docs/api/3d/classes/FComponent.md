[@fibbojs](/api/index) / [3d](/api/3d) / FComponent

# Class: `abstract` FComponent

## Description

The base class for all 3D objects in Fibbo.

## Extends

- `FComponent`

## Extended by

- [`FComponentEmpty`](FComponentEmpty.md)
- [`FModel`](FModel.md)
- [`FPolyhedron`](FPolyhedron.md)

## Accessors

### position

> `get` **position**(): `object`

Setters & getters for transform properties

> `set` **position**(`position`): `void`

#### Parameters

• **position**

• **position.x**: `number`

• **position.y**: `number`

• **position.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Defined in

[packages/3d/src/core/FComponent.ts:401](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L401)

***

### rotation

> `get` **rotation**(): `object`

> `set` **rotation**(`rotation`): `void`

#### Parameters

• **rotation**

• **rotation.x**: `number`

• **rotation.y**: `number`

• **rotation.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Defined in

[packages/3d/src/core/FComponent.ts:433](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L433)

***

### rotationDegree

> `get` **rotationDegree**(): `object`

> `set` **rotationDegree**(`rotationDegree`): `void`

#### Parameters

• **rotationDegree**

• **rotationDegree.x**: `number`

• **rotationDegree.y**: `number`

• **rotationDegree.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Defined in

[packages/3d/src/core/FComponent.ts:465](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L465)

***

### rotationDegreeX

> `get` **rotationDegreeX**(): `number`

> `set` **rotationDegreeX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:477](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L477)

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:485](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L485)

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:493](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L493)

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:441](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L441)

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:449](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L449)

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:457](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L457)

***

### scale

> `get` **scale**(): `object`

> `set` **scale**(`scale`): `void`

#### Parameters

• **scale**

• **scale.x**: `number`

• **scale.y**: `number`

• **scale.z**: `number`

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Defined in

[packages/3d/src/core/FComponent.ts:501](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L501)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:509](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L509)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:517](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L517)

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:525](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L525)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:409](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L409)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:417](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L417)

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/core/FComponent.ts:425](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L425)

## Constructors

### new FComponent()

> **new FComponent**(`scene`, `options`?): [`FComponent`](FComponent.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

The 3D scene where the component will be added.

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

The options for the component.

#### Returns

[`FComponent`](FComponent.md)

#### Overrides

`FComponentCore.constructor`

#### Defined in

[packages/3d/src/core/FComponent.ts:83](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L83)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: `FComponent`

The component to emit the collision event with.

#### Returns

`void`

#### Description

Emit a collision event with a given class or object.

#### Examples

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith({
 class: Enemy
})
```

```typescript
const player = new Player()
const enemy = new Enemy()
player.emitCollisionWith({
 object: enemy
})
```

#### Inherited from

`FComponentCore.emitCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:115

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider({
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
 shape: FShapes.CUBE
})
```

#### Defined in

[packages/3d/src/core/FComponent.ts:356](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L356)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigid body.

#### Returns

`void`

#### Description

Init a rigid body for the component.

#### Example

```ts
component.initRigidBody({
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
 shape: FShapes.CUBE
})
```

#### Defined in

[packages/3d/src/core/FComponent.ts:327](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L327)

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
 position: { x: 0, y: 0, z: 0 },
 scale: { x: 1, y: 1, z: 1 },
 rotation: { x: 0, y: 0, z: 0 },
 shape: FShapes.CUBE
})
```

#### Defined in

[packages/3d/src/core/FComponent.ts:380](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L380)

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

`FComponentCore.onCollisionWith`

#### Defined in

[packages/3d/src/core/FComponent.ts:389](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L389)

***

### onFrame()

> **onFrame**(`_delta`): `void`

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Description

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Overrides

`FComponentCore.onFrame`

#### Defined in

[packages/3d/src/core/FComponent.ts:108](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L108)

***

### setPosition()

> **setPosition**(`options`): `void`

#### Parameters

• **options**

The options for the position.

• **options.x**: `number`

The position on the x-axis.

• **options.y**: `number`

The position on the y-axis.

• **options.z**: `number`

The position on the z-axis.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition({ x: 0, y: 1, z: 0 })
```

#### Defined in

[packages/3d/src/core/FComponent.ts:199](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L199)

***

### setRotation()

> **setRotation**(`options`): `void`

#### Parameters

• **options**

The options for the rotation.

• **options.x**: `number`

The rotation on the x-axis.

• **options.y**: `number`

The rotation on the y-axis.

• **options.z**: `number`

The rotation on the z-axis.

#### Returns

`void`

#### Description

Set the rotation of the component from radians.

#### Example

```ts
component.setRotation({ x: 0, y: 0, z: 0 })
```

#### Defined in

[packages/3d/src/core/FComponent.ts:264](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L264)

***

### setRotationDegree()

> **setRotationDegree**(`options`): `void`

#### Parameters

• **options**

The options for the rotation.

• **options.x**: `number`

The rotation in degrees on the x-axis.

• **options.y**: `number`

The rotation in degrees on the y-axis.

• **options.z**: `number`

The rotation in degrees on the z-axis.

#### Returns

`void`

#### Description

Set the rotation of the component from degrees.

#### Example

```ts
component.setRotationDegree({ x: 0, y: 90, z: 0 })
```

#### Defined in

[packages/3d/src/core/FComponent.ts:288](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L288)

***

### setScale()

> **setScale**(`options`): `void`

#### Parameters

• **options**

The options for the scale.

• **options.x**: `number`

The scale on the x-axis.

• **options.y**: `number`

The scale on the y-axis.

• **options.z**: `number`

The scale on the z-axis.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Example

```ts
component.setScale({ x: 1, y: 1, z: 1 })
```

#### Defined in

[packages/3d/src/core/FComponent.ts:223](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L223)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FComponentCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

packages/core/dist/index.d.ts:56

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

packages/core/dist/index.d.ts:51

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FComponentCore.__IS_2D__`

#### Defined in

packages/core/dist/index.d.ts:46

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_3D__`

#### Defined in

[packages/3d/src/core/FComponent.ts:28](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L28)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Defined in

[packages/3d/src/core/FComponent.ts:57](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L57)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Overrides

`FComponentCore.controller`

#### Defined in

[packages/3d/src/core/FComponent.ts:37](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L37)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Defined in

[packages/3d/src/core/FComponent.ts:42](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L42)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Defined in

[packages/3d/src/core/FComponent.ts:53](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L53)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Defined in

[packages/3d/src/core/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L33)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[packages/3d/src/core/FComponent.ts:61](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L61)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Defined in

[packages/3d/src/core/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/661c4959fa5749d0db5d94ebb84036f7231634a4/packages/3d/src/core/FComponent.ts#L47)
