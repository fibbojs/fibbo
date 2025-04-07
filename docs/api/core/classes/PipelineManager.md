[@fibbojs](/api/index) / [core](/api/core) / PipelineManager

# Class: PipelineManager

The pipeline manager is responsible for managing different pipelines in a scene.
It handles the execution of standard, throttled, and interval pipelines.
It also manages the auto loop feature, which allows pipelines to be executed automatically at a specified frame rate.
A pipeline manager is created automatically when a scene is created.

## Constructors

### new PipelineManager()

> **new PipelineManager**(`options`): [`PipelineManager`](PipelineManager.md)

#### Parameters

• **options**: [`PipelineManagerOptions`](../interfaces/PipelineManagerOptions.md)

#### Returns

[`PipelineManager`](PipelineManager.md)

#### Defined in

[core/src/pipeline/PipelineManager.ts:40](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L40)

## Methods

### addIntervalPipeline()

> **addIntervalPipeline**(`pipeline`): `void`

Add an interval pipeline.

#### Parameters

• **pipeline**: [`IntervalPipeline`](IntervalPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:182](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L182)

***

### addStandardPipeline()

> **addStandardPipeline**(`pipeline`): `void`

Add a standard pipeline.

#### Parameters

• **pipeline**: [`StandardPipeline`](StandardPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:142](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L142)

***

### addThrottledPipeline()

> **addThrottledPipeline**(`pipeline`): `void`

Add a throttled pipeline.

#### Parameters

• **pipeline**: [`ThrottledPipeline`](ThrottledPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:162](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L162)

***

### removeIntervalPipeline()

> **removeIntervalPipeline**(`pipeline`): `void`

Remove an interval pipeline.

#### Parameters

• **pipeline**: [`IntervalPipeline`](IntervalPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:191](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L191)

***

### removeStandardPipeline()

> **removeStandardPipeline**(`pipeline`): `void`

Remove a standard pipeline.

#### Parameters

• **pipeline**: [`StandardPipeline`](StandardPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:151](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L151)

***

### removeThrottledPipeline()

> **removeThrottledPipeline**(`pipeline`): `void`

Remove a throttled pipeline.

#### Parameters

• **pipeline**: [`ThrottledPipeline`](ThrottledPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:171](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L171)

***

### start()

> **start**(): `void`

Start all pipelines.

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:124](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L124)

***

### stop()

> **stop**(): `void`

Stop all pipelines.

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:133](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L133)

## Properties

### \_\_ANIMATION\_FRAME\_REQUEST\_ID\_\_

> **\_\_ANIMATION\_FRAME\_REQUEST\_ID\_\_**: `number`

Animation frame request ID

#### Defined in

[core/src/pipeline/PipelineManager.ts:33](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L33)

***

### autoLoop

> **autoLoop**: `boolean`

Auto loop flag.

#### Defined in

[core/src/pipeline/PipelineManager.ts:38](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L38)

***

### intervalPipelines

> **intervalPipelines**: [`IntervalPipeline`](IntervalPipeline.md)[]

#### Defined in

[core/src/pipeline/PipelineManager.ts:28](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L28)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene associated with the pipeline manager.

#### Defined in

[core/src/pipeline/PipelineManager.ts:23](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L23)

***

### standardPipelines

> **standardPipelines**: [`StandardPipeline`](StandardPipeline.md)[]

#### Defined in

[core/src/pipeline/PipelineManager.ts:26](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L26)

***

### throttledPipelines

> **throttledPipelines**: [`ThrottledPipeline`](ThrottledPipeline.md)[]

#### Defined in

[core/src/pipeline/PipelineManager.ts:27](https://github.com/fibbojs/fibbo/blob/65626b456ab47d7e61b23a8dd1be9f399238b0f1/packages/core/src/pipeline/PipelineManager.ts#L27)
