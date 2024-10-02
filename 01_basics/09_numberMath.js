const score = 400
// console.log(score);

const balance = new Number(100) // specifically defined as number
// console.log(balance)

// console.log(balance.toString())  // changed to string
// console.log(balance.toString().length); // string prototype used

// console.log(balance.toFixed(2));  //2 represents the no. of 0 after decimal

const otherNumber = 23.8965
// console.log(otherNumber.toPrecision(3))

const otherNum = 123.8965
// console.log(otherNum.toPrecision(3))
// precision gives priority to no. before decimal and then round off aac to parameter

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))   // en-IN is used for position of commas acc to india


// ++++++++++++++++++++ Maths +++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4))   // abs = absolute value
console.log(Math.round(4.6))    // round = round off
console.log(Math.ceil(5.6))     // ceil = round off to upper value
console.log(Math.floor(5.6))    // floor = round off to lower value
console.log(Math.max(45,34,78,99))      // maximum value
console.log(Math.min(45,34,78,99))      // minimum value

console.log(Math.random())      // always gives random value between 0 and 1
console.log(Math.random()*10)   // to get number between 0 to 9
console.log((Math.random()*10)+1)     // to avoid 0.0...  case
console.log(Math.floor((Math.random()*10)+1))     // to get a single digit value round off to lower

// to get value between specific numbers

max = 6
min = 1

console.log(Math.floor(Math.random() * (max - min + 1)) + min)