/**
 * Take the middle value from three numbers.
 */

export function middleNum(n: number, min: number, max: number): number {
  if (n < min) return min
  if (n > max) return max
  return n
}

/**
 * Adds a class to an element.
 */

export function addClass(element: HTMLElement, name: string): void {
  const oldList: string = classList(element)
  const newList: string = oldList + name

  if (hasClass(oldList, name)) return

  // Trim the opening space because of <function>classList.
  element.className = newList.substring(1)
}

/**
 * Gets a space separated list of the class names on the element.
 * The list is wrapped with a single space on each end to facilitate finding
 * matches within the list.
 */

function classList(element: HTMLElement): string {
  return (' ' + ((element && element.className) || '') + ' ').replace(/\s+/gi, ' ')
}

/**
 * Determines if an element or space separated list of class names contains a class name.
 */

function hasClass(list: string, name: string): boolean {
  return list.indexOf(' ' + name + ' ') >= 0
}

/**
 * Converts a percentage (`0..1`) to a bar translateX
 * percentage (`-100%..0%`).
 */

export function toBarPerc(n: number): string {
  return String((-1 + n) * 100)
}

/**
 * Applies css properties to an element, similar to the jQuery
 * css method.
 *
 * While this helper does assist with vendor prefixed property names, it
 * does not perform any manipulation of values prior to setting styles.
 */

export const css = (function() {
  const cssPrefixes: string[] = ['Webkit', 'O', 'Moz', 'ms']
  const cssProps: any = {}

  function camelCase(str: string): string {
    return str.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase()
    })
  }

  function getVendorProp(name: string): string {
    const style = document.body.style
    if (name in style) return name

    let i: number = cssPrefixes.length
    const capName: string = name.charAt(0).toUpperCase() + name.slice(1)
    let vendorName

    while (i--) {
      vendorName = cssPrefixes[i] + capName
      if (vendorName in style) return vendorName
    }

    return name
  }

  function getStyleProp(name: any): string {
    name = camelCase(name)
    return cssProps[name] || (cssProps[name] = getVendorProp(name))
  }

  function applyCss(element: HTMLElement, prop: any, value: string): void {
    prop = getStyleProp(prop)
    element.style[prop] = value
  }

  return function(element: HTMLElement, properties: any): void {
    const args: IArguments = arguments
    let prop: any
    let value: string

    if (args.length === 2) {
      for (prop in properties) {
        value = properties[prop]
        if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value)
      }
    } else {
      applyCss(element, args[1], args[2])
    }
  }
})()

/**
 * Queues a function to be executed.
 */

export const queue = (function() {
  const pending: any[] = []

  function next() {
    const fn: Function = pending.shift()
    if (fn) {
      fn(next)
    }
  }

  return function(fn: Function) {
    pending.push(fn)
    if (pending.length === 1) next()
  }
})()

/**
 * Determine which positioning CSS rule to use.
 */

export function getPositioningCSS(): string {
  // Sniff on document.body.style
  const bodyStyle: CSSStyleDeclaration = document.body.style

  // Sniff prefixes
  const vendorPrefix =
    'WebkitTransform' in bodyStyle
      ? 'Webkit'
      : 'MozTransform' in bodyStyle
      ? 'Moz'
      : 'msTransform' in bodyStyle
      ? 'ms'
      : 'OTransform' in bodyStyle
      ? 'O'
      : ''

  if (vendorPrefix + 'Perspective' in bodyStyle) {
    // Modern browsers with 3D support, e.g. Webkit, IE10
    return 'translate3d'
  } else if (vendorPrefix + 'Transform' in bodyStyle) {
    // Browsers without 3D support, e.g. IE9
    return 'translate'
  } else {
    // Browsers without translate() support, e.g. IE7-8
    return 'margin'
  }
}

/**
 * Returns the correct CSS for changing the bar's
 * position given an n percentage, and speed and ease from Settings
 */

export function barPositionCSS(n: number, speed: number, ease: string, position: string): any {
  let barCSS: any

  if (position === 'translate3d') {
    barCSS = { transform: `translate3d(${toBarPerc(n)}%, 0, 0)` }
  } else if (position === 'translate') {
    barCSS = { transform: `translate(${toBarPerc(n)}%, 0)` }
  } else {
    barCSS = { 'margin-left': `${toBarPerc(n)}%` }
  }

  barCSS.transition = `all ${speed}ms ${ease}`

  return barCSS
}

/**
 * Removes the element. Opposite of render().
 */

export function remove(parent: string | HTMLElement): void {
  removeClass(document.documentElement, 'qprogress-busy')
  if (typeof parent === 'string' && parent.length !== 0) {
    removeClass(document.querySelector(parent) as HTMLElement, 'qprogress-custom-parent')
  } else {
    removeClass(parent as HTMLElement, 'qprogress-custom-parent')
  }
  const progress: HTMLElement = document.getElementById('qprogress')!
  progress && removeElement(progress)
}

/**
 * Removes a class from an element.
 */

function removeClass(element: HTMLElement, name: string): void {
  const oldList: string = classList(element)
  let newList: string = ''

  if (!hasClass(oldList, name)) return

  // Replace the class name.
  newList = oldList.replace(' ' + name + ' ', ' ')

  // Trim the opening and closing spaces.
  element.className = newList.substring(1, newList.length - 1)
}

/**
 * Removes an element from the DOM.
 */

function removeElement(element: HTMLElement): void {
  element && element.parentNode && element.parentNode.removeChild(element)
}
