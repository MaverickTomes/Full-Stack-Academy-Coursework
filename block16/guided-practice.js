
const items = [
  { id: 1, name: "foo", price: 7 },
  { id: 2, name: "bar", price: 6 },
  { id: 3, name: "bazz", price: 9 },
  { id: 3, name: "quq", price: 13 },
];

const promptName = prompt('enter a name of an item, we will try and find it', 'foo');

let foundItem = items.find((item) => item.name === promptName)
if(foundItem){
  console.log('we found it');
  console.log(foundItem);
}
else {
  console.log(`we could not find an item with the name ${promptName}`);
}

//const found = items.find(item => item.array === name);

/*const foundItem = items.find((item) => {
  return item === na
})
*/

console.log("found item:", foundItem)

let keyForMapping = prompt('choose a key, either id, name, or price so we we can use map to display the values for that key', 'price');



/*
keyForMapping = "price"
const items = [
  { id: 1, name: "foo", price: 7 },
  { id: 2, name: "bar", price: 6 },
  { id: 3, name: "bazz", price: 9 },
  { id: 3, name: "quq", price: 13 },
];

const map =[7,6,9,13]
*/

const mappedValues = items.map(item => item[keyForMapping]);
console.log("Mapped Values", mappedValues)


keyForMapping = prompt('choose a key, either id, name, or price so we we can use map to display the values for that key', 'price');

const reducedValue = items.reduce((acc,cur) =>{
  acc += cur[keyForMapping]
  return acc
}, 0)
