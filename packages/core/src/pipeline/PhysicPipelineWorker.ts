/// <reference lib="WebWorker" />

import { PhysicPipeline } from './PhysicPipeline'

export type {}
declare let self: DedicatedWorkerGlobalScope

new PhysicPipeline(self)
