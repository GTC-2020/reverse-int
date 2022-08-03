module.exports = function reverse (n) {
  let input = '' + Math.abs(n);
  let output = "";
  for(let i = input.length; i > 0; i--){
    output += input[i - 1];
  }
  return Number(output);
  
}
