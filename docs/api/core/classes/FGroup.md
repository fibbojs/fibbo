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

[core/src/FGroup.ts:19](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/core/src/FGroup.ts#L19)

## Methods

### addComponent()

> **addComponent**(`component`): `void`

Add a component to the group.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FGroup.ts:26](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/core/src/FGroup.ts#L26)

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

[core/src/FGroup.ts:41](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/core/src/FGroup.ts#L41)

***

### removeComponent()

> **removeComponent**(`component`): `void`

Remove a component from the group.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FGroup.ts:33](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/core/src/FGroup.ts#L33)

## Properties

### components

> **components**: [`FComponent`](FComponent.md)[] = `[]`

The components in the group.

#### Defined in

[core/src/FGroup.ts:11](https://github.com/fibbojs/fibbo/blob/d4e27f21b39d7470557f457413047335ba5e0d67/packages/core/src/FGroup.ts#L11)
