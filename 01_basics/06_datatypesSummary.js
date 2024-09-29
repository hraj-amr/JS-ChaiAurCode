// Primitive

// 7 types : String,  Number, Symbol, Boolean, Null, Undefined, BigInt

const score = 100;      // number
const scoreValue = 100.3;   // number

const LoggedIn = false;     //boolean
const Temp = null;          // null
let userEmail;         // undefined

const id = Symbol('123')        // symbol
const anotherid = Symbol('123')     // symbol
// Here, id and anotherid are not same bcoz SYMBOL is used to make value unique


const bigNumber = 435782462174982638n
// we use 'n' at the last for larger value than BigInt range

// Non-Primitive (Reference)
// Array, Objects, Functions

// Array
const heroes = ["A", "B", "C"]

//Objects
let myObj = {
    name: "Harshit",
    age : 20'
}

//Functions
const myFunction = Function(){
    console.log("Hello");
}