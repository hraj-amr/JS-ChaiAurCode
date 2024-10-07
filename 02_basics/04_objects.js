const User = new Object();      // Singleton object
// const User = {}              // Non Singleton object
                                // Both have same output
User.id = "475bcd"
User.name = "amar"
User.isLoggedIn = false

// console.log(User)

// Nested object

const RegularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harshit",
            lastname: "Raj"
        }
    }
}
//                   Access through Dot Notation
// console.log(RegularUser.fullname?.userfullname)

// ? is used for protection :  agar fullname exist na krta ho to : agr ye value hai to kriye


// Object Combining

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "c"}
// const obj3 = {obj1, obj2}       // isme array wali prblm ayegi ( object ke andar object )
// const obj3 = Object.assign(obj1, obj2)          // ye bhi sahi hai
// const obj3 = Object.assign({}, obj1, obj2)      // its good to give {}, jitni bhi value hai sb combine ho jayegi (optional parameter hai)
const obj3 = {...obj1, ...obj2}         // ye sbse jyda krenge hmlog

// console.log(obj3)


// Array of Objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(User)
console.log(Object.keys(User))      // output ka datatype array ayega
console.log(Object.values(User))
console.log(Object.entries(User))       // har key values ko array bana deta hai


console.log(User.hasOwnProperty('isLoggedIn'))      // search for properties (boolean type output)