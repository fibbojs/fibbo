/// <reference lib="WebWorker" />

import { RenderPipeline } from './RenderPipeline'

export type {}
declare let self: DedicatedWorkerGlobalScope

new RenderPipeline(self)
