[@fibbojs](/api/index) / [core](/api/core) / ThrottledPipeline

# Class: `abstract` ThrottledPipeline

A throttled pipeline is similar to a StandardPipeline (also based on [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)), but it only calls the frame method if enough time has passed.
This means the given frameRate is not guaranteed, but it will try to match it as close as possible.

## Extends

- [`Pipeline`](Pipeline.md)

## Constructors

### new ThrottledPipeline()

> **new ThrottledPipeline**(): [`ThrottledPipeline`](ThrottledPipeline.md)

#### Returns

[`ThrottledPipeline`](ThrottledPipeline.md)

#### Overrides

[`Pipeline`](Pipeline.md).[`constructor`](Pipeline.md#constructors)

#### Defined in

[core/src/pipeline/ThrottledPipeline.ts:15](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/ThrottledPipeline.ts#L15)

## Methods

### frame()

> `abstract` **frame**(`delta`): `void`

The frame method is the main method that is called by the pipeline.
It should implement the desired behavior of the pipeline.

#### Parameters

• **delta**: `number`

#### Returns

`void`

#### Inherited from

[`Pipeline`](Pipeline.md).[`frame`](Pipeline.md#frame)

#### Defined in

[core/src/pipeline/Pipeline.ts:40](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/Pipeline.ts#L40)

***

### start()

> **start**(): `void`

Start the pipeline

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`start`](Pipeline.md#start)

#### Defined in

[core/src/pipeline/ThrottledPipeline.ts:20](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/ThrottledPipeline.ts#L20)

***

### stop()

> **stop**(): `void`

Stop the pipeline

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`stop`](Pipeline.md#stop)

#### Defined in

[core/src/pipeline/ThrottledPipeline.ts:25](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/ThrottledPipeline.ts#L25)

## Properties

### frameRate

> **frameRate**: `number`

The frame rate of the pipeline.
This is the number of frames per second that the pipeline will run at.
e.g. 30 will run the pipeline at 30 frames per second.
The default value is 30.

#### Inherited from

[`Pipeline`](Pipeline.md).[`frameRate`](Pipeline.md#framerate)

#### Defined in

[core/src/pipeline/Pipeline.ts:28](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/Pipeline.ts#L28)

***

### lastTime

> **lastTime**: `number`

The last time the frame was called.
This is used to determine if enough time has passed to call the frame method again.

#### Defined in

[core/src/pipeline/ThrottledPipeline.ts:13](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/ThrottledPipeline.ts#L13)

***

### state

> **state**: [`PipelineState`](../enumerations/PipelineState.md)

The current state of the pipeline.

#### Inherited from

[`Pipeline`](Pipeline.md).[`state`](Pipeline.md#state)

#### Defined in

[core/src/pipeline/Pipeline.ts:21](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/Pipeline.ts#L21)
