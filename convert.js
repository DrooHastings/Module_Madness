// Module Two - Convert a Number to a USD Value
// The second module should accept a number and convert it to a USD value. You can find good implementations of this online.
var random = require ('./random');


function convertNumber (){
  number=random(100, 1000000).toFixed(2);
  number=parseFloat(number).toLocaleString();
  return number;
}

module.exports = convertNumber;
