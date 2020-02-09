import {
  middleNum,
  addClass,
  toBarPerc,
  css,
  queue,
  getPositioningCSS,
  barPositionCSS,
  remove
} from '../src/helpers'

describe('helpers', () => {
  describe('middleNum', () => {
    test('should return the middle number if n in middle', () => {
      const n = 2
      const min = 1
      const max = 3

      const result = middleNum(n, min, max)

      expect(result).toBe(2)
    })

    test('should return the middle number if n < min', () => {
      const n = 1
      const min = 2
      const max = 3

      const result = middleNum(n, min, max)

      expect(result).toBe(2)
    })

    test('should return the middle number if n > max', () => {
      const n = 4
      const min = 1
      const max = 3

      const result = middleNum(n, min, max)

      expect(result).toBe(3)
    })
  })

  describe('addClass', () => {
    test('should add class to Element but origin class is empty', () => {
      const divDom = document.createElement('div')
      const className = 'test-class'

      addClass(divDom, className)

      expect(divDom.className).toBe('test-class')
    })

    test('should add class to Element', () => {
      const divDom = document.createElement('div')
      const className = 'test-class'
      divDom.classList.add('origin-class')

      addClass(divDom, className)

      expect(divDom.className).toBe('origin-class test-class')
    })

    test('should not add repeat class to Element', () => {
      const divDom = document.createElement('div')
      const className = 'test-class'
      divDom.classList.add('test-class')

      addClass(divDom, className)

      expect(divDom.className).toBe('test-class')
    })
  })

  describe('toBarPerc', () => {
    test('should return a percentage string', () => {
      const a = 0.24

      const result = toBarPerc(a)

      expect(result).toBe('-76')
    })
  })

  describe('css', () => {
    test('should add css property to Element', () => {
      const div = document.createElement('div')
      const cssProperty = {
        width: '100px',
        height: '100px',
        '-ms-transform': 'translate(0, 0)'
      }

      css(div, cssProperty)

      expect(window.getComputedStyle(div, null).width).toBe('100px')
      expect(window.getComputedStyle(div, null).height).toBe('100px')
    })
  })

  describe('queue', () => {
    test('should queues a function to be executed', () => {
      let a = 2
      const func1 = () => {
        a = a + 1
      }
      const func2 = () => {
        a = a * a
      }

      queue(func1)
      queue(func2)

      expect(a).toBe(9)
    })
  })

  describe('getPositioningCSS', () => {
    test('should return positioning CSS rule translate3d', () => {
      document.body.style.webkitTransform = 'rotate(90deg)'
      document.body.style.webkitPerspective = '20px'

      const result = getPositioningCSS()

      expect(result).toBe('translate3d')
    })
  })

  describe('barPositionCSS', () => {
    test('should returns the correct CSS object when position is translate3d', () => {
      const n = 0.4
      const speed = 400
      const easing = 'ease'
      const position = 'translate3d'

      const css = barPositionCSS(n, speed, easing, position)

      expect(css).toEqual({
        transform: 'translate3d(-60%, 0, 0)',
        transition: 'all 400ms ease'
      })
    })

    test('should returns the correct CSS object when position is translate', () => {
      const n = 0.4
      const speed = 400
      const easing = 'ease'
      const position = 'translate'

      const css = barPositionCSS(n, speed, easing, position)

      expect(css).toEqual({
        transform: 'translate(-60%, 0)',
        transition: 'all 400ms ease'
      })
    })

    test('should returns the correct CSS object when position is margin', () => {
      const n = 0.4
      const speed = 400
      const easing = 'ease'
      const position = 'margin'

      const css = barPositionCSS(n, speed, easing, position)

      expect(css).toEqual({
        'margin-left': '-60%',
        transition: 'all 400ms ease'
      })
    })
  })

  describe('remove', () => {
    test('should remove the element when parameter is className', () => {
      document.documentElement.classList.add('qprogress-busy')
      document.body.classList.add('qprogress-custom-parent')
      const div = document.createElement('div')
      const divChild = document.createElement('div')
      div.appendChild(divChild)
      div.setAttribute('id', 'qprogress')
      document.body.appendChild(div)

      remove('body')

      expect(document.documentElement.className.indexOf('qprogress-busy')).toBe(-1)
      expect(document.body.className.indexOf('qprogress-custom-parent')).toBe(-1)
      expect(document.querySelector('#qprogress')).toBeNull()
    })

    test('should remove the element when parameter is Element', () => {
      document.documentElement.classList.add('qprogress-busy')
      const parentNode = document.createElement('div')
      parentNode.classList.add('qprogress-custom-parent')
      const div = document.createElement('div')
      const divChild = document.createElement('div')
      div.appendChild(divChild)
      div.setAttribute('id', 'qprogress')
      parentNode.appendChild(div)

      remove(parentNode)

      expect(document.documentElement.className.indexOf('qprogress-busy')).toBe(-1)
      expect(parentNode.className.indexOf('qprogress-custom-parent')).toBe(-1)
      expect(document.querySelector('#qprogress')).toBeNull()
    })

    test("should not remove the element when Element ' class is not correct", () => {
      document.documentElement.classList.add('qprogress-busy-wrong')
      const parentNode = document.createElement('div')
      parentNode.classList.add('qprogress-custom-parent')
      const div = document.createElement('div')
      const divChild = document.createElement('div')
      div.appendChild(divChild)
      div.setAttribute('id', 'qprogress')
      parentNode.appendChild(div)

      remove(parentNode)

      expect(document.documentElement.className.indexOf('qprogress-busy')).toBe(0)
      expect(parentNode.className.indexOf('qprogress-custom-parent')).toBe(-1)
      expect(document.querySelector('#qprogress')).toBeNull()
    })
  })
})
