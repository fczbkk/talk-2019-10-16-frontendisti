module.exports = function (input) {
  let output = ''

  input
    .split('')
    .forEach((character) => output = character + output)

  return output
}
