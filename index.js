const methods = {
  'array': require('./js/array'),
  'for-of': require('./js/for-of'),
  'foreach': require('./js/foreach'),
  'loop': require('./js/loop'),
  'loop-bodyless': require('./js/loop-bodyless'),
  'recursion': require('./js/recursion'),
  'reduce': require('./js/reduce'),
  'while': require('./js/while')
}

const input = 'Riki Fridrich'

const count = 1000000

const results = {}

Object.keys(methods).forEach((method) => {
  const start = (new Date()).getTime()
  for (let i = 0; i < count; i++) {
    methods[method](input)
  }
  const end = (new Date()).getTime()
  results[method] = end - start
})

console.table(results)
