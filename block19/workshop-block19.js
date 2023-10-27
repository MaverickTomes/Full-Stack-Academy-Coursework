console.log("WELCOME DEVELOPERS")
console.log("-------------------")

console.log(document)

window.prompt("Welcome Freelancers! Type the word yes if you agree to our fake terms:")


let freelancerList = [
  {
    name: "Alice",
    Occupation: "Writer",
    Price: 30
  },
  {
    name: "Bob",
    Occupation: "Teacher",
    Price: 50,
  },
  {
    name: "Carol",
    Occupation: "Programmer",
    Price: 70,
  },
]

function renderList () {
let freelancer = document.getElementById("freelancer")

let averagePrice = freelancerList.length / Price;

let listDiv = document.createElement("div");
listDiv.id = "list"

listDiv.innerHTML = 
`<h1> ${"Freelancer Forum"}</h1>`
`<h2> ${"The average starting price is"} $${averagePrice}</h2>`
`<h3> ${"AVAILABLE FREELANCERS:"}</h3>`

let listNames = document.createElement("ul")
listNames.innerHTML = 
`<li>${Name}</li>`
`<li>${Occupation}</li>`  //not sure why I cannot imput the values from the object above to this list??
`<li>${Price}</li>`


freelancer.appendChild(listDiv);
freelancer.appendChild(listNames);

}

renderList () //not sure why this doesn't show up in my html

//feel like I made some good progress but still have to learn alot.