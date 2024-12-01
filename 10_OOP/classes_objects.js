// Object Literal

const user = {
    username: "harshit",
    loginCount: 10,
    signerIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);                   // memory ke andr jitna value hoga wo sara milega
        
    }
}

console.log(user.username);
console.log(user.getUserDetails);       // memory ke andr jitna value hoga wo sara milega
console.log(this);                  // { }  empty milega


// ------------------------------------------------------------------------------------------------

// Constructor Function -> ye allow krta hai ki aap ek hi object literal se multiple instaces bna sko

const promiseOne = new Promise()
const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username                 // aksar same name hi rkhte hai...isliye this. ka use krte hai     // jo left side hai wo variable hai     // right side wali jo hai wo pass kr ke de rhe hai
    // upr variable ka name bdl bhi skte hai lekin ye this. to ayega
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}


// "new" keyword
const userOne = new User("harshit", 15, true)
const userTwo = new User("amar", 10, false)         // yaha pr value overwrite ho jayegi bina "new" keyword ke
console.log(userOne);

