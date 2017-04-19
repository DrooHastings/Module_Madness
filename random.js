// Module One - Generate a Random Number
// The first module will export a function that returns a random number after taking in a min and max value as arguments (hint: you can use random number functions from previous assignments). When you call this module, use 100 as your min, and 1000000 as your max.
//
function randomNumber (min, max ){
  var rand = Math.random() * (1 + max - min) + min;
  return rand;


}



module.exports = randomNumber; //when we require this module, we get this function
