[@fibbojs](/api/index) / [3d](/api/3d) / FSphere

# Class: FSphere

## Description

A simple sphere model in Fibbo.

## Example

```ts
import { FScene, FSphere } from '@fibbojs/3d'

const scene = new FScene()

const sphere = new FSphere(scene)
scene.addComponent(sphere)
```

## Extends

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`position`](FPolyhedron.md#position)

#### Defined in

[packages/3d/src/core/FComponent.ts:381](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L381)

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

[`FPolyhedron`](FPolyhedron.md).[`rotation`](FPolyhedron.md#rotation)

#### Defined in

[packages/3d/src/core/FComponent.ts:413](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L413)

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

[`FPolyhedron`](FPolyhedron.md).[`rotationDegree`](FPolyhedron.md#rotationdegree)

#### Defined in

[packages/3d/src/core/FComponent.ts:445](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L445)

***

### rotationDegreeX

> `get` **rotationDegreeX**(): `number`

> `set` **rotationDegreeX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rotationDegreeX`](FPolyhedron.md#rotationdegreex)

#### Defined in

[packages/3d/src/core/FComponent.ts:457](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L457)

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rotationDegreeY`](FPolyhedron.md#rotationdegreey)

#### Defined in

[packages/3d/src/core/FComponent.ts:465](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L465)

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rotationDegreeZ`](FPolyhedron.md#rotationdegreez)

#### Defined in

[packages/3d/src/core/FComponent.ts:473](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L473)

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rotationX`](FPolyhedron.md#rotationx)

#### Defined in

[packages/3d/src/core/FComponent.ts:421](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L421)

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rotationY`](FPolyhedron.md#rotationy)

#### Defined in

[packages/3d/src/core/FComponent.ts:429](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L429)

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rotationZ`](FPolyhedron.md#rotationz)

#### Defined in

[packages/3d/src/core/FComponent.ts:437](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L437)

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

[`FPolyhedron`](FPolyhedron.md).[`scale`](FPolyhedron.md#scale)

#### Defined in

[packages/3d/src/core/FComponent.ts:481](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L481)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scaleX`](FPolyhedron.md#scalex)

#### Defined in

[packages/3d/src/core/FComponent.ts:489](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L489)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scaleY`](FPolyhedron.md#scaley)

#### Defined in

[packages/3d/src/core/FComponent.ts:497](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L497)

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scaleZ`](FPolyhedron.md#scalez)

#### Defined in

[packages/3d/src/core/FComponent.ts:505](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L505)

***

### x

> `get` **x**(): `number`

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`x`](FPolyhedron.md#x)

#### Defined in

[packages/3d/src/core/FComponent.ts:389](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L389)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`y`](FPolyhedron.md#y)

#### Defined in

[packages/3d/src/core/FComponent.ts:397](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L397)

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`z`](FPolyhedron.md#z)

#### Defined in

[packages/3d/src/core/FComponent.ts:405](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L405)

## Constructors

### new FSphere()

> **new FSphere**(`scene`, `options`?): [`FSphere`](FSphere.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FComponentOptions`](../interfaces/FComponentOptions.md)

#### Returns

[`FSphere`](FSphere.md)

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`constructor`](FPolyhedron.md#constructors)

#### Defined in

[packages/3d/src/polyhedrons/FSphere.ts:23](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/polyhedrons/FSphere.ts#L23)

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

[`FPolyhedron`](FPolyhedron.md).[`emitCollisionWith`](FPolyhedron.md#emitcollisionwith)

#### Defined in

packages/core/dist/index.d.ts:100

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

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`initCollider`](FPolyhedron.md#initcollider)

#### Defined in

[packages/3d/src/polyhedrons/FSphere.ts:42](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/polyhedrons/FSphere.ts#L42)

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

#### Overrides

[`FPolyhedron`](FPolyhedron.md).[`initRigidBody`](FPolyhedron.md#initrigidbody)

#### Defined in

[packages/3d/src/polyhedrons/FSphere.ts:35](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/polyhedrons/FSphere.ts#L35)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`initSensor`](FPolyhedron.md#initsensor)

#### Defined in

[packages/3d/src/core/FComponent.ts:360](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L360)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`onCollisionWith`](FPolyhedron.md#oncollisionwith)

#### Defined in

[packages/3d/src/core/FComponent.ts:369](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L369)

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

[`FPolyhedron`](FPolyhedron.md).[`onFrame`](FPolyhedron.md#onframe)

#### Defined in

[packages/3d/src/polyhedrons/FSphere.ts:31](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/polyhedrons/FSphere.ts#L31)

***

### setColor()

> **setColor**(`color`): `void`

#### Parameters

• **color**: `number`

The color of the polyhedron.

#### Returns

`void`

#### Description

Change the color of the polyhedron.

#### Example

```ts
cube.setColor(0xff0000)
```

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setColor`](FPolyhedron.md#setcolor)

#### Defined in

[packages/3d/src/polyhedrons/FPolyhedron.ts:38](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/polyhedrons/FPolyhedron.ts#L38)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setPosition`](FPolyhedron.md#setposition)

#### Defined in

[packages/3d/src/core/FComponent.ts:179](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L179)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setRotation`](FPolyhedron.md#setrotation)

#### Defined in

[packages/3d/src/core/FComponent.ts:244](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L244)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setRotationDegree`](FPolyhedron.md#setrotationdegree)

#### Defined in

[packages/3d/src/core/FComponent.ts:268](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L268)

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

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`setScale`](FPolyhedron.md#setscale)

#### Defined in

[packages/3d/src/core/FComponent.ts:203](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L203)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__CALLBACKS_ON_COLLISION__`](FPolyhedron.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:47

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__ID__`](FPolyhedron.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:42

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__IS_2D__`](FPolyhedron.md#__is_2d__)

#### Defined in

packages/core/dist/index.d.ts:37

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`__IS_3D__`](FPolyhedron.md#__is_3d__)

#### Defined in

[packages/3d/src/core/FComponent.ts:27](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L27)

***

### collider?

> `optional` **collider**: [`FCollider`](FCollider.md)

Collider

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`collider`](FPolyhedron.md#collider)

#### Defined in

[packages/3d/src/core/FComponent.ts:56](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L56)

***

### controller?

> `optional` **controller**: [`FController`](FController.md)

The controller attached to the component.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`controller`](FPolyhedron.md#controller)

#### Defined in

[packages/3d/src/core/FComponent.ts:36](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L36)

***

### mesh

> **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

mesh is redefined from FComponent without the ? because it is
directly available after the constructor, as a polyhedron is created synchronously.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`mesh`](FPolyhedron.md#mesh)

#### Defined in

[packages/3d/src/polyhedrons/FPolyhedron.ts:16](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/polyhedrons/FPolyhedron.ts#L16)

***

### rigidBody?

> `optional` **rigidBody**: [`FRigidBody`](FRigidBody.md)

RigidBody

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`rigidBody`](FPolyhedron.md#rigidbody)

#### Defined in

[packages/3d/src/core/FComponent.ts:52](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L52)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`scene`](FPolyhedron.md#scene)

#### Defined in

[packages/3d/src/core/FComponent.ts:32](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L32)

***

### sensor?

> `optional` **sensor**: [`FRigidBody`](FRigidBody.md)

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`sensor`](FPolyhedron.md#sensor)

#### Defined in

[packages/3d/src/core/FComponent.ts:60](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L60)

***

### transform

> **transform**: [`FTransform`](FTransform.md)

Transforms

#### Inherited from

[`FPolyhedron`](FPolyhedron.md).[`transform`](FPolyhedron.md#transform)

#### Defined in

[packages/3d/src/core/FComponent.ts:46](https://github.com/fibbojs/fibbo/blob/b15d2db28a257e995075ea40c3de44dde73dcbf1/packages/3d/src/core/FComponent.ts#L46)
