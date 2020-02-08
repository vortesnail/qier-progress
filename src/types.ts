/*
 *  config: Configuration
 */
export type EasingTimeFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'

export interface Configuration {
  minimum?: number
  height?: number
  color?: string
  colorful?: boolean
  easing?: EasingTimeFunction
  speed?: number
  positionUsing?: string
  trickle?: boolean
  trickleSpeed?: number
  barSelector?: string
  pegSelector?: string
  parentNode?: string | Element
  template?: string
}
