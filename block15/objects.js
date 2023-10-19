const shoe = {
  brand: "Converse",
  hasLaces: true,
  hasVelcro: false,
  color: "green",
  price: 60,
  activityType: "casual",
  isClosedToe: true,
  availableSizes: [5,6,8,9,10],
  style: "hightop",
  onSale: false,
}

console.log(shoe)

//dot vs bracket notation

console.log(shoe.brand);
console.log(shoe["brand"]);
//console.log(shoe[brand]); <--not defined not variable brand
const property = "price";
//console.log(shoe.property); <--will not work, has to match
console.log(shoe[property]);


shoe.isKnockoff = false;
shoe.discountPercentage = 0.25;
//shoe.availableSizes.push(7,11,12);
//shoe.availableSizes.sort();
shoe.availableSizes.splice(2,0,7);
shoe.availableSizes.push(11, 12);

//console.log(shoe); older way

//reassign a value to an existing key
shoe.onSale =true;
shoe["discountPercentage"] = 0.3;

//delete object porperties
delete shoe.hasVelcro;

console.log("-------")

//console.table(shoe); //to make a table of the properties. makes it easier to understand

//loops with objects

for(const key in shoe) {
  //console.log(key + ": " + shoe[key]);
  console.log(`${key} : ${shoe[key]}`);
}


//values and keys --These methods with return the keys and values into an array
console.log("-------")

console.log(Object.keys(shoe));
console.log(Object.values(shoe));




