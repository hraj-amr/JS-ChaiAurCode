
// forEach bdle me kuch return nhi krta hai

const coding = [ "js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item                 // returns nothing
});
console.log(values)         // undefined


// Filter

const Nums1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oneNums = Nums1.filter( (num) => num > 4)        
console.log(oneNums)            // returns only no. which is greater than 4

// something from arrow functions
const Nums2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const twoNums = Nums2.filter( (num) => {
   return num > 4           // agr curly braces open krte hai to return keyword likhna pdega
})  
console.log(twoNums)



// agr filter use na kr ke forEach use krna hota

const Nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Nums3.forEach( (num) => {
    if(num>4){
        Nums3.push(num)
    }
})
console.log(Nums3)



// real life filter example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);