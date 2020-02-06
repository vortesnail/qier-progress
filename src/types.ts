/*
 *  config: Configuration
 */
export type EasingTimeFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'

export interface Configuration {
  minimum?: number
  easing?: EasingTimeFunction
  speed?: number
  trickle?: boolean
  trickleSpeed?: number
  parentNode?: any
}
