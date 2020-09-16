//
//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer

function squareDigits(num){
  //may the code be with you
  let currentNum = num,
      result = [],
      resultSting = ''
  while(currentNum >= 1) {
    result.unshift(currentNum%10)
    currentNum = Math.floor(currentNum/10)
  }
  while(result.length > 0) {
    let currnetPowNumber = 0
    currnetPowNumber = result.shift()
    resultSting += Math.pow(currnetPowNumber, 2)
  }
  return Number(resultSting)
}
