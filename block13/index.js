/*Extra paractice with conditionals and functions "If statements"

let age = 45
const day = "friday"

if (age <= 2) {
  console.log("Free")
}
else if (age <= 12) {
  console.log("$5 Dollars")
}
else if (age > 65) {
  console.log("$6 Dollars")
} else {
  console.log("$8 Dollars")
}

if (day === "tuesday") {
  console.log("50% Discount")
} else {
  console.log("Sorry, no discount today")
}
*/

//

function sayHello() {
  console.log("I'm suprised you can spell Python....")
};

sayHello();

function greetByName(firstName, lastName) {
  console.log("Hello" + " " + firstName + " " + lastName);
};

function addNumbers(a,b) {
  console.log("added numbers ..")
  const sum = a + b;
  return sum;
};

greetByName("Maverick", "Tomes")

const result = addNumbers(2,3);
console.log(result);