// for

for (let i = 0; i <= 10; i++) {
    const element = i;              // is element ka isi block scope ke andar access rhega
    console.log(element);    
}


// if statement under for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 6){
        console.log("6 is best number");
    }
    console.log(element);    
}


// nested for loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value: ${j} and inner loop ${i}`);
        
    }
}

// printing table
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j);
        
    }
}

// array
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue

// break
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break;                      // loop yahi pr khtm hoga aur block scope se bahar chla jayega
    }
    console.log(`value of i is ${i}`);
}

// continue
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue;                   // loop aage continue hoga
    }
    console.log(`value of i is ${i}`);
}