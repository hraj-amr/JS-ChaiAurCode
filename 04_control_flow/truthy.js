const userEmail1 = "harshit@mail.com"

if (userEmail1){
    console.log("Got user email");              // prints this line
} else {
    console.log("Don't have user email");
}

const userEmail2 = ""

if (userEmail2){
    console.log("Got user email");
} else {
    console.log("Don't have user email");       // prints this line
}

const userEmail3 = []

if (userEmail3){
    console.log("Got user email");              // prints this line
} else {
    console.log("Don't have user email");       
}

// so, there are some truthy and falsy values

// falsy values are: 
// false, 0, -0, BigInt (0n), "", null, undefined, NaN (Not a Number)

// truthy values are: 
// "0" (string), 'false' (string), " ", [], {}, function(){} 

// to check an empty array

const userEmail = []
if (userEmail.length === 0){
    console.log("Array is empty")
}

// to check an empty object

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); 
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20         // null ya undefined ke bad jo value hoga wo print hoga

console.log(val1);

// Terniary Operator

// condition ? true : false

const TeaPrice = 200
iceTeaPrice <= 50 ? console.log("less than 50") : console.log("more than 50")