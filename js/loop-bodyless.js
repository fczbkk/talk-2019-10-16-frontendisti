module.exports = function reverse (input) {
  let output = ''
  for (let i = input.length - 1; i >= 0; output += input[i--]) {}
  return output;
}
