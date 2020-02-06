/**
 *  Author： vortesnail
 *  License： MIT
 *  Github： https://github.com/vortesnail
 */
import { Configuration } from './types'

class QProgress {
  version: string = '0.0.1'
  private config: Configuration
  private defaultConfig: Configuration = {
    minimum: 0.08,
    easing: 'ease',
    speed: 200,
    trickle: true,
    trickleSpeed: 200,
    parentNode: 'body'
  }

  constructor(config: Configuration) {
    this.config = {
      ...this.defaultConfig,
      ...config
    }
  }

  // test fn
  printConfig(): void {
    console.log(this.config)
  }
}

export default QProgress
