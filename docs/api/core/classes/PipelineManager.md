[@fibbojs](/api/index) / [core](/api/core) / PipelineManager

# Class: PipelineManager

The pipeline manager is responsible for managing pipelines.

## Constructors

### new PipelineManager()

> **new PipelineManager**(`options`): [`PipelineManager`](PipelineManager.md)

#### Parameters

• **options**: [`PipelineManagerOptions`](../interfaces/PipelineManagerOptions.md)

#### Returns

[`PipelineManager`](PipelineManager.md)

#### Defined in

[core/src/pipeline/PipelineManager.ts:37](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L37)

## Methods

### addIntervalPipeline()

> **addIntervalPipeline**(`pipeline`): `void`

Add an interval pipeline.

#### Parameters

• **pipeline**: [`IntervalPipeline`](IntervalPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:179](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L179)

***

### addStandardPipeline()

> **addStandardPipeline**(`pipeline`): `void`

Add a standard pipeline.

#### Parameters

• **pipeline**: [`StandardPipeline`](StandardPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:139](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L139)

***

### addThrottledPipeline()

> **addThrottledPipeline**(`pipeline`): `void`

Add a throttled pipeline.

#### Parameters

• **pipeline**: [`ThrottledPipeline`](ThrottledPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:159](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L159)

***

### removeIntervalPipeline()

> **removeIntervalPipeline**(`pipeline`): `void`

Remove an interval pipeline.

#### Parameters

• **pipeline**: [`IntervalPipeline`](IntervalPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:188](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L188)

***

### removeStandardPipeline()

> **removeStandardPipeline**(`pipeline`): `void`

Remove a standard pipeline.

#### Parameters

• **pipeline**: [`StandardPipeline`](StandardPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:148](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L148)

***

### removeThrottledPipeline()

> **removeThrottledPipeline**(`pipeline`): `void`

Remove a throttled pipeline.

#### Parameters

• **pipeline**: [`ThrottledPipeline`](ThrottledPipeline.md)

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:168](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L168)

***

### start()

> **start**(): `void`

Start all pipelines.

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:121](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L121)

***

### stop()

> **stop**(): `void`

Stop all pipelines.

#### Returns

`void`

#### Defined in

[core/src/pipeline/PipelineManager.ts:130](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L130)

## Properties

### \_\_ANIMATION\_FRAME\_REQUEST\_ID\_\_

> **\_\_ANIMATION\_FRAME\_REQUEST\_ID\_\_**: `undefined` \| `number`

Animation frame request ID

#### Defined in

[core/src/pipeline/PipelineManager.ts:30](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L30)

***

### autoLoop

> **autoLoop**: `boolean`

Auto loop flag.

#### Defined in

[core/src/pipeline/PipelineManager.ts:35](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L35)

***

### intervalPipelines

> **intervalPipelines**: [`IntervalPipeline`](IntervalPipeline.md)[]

#### Defined in

[core/src/pipeline/PipelineManager.ts:25](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L25)

***

### scene

> **scene**: [`FScene`](FScene.md)

The scene associated with the pipeline manager.

#### Defined in

[core/src/pipeline/PipelineManager.ts:20](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L20)

***

### standardPipelines

> **standardPipelines**: [`StandardPipeline`](StandardPipeline.md)[]

#### Defined in

[core/src/pipeline/PipelineManager.ts:23](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L23)

***

### throttledPipelines

> **throttledPipelines**: [`ThrottledPipeline`](ThrottledPipeline.md)[]

#### Defined in

[core/src/pipeline/PipelineManager.ts:24](https://github.com/fibbojs/fibbo/blob/ab9e99b1ad4aed8e9a4d4f1553a9997678261528/packages/core/src/pipeline/PipelineManager.ts#L24)
