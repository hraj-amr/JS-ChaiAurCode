// arrays -2

// push()
const anime = ['Deathnote', 'Solo Leveling', 'Your Name']
const cartoon = ['Doraemon', 'Shinchan', 'Nobita']

anime.push(cartoon)     // anime array ke andar hi cartoon array ek single element bn jayega

//concat
const all = anime.concat(cartoon)       // anime array aur cartoon array ko combine krke new array bnayega
console.log(all);

// spread
const all_new = [...anime, ...cartoon]      // output similar to concat
console.log(all_new)        

// flat()
const new_array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]]
const real = new_array.flat(Infinity)       // Depth -> Infinity (jitne depth hai sare flat krdo) 
console.log(real);

//isArray()
console.log(Array.isArray("Harshit"))       // returms in boolean  // search for an array

//from()
console.log(Array.from("Harshit"))      // gives all letters as an element of an array
console.log(Array.from({name: "harshit"}))      // output - []      //specify krna hoga ki keys or values kisse array banana hai

//Array.of
let a = 100
let b = 200
let c = 300
console.log(Array.of(a, b, c));