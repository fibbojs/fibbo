[@fibbojs](/api/index) / [core](/api/core) / FCamera

# Class: `abstract` FCamera

The base class for cameras in Fibbo.

## Extends

- [`FComponent`](FComponent.md)

## Constructors

### new FCamera()

> **new FCamera**(`scene`): [`FCamera`](FCamera.md)

#### Parameters

• **scene**: [`FScene`](FScene.md)

#### Returns

[`FCamera`](FCamera.md)

#### Overrides

[`FComponent`](FComponent.md).[`constructor`](FComponent.md#constructors)

#### Defined in

[core/src/FCamera.ts:9](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FCamera.ts#L9)

## Methods

### addController()

> **addController**(`controller`): `void`

Add a controller to the component.

#### Parameters

• **controller**: [`FController`](FController.md)

The controller to add.

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`addController`](FComponent.md#addcontroller)

#### Defined in

[core/src/FComponent.ts:98](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L98)

***

### emitCollisionWith()

> **emitCollisionWith**(`options`): `void`

Emit a collision event with a given class or object.

#### Parameters

• **options**

The options for the collision event.

• **options.class?**: `any`

The class to emit the collision event with.

• **options.component?**: [`FComponent`](FComponent.md)

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

[core/src/FComponent.ts:240](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L240)

***

### emitOnLoaded()

> **emitOnLoaded**(): `void`

Emit the onLoaded callbacks.

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`emitOnLoaded`](FComponent.md#emitonloaded)

#### Defined in

[core/src/FComponent.ts:162](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L162)

***

### frame()

> **frame**(`delta`): `void`

Update the component. Should be called every frame.
The purpose of this method is to render the component, its mesh/sprite, and its properties.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`frame`](FComponent.md#frame)

#### Defined in

[core/src/FComponent.ts:129](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L129)

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

[core/src/FComponent.ts:190](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L190)

***

### onFrame()

> **onFrame**(`callback`): `void`

Add a callback to be called every frame.

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`onFrame`](FComponent.md#onframe)

#### Defined in

[core/src/FComponent.ts:147](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L147)

***

### onLoaded()

> **onLoaded**(`callback`): `void`

Add a callback to be called when the component is loaded (could be a texture, a 3D model, etc).

#### Parameters

• **callback**

The callback function.

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`onLoaded`](FComponent.md#onloaded)

#### Defined in

[core/src/FComponent.ts:155](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L155)

***

### removeController()

> **removeController**(`controller`): `void`

Remove a controller from the component.

#### Parameters

• **controller**: [`FController`](FController.md)

The controller to remove.

#### Returns

`void`

#### Inherited from

[`FComponent`](FComponent.md).[`removeController`](FComponent.md#removecontroller)

#### Defined in

[core/src/FComponent.ts:110](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L110)

## Properties

### \_\_CALLBACKS\_ON\_COLLISION\_\_

> **\_\_CALLBACKS\_ON\_COLLISION\_\_**: `object` = `{}`

Callbacks for when a collision occurs with a given class or object.
It is a dictionary where the key is the class name or object id and the value is an array of callbacks.

#### Index Signature

 \[`key`: `string`\]: (`data`) => `void`[]

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_COLLISION__`](FComponent.md#__callbacks_on_collision__)

#### Defined in

[core/src/FComponent.ts:54](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L54)

***

### \_\_CALLBACKS\_ON\_FRAME\_\_

> **\_\_CALLBACKS\_ON\_FRAME\_\_**: () => `void`[] = `[]`

Callbacks for when a frame is rendered.

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_FRAME__`](FComponent.md#__callbacks_on_frame__)

#### Defined in

[core/src/FComponent.ts:43](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L43)

***

### \_\_CALLBACKS\_ON\_LOADED\_\_

> **\_\_CALLBACKS\_ON\_LOADED\_\_**: () => `void`[] = `[]`

Callbacks for when the component is loaded (could be a texture, a 3D model, etc).

#### Inherited from

[`FComponent`](FComponent.md).[`__CALLBACKS_ON_LOADED__`](FComponent.md#__callbacks_on_loaded__)

#### Defined in

[core/src/FComponent.ts:48](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L48)

***

### \_\_ID\_\_

> **\_\_ID\_\_**: `number`

Unique identifier for the component.
It is generated automatically.

#### Inherited from

[`FComponent`](FComponent.md).[`__ID__`](FComponent.md#__id__)

#### Defined in

[core/src/FComponent.ts:38](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L38)

***

### \_\_IS\_2D\_\_

> **\_\_IS\_2D\_\_**: `boolean` = `false`

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_2D__`](FComponent.md#__is_2d__)

#### Defined in

[core/src/FComponent.ts:32](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L32)

***

### \_\_IS\_3D\_\_

> **\_\_IS\_3D\_\_**: `boolean` = `false`

Internal flags

#### Inherited from

[`FComponent`](FComponent.md).[`__IS_3D__`](FComponent.md#__is_3d__)

#### Defined in

[core/src/FComponent.ts:31](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L31)

***

### controllers

> **controllers**: [`FController`](FController.md)[]

The controllers attached to the component.

#### Inherited from

[`FComponent`](FComponent.md).[`controllers`](FComponent.md#controllers)

#### Defined in

[core/src/FComponent.ts:64](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L64)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene the component is attached to.

#### Inherited from

[`FComponent`](FComponent.md).[`scene`](FComponent.md#scene)

#### Defined in

[core/src/FComponent.ts:59](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/FComponent.ts#L59)
