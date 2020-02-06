import QProgress from '../../src/index'

const qprogress: QProgress = new QProgress({
  minimum: 0.1,
  easing: 'linear'
})

qprogress.printConfig()