
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
console.table(shopMenu)
//shopMenu.push("chocolate", "cookie dough"); <----this or  try below do not do anything to add flavors.
//froyoFlavors.push("chocolate", "cookiedough"); <--not sure why this doesn't work to add flavors.

/*for (let i = 0; i < array.length; i++) {
  return froyoFlavors                    <----not sure what code to add to display how many
                                              they ordered in the table or log.
}
*/ 

const order = {};
for (let i = 0; i < froyoFlavors.length; i++) {
    if(froyoFlavors[i] in order) {
        order[froyoFlavors[i]] += 1;
    }
    else {
        order[froyoFlavors[i]] = 1;
    }
}              
return order;              
//}  <---^^^doesn't work and the console.log below is grayed out. Not sure what I am doing wrong.
console.table(froyoFlavors)
console.log("These are your chosen flavors:" + " " +  froyoFlavors + " " + "Enjoy!");