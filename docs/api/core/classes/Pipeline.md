[@fibbojs](/api/index) / [core](/api/core) / Pipeline

# Class: `abstract` Pipeline

Pipeline class that helps handling many processes at a time.

## Extended by

- [`IntervalPipeline`](IntervalPipeline.md)
- [`StandardPipeline`](StandardPipeline.md)
- [`ThrottledPipeline`](ThrottledPipeline.md)

## Constructors

### new Pipeline()

> **new Pipeline**(): [`Pipeline`](Pipeline.md)

#### Returns

[`Pipeline`](Pipeline.md)

#### Defined in

[core/src/pipeline/Pipeline.ts:30](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/pipeline/Pipeline.ts#L30)

## Methods

### frame()

> `abstract` **frame**(`delta`): `void`

The frame method is the main method that is called by the pipeline.
It should implement the desired behavior of the pipeline.

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Defined in

[core/src/pipeline/Pipeline.ts:40](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/pipeline/Pipeline.ts#L40)

***

### start()

> `abstract` **start**(): `void`

Start the pipeline

#### Returns

`void`

#### Defined in

[core/src/pipeline/Pipeline.ts:45](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/pipeline/Pipeline.ts#L45)

***

### stop()

> `abstract` **stop**(): `void`

Stop the pipeline

#### Returns

`void`

#### Defined in

[core/src/pipeline/Pipeline.ts:50](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/pipeline/Pipeline.ts#L50)

## Properties

### frameRate

> **frameRate**: `number`

The frame rate of the pipeline.
This is the number of frames per second that the pipeline will run at.
e.g. 30 will run the pipeline at 30 frames per second.
The default value is 30.

#### Defined in

[core/src/pipeline/Pipeline.ts:28](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/pipeline/Pipeline.ts#L28)

***

### state

> **state**: [`PipelineState`](../enumerations/PipelineState.md)

The current state of the pipeline.

#### Defined in

[core/src/pipeline/Pipeline.ts:21](https://github.com/fibbojs/fibbo/blob/75419f67767d6eabd45ee5e8c5b1df60af1ac8f3/packages/core/src/pipeline/Pipeline.ts#L21)
