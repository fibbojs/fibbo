export interface Log {
  id: string
  content: any[]
  type: 'log' | 'warn' | 'error'
  timestamp: number
  showDetails: boolean
}

export class FLogger {
  private static __LOGS__: Log[] = []

  private static __CALLBACKS_ON_NEW_LOGS__: ((newLog: Log) => void)[] = []

  static log(...args: any[]) {
    const newLog = {
      id: Math.random().toString(36).substr(2, 9),
      content: args,
      type: 'log',
      timestamp: Date.now(),
      showDetails: false,
    } as Log
    this.__CALLBACKS_ON_NEW_LOGS__.forEach(callback => callback(newLog))
    this.__LOGS__.push(newLog)
  }

  static warn(...args: any[]) {
    const newLog = {
      id: Math.random().toString(36).substr(2, 9),
      content: args,
      type: 'warn',
      timestamp: Date.now(),
      showDetails: false,
    } as Log
    this.__CALLBACKS_ON_NEW_LOGS__.forEach(callback => callback(newLog))
    this.__LOGS__.push(newLog)
  }

  static error(...args: any[]) {
    const newLog = {
      id: Math.random().toString(36).substr(2, 9),
      content: args,
      type: 'error',
      timestamp: Date.now(),
      showDetails: false,
    } as Log
    this.__CALLBACKS_ON_NEW_LOGS__.forEach(callback => callback(newLog))
    this.__LOGS__.push(newLog)
  }

  static onLog(callback: (newLog: Log) => void) {
    this.__CALLBACKS_ON_NEW_LOGS__.push(callback)
  }

  static getLogs() {
    return this.__LOGS__
  }
}
