module.exports = function reverse (input) {
  let output = ''

  for (let character of input) {
    output = character + output
  }

  return output
}
