
const froyoFlavors = prompt(["Please choose from the following flavors:"], ["vanilla", "strawberry", "coffee"]);
let array = froyoFlavors.split(",")
console.table(array)

let shopMenu = {
  ourFlavors: ["vanilla", "Strawberry", "coffee"],
  ourCupSizes: ["small", "medium", "large"],
  ourConeSizes: ["small cone", "large cone"],
  ourPrices: ["small $2.50", "medium $3.50", "large $4.50"],
  ourDiscounts: "veterans 10% Off!",
}

//shopMenu.push("chocolate", "cookie dough"); <----this or  try below do not do anything to add flavors.
//froyoFlavors.push("chocolate", "cookiedough"); <--not sure why this doesn't work to add flavors.

/*for (let i = 0; i < array.length; i++) {
  return froyoFlavors                    <----not sure what code to add to display how many
                                              they ordered in the table or log.
}
*/ 
console.table(shopMenu)
console.log("These are your chosen flavors:" + " " +  froyoFlavors + " " + "Enjoy!");