[@fibbojs](/api/index) / [3d](/api/3d) / FComponent3d

# Class: `abstract` FComponent3d

## Description

The base class for all 3D objects in FibboJS.

## Extends

- `FComponent`

## Extended by

- [`FCharacter3d`](FCharacter3d.md)
- [`FGLTF`](FGLTF.md)
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

[packages/3d/src/FComponent3d.ts:484](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L484)

***

### rotationDegreeY

> `get` **rotationDegreeY**(): `number`

> `set` **rotationDegreeY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:492](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L492)

***

### rotationDegreeZ

> `get` **rotationDegreeZ**(): `number`

> `set` **rotationDegreeZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:500](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L500)

***

### rotationX

> `get` **rotationX**(): `number`

> `set` **rotationX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:460](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L460)

***

### rotationY

> `get` **rotationY**(): `number`

> `set` **rotationY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:468](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L468)

***

### rotationZ

> `get` **rotationZ**(): `number`

> `set` **rotationZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:476](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L476)

***

### scaleX

> `get` **scaleX**(): `number`

> `set` **scaleX**(`x`): `void`

#### Parameters

• **x**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:508](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L508)

***

### scaleY

> `get` **scaleY**(): `number`

> `set` **scaleY**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:516](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L516)

***

### scaleZ

> `get` **scaleZ**(): `number`

> `set` **scaleZ**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:524](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L524)

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

[packages/3d/src/FComponent3d.ts:436](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L436)

***

### y

> `get` **y**(): `number`

> `set` **y**(`y`): `void`

#### Parameters

• **y**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:444](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L444)

***

### z

> `get` **z**(): `number`

> `set` **z**(`z`): `void`

#### Parameters

• **z**: `number`

#### Returns

`number`

#### Defined in

[packages/3d/src/FComponent3d.ts:452](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L452)

## Constructors

### new FComponent3d()

> **new FComponent3d**(`scene`, `options`?): [`FComponent3d`](FComponent3d.md)

#### Parameters

• **scene**: [`FScene3d`](FScene3d.md)

The 3D scene where the component will be added.

• **options?**: [`FComponent3dOptions`](../interfaces/FComponent3dOptions.md)

The options for the component.

#### Returns

[`FComponent3d`](FComponent3d.md)

#### Overrides

`FComponent.constructor`

#### Defined in

[packages/3d/src/FComponent3d.ts:101](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L101)

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

`FComponent.emitCollisionWith`

#### Defined in

packages/core/dist/index.d.ts:65

***

### initCollider()

> **initCollider**(`options`?): `void`

#### Parameters

• **options?**: [`FComponent3dOptions__initCollider`](../interfaces/FComponent3dOptions__initCollider.md)

The options for the collider.

#### Returns

`void`

#### Description

Only init a collider for the component, without a rigid body.
This is useful for static objects.

#### Example

```ts
component.initCollider({
 position: new THREE.Vector3(0, 1, 0),
 scale: new THREE.Vector3(1, 1, 1),
 rotation: new THREE.Vector3(0, 0, 0),
 shape: F3dShapes.CUBE
})
```

#### Defined in

[packages/3d/src/FComponent3d.ts:394](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L394)

***

### initRigidBody()

> **initRigidBody**(`options`?): `void`

#### Parameters

• **options?**: [`FComponent3dOptions__initRigidBody`](../interfaces/FComponent3dOptions__initRigidBody.md)

The options for the rigid body.

#### Returns

`void`

#### Description

Init a rigid body for the component.

#### Example

```ts
component.initRigidBody({
 position: new THREE.Vector3(0, 1, 0),
 scale: new THREE.Vector3(1, 1, 1),
 rotation: new THREE.Vector3(0, 0, 0),
 shape: F3dShapes.CUBE
})
```

#### Defined in

[packages/3d/src/FComponent3d.ts:293](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L293)

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

`FComponent.onCollisionWith`

#### Defined in

[packages/3d/src/FComponent3d.ts:424](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L424)

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

[packages/3d/src/FComponent3d.ts:129](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L129)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:168](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L168)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:227](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L227)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:250](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L250)

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

#### Defined in

[packages/3d/src/FComponent3d.ts:187](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L187)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object`

#### Index Signature

 \[`key`: `string`\]: () => `void`[]

#### Description

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Inherited from

`FComponent.__CALLBACKS_ON_COLLISION__`

#### Defined in

packages/core/dist/index.d.ts:17

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

#### Description

Unique identifier for the component.
It is generated automatically.

#### Inherited from

`FComponent.__ID__`

#### Defined in

packages/core/dist/index.d.ts:12

***

### collider?

> `optional` **collider**: `Collider`

RAPIER Collider

#### Defined in

[packages/3d/src/FComponent3d.ts:79](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L79)

***

### mesh?

> `optional` **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

Mesh

#### Defined in

[packages/3d/src/FComponent3d.ts:55](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L55)

***

### position

> **position**: `Vector3`

The position of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:61](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L61)

***

### rigidBody?

> `optional` **rigidBody**: `RigidBody`

RAPIER RigidBody

#### Defined in

[packages/3d/src/FComponent3d.ts:75](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L75)

***

### rotation

> **rotation**: `Vector3`

The rotation of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:69](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L69)

***

### scale

> **scale**: `Vector3`

The scale of the component.

#### Defined in

[packages/3d/src/FComponent3d.ts:65](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L65)

***

### scene

> **scene**: [`FScene3d`](FScene3d.md)

The scene which the component is in.

#### Defined in

[packages/3d/src/FComponent3d.ts:50](https://github.com/fibbojs/fibbo/blob/cb7d92d6e3e9106d66f5bb89ed29f3d87739ca2e/packages/3d/src/FComponent3d.ts#L50)
