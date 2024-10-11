let a = 10
const b = 20
var c = 30
console.log(a)      // 10
console.log(b)      // 20
console.log(c)      // 30 

// {}   -> scope

if (true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(a)      // error kyuki 'a' scope ke andar define let se hai 
console.log(b)      // error kyuki 'b' scope ke andar define const se hai
console.log(c)      // 30 kyuki 'c' var se define hai   // yahi pr prblm hoti hai yaha bhi error ana chahiye tha


// {} -> iske andar jo hoga wo hoga block scope aur bahar wala hoga global scope
// global scope ki sari value block scope me available rhegi lekin block scope ki value global scope me available nhi hogi
// lekin 'var' is chij ko follow nhi krta hai isliye ise use nhi krte hai
