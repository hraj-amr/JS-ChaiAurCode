// arrays

const arr = [0, 1, 2, 3, 4, 5]      // written in square brackets
const myArr = [0, 1, "harshit", true, [2, 3, 4, 5]]     // can contains different datatypes and also array
const Arr = new Array(0,1,2,3,4,5)      // can also declare using keyword

// Methods in Arrays

// arr.push(6)     // add new element at last
// arr.pop()       // last value of the array gets deleted
// arr.unshift(7)      // insert new element at start and shift rest elements towards right 
// arr.shift()         // deletes the first element
// console.log(arr.includes(4))     // search for an element ( returns in boolean)
// console.log(arr.indexOf(4))      // search for index


const newArr = arr.join()       // converts to string
console.log(newArr)


// slice, splice

console.log("Before", arr);
const myn1 = arr.slice(1,3)         // 3rd index not included       // original array do not change
console.log(myn1)
console.log("After", arr)           // original array did not change

const myn2 = arr.splice(1,3)        // 3rd index included       // original array gets changed
console.log(myn2)
console.log("After splice", arr)        // original array changed