// Nested Function

function one(){
    const username = "Harshit"

    function two(){             // ek func ke andr dusra func
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);       // ye apne scope se bahar hai to ye error dega
    two()                       // func two func one ko access kr skta hai
}
one()                           // ye scope se bahar hai to access nhi hoga

if(true){
    const username = "Harshit"
    if(username === "Harshit"){
        const website = " youtbe"
        console.log(username + website);
    }
    // console.log(website);       // ye scope se bahar hai to access nhi hoga
}
// console.log(username);          // ye bhi scope se bahar ha to access nhi hoga

// +++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++++++++++++++++

// function banane ke techniques

function addone(num){           // isko declaration se pahle bhi access kr skte hai
    return num + 1
}
addone(6)

// Hoisting - jaha pe execution context bnta hai ki yaha pe aap func access nhi kr skte bina uske declaration ke

const addTwo = function(num){       // yaha pr function ko declare krne ke sath variable bhi hold kiya hai
    return num + 2
}
addTwo(6)       // isko declaration ke pahle access nhi kr skte


// As an example: 
addone(6)               // declaration ke pahle access kr rhe hai
function addone(num){
    return num + 1
}
