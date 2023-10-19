//Functions

function sayHello() {
  console.log("Hello Maverick")
}
// 1. define the function
// 2. give it a name
// 3. include the ()
// 4. Write our code inside the {}
// 5. call the function or invoke.


sayHello()

// Parameters/Arguments and Return Statements

function sayHelloTo(name) { //parameter 'name' is a variable that a funtion can use. inside the () its creatinga Variable
  console.log("Hello", name)
}
sayHelloTo("Maverick") //when you call or invoke its called an argument
sayHelloTo("Travis") // will dispay both

//return statments

function sum(a, b) { //you gave it a name and a var
  let total = a + b; //created another var that equals the total and added a,b 
  console.log(total) //printed the total of a,b in the terminal
 
  return total //ask it to produce a result of the function
}

// call and you have to make a variable, assign it whatever comes out of the above value.
let rtn = sum(5,7)
// If you don't have a return statement it will give an undefined error


function subtract(c, d, e) {
  let total = c - d - e;

  return total;
}

let result =subtract(25, 4, 10) //inside are var's so you cannot add "words" they have to match ther var's
console.log(result)

function area(width, height) {
  let total = width  * height;

  return total;
}

let result2 = area(23, 40)
console.log(result2, "Square Feet") //you can add "words" in the console log down here

let str =("hello\n")
str += ("\tIn your house") //the += ads a new part of the string \n adds a line break \t ads a tab

console.log(str) //you have to conosle log new variables
 

// Arrays

    //***Ice Cream Machine*****

const availableFlavors =["vanilla", "cookie dough", "chocolate", "rocky road", "strawberry", "brownie", "mint", "cookies and cream"]
  function findFlavor(flavorName) {
    if(availableFlavors.includes(flavorName)) { //not sure why you need to add the name
      //before the function when using inclues?
      console.log("We have your flavor");
  } 
    else {
    console.log("Sorry, we are out of that flavor")
  }
  }

  findFlavor("brownie")

const orderMaverick =["cookies and cream", "cookie dough", "chocolate", "rocky road", "strawberry"]

for(let i = 0; i < orderMaverick.length; i++) {
  findFlavor(orderMaverick[i]);
}


//console.log(availableFlavors[2]) //targeting with an index will print only the position you select
//in above it will be [2] which is position 3 because you start counting at 0

//***Definitions****
// .push - adds something to the end of the array / .pop removes something from the end of the array
// .upshift adds something to the beginning of the array/ .shift removes something from the front of the array
// .spice removes elements from and array and if necessary, inserts new elements in their place (add or remove)
    //---> first argument in spice is starting position
    //---> second argument in spice is # of elements to remove
    //---> third argument in spice is [optional] any elements you want to add in
// .slice - looks at a section of an array and makes a copy
    let nums = [0,1,2,3,4,5,6,7]
    console.log(nums.slice(4)) //<--upto index 4 it will copy or (4, 7) --> this would print 4,5,6 [up to 7 but not 7]
    //if you don't include a second number it will just go from your starting point to the end of the array

// For loops see loops.js