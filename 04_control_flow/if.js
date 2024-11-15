// User login status and other variables

const isUserLoggedIn = true;                // Indicates if the user is logged in
const temperature = 41;                     // Current temperature

// If statement to check temperature
// use of if-else statements

if ( temperature === 40 ){                  // Checks if temperature is exactly 40
    console.log("less than 50");            // Print if condition is true
} else {
    console.log("temperature is greater than 50");              // Print if condition is false
}
console.log("Execute");                     // ye hmesha print hoga, condition se mtlb nhi hai


// Comparison operators used for various conditions: <, >, <=, >=, ==, !=, ===, !==

// Score variable and check
const score = 200;                      


// global scope and block scope with 'let' or 'const' 

if (score > 100) { 
    let power = "fly";
    console.log(`User power: ${power}`); 
}                                                        // block scope
// console.log(`User power: ${power}`);                 // Uncomment krne pr error dega    // agr 'var' use krte to ye bhi access hota jo nhi krna hai

// Balance variable
const balance = 1000; // User's balance

// single line execution
if (balance > 500) console.log("test"), console.log("test2");           // unreadable code or immature code // avoid this type of writing


// if else if
// multiple condition checks

if (balance < 500) {
    console.log("less than 500"); 
} else if (balance < 750) {
    console.log("less than 750"); 
} else if (balance < 900) {
    console.log("less than 900"); 
    console.log("greater than or equal to 900"); 
}


// Real life use of multiple condition

const userLoggedIn = true; 
const debitCard = true; 
const loggedInFromGoogle = false; 
const loggedInFromEmail = true; 
// using AND operator
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");         // saare conditions ko true rhna jruri hai
}

// using OR operator
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");              // kisi ek condition ka bhi true rhna jruri hai
}