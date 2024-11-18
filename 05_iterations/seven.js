const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num + 10 )
console.log(newNums);



// chaining methods
// ek method ke andr alag alag methods ko use kr skte hai ye hi chaining hai
const Nums1 = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )

console.log(Nums1)