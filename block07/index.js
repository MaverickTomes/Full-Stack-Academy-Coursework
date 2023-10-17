 console.log('Hello');


 alert('ALERT') 
 
 //  <--use to add comments on one line in JS

 /*
 multi line comments
 */

 /*-----------Variables---------*/

 let favoriteNumber

 console.log(favoriteNumber)

 favoriteNumber = 3

 console.log(favoriteNumber)

 let myName = "Maverick"

 console.log(myName)

 myName = "Lindsey"

 console.log(myName)

/* 
Varible name convetions:
 
cammelCaseIsNormal <-----

snake_case_is_less_common
Note: trey to avoid really basic and short names
 ie. let x
     let a

 instead try full names
    let total
    let country
*/

let hello = "hello"
let world = "world"

console.log("hello" + "world" + "!")

console.log(`${hello}, ${world}!`)

let mystery = "some value" +37
let mystery2 = "true" + true +hello

console.log("The datatype of mystery:", typeof mystery)
console.log("The datatype of mystery:", typeof mystery2)
console.log(typeof (null +45))

console.log(typeof 42)
console.log(typeof typeof 42) //type of typeof is a string

console.log(123456 % 13)

console.log(1 + 4 /2) //follows order of operations rules PEMDAS (Parens, Exponent, Multiplication/Division, Addition, Subtraction)


let boolean = true

console.log(boolean)
console.log(!boolean)

//a string is a true value -NOTE: a string without characters is false/a string with characters is true

console.log(Boolean(boolean && "hello"))
console.log(Boolean(boolean && ""))

//Zero is a false
//Any other number is True (Includes negatives)

//Null and Undefined are also False

console.log("Not hello:", !"hello")
console.log("Not hello:", !!"hello") // the doube !! can transform anyting into a boolean

//Comparison

console.log("1" == 1)
console.log("1" === 1)
console.log(56 < 70)

//Guided Practice
console.log("Guided Practice")
console.log("steps for brushing your teeth")
console.log("Grab a toothbrush with your hand, Turn on the water,Rinse the brush part of the toothbrush with water.Turn off the water.Open the tube of tothpaste.Squeeze toothpaste on the brush part of the toothbrush.Start with the front teeth.Move in circular motions with the brush")

let numCows = 50

const x = "Hello World"
console.log("Hello World")
console.log("hello" + "Disney Land")

const numUmbrellas = 10 * 3

var num = 5 + 1
console.log(num)

const str = "Hello" + "Space" + "World"

let str1 = "Hello"
let str2 = "I am"
let str3 = "Josh"
alert(str1 + "" + str2 + "" + str3)