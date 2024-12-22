[@fibbojs](/api/index) / [core](/api/core) / PhysicPipeline

# Class: PhysicPipeline

Pipeline to handle physic simulation tasks.

## Extends

- [`Pipeline`](Pipeline.md)

## Constructors

### new PhysicPipeline()

> **new PhysicPipeline**(`sw`): [`PhysicPipeline`](PhysicPipeline.md)

#### Parameters

• **sw**: `DedicatedWorkerGlobalScope`

#### Returns

[`PhysicPipeline`](PhysicPipeline.md)

#### Overrides

[`Pipeline`](Pipeline.md).[`constructor`](Pipeline.md#constructors)

#### Defined in

[packages/core/src/pipeline/PhysicPipeline.ts:8](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/PhysicPipeline.ts#L8)

## Methods

### frame()

> **frame**(): `void`

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`frame`](Pipeline.md#frame)

#### Defined in

[packages/core/src/pipeline/PhysicPipeline.ts:12](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/PhysicPipeline.ts#L12)

***

### handleMessage()

> **handleMessage**(`event`): `void`

#### Parameters

• **event**: `MessageEvent`\<`any`\>

#### Returns

`void`

#### Inherited from

[`Pipeline`](Pipeline.md).[`handleMessage`](Pipeline.md#handlemessage)

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:34](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L34)

## Properties

### frameRate

> **frameRate**: `number` = `30`

#### Inherited from

[`Pipeline`](Pipeline.md).[`frameRate`](Pipeline.md#framerate)

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:22](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L22)

***

### intervalId

> **intervalId**: `null` \| `Timeout` = `null`

#### Inherited from

[`Pipeline`](Pipeline.md).[`intervalId`](Pipeline.md#intervalid)

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:21](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L21)

***

### state

> **state**: [`PipelineState`](../enumerations/PipelineState.md)

#### Inherited from

[`Pipeline`](Pipeline.md).[`state`](Pipeline.md#state)

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:20](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L20)

***

### sw

> **sw**: `DedicatedWorkerGlobalScope`

#### Inherited from

[`Pipeline`](Pipeline.md).[`sw`](Pipeline.md#sw)

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:19](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L19)
