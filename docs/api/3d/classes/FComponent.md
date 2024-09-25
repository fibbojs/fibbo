[@fibbojs](/api/index) / [3d](/api/3d) / FComponent

# Class: `abstract` FComponent

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

[3d/src/core/FComponent.ts:407](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L407)

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

[3d/src/core/FComponent.ts:439](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L439)

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

[3d/src/core/FComponent.ts:471](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L471)

***

### rotationDegreeX

> `get` **rotationDegreeX**(): `number`

> `set` **rotationDegreeX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:483](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L483)

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:491](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L491)

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:499](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L499)

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:447](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L447)

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:455](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L455)

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:463](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L463)

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

[3d/src/core/FComponent.ts:507](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L507)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:515](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L515)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:523](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L523)

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:531](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L531)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:415](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L415)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:423](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L423)

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[3d/src/core/FComponent.ts:431](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L431)

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

[3d/src/core/FComponent.ts:83](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L83)

## Methods

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

Emit a collision event with a given class or object.

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: `FComponent`

The component to emit the collision event with.

#### Returns

`void`

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

core/dist/index.d.ts:116

***

### initCollider()

> **initCollider**(`options`?): `void`

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

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

[3d/src/core/FComponent.ts:361](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L361)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

Init a rigid body for the component.

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigid body.

#### Returns

`void`

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

[3d/src/core/FComponent.ts:332](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L332)

***

### initSensor()

> **initSensor**(`options`?): `void`

Init a sensor for the component.
This is useful for triggerings events when the component collides with other components.

#### Parameters

• **options?**: [`FColliderOptions`](../interfaces/FColliderOptions.md)

The options for the collider.

#### Returns

`void`

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

[3d/src/core/FComponent.ts:385](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L385)

***

### onCollisionWith()

> **onCollisionWith**(`classOrObject`, `callback`): () => `void`

Add a callback to be called when a collision occurs.

#### Parameters

• **classOrObject**: `any`

The class or object to add the callback to.

• **callback**

The callback to add.

#### Returns

`Function`

A function to remove the callback.

##### Returns

`void`

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

[3d/src/core/FComponent.ts:394](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L394)

***

### onFrame()

> **onFrame**(`_delta`): `void`

Update the component. Should be called every frame.
The purpose of `onFrame` on FComponent is really to render the component, its mesh/sprite and its properties.
Any changes on its transform should be done on the controller, not here.

#### Parameters

• **\_delta**: `number`

#### Returns

`void`

#### Overrides

`FComponentCore.onFrame`

#### Defined in

[3d/src/core/FComponent.ts:108](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L108)

***

### setPosition()

> **setPosition**(`options`): `void`

Set the position of the component.

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

#### Example

```ts
component.setPosition({ x: 0, y: 1, z: 0 })
```

#### Defined in

[3d/src/core/FComponent.ts:204](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L204)

***

### setRotation()

> **setRotation**(`options`): `void`

Set the rotation of the component from radians.

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

#### Example

```ts
component.setRotation({ x: 0, y: 0, z: 0 })
```

#### Defined in

[3d/src/core/FComponent.ts:269](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L269)

***

### setRotationDegree()

> **setRotationDegree**(`options`): `void`

Set the rotation of the component from degrees.

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

#### Example

```ts
component.setRotationDegree({ x: 0, y: 90, z: 0 })
```

#### Defined in

[3d/src/core/FComponent.ts:293](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L293)

***

### setScale()

> **setScale**(`options`): `void`

Set the scale of the component.

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

#### Example

```ts
component.setScale({ x: 1, y: 1, z: 1 })
```

#### Defined in

[3d/src/core/FComponent.ts:228](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L228)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

`FComponentCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

core/dist/index.d.ts:56

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

core/dist/index.d.ts:51

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FComponentCore.__IS_2D__`

#### Defined in

core/dist/index.d.ts:46

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_3D__`

#### Defined in

[3d/src/core/FComponent.ts:28](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L28)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Defined in

[3d/src/core/FComponent.ts:57](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L57)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Overrides

`FComponentCore.controller`

#### Defined in

[3d/src/core/FComponent.ts:37](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L37)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Defined in

[3d/src/core/FComponent.ts:42](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L42)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Defined in

[3d/src/core/FComponent.ts:53](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L53)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Defined in

[3d/src/core/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L33)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[3d/src/core/FComponent.ts:61](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L61)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Defined in

[3d/src/core/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/bc4521390a7de80cd2e57e65854cfa488d5a5f8a/packages/3d/src/core/FComponent.ts#L47)
