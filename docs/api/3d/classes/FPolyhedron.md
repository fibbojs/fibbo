[@fibbojs](/api/index) / [3d](/api/3d) / FPolyhedron

# Class: `abstract` FPolyhedron

A simple polyhedron model in Fibbo.
Defaults to a cube.

## Extends

- [`FComponent`](FComponent.md)

## Extended by

- [`FCapsule`](FCapsule.md)
- [`FCuboid`](FCuboid.md)
- [`FSphere`](FSphere.md)

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

#### Inherited from

[`FComponent`](FComponent.md).[`position`](FComponent.md#position)

#### Defined in

[3d/src/core/FComponent.ts:407](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L407)

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

#### Inherited from

[`FComponent`](FComponent.md).[`rotation`](FComponent.md#rotation)

#### Defined in

[3d/src/core/FComponent.ts:439](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L439)

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

#### Inherited from

[`FComponent`](FComponent.md).[`rotationDegree`](FComponent.md#rotationdegree)

#### Defined in

[3d/src/core/FComponent.ts:471](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L471)

***

### rotationDegreeX

> `get` **rotationDegreeX**(): `number`

> `set` **rotationDegreeX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationDegreeX`](FComponent.md#rotationdegreex)

#### Defined in

[3d/src/core/FComponent.ts:483](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L483)

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationDegreeY`](FComponent.md#rotationdegreey)

#### Defined in

[3d/src/core/FComponent.ts:491](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L491)

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationDegreeZ`](FComponent.md#rotationdegreez)

#### Defined in

[3d/src/core/FComponent.ts:499](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L499)

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationX`](FComponent.md#rotationx)

#### Defined in

[3d/src/core/FComponent.ts:447](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L447)

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationY`](FComponent.md#rotationy)

#### Defined in

[3d/src/core/FComponent.ts:455](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L455)

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`rotationZ`](FComponent.md#rotationz)

#### Defined in

[3d/src/core/FComponent.ts:463](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L463)

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

#### Inherited from

[`FComponent`](FComponent.md).[`scale`](FComponent.md#scale)

#### Defined in

[3d/src/core/FComponent.ts:507](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L507)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`scaleX`](FComponent.md#scalex)

#### Defined in

[3d/src/core/FComponent.ts:515](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L515)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`scaleY`](FComponent.md#scaley)

#### Defined in

[3d/src/core/FComponent.ts:523](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L523)

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`scaleZ`](FComponent.md#scalez)

#### Defined in

[3d/src/core/FComponent.ts:531](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L531)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`x`](FComponent.md#x)

#### Defined in

[3d/src/core/FComponent.ts:415](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L415)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`y`](FComponent.md#y)

#### Defined in

[3d/src/core/FComponent.ts:423](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L423)

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FComponent`](FComponent.md).[`z`](FComponent.md#z)

#### Defined in

[3d/src/core/FComponent.ts:431](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L431)

## Constructors

### new FPolyhedron()

> **new FPolyhedron**(`scene`, `options`?): [`FPolyhedron`](FPolyhedron.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

#### Returns

[`FPolyhedron`](FPolyhedron.md)

#### Overrides

[`FComponent`](FComponent.md).[`constructor`](FComponent.md#constructors)

#### Defined in

[3d/src/polyhedrons/FPolyhedron.ts:18](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/polyhedrons/FPolyhedron.ts#L18)

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

[`FComponent`](FComponent.md).[`emitCollisionWith`](FComponent.md#emitcollisionwith)

#### Defined in

core/dist/index.d.ts:118

***

### initCollider()

> **initCollider**(`options`?): `void`

Only init a collider for the component, without a rigidBody.
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

#### Inherited from

[`FComponent`](FComponent.md).[`initCollider`](FComponent.md#initcollider)

#### Defined in

[3d/src/core/FComponent.ts:361](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L361)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

Init a rigidBody for the component.

#### Parameters

• **options?**: [`FRigidBodyOptions`](../interfaces/FRigidBodyOptions.md)

The options for the rigidBody.

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

#### Inherited from

[`FComponent`](FComponent.md).[`initRigidBody`](FComponent.md#initrigidbody)

#### Defined in

[3d/src/core/FComponent.ts:332](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L332)

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

#### Inherited from

[`FComponent`](FComponent.md).[`initSensor`](FComponent.md#initsensor)

#### Defined in

[3d/src/core/FComponent.ts:385](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L385)

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

#### Inherited from

[`FComponent`](FComponent.md).[`onCollisionWith`](FComponent.md#oncollisionwith)

#### Defined in

[3d/src/core/FComponent.ts:394](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L394)

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

[`FComponent`](FComponent.md).[`onFrame`](FComponent.md#onframe)

#### Defined in

[3d/src/polyhedrons/FPolyhedron.ts:35](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/polyhedrons/FPolyhedron.ts#L35)

***

### setColor()

> **setColor**(`color`): `void`

Change the color of the polyhedron.

#### Parameters

• **color**: `number`

The color of the polyhedron.

#### Returns

`void`

#### Example

```ts
cube.setColor(0xFF0000)
```

#### Defined in

[3d/src/polyhedrons/FPolyhedron.ts:47](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/polyhedrons/FPolyhedron.ts#L47)

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

#### Inherited from

[`FComponent`](FComponent.md).[`setPosition`](FComponent.md#setposition)

#### Defined in

[3d/src/core/FComponent.ts:204](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L204)

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

#### Inherited from

[`FComponent`](FComponent.md).[`setRotation`](FComponent.md#setrotation)

#### Defined in

[3d/src/core/FComponent.ts:269](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L269)

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

#### Inherited from

[`FComponent`](FComponent.md).[`setRotationDegree`](FComponent.md#setrotationdegree)

#### Defined in

[3d/src/core/FComponent.ts:293](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L293)

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

#### Inherited from

[`FComponent`](FComponent.md).[`setScale`](FComponent.md#setscale)

#### Defined in

[3d/src/core/FComponent.ts:228](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L228)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_COLLISION__`](FComponent.md#__callbacks_on_collision__)

#### Defined in

core/dist/index.d.ts:58

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent`](FComponent.md).[`__ID__`](FComponent.md#__id__)

#### Defined in

core/dist/index.d.ts:53

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_2D__`](FComponent.md#__is_2d__)

#### Defined in

core/dist/index.d.ts:48

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_3D__`](FComponent.md#__is_3d__)

#### Defined in

[3d/src/core/FComponent.ts:28](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L28)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Inherited from

[`FComponent`](FComponent.md).[`collider`](FComponent.md#collider)

#### Defined in

[3d/src/core/FComponent.ts:57](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L57)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FComponent`](FComponent.md).[`controller`](FComponent.md#controller)

#### Defined in

[3d/src/core/FComponent.ts:37](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L37)

***

### mesh

> **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Overrides

[`FComponent`](FComponent.md).[`mesh`](FComponent.md#mesh)

#### Defined in

[3d/src/polyhedrons/FPolyhedron.ts:16](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/polyhedrons/FPolyhedron.ts#L16)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Inherited from

[`FComponent`](FComponent.md).[`rigidBody`](FComponent.md#rigidbody)

#### Defined in

[3d/src/core/FComponent.ts:53](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L53)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FComponent`](FComponent.md).[`scene`](FComponent.md#scene)

#### Defined in

[3d/src/core/FComponent.ts:33](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L33)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FComponent`](FComponent.md).[`sensor`](FComponent.md#sensor)

#### Defined in

[3d/src/core/FComponent.ts:61](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L61)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FComponent`](FComponent.md).[`transform`](FComponent.md#transform)

#### Defined in

[3d/src/core/FComponent.ts:47](https://github.com/fibbojs/fibbo/blob/e3aaabaf7a5c47833ea6611fca008a9ca7b66ba5/packages/3d/src/core/FComponent.ts#L47)
