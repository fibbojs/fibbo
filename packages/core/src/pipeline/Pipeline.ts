/// <reference lib="WebWorker" />

export enum PipelineCommands {
  START = 'start',
  STOP = 'stop',
}

export abstract class Pipeline {
  sw: DedicatedWorkerGlobalScope
  intervalId: ReturnType<typeof setInterval> | null = null
  frameRate: number = 30 // 30 FPS

  constructor(sw: DedicatedWorkerGlobalScope) {
    this.sw = sw
    this.sw.addEventListener('message', (event) => {
      this.handleMessage(event)
    })
  }

  abstract frame(): void

  handleMessage(event: MessageEvent) {
    const command = event.data

    if (command === PipelineCommands.START) {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId) // Ensure only one interval is running
      }
      this.intervalId = setInterval(() => {
        this.frame()
      }, 1000 / this.frameRate)
    }
    else if (command === PipelineCommands.STOP) {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId)
      }
      this.intervalId = null
    }
  }
}
