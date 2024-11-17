// for-in loop

// Iterating Objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);               // prints keys like js, cpp etc
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);     // prints keys and values
}

// arrays

const programming =["js", "rb", "cpp", "py", "java"]
for (const key in programming) {
    console.log(key);                    // prints keys of array like 0, 1, 2, 3, 4
}

for (const key in programming) {
    console.log(programming[key]);      // prints values of keys of array like js, rb, cpp etc
}

// NOTE - Map is not iteratable using for-in loop
