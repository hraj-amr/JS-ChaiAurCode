// for-each

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {        // val ke jagah kuch bhi rkh skte hai
    console.log(val);
} )

// using arrow function

coding.forEach( (item) => {
    console.log(item)
})

// agr function pahle se bna hua ho to

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)         // agr function pahle se bna hua hai to uska bs reference dena hai


// more parameters are there in forEach
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageName)
})