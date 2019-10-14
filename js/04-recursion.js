module.exports = function reverse (input) {
  return (input === '')
    ? ''
    : reverse(input.substr(1)) + input.charAt(0)
}
