const user = {
    username: "harshit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);      // hme jb bhi current context ko refer krna hai to hme 'this' keyword ko use krna hoga
        console.log(this);          // to show current context
    }
}

// user.welcomeMessage()                 // harshit, welcome to website
// user.username = "amar"                // yaha hmne context change kr diya
// user.welcomeMessage()                 // amar, welcome to website

// console.log(this)           // {} -> empty as we are in node environment (browser me alag output ayega)

function chai(){
    console.log(this);         
}

chai()                      // yaha bahot sari values hme milti hai

// function chai(){
//     let username = "harshit"
//     console.log(this.usernmae);         
// }
// chai()          // unefined -> bcoz function ke andr aa ke 'this' use nhi kr skte


// function ko aur kaise declare kr skte hai arrow function ke through:

// const chai = function(){
//     let username = "harshit"
//     console.log(this.username);     // undefined
// }


// Arrow function
const chai = function() => {
    let username = "harshit"
    console.log(this.username);     
}

// chai()

////////// Pure Arrow function ////////////


// Basic arrow function
// const addTwo = (n1, n2) => {         // arrow function (type 1)
//     return n1 + n2               // agr curly braces me wrap kiya to return keyword likhna pdega
// }                            
console.log(addTwo(5,6))


// Implicit return
// const addTwo = (n1, n2) => n1 + n2      // arrow function (type 2)

console.log(addTwo(5,6))

// const addTwo = (n1, n2) => (n1 + n2)        // agr parenthesis me wrap kiya to return keyword nhi likhna pdega
console.log(addTwo(5,6))

// parenthesis lagane ka fayda
// abhi tk to hm numbers return kr rhe the, ab oject return krna hai

// const addTwo = (n1, n2) => {username: "harshit"}         // undefined
const addTwo = (n1, n2) => ({username: "harshit"})          // object return krane ke liye parenthesis lagana jruri hai

