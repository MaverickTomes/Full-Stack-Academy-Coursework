console.log("connected")


const nums = ["bug", "in"];  //array to capture the input of numbers for the workshop

const form = document.querySelector('form');  // create a form and tag the form with the query selector
const output =document.getElementById("output"); 
const input = document.getElementById("newNumber") // create an input with an id in html

//creeate a div id called id = output
/*<div>
    <span>bug</span>
    <span>in</span>

</div> 
*/

//OddsEvents becomes an aray of <span> elements

function render () { //you can add this function and just call the render function at the bottom to repeat the map
    const OddsEvens = words.map((word) =>{
      const newSpan = document.createElement ("span");
      //span>
      newSpan.innerText = word;
      newSpan.style.marginRight = "5px"
      //add event listener to each span
      newSpan.addEventListener("click", removeNum);

      return newSpan
    })

    console.log(OddsEvens);
    output.replaceChildren(...OddsEvens); // use the spread operator
}

form.addEventListener("submit", handleSubmit);
newSpan.addEventListener("click", removeNum);

function handleSubmit (event) {
  event.preventDefault();

  //the .value goes and grabbed with what the user inputed and we 
  // can then do something with it.
  nums.push(input.value);
  console.log(input.value);

  render();
  // render again when the numbers change
}

function removeNum (event) {
  //use array.splice to remove
  console.log("this is where we remove numbers");
  const index = nums.indexOf(event.target.textContent);
  console.log(index)
  nums.splice(index, 1);
  console.log(nums)
  render ();
}
// render numers whent he page loads
render();