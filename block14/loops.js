// LOOPS //

//For Loop has 3 pieces (initialization; condition; afterthought) {....}

for(let countDown = 10; countDown > 0; countDown -= 10 ) {
  console.log("T -", countDown)
}

console.log("Blast Off!")

let total = 0
for(let i = 0; i < 10; i++) {
  total += i
}

console.log(total)

//While Loop - will execute as long as a condition is true

//create an array of random number

let random = Math.random() * 100 //a number between 0 and 100

let nums = []

for (let start = 0; start < Math.random() * 50 + 1; start++) {

  nums.push(Math.floor(Math.random() * 100))
}

console.log(nums)

//can't code fast enough to keep up lol. Will download the repo.