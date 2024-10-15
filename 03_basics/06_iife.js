// Immediately Invoked Function Expressions (IIFE)

// global scope ke pollution se problem hoti hai kai baar, to usi pollution ko hatane ke liye IIFE use krte hai


(function chai(){
    console.log(`DB CONNECTED`);
})();                               // use ; to end the context

// IIFE
// ()()                     // 1st () - jaha function ki definition likhenge,  2nd () -> execution call



// named IIFE


( function aurcode()  {
    console.log(`DB CONNECTED TWO`)
})();                                    // code end krne ke explicitly ; use krna hoga

( () => {
    console.log(`DB CONNECTED TWO`)
})();


// arrow function ke tarike se
// simple IIFE
// ye ek variable bhi expect krta hai
((name) => {                                         
    console.log(`DB CONNECTED TWO ${name}`);         
})('harshit');           // pass the variable