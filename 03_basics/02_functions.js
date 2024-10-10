// Functions with object

function calculateCartPrice(...num1){       // ... -> Rest Operator
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 30000))       // output in array


function calculateCartPrice(val1, val2, ...num1){       // yaha val1 me 1st avlue, val2 me 2nd value aur ...num1 me baki value jayega
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 30000))   


const user = {
    username: "harshit",
    price: 299
} 


function handleObject(anyobject){           // anyobject ke jagah kuch bhi name de skte hai
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

// direct pass
handleObject({
    username: "amar",
    price: 499
})

// array ke liye

const myNewArray = [200, 400, 100, 600]
function returnSecVal(getArray){            // ek func define krenge jo ek array accept krta hai aur uska second value return krega
    return getArray[1]          // [] ke andar jo return krna hai wo likhenge
}
console.log(returnSecVal(myNewArray));
// OR 
console.log(returnSecVal([200, 400, 600, 900]));