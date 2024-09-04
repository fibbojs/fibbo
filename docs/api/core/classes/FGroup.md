[@fibbojs](/api/index) / [core](/api/core) / FGroup

# Class: `abstract` FGroup

## Description

The base class for all groups of components in Fibbo.

## Constructors

### new FGroup()

> **new FGroup**(`options`): [`FGroup`](FGroup.md)

#### Parameters

• **options** = `...`

The options for the group.

• **options.components**: [`FComponent`](FComponent.md)[]

The components to add to the group.

#### Returns

[`FGroup`](FGroup.md)

#### Description

Initialize the group with a list of components.
If no components are provided, the group will be empty.

#### Defined in

[packages/core/src/FGroup.ts:18](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/core/src/FGroup.ts#L18)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Description

Add a component to the group.

#### Defined in

[packages/core/src/FGroup.ts:25](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/core/src/FGroup.ts#L25)

***

### onFrame()

> **onFrame**(`delta`): `void`

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Description

Update all components in the group.

#### Defined in

[packages/core/src/FGroup.ts:40](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/core/src/FGroup.ts#L40)

***

### removeComponent()

> **removeComponent**(`component`): `void`

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Description

Remove a component from the group.

#### Defined in

[packages/core/src/FGroup.ts:32](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/core/src/FGroup.ts#L32)

## Properties

### components

> **components**: [`FComponent`](FComponent.md)[] = `[]`

#### Description

The components in the group.

#### Defined in

[packages/core/src/FGroup.ts:10](https://github.com/fibbojs/fibbo/blob/22e935206e75566f1a9d7fdd87a9aaa5b0efc202/packages/core/src/FGroup.ts#L10)
