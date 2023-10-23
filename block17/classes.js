Math.random()

// WHAT IS MATH?

console.log(typeof Math)

console.log(Math.PI)

let myMath = {
  PI: 3.14159265,
  sum: function (a, b) {
    return a + b
  },
}

console.log(myMath.PI)

console.log(myMath.sum(5, 7))

// ----------------

let myString = 'Hello'

let myStringObject = {
  0: 'H',
  1: 'e',
  2: 'l',
  3: 'l',
  4: 'o',
  toString: function () {
    let str = ''
    for (let i = 0; i < myStringObject.length; i++) {
      str += myStringObject[i]
    }
    return str
  },
  length: 5,
}

console.log(myStringObject)
console.log(myStringObject.toString())

/*

  Class to represent my Candy

*/

let myCandyBag = {
  bag: [
    'tootsie-roll',
    'dots',
    'butterfinger',
    'lolipop',
    'kit-kat',
    'jolly-rancher',
    'reeses',
    '3 musketeers',
    '100 grand',
  ],
  doubleCandy: function () {
    // "This" referrs to the specific context of the method
    //  in a method, the context is the Object we are inside of

    let doubleBag = this.bag.concat(this.bag)

    this.bag = doubleBag
  },
  testMethod1: () => {
    console.log(this.bag)
  },
  testMethod2: function () {
    console.log(this.bag)
  },
}

console.log('Original bag:', myCandyBag.bag)
myCandyBag.doubleCandy()
console.log('New Bag', myCandyBag.bag)

console.log('THE THIS KEYWORD:', this)

myCandyBag.testMethod1()
myCandyBag.testMethod2()

/*
  Candy bag class

    - constructor:  sets the initial values of the class when created with the "new keyword"
    - methods: other functions for the class
*/
class CandyBag {
  constructor(candy) {
    // SETUP (initializing variables/data, and general setup)
    this.bag = candy
  }

  doubleCandy() {
    let doubleBag = this.bag.concat(this.bag)
    this.bag = doubleBag
  }
}

// "new" creates a new instance of the class, with its own bag and methods that work on it
// Values in the ( ) when creating a class go to the constructor method
let elissasBagOfCandy = new CandyBag(['skittles', 'm&ms'])
let aaronsBagOfCandy = new CandyBag(['snickers', 'reeses'])

elissasBagOfCandy.doubleCandy()
elissasBagOfCandy.doubleCandy()
console.log(elissasBagOfCandy)
console.log(aaronsBagOfCandy)