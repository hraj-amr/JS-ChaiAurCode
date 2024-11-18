// reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

console.log(myTotal);



// using arrow function
const myTotal1 = myNums.reduce( (acc, curr) => acc + curr, 0 )
console.log(myTotal1)


// more example

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "cpp course",
        price: 2999
    }
]
const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(priceToPay)