[@fibbojs](/api/index) / [core](/api/core) / IntervalPipeline

# Class: `abstract` IntervalPipeline

Unlike the Standard and Throttled pipelines, the Interval pipeline runs at a fixed frame rate.
It relies on [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) to call the frame method at a fixed interval.

## Extends

- [`Pipeline`](Pipeline.md)

## Constructors

### new IntervalPipeline()

> **new IntervalPipeline**(): [`IntervalPipeline`](IntervalPipeline.md)

#### Returns

[`IntervalPipeline`](IntervalPipeline.md)

#### Overrides

[`Pipeline`](Pipeline.md).[`constructor`](Pipeline.md#constructors)

#### Defined in

[core/src/pipeline/IntervalPipeline.ts:14](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/pipeline/IntervalPipeline.ts#L14)

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

[core/src/pipeline/Pipeline.ts:40](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/pipeline/Pipeline.ts#L40)

***

### start()

> **start**(): `void`

Start the pipeline

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`start`](Pipeline.md#start)

#### Defined in

[core/src/pipeline/IntervalPipeline.ts:18](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/pipeline/IntervalPipeline.ts#L18)

***

### stop()

> **stop**(): `void`

Stop the pipeline

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`stop`](Pipeline.md#stop)

#### Defined in

[core/src/pipeline/IntervalPipeline.ts:27](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/pipeline/IntervalPipeline.ts#L27)

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

[core/src/pipeline/Pipeline.ts:28](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/pipeline/Pipeline.ts#L28)

***

### intervalId

> **intervalId**: `Timeout`

The interval ID returned by [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval).

#### Defined in

[core/src/pipeline/IntervalPipeline.ts:12](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/pipeline/IntervalPipeline.ts#L12)

***

### state

> **state**: [`PipelineState`](../enumerations/PipelineState.md)

The current state of the pipeline.

#### Inherited from

[`Pipeline`](Pipeline.md).[`state`](Pipeline.md#state)

#### Defined in

[core/src/pipeline/Pipeline.ts:21](https://github.com/fibbojs/fibbo/blob/a8d7b4720cdb2648ddcb2159cdc3e3671c6aee98/packages/core/src/pipeline/Pipeline.ts#L21)
