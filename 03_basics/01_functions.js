function sayMyName(){
    console.log("H")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("T")
}
// sayMyName   // function reference
// sayMyName()     // function execute

function addTwoNumbers(num1, num2){         // here, num1 and num2 are parameters
    console.log(num1 + num2);
}
// addTwoNumbers(3, 4)     // 7                // here, 3,4 are arguments
// addTwoNumbers(3, "4")       // 34
// addTwoNumbers(3, "a")       // 3a
// addTwoNumbers(3, null)      // 3

// const result = addTwoNumbers(3, 5)      // output - 8


// console.log("Result: ", result)         // output - undefined

// to avoid undefined

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
    console.log("Harshit")      // unreachable code  // return ke baad kuch bhi print nhi hoga 
}
// OR
function addTwoNumbers(num1, num2){
    return num1 + num2 
}

function loginUserMessgae(username){
    return `${username} just logged in`
}

// console.log(loginUserMessgae("Harshit"))        // Harshit just logged in
// console.log(loginUserMessgae(""))       // just logged in
// console.log(loginUserMessgae())         // undefined just logged in


// using if-statement

function loginUserMessgae(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// OR (equivalent code)
function loginUserMessgae(username){
    if(!username){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}