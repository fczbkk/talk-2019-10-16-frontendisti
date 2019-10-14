module.exports = function (input) {
  return input
    .split('')
    .reduce((acc, char)=> char + acc, '')
}
