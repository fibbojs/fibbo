[@fibbojs](/api/index) / [3d](/api/3d) / FCharacterKinematic

# Class: `abstract` FCharacterKinematic

## Description

An abstract pre-defined character controller based on Kinematic rigidbodies.

## Extends

- [`FCharacter`](FCharacter.md)

## Extended by

- [`FCharacterKP`](FCharacterKP.md)
- [`FCharacterKV`](FCharacterKV.md)

## Accessors

### rotationDegreeX

> `get` **rotationDegreeX**(): `number`

> `set` **rotationDegreeX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`rotationDegreeX`](FCharacter.md#rotationdegreex)

#### Defined in

packages/3d/src/FComponent.ts:431

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`rotationDegreeY`](FCharacter.md#rotationdegreey)

#### Defined in

packages/3d/src/FComponent.ts:439

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`rotationDegreeZ`](FCharacter.md#rotationdegreez)

#### Defined in

packages/3d/src/FComponent.ts:447

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`rotationX`](FCharacter.md#rotationx)

#### Defined in

packages/3d/src/FComponent.ts:407

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`rotationY`](FCharacter.md#rotationy)

#### Defined in

packages/3d/src/FComponent.ts:415

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`rotationZ`](FCharacter.md#rotationz)

#### Defined in

packages/3d/src/FComponent.ts:423

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`scaleX`](FCharacter.md#scalex)

#### Defined in

packages/3d/src/FComponent.ts:455

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`scaleY`](FCharacter.md#scaley)

#### Defined in

packages/3d/src/FComponent.ts:463

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`scaleZ`](FCharacter.md#scalez)

#### Defined in

packages/3d/src/FComponent.ts:471

***

### x

> `get` **x**(): `number`

Setters & getters for transform properties

> `set` **x**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`x`](FCharacter.md#x)

#### Defined in

packages/3d/src/FComponent.ts:383

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`y`](FCharacter.md#y)

#### Defined in

packages/3d/src/FComponent.ts:391

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Inherited from

[`FCharacter`](FCharacter.md).[`z`](FCharacter.md#z)

#### Defined in

packages/3d/src/FComponent.ts:399

## Constructors

### new FCharacterKinematic()

> **new FCharacterKinematic**(`scene`, `options`?): [`FCharacterKinematic`](FCharacterKinematic.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

• **options?**: [`FCharacterOptions`](../interfaces/FCharacterOptions.md)

#### Returns

[`FCharacterKinematic`](FCharacterKinematic.md)

#### Overrides

[`FCharacter`](FCharacter.md).[`constructor`](FCharacter.md#constructors)

#### Defined in

packages/3d/src/character/FCharacterKinematic.ts:16

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

[`FCharacter`](FCharacter.md).[`emitCollisionWith`](FCharacter.md#emitcollisionwith)

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

#### Inherited from

[`FCharacter`](FCharacter.md).[`initCollider`](FCharacter.md#initcollider)

#### Defined in

packages/3d/src/character/FCharacter.ts:119

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

#### Inherited from

[`FCharacter`](FCharacter.md).[`initRigidBody`](FCharacter.md#initrigidbody)

#### Defined in

packages/3d/src/character/FCharacter.ts:112

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

[`FCharacter`](FCharacter.md).[`initSensor`](FCharacter.md#initsensor)

#### Defined in

packages/3d/src/character/FCharacter.ts:126

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

[`FCharacter`](FCharacter.md).[`onCollisionWith`](FCharacter.md#oncollisionwith)

#### Defined in

packages/3d/src/FComponent.ts:371

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

#### Inherited from

[`FCharacter`](FCharacter.md).[`onFrame`](FCharacter.md#onframe)

#### Defined in

packages/3d/src/FComponent.ts:113

***

### setPosition()

> **setPosition**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

The position on the x-axis.

• **y**: `number`

The position on the y-axis.

• **z**: `number`

The position on the z-axis.

#### Returns

`void`

#### Description

Set the position of the component.

#### Example

```ts
component.setPosition(0, 1, 0)
```

#### Inherited from

[`FCharacter`](FCharacter.md).[`setPosition`](FCharacter.md#setposition)

#### Defined in

packages/3d/src/FComponent.ts:185

***

### setRotation()

> **setRotation**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

The rotation in radians on the x-axis.

• **y**: `number`

The rotation in radians on the y-axis.

• **z**: `number`

The rotation in radians on the z-axis.

#### Returns

`void`

#### Description

Set the rotation of the component from radians.

#### Example

```ts
component.setRotation(0, Math.PI / 2, 0)
```

#### Inherited from

[`FCharacter`](FCharacter.md).[`setRotation`](FCharacter.md#setrotation)

#### Defined in

packages/3d/src/FComponent.ts:244

***

### setRotationDegree()

> **setRotationDegree**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

The rotation in degrees on the x-axis.

• **y**: `number`

The rotation in degrees on the y-axis.

• **z**: `number`

The rotation in degrees on the z-axis.

#### Returns

`void`

#### Description

Set the rotation of the component from degrees.

#### Example

```ts
component.setRotationDegree(0, 90, 0)
```

#### Inherited from

[`FCharacter`](FCharacter.md).[`setRotationDegree`](FCharacter.md#setrotationdegree)

#### Defined in

packages/3d/src/FComponent.ts:267

***

### setScale()

> **setScale**(`x`, `y`, `z`): `void`

#### Parameters

• **x**: `number`

The scale on the x-axis.

• **y**: `number`

The scale on the y-axis.

• **z**: `number`

The scale on the z-axis.

#### Returns

`void`

#### Description

Set the scale of the component.

#### Inherited from

[`FCharacter`](FCharacter.md).[`setScale`](FCharacter.md#setscale)

#### Defined in

packages/3d/src/FComponent.ts:204

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

[`FCharacter`](FCharacter.md).[`__CALLBACKS_ON_COLLISION__`](FCharacter.md#__callbacks_on_collision__)

#### Defined in

packages/core/dist/index.d.ts:22

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FCharacter`](FCharacter.md).[`__ID__`](FCharacter.md#__id__)

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean`

#### Inherited from

[`FCharacter`](FCharacter.md).[`__IS_2D__`](FCharacter.md#__is_2d__)

#### Defined in

packages/core/dist/index.d.ts:12

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `true`

Internal flags

#### Inherited from

[`FCharacter`](FCharacter.md).[`__IS_3D__`](FCharacter.md#__is_3d__)

#### Defined in

packages/3d/src/FComponent.ts:25

***

### characterController

> **characterController**: `KinematicCharacterController`

The character controller that will be used to move the character.

#### Defined in

packages/3d/src/character/FCharacterKinematic.ts:14

***

### collider?

> `optional` **collider**: `FCollider`

Collider

#### Inherited from

[`FCharacter`](FCharacter.md).[`collider`](FCharacter.md#collider)

#### Defined in

packages/3d/src/FComponent.ts:59

***

### inputs

> **inputs**: `object`

The inputs that will be used to move the character.

#### backward

> **backward**: `boolean`

#### forward

> **forward**: `boolean`

#### left

> **left**: `boolean`

#### right

> **right**: `boolean`

#### Inherited from

[`FCharacter`](FCharacter.md).[`inputs`](FCharacter.md#inputs)

#### Defined in

packages/3d/src/character/FCharacter.ts:25

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `Group`\<`Object3DEventMap`\>

Mesh

#### Inherited from

[`FCharacter`](FCharacter.md).[`mesh`](FCharacter.md#mesh)

#### Defined in

packages/3d/src/FComponent.ts:35

***

### position

> **position**: `Vector3`

The position of the component.

#### Inherited from

[`FCharacter`](FCharacter.md).[`position`](FCharacter.md#position)

#### Defined in

packages/3d/src/FComponent.ts:41

***

### rigidBody?

> `optional` **rigidBody**: `FRigidBody`

RigidBody

#### Inherited from

[`FCharacter`](FCharacter.md).[`rigidBody`](FCharacter.md#rigidbody)

#### Defined in

packages/3d/src/FComponent.ts:55

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Inherited from

[`FCharacter`](FCharacter.md).[`rotation`](FCharacter.md#rotation)

#### Defined in

packages/3d/src/FComponent.ts:49

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Inherited from

[`FCharacter`](FCharacter.md).[`scale`](FCharacter.md#scale)

#### Defined in

packages/3d/src/FComponent.ts:45

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene which the component is in.

#### Inherited from

[`FCharacter`](FCharacter.md).[`scene`](FCharacter.md#scene)

#### Defined in

packages/3d/src/FComponent.ts:30

***

### sensor?

> `optional` **sensor**: `FCollider`

Sensor (a collider that doesn't collide with other colliders, but still triggers events)

#### Inherited from

[`FCharacter`](FCharacter.md).[`sensor`](FCharacter.md#sensor)

#### Defined in

packages/3d/src/FComponent.ts:63

***

### speed

> **speed**: `number`

The speed of the character.

#### Inherited from

[`FCharacter`](FCharacter.md).[`speed`](FCharacter.md#speed)

#### Defined in

packages/3d/src/character/FCharacter.ts:35
