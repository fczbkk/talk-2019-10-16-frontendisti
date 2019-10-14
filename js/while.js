module.exports = function reverse (input) {
  let output = ''
  let pointer = input.length

  while (pointer--) {
    output += input[pointer]
  }

  return output
}
