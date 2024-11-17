// for of

// syntax
// for (const element of object) {
    
// }



// ["", "", ""]         // strings
// [{}, {}, {}]         // objects



const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each of char is ${greet}`);
    
}


// Maps         // values unique hogi, aur jis order me hmne enter kiya hai usi order me hme milega

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")          // execute nhi hoga kyuki ye unique value nhi rha, pahle se enter kiya hai upr

console.log(map)

// map me loop

for (const key of map) {            // array ke form me pura map print hoga
    console.log(key);           
}

for (const [key, value] of map) {               // [] ye ek syntax hai       // destructing of array
    console.log(key, ':-', value); 
}


// object me for-of loop

const myObject ={
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'PUBG'
}

// for (const [key, value] of myObject) {
    // console.log(key, ':-', value);          // error, kyuki objects ko for-of se iterate nhi kra skte
// }

