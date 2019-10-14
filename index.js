const methods = {
  'array': require('./js/01-array.js'),
  'foreach': require('./js/02-foreach.js'),
  'reduce': require('./js/03-reduce.js'),
  'recursion': require('./js/04-recursion.js'),
  'for-of': require('./js/05-for-of.js'),
  'loop': require('./js/06-loop.js'),
  'while': require('./js/07-while.js'),
  'loop-bodyless': require('./js/08-loop-bodyless.js')
}

const input = 'Riki Fridrich'
const count = 10000000
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
