const name = 'harshit'
const repoCount = 2

// console.log(name + repoCount + "Value")

console.log(`name is ${name} and count is ${repoCount}`);

// declare

const gameName = new String('harshit-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "      amar     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harshit.com/harshit%20raj"
console.log(url.replace('%20','-'))

console.log(url.includes('harshit'))

console.log(gameName.split('-'))


