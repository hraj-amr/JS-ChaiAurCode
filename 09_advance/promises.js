// Creating Promise

const promiseOne = new Promise(function(resolve, reject){
        // do an async task
        // DB calls, Cryptography, network
        setTimeout(function(){
            console.log('Async task is complete')
            resolve()               // yaha pr resolve connect hua hai .then() se
        }, 1000)
})

// Consuming Promise

promiseOne.then(function(){             // .then() ka connection hai resolve ke saath 
        console.log("Promise Consumed")
})

// bina variable me hold kiye bhi promise ko create kr skte hai

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()      
    }, 1000)
}).then(function(){
    console.log("Promise Consumed again")
})

// another 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Harshit", email: "hraj@google.com"})
    },1000)
})

promiseThree.then(function(user){
        console.log(user);              // jo bhi parameter upr resolve me denge wo yaha mil jata hai
})

// another

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Harshit", password: "123"})
        }else{
            reject('ERROR: Something went wrong')           // else case me reject ayega
        }
    }, 1000)
})

promiseFour.then((user) => {
        console.log(user);
        return user.username
}).then((username)=> {                  // chaining  // jitna chahe utna .then() use kr skte hai
    console.log(username)
}).catch(function(error){               // .catch() reject se connected hai 
    console.log(error);
}).finally(() => console.log("The is promise is either resolved or rejected"))          // ye hmesha execute hoga



// another

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Harshit", password: "123"})
        }else{
            reject('ERROR: Five went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){                     // thodi der wait krta hai kaam ke hone ka agr wo jata hai tb hi wo aage bdhta hai wrna wahi wo error deta hai
    try {
        const response = await promiseFive                      // async await directly error ko handle nhi kr skte hai isliye try - catch ka help lenge
    console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// something for next topic

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             const data = await response.json()
//             console.log(data);
//     } catch (error) {
//         console.log("error")
//     }
// }
// getAllUsers()




// same kaam ko .then(), .catch() format likhna ho to       // ------Fetch------ 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))