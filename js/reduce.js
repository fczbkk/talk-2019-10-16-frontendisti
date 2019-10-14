module.exports = function reverse (input) {
  return input.split('').reduce((acc, char)=> char + acc, '')
}
