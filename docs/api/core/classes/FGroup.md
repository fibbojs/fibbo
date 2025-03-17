[@fibbojs](/api/index) / [core](/api/core) / FGroup

# Class: ~~`abstract` FGroup~~

The base class for all groups of components in Fibbo.

## Deprecated

Marked as deprecated while we are not sure if we will keep this class.

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

[core/src/FGroup.ts:20](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FGroup.ts#L20)

## Methods

### ~~addComponent()~~

> **addComponent**(`component`): `void`

Add a component to the group.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FGroup.ts:27](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FGroup.ts#L27)

***

### ~~frame()~~

> **frame**(`delta`): `void`

Update all components in the group.

#### Parameters

• **delta**: `number`

The time since the last frame.

#### Returns

`void`

#### Defined in

[core/src/FGroup.ts:42](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FGroup.ts#L42)

***

### ~~removeComponent()~~

> **removeComponent**(`component`): `void`

Remove a component from the group.

#### Parameters

• **component**: [`FComponent`](FComponent.md)

#### Returns

`void`

#### Defined in

[core/src/FGroup.ts:34](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FGroup.ts#L34)

## Properties

### ~~components~~

> **components**: [`FComponent`](FComponent.md)[] = `[]`

The components in the group.

#### Defined in

[core/src/FGroup.ts:12](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/FGroup.ts#L12)
