

let nums = [42, 32, 67, 23, 1, 12]

function cb(value, index) {
  console.log("value:", value, "\tindex:", index)
}

nums.forEach(cb) //faster easier way to write the above loop

/*nums.forEach((value, index) => {
  console.log("value:", value, "\tindex:", index)
}) */

//.Find

let foundItem = nums.find((value) => {
  return value === 0
})

console.log(foundItem)
//Note: if found returns that item. Else, it returns undefined. The above would be undefined.

let foundIndex =nums.findIndex((value) => { //finding the second instance of more than one duplicate
  return value === 42
})
console.log(foundIndex)

// .map  //

let newNumsArray = nums.map((value,index) =>{ //nuance: with one line of code you do not need
  //the curly brackes. curly braces implies that there are multiple lines of code, so
  //you wouldn't need to add the return function it will do it automatically.
  return value * 2
})
console.log(newNumsArray)
console.log(nums)  //creating new array with map and the *2 doubles the old values
//a map can be used to take a bunch of strings and turned into objects

// .filter  //
//a filter needs to return a boolean value, whether or not the individaul element passes
//through a filter or not.

const odds = nums.filter((value) => value % 2 === 1) //only keep the odd numbers
console.log("odds:", odds)

// .splic //
// returns a copy of a portion of an array froma a start indec to NOT including the end index.

// .reduce //

let answer = nums.reduce((total,current) => total + current)

console.log("Reduced to a total:", answer)

const orders = [{ type: "banna", price: 1.99, quantity: 2},
{ type: "strawberry", price: 3.99, quantity: 1},
{ type: "chocolate", price: 2.99, quantity: 3},
{ type: "coffee", price: 4.99, quantity: 2},]

let finalTotal = orders.reduce((acc, cur) => {
  let curTotalPrice = cur.price * cur.quantity
  acc += curTotalPrice
  return acc
}, 0) //the 0 at the end starts the loop count at zero

console.log(finalTotal)



