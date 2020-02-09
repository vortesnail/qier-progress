import QProgress from '../../src/index'

const header = document.querySelector('.header')

const qprogress: QProgress = new QProgress({
  parentNode: header
})

const startBtn = document.querySelector('#start-btn')
startBtn.addEventListener('click', () => {
  qprogress.start()
})

const setBtn = document.querySelector('#set-btn')
setBtn.addEventListener('click', () => {
  qprogress.set(0.2)
})

const incBtn = document.querySelector('#inc-btn')
incBtn.addEventListener('click', () => {
  qprogress.inc(0.2)
})

const doneBtn = document.querySelector('#done-btn')
doneBtn.addEventListener('click', () => {
  qprogress.finish()
})

setTimeout(() => {
console.log(qprogress.status)
}, 1000);