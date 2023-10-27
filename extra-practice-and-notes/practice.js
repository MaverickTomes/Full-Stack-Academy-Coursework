/*Define a function simpleSum that takes two numbers and returns the sum of those numbers.

simpleSum(10, 20); // => 30
simpleSum(5, 10); // => 15 */

function simpleSum (a, b) {
 let num =  a + b; 
return num;
 
}
console.log(simpleSum(10,20))


/*Default Greet
Define a function, defaultGreet, that takes a first and a last name. defaultGreet 
should return a string greeting for the given names. If the user does not define a last name, 
assume the last name is 'Doe'.

defaultGreet('Chaka', 'Khan'); // => 'Hi Chaka Khan!'
defaultGreet('John'); // => 'Hi John Doe!'*/

/*function defaultGreet (names) {      //mason showed me it should be firstname, lastname.
  return names = ("chaka" + "Khan");
}
console.log(defaultGreet("hi", names)) */

function defaultGreet(firstname, lastname){
  if (!lastname) {
    lastname = "doe" 
  }

return ("hi" + " " + firstname + " " + lastname + "!");
}

console.log(defaultGreet("Maverick", "Tomes"));
console.log(defaultGreet("Maverick"))

/* Tax Calculator
Define a function taxCalculator that accepts the price of an item and a state. 
taxCalculator should return the after-tax cost of the item, 
assuming NY's tax is 4% and NJ's sales tax is 6.625%.

taxCalculator(100, 'NY'); // => 104
taxCalculator(100, 'NJ'); // => 106.625 */

function taxCalculator(price, state) {

  let nyTax = 0.04
  let njTax = 0.0625

  let taxAmount = 0
  if (state === "NY") {
    taxAmount = price * nyTax
  }
  else if (state === "NJ");
  taxAmount = price * njTax

  let afterTax = taxAmount + price
  return  afterTax

}
console.log(taxCalculator(100, "NY"))

/*My Mnemonic
Write a function myMnemonic that accepts up to four strings. 
myMnemonic should return a new string of the first characters for each string argument.

Note that the user may not pass in all four strings!

myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
myMnemonic('We', 'Eat', 'Eggs'); // => WEE */

function myMnemonic(str1, str2, str3, str4) {
 let fistLetter = " "

 if (str1) {
  fistLetter += str1[0]
  }

  if (str2) {
    fistLetter += str2[0]
    }

    if (str3) {
      fistLetter += str3[0]
      }

      if (str4) {
        fistLetter += str4[0]
        }
        return fistLetter
      }
    
function Mnemonic(str1, str2, str3, str4) {
  let newArray = [str1, str2, str3, str4];
  //map over the array
  return newArray.map(element => {if(element){return element[0]}}).join("")
  // save the values as variables by adding return

}
console.log(Mnemonic("must", "accept", "sugar", "happiness"));
console.log(Mnemonic("we", "eat", "eggs"))

//let answer = Mnemonic("must", "accept", "sugar", "happiness")

//console.log(answer)