[@fibbojs](/api/index) / [3d](/api/3d) / FComponent

# Class: `abstract` FComponent

## Description

The base class for all 3D objects in Fibbo.

## Extends

- `FComponent`

## Extended by

- [`FComponentEmpty`](FComponentEmpty.md)
- [`FCharacter`](FCharacter.md)
- [`FModel`](FModel.md)
- [`FPolyhedron`](FPolyhedron.md)

## Accessors

### rotationDegreeX

> `get` **rotationDegreeX**(): `number`

> `set` **rotationDegreeX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:422](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L422)

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:430](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L430)

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:438](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L438)

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:398](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L398)

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:406](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L406)

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:414](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L414)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:446](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L446)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:454](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L454)

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:462](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L462)

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

[packages/3d/src/FComponent.ts:374](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L374)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:382](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L382)

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent.ts:390](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L390)

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

[packages/3d/src/FComponent.ts:77](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L77)

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

`FComponentCore.emitCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:70

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

[packages/3d/src/FComponent.ts:330](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L330)

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

[packages/3d/src/FComponent.ts:301](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L301)

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

[packages/3d/src/FComponent.ts:354](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L354)

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

[packages/3d/src/FComponent.ts:362](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L362)

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

`FComponentCore.onFrame`

#### Defined in

[packages/3d/src/FComponent.ts:102](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L102)

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

[packages/3d/src/FComponent.ts:173](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L173)

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

[packages/3d/src/FComponent.ts:238](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L238)

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

[packages/3d/src/FComponent.ts:262](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L262)

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

[packages/3d/src/FComponent.ts:197](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L197)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FComponentCore.__CALLBACKS_ON_COLLISION__`

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponentCore.__ID__`

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

`FComponentCore.__IS_2D__`

#### Defined in

packages/core/dist/index.d.ts:12

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Overrides

`FComponentCore.__IS_3D__`

#### Defined in

[packages/3d/src/FComponent.ts:26](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L26)

***

### collider?

> `optional` **collider**: `FCollider`

Collider

#### Defined in

[packages/3d/src/FComponent.ts:51](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L51)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Defined in

[packages/3d/src/FComponent.ts:36](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L36)

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RigidBody

#### Defined in

[packages/3d/src/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L47)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Defined in

[packages/3d/src/FComponent.ts:31](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L31)

***

### sensor?

> `optional` **sensor**: `FCollider`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Defined in

[packages/3d/src/FComponent.ts:55](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L55)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Defined in

[packages/3d/src/FComponent.ts:41](https://github.com/fibbojs/fibbo/blob/52fe7d6d53b5d477c42887a359f3b480f4835068/packages/3d/src/FComponent.ts#L41)
