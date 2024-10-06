// Objects

// Object literals
const mySym = Symbol("mykey1") 
const User = {
    name: "Harshit",
    "full name": "Harshit Raj",     // " " is used for string type
    age: 18,
    [mySym] : "mykey1",     // [] is used for symbol
    location: "Gaya",
    email: "amr@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// Accessing Objects
console.log(User.email)     // using dot
console.log(User["name"])     // using [""]
console.log(User["full name"])     // treat as string      // remove . after User
console.log(User[mySym])        // for symbol, use []


// Overwrite and Freeze
User.email = "harshit@google.com"       // Overwrite
// Object.freeze(User)              // commented due to output for functions
User.email = "harshit@microsoft.com"        // do not change due to freeze
console.log(User)


// Functions
User.greeting = function(){
    console.log("Hello")
}

User.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)      // String Interpolation 
}
console.log(User.greeting)     // function return back  // function execute nhi hoga bs reference ayega
console.log(User.greetingTwo())