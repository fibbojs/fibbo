[@fibbojs](/api/index) / [core](/api/core) / FGroup

# Class: `abstract` FGroup

The base class for all groups of components in Fibbo.

## Constructors

### new FGroup()

> **new FGroup**(`options`): [`FGroup`](FGroup.md)

Initialize the group with a list of components.
If no components are provided, the group will be empty.

#### Parameters

• **options** = `...`

The options for the group.

• **options.components**: [`FComponent`](FComponent.md)[]

The components to add to the group.

#### Returns

[`FGroup`](FGroup.md)

#### Defined in

[core/src/FGroup.ts:18](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FGroup.ts#L18)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

Add a component to the group.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FGroup.ts:25](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FGroup.ts#L25)

***

### onFrame()

> **onFrame**(`delta`): `void`

Update all components in the group.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Defined in

[core/src/FGroup.ts:40](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FGroup.ts#L40)

***

### removeComponent()

> **removeComponent**(`component`): `void`

Remove a component from the group.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FGroup.ts:32](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FGroup.ts#L32)

## Properties

### components

> **components**: [`FComponent`](FComponent.md)[] = `[]`

The components in the group.

#### Defined in

[core/src/FGroup.ts:10](https://github.com/fibbojs/fibbo/blob/fc0b9ae1dcd24855b80ad46a69cb7005bbcce7f4/packages/core/src/FGroup.ts#L10)
