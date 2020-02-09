/**
 *  Author： vortesnail
 *  License： MIT
 *  Github： https://github.com/vortesnail
 */
import { Configuration } from './types'
import {
  middleNum,
  addClass,
  toBarPerc,
  css,
  queue,
  getPositioningCSS,
  barPositionCSS,
  remove
} from './helpers'
import './index.css'

/********************************************************
 *  Usage:                                              *
 *    const qprogress = new QProgress({ minimum: 0.1 }) *
 *    qprogress.start()                                 *
 *    // some code...                                   *
 *    qprogress.finish()                                *
 ********************************************************/

class QProgress {
  public version: string = '0.0.1'
  // Configuration
  private config: Configuration
  // Last number
  public status: number | null = null

  constructor(config?: Configuration) {
    this.config = {
      minimum: 0.12,
      height: 2,
      color: '#1890ff',
      colorful: false,
      easing: 'ease',
      speed: 400,
      positionUsing: '',
      trickle: true,
      trickleSpeed: 400,
      parentNode: 'body',
      barSelector: '[role="bar"]',
      pegSelector: '[role="peg"]',
      template: '<div class="bar" role="bar"><div class="peg" role="peg"></div></div>',
      ...config
    }
  }

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     qprogress.set(0.4)
   *     qprogress.set(1.0)
   */

  public set(n: number): void {
    const started: boolean = this.isStarted()

    n = middleNum(n, this.config.minimum!, 1)
    this.status = n === 1 ? null : n

    const { barSelector, speed: speedCopy, easing, parentNode } = this.config
    let { positionUsing } = this.config

    let progress = this.render(!started)
    const bar: HTMLElement | null = progress.querySelector(barSelector!)
    const speed: number = speedCopy!
    const ease: string = easing!

    progress.offsetWidth /* Compulsory repainting */

    queue(function(next: Function) {
      // Set positionUsing if it hasn't already been set
      if (positionUsing === '') positionUsing = getPositioningCSS()

      // Add transition
      css(bar!, barPositionCSS(n, speed, ease, positionUsing!))

      if (n === 1) {
        // Fade out
        css(progress, {
          transition: 'none',
          opacity: 1
        })

        progress.offsetWidth /* Compulsory repainting */

        setTimeout(function() {
          css(progress, {
            transition: `all ${speed}ms linear`,
            opacity: 0
          })
          setTimeout(function() {
            remove(parentNode as HTMLElement)
            next()
          }, speed)
        }, speed)
      } else {
        setTimeout(next, speed)
      }
    })
  }

  /**
   * Checks if the progress is started, `0.0` to `1.0`: `true`, `null`: `false` .
   */

  private isStarted(): boolean {
    return typeof this.status === 'number'
  }

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     qprogress.start()
   *
   */
  public start(): void {
    const _this = this
    const { trickle, trickleSpeed } = this.config
    if (!this.status) this.set(0)

    const work = function() {
      setTimeout(function() {
        if (!_this.status) return
        _this.trickle()
        work()
      }, trickleSpeed)
    }

    if (trickle) work()
  }

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `finish()` makes some placebo effect of some realistic motion.
   *
   *     qprogress.finish()
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     qprogress.finish(true)
   */

  public finish(force?: boolean): void {
    if (!force && !this.status) return

    this.inc(0.3 + 0.5 * Math.random())
    this.set(1)
  }

  private trickle(): void {
    this.inc()
  }

  /**
   * Increments by a random amount.
   */

  public inc(amount?: number) {
    let n: number | null = this.status

    if (!n) {
      return this.start()
    } else if (n > 1) {
      return
    } else {
      if (typeof amount !== 'number') {
        if (n >= 0 && n < 0.2) {
          amount = 0.1
        } else if (n >= 0.2 && n < 0.5) {
          amount = 0.04
        } else if (n >= 0.5 && n < 0.8) {
          amount = 0.02
        } else if (n >= 0.8 && n < 0.99) {
          amount = 0.005
        } else {
          amount = 0
        }
      }

      n = middleNum(n + amount, 0, 0.994)
      return this.set(n)
    }
  }

  /**
   * Checks if the progress bar is rendered.
   */

  private isRendered(): boolean {
    return !!document.getElementById('qprogress')
  }

  /**
   * renders the progress bar markup based on the `template` setting.
   */

  private render(fromStart: boolean): HTMLElement {
    if (this.isRendered()) return document.getElementById('qprogress')!

    addClass(document.documentElement, 'qprogress-busy')

    const { template, barSelector, pegSelector, parentNode, height, color, colorful } = this.config

    const progress: HTMLElement = document.createElement('div')
    progress.id = 'qprogress'
    progress.innerHTML = template!

    const bar: HTMLElement | null = progress.querySelector(barSelector!)
    const peg: HTMLElement | null = bar!.querySelector(pegSelector!)
    const perc: string = fromStart ? '-100' : toBarPerc(this.status || 0)
    const parent: HTMLElement =
      typeof parentNode === 'string'
        ? (document.querySelector(parentNode) as HTMLElement)
        : (parentNode as HTMLElement)

    css(bar!, {
      height: `${height}px`,
      backgroundColor: color,
      transition: 'all 0 linear',
      transform: `translate3d(${perc}%, 0, 0)`
    })

    if (parent !== document.body) {
      addClass(parent, 'qprogress-custom-parent')
      if (!colorful) {
        css(peg!, {
          boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`
        })
      } else {
        bar && addClass(bar, 'colorful-bar')
      }
    }

    parent.appendChild(progress)
    return progress
  }
}

export default QProgress
