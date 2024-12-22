[@fibbojs](/api/index) / [core](/api/core) / Pipeline

# Class: `abstract` Pipeline

Pipeline class that abstract the usage of a web worker.
This is used for running background tasks that are generally CPU intensive.

## Extended by

- [`PhysicPipeline`](PhysicPipeline.md)
- [`RenderPipeline`](RenderPipeline.md)

## Constructors

### new Pipeline()

> **new Pipeline**(`sw`): [`Pipeline`](Pipeline.md)

#### Parameters

• **sw**: `DedicatedWorkerGlobalScope`

#### Returns

[`Pipeline`](Pipeline.md)

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:24](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L24)

## Methods

### frame()

> `abstract` **frame**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:32](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L32)

***

### handleMessage()

> **handleMessage**(`event`): `void`

#### Parameters

• **event**: `MessageEvent`\<`any`\>

#### Returns

`void`

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:34](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L34)

## Properties

### frameRate

> **frameRate**: `number` = `30`

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:22](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L22)

***

### intervalId

> **intervalId**: `null` \| `Timeout` = `null`

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:21](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L21)

***

### state

> **state**: [`PipelineState`](../enumerations/PipelineState.md)

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:20](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L20)

***

### sw

> **sw**: `DedicatedWorkerGlobalScope`

#### Defined in

[packages/core/src/pipeline/Pipeline.ts:19](https://github.com/fibbojs/fibbo/blob/ca0e011a21c87d9c4978217c9b9041de6ed31595/packages/core/src/pipeline/Pipeline.ts#L19)
