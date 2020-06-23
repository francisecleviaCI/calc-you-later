/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate = require('./calculate-back-end.js')

let input1 = getInput(0)  //Number
let input2 = getInput(1)  //Operator
let input3 = getInput(2)  //Number




let result = calculate(input1, input3, input2);
console.log(result)


/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
