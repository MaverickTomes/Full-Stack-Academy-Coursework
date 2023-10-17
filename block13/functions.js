//definition//
function sayHello() {
  console.log("hello world");
  console.group("This is confusing");
}

const sayHelloArrow = () =>{
  console.log("hello arrow");
  console.group("This is confusing");
}

function greetByName(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
  //add a space after hello so there is a space with the name//
}

function addNumbers(a, b) {
  const sum = a + b;
  return sum;

}

//area of a rectangle//
//function areaRectangle(height, width) {
  //const area = height * width;
  //return area;
//}

const areaRectangle = (height, width) => {
  const area = height * width;
  return area;
  console.log("this won't show up");  //wont show up if after the return function
}

//calling the function//
sayHello();
sayHelloArrow();
greetByName("Maverick", "Tomes");
const result = addNumbers(2, 3);
console.log(result)
const result2 = areaRectangle(4, 5);
console.log(result2)