/// <reference lib="WebWorker" />

import { PhysicWorker } from './PhysicWorker'

export type {}
declare let self: DedicatedWorkerGlobalScope

new PhysicWorker(self)
